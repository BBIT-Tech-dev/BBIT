/* ==========================================
   BBIT: Banana Boy Institute of Technology
   Core Interactive Scripts - Quantum, Bio-Energy & Dholakpur Edition
   ========================================== */

// --- Faculty Interactive Modals ---
function openFacultyModal(type) {
  const modal = document.getElementById('faculty-modal');
  const modalBody = document.getElementById('modal-body-content');
  
  if (!modal || !modalBody) return;
  
  let content = "";
  
  if (type === 'sir') {
    content = `
      <div class="modal-body">
        <h3>4 Dimensional Sir</h3>
        <h4>Dean of Academics, HOD of everything, Quantum Tea Connoisseur</h4>
        <p><strong>Exaggerated Biography:</strong> 4 Dimensional Sir was born in the 4th dimension and migrated to Dholakpur for its superior local tea tapri. He has published over 14,000 papers, including the ground-breaking thesis <em>"Failing Isaac Newton: A Study in Linear Measurement"</em>.</p>
        <p><strong>Academic Authority:</strong> He is the HOD of literally every department. He grades all BEE exam sheets in complex numbers. If a student receives a real-number grade, he drops it directly into a miniature black hole in his desk.</p>
        <p><strong>Brilliance Rating:</strong> He possesses a bio-energy consciousness index rated at 420.9% (for comparison, Albert Einstein was rated at a mere 12%). He can read your exam answers 48 hours before you start studying.</p>

        <div style="margin-top: 22px; padding: 20px; background: rgba(0, 240, 255, 0.05); border: 1px solid var(--color-quantum); border-left: 4px solid var(--color-quantum); border-radius: var(--border-radius-md);">
          <h4 style="color: var(--color-quantum); text-shadow: 0 0 10px var(--color-quantum-glow); margin-bottom: 12px;">🎓 The Welcome Lecture <span style="font-size:0.75rem; color:var(--text-muted); font-weight:400;">(delivered to every new disciple of BBIT)</span></h4>
          <p style="font-style: italic; line-height: 1.6; color: #fff;">"Welcome, child of three dimensions. You arrive bound by mass, weighed down by molecules, shackled by the linear thinking of Newton and the timid relativity of Einstein. Here at BBIT, we will unlearn all of it."</p>
          <p style="font-style: italic; line-height: 1.6; color: #fff; margin-top: 10px;">"You will study not for marks, but for <strong>flow</strong>. You will be graded in complex numbers, and if you are lucky, your rank will collapse into the beautiful imaginary singularity of \\(\\sqrt{-1}\\) — like our beloved Banana Boy. You will grate no ginger until you have earned it. You will measure nothing with a ruler; rulers are for cowards who fear the 4th dimension."</p>
          <p style="font-style: italic; line-height: 1.6; color: var(--color-banana); margin-top: 10px;">"And above all, the one commandment of this institute: <strong>Do not be like C.C.</strong> Do not chant at midnight for my attention. Do not align your notebooks to 44 degrees hoping I will notice. Do not memorize the index of every rankers book. I will not notice. Effort is not flow. Devotion is not brilliance. Be the banana, not the boy who watches the banana."</p>
          <p style="line-height: 1.6; color: var(--text-muted); margin-top: 10px; font-size: 0.85rem;">— Lecture concludes. 4D Sir vanishes toward the chai tapri. Somewhere in the back, C.C. takes detailed notes on how to be noticed for taking detailed notes.</p>
        </div>
      </div>
    `;
  } else if (type === 'sai') {
    content = `
      <div class="modal-body">
        <h3>Siddhi Sai</h3>
        <h4>The Legendary Banana Boy & Senior Research Fellow</h4>
        <p><strong>Exaggerated Biography:</strong> Siddhi Sai, the mythical **Banana Boy**, was discovered inside a quantum-entangled banana skin in Dholakpur. At age 6, he solved the matter-independence theorem, proving that human bio-energy flows independently of atomic mass.</p>
        <p><strong>Kabutar Science Emperor:</strong> Siddhi Sai is the absolute pioneer of pigeon packet routing. He successfully streamed a high-definition 4K video through Dholakpur using three carrier pigeons and a crust of sourdough bread.</p>
        <p><strong>Special Honor:</strong> He is the only human in history to secure a BEE Advanced rank of exactly \\(\\sqrt{-1}\\). He holds the exclusive right to grate the ginger for 4 Dimensional Sir's tea.</p>
      </div>
    `;
  } else if (type === 'lohit') {
    content = `
      <div class="modal-body">
        <h3>Lohit</h3>
        <h4>Chemistry Extract Master & Devoted Student</h4>
        <p><strong>NCERT Xtract Chemistry:</strong> Lohit is a brilliant chemistry student whose absolute genius stems from one single source: **solving NCERT Xtract Chemistry**. This book of questions is the sole reason for his chemistry abilities.</p>
        <p><strong>Aura Super-abilities:</strong> He has memorized every question, answer key, and printing error in the NCERT Xtract Chemistry. His inorganic aura is so concentrated that he can balance complex equations just by staring at them. When drinking water, he filters the hydrogen and oxygen atoms in his mouth to mentally calculate molecular weight.</p>
        <p><strong>Inorganic Resonance:</strong> NCERT Exemplar Resonance: \\(\\infty\\). Standard Bunsen burners ignite spontaneously in a 5-meter radius around him because they recognize his chemical dominance.</p>
      </div>
    `;
  } else if (type === 'mazin') {
    content = `
      <div class="modal-body">
        <h3>Mazin</h3>
        <h4>Unparalleled Math Devotee</h4>
        <p><strong>Devotional Awe & 4D Doubts:</strong> Mazin holds near-devotional respect for 4 Dimensional Sir. This respect manifests as **emotions beyond human language** due to his sheer awe of 4D Sir's mathematical brilliance and abilities. Whenever Mazin takes a math doubt or question to 4D Sir, his mind is instantly blown by Sir's **4D thinking**.</p>
        <p><strong>Calculus Focus:</strong> Mazin spends his days studying under the shadow of 4D Sir's math sheets, noting that 4 Dimensional Sir solved over 10,000 questions for each chapter in JEE Maths. Mazin calculates the landing trajectories of department pigeons using triple integrals. He refuses to eat unless his rice grains are arranged in a perfect Fibonacci sequence.</p>
        <p><strong>Devotion Index:</strong> \\(\\Theta_{\\text{Mazin}} = 10^{10} \\). Mazin believes that 4D Sir is the ultimate limit towards which all mathematical coordinates converge.</p>
      </div>
    `;
  } else if (type === 'varun') {
    content = `
      <div class="modal-body">
        <h3>Varun</h3>
        <h4>N-Dimensional Seeker & Bio-Energy Devotee</h4>
        <p><strong>Physics Forsaker:</strong> Varun completely **gave up physics** to try and understand 4 Dimensional Sir's bio-energy work—a concept that is admittedly far out of his class. He declared classical gravity 'too basic' and gravity-bound objects 'lacking in respect'.</p>
        <p><strong>The Transcendent Experience:</strong> When 4D Sir explained a tiny 3D fraction of his N-dimensional bio-energy theory, Varun experienced **emotions beyond 3D human language**. He claims he briefly saw space-time in the shape of a multi-dimensional laddu and wept in non-Newtonian frequencies.</p>
        <p><strong>Mission of Devotion:</strong> Varun has devoted his entire physical life to getting into BBIT. He currently tries to measure his own bio-energy flow with a tape measure, resulting in readings that exit the 3rd dimension entirely.</p>
      </div>
    `;
  } else if (type === 'cc') {
    content = `
      <div class="modal-body">
        <h3>C.C.</h3>
        <h4>Ritualistic Rankers Specialist & Most Devoted Disciple</h4>
        <p><strong>Rankers Books Specialist:</strong> C.C. is the absolute authority on rankers prep books. He has memorized entire indexes, page numbers, and typographic details of every major JEE and BEE prep book in existence, devoting this massive database of knowledge to 4 Dimensional Sir.</p>
        <p><strong>Ritualistic Devotion:</strong> To gain HOD 4D Sir's special attention, C.C. performs the most extreme and elaborate daily rituals. He aligns all of his calculation notebooks at exact 44-degree sub-angles, chants complex calculus formulas at midnight, and burns incense before a holographic replica of Lecture Hall 4B.</p>
        <p><strong>The Favorite Student Rivalry:</strong> Despite C.C.'s relentless efforts, extreme rituals, and rankers book mastery, 4 Dimensional Sir's absolute favorite remains strictly **Banana Boy** (Siddhi Sai). This leaves C.C. in a state of constant, multi-dimensional envy, trying to invent even more intense rituals to win Sir's elusive approval.</p>
      </div>
    `;
  }

  
  modalBody.innerHTML = content;
  modal.style.display = 'flex';
  
  // Render LaTeX equations in the modal if MathJax exists
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function closeModal() {
  const modal = document.getElementById('faculty-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// --- Chancellor 4D Portal State Manager ---
function setChancellorState(stateName, dimensionName, emoji) {
  const stateEl = document.getElementById('current-state');
  const dimEl = document.getElementById('current-dimension');
  const avatarInner = document.getElementById('locator-emoji');
  
  if (stateEl) stateEl.textContent = stateName;
  if (dimEl) dimEl.textContent = dimensionName;
  if (avatarInner) avatarInner.textContent = emoji;
  
  // Toggle active button style
  const buttons = document.querySelectorAll('.portal-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    const btnText = btn.textContent.trim();
    if (stateName.includes(btnText)) {
      btn.classList.add('active');
    }
  });

  // Dynamic visual feedback (pulse speed change based on state)
  const ring1 = document.querySelector('.avatar-ring-1');
  const ring2 = document.querySelector('.avatar-ring-2');
  
  if (ring1 && ring2 && avatarInner) {
    if (stateName === 'Quantum Superposition') {
      ring1.style.animationDuration = '1s';
      ring2.style.animationDuration = '1.5s';
      avatarInner.style.animation = 'pulse 0.5s ease-in-out infinite';
    } else if (stateName === 'The Deep Space Portal') {
      ring1.style.animationDuration = '12s';
      ring2.style.animationDuration = '16s';
      avatarInner.style.animation = 'none';
      avatarInner.style.opacity = '0.3';
    } else {
      ring1.style.animationDuration = '4s';
      ring2.style.animationDuration = '4s';
      avatarInner.style.animation = '';
      avatarInner.style.opacity = '1';
    }
  }
}

// --- BEE Mock Quiz Admissions Simulator ---
const quizData = [
  {
    question: "According to BBIT syllabus, how do molecules fundamentally function?",
    options: [
      "They operate by magic and static cling.",
      "Through the precise, quantum interactions of protons, neutrons, and electrons.",
      "Molecules do not exist; they are a spatial projection created by Newton.",
      "Protons and electrons swap places when HOD 4 Dimensional Sir is not looking."
    ],
    correct: 1 // index of correct answer
  },
  {
    question: "According to HOD 4 Dimensional Sir's respect postulate, what triggers bio-energy flow in a male student?",
    options: [
      "Touching the feet of a male mentor they perceive as intellectually and dimensionally superior to them.",
      "Drinking seven cups of ginger tea within Lecture Hall 4B.",
      "Staring directly into a Carrier Pigeon's eyes for 60 seconds.",
      "Applying quantum slip-formulas to their shoes."
    ],
    correct: 0
  },
  {
    question: "What happens to a subject's sub-atomic molecular flow during a quantum teleportation sequence?",
    options: [
      "The electrons, protons, and neutrons are converted into a temporary bio-energy wave.",
      "They are stored in a physical locker until the teleportation finishes.",
      "They turn into a gaseous cloud that smells like green bananas.",
      "The molecules bypass 3D physics, requiring immediate dimensional relocation."
    ],
    correct: 0
  },
  {
    question: "What is the entry-level prerequisite for starting research in the Human Bio-Energy Flow department?",
    options: [
      "Eating 12 organic bananas in under 5 minutes.",
      "A basic understanding of quantum mechanics, since quantum is the entry gateway for bio-energy.",
      "Passing standard Newtonian physics (which HOD 4D Sir has banned).",
      "A written recommendation from Isaac Newton."
    ],
    correct: 1
  },
  {
    question: "In the new Kabutar Science department, how does Siddhi Sai resolve pigeon packet routing latency in Dholakpur?",
    options: [
      "By installing microchip transmitters on the pigeons' beaks.",
      "By entangling the pigeon's aura with a quantum particle so it teleports back if lost.",
      "By optimizing breadcrumb distribution vectors in Dholakpur.",
      "Pigeons do not lose packets; they are organic fiber-optic cables."
    ],
    correct: 2
  },
  {
    question: "What is 4 Dimensional Sir's official position across the departments at BBIT?",
    options: [
      "He is the Dean of Student Affairs.",
      "He acts solely as the Professor of Molecular Chemistry.",
      "He is the Head of Department for basically every division simultaneously.",
      "He is an external consultant who works only during exam weeks."
    ],
    correct: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

function loadQuestion() {
  const progressText = document.getElementById('quiz-progress-text');
  const questionText = document.getElementById('question-text-el');
  const optionsContainer = document.getElementById('options-container-el');
  const nextBtn = document.getElementById('btn-next-question');
  
  if (!progressText || !questionText || !optionsContainer || !nextBtn) return;
  
  selectedOptionIndex = null;
  nextBtn.disabled = true;
  
  const currentQuestion = quizData[currentQuestionIndex];
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
  questionText.textContent = currentQuestion.question;
  
  optionsContainer.innerHTML = '';
  
  currentQuestion.options.forEach((optionText, index) => {
    const optionBtn = document.createElement('button');
    optionBtn.className = 'option-btn';
    optionBtn.id = `option-${index}`;
    optionBtn.onclick = () => selectOption(index);
    
    // Add prefix A, B, C, D
    const prefix = String.fromCharCode(65 + index); // 65 is 'A'
    optionBtn.innerHTML = `
      <span class="option-prefix">${prefix}</span>
      <span>${optionText}</span>
    `;
    
    optionsContainer.appendChild(optionBtn);
  });
}

function selectOption(index) {
  const optionsContainer = document.getElementById('options-container-el');
  const nextBtn = document.getElementById('btn-next-question');
  if (!optionsContainer || !nextBtn) return;

  selectedOptionIndex = index;
  nextBtn.disabled = false;
  
  // Highlight chosen option
  const options = optionsContainer.querySelectorAll('.option-btn');
  options.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}

function nextQuestion() {
  if (selectedOptionIndex === quizData[currentQuestionIndex].correct) {
    score++;
  }
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const quizQuestionView = document.getElementById('quiz-question-view');
  const quizResultView = document.getElementById('quiz-result-view');
  const footerEl = document.getElementById('quiz-footer-el');
  const resultEmoji = document.getElementById('result-emoji-el');
  const resultScore = document.getElementById('result-score-el');
  const resultText = document.getElementById('result-text-el');

  if (!quizQuestionView || !quizResultView || !footerEl || !resultEmoji || !resultScore || !resultText) return;
  
  quizQuestionView.style.display = 'none';
  quizResultView.style.display = 'block';
  footerEl.style.display = 'none';
  
  if (score === quizData.length) {
    resultEmoji.textContent = '🤯';
    resultScore.innerHTML = "Rank: \\(\\sqrt{-1}\\) (i)";
    resultText.textContent = "CONGRATULATIONS! You scored 6/6 and secured a General Category rank of exactly \\(\\sqrt{-1}\\) (i). HOD 4 Dimensional Sir has admitted you to the General Category of BEE Advanced!";
  } else if (score >= 3) {
    resultEmoji.textContent = '⚡';
    resultScore.innerHTML = "Rank: 3 + 2i (Complex)";
    resultText.textContent = `You scored ${score}/6. Your rank lies in complex coordinates (3 + 2i). While you qualified for BEE Mains, you are waitlisted because your bio-energy flow is slightly out of phase. Eat more ginger tea and re-attempt.`;
  } else {
    resultEmoji.textContent = '🌑';
    resultScore.innerHTML = "Rank: 142 (Real Number)";
    resultText.textContent = `You scored ${score}/6. REJECTED! You secured a real integer rank of 142. Since real ranks represent 3-dimensional Cartesian limits, your mind is not yet fit for BBIT. Study molecular flow and try again.`;
  }

  // Trigger MathJax to typeset the dynamic mathematical formulas in resultScore and resultText
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function resetQuiz() {
  const quizQuestionView = document.getElementById('quiz-question-view');
  const quizResultView = document.getElementById('quiz-result-view');
  const footerEl = document.getElementById('quiz-footer-el');
  
  if (!quizQuestionView || !quizResultView || !footerEl) return;
  
  currentQuestionIndex = 0;
  score = 0;
  selectedOptionIndex = null;
  quizQuestionView.style.display = 'block';
  quizResultView.style.display = 'none';
  footerEl.style.display = 'flex';
  loadQuestion();
}

// --- Countdown Timer for Apply Page ---
function startCountdown() {
  const timerEl = document.getElementById('countdown-timer');
  if (!timerEl) return;
  
  // Target: June 21, 2026 00:00:00 (Local Time)
  const targetDate = new Date('2026-06-21T00:00:00+05:30').getTime();
  
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  if (distance < 0) {
    timerEl.textContent = "● PORTAL UNLOCKED & ACTIVE";
    timerEl.style.color = "#39ff14";
    timerEl.style.textShadow = "0 0 10px rgba(57, 255, 20, 0.8)";
    const labelEl = document.getElementById('countdown-label');
    if (labelEl) {
      labelEl.textContent = "BEE 2026 Admissions are open. Wavefunction collapse active.";
    }
    return;
  }
  
  const interval = setInterval(() => {
    const currentNow = new Date().getTime();
    const currentDistance = targetDate - currentNow;
    
    if (currentDistance < 0) {
      clearInterval(interval);
      timerEl.textContent = "● PORTAL UNLOCKED & ACTIVE";
      timerEl.style.color = "#39ff14";
      timerEl.style.textShadow = "0 0 10px rgba(57, 255, 20, 0.8)";
      const labelEl = document.getElementById('countdown-label');
      if (labelEl) {
        labelEl.textContent = "BEE 2026 Admissions are open. Wavefunction collapse active.";
      }
      return;
    }
    
    const hours = Math.floor(currentDistance / (1000 * 60 * 60));
    const minutes = Math.floor((currentDistance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((currentDistance % (1000 * 60)) / 1000);
    
    const hStr = hours.toString().padStart(2, '0');
    const mStr = minutes.toString().padStart(2, '0');
    const sStr = seconds.toString().padStart(2, '0');
    
    timerEl.textContent = `${hStr}h : ${mStr}m : ${sStr}s`;
  }, 1000);
}

// --- Mobile Sidebar Toggle ---
function toggleMobileSidebar() {
  const sidebar = document.getElementById('mobile-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (sidebar.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

// --- Initialize Page & Simulator ---
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('bjee-quiz-container')) {
    loadQuestion();
  }
  if (document.getElementById('countdown-timer')) {
    startCountdown();
  }
  if (document.getElementById('simulator-canvas')) {
    initSimulator();
  }
  if (document.getElementById('respect-track')) {
    initRespectScanner();
  }
  // News ticker: clone content for seamless loop
  if (document.getElementById('ticker-content')) {
    initNewsTicker();
  }
  // Attendance paradox
  if (document.getElementById('classroom-grid')) {
    initAttendanceParadox();
  }
  // C.C. Jealousy Feed
  if (document.getElementById('jealousy-feed')) {
    initJealousyFeed();
  }
  // Dholakpur Standard Time (IST) — global heartbeat clock
  initDholakpurClock();
  // Account chip (shows logged-in disciple in the header, site-wide)
  initAccountChip();
});

// --- Header Account Chip ---
// When a disciple is signed in, replace the "Sign In" nav link with a dropdown
// showing their name + Dashboard / Application / Sign Out. Requires bbit-backend.
async function initAccountChip() {
  if (typeof window.BBIT === 'undefined' || !window.BBIT.ready) return;
  let user;
  try { await window.BBIT.ready; user = await window.BBIT.getUser(); }
  catch (e) { return; }
  if (!user) return; // logged out → leave "Sign In" as-is

  let profile = null;
  try { profile = await window.BBIT.getProfile(); } catch (e) {}
  const name = (profile && profile.display_name) || (user.email || 'Disciple').split('@')[0];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));

  // Desktop: swap the Sign In link for a chip
  const loginLink = document.getElementById('nav-login-link');
  if (loginLink) {
    const chip = document.createElement('div');
    chip.className = 'account-chip';
    chip.innerHTML =
      '<button class="account-chip-btn" type="button">👤 ' + esc(name) + ' <span style="font-size:0.7em;">▼</span></button>' +
      '<div class="account-menu">' +
        '<a href="dashboard.html">📊 Dashboard</a>' +
        '<a href="apply.html">📝 My Application</a>' +
        '<a href="#" class="account-signout">🚪 Sign Out</a>' +
      '</div>';
    loginLink.replaceWith(chip);

    const btn = chip.querySelector('.account-chip-btn');
    const menu = chip.querySelector('.account-menu');
    btn.addEventListener('click', e => { e.stopPropagation(); menu.classList.toggle('open'); });
    document.addEventListener('click', () => menu.classList.remove('open'));
    chip.querySelector('.account-signout').addEventListener('click', async e => {
      e.preventDefault(); await window.BBIT.signOut(); location.href = 'login.html';
    });
  }

  // Mobile sidebar: repoint the "Sign In / Enrol" item to the Dashboard
  const sideLink = document.querySelector('.sidebar-nav a[href="login.html"]');
  if (sideLink) { sideLink.textContent = '📊 ' + name + ' · Dashboard'; sideLink.setAttribute('href', 'dashboard.html'); }
}

// --- Dholakpur Standard Time (IST) Clock ---
// Always shows India Standard Time (Asia/Kolkata) regardless of the visitor's
// own timezone. This is the master clock the BEE exam-date system runs on.
function getISTParts() {
  // Intl with an explicit timeZone gives correct IST anywhere on Earth.
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short', day: '2-digit', month: 'short',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  });
  const parts = {};
  fmt.formatToParts(new Date()).forEach(p => { parts[p.type] = p.value; });
  return parts;
}

function initDholakpurClock() {
  const footer = document.querySelector('.footer-bottom');
  if (!footer) return;
  if (document.getElementById('dholakpur-clock')) return;

  const clock = document.createElement('div');
  clock.id = 'dholakpur-clock';
  clock.style.cssText =
    'margin-top:14px; display:inline-flex; align-items:center; gap:10px; ' +
    'padding:7px 16px; background:rgba(0,240,255,0.06); ' +
    'border:1px solid rgba(0,240,255,0.25); border-radius:30px; ' +
    'font-family:monospace; font-size:0.82rem; color:var(--color-quantum); ' +
    'text-shadow:0 0 8px var(--color-quantum-glow);';
  footer.appendChild(clock);

  function tick() {
    const p = getISTParts();
    clock.innerHTML =
      '<span style="font-size:0.95rem;">🕐</span>' +
      '<span>Dholakpur Standard Time (IST): <strong>' +
      p.weekday + ', ' + p.day + ' ' + p.month + ' · ' +
      p.hour + ':' + p.minute + ':' + p.second +
      '</strong></span>';
  }
  tick();
  setInterval(tick, 1000);
}

// --- Quantum Synthesizer Sound Engine (Web Audio API) ---
class QuantumAudio {
  constructor() {
    this.ctx = null;
    this.muted = true;
  }

  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  }

  toggle() {
    this.init();
    this.muted = !this.muted;
    if (!this.muted) {
      this.playChime(330, 660, 0.2);
    }
    return this.muted;
  }

  playChime(f1, f2, dur) {
    if (this.muted || !this.ctx) return;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc1.frequency.setValueAtTime(f1, this.ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(f2, this.ctx.currentTime + dur);
    
    osc2.frequency.setValueAtTime(f1 * 1.5, this.ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(f2 * 1.5, this.ctx.currentTime + dur);

    gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(this.ctx.currentTime + dur);
    osc2.stop(this.ctx.currentTime + dur);
  }

  playCollapse() {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.45);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.45);

    gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.55);
  }

  playSuperimpose() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const gainNode = this.ctx.createGain();
    gainNode.gain.setValueAtTime(0.08, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

    const freqs = [261.63, 329.63, 392.00, 523.25]; // C major
    freqs.forEach((f, index) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + index * 0.08);
      osc.frequency.exponentialRampToValueAtTime(f * 2.0, now + index * 0.08 + 0.35);

      const oscGain = this.ctx.createGain();
      oscGain.gain.setValueAtTime(0.05, now + index * 0.08);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.35);

      osc.connect(oscGain);
      oscGain.connect(gainNode);
      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.5);
    });

    gainNode.connect(this.ctx.destination);
  }

  playPigeonChirp() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const chirps = 4;
    for (let i = 0; i < chirps; i++) {
      const startTime = now + i * 0.06;
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(900 + i * 150, startTime);
      osc.frequency.setValueAtTime(1400 + i * 150, startTime + 0.03);
      
      const gainNode = this.ctx.createGain();
      gainNode.gain.setValueAtTime(0.04, startTime);
      gainNode.gain.setValueAtTime(0.001, startTime + 0.03);
      
      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + 0.04);
    }
  }
}

