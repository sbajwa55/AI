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
    // Science & Math (Questions 1-5)
    {
      id: 1,
      question: "What is the chemical symbol for carbon dioxide?",
      options: ["CO", "CO₂", "C₂O", "O₂C"],
      correctAnswer: 1,
      explanation: "CO₂ is the chemical symbol for carbon dioxide, consisting of one carbon atom and two oxygen atoms."
    },
    {
      id: 2,
      question: "What is the area of a circle with radius 5 cm? (Use π = 3.14)",
      options: ["78.5 cm²", "31.4 cm²", "15.7 cm²", "62.8 cm²"],
      correctAnswer: 0,
      explanation: "Area = π × r² = 3.14 × 5² = 3.14 × 25 = 78.5 cm²."
    },
    {
      id: 3,
      question: "Which system in the human body is responsible for fighting infections?",
      options: ["Nervous system", "Immune system", "Digestive system", "Circulatory system"],
      correctAnswer: 1,
      explanation: "The immune system protects the body against infections by identifying and destroying harmful pathogens."
    },
    {
      id: 4,
      question: "If a car travels 120 km in 2 hours, what is its average speed?",
      options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
      correctAnswer: 1,
      explanation: "Average speed = Distance ÷ Time = 120 km ÷ 2 hours = 60 km/h."
    },
    {
      id: 5,
      question: "What is the process by which plants make their own food?",
      options: ["Respiration", "Photosynthesis", "Digestion", "Circulation"],
      correctAnswer: 1,
      explanation: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to make glucose and oxygen."
    },
    
    // History & Geography (Questions 6-10)
    {
      id: 6,
      question: "Which ocean is the largest by area?",
      options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
      correctAnswer: 1,
      explanation: "The Pacific Ocean is the largest ocean, covering about one-third of Earth's surface."
    },
    {
      id: 7,
      question: "In which year did the Berlin Wall fall?",
      options: ["1987", "1989", "1991", "1993"],
      correctAnswer: 1,
      explanation: "The Berlin Wall fell on November 9, 1989, marking a significant step toward German reunification."
    },
    {
      id: 8,
      question: "Which country has the most time zones?",
      options: ["USA", "France", "Russia", "China"],
      correctAnswer: 2,
      explanation: "Russia has 11 time zones, the most of any country in the world."
    },
    {
      id: 9,
      question: "Who was the leader of South Africa who fought against apartheid?",
      options: ["Desmond Tutu", "Nelson Mandela", "Steve Biko", "Oliver Tambo"],
      correctAnswer: 1,
      explanation: "Nelson Mandela was a key leader in the fight against apartheid and became South Africa's first Black president."
    },
    {
      id: 10,
      question: "Which mountain range separates Europe from Asia?",
      options: ["Alps", "Ural Mountains", "Caucasus Mountains", "Carpathians"],
      correctAnswer: 1,
      explanation: "The Ural Mountains traditionally form the boundary between Europe and Asia."
    },
    
    // Current Events (Questions 11-15)
    {
      id: 11,
      question: "Which renewable energy source has grown fastest globally in recent years?",
      options: ["Wind power", "Solar power", "Hydroelectric", "Geothermal"],
      correctAnswer: 1,
      explanation: "Solar power has experienced the fastest growth rate among renewable energy sources in recent years."
    },
    {
      id: 12,
      question: "Which space agency successfully landed the Perseverance rover on Mars in 2021?",
      options: ["ESA", "NASA", "SpaceX", "Roscosmos"],
      correctAnswer: 1,
      explanation: "NASA's Perseverance rover successfully landed on Mars in February 2021 to search for signs of ancient life."
    },
    {
      id: 13,
      question: "What does 'COP' stand for in climate conferences like COP28?",
      options: ["Climate Operations Protocol", "Conference of the Parties", "Carbon Output Program", "Climate Oversight Panel"],
      correctAnswer: 1,
      explanation: "COP stands for 'Conference of the Parties' to the UN Framework Convention on Climate Change."
    },
    {
      id: 14,
      question: "Which cryptocurrency is known as 'digital gold'?",
      options: ["Ethereum", "Bitcoin", "Litecoin", "Ripple"],
      correctAnswer: 1,
      explanation: "Bitcoin is often referred to as 'digital gold' due to its store of value properties and limited supply."
    },
    {
      id: 15,
      question: "Which global organization leads international efforts to combat climate change?",
      options: ["WHO", "UN", "NATO", "G7"],
      correctAnswer: 1,
      explanation: "The United Nations (UN) leads global climate change efforts through various programs and the Paris Agreement."
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