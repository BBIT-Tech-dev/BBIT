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
  
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    if (distance < 0) {
      clearInterval(interval);
      timerEl.textContent = "PORTAL UNLOCKED! Reload the page.";
      timerEl.style.color = "#39ff14";
      return;
    }
    
    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Formatting with padding
    const hStr = hours.toString().padStart(2, '0');
    const mStr = minutes.toString().padStart(2, '0');
    const sStr = seconds.toString().padStart(2, '0');
    
    timerEl.textContent = `${hStr}h : ${mStr}m : ${sStr}s`;
  }, 1000);
}

// --- Initialize Page ---
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('bjee-quiz-container')) {
    loadQuestion();
  }
  if (document.getElementById('countdown-timer')) {
    startCountdown();
  }
});