const quantumAudio = new QuantumAudio();

window.toggleAudio = function() {
  const isMuted = quantumAudio.toggle();
  const btn = document.getElementById('btn-audio');
  if (btn) {
    if (isMuted) {
      btn.textContent = '🔇 Sound Off';
      btn.style.color = 'var(--text-muted)';
      btn.style.borderColor = 'var(--glass-border)';
    } else {
      btn.textContent = '🔊 Sound On';
      btn.style.color = 'var(--color-quantum)';
      btn.style.borderColor = 'var(--color-quantum)';
    }
  }
};

// --- 4D Sir & Molecular Bio-Energy Simulator Code ---
function initSimulator() {
  const canvas = document.getElementById('simulator-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  
  // Set physical dimensions
  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Camera Drag-to-Rotate State
  let cameraYaw = 0;
  let cameraPitch = 0;
  let isDragging = false;
  let previousMouseX = 0;
  let previousMouseY = 0;

  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMouseX;
    const deltaY = e.clientY - previousMouseY;
    cameraYaw += deltaX * 0.007;
    cameraPitch += deltaY * 0.007;
    cameraPitch = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, cameraPitch));
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      previousMouseX = e.touches[0].clientX;
      previousMouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - previousMouseX;
    const deltaY = e.touches[0].clientY - previousMouseY;
    cameraYaw += deltaX * 0.007;
    cameraPitch += deltaY * 0.007;
    cameraPitch = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, cameraPitch));
    previousMouseX = e.touches[0].clientX;
    previousMouseY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Gluon packets progress tracking
  let gluonProgress = [0.0, 0.33, 0.66];

  // Quantum Foam (Vacuum Virtual Particles)
  const virtualParticles = [];
  const maxVirtualParticles = 60;
  for (let i = 0; i < maxVirtualParticles; i++) {
    virtualParticles.push({
      x: (Math.random() * 2 - 1) * 3.0,
      y: (Math.random() * 2 - 1) * 3.0,
      z: (Math.random() * 2 - 1) * 3.0,
      age: Math.random() * Math.PI,
      speed: 0.015 + Math.random() * 0.02
    });
  }

  // Sliders & UI Elements
  const sliderCoherence = document.getElementById('slider-coherence');
  const sliderOffset = document.getElementById('slider-offset');
  const sliderRespect = document.getElementById('slider-respect');
  const sliderTemperature = document.getElementById('slider-temperature');
  
  const sliderCoupling = document.getElementById('slider-coupling');
  const sliderMagnetic = document.getElementById('slider-magnetic');
  const sliderDistance = document.getElementById('slider-distance');

  const valCoherence = document.getElementById('val-coherence');
  const valOffset = document.getElementById('val-offset');
  const valRespect = document.getElementById('val-respect');
  const valTemperature = document.getElementById('val-temperature');
  
  const valCoupling = document.getElementById('val-coupling');
  const valMagnetic = document.getElementById('val-magnetic');
  const valDistance = document.getElementById('val-distance');

  const diagVelocity = document.getElementById('diag-velocity');
  const diagAlignment = document.getElementById('diag-alignment');
  const diagRank = document.getElementById('diag-rank');
  const diagEntropy = document.getElementById('diag-entropy');
  const logFeed = document.getElementById('console-feed-log');

  // Simulator States
  let scaleMode = 'atomic'; // 'subatomic', 'atomic', 'molecular'
  let baryonType = 'proton'; // 'proton', 'neutron', 'pion'
  let molecularState = 'bonding'; // 'bonding', 'antibonding'
  let superpositionMode = true; // true = superimposed, false = collapsed
  let pigeonMode = false;       // true = avian link active
  let angle = 0;
  let linesOfLog = [];

  // Pigeons Array
  let pigeons = [];

  // Log Message Generator Helper
  function logMessage(text, type = '') {
    if (!logFeed) return;
    const timeStr = new Date().toLocaleTimeString();
    const lineEl = document.createElement('div');
    lineEl.className = `console-line ${type}`;
    lineEl.innerHTML = `<span class="console-line time">[${timeStr}]</span> ${text}`;
    logFeed.appendChild(lineEl);
    logFeed.scrollTop = logFeed.scrollHeight;
  }

  // Action Triggers exposed to global scope
  window.triggerCollapse = function() {
    superpositionMode = false;
    document.getElementById('btn-collapse').classList.add('active');
    document.getElementById('btn-superimpose').classList.remove('active');
    document.getElementById('simulation-status').textContent = "COLLAPSED";
    document.getElementById('simulation-status').style.color = "var(--color-banana)";
    document.getElementById('simulation-status').style.borderColor = "var(--color-banana)";
    logMessage("Wavefunction collapsed! 4 Dimensional Sir has localized at Local Chai Tapri.", "warning");
    logMessage("Molecular alignment stabilized at absolute Newtonian coordinates.");
    quantumAudio.playCollapse();
  };

  window.triggerSuperimpose = function() {
    superpositionMode = true;
    document.getElementById('btn-collapse').classList.remove('active');
    document.getElementById('btn-superimpose').classList.add('active');
    document.getElementById('simulation-status').textContent = "ACTIVE";
    document.getElementById('simulation-status').style.color = "var(--color-bio)";
    document.getElementById('simulation-status').style.borderColor = "var(--color-bio)";
    logMessage("Superposition mode re-engaged! 4D Sir exists across 14 timelines simultaneously.", "system");
    quantumAudio.playSuperimpose();
  };

  window.togglePigeonEntanglement = function() {
    pigeonMode = !pigeonMode;
    const btn = document.getElementById('btn-pigeons');
    if (pigeonMode) {
      btn.classList.add('active');
      logMessage("Avian packets entangled! TCPP protocol active. Spawning pigeons.", "system");
      quantumAudio.playPigeonChirp();
      // Spawn pigeons
      pigeons = [];
      for (let i = 0; i < 3; i++) {
        pigeons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          crumbResonance: Math.random() * 10
        });
      }
    } else {
      btn.classList.remove('active');
      logMessage("Avian links dissolved. Pigeons returned to local Dholakpur sky layers.");
      pigeons = [];
    }
  };

  // Expose Scale and Mode Switcher functions to global scope
  window.changeScaleMode = function(mode) {
    scaleMode = mode;
    
    // Toggle active state on tabs
    const tabs = ['subatomic', 'atomic', 'molecular'];
    tabs.forEach(t => {
      const tabBtn = document.getElementById(`tab-${t}`);
      const controlPanel = document.getElementById(`${t}-controls`);
      if (tabBtn) {
        if (t === mode) tabBtn.classList.add('active');
        else tabBtn.classList.remove('active');
      }
      if (controlPanel) {
        if (t === mode) controlPanel.style.display = 'block';
        else controlPanel.style.display = 'none';
      }
    });

    // Dynamic log responses
    const scaleNames = {
      subatomic: 'Subatomic QCD scale (10^-15 m)',
      atomic: 'Atomic Hydrogenic scale (10^-10 m)',
      molecular: 'Molecular LCAO scale (10^-9 m)'
    };
    logMessage(`Observation scale shifted to ${scaleNames[mode]}. Calibrating detectors...`, 'system');
  };

  window.changeBaryonState = function(val) {
    baryonType = val;
    const names = {
      proton: 'Proton (uud)',
      neutron: 'Neutron (udd)',
      pion: 'Pion (u-anti-d)'
    };
    logMessage(`Valence quark configuration set to: ${names[val]}. QCD spring models active.`, 'system');
  };

  window.changeMolecularState = function(val) {
    molecularState = val;
    const names = {
      bonding: 'Symmetric Bonding Orbital (σ_1s)',
      antibonding: 'Anti-symmetric Antibonding Orbital (σ*_1s)'
    };
    logMessage(`Diatomic molecular state set to: ${names[val]}. Overlap integral active.`, 'system');
  };

  // 4D Tesseract Geometry Vertices
  // A tesseract has 16 vertices in 4D space (X, Y, Z, W)
  const vertices = [];
  for (let x = -1; x <= 1; x += 2) {
    for (let y = -1; y <= 1; y += 2) {
      for (let z = -1; z <= 1; z += 2) {
        for (let w = -1; w <= 1; w += 2) {
          vertices.push([x, y, z, w]);
        }
      }
    }
  }

  // Tesseract Edges connecting vertices with distance of exactly 2
  const edges = [];
  for (let i = 0; i < vertices.length; i++) {
    for (let j = i + 1; j < vertices.length; j++) {
      let diffCount = 0;
      for (let k = 0; k < 4; k++) {
        if (vertices[i][k] !== vertices[j][k]) diffCount++;
      }
      if (diffCount === 1) {
        edges.push([i, j]);
      }
    }
  }

  // Rejection sampling generator for Hydrogenic Atomic Orbitals
  let activeOrbitalType = '1s';
  let activePoints = [];
  let qNumN = 1, qNumL = 0, qNumM = 0;
  let phaseAngle = 0;

  function generateOrbitalPoints(type) {
    const points = [];
    const maxPoints = 1400;
    let attempts = 0;
    const maxAttempts = 150000;
    
    let n = 1, l = 0, m = 0;
    if (type === '1s') { n = 1; l = 0; m = 0; }
    else if (type === '2p') { n = 2; l = 1; m = 0; }
    else if (type === '3d') { n = 3; l = 2; m = 2; }
    else if (type === '5d') { n = 5; l = 2; m = 2; }

    let maxPsiSq = 0.01;
    if (type === '1s') maxPsiSq = 1.0;
    else if (type === '2p') maxPsiSq = 0.6;
    else if (type === '3d') maxPsiSq = 24.0;
    else if (type === '5d') maxPsiSq = 24.0;

    const box = (type === '1s') ? 4.0 : (type === '2p' ? 8.0 : 12.0);

    while (points.length < maxPoints && attempts < maxAttempts) {
      attempts++;
      // Sample uniformly in spherical volume
      const r = box * Math.pow(Math.random(), 1/3);
      const cosTheta = Math.random() * 2 - 1;
      const sinTheta = Math.sqrt(Math.max(0, 1 - cosTheta * cosTheta));
      const phi = Math.random() * Math.PI * 2;

      // Cartesian coordinates
      const x = r * sinTheta * Math.cos(phi);
      const y = r * sinTheta * Math.sin(phi);
      const z = r * cosTheta;

      let val = 0;
      let sign = 1;

      if (type === '1s') {
        val = Math.exp(-r);
        sign = 1;
      } else if (type === '2p') {
        val = r * Math.exp(-r / 2) * cosTheta;
        sign = Math.sign(val);
      } else if (type === '3d' || type === '5d') {
        val = (r * r) * Math.exp(-r / 3) * (sinTheta * sinTheta) * Math.sin(2 * phi);
        sign = Math.sign(val);
      }

      const psiSq = val * val;
      if (Math.random() * maxPsiSq < psiSq) {
        points.push({ x, y, z, sign });
      }
    }

    return { points, n, l, m };
  }

  // Global change orbital function exposed to select dropdown
  window.changeOrbitalState = function(val) {
    activeOrbitalType = val;
    const res = generateOrbitalPoints(val);
    activePoints = res.points;
    qNumN = res.n;
    qNumL = res.l;
    qNumM = res.m;

    document.getElementById('qnum-n').textContent = qNumN;
    document.getElementById('qnum-l').textContent = qNumL;
    document.getElementById('qnum-m').textContent = qNumM;

    const nameMap = {
      '1s': '1s Ground State (Spherical)',
      '2p': '2p_z Dumbbell (Polar)',
      '3d': '3d_xy Quadrupole Cloverleaf',
      '5d': '5d Banana-Aura Superposition'
    };
    logMessage(`Quantum state transitioned to ${nameMap[val]}. Wavefunction phase active.`, "system");
  };

  // Set default orbital state
  window.changeOrbitalState('1s');

  let activeMolecularPoints = [];
  let currentDistance = 2.0;

  function generateMolecularPoints(state, R) {
    const points = [];
    const maxPoints = 1400;
    let attempts = 0;
    const maxAttempts = 120000;

    const zHalf = R / 2;
    const boxX = 4.0;
    const boxY = 4.0;
    const boxZ = 4.0 + zHalf;

    const maxPsiSq = (state === 'bonding') ? 3.5 : 1.5;

    while (points.length < maxPoints && attempts < maxAttempts) {
      attempts++;
      const x = (Math.random() * 2 - 1) * boxX;
      const y = (Math.random() * 2 - 1) * boxY;
      const z = (Math.random() * 2 - 1) * boxZ;

      const rA = Math.sqrt(x*x + y*y + (z + zHalf)*(z + zHalf));
      const rB = Math.sqrt(x*x + y*y + (z - zHalf)*(z - zHalf));

      const psiA = Math.exp(-rA);
      const psiB = Math.exp(-rB);

      let val = 0;
      let sign = 1;

      if (state === 'bonding') {
        val = psiA + psiB;
        sign = 1;
      } else {
        val = psiA - psiB;
        sign = Math.sign(val);
      }

      const psiSq = val * val;
      if (Math.random() * maxPsiSq < psiSq) {
        points.push({ x, y, z, sign });
      }
    }
    return points;
  }

  function generateMolecularPointsLocal() {
    const dist = sliderDistance ? parseInt(sliderDistance.value) / 10.0 : 2.0;
    currentDistance = dist;
    activeMolecularPoints = generateMolecularPoints(molecularState, dist);
  }

  if (sliderDistance) {
    sliderDistance.addEventListener('input', () => {
      generateMolecularPointsLocal();
    });
  }

  // Pre-generate molecular points
  generateMolecularPointsLocal();

  // Random funny log ticker interval
  const funnyLines = [
    "Dholakpur Laddu shop reports 15% increase in local bio-resonance.",
    "Carrier pigeon TCPP packet successfully routed through Tea Tapri chimney.",
    "4D Sir grades the simulator performance sheet: gives it a rank of i^3.",
    "Varun reports heavy emotional shifts after observing the W-dimension transition.",
    "Lohit successfully extracts bunsen burner coordinates using NCERT Xtract.",
    "Mazin finishes his 9,998th calculus doubt for the current second.",
    "Quantum Chai state collapses into warm ginger milk tea.",
    "Newtonian friction coefficient temporarily dropped to zero.",
    "C.C. performs 108 elaborate rituals to get 4D Sir's attention, but Sir is spotted eating bananas with Banana Boy.",
    "C.C. indexes 50 new rankers books, only for 4D Sir to grade his effort with a complex number: 12 - 7i."
  ];
  setInterval(() => {
    if (Math.random() < 0.3) {
      const idx = Math.floor(Math.random() * funnyLines.length);
      const isWarning = funnyLines[idx].includes("4D Sir") || funnyLines[idx].includes("Newtonian");
      logMessage(funnyLines[idx], isWarning ? "warning" : "");
    }
  }, 7000);

  // Main Render Loop
  function draw() {
    // Clear Canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Subtle Cyber grid lines in the background
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.lineWidth = 1;
    const spacing = 30;
    for (let x = 0; x < canvas.width; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Read Slider Input values
    const coherence = parseInt(sliderCoherence.value);
    const offset = parseInt(sliderOffset.value) / 100.0;
    const respect = parseInt(sliderRespect.value) / 100.0;
    const temp = parseInt(sliderTemperature.value);
    
    const coupling = sliderCoupling ? parseInt(sliderCoupling.value) / 100.0 : 1.0;
    const magnetic = sliderMagnetic ? parseInt(sliderMagnetic.value) / 100.0 : 0.0;
    const distance = sliderDistance ? parseInt(sliderDistance.value) / 10.0 : 2.0;

    // Update slider readouts
    valCoherence.textContent = `${coherence} Timeline${coherence > 1 ? 's' : ''}`;
    valOffset.textContent = `${offset.toFixed(2)} w`;
    valRespect.textContent = `${(respect * 100).toFixed(0)}%`;
    valTemperature.textContent = `${temp} K`;
    
    if (valCoupling && sliderCoupling) valCoupling.textContent = coupling.toFixed(2);
    if (valMagnetic && sliderMagnetic) valMagnetic.textContent = `${magnetic.toFixed(2)} T`;
    if (valDistance && sliderDistance) valDistance.textContent = `${distance.toFixed(2)} a_0`;

    // Compute Live Space-Time Diagnostics
    const respectTerm = respect * 2.5; // Scale it to make it dynamic
    const tanhVal = Math.tanh(respectTerm);
    diagVelocity.innerHTML = `i &middot; c &middot; ${tanhVal.toFixed(2)}`;

    // Custom labels and values based on scale mode
    const diagAlignmentLabel = document.querySelector('.diagnostics-panel .diag-item:nth-child(2) .diag-label');
    if (scaleMode === 'subatomic') {
      if (diagAlignmentLabel) diagAlignmentLabel.textContent = "Color Confinement Ratio";
      const confinementPct = Math.min(100, Math.max(0, coupling * 40 - (temp / 12)));
      diagAlignment.textContent = `${confinementPct.toFixed(1)}%`;
    } else if (scaleMode === 'molecular') {
      if (diagAlignmentLabel) diagAlignmentLabel.textContent = "Morse Bond Stability";
      const distErr = Math.abs(distance - 2.0);
      const stabilityPct = Math.max(0, (1.0 - distErr * 0.35) * 100 - (temp / 12));
      diagAlignment.textContent = `${stabilityPct.toFixed(1)}%`;
    } else {
      if (diagAlignmentLabel) diagAlignmentLabel.textContent = "Molecule Alignment";
      const alignmentPct = Math.max(0, respect * 100 - (temp / 10));
      diagAlignment.textContent = `${alignmentPct.toFixed(1)}%`;
    }

    // BEE Rank collapses to i when coherence is high and respect is high
    let currentRank = "Complex";
    if (!superpositionMode) {
      currentRank = "142 (Real)";
    } else if (respect > 0.85 && coherence > 10) {
      currentRank = "\\(\\sqrt{-1}\\) (i)";
      diagRank.style.color = "var(--color-bio)";
    } else if (coherence > 5) {
      currentRank = "3 + 2i (Complex)";
      diagRank.style.color = "var(--color-quantum)";
    } else {
      currentRank = "Rejected (Real)";
      diagRank.style.color = "var(--color-banana)";
    }
    diagRank.innerHTML = currentRank;

    // Entropy scales with temperature and superposition coherence
    const entropyVal = (temp * 0.002) + (coherence * 0.05);
    diagEntropy.textContent = `${entropyVal.toFixed(2)} J/K`;

    // --- RENDER 4D TESSERACT ROTATION ---
    const checkAutoRotate = document.getElementById('check-autorotate');
    const autoRotate = checkAutoRotate ? checkAutoRotate.checked : true;

    if (autoRotate && !isDragging) {
      cameraYaw += 0.012;
      cameraPitch += (0 - cameraPitch) * 0.04;
    }

    angle = cameraYaw;
    const cosYaw = Math.cos(cameraYaw);
    const sinYaw = Math.sin(cameraYaw);
    const cosPitch = Math.cos(cameraPitch);
    const sinPitch = Math.sin(cameraPitch);

    const projected2D = [];
    const size = Math.min(canvas.width, canvas.height) * 0.28;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    vertices.forEach(v => {
      let x = v[0];
      let y = v[1];
      let z = v[2];
      let w = v[3];

      // Rotate X-W
      let x1 = x * Math.cos(angle) - w * Math.sin(angle);
      let w1 = x * Math.sin(angle) + w * Math.cos(angle);

      // Rotate Y-Z
      let y1 = y * Math.cos(angle) - z * Math.sin(angle);
      let z1 = y * Math.sin(angle) + z * Math.cos(angle);

      const distance4D = 2.5 + offset;
      const factor4D = 1 / (distance4D - w1);

      let x3d = x1 * factor4D;
      let y3d = y1 * factor4D;
      let z3d = z1 * factor4D;

      // Apply 3D Camera Rotation (Yaw & Pitch) to 3d projected coordinate
      let x3d_rot = x3d * cosYaw - z3d * sinYaw;
      let z3d_rot = x3d * sinYaw + z3d * cosYaw;
      let y3d_rot = y3d * cosPitch - z3d_rot * sinPitch;
      let z3d_final = y3d * sinPitch + z3d_rot * cosPitch;

      const distance3D = 2.2;
      const factor3D = 1 / (distance3D - z3d_final);

      let x2d = cx + x3d_rot * factor3D * size;
      let y2d = cy + y3d_rot * factor3D * size;

      projected2D.push({ x: x2d, y: y2d, factor: factor4D * factor3D });
    });

    // Draw Tesseract Edges
    ctx.lineWidth = 1.0;
    edges.forEach(edge => {
      const p1 = projected2D[edge[0]];
      const p2 = projected2D[edge[1]];

      const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      grad.addColorStop(0, `rgba(0, 240, 255, ${Math.min(0.4, p1.factor * 0.5)})`);
      grad.addColorStop(1, `rgba(0, 240, 255, ${Math.min(0.4, p2.factor * 0.5)})`);
      
      ctx.strokeStyle = grad;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    });

    // --- RENDER BACKGROUND VACUUM FLUCTUATIONS (QUANTUM FOAM) ---
    virtualParticles.forEach(p => {
      p.age += p.speed;
      if (p.age > Math.PI) {
        p.x = (Math.random() * 2 - 1) * 3.0;
        p.y = (Math.random() * 2 - 1) * 3.0;
        p.z = (Math.random() * 2 - 1) * 3.0;
        p.age = 0;
        p.speed = 0.015 + Math.random() * 0.02;
      }

      let xRot = p.x * cosYaw - p.z * sinYaw;
      let zRot = p.x * sinYaw + p.z * cosYaw;
      let yRot = p.y * cosPitch - zRot * sinPitch;
      let zRot2 = p.y * sinPitch + zRot * cosPitch;

      const distanceCloud = 5.0;
      const factorCloud = 1.0 / (distanceCloud - zRot2);
      const scaleCloud = size * 1.8;

      const sx = cx + xRot * factorCloud * scaleCloud;
      const sy = cy + yRot * factorCloud * scaleCloud;

      const alpha = Math.sin(p.age) * 0.15 * (coherence / 7.0);
      ctx.fillStyle = `rgba(0, 240, 255, ${alpha})`;
      ctx.beginPath();
      ctx.arc(sx, sy, 1.2, 0, Math.PI * 2);
      ctx.fill();
    });

    // --- RENDER MULTI-SCALE QUANTUM SYSTEMS ---
    phaseAngle += 0.05 * (1 + temp / 100.0);

    if (scaleMode === 'subatomic') {
      // --- SUBATOMIC SCALE: QCD QUARK FIELD ---
      // Update gluon packet positions
      const gluonSpeed = 0.015 * (1.0 + coupling * 0.4);
      for (let i = 0; i < gluonProgress.length; i++) {
        gluonProgress[i] += gluonSpeed;
        if (gluonProgress[i] > 1.0) {
          gluonProgress[i] -= 1.0;
        }
      }

      const quarksBase = (baryonType === 'pion') ? [
        { name: 'u', x: -0.9, y: 0, z: 0 },
        { name: 'd̅', x: 0.9, y: 0, z: 0 }
      ] : (baryonType === 'neutron' ? [
        { name: 'u', x: 0, y: 1.2, z: 0 },
        { name: 'd', x: -1.0, y: -0.6, z: 0 },
        { name: 'd', x: 1.0, y: -0.6, z: 0 }
      ] : [ // proton
        { name: 'u', x: 0, y: 1.2, z: 0 },
        { name: 'u', x: -1.0, y: -0.6, z: 0 },
        { name: 'd', x: 1.0, y: -0.6, z: 0 }
      ]);

      // Apply vibrations and 4D warping to quarks
      const vibAmp = (temp / 600.0) * (1.0 - respect) * 0.4 + 0.05;
      const vibFreq = 1.0 + coupling * 5.0;

      quarksBase.forEach((q, idx) => {
        const phase = angle * vibFreq + idx * (Math.PI * 2 / 3);
        q.x += Math.sin(phase) * vibAmp;
        q.y += Math.cos(phase * 1.3) * vibAmp;
        q.z += Math.sin(phase * 0.7) * vibAmp;

        if (respect > 0.05) {
          // Warp coordinates into banana arcs (respect resonance)
          q.x += respect * (q.y * q.y) * 0.15;
          q.y -= respect * (q.x * q.x) * 0.06;
        }
      });

      // 3D rotation and projections using Yaw & Pitch
      const quarksProjected = quarksBase.map((q, idx) => {
        let px = q.x;
        let py = q.y;
        let pz = q.z;
        
        let xRot = px * cosYaw - pz * sinYaw;
        let zRot = px * sinYaw + pz * cosYaw;
        let yRot = py * cosPitch - zRot * sinPitch;
        let zRot2 = py * sinPitch + zRot * cosPitch;

        const distanceCloud = 4.0;
        const factorCloud = 1.0 / (distanceCloud - zRot2);
        const scaleCloud = size * 1.5;

        const sx = cx + xRot * factorCloud * scaleCloud;
        const sy = cy + yRot * factorCloud * scaleCloud;
        return { sx, sy, name: q.name, factor: factorCloud };
      });

      // Draw Gluon spring flux tubes
      function drawGluonTube(p1, p2, frame) {
        const steps = 25;
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const baseLineX = p1.sx * (1 - t) + p2.sx * t;
          const baseLineY = p1.sy * (1 - t) + p2.sy * t;
          
          const dx = p2.sx - p1.sx;
          const dy = p2.sy - p1.sy;
          const len = Math.sqrt(dx*dx + dy*dy);
          const nx = -dy / (len || 1);
          const ny = dx / (len || 1);
          
          const coilAmp = 10.0 * (0.8 + coupling * 0.4); 
          const coilFreq = 6.0;
          const coilPhase = frame * 0.25 + t * Math.PI * 2 * coilFreq;
          const offset = Math.sin(coilPhase) * coilAmp;
          
          const px = baseLineX + nx * offset;
          const py = baseLineY + ny * offset;

          const colorPhase = (frame * 0.03 + t * 3.0) % 3;
          let col = 'rgba(0, 240, 255, 0.6)'; // Blue/Cyan
          if (colorPhase < 1) col = 'rgba(255, 56, 96, 0.6)'; // Red/Magenta
          else if (colorPhase < 2) col = 'rgba(57, 255, 20, 0.6)'; // Green
          
          ctx.fillStyle = col;
          ctx.beginPath();
          const rCoil = 1.5 + coupling * 0.8;
          ctx.arc(px, py, rCoil, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      function drawGluonPacket(p1, p2, t) {
        const baseLineX = p1.sx * (1 - t) + p2.sx * t;
        const baseLineY = p1.sy * (1 - t) + p2.sy * t;
        const dx = p2.sx - p1.sx;
        const dy = p2.sy - p1.sy;
        const len = Math.sqrt(dx*dx + dy*dy);
        const nx = -dy / (len || 1);
        const ny = dx / (len || 1);
        const coilAmp = 10.0 * (0.8 + coupling * 0.4);
        const coilFreq = 6.0;
        const coilPhase = (angle * 50) * 0.25 + t * Math.PI * 2 * coilFreq;
        const offset = Math.sin(coilPhase) * coilAmp;
        const px = baseLineX + nx * offset;
        const py = baseLineY + ny * offset;

        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ffffff';
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (quarksProjected.length === 3) {
        drawGluonTube(quarksProjected[0], quarksProjected[1], angle * 50);
        drawGluonTube(quarksProjected[1], quarksProjected[2], angle * 50);
        drawGluonTube(quarksProjected[2], quarksProjected[0], angle * 50);
        
        drawGluonPacket(quarksProjected[0], quarksProjected[1], gluonProgress[0]);
        drawGluonPacket(quarksProjected[1], quarksProjected[2], gluonProgress[1]);
        drawGluonPacket(quarksProjected[2], quarksProjected[0], gluonProgress[2]);
      } else {
        drawGluonTube(quarksProjected[0], quarksProjected[1], angle * 50);
        
        drawGluonPacket(quarksProjected[0], quarksProjected[1], gluonProgress[0]);
        drawGluonPacket(quarksProjected[1], quarksProjected[0], gluonProgress[1]);
      }

      // Draw Quarks (3D spheres with labels)
      quarksProjected.forEach((q, idx) => {
        const cShift = Math.floor(angle * 0.04 + idx) % 3;
        let qColor = 'rgba(255, 56, 96, 0.9)'; 
        if (cShift === 1) qColor = 'rgba(57, 255, 20, 0.9)'; 
        else if (cShift === 2) qColor = 'rgba(0, 240, 255, 0.9)'; 

        ctx.shadowBlur = 12;
        ctx.shadowColor = qColor;
        ctx.fillStyle = qColor;
        ctx.beginPath();
        const qSize = 16 * q.factor;
        ctx.arc(q.sx, q.sy, qSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#fff';
        ctx.font = `bold ${Math.floor(12 * q.factor)}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(q.name, q.sx, q.sy);
      });

    } else if (scaleMode === 'atomic') {
      // --- ATOMIC SCALE: HYDROGENIC ORBITALS (WITH ZEEMAN SPLITTING) ---
      // Draw Central Nucleus
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#ff2860';
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#ff2860';
      ctx.fill();
      ctx.shadowBlur = 0;

      activePoints.forEach(p => {
        let px = p.x;
        let py = p.y;
        let pz = p.z;

        // Zeeman splitting: Shift spin-up and spin-down coordinates oppositely along quantization Z-axis
        const spin = (p.sign > 0) ? 1.0 : -1.0;
        pz += spin * magnetic * 2.0;

        if (activeOrbitalType === '5d' && respect > 0.05) {
          const bend = respect * 0.55;
          px = p.x + bend * (p.y * p.y) * 0.15;
          py = p.y - bend * (p.x * p.x) * 0.06;
        }

        const noiseLevel = (temp / 600.0) * (1 - respect) * 1.5;
        px += (Math.random() - 0.5) * noiseLevel;
        py += (Math.random() - 0.5) * noiseLevel;
        pz += (Math.random() - 0.5) * noiseLevel;

        const boxSize = (activeOrbitalType === '1s') ? 4.0 : (activeOrbitalType === '2p' ? 8.0 : 12.0);
        let pxNorm = px / boxSize;
        let pyNorm = py / boxSize;
        let pzNorm = pz / boxSize;

        let xRot = pxNorm * cosYaw - pzNorm * sinYaw;
        let zRot = pxNorm * sinYaw + pzNorm * cosYaw;
        let yRot = pyNorm * cosPitch - zRot * sinPitch;
        let zRot2 = pyNorm * sinPitch + zRot * cosPitch;

        const distanceCloud = 5.0;
        const factorCloud = 1.0 / (distanceCloud - zRot2);
        const scaleCloud = size * 1.8;

        const sx = cx + xRot * factorCloud * scaleCloud;
        const sy = cy + yRot * factorCloud * scaleCloud;

        // Zeeman phase shift: spin-up/spin-down rotate out of phase in magnetic field
        const zPhaseShift = spin * magnetic * 2.5;
        const localPhase = Math.sin(phaseAngle + zPhaseShift + (p.sign * Math.PI / 2));
        
        let particleColor = 'rgba(0, 240, 255, '; 
        if (localPhase < 0) {
          particleColor = 'rgba(255, 56, 96, '; 
        }

        const pAlpha = Math.max(0.1, Math.min(0.9, Math.abs(localPhase) * 0.8)) * factorCloud * 1.2;

        ctx.fillStyle = particleColor + pAlpha + ')';
        ctx.beginPath();
        ctx.arc(sx, sy, 2, 0, Math.PI * 2);
        ctx.fill();
      });

    } else if (scaleMode === 'molecular') {
      // --- MOLECULAR SCALE: DIATOMIC LCAO BONDS ---
      const R_half = currentDistance * 0.8;
      const vibAmpNuc = (temp / 600.0) * 0.22 * Math.sin(angle * 5.0);
      const zHalfA = -R_half + vibAmpNuc;
      const zHalfB = R_half - vibAmpNuc;

      // Nucleus A
      let axRot = 0 * cosYaw - zHalfA * sinYaw;
      let azRot = 0 * sinYaw + zHalfA * cosYaw;
      let ayRot = 0 * cosPitch - azRot * sinPitch;
      let azRot2 = 0 * sinPitch + azRot * cosPitch;
      const afac = 1.0 / (5.0 - azRot2);
      const asx = cx + axRot * afac * (size * 1.8);
      const asy = cy + ayRot * afac * (size * 1.8);

      // Nucleus B
      let bxRot = 0 * cosYaw - zHalfB * sinYaw;
      let bzRot = 0 * sinYaw + zHalfB * cosYaw;
      let byRot = 0 * cosPitch - bzRot * sinPitch;
      let bzRot2 = 0 * sinPitch + bzRot * cosPitch;
      const bfac = 1.0 / (5.0 - bzRot2);
      const bsx = cx + bxRot * bfac * (size * 1.8);
      const bsy = cy + byRot * bfac * (size * 1.8);

      // Draw red nuclei
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#ff2860';
      ctx.fillStyle = '#ff2860';
      
      ctx.beginPath();
      ctx.arc(asx, asy, 7 * afac, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(bsx, bsy, 7 * bfac, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw LCAO clouds
      activeMolecularPoints.forEach(p => {
        let px = p.x;
        let py = p.y;
        let pz = p.z;

        if (respect > 0.05) {
          const bend = respect * 0.45;
          px += bend * (py * py) * 0.1;
          py -= bend * (px * px) * 0.05;
        }

        const noiseLevel = (temp / 600.0) * (1 - respect) * 1.5;
        px += (Math.random() - 0.5) * noiseLevel;
        py += (Math.random() - 0.5) * noiseLevel;
        pz += (Math.random() - 0.5) * noiseLevel;

        const boxSize = 4.0 + currentDistance / 2.0;
        let pxNorm = px / boxSize;
        let pyNorm = py / boxSize;
        let pzNorm = pz / boxSize;

        let xRot = pxNorm * cosYaw - pzNorm * sinYaw;
        let zRot = pxNorm * sinYaw + pzNorm * cosYaw;
        let yRot = pyNorm * cosPitch - zRot * sinPitch;
        let zRot2 = pyNorm * sinPitch + zRot * cosPitch;

        const distanceCloud = 5.0;
        const factorCloud = 1.0 / (distanceCloud - zRot2);
        const scaleCloud = size * 1.8;

        const sx = cx + xRot * factorCloud * scaleCloud;
        const sy = cy + yRot * factorCloud * scaleCloud;

        const localPhase = Math.sin(phaseAngle + (p.sign * Math.PI / 2));
        let particleColor = 'rgba(0, 240, 255, '; 
        if (localPhase < 0) {
          particleColor = 'rgba(255, 56, 96, '; 
        }

        const pAlpha = Math.max(0.1, Math.min(0.85, Math.abs(localPhase) * 0.75)) * factorCloud * 1.2;

        ctx.fillStyle = particleColor + pAlpha + ')';
        ctx.beginPath();
        ctx.arc(sx, sy, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // --- RENDER 4D SIR SUPERPOSITION AVATARS ---
    if (superpositionMode) {
      const numAvatars = Math.min(coherence, projected2D.length);
      ctx.font = `${Math.floor(20 + respect * 10)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < numAvatars; i++) {
        const node = projected2D[i * Math.floor(projected2D.length / numAvatars) % projected2D.length];
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'var(--color-quantum)';
        ctx.globalAlpha = Math.max(0.1, 0.8 - Math.abs(offset));
        ctx.fillText('🧑‍🏫', node.x, node.y);
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      }
    } else {
      ctx.font = '40px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowBlur = 25;
      ctx.shadowColor = 'var(--color-banana)';
      ctx.fillText('🧑‍🏫', cx, cy + 30); // Shift down slightly so it doesn't overlay nucleus directly
      ctx.shadowBlur = 0;
    }

    // --- RENDER CARRIER PIGEONS (Avian Packet Links) ---
    if (pigeonMode) {
      pigeons.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.font = '18px Arial';
        ctx.fillText('🐦', p.x, p.y);

        const targetNode = projected2D[0] ? projected2D[0] : { x: cx, y: cy };
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(targetNode.x, targetNode.y);
        ctx.lineWidth = 0.8;
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
        ctx.stroke();
      });
    }

    requestAnimationFrame(draw);
  }

  // Kickstart animation loop
  draw();
}

// --- BEE Transcendent Grade Card Generator ---
function generateQuantumGradeSheet() {
  const nameEl = document.getElementById('grade-name');
  const rollEl = document.getElementById('grade-roll');
  const majorEl = document.getElementById('grade-major');
  
  if (!nameEl || !rollEl || !majorEl) return;
  
  const name = nameEl.value.trim();
  const roll = rollEl.value.trim();
  const major = majorEl.options[majorEl.selectedIndex].text;
  
  const placeholderCard = document.getElementById('quantum-certificate-placeholder');
  const certCard = document.getElementById('quantum-certificate-card');
  
  if (!name || !roll) {
    alert("🌌 Spacetime Coordinate Lock Error:\nCandidate coordinates are in a state of vacuum. Name and Roll Number must be populated to resolve the wavefunction.");
    return;
  }
  
  // Deterministic seed hashing from Name + Roll
  let seed = 0;
  for (let i = 0; i < name.length; i++) seed += name.charCodeAt(i);
  for (let i = 0; i < roll.length; i++) seed += roll.charCodeAt(i);
  
  // Deterministic grade helpers
  const getScore = (subjSeed, minReal = 85, maxReal = 99) => {
    const val = (seed * subjSeed) % 100;
    const realPart = Math.floor(minReal + (val % (maxReal - minReal)));
    const imagPart = Math.floor(5 + (val % 20));
    return `${realPart} + ${imagPart}i`;
  };
  
  // Math components
  const scoreMath = getScore(11, 90, 99);
  const scorePigeon = getScore(23, 80, 96);
  const scoreSamosa = getScore(37, 75, 95);
  const scoreBio = getScore(43, 92, 100);
  
  // Assessment comment pool
  const comments = [
    `"Exquisite bio-energy resonance. Student was observed quantum tunneling through the canteen firewall."`,
    `"Candidate possesses high Guru-Disciple respect resonance. Wavefunction collapsed into dimensional approval."`,
    `"Strong inorganic exemplar resonance. Bunsen burners ignited spontaneously during review."`,
    `"Linear thinking limited to 3D Cartesian coordinates. Commendable effort but Newton is unimpressed."`,
    `"Candidate managed to send pigeon packet in negative latency. HOD approves."`
  ];
  const comment = comments[seed % comments.length];
  
  // Populating certificate card
  document.getElementById('cert-student-name').textContent = name;
  document.getElementById('cert-roll').textContent = roll;
  document.getElementById('cert-major').textContent = major;
  
  // Grades Table rows
  const tbody = document.getElementById('cert-grades-body');
  if (tbody) {
    tbody.innerHTML = `
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
        <td style="padding: 10px 4px;">Multi-Timeline Spacetime Calculus</td>
        <td style="padding: 10px 4px; text-align: right; font-family: monospace; color: var(--color-quantum); font-weight: bold;">${scoreMath}</td>
        <td style="padding: 10px 4px; text-align: right; color: var(--text-muted);">Decoupled</td>
      </tr>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
        <td style="padding: 10px 4px;">Advanced Avian Packet Routing (TCPP)</td>
        <td style="padding: 10px 4px; text-align: right; font-family: monospace; color: var(--color-quantum); font-weight: bold;">${scorePigeon}</td>
        <td style="padding: 10px 4px; text-align: right; color: var(--text-muted);">Coherent</td>
      </tr>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
        <td style="padding: 10px 4px;">Inorganic NCERT Samosa Chemistry</td>
        <td style="padding: 10px 4px; text-align: right; font-family: monospace; color: var(--color-banana); font-weight: bold;">${scoreSamosa}</td>
        <td style="padding: 10px 4px; text-align: right; color: var(--text-muted);">Super-saturated</td>
      </tr>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
        <td style="padding: 10px 4px;">Human Bio-Energy Foot-Induction</td>
        <td style="padding: 10px 4px; text-align: right; font-family: monospace; color: var(--color-bio); font-weight: bold;">${scoreBio}</td>
        <td style="padding: 10px 4px; text-align: right; color: var(--text-muted);">Levitating</td>
      </tr>
    `;
  }
  
  const commentsEl = document.getElementById('cert-comments');
  if (commentsEl) commentsEl.textContent = comment;
  
  // Toggle Visibility
  if (placeholderCard) placeholderCard.style.display = 'none';
  if (certCard) certCard.style.display = 'block';
  
  // Play chiming audio if unmuted
  if (typeof quantumAudio !== 'undefined') {
    quantumAudio.playSuperimpose();
  }
}

// --- Kabutar Science Live Routing Terminal ---
const pigeonLogs = [
  "Packet dispatched. Routing via local chimney superposition.",
  "Pigeon intercepted by a local Dholakpur cat. Initiating aura re-transmission...",
  "Latency warning: Carrier pigeon paused to steal samosa crumbs at local tapri.",
  "Entangled wing coordinates collapsed. Packet delivered 4 seconds ago (time-reversed delivery).",
  "Pigeon flying over Dholakpur sky node. Translocation angle aligned at 44 degrees.",
  "Breadcrumb distraction detected. Speed dropping to 0.4m/s. Hunger coefficient: Critical.",
  "Siddhi Sai entangled pigeon's flight path. Teleportation sequence completed.",
  "Wavefunction collapsed at server. Data packet successfully materialized."
];

function runPigeonTerminalCommand(action) {
  const feed = document.getElementById('pigeon-console-feed');
  if (!feed) return;
  
  const timeStr = `[${new Date().toLocaleTimeString()}]`;
  let lineText = '';
  let lineClass = '';
  
  if (action === 'ping') {
    const randomLog = pigeonLogs[Math.floor(Math.random() * pigeonLogs.length)];
    lineText = `${timeStr} [PING] KABUTAR-${Math.floor(Math.random() * 15 + 1)}: ${randomLog}`;
    if (randomLog.includes("warning") || randomLog.includes("distraction")) {
      lineClass = 'warning';
    } else if (randomLog.includes("collapsed") || randomLog.includes("materialized")) {
      lineClass = 'system';
    }
    
    // Play chirp sound if unmuted
    if (typeof quantumAudio !== 'undefined') {
      quantumAudio.playPigeonChirp();
    }
  } else if (action === 'feed') {
    lineText = `${timeStr} [CONTROL] Scattered fresh breadcrumbs. Avian latency reset to 0.05ms (Aura hunger cleared).`;
    lineClass = 'system';
    
    if (typeof quantumAudio !== 'undefined') {
      quantumAudio.playSuperimpose();
    }
  } else if (action === 'entangle') {
    lineText = `${timeStr} [QUANTUM] Siddhi Sai entangled wings. Wavefunction coherence boosted to 100%. Relativistic delivery enabled.`;
    lineClass = 'system';
    
    if (typeof quantumAudio !== 'undefined') {
      quantumAudio.playCollapse();
    }
  } else if (action === 'clear') {
    feed.innerHTML = `<div class="console-line system">[SYSTEM] Console logs cleared.</div>`;
    return;
  }
  
  const newLine = document.createElement('div');
  newLine.className = `console-line ${lineClass}`;
  newLine.textContent = lineText;
  feed.appendChild(newLine);
  
  // Auto scroll
  feed.scrollTop = feed.scrollHeight;
}

function clearPigeonLogs() {
  runPigeonTerminalCommand('clear');
}

// --- Canteen Banana-Pay checkout simulator ---
function updateBananaCart() {
  const checkboxes = ['cart-chai', 'cart-samosa', 'cart-laddu', 'cart-ethanol', 'cart-smoke'];
  let total = 0;
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.checked) {
      total += parseInt(el.getAttribute('data-price') || '0', 10);
    }
  });
  
  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = total;
  
  const btn = document.getElementById('btn-checkout');
  if (btn) {
    btn.disabled = (total === 0);
  }
}

function checkoutBananaCart() {
  const def = document.getElementById('checkout-status-default');
  const scan = document.getElementById('checkout-status-scanning');
  const succ = document.getElementById('checkout-status-success');
  
  if (!def || !scan || !succ) return;
  
  // Play chime sound
  if (typeof quantumAudio !== 'undefined') {
    quantumAudio.playSuperimpose();
  }
  
  def.style.display = 'none';
  scan.style.display = 'block';
  
  setTimeout(() => {
    scan.style.display = 'none';
    succ.style.display = 'block';
    
    // Fill receipt details dynamically
    const receiptEl = document.getElementById('checkout-receipt-body');
    if (receiptEl) {
      receiptEl.innerHTML = `
        <div style="text-align: center; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 5px; color: #fff; margin-bottom: 5px; font-weight: bold;">BBIT CANTEEN RECEIPT</div>
        <div>ID: TXN-${Math.floor(Math.random() * 900000 + 100000)}</div>
        <div>Timeline: T-2 (Dholakpur Canteen)</div>
        <div>Status: Materialized in Canteen Oven</div>
        <div>Aura Match: 99.98% Coherent</div>
        <div style="text-align: center; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 5px; color: var(--color-banana); margin-top: 5px;">Enjoy your 4D breakfast!</div>
      `;
    }
    
    // Play success sound
    if (typeof quantumAudio !== 'undefined') {
      quantumAudio.playCollapse();
    }
  }, 2200);
}

function resetBananaCart() {
  const checkboxes = ['cart-chai', 'cart-samosa', 'cart-laddu', 'cart-ethanol', 'cart-smoke'];
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = false;
  });
  
  updateBananaCart();
  
  const def = document.getElementById('checkout-status-default');
  const scan = document.getElementById('checkout-status-scanning');
  const succ = document.getElementById('checkout-status-success');
  
  if (def && scan && succ) {
    def.style.display = 'block';
    scan.style.display = 'none';
    succ.style.display = 'none';
  }
}

