// Mock data for GKQA app - Academic quiz for 15-21 year olds preparing for examinations
// Extended question bank for better randomization and 24-hour no-repeat system

export const questionBank = {
  Simple: [
    // Science & Math Questions (1-15)
    {
      id: "s1",
      question: "What is the chemical formula for water?",
      options: ["H₂O₂", "H₂O", "HO₂", "H₃O"],
      correctAnswer: 1,
      category: "science",
      explanation: "Water has the chemical formula H₂O, consisting of two hydrogen atoms bonded to one oxygen atom."
    },
    {
      id: "s2",
      question: "What is 12 × 8?",
      options: ["94", "96", "98", "100"],
      correctAnswer: 1,
      category: "math",
      explanation: "12 × 8 = 96. This is basic multiplication."
    },
    {
      id: "s3",
      question: "Which organ pumps blood throughout the human body?",
      options: ["Brain", "Heart", "Liver", "Lungs"],
      correctAnswer: 1,
      category: "science",
      explanation: "The heart pumps blood throughout the body, delivering oxygen and nutrients to all tissues."
    },
    {
      id: "s4",
      question: "What is 15% of 100?",
      options: ["10", "15", "20", "25"],
      correctAnswer: 1,
      category: "math",
      explanation: "15% of 100 = (15/100) × 100 = 15."
    },
    {
      id: "s5",
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      category: "science",
      explanation: "Mars is called the 'Red Planet' due to iron oxide (rust) on its surface giving it a reddish appearance."
    },
    {
      id: "s6",
      question: "What is the boiling point of water at sea level?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      correctAnswer: 1,
      category: "science",
      explanation: "Water boils at 100°C (212°F) at sea level under standard atmospheric pressure."
    },
    {
      id: "s7",
      question: "What is 9 + 16?",
      options: ["24", "25", "26", "27"],
      correctAnswer: 1,
      category: "math",
      explanation: "9 + 16 = 25. This is basic addition."
    },
    {
      id: "s8",
      question: "How many bones are in the adult human body?",
      options: ["196", "206", "216", "226"],
      correctAnswer: 1,
      category: "science",
      explanation: "An adult human body has 206 bones, though babies are born with about 270 bones that fuse as they grow."
    },
    {
      id: "s9",
      question: "What is the square root of 36?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1,
      category: "math",
      explanation: "√36 = 6, because 6 × 6 = 36."
    },
    {
      id: "s10",
      question: "What gas do we breathe in to live?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correctAnswer: 1,
      category: "science",
      explanation: "We breathe in oxygen (O₂) which is essential for cellular respiration and energy production."
    },
    
    // History & Geography Questions (11-25)
    {
      id: "s11",
      question: "Which city is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      correctAnswer: 1,
      category: "geography",
      explanation: "Canberra is the capital city of Australia, located between Sydney and Melbourne."
    },
    {
      id: "s12",
      question: "In which year did World War I end?",
      options: ["1917", "1918", "1919", "1920"],
      correctAnswer: 1,
      category: "history",
      explanation: "World War I ended on November 11, 1918, when Germany signed the armistice agreement."
    },
    {
      id: "s13",
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
      correctAnswer: 1,
      category: "geography",
      explanation: "The Nile River is generally considered the longest river in the world at approximately 6,650 kilometers."
    },
    {
      id: "s14",
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
      correctAnswer: 1,
      category: "history",
      explanation: "George Washington was the first President of the United States, serving from 1789 to 1797."
    },
    {
      id: "s15",
      question: "Which continent is the largest by area?",
      options: ["Africa", "Asia", "North America", "Europe"],
      correctAnswer: 1,
      category: "geography",
      explanation: "Asia is the largest continent by both area and population, covering about 30% of Earth's land area."
    },
    {
      id: "s16",
      question: "What is the capital of Japan?",
      options: ["Osaka", "Tokyo", "Kyoto", "Hiroshima"],
      correctAnswer: 1,
      category: "geography",
      explanation: "Tokyo is the capital and largest city of Japan, serving as the political and economic center."
    },
    {
      id: "s17",
      question: "In which year did the Titanic sink?",
      options: ["1910", "1912", "1914", "1916"],
      correctAnswer: 1,
      category: "history",
      explanation: "The RMS Titanic sank on April 15, 1912, after hitting an iceberg in the North Atlantic Ocean."
    },
    {
      id: "s18",
      question: "Which ocean is between Europe and America?",
      options: ["Pacific", "Atlantic", "Indian", "Arctic"],
      correctAnswer: 1,
      category: "geography",
      explanation: "The Atlantic Ocean lies between Europe and America, connecting the continents."
    },
    {
      id: "s19",
      question: "Who built the pyramids in Egypt?",
      options: ["Romans", "Ancient Egyptians", "Greeks", "Persians"],
      correctAnswer: 1,
      category: "history",
      explanation: "The ancient Egyptians built the pyramids as tombs for their pharaohs, with the Great Pyramid of Giza being the most famous."
    },
    {
      id: "s20",
      question: "Which mountain range contains Mount Everest?",
      options: ["Andes", "Himalayas", "Alps", "Rocky Mountains"],
      correctAnswer: 1,
      category: "geography",
      explanation: "Mount Everest is located in the Himalayas on the border between Nepal and Tibet."
    },
    
    // Current Events Questions (21-35)
    {
      id: "s21",
      question: "Which social media platform was acquired by Elon Musk in 2022?",
      options: ["Facebook", "Twitter", "Instagram", "TikTok"],
      correctAnswer: 1,
      category: "current",
      explanation: "Elon Musk acquired Twitter in October 2022 for approximately $44 billion and later rebranded it to 'X'."
    },
    {
      id: "s22",
      question: "Which country hosted the 2024 Summer Olympics?",
      options: ["Japan", "France", "USA", "Australia"],
      correctAnswer: 1,
      category: "current",
      explanation: "France hosted the 2024 Summer Olympics in Paris from July 26 to August 11, 2024."
    },
    {
      id: "s23",
      question: "What does 'AI' stand for in technology?",
      options: ["Advanced Intelligence", "Artificial Intelligence", "Automated Intelligence", "Applied Intelligence"],
      correctAnswer: 1,
      category: "current",
      explanation: "AI stands for Artificial Intelligence, referring to machine systems that can perform tasks typically requiring human intelligence."
    },
    {
      id: "s24",
      question: "Which company developed ChatGPT?",
      options: ["Google", "OpenAI", "Microsoft", "Meta"],
      correctAnswer: 1,
      category: "current",
      explanation: "OpenAI developed ChatGPT, a large language model chatbot launched in November 2022."
    },
    {
      id: "s25",
      question: "Which global event significantly impacted worldwide travel in 2020-2022?",
      options: ["Olympics", "COVID-19 Pandemic", "World Cup", "Climate Summit"],
      correctAnswer: 1,
      category: "current",
      explanation: "The COVID-19 pandemic significantly restricted global travel with lockdowns, quarantines, and border closures worldwide."
    },
    {
      id: "s26",
      question: "Which streaming service is known for 'Stranger Things'?",
      options: ["Disney+", "Netflix", "Amazon Prime", "Hulu"],
      correctAnswer: 1,
      category: "current",
      explanation: "Netflix is the streaming platform that produces and hosts the popular series 'Stranger Things'."
    },
    {
      id: "s27",
      question: "What does 'EV' stand for in automotive industry?",
      options: ["Engine Vehicle", "Electric Vehicle", "Enhanced Vehicle", "Efficient Vehicle"],
      correctAnswer: 1,
      category: "current",
      explanation: "EV stands for Electric Vehicle, referring to cars powered by electric motors instead of gasoline engines."
    },
    {
      id: "s28",
      question: "Which app is known for short vertical videos?",
      options: ["Instagram", "TikTok", "YouTube", "Snapchat"],
      correctAnswer: 1,
      category: "current",
      explanation: "TikTok is primarily known for its short-form vertical video content, though other platforms now offer similar features."
    },
    {
      id: "s29",
      question: "What does 'NFT' stand for?",
      options: ["New File Type", "Non-Fungible Token", "Network File Transfer", "Next Future Tech"],
      correctAnswer: 1,
      category: "current",
      explanation: "NFT stands for Non-Fungible Token, representing unique digital assets verified using blockchain technology."
    },
    {
      id: "s30",
      question: "Which space company was founded by Elon Musk?",
      options: ["Blue Origin", "SpaceX", "Virgin Galactic", "Boeing"],
      correctAnswer: 1,
      category: "current",
      explanation: "SpaceX was founded by Elon Musk in 2002 with the goal of reducing space transportation costs and Mars colonization."
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
    // Science & Math (Questions 1-5)
    {
      id: 1,
      question: "What is the pH of a neutral solution at 25°C?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 1,
      explanation: "At 25°C, pure water has a pH of 7, which is considered neutral (neither acidic nor basic)."
    },
    {
      id: 2,
      question: "What is the slope of the line passing through points (2,3) and (4,7)?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 1,
      explanation: "Slope = (y₂ - y₁)/(x₂ - x₁) = (7 - 3)/(4 - 2) = 4/2 = 2."
    },
    {
      id: 3,
      question: "Which blood type is considered the universal donor?",
      options: ["A", "B", "AB", "O"],
      correctAnswer: 3,
      explanation: "Type O negative blood is considered the universal donor because it can be given to people with any blood type."
    },
    {
      id: 4,
      question: "What is the value of sin(90°)?",
      options: ["0", "1", "1/2", "√3/2"],
      correctAnswer: 1,
      explanation: "sin(90°) = 1. This is a fundamental trigonometric value."
    },
    {
      id: 5,
      question: "Which element has the atomic number 6?",
      options: ["Boron", "Carbon", "Nitrogen", "Oxygen"],
      correctAnswer: 1,
      explanation: "Carbon has atomic number 6, meaning it has 6 protons in its nucleus."
    },
    
    // History & Geography (Questions 6-10)
    {
      id: 6,
      question: "Which strait separates Europe from Africa?",
      options: ["Bering Strait", "Strait of Gibraltar", "Strait of Hormuz", "Cook Strait"],
      correctAnswer: 1,
      explanation: "The Strait of Gibraltar separates Europe (Spain) from Africa (Morocco) and connects the Atlantic and Mediterranean."
    },
    {
      id: 7,
      question: "Which empire was ruled by Julius Caesar?",
      options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Persian Empire"],
      correctAnswer: 1,
      explanation: "Julius Caesar was a leader of the Roman Empire and played a critical role in its expansion."
    },
    {
      id: 8,
      question: "Which desert is the largest hot desert in the world?",
      options: ["Kalahari", "Sahara", "Arabian", "Thar"],
      correctAnswer: 1,
      explanation: "The Sahara is the largest hot desert in the world, covering much of North Africa."
    },
    {
      id: 9,
      question: "In which year did India gain independence from Britain?",
      options: ["1945", "1947", "1948", "1950"],
      correctAnswer: 1,
      explanation: "India gained independence from British rule on August 15, 1947."
    },
    {
      id: 10,
      question: "Which river flows through Egypt?",
      options: ["Amazon", "Nile", "Congo", "Niger"],
      correctAnswer: 1,
      explanation: "The Nile River flows through Egypt and has been crucial to Egyptian civilization for thousands of years."
    },
    
    // Current Events (Questions 11-15)
    {
      id: 11,
      question: "Which company is the current leader in electric vehicle sales globally?",
      options: ["Ford", "Tesla", "Toyota", "Volkswagen"],
      correctAnswer: 1,
      explanation: "Tesla has been the global leader in electric vehicle sales, though competition is increasing rapidly."
    },
    {
      id: 12,
      question: "What does 'NFT' stand for in digital art and blockchain?",
      options: ["New File Transfer", "Non-Fungible Token", "Network File Technology", "Next Future Tech"],
      correctAnswer: 1,
      explanation: "NFT stands for Non-Fungible Token, representing unique digital assets verified using blockchain technology."
    },
    {
      id: 13,
      question: "Which streaming platform became popular during the COVID-19 pandemic for video calls?",
      options: ["Skype", "Zoom", "Discord", "Teams"],
      correctAnswer: 1,
      explanation: "Zoom experienced massive growth during the COVID-19 pandemic as remote work and learning became widespread."
    },
    {
      id: 14,
      question: "Which social movement gained global attention in 2020 following police brutality incidents?",
      options: ["Me Too", "Black Lives Matter", "Climate Strike", "Occupy Wall Street"],
      correctAnswer: 1,
      explanation: "Black Lives Matter gained worldwide attention in 2020 following the death of George Floyd and other incidents."
    },
    {
      id: 15,
      question: "Which country was the first to approve a COVID-19 vaccine for emergency use?",
      options: ["USA", "UK", "Germany", "China"],
      correctAnswer: 1,
      explanation: "The United Kingdom was the first country to approve the Pfizer-BioNTech COVID-19 vaccine in December 2020."
    }
  ]
};

// Mock user results for demonstration
export const mockResults = {
  score: 11,
  totalQuestions: 15,
  timeTaken: 480, // seconds
  difficulty: "Medium",
  correctAnswers: [1, 2, 4, 5, 6, 7, 8, 10, 11, 13, 14],
  incorrectAnswers: [
    { questionId: 3, selectedAnswer: 2, correctAnswer: 1 },
    { questionId: 9, selectedAnswer: 0, correctAnswer: 1 },
    { questionId: 12, selectedAnswer: 0, correctAnswer: 1 },
    { questionId: 15, selectedAnswer: 2, correctAnswer: 1 }
  ]
};