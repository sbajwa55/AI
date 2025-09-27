// Mock data for GKQA app - Academic quiz for 15-21 year olds preparing for examinations

export const mockQuestions = {
  Simple: [
    {
      id: 1,
      question: "What is the chemical formula for water?",
      options: ["H₂O₂", "H₂O", "HO₂", "H₃O"],
      correctAnswer: 1,
      explanation: "Water has the chemical formula H₂O, consisting of two hydrogen atoms bonded to one oxygen atom."
    },
    {
      id: 2,
      question: "Which organelle is known as the 'powerhouse of the cell'?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      correctAnswer: 1,
      explanation: "Mitochondria are called the 'powerhouse of the cell' because they produce ATP (energy) through cellular respiration."
    },
    {
      id: 3,
      question: "What is the square root of 64?",
      options: ["6", "8", "7", "9"],
      correctAnswer: 1,
      explanation: "√64 = 8, because 8 × 8 = 64."
    },
    {
      id: 4,
      question: "What is the acceleration due to gravity on Earth?",
      options: ["9.8 m/s²", "10.8 m/s²", "8.9 m/s²", "9.6 m/s²"],
      correctAnswer: 0,
      explanation: "The acceleration due to gravity on Earth is approximately 9.8 m/s² or 9.81 m/s² to be more precise."
    },
    {
      id: 5,
      question: "Which gas makes up approximately 78% of Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
      correctAnswer: 1,
      explanation: "Nitrogen (N₂) makes up about 78% of Earth's atmosphere, while oxygen makes up about 21%."
    },
    {
      id: 6,
      question: "What is the periodic table symbol for sodium?",
      options: ["So", "Na", "S", "Sd"],
      correctAnswer: 1,
      explanation: "Na is the symbol for sodium, derived from the Latin word 'natrium'. Sodium has atomic number 11."
    },
    {
      id: 7,
      question: "In which year did World War II begin?",
      options: ["1938", "1939", "1940", "1941"],
      correctAnswer: 1,
      explanation: "World War II began on September 1, 1939, when Germany invaded Poland."
    },
    {
      id: 8,
      question: "What is the smallest unit of matter?",
      options: ["Molecule", "Atom", "Electron", "Proton"],
      correctAnswer: 1,
      explanation: "An atom is the smallest unit of matter that retains the properties of an element."
    },
    {
      id: 9,
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Mercury", "Earth", "Mars"],
      correctAnswer: 1,
      explanation: "Mercury is the closest planet to the Sun, with an average distance of about 58 million kilometers."
    },
    {
      id: 10,
      question: "What is 3² + 4²?",
      options: ["25", "24", "23", "26"],
      correctAnswer: 0,
      explanation: "3² + 4² = 9 + 16 = 25. This follows the Pythagorean theorem for a 3-4-5 right triangle."
    },
    {
      id: 11,
      question: "What type of bond holds water molecules together?",
      options: ["Ionic bond", "Hydrogen bond", "Covalent bond", "Metallic bond"],
      correctAnswer: 1,
      explanation: "Hydrogen bonds hold water molecules together, creating water's unique properties like high surface tension."
    },
    {
      id: 12,
      question: "Who developed the laws of motion?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Johannes Kepler"],
      correctAnswer: 1,
      explanation: "Sir Isaac Newton formulated the three laws of motion, fundamental principles of classical mechanics."
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