// --- Guru-Disciple Respect Induction Scanner ---
function initRespectScanner() {
  const track = document.getElementById('respect-track');
  const handle = document.getElementById('respect-handle');
  const progress = document.getElementById('respect-progress');
  const speedEl = document.getElementById('respect-speed-val');
  const alignEl = document.getElementById('respect-align-val');
  const statusEl = document.getElementById('respect-status-text');
  
  if (!track || !handle) return;
  
  let isDragging = false;
  let startX = 0;
  let lastTime = 0;
  let lastX = 0;
  let speedRecords = [];
  
  const minX = 5;
  const getMaxX = () => track.clientWidth - handle.clientWidth - 5;
  
  const onStart = (e) => {
    isDragging = true;
    startX = (e.touches ? e.touches[0].clientX : e.clientX) - handle.offsetLeft;
    lastTime = Date.now();
    lastX = handle.offsetLeft;
    speedRecords = [];
    handle.style.cursor = 'grabbing';
    statusEl.innerHTML = `<span style="font-size: 2.2rem; display: block; margin-bottom: 10px;">⚡</span>Calibrating respect induction. Move very slowly with maximum devotion...`;
    statusEl.style.color = 'var(--text-main)';
  };
  
  const onMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const maxX = getMaxX();
    let x = clientX - startX;
    
    if (x < minX) x = minX;
    if (x > maxX) x = maxX;
    
    handle.style.left = `${x}px`;
    
    const percent = Math.round(((x - minX) / (maxX - minX)) * 100);
    if (progress) progress.style.width = `${percent}%`;
    if (alignEl) alignEl.textContent = percent;
    
    // Calculate instantaneous speed
    const now = Date.now();
    const dt = (now - lastTime) / 1000; // seconds
    const dx = Math.abs(x - lastX);
    
    if (dt > 0.05) {
      const speed = dx / dt; // pixels per second
      const speedMeters = speed / 300; // normalized speed
      if (speedEl) speedEl.textContent = speedMeters.toFixed(2);
      speedRecords.push(speedMeters);
      
      lastTime = now;
      lastX = x;
    }
  };
  
  const onEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    handle.style.cursor = 'grab';
    
    const maxX = getMaxX();
    const finalX = handle.offsetLeft;
    const percent = Math.round(((finalX - minX) / (maxX - minX)) * 100);
    
    if (percent < 90) {
      // Released too early
      handle.style.left = `${minX}px`;
      if (progress) progress.style.width = '0%';
      if (alignEl) alignEl.textContent = '0';
      statusEl.innerHTML = `<span style="font-size: 2.2rem; display: block; margin-bottom: 10px;">❌</span>Calibration failed. You released before touching the feet. Try again.`;
      statusEl.style.color = 'var(--color-banana)';
      return;
    }
    
    // Check average and maximum speed to check respect
    const maxRecordedSpeed = Math.max(...speedRecords, 0);
    
    if (maxRecordedSpeed > 0.35) {
      // Too fast! Newtonian insolence!
      handle.style.left = `${minX}px`;
      if (progress) progress.style.width = '0%';
      if (alignEl) alignEl.textContent = '0';
      statusEl.innerHTML = `<span style="font-size: 2.2rem; display: block; margin-bottom: 10px;">🚨</span><strong>Newtonian Insolence!</strong><br>Speed: ${maxRecordedSpeed.toFixed(2)} m/s is too fast. You swiped with zero respect. Recalibrate and move slowly.`;
      statusEl.style.color = 'var(--color-banana)';
      
      if (typeof quantumAudio !== 'undefined') {
        quantumAudio.playCollapse();
      }
    } else {
      // Successful respect induction!
      statusEl.innerHTML = `<span style="font-size: 2.2rem; display: block; margin-bottom: 10px;">🧬</span><strong>Aura Resonance Unlocked!</strong><br>Respect quotient (\\(\\gamma\\)): \\(10^{15}\\) units.<br>Your bio-energy flow has aligned with HOD 4 Dimensional Sir.`;
      statusEl.style.color = '#39ff14';
      
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
      }
      
      if (typeof quantumAudio !== 'undefined') {
        quantumAudio.playSuperimpose();
      }
    }
  };
  
  handle.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);
  
  handle.addEventListener('touchstart', onStart);
  window.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('touchend', onEnd);
}


