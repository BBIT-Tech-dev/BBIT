/* ==========================================================================
   BBIT Backend — Supabase auth + Disciple profile + BEE admissions funnel
   --------------------------------------------------------------------------
   These two values are the PUBLIC Supabase config (project URL + anon key).
   They are designed to be exposed in client code; real security is enforced
   by Row-Level Security policies on the `disciples` table. The secret
   service_role key is NEVER used here.
   Requires the Supabase UMD script loaded BEFORE this file:
     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
   ========================================================================== */

const SUPABASE_URL = 'https://chtowxefjpxzidqnczff.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNodG93eGVmanB4emlkcW5jemZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwMzg4MDYsImV4cCI6MjA5NzYxNDgwNn0.l2Ps1N4Cn5rKGzLBpf1sE8Ws9CDLXdDzi_N1Ql_67gw';

(function () {
  if (typeof supabase === 'undefined' || !supabase.createClient) {
    console.error('[BBIT] Supabase UMD library not loaded before bbit-backend.js');
    window.BBIT = { ready: Promise.reject(new Error('supabase-js not loaded')) };
    return;
  }

  const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // ---- Exam date: next Sunday 1:00 PM IST (shared "wave" for everyone) ----
  function nextSundayExamIST() {
    const now = new Date();
    // Wall-clock values as seen in IST (used only to read weekday / Y-M-D).
    const istNow = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const dow = istNow.getDay();            // 0 = Sunday
    let add = (7 - dow) % 7;
    if (add === 0) add = 7;                 // if today is Sunday, use NEXT Sunday
    const target = new Date(istNow);
    target.setDate(istNow.getDate() + add);
    // 13:00 IST == 07:30 UTC. Build the exact UTC instant.
    const examUtc = Date.UTC(target.getFullYear(), target.getMonth(), target.getDate(), 7, 30, 0);
    return new Date(examUtc);
  }

  function formatExamLabel(d) {
    return new Date(d).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata', weekday: 'long', day: 'numeric',
      month: 'long', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true
    }) + ' IST';
  }

  function makeDiscipleId() {
    return 'BBIT-4D-' + Math.random().toString(36).slice(2, 6).toUpperCase();
  }

  // ---- Auth ----
  async function signUp(email, password, displayName) {
    const { data, error } = await sb.auth.signUp({ email, password });
    if (error) throw error;
    // If email-confirmation is OFF, a session exists immediately.
    if (!data.session) {
      // Try an immediate sign-in (works when confirmation is disabled).
      const si = await sb.auth.signInWithPassword({ email, password });
      if (si.error) {
        throw new Error('Account created, but email confirmation appears to be ON in Supabase. Disable it (Auth → Providers → Email → uncheck "Confirm email") for instant login.');
      }
    }
    await ensureProfile(displayName);
    return getProfile();
  }

  async function signIn(email, password) {
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
    await ensureProfile();
    return getProfile();
  }

  async function signOut() { await sb.auth.signOut(); }

  async function getUser() {
    const { data } = await sb.auth.getUser();
    return data ? data.user : null;
  }

  // ---- Profile ----
  async function ensureProfile(displayName) {
    const user = await getUser();
    if (!user) return null;
    const { data: existing } = await sb.from('disciples').select('*').eq('user_id', user.id).maybeSingle();
    if (existing) {
      if (displayName && !existing.display_name) {
        await sb.from('disciples').update({ display_name: displayName }).eq('user_id', user.id);
      }
      return existing;
    }
    const row = {
      user_id: user.id,
      display_name: displayName || (user.email || 'Anonymous Disciple').split('@')[0],
      disciple_id: makeDiscipleId(),
      application_tries: 0,
      status: 'pending'
    };
    const { data, error } = await sb.from('disciples').insert(row).select().single();
    if (error) throw error;
    return data;
  }

  async function getProfile() {
    const user = await getUser();
    if (!user) return null;
    const { data } = await sb.from('disciples').select('*').eq('user_id', user.id).maybeSingle();
    return data || (await ensureProfile());
  }

  // ---- The rigged BEE application: accepted on the 2nd or 3rd try ----
  async function applyForBEE(formMeta) {
    const profile = await getProfile();
    if (!profile) throw new Error('Not signed in.');

    // Already in. Don't re-roll.
    if (profile.status === 'accepted') {
      return { accepted: true, alreadyAccepted: true, tries: profile.application_tries, profile };
    }

    const patch = { application_tries: (profile.application_tries || 0) + 1 };

    // Decide the secret "you get in on try N" target once, where N ∈ {2,3}.
    let acceptOn = profile.accept_on_try;
    if (!acceptOn) {
      acceptOn = Math.random() < 0.5 ? 2 : 3;
      patch.accept_on_try = acceptOn;
    }

    const accepted = patch.application_tries >= acceptOn;
    if (accepted) {
      patch.status = 'accepted';
      patch.exam_date_ist = nextSundayExamIST().toISOString();
    } else {
      patch.status = 'rejected';
    }
    if (formMeta && formMeta.dept) patch.department = formMeta.dept;

    const { data, error } = await sb.from('disciples')
      .update(patch).eq('user_id', profile.user_id).select().single();
    if (error) throw error;

    return { accepted, tries: data.application_tries, acceptOn, profile: data };
  }

  // Save BEE exam result to the disciple row (best-effort; needs the exam
  // columns added via ALTER TABLE — fails gracefully if they're missing).
  async function saveExam(fields) {
    const profile = await getProfile();
    if (!profile) throw new Error('Not signed in.');
    try {
      const { data, error } = await sb.from('disciples')
        .update(fields).eq('user_id', profile.user_id).select().single();
      if (error) throw error;
      return data;
    } catch (e) {
      console.warn('[BBIT] saveExam failed (did you run the exam-columns ALTER TABLE?):', e.message);
      return null;
    }
  }

  // Live session readiness
  const ready = sb.auth.getSession().then(({ data }) => (data ? data.session : null));

  window.BBIT = {
    sb, ready,
    signUp, signIn, signOut, getUser, getProfile, ensureProfile, applyForBEE, saveExam,
    nextSundayExamIST, formatExamLabel,
    onAuthChange(cb) { sb.auth.onAuthStateChange((_e, session) => cb(session)); }
  };
})();
