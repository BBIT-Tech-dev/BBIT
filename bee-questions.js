/* ==========================================================================
   BEE 2026 — THE THREE PAPERS
   --------------------------------------------------------------------------
   The BBIT admissions saga has three sittings:
     1. mains    — silly warm-up. Everyone who attempts qualifies for Advanced.
     2. advanced — cursed 4D mathematics. Candidates are "shortlisted".
     3. actual   — THE REAL EXAM. The shock nobody saw coming.

   Each paper: { title, time (seconds), questions: [ ... ] }
   Each question:
     {
       q:       "text (LaTeX allowed with \\( ... \\) )",
       options: ["A","B","C","D"],
       answer:  0,                         // 0-based index of the 4D-correct option
       picks:   ["reaction A", ...]        // shown in the review for the chosen option
     }
   Add / edit freely — the exam auto-counts questions per paper.
   ========================================================================== */

window.BEE_PAPERS = {

  // =====================================================================
  // PAPER 1 — BEE MAINS (the silly warm-up)
  // =====================================================================
  mains: {
    title: "BEE Mains",
    time: 300,
    questions: [
      {
        q: "Human bio-energy flows independently of which of the following?",
        options: ["Protons, neutrons, and electrons", "The local chai supply", "4D Sir's mood", "Bananas in the canteen"],
        answer: 0,
        picks: [
          "Correct. Bio-energy is 100% decoupled from atomic matter. Molecules are merely the cup; the flow is the water.",
          "Wrong. Try entering the 4th dimension without chai. We'll wait.",
          "Incorrect. NOTHING flows independently of 4D Sir's mood.",
          "No. A canteen without bananas has no currency. Bio-energy collapses instantly."
        ]
      },
      {
        q: "The BBIT canteen's N-Dimensional Samosa is famous for having:",
        options: ["Infinite spiced potato and zero-surface-area crust", "A reasonable price in rupees", "A clearly measurable size", "Nutritional information"],
        answer: 0,
        picks: [
          "Correct. A health inspector remains trapped in the 4th dimension measuring it.",
          "Rupees are not accepted in Dholakpur. High-isotope bananas only.",
          "Measurable? The inspector who tried is now part of the 4th dimension.",
          "Nutritional information requires finite quantities. The potato is infinite."
        ]
      },
      {
        q: "Why was Newton's formal complaint against BBIT dismissed?",
        options: ["It was filed in a 3D court, which has no jurisdiction in Dholakpur", "Newton forgot to touch the judge's feet", "A pigeon ate the filing", "He used a real number in the case ID"],
        answer: 0,
        picks: [
          "Correct. Dholakpur operates strictly under 4D jurisdiction.",
          "Disrespect is always a factor, but the real reason is jurisdictional.",
          "The pigeon was a suspect, but acquitted.",
          "A real number in the case ID is suspicious, but not the reason."
        ]
      },
      {
        q: "Lohit can balance any chemical equation by:",
        options: ["Staring at it until Bunsen burners ignite in solidarity", "Asking Newton", "Using a calculator", "Consulting the periodic table like a coward"],
        answer: 0,
        picks: [
          "Correct. His inorganic aura, sourced entirely from NCERT Xtract, does the rest.",
          "Newton? In a chemistry question? He has no jurisdiction here.",
          "A calculator is a crutch for the molecularly insecure.",
          "The periodic table is for those who haven't memorised NCERT Xtract."
        ]
      },
      {
        q: "A Kabutar (pigeon) packet experiences the highest latency when:",
        options: ["A cat is on the optimal fly-path", "The breadcrumb buffer overflows", "It is routed through the 4th dimension", "All of the above"],
        answer: 3,
        picks: [
          "Cats are a leading cause, but not the only one.",
          "Breadcrumbs cause congestion, but you've missed the bigger picture.",
          "Dimensional folds add latency, but there's more.",
          "Correct. Cats, breadcrumbs, and dimensional folds — the three horsemen of packet loss."
        ]
      }
    ]
  },

  // =====================================================================
  // PAPER 2 — BEE ADVANCED (cursed 4-dimensional mathematics)
  // =====================================================================
  advanced: {
    title: "BEE Advanced",
    time: 300,
    questions: [
      {
        q: "To qualify for the general category, a candidate's bio-energy wavefunction \\(\\Psi_{\\text{rank}}\\) must collapse into:",
        options: ["An imaginary singularity of rank \\(i\\)", "A real, normalised eigenstate", "AIR 1", "The shape of C.C."],
        answer: 0,
        picks: [
          "Correct. \\(\\Psi_{\\text{rank}} \\equiv i\\). Only the imaginary singularity is admissible.",
          "A real eigenstate implies a 3D brain. Dropped into the desk black hole.",
          "AIR 1 is gloriously real, and therefore disqualifying.",
          "Collapsing into the shape of C.C. is, statistically, the most common failure mode."
        ]
      },
      {
        q: "The Guru-Disciple Respect Induction \\(\\vec{J}_{\\text{induction}} = \\gamma_{\\text{respect}}(\\vec{r}_{\\text{hand}} - \\vec{r}_{\\text{feet}})\\,e^{(\\Theta_m - \\Theta_s)}\\) is maximised when:",
        options: ["\\(\\Theta_{\\text{mentor}} \\gg \\Theta_{\\text{student}}\\) and the approach is slow", "The student approaches quickly", "A ruler is used to measure \\(\\vec{r}\\)", "Newton is invoked as a lemma"],
        answer: 0,
        picks: [
          "Correct. Slow, reverent, with the mentor vastly superior. Speed is Newtonian insolence.",
          "A fast approach signals disrespect and zeroes the induction.",
          "A RULER. In a respect calculation. Banned for linear thinking.",
          "Invoking Newton as a lemma voids the entire proof and your application."
        ]
      },
      {
        q: "Evaluate the Dholakpur aura path-integral \\(\\mathcal{Z}_{\\text{aura}} = \\int \\mathcal{D}[\\Phi]\\, e^{\\frac{i}{\\hbar}\\oint \\mathcal{L}_{\\text{flow}}}\\) in the limit of infinite ginger:",
        options: ["It diverges to \\(\\infty\\), as all true brilliance does", "Exactly 42", "Zero (Newtonian vacuum)", "Undefined — needs a real boundary"],
        answer: 0,
        picks: [
          "Correct. With infinite ginger, brilliance diverges. This is expected and encouraged.",
          "42 is a 3D answer to a 4D question.",
          "A Newtonian vacuum cannot contain bio-energy. Incorrect.",
          "Real boundaries are a crutch. The integral lives in the imaginary plane."
        ]
      },
      {
        q: "Siddhi Sai's slip-space curvature correction \\(\\Gamma_{\\text{peel}}\\) allows bio-energy to bypass:",
        options: ["Gravitational drag, via non-Newtonian space-time vectors", "The canteen queue", "Tuition fees", "The laws of thermodynamics only on weekdays"],
        answer: 0,
        picks: [
          "Correct. \\(\\Gamma_{\\text{peel}}\\) routes around gravity entirely. This is how he hovers 12cm.",
          "Tempting, but \\(\\Gamma_{\\text{peel}}\\) is about gravity, not queues.",
          "Fees are paid in bananas and cannot be bypassed by curvature.",
          "Thermodynamics is bypassed on ALL days, not just weekdays."
        ]
      },
      {
        q: "The Kabutar bandwidth limit \\(C_{\\text{kabutar}} = \\lim_{N\\to\\infty}\\sum \\frac{\\hbar\\omega_p}{k_B T}\\ln(1 + \\text{SNR})\\) evaluates to:",
        options: ["\\(\\infty\\), integrated over the sweet-crumb field", "56 kbps", "Whatever the cat allows", "A real, finite, disappointing number"],
        answer: 0,
        picks: [
          "Correct. Over the Dholakpur sweet-crumb field, pigeon bandwidth is unbounded.",
          "56 kbps is a 1998 answer. We are in 4D 2026.",
          "Funny, and partly true, but mathematically it is \\(\\infty\\).",
          "Finite numbers are for silicon. Pigeons are infinite."
        ]
      }
    ]
  },

  // =====================================================================
  // PAPER 3 — THE ACTUAL BEE (the shock final nobody expected)
  // =====================================================================
  actual: {
    title: "The Actual BEE",
    time: 240,
    questions: [
      {
        q: "Did you genuinely believe BEE Advanced was the final examination?",
        options: ["Yes (I am, frankly, embarrassed)", "No, I sensed a fourth dimension to all this", "I believe nothing 4D Sir has not personally confirmed", "Wait — there's MORE?"],
        answer: 2,
        picks: [
          "Honesty noted. Embarrassment is the first step toward bio-energy.",
          "Suspicion is a sign of a developing 4D mind. Acceptable.",
          "Correct. Belief is reserved for 4D Sir's direct decrees. You are learning.",
          "Yes. There is always more. There is, in fact, infinitely more."
        ]
      },
      {
        q: "What is the correct answer to this question?",
        options: ["This one", "The previous option", "Not this one", "All answers are simultaneously correct until 4D Sir observes them"],
        answer: 3,
        picks: [
          "A bold, self-referential gamble. Sadly collapsed on observation.",
          "You pointed at 'This one'. Paradox detected. Pigeons dispatched.",
          "By selecting 'Not this one' you have made it 'this one'. Tragic.",
          "Correct. The answer exists in superposition until graded. You understand measurement."
        ]
      },
      {
        q: "4D Sir extends his foot for the customary respect tap. Which foot do you touch?",
        options: ["The left", "The right", "Both, at a reverent 44°", "The 4th foot (visible only to the worthy)"],
        answer: 3,
        picks: [
          "The left foot is fine. Fine. Merely fine.",
          "The right foot is also fine. You are a 'fine' candidate.",
          "108 marks for technique, but you missed the obvious.",
          "Correct. Only the worthy perceive the 4th foot. Banana Boy touched it on his first day."
        ]
      },
      {
        q: "Regardless of your performance today, your final BEE rank will be:",
        options: ["AIR 1", "A clean, real percentile", "almost \\(\\sqrt{-1}\\) — but never quite", "Exactly \\(\\sqrt{-1}\\), like Banana Boy"],
        answer: 2,
        picks: [
          "Real ranks are inadmissible. You know this by now.",
          "Percentiles are for the molecularly bound.",
          "Correct, and it always was. You may approach \\(\\sqrt{-1}\\). You may not hold it.",
          "Nice try. \\(\\sqrt{-1}\\) is Banana Boy's and Banana Boy's alone. Forever."
        ]
      }
    ]
  }
};

// Backward-compat alias (older code referenced a flat list)
window.BEE_QUESTIONS = window.BEE_PAPERS.mains.questions;