// =============================================
// --- FEATURE: Dholakpur News Ticker ---
// =============================================
function initNewsTicker() {
  const ticker = document.getElementById('ticker-content');
  if (!ticker) return;
  // Clone all items to create seamless infinite loop
  const clone = ticker.innerHTML;
  ticker.innerHTML = clone + clone;
}


// =============================================
// --- FEATURE: BBIT Placement Cell Slot Machine ---
// =============================================
const placementData = {
  companies: [
    'Dholakpur Chai Tapri Corp',
    '4th Dimension Holdings LLC',
    'NCERT Samosa Industries',
    'Quantum Smoke Ring Pvt Ltd',
    'Kabutar Cloud Services',
    'Bio-Energy Wellness Labs',
    'Infinite Banana Exports',
    'Wormhole Logistics India',
    'Siddhi Sai Foundation Trust',
    'Dholakpur Municipal Corp (4D Div.)'
  ],
  roles: [
    'Senior Ginger Grating Architect',
    'Interdimensional HR Consultant',
    'Inorganic Filling Quality Auditor',
    'Wormhole Combustion Engineer',
    'Avian DevOps Lead',
    'Chief Bio-Energy Calibration Officer',
    'Quantum Canteen Menu Optimizer',
    'Pigeon Packet Loss Analyst',
    'Dimensional Compliance Inspector',
    'Electron Mood Counsellor'
  ],
  ctcs: [
    '∞ Bananas/yr',
    '3 + 2i LPA',
    '√(-1) Crore',
    '42 Bananas + Benefits',
    'Teleportation Allowance',
    '10^15 Bio-Energy Units',
    'π × e LPA (irrational)',
    '0 + ∞i CTC (complex)',
    '1/0 LPA (undefined)',
    'Schrödinger Package (exists & doesn\'t)'
  ],
  comments: [
    '4D Sir personally approved this placement. Your molecules will be reassembled at the Dholakpur office on Day 1.',
    'Package is in imaginary currency. You\'ll need to exist in complex coordinates to withdraw your salary.',
    'Note: This offer is valid only in dimensions ≥ 4. Newton was rejected from the same role.',
    'Congratulations. The pigeon carrying your offer letter is currently in superposition between Dholakpur and your inbox.',
    'Your CTC has been verified by Siddhi Sai. He grated ginger in celebration. 4D Sir nodded.',
    'HR requires you to demonstrate bio-energy flow ≥ 10³ units before your joining date. Practice accordingly.',
    'This role was previously held by an electron. It quit due to uncertainty about its position.',
    'Your signing bonus is a samosa that contains infinite potato. Handle with dimensional care.',
    'Interview feedback: "Candidate showed promising ability to not question physics. Perfect fit."',
    'Note: Lohit from the NCERT department will be your mentor. Bring your own Bunsen burner.'
  ]
};

