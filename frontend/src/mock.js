// Mock data for GKQA app - Academic quiz for 15-21 year olds preparing for examinations
// Structure: 5 Science/Math + 5 History/Geography + 5 Current Events = 15 questions per level

export const mockQuestions = {
  Simple: [
    // Science & Math (Questions 1-5)
    {
      id: 1,
      question: "What is the chemical formula for water?",
      options: ["H₂O₂", "H₂O", "HO₂", "H₃O"],
      correctAnswer: 1,
      explanation: "Water has the chemical formula H₂O, consisting of two hydrogen atoms bonded to one oxygen atom."
    },
    {
      id: 2,
      question: "What is 12 × 8?",
      options: ["94", "96", "98", "100"],
      correctAnswer: 1,
      explanation: "12 × 8 = 96. This is basic multiplication."
    },
    {
      id: 3,
      question: "Which organ pumps blood throughout the human body?",
      options: ["Brain", "Heart", "Liver", "Lungs"],
      correctAnswer: 1,
      explanation: "The heart pumps blood throughout the body, delivering oxygen and nutrients to all tissues."
    },
    {
      id: 4,
      question: "What is 15% of 100?",
      options: ["10", "15", "20", "25"],
      correctAnswer: 1,
      explanation: "15% of 100 = (15/100) × 100 = 15."
    },
    {
      id: 5,
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      explanation: "Mars is called the 'Red Planet' due to iron oxide (rust) on its surface giving it a reddish appearance."
    },
    
    // History & Geography (Questions 6-10)
    {
      id: 6,
      question: "Which city is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      correctAnswer: 1,
      explanation: "Canberra is the capital city of Australia, located between Sydney and Melbourne."
    },
    {
      id: 7,
      question: "In which year did World War I end?",
      options: ["1917", "1918", "1919", "1920"],
      correctAnswer: 1,
      explanation: "World War I ended on November 11, 1918, when Germany signed the armistice agreement."
    },
    {
      id: 8,
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
      correctAnswer: 1,
      explanation: "The Nile River is generally considered the longest river in the world at approximately 6,650 kilometers."
    },
    {
      id: 9,
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
      correctAnswer: 1,
      explanation: "George Washington was the first President of the United States, serving from 1789 to 1797."
    },
    {
      id: 10,
      question: "Which continent is the largest by area?",
      options: ["Africa", "Asia", "North America", "Europe"],
      correctAnswer: 1,
      explanation: "Asia is the largest continent by both area and population, covering about 30% of Earth's land area."
    },
    
    // Current Events (Questions 11-15)
    {
      id: 11,
      question: "Which social media platform was acquired by Elon Musk in 2022?",
      options: ["Facebook", "Twitter", "Instagram", "TikTok"],
      correctAnswer: 1,
      explanation: "Elon Musk acquired Twitter in October 2022 for approximately $44 billion and later rebranded it to 'X'."
    },
    {
      id: 12,
      question: "Which country hosted the 2024 Summer Olympics?",
      options: ["Japan", "France", "USA", "Australia"],
      correctAnswer: 1,
      explanation: "France hosted the 2024 Summer Olympics in Paris from July 26 to August 11, 2024."
    },
    {
      id: 13,
      question: "What does 'AI' stand for in technology?",
      options: ["Advanced Intelligence", "Artificial Intelligence", "Automated Intelligence", "Applied Intelligence"],
      correctAnswer: 1,
      explanation: "AI stands for Artificial Intelligence, referring to machine systems that can perform tasks typically requiring human intelligence."
    },
    {
      id: 14,
      question: "Which company developed ChatGPT?",
      options: ["Google", "OpenAI", "Microsoft", "Meta"],
      correctAnswer: 1,
      explanation: "OpenAI developed ChatGPT, a large language model chatbot launched in November 2022."
    },
    {
      id: 15,
      question: "Which global event significantly impacted worldwide travel in 2020-2022?",
      options: ["Olympics", "COVID-19 Pandemic", "World Cup", "Climate Summit"],
      correctAnswer: 1,
      explanation: "The COVID-19 pandemic significantly restricted global travel with lockdowns, quarantines, and border closures worldwide."
    }
  ],
  Medium: [
    {
      id: 1,
      question: "What is the molecular geometry of methane (CH₄)?",
      options: ["Linear", "Tetrahedral", "Trigonal planar", "Bent"],
      correctAnswer: 1,
      explanation: "Methane has a tetrahedral molecular geometry with bond angles of 109.5° due to sp³ hybridization of carbon."
    },
    {
      id: 2,
      question: "What is the derivative of x³ with respect to x?",
      options: ["3x²", "x²", "3x³", "3x"],
      correctAnswer: 0,
      explanation: "Using the power rule, d/dx(x³) = 3x². The exponent becomes the coefficient and the new exponent is reduced by 1."
    },
    {
      id: 3,
      question: "Which organelle contains the cell's genetic material?",
      options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic reticulum"],
      correctAnswer: 1,
      explanation: "The nucleus contains the cell's DNA (genetic material) and controls cellular activities."
    },
    {
      id: 4,
      question: "What is the pH of a solution with [H⁺] = 1 × 10⁻⁵ M?",
      options: ["5", "9", "-5", "10"],
      correctAnswer: 0,
      explanation: "pH = -log[H⁺] = -log(1 × 10⁻⁵) = -(-5) = 5. This is an acidic solution."
    },
    {
      id: 5,
      question: "According to Newton's second law, F = ma. If mass doubles and acceleration halves, force:",
      options: ["Doubles", "Remains the same", "Halves", "Quadruples"],
      correctAnswer: 1,
      explanation: "F = ma. If m becomes 2m and a becomes a/2, then F = (2m)(a/2) = ma, so force remains the same."
    },
    {
      id: 6,
      question: "In the electromagnetic spectrum, which has the longest wavelength?",
      options: ["X-rays", "Visible light", "Radio waves", "Gamma rays"],
      correctAnswer: 2,
      explanation: "Radio waves have the longest wavelength in the electromagnetic spectrum, ranging from millimeters to kilometers."
    },
    {
      id: 7,
      question: "What is the process by which DNA makes an identical copy of itself?",
      options: ["Transcription", "Replication", "Translation", "Mutation"],
      correctAnswer: 1,
      explanation: "DNA replication is the process where DNA makes an identical copy of itself during cell division."
    },
    {
      id: 8,
      question: "What is the molar mass of CO₂ (Carbon = 12 g/mol, Oxygen = 16 g/mol)?",
      options: ["28 g/mol", "32 g/mol", "44 g/mol", "48 g/mol"],
      correctAnswer: 2,
      explanation: "CO₂ molar mass = 12 + (2 × 16) = 12 + 32 = 44 g/mol."
    },
    {
      id: 9,
      question: "Which French revolution began in 1789?",
      options: ["Industrial Revolution", "French Revolution", "Scientific Revolution", "Agricultural Revolution"],
      correctAnswer: 1,
      explanation: "The French Revolution began in 1789, leading to major political and social changes in France and Europe."
    },
    {
      id: 10,
      question: "What is the quadratic formula for ax² + bx + c = 0?",
      options: ["x = -b ± √(b² - 4ac) / 2a", "x = b ± √(b² + 4ac) / 2a", "x = -b ± √(b² + 4ac) / 2a", "x = b ± √(b² - 4ac) / 2a"],
      correctAnswer: 0,
      explanation: "The quadratic formula is x = (-b ± √(b² - 4ac)) / 2a, used to solve quadratic equations."
    },
    {
      id: 11,
      question: "What type of reaction is photosynthesis?",
      options: ["Catabolic", "Anabolic", "Exothermic", "Spontaneous"],
      correctAnswer: 1,
      explanation: "Photosynthesis is an anabolic reaction because it builds complex molecules (glucose) from simpler ones (CO₂ and H₂O)."
    },
    {
      id: 12,
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁹ m/s", "3 × 10⁷ m/s"],
      correctAnswer: 0,
      explanation: "The speed of light in vacuum is approximately 3 × 10⁸ m/s or 299,792,458 m/s exactly."
    }
  ],
  Advanced: [
    {
      id: 1,
      question: "What is the electron configuration of Iron (Fe, atomic number 26)?",
      options: ["[Ar] 3d⁶ 4s²", "[Ar] 3d⁸", "[Ar] 3d⁷ 4s¹", "[Ar] 4s² 3d⁶"],
      correctAnswer: 0,
      explanation: "Iron (Fe) has the electron configuration [Ar] 3d⁶ 4s², following Hund's rule and the aufbau principle."
    },
    {
      id: 2,
      question: "What is the integral of 1/x dx?",
      options: ["ln|x| + C", "x + C", "1/x² + C", "e^x + C"],
      correctAnswer: 0,
      explanation: "The integral of 1/x dx is ln|x| + C, where C is the constant of integration and ln is the natural logarithm."
    },
    {
      id: 3,
      question: "Which enzyme unwinds the DNA double helix during replication?",
      options: ["DNA polymerase", "DNA ligase", "Helicase", "Primase"],
      correctAnswer: 2,
      explanation: "Helicase unwinds the DNA double helix by breaking hydrogen bonds between base pairs during replication."
    },
    {
      id: 4,
      question: "What is the equilibrium constant expression for: 2A + B ⇌ C + 3D?",
      options: ["K = [C][D]³/[A]²[B]", "K = [A]²[B]/[C][D]³", "K = [C][D]/[A][B]", "K = [A][B]/[C][D]"],
      correctAnswer: 0,
      explanation: "For aA + bB ⇌ cC + dD, K = [C]^c[D]^d/[A]^a[B]^b. So K = [C][D]³/[A]²[B]."
    },
    {
      id: 5,
      question: "In quantum mechanics, what does the Schrödinger equation describe?",
      options: ["Particle position", "Wave function evolution", "Energy levels", "Momentum"],
      correctAnswer: 1,
      explanation: "The Schrödinger equation describes how the quantum wave function of a physical system changes over time."
    },
    {
      id: 6,
      question: "What is the standard enthalpy of formation (ΔH°f) for any element in its standard state?",
      options: ["1 kJ/mol", "0 kJ/mol", "-1 kJ/mol", "Depends on the element"],
      correctAnswer: 1,
      explanation: "By definition, the standard enthalpy of formation of any element in its most stable form is 0 kJ/mol."
    },
    {
      id: 7,
      question: "Which process produces the most ATP in cellular respiration?",
      options: ["Glycolysis", "Citric acid cycle", "Electron transport chain", "Fermentation"],
      correctAnswer: 2,
      explanation: "The electron transport chain produces about 32-34 ATP molecules, the most in cellular respiration."
    },
    {
      id: 8,
      question: "What is the hybridization of carbon in ethyne (C₂H₂)?",
      options: ["sp³", "sp²", "sp", "sp³d"],
      correctAnswer: 2,
      explanation: "In ethyne (acetylene), carbon atoms are sp hybridized, forming a linear molecule with a triple bond."
    },
    {
      id: 9,
      question: "Which historical event triggered the start of World War I?",
      options: ["Sinking of Lusitania", "Assassination of Archduke Franz Ferdinand", "German invasion of Belgium", "Russian mobilization"],
      correctAnswer: 1,
      explanation: "The assassination of Archduke Franz Ferdinand of Austria-Hungary on June 28, 1914, triggered World War I."
    },
    {
      id: 10,
      question: "What is the Taylor series expansion of e^x around x = 0?",
      options: ["∑(x^n/n!)", "∑((-1)^n x^(2n+1)/(2n+1)!)", "∑((-1)^n x^(2n)/(2n)!)", "∑(x^n/n)"],
      correctAnswer: 0,
      explanation: "The Taylor series for e^x around x = 0 is ∑(x^n/n!) = 1 + x + x²/2! + x³/3! + ..."
    },
    {
      id: 11,
      question: "In genetics, what does 'epistasis' refer to?",
      options: ["Gene mutation", "Gene interaction", "Gene expression", "Gene duplication"],
      correctAnswer: 1,
      explanation: "Epistasis is the interaction between genes where one gene affects or masks the expression of another gene."
    },
    {
      id: 12,
      question: "What is the magnetic quantum number (mₗ) range for d orbitals?",
      options: ["-2 to +2", "-1 to +1", "-3 to +3", "0 to +4"],
      correctAnswer: 0,
      explanation: "For d orbitals (l = 2), the magnetic quantum number mₗ ranges from -2 to +2, giving 5 possible orientations."
    }
  ]
};

// Mock user results for demonstration
export const mockResults = {
  score: 8,
  totalQuestions: 12,
  timeTaken: 450, // seconds
  difficulty: "Medium",
  correctAnswers: [1, 2, 4, 5, 6, 8, 9, 11],
  incorrectAnswers: [
    { questionId: 3, selectedAnswer: 2, correctAnswer: 1 },
    { questionId: 7, selectedAnswer: 0, correctAnswer: 2 },
    { questionId: 10, selectedAnswer: 3, correctAnswer: 1 },
    { questionId: 12, selectedAnswer: 0, correctAnswer: 1 }
  ]
};