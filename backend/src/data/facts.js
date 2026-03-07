// backend/src/data/facts.js
// Curated syllabus-linked facts for each Indian competitive exam

const EXAM_DATA = {
  UPSC: {
    emoji: "🏛️",
    subjects: {
      "Indian History": {
        icon: "📜",
        facts: [
          { topic: "Harappan Civilization", fact: "The Harappan cities had the world's FIRST urban sanitation system 4,500 years ago — more advanced than many 19th-century European cities! 🤯 Explore Unit 2: Urban Planning of Indus Valley.", unit: "Ancient India", chapter: "Indus Valley Civilization" },
          { topic: "Mauryan Empire", fact: "Chandragupta Maurya's spy network (Vishakanyas) is considered one of the earliest intelligence agencies in human history. James Bond had nothing on him! 🕵️ Dive into Arthashastra & Mauryan Administration.", unit: "Ancient India", chapter: "Mauryan Administration" },
          { topic: "Mughal Era", fact: "Akbar's Fatehpur Sikri was abandoned just 14 years after construction — historians still debate why. Water scarcity? Political reasons? Study Mughal Architecture & Urban Planning 🏰", unit: "Medieval India", chapter: "Mughal Empire" },
          { topic: "Independence Movement", fact: "Subhas Chandra Bose had TWO death dates — one official (1945) and one rumoured (much later). The mystery remains unsolved! Explore the Indian National Army chapter 🔍", unit: "Modern India", chapter: "Freedom Struggle" },
          { topic: "Vedic Age", fact: "The Rigveda is the world's oldest religious text still in active use — composed around 1500 BCE and still recited in Hindu rituals today. Study Vedic Culture & Society 📖", unit: "Ancient India", chapter: "Vedic Civilization" },
          { topic: "Gupta Empire", fact: "The Gupta period (320–550 CE) gave us zero, decimal system, and Aryabhata's calculation of Pi to 4 decimal places. India's Golden Age! Study Gupta Administration & Culture ✨", unit: "Ancient India", chapter: "Gupta Empire" },
          { topic: "Delhi Sultanate", fact: "Razia Sultana (1236–1240) was the first female ruler of Delhi Sultanate — she refused to wear a veil and led armies personally. Medieval India's most radical ruler! Study Delhi Sultanate rulers 👑", unit: "Medieval India", chapter: "Delhi Sultanate" },
          { topic: "Maratha Empire", fact: "Shivaji Maharaj created the world's first modern guerrilla warfare manual. His 'Ganimi Kawa' tactics are still studied in military academies! Explore Maratha Administration 🗡️", unit: "Medieval India", chapter: "Maratha Empire" },
          { topic: "British East India Company", fact: "The British East India Company once had its own private army of 260,000 soldiers — twice the size of the British Army! Study Company Rule & Colonial Administration 🏴", unit: "Modern India", chapter: "British Colonialism" },
          { topic: "Revolt of 1857", fact: "The 1857 revolt started because sepoys believed cartridges were greased with cow and pig fat — a masterstroke of British miscalculation. Explore Causes & Nature of 1857 Revolt 💥", unit: "Modern India", chapter: "Revolt of 1857" },
          { topic: "Indian National Congress", fact: "The INC was founded by a British civil servant (A.O. Hume) in 1885 — originally to give Indians a 'safe' political outlet. It ended up overthrowing the British Empire! Study INC Formation & Early Phase 🎭", unit: "Modern India", chapter: "Nationalist Movement" },
          { topic: "Gandhi's Movements", fact: "Gandhi's Salt March (1930) covered 241 miles in 24 days. When he picked up a handful of salt, it triggered a global movement and Einstein called him 'the greatest man of our time' 🧂", unit: "Modern India", chapter: "Civil Disobedience Movement" },
          { topic: "Partition of India", fact: "The Radcliffe Line dividing India and Pakistan was drawn in just 5 weeks by a lawyer who had never been to India before! Study Partition & Independence 1947 🗺️", unit: "Modern India", chapter: "Independence & Partition" },
          { topic: "Bhakti Movement", fact: "Kabir Das was born to a Muslim weaver family but became one of Hinduism's greatest saints — his poetry is in both the Guru Granth Sahib and Hindu temples! Study Bhakti-Sufi Traditions 🙏", unit: "Medieval India", chapter: "Bhakti Movement" },
          { topic: "Vijayanagara Empire", fact: "Hampi (Vijayanagara capital) was the world's second-largest medieval city after Beijing, with a population of 500,000. Now it's UNESCO ruins. Study Vijayanagara Architecture & Culture 🏛️", unit: "Medieval India", chapter: "Vijayanagara Empire" },
          { topic: "Ancient Trade", fact: "Ancient India exported cotton, spices, and steel to Rome — Roman Senate complained that India was draining Rome's gold reserves! Study Ancient Trade Routes 🚢", unit: "Ancient India", chapter: "Economic History" },
          { topic: "Ashoka", fact: "After the Kalinga War (261 BCE) killing 100,000 people, Ashoka converted to Buddhism and banned animal sacrifice — the most dramatic personal transformation in ancient history. Study Ashoka's Dhamma 🕊️", unit: "Ancient India", chapter: "Mauryan Empire" },
          { topic: "Chola Dynasty", fact: "The Chola navy defeated the Srivijaya Empire in Southeast Asia in 1025 CE — making it one of India's greatest overseas military expeditions! Study Chola Administration & Maritime Power ⚓", unit: "Medieval India", chapter: "South Indian Kingdoms" },
          { topic: "Swadeshi Movement", fact: "The Swadeshi Movement (1905) was triggered by Lord Curzon's partition of Bengal — Indians burned British cloth worth millions to protest. Study Swadeshi & Boycott Movement 🔥", unit: "Modern India", chapter: "Swadeshi Movement" },
          { topic: "Non-Cooperation Movement", fact: "Gandhi returned his Kaiser-i-Hind medal during Non-Cooperation Movement (1920). Over 30,000 Indians were jailed — including Nehru for the first time. Study NCM & Its Impact ✊", unit: "Modern India", chapter: "Non-Cooperation Movement" },
        ]
      },
      "Geography": {
        icon: "🌍",
        facts: [
          { topic: "Indian Rivers", fact: "The Brahmaputra carries more water than the Ganga AND Indus COMBINED — yet it's barely taught! It travels 2,900 km and enters India only after a massive U-turn. Explore River Systems & Drainage Patterns 🌊", unit: "Physical Geography", chapter: "Indian Rivers" },
          { topic: "Monsoon", fact: "India's southwest monsoon carries 80% of annual rainfall in just 4 months. Miss this and you get droughts, floods, and food crises simultaneously. Master Monsoon Mechanism ⛈️", unit: "Climatology", chapter: "Indian Climate" },
          { topic: "Soil Types", fact: "Black cotton soil (regur) can drill a crack 2 metres deep when dry — and swell to seal itself when wet. It's the only soil that tills itself! Study Soil Formation & Types 🌱", unit: "Pedology", chapter: "Soil Types of India" },
          { topic: "Himalayas", fact: "The Himalayas are STILL growing at 5mm per year because the Indian plate keeps pushing into Asia. Mount Everest was 2.4m taller before the 2015 Nepal earthquake. Study Mountain Formation & Plate Tectonics 🏔️", unit: "Physiography", chapter: "Himalayan Region" },
          { topic: "Deccan Plateau", fact: "The Deccan Plateau was formed by one of history's largest volcanic eruptions 66 million years ago — the same event that may have contributed to dinosaur extinction! Study Peninsular India 🌋", unit: "Physiography", chapter: "Peninsular Plateau" },
          { topic: "Western Ghats", fact: "The Western Ghats are older than the Himalayas and one of the world's 8 'hottest hotspots' of biodiversity — home to 325 globally threatened species. Study Biodiversity & Conservation 🌿", unit: "Biogeography", chapter: "Western Ghats" },
          { topic: "Indian Ocean", fact: "The Indian Ocean is the ONLY ocean named after a country — and it contains 40% of the world's offshore oil reserves. Study Indian Ocean Geopolitics & Resources 🌊", unit: "Oceanography", chapter: "Indian Ocean" },
          { topic: "Thar Desert", fact: "The Thar Desert has the world's highest population density for any desert — 83 people per sq km! Most deserts have less than 1. Study Arid Zone Geography 🏜️", unit: "Physical Geography", chapter: "Desert Regions" },
          { topic: "Earthquakes", fact: "The 2001 Bhuj earthquake (7.7 magnitude) was felt as far as Bangladesh — 800 km away! India sits on 3 tectonic plate boundaries. Study Seismicity & Earthquake Zones of India 📊", unit: "Disaster Management", chapter: "Natural Disasters" },
          { topic: "Sundarbans", fact: "The Sundarbans mangrove forest is the only place where tigers swim in saltwater and hunt fish! It protects 30 million people from cyclones. Study Mangroves & Coastal Ecosystems 🐯", unit: "Ecology", chapter: "Coastal Geography" },
          { topic: "Northeast India", fact: "Meghalaya's Mawsynram receives 11,871 mm of rain annually — the world's highest! For comparison, Delhi gets 650 mm. Study Regional Geography of Northeast India ☔", unit: "Regional Geography", chapter: "Northeast India" },
          { topic: "Agriculture Zones", fact: "India has 15 different agro-climatic zones — from arctic cold deserts to tropical rainforests — all within one country. Study Agro-Climatic Regions & Cropping Patterns 🌾", unit: "Agricultural Geography", chapter: "Cropping Patterns" },
          { topic: "Population Distribution", fact: "Half of India's population lives in just 5 states (UP, Maharashtra, Bihar, West Bengal, MP) — covering only 35% of India's area. Study Population Distribution & Density 👥", unit: "Human Geography", chapter: "Population Geography" },
          { topic: "Urban Geography", fact: "Mumbai's Dharavi slum generates ₹10,000 crore in annual economic output — making it one of Asia's most productive square kilometres per capita! Study Urban Geography & Urbanisation 🏙️", unit: "Human Geography", chapter: "Urban Settlement" },
          { topic: "Wind Systems", fact: "Loo winds (hot dry winds in North India) can reach 45°C and cause mass casualties — they killed 2,500 people in 2015. Study Local Wind Systems & Heat Waves 💨", unit: "Climatology", chapter: "Wind Systems" },
        ]
      },
      "Polity": {
        icon: "⚖️",
        facts: [
          { topic: "Constitution", fact: "The Indian Constitution is the world's longest written constitution — 448 articles, 12 schedules. B.R. Ambedkar spent 2 years 11 months drafting it. Explore Constitutional History ✍️", unit: "Constitutional Framework", chapter: "Making of the Constitution" },
          { topic: "Fundamental Rights", fact: "Right to Education (Article 21A) was added only in 2002! The original 1950 Constitution didn't guarantee free education. Study Constitutional Amendments 📚", unit: "Fundamental Rights", chapter: "Articles 12-35" },
          { topic: "Federalism", fact: "India is called a 'quasi-federal' state — during emergencies, it transforms into a unitary state! No other democracy has this feature. Explore Emergency Provisions (Art 352-360) 🚨", unit: "Federal Structure", chapter: "Centre-State Relations" },
          { topic: "Parliament", fact: "India's Parliament building (old) was constructed in 1927 and has 144 columns arranged in a perfect circle — representing India's cyclical philosophy of governance. Study Parliamentary Structure & Functions 🏛️", unit: "Legislature", chapter: "Parliament of India" },
          { topic: "Judiciary", fact: "India's Supreme Court can take up a case suo motu (on its own) — meaning it can start a case even if no one files a complaint. This is called 'judicial activism'. Study Supreme Court Powers 👨‍⚖️", unit: "Judiciary", chapter: "Supreme Court" },
          { topic: "President of India", fact: "The Indian President can return a bill to Parliament for reconsideration ONCE — but if Parliament passes it again, the President MUST sign it. Study Presidential Powers & Veto 📜", unit: "Executive", chapter: "President of India" },
          { topic: "DPSP", fact: "Directive Principles of State Policy (DPSPs) are NOT enforceable in court — but they guide governance. Article 44 (Uniform Civil Code) has been in DPSPs since 1950 but never implemented! Study DPSPs ⚖️", unit: "Directive Principles", chapter: "Articles 36-51" },
          { topic: "Amendment Process", fact: "The Constitution has been amended 105 times — more than any other constitution! The USA has amended theirs only 27 times in 230 years. Study Constitutional Amendment Process 🔧", unit: "Constitutional Framework", chapter: "Constitutional Amendments" },
          { topic: "Election Commission", fact: "India's Election Commission manages elections for 900 million voters — the largest democratic exercise in human history! The 2019 elections used 3.9 million EVMs. Study ECI Structure & Powers 🗳️", unit: "Constitutional Bodies", chapter: "Election Commission" },
          { topic: "Preamble", fact: "The word 'SECULAR' was NOT in the original 1950 Constitution — it was added by the 42nd Amendment in 1976 during Emergency! Study Preamble & Its Significance 📋", unit: "Constitutional Framework", chapter: "Preamble" },
          { topic: "CAG", fact: "The Comptroller and Auditor General (CAG) audits ALL government spending — including defence! No other official can audit the armed forces. Study Constitutional Authorities 🔍", unit: "Constitutional Bodies", chapter: "CAG & Finance Commission" },
          { topic: "Fundamental Duties", fact: "Fundamental Duties (Article 51A) were added in 1976 and are NOT justiciable — you can't go to court if someone violates them! Study Article 51A & Swaran Singh Committee 📌", unit: "Fundamental Duties", chapter: "Article 51A" },
          { topic: "Local Government", fact: "The 73rd Amendment (1992) gave constitutional status to Panchayati Raj — before this, village councils had NO constitutional recognition for 42 years! Study PRIs & Urban Local Bodies 🏘️", unit: "Local Government", chapter: "Panchayati Raj" },
          { topic: "Governor", fact: "A Governor is appointed by the President and serves 'at the pleasure of the President' — meaning they can be removed any time without any reason given! Study Governor's Powers & Functions 🎖️", unit: "State Executive", chapter: "Governor" },
          { topic: "RTI Act", fact: "The RTI Act (2005) has been used 60 lakh times annually — Indians use it to expose corruption, check land records, and even find out why their ration cards weren't made! Study RTI & Transparency Laws 📂", unit: "Governance", chapter: "Right to Information" },
        ]
      },
      "Economy": {
        icon: "📈",
        facts: [
          { topic: "Monetary Policy", fact: "RBI can print unlimited money legally — but doesn't, because of inflation. Zimbabwe printed so much that a 100 trillion dollar note became worthless. Study Money Supply & Inflation 💸", unit: "Monetary Economics", chapter: "RBI & Monetary Policy" },
          { topic: "Agriculture", fact: "India is the world's largest milk producer but 40% of fruits & vegetables rot before reaching markets. Cold chain logistics is a ₹50,000 crore opportunity! Study Agricultural Marketing 🥛", unit: "Indian Agriculture", chapter: "Agricultural Economy" },
          { topic: "GDP & Growth", fact: "India became the world's 5th largest economy in 2022 — overtaking the UK, the country that colonised it for 200 years! Study GDP Measurement & National Income Accounting 📊", unit: "Macroeconomics", chapter: "National Income" },
          { topic: "Budget", fact: "India's Union Budget was traditionally presented at 5 PM on the last day of February — a British tradition! Changed to February 1st in 2017 to implement decisions before the new fiscal year. Study Union Budget Process 💰", unit: "Public Finance", chapter: "Union Budget" },
          { topic: "Banking System", fact: "India has 1.4 billion people but only 67% have bank accounts — yet India processes more digital transactions daily than the USA, UK, and Germany COMBINED! Study Financial Inclusion & Digital Banking 📱", unit: "Banking", chapter: "Banking System of India" },
          { topic: "Inflation", fact: "When demonetisation happened in 2016, ₹15.44 lakh crore (86% of all cash) was invalidated overnight. India's economy contracted but digital payments grew 55x! Study Demonetisation & Monetary Policy 💵", unit: "Monetary Economics", chapter: "Inflation & Money Supply" },
          { topic: "Trade Policy", fact: "India is the world's largest importer of gold — Indians import $35 billion of gold annually, much of it just stored in lockers! Study Balance of Payments & Trade Policy 🥇", unit: "International Trade", chapter: "Foreign Trade" },
          { topic: "Five Year Plans", fact: "India's First Five Year Plan (1951) was drafted by PC Mahalanobis in just 3 months! It focused entirely on agriculture after the food crisis post-Partition. Study Planning Commission & Five Year Plans 📋", unit: "Economic Planning", chapter: "Five Year Plans" },
          { topic: "GST", fact: "GST replaced 17 different taxes and 23 types of surcharges — India's biggest tax reform since independence! It took 17 years of negotiations to implement. Study GST Structure & Impact 🧾", unit: "Taxation", chapter: "Goods & Services Tax" },
          { topic: "Poverty", fact: "India lifted 415 million people out of poverty in just 15 years (2006-2021) — the fastest poverty reduction in human history! Study Poverty Measurement & Alleviation Programmes 📉", unit: "Development Economics", chapter: "Poverty & Inequality" },
          { topic: "Foreign Exchange", fact: "India's forex reserves crossed $600 billion in 2021 — enough to fund 12 months of imports! RBI uses forex to stabilise the rupee. Study Foreign Exchange Reserves & Management 💱", unit: "International Finance", chapter: "Foreign Exchange" },
          { topic: "SEBI", fact: "SEBI (Securities & Exchange Board of India) was given statutory powers only in 1992 after the Harshad Mehta scam exposed massive stock market fraud. Study SEBI's Powers & Market Regulation 📈", unit: "Financial Markets", chapter: "Capital Markets" },
          { topic: "Cooperative Banks", fact: "India has 96,000 cooperative banks — more than any country in the world! They serve 290 million rural families. Study Cooperative Banking & Rural Credit 🤝", unit: "Banking", chapter: "Rural Banking" },
          { topic: "Make in India", fact: "India's manufacturing sector contributes only 17% to GDP — China's is 27%. Make in India aims to raise this to 25% by 2025. Study Industrial Policy & Manufacturing Sector 🏭", unit: "Industrial Economics", chapter: "Industrial Policy" },
          { topic: "Green Economy", fact: "India is the world's 3rd largest solar power producer and aims for 500 GW of renewable energy by 2030 — equivalent to the current total power capacity of the USA! Study Renewable Energy Policy ☀️", unit: "Environmental Economics", chapter: "Green Economy" },
        ]
      },
      "Science & Tech": {
        icon: "🔬",
        facts: [
          { topic: "Space Technology", fact: "Chandrayaan-3 cost ₹615 crore — less than the budget of the Hollywood movie Interstellar (₹1,200 crore). India reached the Moon's south pole for LESS than a movie budget! 🚀 Study ISRO Missions.", unit: "Space Technology", chapter: "ISRO & Indian Space Programme" },
          { topic: "Biotechnology", fact: "India's Covaxin was developed in just 11 months — normally vaccines take 10-15 years. ICMR fast-tracked it without compromising safety. Study Vaccine Technology 💉", unit: "Biotechnology", chapter: "Biotech in India" },
          { topic: "Nuclear Technology", fact: "India has a unique 3-stage nuclear programme — using thorium (which India has 30% of world reserves) in the final stage. No other country has built this! Study India's Nuclear Programme ⚛️", unit: "Nuclear Technology", chapter: "Nuclear Energy" },
          { topic: "Defence Technology", fact: "DRDO's Agni-V missile can reach any point in China or Europe from Indian soil in 30 minutes. It's a hypersonic missile that travels at Mach 24! Study India's Missile Programme 🚀", unit: "Defence Technology", chapter: "Missiles & Defence" },
          { topic: "AI & Computing", fact: "India produces 1.5 million engineering graduates annually — more than USA and China combined! Yet India has only 100 AI startups vs USA's 2,000. Study IT Sector & Digital India 💻", unit: "Information Technology", chapter: "IT & Digital India" },
          { topic: "Agriculture Technology", fact: "India's ISRO uses satellite imagery to predict crop yields for 600 districts before harvest — helping the government prepare for food crises months in advance! Study Remote Sensing Applications 🛰️", unit: "Technology in Agriculture", chapter: "Precision Agriculture" },
          { topic: "Water Technology", fact: "IIT Madras developed low-cost arsenic removal technology that cleans contaminated groundwater for 10 paise per litre — used in 10,000 villages! Study Water Purification Technologies 💧", unit: "Environmental Technology", chapter: "Water Management" },
          { topic: "Nanotechnology", fact: "India's National Nanotechnology Initiative has created nano-silver antibiotics 1000x cheaper than conventional antibiotics — a potential solution to antibiotic resistance! Study Nanotechnology Applications 🔬", unit: "Nanotechnology", chapter: "Nano Science" },
          { topic: "Renewable Energy", fact: "India's solar energy cost has fallen 89% in 10 years — from ₹17/unit to ₹1.99/unit! Solar is now cheaper than coal in India. Study Energy Technology & Policy ☀️", unit: "Energy Technology", chapter: "Renewable Energy" },
          { topic: "Cybersecurity", fact: "India faces 3,37,000 cyberattacks daily — more than any country except USA! The 2021 AIIMS cyberattack shut down Delhi's top hospital for 15 days. Study Cybersecurity & IT Act 🔒", unit: "Cybersecurity", chapter: "Digital Security" },
        ]
      },
      "Environment": {
        icon: "🌿",
        facts: [
          { topic: "Climate Change", fact: "India will have 45°C+ summer days across 90% of its geography by 2050 if emissions continue. Already, heat waves kill 7,000+ Indians annually. Study Climate Change & India's Commitments 🌡️", unit: "Climate Science", chapter: "Climate Change" },
          { topic: "Biodiversity", fact: "India has 4 of the world's 36 biodiversity hotspots — more than most continental countries. The Western Ghats alone have 5,000 species found NOWHERE else on Earth! Study Biodiversity Conservation 🦋", unit: "Biodiversity", chapter: "Conservation Biology" },
          { topic: "Wildlife Protection", fact: "Project Tiger (1973) saved the Bengal tiger from extinction — population grew from 1,827 to 3,167 in 50 years! Study Wildlife Protection Act & Conservation Projects 🐯", unit: "Wildlife Conservation", chapter: "Project Tiger & Elephant" },
          { topic: "Air Pollution", fact: "Delhi's air quality in winter is equivalent to smoking 25-30 cigarettes per day! PM2.5 levels 20x WHO safe limits. Study Air Pollution Sources & Control Measures 😷", unit: "Environmental Pollution", chapter: "Air Pollution" },
          { topic: "Water Crisis", fact: "By 2030, India's water demand will be TWICE the available supply — 21 cities including Delhi and Bangalore may run out of groundwater. Study Water Conservation & Management 💧", unit: "Water Resources", chapter: "Water Crisis" },
          { topic: "Forest Cover", fact: "India's forest cover is INCREASING — from 19.4% (1990) to 21.7% (2021) — one of the few countries where it's growing! Study Forest Policy & Afforestation 🌳", unit: "Forest Management", chapter: "Forest Cover & Policy" },
          { topic: "Ozone Layer", fact: "The Montreal Protocol (1987) is the ONLY UN treaty ratified by ALL 197 countries — showing global action CAN work! The ozone hole is recovering. Study International Environmental Conventions 🌐", unit: "International Environment", chapter: "Global Environmental Agreements" },
          { topic: "Plastic Pollution", fact: "India generates 26,000 tonnes of plastic waste DAILY — but only 60% is collected. The rest enters rivers, oceans, and food chains. Study Plastic Waste Management Rules 🚯", unit: "Solid Waste", chapter: "Plastic Pollution" },
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
          { topic: "Mechanics", fact: "The ISS orbits Earth at 7.66 km/s — it literally falls toward Earth continuously but moves so fast it keeps missing the surface. That's what an orbit IS. Master Gravitation chapter 🛸", unit: "Mechanics", chapter: "Gravitation & Circular Motion" },
          { topic: "Electromagnetism", fact: "Your phone charger works because of Faraday's discovery in 1831 — a moving magnet creates electricity. He had no formal education past age 13. Explore Electromagnetic Induction 🔋", unit: "Electromagnetism", chapter: "EMI & AC Circuits" },
          { topic: "Modern Physics", fact: "Quantum mechanics says a particle exists in ALL positions simultaneously until observed. Schrödinger's cat is not just a thought experiment — it's how electrons in your phone chips actually behave! Study Atomic Models 🐱", unit: "Modern Physics", chapter: "Atomic Structure" },
          { topic: "Thermodynamics", fact: "A refrigerator works by moving heat from inside to outside — it CANNOT cool a room if you leave it open! Entropy always increases. This is why your room gets messier, never cleaner. Study 2nd Law of Thermodynamics 🧊", unit: "Thermodynamics", chapter: "Laws of Thermodynamics" },
          { topic: "Optics", fact: "A rainbow is a circle — you only see a semicircle because the ground blocks the rest! From an airplane, you can see a full circular rainbow. Study Total Internal Reflection & Optics 🌈", unit: "Optics", chapter: "Ray Optics" },
          { topic: "Sound Waves", fact: "A sonic boom isn't the sound of breaking the sound barrier — it's a continuous shockwave that follows the aircraft like a wake. Study Wave Motion & Doppler Effect 💥", unit: "Waves", chapter: "Sound Waves" },
          { topic: "Fluid Mechanics", fact: "Bernoulli's principle explains why airplane wings generate lift — but it's WRONG for most aircraft! Real lift comes from Newton's 3rd law of air deflection. Study Fluid Dynamics 🛫", unit: "Fluid Mechanics", chapter: "Bernoulli's Theorem" },
          { topic: "Rotational Motion", fact: "A gyroscope resists changes in orientation — this is why spinning tops don't fall and why your phone's accelerometer works! Study Angular Momentum & Gyroscopic Motion 🌀", unit: "Rotational Dynamics", chapter: "Rotational Motion" },
          { topic: "Electrostatics", fact: "Lightning strikes Earth 100 times per SECOND — that's 8.6 million times per day! Each bolt carries 1 billion volts. Study Electric Field & Potential ⚡", unit: "Electrostatics", chapter: "Electric Field & Potential" },
          { topic: "Nuclear Physics", fact: "The nuclear bomb dropped on Hiroshima converted only 1 gram of matter into energy — E=mc² made 1g equivalent to 21,000 tonnes of TNT! Study Mass-Energy Equivalence ☢️", unit: "Nuclear Physics", chapter: "Radioactivity & Nuclear Reactions" },
          { topic: "Simple Harmonic Motion", fact: "Your heartbeat, pendulum clocks, and guitar strings all follow Simple Harmonic Motion. If your heart's SHM becomes irregular — it's a heart attack! Study SHM & Oscillations ❤️", unit: "Oscillations", chapter: "Simple Harmonic Motion" },
          { topic: "Semiconductors", fact: "The entire internet runs on silicon semiconductors thinner than a human hair — 5 nanometres in modern chips! That's 20,000 times thinner than a hair. Study P-N Junction & Transistors 💻", unit: "Modern Physics", chapter: "Semiconductors" },
          { topic: "Magnetic Effects", fact: "MRI machines use magnetic fields 30,000x stronger than Earth's to image inside your body — using the same principles as JEE's magnetism chapter! Study Magnetic Field & Biot-Savart Law 🧲", unit: "Magnetism", chapter: "Magnetic Effects of Current" },
          { topic: "Photoelectric Effect", fact: "Einstein won the Nobel Prize for explaining the Photoelectric Effect — NOT for Relativity! Solar panels work on this principle, converting photons to electricity. Study Photoelectric Effect 🌟", unit: "Modern Physics", chapter: "Dual Nature of Matter" },
          { topic: "Capacitors", fact: "Defibrillators (heart restart machines) use capacitors to store and discharge 360 joules in milliseconds. Your life might be saved by a JEE concept! Study Capacitance & Energy Storage ⚡", unit: "Electrostatics", chapter: "Capacitors" },
        ]
      },
      "Chemistry": {
        icon: "🧪",
        facts: [
          { topic: "Organic Chemistry", fact: "Aspirin was synthesized in 1897 and is still one of the world's most-used drugs. It's made from salicylic acid found in willow bark — ancient Egyptians used willow for fever! Study Esterification ⚗️", unit: "Organic Chemistry", chapter: "Carboxylic Acids & Derivatives" },
          { topic: "Electrochemistry", fact: "The lithium-ion battery in your phone generates electricity through a reaction Faraday described in 1834. Every JEE paper has 2-3 electrochemistry questions worth 12+ marks — study Nernst Equation NOW! 🔌", unit: "Physical Chemistry", chapter: "Electrochemistry" },
          { topic: "Coordination Compounds", fact: "Hemoglobin — the protein that carries oxygen in your blood — is a coordination compound of iron. Without coordination chemistry, you literally cannot breathe. Study Ligands & CFSE 🩸", unit: "Inorganic Chemistry", chapter: "Coordination Compounds" },
          { topic: "Chemical Kinetics", fact: "The Haber Process for making fertiliser uses an iron catalyst — without it, the reaction takes 1000 years! Catalysts make modern agriculture possible. Study Activation Energy & Catalysis 🌾", unit: "Physical Chemistry", chapter: "Chemical Kinetics" },
          { topic: "Periodic Table", fact: "Mendeleev LEFT GAPS in his Periodic Table for undiscovered elements — and accurately predicted their properties! Element 101 is named Mendelevium in his honour. Study Periodicity & Trends 📊", unit: "Inorganic Chemistry", chapter: "Periodic Table" },
          { topic: "Chemical Bonding", fact: "Graphite and Diamond are BOTH pure carbon — but graphite is one of the softest materials and diamond is the hardest! The difference is ONLY in bonding arrangement. Study Hybridisation & Bond Angles 💎", unit: "Physical Chemistry", chapter: "Chemical Bonding" },
          { topic: "Thermochemistry", fact: "When you dissolve salt in water, it feels cold — because dissolving absorbs heat from your hand! This endothermic process is used in instant cold packs. Study Enthalpy & Hess's Law 🧊", unit: "Physical Chemistry", chapter: "Thermochemistry" },
          { topic: "Polymers", fact: "Teflon (non-stick coating) was discovered by ACCIDENT in 1938 when a refrigerant experiment went wrong! It's now used in 1 billion frying pans. Study Addition & Condensation Polymers 🍳", unit: "Organic Chemistry", chapter: "Polymers" },
          { topic: "Alcohols", fact: "Ethanol (drinking alcohol) and Methanol (industrial alcohol) differ by just ONE carbon — but methanol causes blindness and death even in small amounts! Study Alcohols & Phenols Structure 🍷", unit: "Organic Chemistry", chapter: "Alcohols & Ethers" },
          { topic: "Equilibrium", fact: "Le Chatelier's Principle explains why fizzy drinks go flat when opened — reduced pressure shifts equilibrium, releasing CO2. Every JEE has 2+ equilibrium questions. Study Chemical Equilibrium 🥤", unit: "Physical Chemistry", chapter: "Chemical Equilibrium" },
          { topic: "p-Block Elements", fact: "Ozone (O3) is formed naturally in the stratosphere to block UV — but the same gas at ground level causes respiratory diseases! Study Allotropes of Oxygen & Ozone Layer 🌡️", unit: "Inorganic Chemistry", chapter: "p-Block Elements" },
          { topic: "Surface Chemistry", fact: "Soaps and detergents work by having one end attracted to water and one to oil — forming micelles that trap grease. This is adsorption in action! Study Surface Chemistry & Colloids 🧼", unit: "Physical Chemistry", chapter: "Surface Chemistry" },
          { topic: "Organic Reactions", fact: "Grignard reagent (organomagnesium) can build ANY carbon skeleton from scratch — it's why organic synthesis is called 'molecular Lego'. Victor Grignard won the Nobel Prize for it. Study Grignard Reactions ⚗️", unit: "Organic Chemistry", chapter: "Organometallic Compounds" },
          { topic: "Solid State", fact: "Diamond is the hardest natural material because every carbon atom is bonded to 4 others in a perfect tetrahedral network — no weak points! Study Crystal Structure & Unit Cells 💎", unit: "Physical Chemistry", chapter: "Solid State" },
          { topic: "Solutions", fact: "Reverse Osmosis water purifiers use osmotic pressure to force water through membranes — the same concept as JEE's colligative properties chapter! Study Osmosis & Colligative Properties 💧", unit: "Physical Chemistry", chapter: "Solutions" },
        ]
      },
      "Mathematics": {
        icon: "📐",
        facts: [
          { topic: "Calculus", fact: "Indian mathematician Madhava of Sangamagrama discovered infinite series (the foundation of calculus) 250 years BEFORE Newton and Leibniz! You're solving problems with ancient Indian mathematics. Explore Limits 🧮", unit: "Calculus", chapter: "Limits, Continuity & Differentiability" },
          { topic: "Probability", fact: "The birthday problem: in a group of just 23 people, there's a 50% chance two share a birthday. In 57 people it's 99%! Counterintuitive results like this appear every year in JEE. Study Probability 🎲", unit: "Probability", chapter: "Probability Theory" },
          { topic: "Coordinate Geometry", fact: "GPS works entirely on coordinate geometry — latitude, longitude, and distance formulas you study in JEE. Every Uber ride is a real-world application of your exam syllabus! 📍 Master Circles chapter.", unit: "Coordinate Geometry", chapter: "Circles & Conics" },
          { topic: "Matrices", fact: "Google's PageRank algorithm (that ranks websites) is essentially a massive matrix multiplication done 8 billion times per second. Study Matrices & Eigenvalues 🌐", unit: "Algebra", chapter: "Matrices & Determinants" },
          { topic: "Complex Numbers", fact: "Complex numbers were 'invented' to solve equations with no real solutions — but they ended up describing quantum mechanics, electromagnetism, and signal processing! Study Argand Plane & Complex Numbers 🌀", unit: "Algebra", chapter: "Complex Numbers" },
          { topic: "Vectors", fact: "Every 3D video game uses vector mathematics millions of times per second to calculate lighting, shadows, and character movement. Master Dot & Cross Product 🎮", unit: "Vectors & 3D", chapter: "Vector Algebra" },
          { topic: "Integration", fact: "Integration was used by Archimedes 2,200 years ago to calculate the area of a circle — he just didn't call it that! Study Integration Techniques & Applications 📐", unit: "Calculus", chapter: "Integral Calculus" },
          { topic: "Permutation & Combination", fact: "The number of possible chess games (10^120) exceeds the number of atoms in the universe (10^80)! Combinatorics proves why chess is 'infinite'. Study PnC Counting Principles ♟️", unit: "Combinatorics", chapter: "Permutation & Combination" },
          { topic: "Binomial Theorem", fact: "Pascal's Triangle was known to Indian mathematician Pingala in 200 BCE — 1,800 years before Pascal! It contains Fibonacci sequence, binomial coefficients, and fractal patterns. Study Binomial Theorem 🔺", unit: "Algebra", chapter: "Binomial Theorem" },
          { topic: "Differential Equations", fact: "The entire spread of COVID-19 was modelled using the same differential equations you study in JEE — the SIR model! Governments used it to plan lockdowns. Study DEs & Applications 📊", unit: "Calculus", chapter: "Differential Equations" },
          { topic: "Trigonometry", fact: "sin and cos were first calculated by Indian astronomer Aryabhata in 499 CE — not by Greek mathematicians! He called them 'jya' and 'kojya'. Study Trigonometric Identities 🌐", unit: "Trigonometry", chapter: "Trigonometric Functions" },
          { topic: "Parabola", fact: "Every satellite dish, car headlight, and solar concentrator uses a parabolic shape — because parabolas focus all parallel rays to one point. Study Parabola & Conics 📡", unit: "Coordinate Geometry", chapter: "Parabola & Ellipse" },
          { topic: "Sequence & Series", fact: "Compound interest (your bank FD!) is a geometric progression. ₹1 lakh at 7% for 30 years becomes ₹7.6 lakh — that's geometric series at work! Study AP, GP & Sum of Series 💰", unit: "Sequences", chapter: "Sequences & Series" },
          { topic: "3D Geometry", fact: "MRI machines reconstruct 3D images of your body using the same 3D distance and plane equations from JEE! Study 3D Geometry & Direction Cosines 🏥", unit: "3D Geometry", chapter: "Three Dimensional Geometry" },
          { topic: "Statistics", fact: "The bell curve (normal distribution) describes human height, IQ, and exam scores — meaning most JEE scores cluster around the mean! Study Mean, Variance & Standard Deviation 📊", unit: "Statistics", chapter: "Statistics & Probability" },
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
          { topic: "Cell Biology", fact: "Your body has 37 TRILLION cells — each with 2 metres of DNA coiled inside a nucleus smaller than 6 microns. If you uncoiled all your DNA it would stretch to the sun and back 600 times! Study DNA Packaging 🧬", unit: "Cell Biology", chapter: "Cell: The Unit of Life" },
          { topic: "Genetics", fact: "You share 60% of your DNA with a banana 🍌 and 85% with a mouse. NEET genetics asks you to calculate these inheritance patterns. Master Mendelian Genetics!", unit: "Genetics", chapter: "Principles of Inheritance" },
          { topic: "Human Physiology", fact: "Your heart beats 100,000 times a day — and has been doing so since you were a 4-week-old embryo without a brain! The cardiac muscle is the only muscle that never fatigues. Explore Cardiac Cycle ❤️", unit: "Human Physiology", chapter: "Body Fluids & Circulation" },
          { topic: "Evolution", fact: "All life on Earth evolved from a single common ancestor 3.8 billion years ago — meaning you are related to every living thing, including the bacteria in your gut! Study Darwinian Evolution 🦎", unit: "Evolution", chapter: "Evolution & Natural Selection" },
          { topic: "Photosynthesis", fact: "Plants use only 1-2% of sunlight that falls on them for photosynthesis — yet this powers ALL life on Earth! If efficiency doubled, we could feed 10 billion people. Study Light & Dark Reactions 🌱", unit: "Plant Physiology", chapter: "Photosynthesis" },
          { topic: "Nervous System", fact: "Nerve impulses travel at 120 m/s (432 km/h) in myelinated neurons — that's how you pull your hand away from fire in 0.1 seconds before feeling pain! Study Action Potential & Synapses ⚡", unit: "Human Physiology", chapter: "Neural Control & Coordination" },
          { topic: "Hormones", fact: "Adrenaline (epinephrine) can be released in 0.1 seconds and increases heart rate by 50% instantly — the 'fight or flight' response was essential for human survival! Study Endocrine System 💉", unit: "Human Physiology", chapter: "Chemical Coordination" },
          { topic: "Respiration", fact: "Your lungs have 300 million alveoli with a total surface area of 70 sq metres — the size of a tennis court! All folded into your chest. Study Gas Exchange & Respiratory Volumes 🫁", unit: "Human Physiology", chapter: "Breathing & Gas Exchange" },
          { topic: "Immune System", fact: "Your immune system generates 10 BILLION different antibodies before you're ever exposed to any pathogen — it's pre-prepared for almost any invasion! Study Antibody Structure & Immunity 🛡️", unit: "Human Health", chapter: "Human Immune System" },
          { topic: "Digestive System", fact: "Your small intestine is 6-7 metres long and has 200 sq metres of surface area (thanks to villi) — it's why humans can digest food in just 4-6 hours! Study Digestion & Absorption 🍽️", unit: "Human Physiology", chapter: "Digestion & Absorption" },
          { topic: "DNA Replication", fact: "DNA replication happens in EVERY cell division — 37 trillion times in your lifetime! The error rate is 1 in 10 billion bases — more accurate than any machine ever built. Study DNA Replication 🔬", unit: "Molecular Biology", chapter: "Molecular Basis of Inheritance" },
          { topic: "Ecosystem", fact: "The Amazon rainforest produces 20% of the world's oxygen AND absorbs 2 billion tonnes of CO2 annually — called 'Earth's lungs' for good reason! Study Ecosystem Structure & Function 🌳", unit: "Ecology", chapter: "Ecosystem" },
          { topic: "Reproduction", fact: "A single human egg is the largest cell visible to the naked eye (0.1 mm) while sperm is the smallest cell. They fuse to create a complete human being! Study Human Reproduction & Fertilisation 🧫", unit: "Human Reproduction", chapter: "Reproductive System" },
          { topic: "Plant Reproduction", fact: "A single orchid flower can produce 3 million seeds — but without specific fungi to germinate with, NONE of them will grow! Study Seed Germination & Plant Reproduction 🌸", unit: "Plant Biology", chapter: "Reproduction in Plants" },
          { topic: "Biotechnology", fact: "Insulin for diabetics used to come from pig pancreases — from 1982 onwards, it's produced by bacteria with human insulin gene inserted using recombinant DNA technology! Study rDNA & Biotechnology 🧪", unit: "Biotechnology", chapter: "Biotechnology Principles" },
          { topic: "Animal Kingdom", fact: "The blue whale is 33 metres long and weighs 200 tonnes — its heart alone is the size of a car! Yet it eats only tiny krill. Study Animal Classification & Diversity 🐋", unit: "Diversity", chapter: "Animal Kingdom" },
          { topic: "Plant Kingdom", fact: "Ferns were the dominant plant on Earth 360 million years ago — the coal we burn today is compressed ancient fern forests! Study Plant Kingdom Classification 🌿", unit: "Diversity", chapter: "Plant Kingdom" },
          { topic: "Cell Division", fact: "Cancer is essentially uncontrolled mitosis — cells that keep dividing without stopping. Understanding cell cycle checkpoints is how cancer drugs work! Study Mitosis & Meiosis 🔬", unit: "Cell Biology", chapter: "Cell Division" },
          { topic: "Biodiversity", fact: "Scientists estimate 8.7 million species on Earth — but we've only identified 1.2 million! 86% of land species and 91% of ocean species are still unknown. Study Biodiversity & Conservation 🌍", unit: "Ecology", chapter: "Biodiversity" },
          { topic: "Microbes", fact: "Your gut contains 100 trillion bacteria — that's 10x more bacteria than human cells in your body! These microbes weigh 2 kg and influence your mood, immunity, and weight. Study Microbes in Human Health 🦠", unit: "Biology in Human Welfare", chapter: "Microbes" },
        ]
      },
      "Physics": {
        icon: "⚛️",
        facts: [
          { topic: "Optics", fact: "The human eye can detect a single photon of light in complete darkness. Yet doctors use it to diagnose 100+ diseases. Study Ray Optics — NEET asks this every single year 👁️", unit: "Optics", chapter: "Ray Optics & Optical Instruments" },
          { topic: "Nuclear Physics", fact: "Radiation therapy for cancer uses gamma rays to destroy tumour cells — the same nuclear radiation that can cause cancer! The difference is in dose and targeting. Study Radioactivity & Nuclear Physics ☢️", unit: "Nuclear Physics", chapter: "Nuclei" },
          { topic: "Electricity", fact: "The electric eel generates 600 volts — enough to stun a horse! It uses sodium-potassium pumps, the same as your nerve cells. Study Electric Current & Body Electricity ⚡", unit: "Electricity", chapter: "Current Electricity" },
          { topic: "Magnetism", fact: "MRI machines use magnetic fields 30,000x stronger than Earth's to image inside your body. The same physics principles as electromagnetic induction! Study Magnetism & Medical Imaging 🧲", unit: "Magnetism", chapter: "Magnetism" },
          { topic: "Laws of Motion", fact: "A car airbag deploys in 30 milliseconds — calculating the exact force using Newton's 2nd Law (F=ma) to save your life! Study Newton's Laws & Applications 🚗", unit: "Mechanics", chapter: "Laws of Motion" },
          { topic: "Thermodynamics", fact: "Fever (high body temperature) speeds up all chemical reactions including immune response — that's WHY your body heats up when fighting infection! Study Thermodynamics & Body Temperature 🌡️", unit: "Thermodynamics", chapter: "Thermal Properties" },
          { topic: "Sound", fact: "Ultrasound machines use sound waves at 1-20 MHz (inaudible to humans) to image babies in the womb — the same wave physics from NEET chapter! Study Sound Waves & Ultrasound 🔊", unit: "Waves", chapter: "Sound Waves" },
          { topic: "Pressure", fact: "Deep sea fish explode when brought to the surface because their bodies are adapted to 1000 atmospheres of pressure! Study Pressure & Pascal's Law 🐟", unit: "Fluid Mechanics", chapter: "Mechanical Properties of Fluids" },
        ]
      },
      "Chemistry": {
        icon: "🧪",
        facts: [
          { topic: "Biomolecules", fact: "Enzymes are so specific they can distinguish between mirror-image molecules — like telling your left hand from your right by touch alone. This specificity saves your life every second. Study Enzyme Kinetics 🔬", unit: "Organic Chemistry", chapter: "Biomolecules" },
          { topic: "Organic Chemistry", fact: "Morphine (painkiller), quinine (antimalarial), and caffeine (your morning tea) are all plant alkaloids — naturally occurring organic nitrogen compounds! Study Alkaloids & Natural Products ☕", unit: "Organic Chemistry", chapter: "Amines & Alkaloids" },
          { topic: "Solutions", fact: "Saline drips in hospitals use 0.9% NaCl solution — EXACTLY matching blood's salt concentration! Even slightly wrong concentration causes red blood cells to burst or shrink. Study Isotonic Solutions 💊", unit: "Physical Chemistry", chapter: "Solutions" },
          { topic: "Electrochemistry", fact: "Heart pacemakers use lithium batteries that last 10 years — powered by the same electrochemical reactions in your JEE/NEET chapter! Study Galvanic Cells & Battery Chemistry 🔋", unit: "Physical Chemistry", chapter: "Electrochemistry" },
          { topic: "Chemical Bonding", fact: "Water's unique bent shape (due to lone pairs) gives it surface tension, high boiling point, and the ability to dissolve most things — without it, life is impossible! Study VSEPR Theory 💧", unit: "Physical Chemistry", chapter: "Chemical Bonding" },
          { topic: "p-Block Elements", fact: "Phosphorus is essential for DNA (it makes the backbone!) and ATP (energy currency of cells). Without phosphorus chemistry, no life exists. Study p-Block & Biological Role of Elements 🧬", unit: "Inorganic Chemistry", chapter: "p-Block Elements" },
          { topic: "Organic Reactions", fact: "Penicillin works by blocking a specific enzyme that bacteria use to build cell walls — pure organic chemistry saving billions of lives! Study Organic Reactions & Drug Design 💉", unit: "Organic Chemistry", chapter: "Organic Mechanisms" },
          { topic: "Equilibrium", fact: "Blood pH must stay between 7.35-7.45 — if it goes to 7.0 or 7.8, you die! Your body uses carbonate buffer (equilibrium chemistry) to maintain this. Study Buffer Solutions & Equilibrium 🩸", unit: "Physical Chemistry", chapter: "Ionic Equilibrium" },
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
          { topic: "Number Systems", fact: "Every number divisible by 9 has digits that sum to a multiple of 9. Test it: 729 → 7+2+9=18 ✅. This Vedic trick alone saves 30 seconds per question in CAT. Master Divisibility Rules! 🧮", unit: "Number Theory", chapter: "Divisibility & Remainders" },
          { topic: "Geometry", fact: "The ancient Egyptians used a 3-4-5 rope triangle to make perfect right angles for the pyramids — the same Pythagorean theorem you're studying for CAT. 4,000 years of relevance! 📐", unit: "Geometry", chapter: "Triangles, Circles & Mensuration" },
          { topic: "Percentages", fact: "A 50% increase followed by a 50% decrease gives you a 25% NET LOSS — not zero! This common trap appears in 3-4 CAT questions every year. Master Successive Percentage Changes 📊", unit: "Arithmetic", chapter: "Percentage & Profit-Loss" },
          { topic: "Time & Work", fact: "If A does a job in 10 days and B in 15 days, together they take 6 days — not 12.5! The harmonic mean formula trips up 40% of CAT students. Study Work & Time shortcuts ⏰", unit: "Arithmetic", chapter: "Time & Work" },
          { topic: "Progressions", fact: "Compound interest is geometric progression! ₹1 invested at 1% monthly for 72 months doubles — the Rule of 72 helps mental calculation. Study AP, GP & Applications 💰", unit: "Algebra", chapter: "Progressions" },
          { topic: "Quadratic Equations", fact: "The quadratic formula was known to Babylonian mathematicians in 2000 BCE — predating algebra by 2500 years! They solved it geometrically. Study Quadratic & Polynomial Equations 📐", unit: "Algebra", chapter: "Equations" },
          { topic: "Set Theory", fact: "Venn diagrams (used in every CAT set theory problem) were invented by John Venn in 1880 — while he was a philosophy professor, not a mathematician! Study Set Theory & Venn Diagrams 🔵", unit: "Modern Math", chapter: "Set Theory" },
          { topic: "Permutations", fact: "A 4-digit PIN has 10,000 combinations — but most people use 1234 or 0000! PnC explains why your bank PIN is statistically predictable. Study Counting & Arrangements 🔐", unit: "Combinatorics", chapter: "Permutation & Combination" },
          { topic: "Mixtures", fact: "Wine merchants in ancient Rome diluted wine with water — and used the alligation formula (same as CAT's mixture problems) to calculate ratios! Study Mixtures & Alligation 🍷", unit: "Arithmetic", chapter: "Mixtures & Alligation" },
          { topic: "Coordinate Geometry", fact: "Google Maps calculates the shortest path between two points using coordinate geometry distance formula — the same one tested in CAT! Study Lines, Slopes & Distance 📍", unit: "Geometry", chapter: "Coordinate Geometry" },
        ]
      },
      "VARC": {
        icon: "📚",
        facts: [
          { topic: "Reading Comprehension", fact: "The average CAT RC passage is 600 words but tests only 5 key ideas — 80% of content is context. Toppers read for structure, not details. Cover RC Strategy chapter 📄", unit: "VARC", chapter: "Reading Comprehension Strategies" },
          { topic: "Para Jumbles", fact: "Para Jumble questions test logical flow — the first sentence almost ALWAYS introduces a new concept, never a pronoun. This one rule eliminates 50% of wrong options instantly! Study Para Jumbles 🔀", unit: "VARC", chapter: "Para Jumbles & Para Summary" },
          { topic: "Critical Reasoning", fact: "CAT CR questions use the same logical fallacies as political debates — ad hominem, straw man, false dichotomy. Recognising these eliminates wrong answers instantly! Study Logical Fallacies 🤔", unit: "VARC", chapter: "Critical Reasoning" },
          { topic: "Vocabulary", fact: "CAT doesn't test direct vocabulary — but strong vocabulary helps understand RC passages 3x faster! The top 500 CAT words cover 90% of exam vocabulary. Study Word Roots & Etymology 📖", unit: "VARC", chapter: "Vocabulary & Word Usage" },
          { topic: "Sentence Correction", fact: "The most common CAT grammar error is subject-verb disagreement with collective nouns — 'The team ARE playing' vs 'The team IS playing'. Know the rules! Study Grammar & Error Detection ✏️", unit: "VARC", chapter: "Grammar & Sentence Correction" },
          { topic: "Summary Questions", fact: "Para summary questions test your ability to identify the CENTRAL IDEA — supporting details are never the answer. Practice finding the thesis statement of every paragraph. Study Summarisation Skills 📝", unit: "VARC", chapter: "Para Summary" },
        ]
      },
      "DILR": {
        icon: "🧩",
        facts: [
          { topic: "Logical Reasoning", fact: "IIM Ahmedabad's DILR section in 2023 had sets solvable in 3 minutes — but only if you identified the right entry point. 90% of students wasted 10 minutes on the wrong approach. Study Set Selection 🎯", unit: "DILR", chapter: "Arrangements & Puzzles" },
          { topic: "Data Interpretation", fact: "The most time-consuming part of CAT DI is calculation — but approximation (rounding to nearest 5%) gives correct answers 95% of the time while saving 2 minutes per set! Study Calculation Shortcuts 📊", unit: "Data Interpretation", chapter: "Tables & Graphs" },
          { topic: "Arrangements", fact: "Linear and circular arrangement problems appear in EVERY CAT — and have a pattern: fix one element, arrange the rest. This reduces cases from n! to (n-1)! Study Arrangement Techniques 💺", unit: "Logical Reasoning", chapter: "Seating Arrangements" },
          { topic: "Network Diagrams", fact: "Network/route problems in CAT use the same algorithms Google Maps uses for navigation — find shortest path with constraints! Study Network & Flow Problems 🗺️", unit: "Data Interpretation", chapter: "Network & Flow" },
          { topic: "Games & Tournaments", fact: "Tournament bracket problems (CAT favourite!) follow a simple rule: in a knockout tournament with n teams, there are exactly n-1 matches regardless of bracket format! Study Tournament Puzzles 🏆", unit: "Logical Reasoning", chapter: "Games & Tournaments" },
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
          { topic: "Current Affairs", fact: "Every SSC GK question was once a newspaper headline. Connecting current events to static GK makes it 3x more memorable. The student who reads newspapers beats the one who just memorizes! 📰", unit: "General Awareness", chapter: "Current Events & Static GK" },
          { topic: "History", fact: "The Battle of Plassey (1757) was won by the British through BRIBERY, not military might — Mir Jafar betrayed Nawab Siraj-ud-Daulah for a cash payment! SSC loves such turning point questions. Study Modern Indian History 🗡️", unit: "History", chapter: "Modern Indian History" },
          { topic: "Geography", fact: "The Tropic of Cancer passes through 8 Indian states — Rajasthan, Gujarat, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram. This appears in almost every SSC exam! Study Indian Geography 🗺️", unit: "Geography", chapter: "Physical Geography of India" },
          { topic: "Science", fact: "Blood type O-negative is the universal donor because it has no A, B, or Rh antigens — doctors give it when they don't know the patient's blood type! SSC frequently asks blood group questions. Study Blood Types 🩸", unit: "General Science", chapter: "Biology Basics" },
          { topic: "Economy", fact: "NABARD (National Bank for Agriculture & Rural Development) was established in 1982 to replace RBI's agricultural lending functions. SSC tests establishment years frequently! Study Financial Institutions 🏦", unit: "Economy", chapter: "Indian Economy Basics" },
          { topic: "Constitution", fact: "The 42nd Constitutional Amendment (1976) is called the 'Mini Constitution' because it made the most changes — added 'Socialist', 'Secular' to Preamble, and much more! Study Constitutional Amendments 📜", unit: "Polity", chapter: "Indian Constitution" },
          { topic: "Sports", fact: "India's national sport is officially NOT cricket — it's field hockey! India won 8 Olympic gold medals in hockey (1928-1980). SSC tests this classic misconception. Study Indian Sports History 🏑", unit: "Sports & Games", chapter: "Indian Sports" },
          { topic: "Awards", fact: "The Bharat Ratna (India's highest civilian award) was first given in 1954 to C. Rajagopalachari, S. Radhakrishnan, and C.V. Raman — all in the same year! Study National Awards & Honours 🏅", unit: "Awards & Honours", chapter: "National & International Awards" },
          { topic: "Science Inventions", fact: "X-rays were discovered by Wilhelm Röntgen ACCIDENTALLY in 1895 when he noticed his hand bones on a fluorescent screen! He received the first Nobel Prize in Physics. Study Important Inventions 💡", unit: "General Science", chapter: "Physics Discoveries" },
          { topic: "Famous Personalities", fact: "Dr. APJ Abdul Kalam was India's 11th President AND the man behind India's missile programme (Agni, Prithvi). SSC frequently asks about his dual legacy. Study Personalities & Contributions 🚀", unit: "Famous Personalities", chapter: "Indian Scientists & Leaders" },
        ]
      },
      "Quantitative Aptitude": {
        icon: "🔢",
        facts: [
          { topic: "Trigonometry", fact: "sin²θ + cos²θ = 1 is the most tested identity in SSC CGL — appearing in 4-5 questions every paper. It takes 10 minutes to master. Spend those 10 minutes NOW! 📐", unit: "Quantitative Aptitude", chapter: "Trigonometry" },
          { topic: "Percentage", fact: "SSC's most repeated trap: 'A is 25% more than B, B is what % less than A?' The answer is 20%, NOT 25%! This asymmetry concept appears 3-4 times every SSC paper. Master Percentage Tricks 📊", unit: "Arithmetic", chapter: "Percentage" },
          { topic: "Simple Interest", fact: "Simple Interest vs Compound Interest: After 2 years, CI always gives more than SI! The difference = P × (r/100)². SSC tests this formula every single year. Study SI & CI Formulas 💰", unit: "Arithmetic", chapter: "Interest Calculations" },
          { topic: "Mensuration", fact: "A sphere has the minimum surface area for a given volume — that's why bubbles are round and planets are spherical! SSC tests sphere, cylinder, cone comparisons. Study 3D Mensuration 🌐", unit: "Geometry", chapter: "Mensuration" },
          { topic: "Speed & Distance", fact: "Relative speed concept: two trains running in opposite directions at 60 and 40 kmph approach each other at 100 kmph! This appears in 3+ questions every SSC exam. Master Relative Speed 🚂", unit: "Arithmetic", chapter: "Speed, Time & Distance" },
          { topic: "Ratio & Proportion", fact: "The golden ratio (1:1.618) appears in sunflower seeds, nautilus shells, Parthenon, and Mona Lisa — it's the 'most beautiful ratio'! SSC tests basic ratio problems, but knowing this makes it memorable. Study Ratios 🌻", unit: "Arithmetic", chapter: "Ratio & Proportion" },
          { topic: "Algebra", fact: "If (a+b) = 7 and ab = 12, then a²+b² = 49-24 = 25 — using the identity (a+b)² = a²+2ab+b². SSC uses this identity in 5+ questions per paper! Master Algebraic Identities ✏️", unit: "Algebra", chapter: "Algebraic Identities" },
          { topic: "Data Interpretation", fact: "In SSC DI, always check if the question asks for percentage POINTS difference or percentage difference — they give completely different answers! This misread costs 3-4 marks per paper. Study DI Accuracy 📊", unit: "Data Interpretation", chapter: "Graphs & Charts" },
        ]
      },
      "Reasoning": {
        icon: "🧠",
        facts: [
          { topic: "Coding-Decoding", fact: "In SSC Coding-Decoding, 80% of questions use just 3 patterns. Once you map them, this becomes a guaranteed 2-mark section in under 30 seconds each. Study Coding-Decoding Shortcuts 🔐", unit: "Reasoning", chapter: "Coding-Decoding" },
          { topic: "Blood Relations", fact: "Blood relation questions in SSC have a guaranteed trick: always make a family tree diagram first! Students who skip the diagram spend 3x longer. Study Blood Relations Method 👨‍👩‍👧", unit: "Reasoning", chapter: "Blood Relations" },
          { topic: "Series Completion", fact: "Number series questions in SSC follow 7 main patterns — prime numbers, squares, cubes, differences, products, mixed operations, and Fibonacci. Identify the pattern in 15 seconds! Study Number Series 🔢", unit: "Reasoning", chapter: "Number & Letter Series" },
          { topic: "Analogy", fact: "Analogy questions test conceptual relationships — not just word associations! 'Doctor : Hospital :: Teacher : ?' is testing the relationship 'professional : workplace'. Study Analogical Reasoning 🤔", unit: "Reasoning", chapter: "Analogy" },
          { topic: "Mirror Images", fact: "Mirror image questions are solved in 5 seconds with one rule: only LEFT-RIGHT flips in a standard mirror image, never up-down! Students who know this never get these wrong. Study Mirror & Water Images 🪞", unit: "Non-Verbal Reasoning", chapter: "Mirror Images" },
          { topic: "Syllogism", fact: "Syllogism has only 4 rules but students memorize 50+ cases! Learn the Venn diagram method instead — draw 3 circles, shade possibilities. Solves ANY SSC syllogism in 45 seconds. Study Syllogism Method 🔵", unit: "Reasoning", chapter: "Syllogism" },
        ]
      },
      "English": {
        icon: "📝",
        facts: [
          { topic: "Error Detection", fact: "The #1 SSC English error: using 'between' for 2 things and 'among' for 3+ things. 'Between you and I' is WRONG — it should be 'between you and ME'. Study Prepositions & Cases ✏️", unit: "Grammar", chapter: "Error Detection" },
          { topic: "Fill in the Blanks", fact: "SSC Cloze test passages have predictable patterns — the blank after a negative word needs an antonym, after a positive word needs a synonym. Train your contextual reading! Study Cloze Test Strategy 📝", unit: "Comprehension", chapter: "Cloze Test" },
          { topic: "Idioms", fact: "SSC tests 100 idioms repeatedly — 'Bite the bullet' (endure pain), 'Break the ice' (start conversation), 'Burn bridges' (destroy relationships). These 100 cover 90% of exam questions! Study Common Idioms 💬", unit: "Vocabulary", chapter: "Idioms & Phrases" },
          { topic: "One Word Substitution", fact: "SSC's favourite one-word substitution: 'Philatelist' (stamp collector), 'Numismatist' (coin collector), 'Bibliophile' (book lover). Knowing 200 such words guarantees 5-6 marks! Study One Word Substitutions 📚", unit: "Vocabulary", chapter: "One Word Substitution" },
        ]
      }
    }
  }
};

function getRandomFact(examName, subjectNames) {
  const exam = EXAM_DATA[examName];
  if (!exam) return null;

  const activeSubjects = Object.entries(exam.subjects)
    .filter(([name]) => subjectNames.includes(name));

  if (activeSubjects.length === 0) return null;

  const [subjectName, subjectData] = activeSubjects[
    Math.floor(Math.random() * activeSubjects.length)
  ];

  const fact = subjectData.facts[Math.floor(Math.random() * subjectData.facts.length)];

  return {
    exam: examName,
    subject: subjectName,
    icon: subjectData.icon,
    ...fact,
  };
}

module.exports = { EXAM_DATA, getRandomFact };
