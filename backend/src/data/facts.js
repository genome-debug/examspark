// backend/src/data/facts.js
// Curated syllabus-linked facts for each Indian competitive exam

const EXAM_DATA = {
  UPSC: {
    emoji: "🏛️",
    subjects: {
      "Indian History": {
        icon: "📜",
        facts: [
          { topic: "Harappan Civilization", fact: "The Harappan cities had the world's FIRST urban sanitation system 4,500 years ago — more advanced than many 19th-century European cities! 🤯 Explore Unit 2: Urban Planning of Indus Valley to understand how.", unit: "Ancient India", chapter: "Indus Valley Civilization" },
          { topic: "Mauryan Empire", fact: "Chandragupta Maurya's spy network (Vishakanyas) is considered one of the earliest intelligence agencies in human history. James Bond had nothing on him! 🕵️ Dive into Arthashastra & Mauryan Administration chapter.", unit: "Ancient India", chapter: "Mauryan Administration" },
          { topic: "Mughal Era", fact: "Akbar's Fatehpur Sikri was abandoned just 14 years after construction — historians still debate why. Water scarcity? Political reasons? Study Mughal Architecture & Urban Planning to uncover the mystery 🏰", unit: "Medieval India", chapter: "Mughal Empire" },
          { topic: "Independence Movement", fact: "Subhas Chandra Bose had TWO death dates — one official (1945) and one rumoured (much later). The mystery remains unsolved! Explore the Indian National Army chapter to dig deeper 🔍", unit: "Modern India", chapter: "Freedom Struggle" },
        ]
      },
      "Geography": {
        icon: "🌍",
        facts: [
          { topic: "Indian Rivers", fact: "The Brahmaputra carries more water than the Ganga AND Indus COMBINED — yet it's barely taught! It travels 2,900 km and enters India only after a massive U-turn. Explore River Systems & Drainage Patterns now 🌊", unit: "Physical Geography", chapter: "Indian Rivers" },
          { topic: "Monsoon", fact: "India's southwest monsoon carries 80% of annual rainfall in just 4 months. Miss this and you get droughts, floods, and food crises simultaneously. Master Monsoon Mechanism to predict India's economy! ⛈️", unit: "Climatology", chapter: "Indian Climate" },
          { topic: "Soil Types", fact: "Black cotton soil (regur) can drill a crack 2 metres deep when dry — and swell to seal itself when wet. It's the only soil that tills itself! Study Soil Formation & Types unit 🌱", unit: "Pedology", chapter: "Soil Types of India" },
        ]
      },
      "Polity": {
        icon: "⚖️",
        facts: [
          { topic: "Constitution", fact: "The Indian Constitution is the world's longest written constitution — 448 articles, 12 schedules. B.R. Ambedkar spent 2 years 11 months drafting it. Explore Constitutional History & Drafting chapter ✍️", unit: "Constitutional Framework", chapter: "Making of the Constitution" },
          { topic: "Fundamental Rights", fact: "Right to Education (Article 21A) was added only in 2002! The original 1950 Constitution didn't guarantee free education. Study Constitutional Amendments chapter to see how India evolves 📚", unit: "Fundamental Rights", chapter: "Articles 12-35" },
          { topic: "Federalism", fact: "India is called a 'quasi-federal' state — during emergencies, it transforms into a unitary state! No other democracy has this feature. Explore Emergency Provisions (Art 352-360) 🚨", unit: "Federal Structure", chapter: "Centre-State Relations" },
        ]
      },
      "Economy": {
        icon: "📈",
        facts: [
          { topic: "Monetary Policy", fact: "RBI can print unlimited money legally — but doesn't, because of inflation. Zimbabwe printed so much that a 100 trillion dollar note became worthless. Study Money Supply & Inflation chapter to understand why India stays cautious 💸", unit: "Monetary Economics", chapter: "RBI & Monetary Policy" },
          { topic: "Agriculture", fact: "India is the world's largest milk producer but 40% of fruits & vegetables rot before reaching markets. Cold chain logistics is a ₹50,000 crore opportunity! Study Agricultural Marketing reforms 🥛", unit: "Indian Agriculture", chapter: "Agricultural Economy" },
        ]
      },
      "Science & Tech": {
        icon: "🔬",
        facts: [
          { topic: "Space Technology", fact: "Chandrayaan-3 cost ₹615 crore — less than the budget of the Hollywood movie Interstellar (₹1,200 crore). India reached the Moon's south pole for LESS than a movie budget! 🚀 Study ISRO Missions chapter.", unit: "Space Technology", chapter: "ISRO & Indian Space Programme" },
          { topic: "Biotechnology", fact: "India's Covaxin was developed in just 11 months — normally vaccines take 10-15 years. ICMR fast-tracked it without compromising safety using a new platform. Study Vaccine Technology unit 💉", unit: "Biotechnology", chapter: "Biotech in India" },
        ]
      }
    }
  },

  "JEE Advanced": {
    emoji: "⚡",
    subjects: {
      "Physics": {
        icon: "⚛️",
        facts: [
          { topic: "Mechanics", fact: "The ISS orbits Earth at 7.66 km/s — it literally falls toward Earth continuously but moves so fast it keeps missing the surface. That's what an orbit IS. Master Projectile Motion & Satellites in Gravitation chapter 🛸", unit: "Mechanics", chapter: "Gravitation & Circular Motion" },
          { topic: "Electromagnetism", fact: "Your phone charger works because of Faraday's discovery in 1831 — a moving magnet creates electricity. He had no formal education past age 13. Explore Electromagnetic Induction chapter and carry forward his legacy! 🔋", unit: "Electromagnetism", chapter: "EMI & AC Circuits" },
          { topic: "Modern Physics", fact: "Quantum mechanics says a particle exists in ALL positions simultaneously until observed. Schrödinger's cat is not just a thought experiment — it's how electrons in your phone chips actually behave! Study Quantum Numbers & Atomic Models 🐱", unit: "Modern Physics", chapter: "Atomic Structure" },
        ]
      },
      "Chemistry": {
        icon: "🧪",
        facts: [
          { topic: "Organic Chemistry", fact: "Aspirin was synthesized in 1897 and is still one of the world's most-used drugs. It's made from salicylic acid found in willow bark — ancient Egyptians used willow for fever! Study Esterification reactions in Organic Chemistry ⚗️", unit: "Organic Chemistry", chapter: "Carboxylic Acids & Derivatives" },
          { topic: "Electrochemistry", fact: "The lithium-ion battery in your phone generates electricity through a reaction Faraday described in 1834. Every JEE paper has 2-3 electrochemistry questions worth 12+ marks — study Nernst Equation NOW! 🔌", unit: "Physical Chemistry", chapter: "Electrochemistry" },
          { topic: "Coordination Compounds", fact: "Hemoglobin — the protein that carries oxygen in your blood — is a coordination compound of iron. Without coordination chemistry, you literally cannot breathe. Study Ligands & CFSE theory 🩸", unit: "Inorganic Chemistry", chapter: "Coordination Compounds" },
        ]
      },
      "Mathematics": {
        icon: "📐",
        facts: [
          { topic: "Calculus", fact: "Indian mathematician Madhava of Sangamagrama discovered infinite series (the foundation of calculus) 250 years BEFORE Newton and Leibniz! You're solving problems with ancient Indian mathematics. Explore Limits & Series chapter 🧮", unit: "Calculus", chapter: "Limits, Continuity & Differentiability" },
          { topic: "Probability", fact: "The birthday problem: in a group of just 23 people, there's a 50% chance two share a birthday. In 57 people it's 99%! Counterintuitive results like this appear every year in JEE. Study Probability & Combinatorics 🎲", unit: "Probability", chapter: "Probability Theory" },
          { topic: "Coordinate Geometry", fact: "GPS works entirely on coordinate geometry — latitude, longitude, and distance formulas you study in JEE. Every Uber ride is a real-world application of your exam syllabus! 📍 Master Section Formula & Circles chapter.", unit: "Coordinate Geometry", chapter: "Circles & Conics" },
        ]
      }
    }
  },

  "NEET": {
    emoji: "🩺",
    subjects: {
      "Biology": {
        icon: "🧬",
        facts: [
          { topic: "Cell Biology", fact: "Your body has 37 TRILLION cells — each with 2 metres of DNA coiled inside a nucleus smaller than 6 microns. If you uncoiled all your DNA it would stretch to the sun and back 600 times! Study Cell Structure & DNA Packaging 🧬", unit: "Cell Biology", chapter: "Cell: The Unit of Life" },
          { topic: "Genetics", fact: "You share 60% of your DNA with a banana 🍌 and 85% with a mouse. NEET genetics asks you to calculate these inheritance patterns. Master Mendelian Genetics & Molecular Basis of Inheritance now!", unit: "Genetics", chapter: "Principles of Inheritance" },
          { topic: "Human Physiology", fact: "Your heart beats 100,000 times a day — and has been doing so since you were a 4-week-old embryo without a brain! The cardiac muscle is the only muscle that never fatigues. Explore Cardiac Cycle & ECG chapter ❤️", unit: "Human Physiology", chapter: "Body Fluids & Circulation" },
        ]
      },
      "Physics": {
        icon: "⚛️",
        facts: [
          { topic: "Optics", fact: "The human eye can detect a single photon of light in complete darkness. Yet doctors use it to diagnose 100+ diseases. Study Ray Optics & the working of the Eye — NEET asks this every single year 👁️", unit: "Optics", chapter: "Ray Optics & Optical Instruments" },
        ]
      },
      "Chemistry": {
        icon: "🧪",
        facts: [
          { topic: "Biomolecules", fact: "Enzymes are so specific they can distinguish between mirror-image molecules — like telling your left hand from your right by touch alone. This specificity saves your life every second. Study Enzyme Kinetics & Biomolecules 🔬", unit: "Organic Chemistry", chapter: "Biomolecules" },
        ]
      }
    }
  },

  "CAT": {
    emoji: "📊",
    subjects: {
      "Quantitative Aptitude": {
        icon: "🔢",
        facts: [
          { topic: "Number Systems", fact: "Every number divisible by 9 has digits that sum to a multiple of 9. Test it: 729 → 7+2+9=18 ✅. This Vedic trick alone saves 30 seconds per question in CAT. Master Divisibility Rules unit NOW! 🧮", unit: "Number Theory", chapter: "Divisibility & Remainders" },
          { topic: "Geometry", fact: "The ancient Egyptians used a 3-4-5 rope triangle to make perfect right angles for the pyramids — the same Pythagorean theorem you're studying for CAT. 4,000 years of relevance! Explore Triangles & Circles chapter 📐", unit: "Geometry", chapter: "Triangles, Circles & Mensuration" },
        ]
      },
      "VARC": {
        icon: "📚",
        facts: [
          { topic: "Reading Comprehension", fact: "The average CAT RC passage is 600 words but tests only 5 key ideas — 80% of content is context. Toppers read for structure, not details. Cover RC Strategy & Paragraph Summary chapter to crack this pattern 📄", unit: "VARC", chapter: "Reading Comprehension Strategies" },
        ]
      },
      "DILR": {
        icon: "🧩",
        facts: [
          { topic: "Logical Reasoning", fact: "IIM Ahmedabad's DILR section in 2023 had sets solvable in 3 minutes — but only if you identified the right entry point. 90% of students wasted 10 minutes on the wrong approach. Study Set Selection Strategy in DILR 🎯", unit: "DILR", chapter: "Arrangements & Puzzles" },
        ]
      }
    }
  },

  "SSC CGL": {
    emoji: "🎯",
    subjects: {
      "General Awareness": {
        icon: "🌐",
        facts: [
          { topic: "Current Affairs", fact: "Every SSC GK question was once a newspaper headline. Connecting current events to static GK makes it 3x more memorable. The student who reads newspapers beats the one who just memorizes. Start the Current Affairs habit today 📰", unit: "General Awareness", chapter: "Current Events & Static GK" },
        ]
      },
      "Quantitative Aptitude": {
        icon: "🔢",
        facts: [
          { topic: "Trigonometry", fact: "sin²θ + cos²θ = 1 is the most tested identity in SSC CGL — appearing in 4-5 questions every paper. It takes 10 minutes to master. Spend those 10 minutes NOW on Trigonometric Identities chapter! 📐", unit: "Quantitative Aptitude", chapter: "Trigonometry" },
        ]
      },
      "Reasoning": {
        icon: "🧠",
        facts: [
          { topic: "Coding-Decoding", fact: "In SSC Coding-Decoding, 80% of questions use just 3 patterns. Once you map them, this becomes a guaranteed 2-mark section in under 30 seconds each. Study Coding-Decoding Shortcuts unit 🔐", unit: "Reasoning", chapter: "Coding-Decoding" },
        ]
      }
    }
  }
};

/**
 * Get a random fact for a given exam + selected subjects
 * @param {string} examName 
 * @param {string[]} subjectNames 
 * @returns {{ topic, fact, unit, chapter, subject, icon, exam }}
 */
function getRandomFact(examName, subjectNames) {
  const exam = EXAM_DATA[examName];
  if (!exam) return null;

  // Filter to selected subjects
  const activeSubjects = Object.entries(exam.subjects)
    .filter(([name]) => subjectNames.includes(name));

  if (activeSubjects.length === 0) return null;

  // Pick random subject
  const [subjectName, subjectData] = activeSubjects[
    Math.floor(Math.random() * activeSubjects.length)
  ];

  // Pick random fact
  const fact = subjectData.facts[Math.floor(Math.random() * subjectData.facts.length)];

  return {
    exam: examName,
    subject: subjectName,
    icon: subjectData.icon,
    ...fact,
  };
}

module.exports = { EXAM_DATA, getRandomFact };