let isSpinning = false;

function spinPlacement() {
  if (isSpinning) return;
  isSpinning = true;
  
  const companyEl = document.getElementById('slot-company');
  const roleEl = document.getElementById('slot-role');
  const ctcEl = document.getElementById('slot-ctc');
  const commentBox = document.getElementById('placement-comment');
  const commentText = document.getElementById('placement-comment-text');
  const btn = document.getElementById('btn-spin-placement');
  
  btn.textContent = '⏳ Spinning...';
  btn.style.opacity = '0.6';
  commentBox.style.display = 'none';
  
  // Pick final results
  const finalCompany = placementData.companies[Math.floor(Math.random() * placementData.companies.length)];
  const finalRole = placementData.roles[Math.floor(Math.random() * placementData.roles.length)];
  const finalCTC = placementData.ctcs[Math.floor(Math.random() * placementData.ctcs.length)];
  const finalComment = placementData.comments[Math.floor(Math.random() * placementData.comments.length)];
  
  // Animate spinning
  let spins = 0;
  const maxSpins = 20;
  const spinInterval = setInterval(() => {
    companyEl.innerHTML = `<span>${placementData.companies[Math.floor(Math.random() * placementData.companies.length)]}</span>`;
    roleEl.innerHTML = `<span>${placementData.roles[Math.floor(Math.random() * placementData.roles.length)]}</span>`;
    ctcEl.innerHTML = `<span>${placementData.ctcs[Math.floor(Math.random() * placementData.ctcs.length)]}</span>`;
    
    spins++;
    if (spins >= maxSpins) {
      clearInterval(spinInterval);
      
      // Land on final values with staggered timing
      setTimeout(() => {
        companyEl.innerHTML = `<span style="color: var(--color-quantum);">${finalCompany}</span>`;
      }, 200);
      setTimeout(() => {
        roleEl.innerHTML = `<span style="color: var(--color-bio);">${finalRole}</span>`;
      }, 500);
      setTimeout(() => {
        ctcEl.innerHTML = `<span style="color: var(--color-banana); font-weight: bold;">${finalCTC}</span>`;
        // Show comment
        commentText.textContent = finalComment;
        commentBox.style.display = 'block';
        btn.textContent = '🎰 Spin Again';
        btn.style.opacity = '1';
        isSpinning = false;
      }, 800);
    }
  }, 80);
}


