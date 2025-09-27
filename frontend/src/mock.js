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
      question: "Which treaty ended World War I?",
      options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Vienna", "Treaty of Westphalia"],
      correctAnswer: 0,
      explanation: "The Treaty of Versailles (1919) officially ended World War I between Germany and the Allied Powers."
    },
    {
      id: 2,
      question: "What is the derivative of sin(x) with respect to x?",
      options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
      correctAnswer: 0,
      explanation: "The derivative of sin(x) with respect to x is cos(x), a fundamental rule in calculus."
    },
    {
      id: 3,
      question: "Which ancient wonder of the world was located in Alexandria, Egypt?",
      options: ["Colossus of Rhodes", "Lighthouse of Alexandria", "Hanging Gardens", "Statue of Zeus"],
      correctAnswer: 1,
      explanation: "The Lighthouse of Alexandria (Pharos) was one of the Seven Wonders of the Ancient World, built around 280 BC."
    },
    {
      id: 4,
      question: "What is Avogadro's number approximately?",
      options: ["6.02 × 10²²", "6.02 × 10²³", "6.02 × 10²⁴", "6.02 × 10²¹"],
      correctAnswer: 1,
      explanation: "Avogadro's number is approximately 6.02 × 10²³, representing the number of particles in one mole of substance."
    },
    {
      id: 5,
      question: "Which imaginary line divides the Earth into Northern and Southern hemispheres?",
      options: ["Prime Meridian", "Equator", "Tropic of Cancer", "International Date Line"],
      correctAnswer: 1,
      explanation: "The Equator (0° latitude) divides the Earth into Northern and Southern hemispheres."
    },
    {
      id: 6,
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Stephen Hawking"],
      correctAnswer: 1,
      explanation: "Albert Einstein developed both the special (1905) and general (1915) theories of relativity."
    },
    {
      id: 7,
      question: "In which year was FIFA founded?",
      options: ["1902", "1904", "1906", "1908"],
      correctAnswer: 1,
      explanation: "FIFA (Fédération Internationale de Football Association) was founded on May 21, 1904, in Paris."
    },
    {
      id: 8,
      question: "What is the most abundant gas in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: 2,
      explanation: "Nitrogen makes up about 78% of Earth's atmosphere, making it the most abundant gas."
    },
    {
      id: 9,
      question: "Which composer wrote 'The Four Seasons'?",
      options: ["Mozart", "Vivaldi", "Beethoven", "Bach"],
      correctAnswer: 1,
      explanation: "Antonio Vivaldi composed 'The Four Seasons' (Le quattro stagioni) around 1720, a set of violin concertos."
    },
    {
      id: 10,
      question: "What is the limit of (sin x)/x as x approaches 0?",
      options: ["0", "1", "∞", "undefined"],
      correctAnswer: 1,
      explanation: "The limit of (sin x)/x as x approaches 0 is 1, a fundamental limit in calculus."
    },
    {
      id: 11,
      question: "Which art movement is Pablo Picasso most associated with?",
      options: ["Impressionism", "Cubism", "Surrealism", "Expressionism"],
      correctAnswer: 1,
      explanation: "Pablo Picasso co-founded Cubism with Georges Braque, revolutionizing 20th-century art."
    },
    {
      id: 12,
      question: "Who wrote 'One Hundred Years of Solitude'?",
      options: ["Jorge Luis Borges", "Gabriel García Márquez", "Mario Vargas Llosa", "Isabel Allende"],
      correctAnswer: 1,
      explanation: "Gabriel García Márquez wrote 'One Hundred Years of Solitude' (1967), a masterpiece of magical realism."
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