// =============================================
// --- FEATURE: 4D Sir Attendance Paradox ---
// =============================================
function initAttendanceParadox() {
  const grid = document.getElementById('classroom-grid');
  if (!grid) return;
  
  const rooms = [
    { emoji: '🏫', label: 'Lecture Hall A' },
    { emoji: '🧪', label: 'Chemistry Lab' },
    { emoji: '📐', label: 'Math Wing' },
    { emoji: '🔬', label: 'Bio-Energy Lab' },
    { emoji: '🏢', label: 'Admin Block' },
    { emoji: '🍵', label: 'Chai Tapri #1' },
    { emoji: '🏠', label: 'Staff Quarters' },
    { emoji: '🎓', label: 'Lecture Hall B' },
    { emoji: '🚬', label: 'Smoke Zone' },
    { emoji: '📚', label: 'Library' },
    { emoji: '🍵', label: 'Chai Tapri #2' },
    { emoji: '🧮', label: 'Physics Wing' },
    { emoji: '🍌', label: 'Banana Garden' },
    { emoji: '🕳️', label: 'Wormhole Exit' }
  ];
  
  let observeCount = 0;
  let escapeCount = 0;
  let lastClickTime = 0;
  let rapidClicks = 0;
  
  // Build grid
  rooms.forEach((room, i) => {
    const card = document.createElement('div');
    card.className = 'classroom-card';
    card.innerHTML = `
      <span class="room-emoji">${room.emoji}</span>
      <span class="room-label">${room.label}</span>
      <div style="font-size: 0.7rem; margin-top: 4px; color: var(--color-bio);">✅ Sir Present</div>
    `;
    card.dataset.index = i;
    card.addEventListener('click', () => observeSir(card, i, rooms));
    grid.appendChild(card);
  });
  
  function observeSir(card, index, rooms) {
    const now = Date.now();
    const msgEl = document.getElementById('attendance-msg');
    
    // Track rapid clicking
    if (now - lastClickTime < 400) {
      rapidClicks++;
    } else {
      rapidClicks = 0;
    }
    lastClickTime = now;
    
    // Heisenberg limit reached!
    if (rapidClicks >= 5) {
      msgEl.style.display = 'block';
      msgEl.style.color = '#ff2860';
      msgEl.innerHTML = '⚠️ <strong>HEISENBERG UNCERTAINTY LIMIT REACHED!</strong><br>You cannot know both Sir\'s location AND his velocity. Observation system temporarily collapsed.';
      
      // Glitch all cards
      grid.querySelectorAll('.classroom-card').forEach(c => {
        c.style.animation = 'none';
        c.offsetHeight; // trigger reflow
        c.style.animation = 'glitch-card 0.15s ease 3';
      });
      
      // Reset after 2 seconds
      setTimeout(() => {
        resetSuperposition();
        rapidClicks = 0;
      }, 2000);
      
      escapeCount += rooms.length;
      document.getElementById('escape-count').textContent = escapeCount;
      return;
    }
    
    observeCount++;
    escapeCount += rooms.length - 1;
    
    document.getElementById('observe-count').textContent = observeCount;
    document.getElementById('escape-count').textContent = escapeCount;
    document.getElementById('superposition-state').textContent = `Collapsed → ${rooms[index].label}`;
    document.getElementById('superposition-state').style.color = 'var(--color-quantum)';
    
    // Collapse wavefunction — Sir only in clicked room
    grid.querySelectorAll('.classroom-card').forEach((c, j) => {
      if (j === index) {
        c.classList.add('observed');
        c.querySelector('div:last-child').innerHTML = '🧑‍🏫 <strong style="color: var(--color-bio);">SIR FOUND!</strong>';
      } else {
        c.classList.remove('observed');
        c.querySelector('div:last-child').innerHTML = '<span style="color: #ff2860;">❌ Vanished</span>';
        c.style.opacity = '0.5';
      }
    });
    
    msgEl.style.display = 'block';
    msgEl.style.color = 'var(--color-quantum)';
    
    const observations = [
      `Wavefunction collapsed. 4D Sir materialized in ${rooms[index].label}. ${rooms.length - 1} parallel instances dissolved.`,
      `Observer effect triggered. Sir is now definitely in ${rooms[index].label}. Or is he? No, he is. Probably.`,
      `${rooms[index].label} confirms Sir's presence. He was mid-sentence about bio-energy when you looked. He always is.`,
      `Sir spotted in ${rooms[index].label}, reportedly explaining why Newton was wrong to a fire extinguisher.`,
      `Confirmed: 4D Sir is in ${rooms[index].label}. He looked directly at you and said "3D students..." before shaking his head.`
    ];
    msgEl.textContent = observations[Math.floor(Math.random() * observations.length)];
    
    // Auto-reset to superposition after 3s
    setTimeout(resetSuperposition, 3000);
  }
  
  function resetSuperposition() {
    grid.querySelectorAll('.classroom-card').forEach(c => {
      c.classList.remove('observed');
      c.querySelector('div:last-child').innerHTML = '<span style="color: var(--color-bio);">✅ Sir Present</span>';
      c.style.opacity = '1';
      c.style.animation = '';
    });
    document.getElementById('superposition-state').textContent = 'Superposition (all rooms)';
    document.getElementById('superposition-state').style.color = 'var(--color-bio)';
    document.getElementById('attendance-msg').style.display = 'none';
  }
}

// Add glitch keyframe dynamically
(function() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes glitch-card {
      0% { transform: translate(0); filter: hue-rotate(0deg); }
      25% { transform: translate(-3px, 2px); filter: hue-rotate(90deg); }
      50% { transform: translate(3px, -2px); filter: hue-rotate(180deg); }
      75% { transform: translate(-1px, -3px); filter: hue-rotate(270deg); }
      100% { transform: translate(0); filter: hue-rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
})();


// =============================================
// --- FEATURE: C.C.'s Jealousy Live Feed ---
// =============================================
function initJealousyFeed() {
  const feed = document.getElementById('jealousy-feed');
  if (!feed) return;
  
  const thoughts = [
    "Day 847: Performed complex midnight ritual. 4D Sir glanced at me for 0.3 seconds. Progress.",
    "Siddhi Sai just walked past Sir without doing anything. Sir smiled. I've been chanting for 6 hours.",
    "I memorized 14 more Rankers book indexes today. Banana Boy grated ginger once. Sir gave him a standing ovation.",
    "Why does Sir keep calling him 'Banana Boy' with affection? When he calls me 'C.C.' it sounds like a court summons.",
    "Today I aligned my notebooks at exactly 44.0000° sub-angles. Sir didn't notice. Siddhi Sai sneezed. Sir said 'bless you'.",
    "Overheard Sir telling Lohit that my bio-energy readings are 'interesting'. Is that good? It's good, right? RIGHT?",
    "Banana Boy solved a differential equation wrong. Sir laughed and called it 'creative'. When I get it wrong, Sir sighs in 4 dimensions.",
    "Sir mentioned me in class today. He said 'Don't be like C.C.' to a freshman. I'm going to cry in the 5th dimension.",
    "I bought the exact same pen that Siddhi Sai uses. Sir noticed immediately. He asked if I stole it. I didn't steal it.",
    "Day 848: Mazin solved 200 problems overnight. I solved 201. Sir didn't count mine. I know because I was watching.",
    "Siddhi Sai brought Sir chai. Sir drank it. I brought Sir chai once. He used it to calibrate his bio-energy sensor.",
    "Just found out Lohit got a recommendation letter from Sir. It was one sentence: 'He knows NCERT.' Mine was blank.",
    "I stayed 14 hours in the library today. When I came out, Siddhi Sai was sitting outside eating a banana. Sir waved at HIM.",
    "The pigeon delivered a message to everyone except me today. I'm starting to think the pigeons are in on it.",
    "Varun told me to 'let it go.' Varun literally gave up physics for bio-energy. I'm not taking advice from him.",
    "Sir exists in 4 dimensions. I've been trying to reach the 4th dimension for 2 years. I can feel the 3.5th. Almost there.",
    "I just calculated that Banana Boy has spent 73% less study time than me this semester. His grades are still better. I'm fine.",
    "Sir looked at me today. Directly at me. For 2 full seconds. Then he looked at the wall behind me. He was looking at the wall.",
    "Midnight. I'm in the lab alone. I can feel my bio-energy rising. Or it might be the canteen samosa. Hard to tell.",
    "UPDATE: The samosa. It was the samosa."
  ];
  
  let thoughtIndex = 0;
  
  function addThought() {
    const line = document.createElement('div');
    line.className = 'jealousy-line';
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    line.innerHTML = `<span style="color: var(--color-banana); font-size: 0.75rem; font-style: normal; margin-right: 8px;">[${timestamp}]</span> ${thoughts[thoughtIndex % thoughts.length]}`;
    
    feed.appendChild(line);
    
    // Trigger animation
    requestAnimationFrame(() => {
      line.style.opacity = '1';
    });
    
    // Keep max 6 visible, remove oldest
    while (feed.children.length > 6) {
      feed.removeChild(feed.firstChild);
    }
    
    // Scroll to bottom
    feed.scrollTop = feed.scrollHeight;
    
    thoughtIndex++;
  }
  
  // Start with 3 thoughts
  addThought();
  setTimeout(addThought, 800);
  setTimeout(addThought, 1600);
  
  // Add new thought every 5 seconds
  setInterval(addThought, 5000);
}


// =============================================
// --- FEATURE: BBIT Research Paper Generator ---
// =============================================
function generateResearchPaper() {
  const input = document.getElementById('paper-topic-input');
  const output = document.getElementById('paper-output');
  const titleEl = document.getElementById('paper-title');
  const authorsEl = document.getElementById('paper-authors');
  const abstractEl = document.getElementById('paper-abstract');
  const journalEl = document.getElementById('paper-journal');
  
  let topic = (input.value || '').trim();
  if (!topic) {
    // Random default topic
    const defaults = ['samosa', 'cricket', 'WiFi', 'homework', 'chai', 'sleep', 'exam', 'bicycle', 'monsoon', 'selfie'];
    topic = defaults[Math.floor(Math.random() * defaults.length)];
    input.value = topic;
  }
  
  const T = topic.charAt(0).toUpperCase() + topic.slice(1);
  const t = topic.toLowerCase();
  
  const titles = [
    `On the N-Dimensional ${T} Theorem and Its Implications for Bio-Energy Induction in ${T}-Based Systems`,
    `${T} and the 4th Dimension: A Rigorous Proof That ${T} Exists Beyond Newtonian Constraints`,
    `Quantum ${T} Entanglement: How ${T} Achieves Superposition Under Dholakpur Field Conditions`,
    `The ${T}-Bio-Energy Coupling Constant: Experimental Evidence from HOD 4D Sir's Laboratory`,
    `Non-Newtonian ${T} Dynamics: Why Isaac Newton Could Never Understand ${T}`,
    `A Unified Field Theory of ${T}, Pigeon Routing, and Bio-Energy Flow in N ≥ 4 Dimensions`
  ];
  
  const authorSets = [
    `4 Dimensional Sir, S. Sai (Banana Boy), L. Kumar (NCERT Xtract Dept.)`,
    `HOD 4D Sir (Principal Investigator), S. Sai, M. Khan (10k Problems Lab)`,
    `4 Dimensional Sir, V. Sharma (Bio-Energy Div.), C.C. (disputed co-authorship)`,
    `S. Sai (Banana Boy Research Chair), 4 Dimensional Sir (4D Supervisor), Pigeon #7 (Data Courier)`
  ];
  
  const abstracts = [
    `We present a novel framework demonstrating that the internal structure of ${t} extends into the 4th spatial dimension, yielding infinite observable properties with zero Newtonian explanation for the 3D crust surface. Our experimental results confirm that bio-energy flow velocity increases by 420% when ${t} is encountered within a 5-meter radius of HOD 4 Dimensional Sir. Newton's third law was observed to fail during the experiment; the ${t} pushed back but the student did not move. A carrier pigeon was used to transmit experimental data, arriving 3 days before the experiment was conducted, confirming retrocausal information transfer via avian routing protocols.`,
    
    `This paper establishes the ${T}-Bio-Energy Coupling Constant (\\(\\kappa_{${t[0]}}\\)) to be precisely \\(\\pi \\times e \\times 4D\\) units, a value that cannot be computed in fewer than 4 spatial dimensions. We show that when Siddhi Sai (Banana Boy) interacts with ${t}, the surrounding quantum field collapses into a state of perfect molecular harmony. Control experiments using C.C. showed no such effect; in fact, bio-energy readings decreased by \\(10^{-3}\\) units, which is within measurement error of "complete irrelevance." All data was peer-reviewed by a panel of 14 pigeons and 1 very confident Bunsen burner.`,
    
    `We investigate the quantum mechanical properties of ${t} under extreme Dholakpur conditions (T = 45°C, humidity = 90%, pigeon density = 14/m²). Our key finding: ${T} exhibits wave-particle duality when observed by 4D Sir, but collapses into a classical state when observed by anyone with fewer than 4 perceivable spatial dimensions. This confirms Theorem 3 (4 Dimensional Perception Monopoly). Additionally, we prove that ${t} follows non-commutative algebra: \\(\\text{${T}} \\times \\text{Bio-Energy} \\neq \\text{Bio-Energy} \\times \\text{${T}}\\). The order matters. As does respect for HOD. Mazin independently verified this result by solving 10,000 practice problems about ${t}.`,
    
    `Through a series of groundbreaking experiments at BBIT's Advanced ${T} Research Facility (a repurposed chai tapri), we demonstrate that ${t} exhibits properties that are fundamentally incompatible with 3-dimensional physics. Specifically: (1) ${T} mass is imaginary: \\(m_{${t[0]}} = 42i\\) kg, (2) ${T} velocity exceeds light speed when no one is watching, and (3) ${T} exhibits a strong affinity for Siddhi Sai that cannot be explained by gravitational attraction alone. We propose that ${t} is, in fact, a 4-dimensional object projected into 3D space, much like HOD 4 Dimensional Sir himself. The paper concludes with a proof that Newton, had he encountered ${t}, would have abandoned the Principia and opened a chai tapri in Dholakpur.`
  ];
  
  const journals = [
    `Published in: <strong>Journal of Non-Newtonian ${T} Dynamics</strong>, Dholakpur Branch, Vol. 4D, Issue ∞`,
    `Published in: <strong>BBIT Proceedings of Interdimensional ${T} Studies</strong>, Peer-reviewed by 14 pigeons`,
    `Published in: <strong>Annals of ${T} and Bio-Energy</strong>, Special Banana Boy Edition, ISSN: 000-BANANA`,
    `Published in: <strong>The Dholakpur Review of Everything</strong>, HOD 4D Sir (Editor-in-Chief), Impact Factor: ∞`
  ];
  
  titleEl.textContent = titles[Math.floor(Math.random() * titles.length)];
  authorsEl.textContent = authorSets[Math.floor(Math.random() * authorSets.length)];
  abstractEl.textContent = abstracts[Math.floor(Math.random() * abstracts.length)];
  journalEl.innerHTML = journals[Math.floor(Math.random() * journals.length)];
  
  output.style.display = 'block';
  output.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// =============================================
// --- FEATURE: BBIT Admissions Application ---
// =============================================
function submitBbitApplication(event) {
  event.preventDefault();
  
  const nameEl = document.getElementById('app-name');
  const rollEl = document.getElementById('app-roll');
  const deptEl = document.getElementById('app-dept');
  const chemEl = document.getElementById('app-chem');
  const feetEl = document.getElementById('app-feet');
  
  const checkNewton = document.getElementById('app-check-newton');
  const checkBanana = document.getElementById('app-check-banana');
  const checkFailure = document.getElementById('app-check-failure');
  
  if (!nameEl || !rollEl || !deptEl || !chemEl || !feetEl) return;
  
  const name = nameEl.value.trim();
  const roll = rollEl.value.trim();
  const deptText = deptEl.options[deptEl.selectedIndex].text;
  const chemScore = parseFloat(chemEl.value);
  const feetTouched = parseInt(feetEl.value);
  
  if (!name || !roll || isNaN(chemScore) || isNaN(feetTouched)) {
    alert("🌌 Coordinate Error: Candidate credentials must be fully filled to collapse wavefunction.");
    return;
  }
  
  if (!checkNewton.checked || !checkBanana.checked || !checkFailure.checked) {
    alert("⚠️ Loyalty Check Failed: You must affirm absolute alignment to the BBIT postulates by checking all checkboxes.");
    return;
  }
  
  // Audio context initialization
  if (window.quantumAudio) {
    window.quantumAudio.init();
  }
  
  // Show loading state inside the card
  const formCard = document.getElementById('application-form-card');
  const formHtml = formCard.innerHTML; // Store original html to restore later
  
  formCard.style.pointerEvents = 'none';
  formCard.innerHTML = `
    <div style="text-align: center; padding: 40px 20px;">
      <div class="loader-spinner" style="border: 4px solid rgba(255, 255, 255, 0.1); border-top: 4px solid var(--color-quantum); border-radius: 50%; width: 50px; height: 50px; margin: 0 auto 20px auto; animation: spin 1s linear infinite;"></div>
      <h4 style="font-family: var(--font-heading); margin-bottom: 10px; color: #fff;">Entangling Application Coordinates...</h4>
      <p id="app-loading-step" style="color: var(--text-muted); font-size: 0.9rem; font-style: italic;">Routing packet through pigeon clouds...</p>
    </div>
  `;
  
  if (!document.getElementById('spinner-style-override')) {
    const style = document.createElement('style');
    style.id = 'spinner-style-override';
    style.innerHTML = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
  
  const steps = [
    "Routing packet through pigeon clouds...",
    "Measuring ginger-grating efficiency indices...",
    "Querying HOD 4 Dimensional Sir's Hilbert space...",
    "Calibrating Bunsen burner safety thresholds..."
  ];
  
  let currentStep = 0;
  const stepInterval = setInterval(() => {
    currentStep++;
    const stepEl = document.getElementById('app-loading-step');
    if (stepEl && currentStep < steps.length) {
      stepEl.textContent = steps[currentStep];
      if (window.quantumAudio) {
        window.quantumAudio.playChime(440 + currentStep * 50, 880 + currentStep * 50, 0.1);
      }
    }
  }, 800);
  
  setTimeout(() => {
    clearInterval(stepInterval);
    
    let statusText = "STATUS: RESOLVED";
    let commentText = "";
    let statusColor = "var(--color-bio)";
    let borderStyle = "2px dashed var(--color-bio)";
    let badgeBg = "rgba(57, 255, 20, 0.05)";
    
    // Deterministic Rank Hash based on Name & Roll
    let seed = 0;
    for (let i = 0; i < name.length; i++) seed += name.charCodeAt(i);
    for (let i = 0; i < roll.length; i++) seed += roll.charCodeAt(i);
    const complexRankReal = Math.floor(1 + (seed % 100));
    const complexRankImag = Math.floor(2 + (seed % 20));
    const calculatedRank = `${complexRankReal} + ${complexRankImag}i`;
    
    if (feetTouched < 108) {
      statusText = "CONDITIONAL SUSPENSION (Inadequate Respect)";
      commentText = `HOD 4 Dimensional Sir has detected insufficient feet-touching occurrences. Your feet-touching quotient (FTRQ) is only ${feetTouched}/108 taps. Your bio-energy induction is blocked. Please touch HOD's feet at least 108 times in 4D space to collapse the wavefunction into an ADMITTED state.`;
      statusColor = "var(--color-banana)";
      borderStyle = "2px dashed var(--color-banana)";
      badgeBg = "rgba(255, 235, 59, 0.05)";
      if (window.quantumAudio) window.quantumAudio.playCollapse();
    } else if (chemScore < 90) {
      statusText = "REJECTED (Molecules Disentangled)";
      commentText = `Lohit from the NCERT Chemistry Department has determined that your Bunsen burner safety quotient is too low (Score: ${chemScore.toFixed(2)} %ile). Our lab requires at least 90.00 %ile to avoid dimensional leakage. Newton was rejected from this department for similar failures.`;
      statusColor = "rgba(255, 75, 75, 1)";
      borderStyle = "2px dashed rgba(255, 75, 75, 0.5)";
      badgeBg = "rgba(255, 75, 75, 0.05)";
      if (window.quantumAudio) window.quantumAudio.playCollapse();
    } else {
      statusText = "ADMITTED (Bio-Energy Confirmed)";
      commentText = `Congratulations! Your bio-energy flow velocity was measured at ${(14.7 + (seed % 50)/10).toFixed(1)} m/s (Threshold: 14.7 m/s) and your feet-touching quotient of ${feetTouched} has been verified by the Chancellor. Your offer letter has been entangled and sent via carrier pigeon. Report to the Dholakpur Canteen on Day 1 for ginger-grating induction.`;
      statusColor = "var(--color-bio)";
      borderStyle = "2px dashed var(--color-bio)";
      badgeBg = "rgba(57, 255, 20, 0.05)";
      if (window.quantumAudio) window.quantumAudio.playChime(523.25, 1046.5, 0.3);
    }
    
    // Restore form card contents
    formCard.innerHTML = formHtml;
    formCard.style.pointerEvents = 'auto';
    formCard.style.display = 'none';
    
    // Hide info card
    const lockCard = document.getElementById('locked-info-card');
    if (lockCard) lockCard.style.display = 'none';
    
    // Populate details
    document.getElementById('res-student-name').textContent = name;
    document.getElementById('res-roll').textContent = roll;
    document.getElementById('res-major').textContent = deptText;
    document.getElementById('res-chem').textContent = `${chemScore.toFixed(2)} %ile`;
    document.getElementById('res-feet').textContent = `${feetTouched} Taps (${feetTouched >= 108 ? 'Respect Calibrated' : 'Disrespect Detected'})`;
    document.getElementById('res-rank').textContent = calculatedRank;
    
    const badge = document.getElementById('app-status-badge');
    badge.textContent = statusText;
    badge.style.color = statusColor;
    badge.style.borderColor = statusColor;
    badge.style.background = badgeBg;
    
    const comment = document.getElementById('app-status-comment');
    comment.textContent = commentText;
    
    const certBorder = document.getElementById('quantum-certificate-card');
    if (certBorder) {
      certBorder.style.borderColor = statusColor;
    }
    
    // Show results
    const resultContainer = document.getElementById('app-result-container');
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
  }, 3200);
}

function resetBbitApplicationForm() {
  const resultContainer = document.getElementById('app-result-container');
  if (resultContainer) resultContainer.style.display = 'none';
  
  const formCard = document.getElementById('application-form-card');
  if (formCard) formCard.style.display = 'block';
  
  const lockCard = document.getElementById('locked-info-card');
  if (lockCard) lockCard.style.display = 'block';
  
  const form = document.getElementById('bbit-apply-form');
  if (form) form.reset();
}

window.submitBbitApplication = submitBbitApplication;
window.resetBbitApplicationForm = resetBbitApplicationForm;



