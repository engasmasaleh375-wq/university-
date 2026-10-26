import fs from 'node:fs';

const faculties = JSON.parse(fs.readFileSync('src/data/faculties.json', 'utf8'));

const enData = {
  "medicine": {
    nameEn: "Faculty of Medicine & Health Sciences",
    descriptionEn: "Preparing distinguished medical and health professionals who contribute to providing advanced healthcare that keeps pace with global medical developments.",
    majors: {
      "general-medicine": {
        nameEn: "Medicine & General Surgery (MBBS)",
        shortDescriptionEn: "Comprehensive study of the human body, clinical diagnosis, pharmacology, surgical procedures, and preventive healthcare.",
        futureBenefitEn: "Saving lives and providing advanced clinical medical care across hospitals, surgical centers, and specialized clinics.",
        studyDurationEn: "Six Years",
        degreeEn: "Bachelor's Degree (MBBS)",
        careersEn: ["General Practitioner (GP)", "Resident Doctor in Medical & Surgical Specialties", "Clinical Medical Researcher"],
        skillsEn: ["Accurate Clinical Diagnosis", "Emergency Management", "Integrated Patient Care & Treatment"],
        gpaRequirementEn: "80% and above"
      },
      "medical-laboratories": {
        nameEn: "Medical Laboratory Sciences",
        shortDescriptionEn: "Conducting clinical laboratory analyses on biological samples to diagnose infectious, hematologic, and chronic diseases with precision.",
        futureBenefitEn: "Providing vital diagnostic laboratory data essential for physicians to formulate accurate medical treatments.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor's Degree",
        careersEn: ["Medical Laboratory Specialist", "Clinical Lab Director", "Blood Bank & Immunology Technologist"],
        skillsEn: ["Microscopic & Biochemical Analysis", "Automated Diagnostic Instruments", "Laboratory Quality Assurance (QC)"],
        gpaRequirementEn: "65% - 70%"
      },
      "clinical-nutrition": {
        nameEn: "Clinical Nutrition & Dietetics",
        shortDescriptionEn: "Studying human nutrition, metabolic therapy, and developing personalized evidence-based clinical diet plans for patients and wellness.",
        futureBenefitEn: "Preventing chronic illnesses, enhancing patient recovery, and providing clinical nutrition oversight in hospitals.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor's Degree",
        careersEn: ["Clinical Nutrition Specialist", "Hospital Dietitian", "Sports & Wellness Nutritionist"],
        skillsEn: ["Clinical Nutritional Assessment", "Therapeutic Diet Planning", "Patient Dietary Counseling"],
        gpaRequirementEn: "65% and above"
      },
      "diagnostic-radiology": {
        nameEn: "Diagnostic Medical Imaging Technology",
        shortDescriptionEn: "Training specialists in advanced diagnostic imaging modalities including MRI, CT scans, X-rays, and diagnostic Ultrasound.",
        futureBenefitEn: "Vital role in early detection, accurate disease diagnosis, and therapeutic imaging in collaboration with healthcare teams.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor's Degree",
        careersEn: ["Radiologic Technologist", "MRI & CT Scan Specialist", "Medical Imaging Supervisor"],
        skillsEn: ["Advanced Radiology Equipment Operation", "Radiation Safety & Protection", "Diagnostic Image Quality Control"],
        gpaRequirementEn: "65% and above"
      },
      "midwifery-bridging": {
        nameEn: "Midwifery (Bridging Program)",
        shortDescriptionEn: "Accredited bridging degree advancing certified diploma midwives to a Bachelor of Science in Midwifery and Maternal-Neonatal Care.",
        futureBenefitEn: "Empowering qualified midwives to lead maternal, neonatal, and reproductive healthcare with modern clinical standards.",
        studyDurationEn: "2 to 3 Years",
        degreeEn: "Bachelor's Degree (Bridging)",
        careersEn: ["Specialized Midwife", "Maternity & Neonatal Ward Supervisor", "Reproductive Health Officer"],
        skillsEn: ["Normal & High-risk Labor Care", "Maternal-Fetal Health Monitoring", "Neonatal Resuscitation"],
        gpaRequirementEn: "60% and above"
      }
    }
  },
  "dentistry": {
    nameEn: "Faculty of Dentistry",
    descriptionEn: "Graduating qualified dental surgeons equipped with advanced digital dentistry, oral surgery, and orthodontics expertise.",
    majors: {
      "dental-surgery": {
        nameEn: "Oral & Dental Medicine and Surgery (BDS)",
        shortDescriptionEn: "Diagnosis, prevention, and treatment of oral cavity diseases, restorative dentistry, prosthodontics, and dental aesthetics.",
        futureBenefitEn: "Restoring oral health and smiles using state-of-the-art clinical dental equipment and modern techniques.",
        studyDurationEn: "Five Years",
        degreeEn: "Bachelor's Degree (BDS)",
        careersEn: ["Dental Surgeon", "Prosthodontics & Endodontics Resident", "Private Dental Clinic Director"],
        skillsEn: ["Restorative & Cosmetic Dentistry", "Tooth Extractions & Minor Surgery", "Oral Health Prevention & Care"],
        gpaRequirementEn: "75% and above"
      },
      "dental-technology": {
        nameEn: "Dental Technology",
        shortDescriptionEn: "Designing and manufacturing dental prosthetics, crowns, bridges, implants, and orthodontic appliances using CAD/CAM systems.",
        futureBenefitEn: "Advanced digital manufacturing of dental prosthetics and leading high-tech dental laboratories.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor's Degree",
        careersEn: ["Dental Laboratory Specialist", "CAD/CAM Digital Technician", "Dental Prosthetics Manufacturer"],
        skillsEn: ["Digital CAD/CAM Dental Design", "Ceramic Crown & Bridge Fabrication", "Orthodontic Appliance Production"],
        gpaRequirementEn: "65% and above"
      }
    }
  },
  "pharmacy": {
    nameEn: "Faculty of Pharmacy",
    descriptionEn: "Excellence in pharmaceutical education, clinical pharmacy, drug discovery, and modern pharmacology.",
    majors: {
      "pharm-d": {
        nameEn: "Doctor of Pharmacy (PharmD)",
        shortDescriptionEn: "Advanced clinical pharmaceutical care, patient pharmacotherapy, drug interaction monitoring, and clinical hospital rotations.",
        futureBenefitEn: "Leading clinical pharmacy departments in tertiary hospitals and optimizing patient medication safety and efficacy.",
        studyDurationEn: "Six Years",
        degreeEn: "Doctor of Pharmacy (PharmD)",
        careersEn: ["Clinical Pharmacist", "Hospital Pharmacy Director", "Therapeutic Drug Monitoring Specialist"],
        skillsEn: ["Clinical Pharmacotherapy", "Drug Interaction Screening", "Patient Medication Counseling"],
        gpaRequirementEn: "75% and above"
      },
      "pharmacy-bachelor": {
        nameEn: "Pharmaceutical Sciences (BPharm)",
        shortDescriptionEn: "Pharmaceutical chemistry, drug manufacturing, formulation, pharmacology, and community pharmacy practice.",
        futureBenefitEn: "Driving the pharmaceutical industry, quality control, drug design, and community health dispensing.",
        studyDurationEn: "Five Years",
        degreeEn: "Bachelor of Pharmacy (BPharm)",
        careersEn: ["Industrial Pharmacist", "Pharmaceutical Quality Control Officer", "Community Pharmacy Owner"],
        skillsEn: ["Drug Formulation & Analysis", "Pharmaceutical Regulations", "Good Manufacturing Practices (GMP)"],
        gpaRequirementEn: "70% and above"
      }
    }
  },
  "engineering": {
    nameEn: "Faculty of Engineering & Architecture",
    descriptionEn: "Educating creative engineers in civil, architectural, electrical, mechatronics, and renewable energy disciplines.",
    majors: {
      "civil-engineering": {
        nameEn: "Civil Engineering",
        shortDescriptionEn: "Designing and constructing sustainable infrastructure, bridges, mega-structures, foundations, and water networks.",
        futureBenefitEn: "Leading major urban reconstruction and infrastructure projects with sustainable engineering standards.",
        studyDurationEn: "Five Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Structural Engineer", "Construction Project Manager", "Infrastructure & Roads Engineer"],
        skillsEn: ["Structural Analysis & Design", "Construction Project Management", "AutoCAD & BIM Modeling"],
        gpaRequirementEn: "65% and above"
      },
      "architecture": {
        nameEn: "Architectural Engineering",
        shortDescriptionEn: "Creative architectural design, sustainable urban planning, building science, and intelligent spatial environments.",
        futureBenefitEn: "Shaping modern sustainable cities and innovative aesthetic living spaces.",
        studyDurationEn: "Five Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Architectural Designer", "Urban Planner", "BIM Architectural Specialist"],
        skillsEn: ["Architectural Concept Design", "3D Rendering & BIM", "Sustainable Green Building"],
        gpaRequirementEn: "65% and above"
      },
      "interior-design": {
        nameEn: "Interior Architecture & Design",
        shortDescriptionEn: "Transforming interior spaces aesthetically and functionally, lighting design, materials, and luxury styling.",
        futureBenefitEn: "Designing bespoke interior experiences for luxury commercial, residential, and corporate developments.",
        studyDurationEn: "Five Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Interior Architect", "Commercial Space Designer", "Exhibition & Furniture Designer"],
        skillsEn: ["Spatial Planning & Ergonomics", "Lighting & Material Selection", "3D Max & VR Visuals"],
        gpaRequirementEn: "60% and above"
      },
      "biomedical-engineering": {
        nameEn: "Biomedical Engineering",
        shortDescriptionEn: "Integration of engineering principles with healthcare systems, clinical diagnostic equipment, and medical devices.",
        futureBenefitEn: "Developing and maintaining critical life-saving hospital equipment and medical technology innovations.",
        studyDurationEn: "Five Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Biomedical Clinical Engineer", "Medical Equipment Specialist", "Hospital Tech Supervisor"],
        skillsEn: ["Medical Device Calibration", "Biomedical Signal Processing", "Clinical Equipment Maintenance"],
        gpaRequirementEn: "65% and above"
      },
      "mechatronics": {
        nameEn: "Mechatronics & Robotics Engineering",
        shortDescriptionEn: "Interdisciplinary study combining mechanical, electronic, computer, and robotic automation engineering.",
        futureBenefitEn: "Leading Industry 4.0 automation, smart manufacturing, robotics, and intelligent control systems.",
        studyDurationEn: "Five Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Robotics & Automation Engineer", "Control Systems Designer", "Smart Factory Engineer"],
        skillsEn: ["PLC & Microcontrollers", "Robotics Kinematics", "Sensors & Actuator Control"],
        gpaRequirementEn: "65% and above"
      },
      "computer-engineering": {
        nameEn: "Computer Engineering & Smart Systems",
        shortDescriptionEn: "Hardware architecture, embedded systems, IoT devices, microprocessors, and cyber-physical systems.",
        futureBenefitEn: "Building next-generation smart electronics, IoT devices, and computing hardware.",
        studyDurationEn: "Five Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Embedded Systems Engineer", "Hardware Design Engineer", "IoT Solutions Architect"],
        skillsEn: ["Embedded C/C++ Programming", "FPGA & Circuit Design", "IoT Device Integration"],
        gpaRequirementEn: "65% and above"
      },
      "telecom-engineering": {
        nameEn: "Telecommunications & Informatics Engineering",
        shortDescriptionEn: "Wireless communications, 5G networks, fiber optics, satellite links, and digital signal transmission.",
        futureBenefitEn: "Connecting the digital world through high-speed telecommunications infrastructure.",
        studyDurationEn: "Five Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Telecom Network Engineer", "RF & Wireless Specialist", "Fiber Optics & Satellite Tech"],
        skillsEn: ["5G & Wireless Networks", "Signal Processing & Antennas", "Network Protocols & Routing"],
        gpaRequirementEn: "65% and above"
      },
      "renewable-energy": {
        nameEn: "Renewable Energy & Automated Control Engineering",
        shortDescriptionEn: "Solar photovoltaic systems, wind power, energy storage, smart grids, and automated industrial control.",
        futureBenefitEn: "Leading the global transition towards clean green energy and automated energy grids.",
        studyDurationEn: "Five Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Solar & Renewable Energy Engineer", "Smart Grid Specialist", "Industrial Automation Engineer"],
        skillsEn: ["Solar PV System Design", "Energy Storage Optimization", "SCADA & Industrial Control"],
        gpaRequirementEn: "65% and above"
      }
    }
  },
  "computing": {
    nameEn: "Faculty of Computing & Information Technology",
    descriptionEn: "Leading technology education in AI, software engineering, cybersecurity, data science, and IT.",
    majors: {
      "software-engineering": {
        nameEn: "Software Engineering",
        shortDescriptionEn: "Full-lifecycle software development, cloud systems, enterprise architecture, agile practices, and DevOps.",
        futureBenefitEn: "Building robust enterprise software and mobile platforms driving global digital transformation.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Senior Software Engineer", "Full-Stack Developer", "Software Solutions Architect"],
        skillsEn: ["Full-Stack Web & Mobile Dev", "Software Architecture & Design Patterns", "DevOps & Cloud Deployment"],
        gpaRequirementEn: "65% and above"
      },
      "cyber-security": {
        nameEn: "Cybersecurity & Digital Forensics",
        shortDescriptionEn: "Defending networks, ethical hacking, digital forensics, cryptographic security, and threat intelligence.",
        futureBenefitEn: "Protecting sovereign data, banking systems, and digital assets from global cyber attacks.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Cybersecurity Analyst", "Ethical Hacker / Penetration Tester", "SOC Incident Responder"],
        skillsEn: ["Penetration Testing & Red Teaming", "Network Security & Firewalls", "Digital Forensics & Incident Response"],
        gpaRequirementEn: "65% and above"
      },
      "information-technology": {
        nameEn: "Information Technology (IT)",
        shortDescriptionEn: "Enterprise systems administration, cloud infrastructure, network services, database management, and IT support.",
        futureBenefitEn: "Managing mission-critical technology infrastructure for corporations and government institutions.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["IT Systems Administrator", "Cloud Infrastructure Specialist", "Network Operations Lead"],
        skillsEn: ["Cloud Server Management", "Enterprise Database Administration", "Network Infrastructure & Security"],
        gpaRequirementEn: "60% and above"
      },
      "computer-science": {
        nameEn: "Computer Science",
        shortDescriptionEn: "Core algorithms, computation theory, compiler design, artificial intelligence foundations, and complex computing.",
        futureBenefitEn: "Innovating breakthrough algorithmic solutions, AI foundations, and high-performance computing.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Computer Scientist", "Algorithm & AI Engineer", "Systems Programmer"],
        skillsEn: ["Advanced Data Structures & Algorithms", "C++ / Python / Java Programming", "High-Performance Computing"],
        gpaRequirementEn: "65% and above"
      },
      "bit-english": {
        nameEn: "Business Information Technology (BIT - English Track)",
        shortDescriptionEn: "International English-track combining business acumen with modern information technology and digital systems.",
        futureBenefitEn: "Leading multinational tech enterprises with bilingual fluency and technical mastery.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Global IT Project Manager", "Business Systems Analyst", "Tech Consultant in Multinationals"],
        skillsEn: ["ERP & Enterprise Systems", "Business Process Modeling", "Technical English Communication"],
        gpaRequirementEn: "60% and above"
      },
      "artificial-intelligence": {
        nameEn: "Artificial Intelligence & Machine Learning",
        shortDescriptionEn: "Deep learning neural networks, natural language processing, computer vision, and autonomous agent systems.",
        futureBenefitEn: "Pioneering intelligent AI agents and machine learning models transforming industries.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["AI / Machine Learning Engineer", "Data Scientist", "NLP & Computer Vision Researcher"],
        skillsEn: ["PyTorch & TensorFlow Deep Learning", "NLP & Large Language Models", "Computer Vision Algorithms"],
        gpaRequirementEn: "65% and above"
      },
      "multimedia-graphics": {
        nameEn: "Digital Media & Interactive Graphics Technology",
        shortDescriptionEn: "Interactive UI/UX design, 3D modeling, game development, VFX animation, and multimedia technologies.",
        futureBenefitEn: "Crafting captivating digital user experiences, metaverse assets, and interactive entertainment.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Lead UI/UX Product Designer", "3D Animator & Visual Effects Artist", "Interactive Media Developer"],
        skillsEn: ["Figma & Product UI/UX Design", "3D Modeling & Animation (Blender)", "Game Engines & Interactive Tech"],
        gpaRequirementEn: "60% and above"
      },
      "mis": {
        nameEn: "Management Information Systems (MIS)",
        shortDescriptionEn: "Strategic alignment of digital technology with business operations, corporate databases, and decision support.",
        futureBenefitEn: "Bridging the gap between executive business management and cutting-edge software solutions.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["MIS Director", "Enterprise Database Analyst", "IT Strategy Consultant"],
        skillsEn: ["SQL & Enterprise Data Modeling", "Business Intelligence Dashboards", "IT Governance & Auditing"],
        gpaRequirementEn: "60% and above"
      },
      "business-intelligence": {
        nameEn: "Business Intelligence & Big Data Analytics",
        shortDescriptionEn: "Big data processing, predictive statistical modeling, data warehousing, and executive analytics dashboards.",
        futureBenefitEn: "Empowering C-suite executives with real-time predictive analytics to maximize profitability.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Business Intelligence Architect", "Big Data Engineer", "KPI & Strategic Performance Analyst"],
        skillsEn: ["Power BI / Tableau / Looker", "Data Warehousing & ETL Pipelines", "Predictive Analytics & Python"],
        gpaRequirementEn: "60% and above"
      },
      "e-business": {
        nameEn: "E-Commerce & Digital Business",
        shortDescriptionEn: "Digital business models, global e-commerce platforms, omnichannel sales, and online enterprise strategies.",
        futureBenefitEn: "Creating and scaling high-growth digital startups and electronic commerce ventures.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["E-Commerce Operations Director", "Digital Product Manager", "FinTech & Digital Venture Lead"],
        skillsEn: ["E-Commerce Platform Architecture", "Digital Payment Gateways & FinTech", "Growth Hacking & Analytics"],
        gpaRequirementEn: "60% and above"
      }
    }
  },
  "administrative-sciences": {
    nameEn: "Faculty of Administrative & Financial Sciences",
    descriptionEn: "Empowering visionary leaders in business administration, accounting, finance, marketing, and corporate strategy.",
    majors: {
      "business-administration": {
        nameEn: "Business Administration & International Business",
        shortDescriptionEn: "Corporate strategic leadership, organizational management, international trade, human resources, and entrepreneurship.",
        futureBenefitEn: "Directing corporations and founding visionary enterprises in local and international markets.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Chief Executive / Operations Manager", "Management Consultant", "Corporate Strategic Planner"],
        skillsEn: ["Strategic Business Planning", "Executive Leadership & Negotiation", "Organizational Resource Management"],
        gpaRequirementEn: "60% and above"
      },
      "business-admin-english": {
        nameEn: "Business Administration (English Track)",
        shortDescriptionEn: "Elite English-taught business curriculum focusing on multinational operations, global trade, and cross-border finance.",
        futureBenefitEn: "Thriving in multinational corporations, global consultancies, and international organizations.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Multinational Business Executive", "International Trade Specialist", "Global Account Manager"],
        skillsEn: ["Global Corporate Governance", "International Commercial Law", "Cross-Cultural Business Strategy"],
        gpaRequirementEn: "60% and above"
      },
      "accounting": {
        nameEn: "Accounting & Financial Auditing",
        shortDescriptionEn: "Financial accounting, auditing, IFRS compliance, cost accounting, corporate taxation, and forensic accounting.",
        futureBenefitEn: "Safeguarding corporate integrity, passing rigorous audits, and maximizing shareholder value.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Certified Public Accountant (CPA)", "Internal / External Auditor", "Corporate Financial Controller"],
        skillsEn: ["IFRS Accounting Standards", "Financial Statement Auditing", "Tax Compliance & Corporate Budgeting"],
        gpaRequirementEn: "60% and above"
      },
      "banking-finance": {
        nameEn: "Banking & Financial Sciences",
        shortDescriptionEn: "Investment banking, financial markets, Islamic banking, risk management, credit analysis, and portfolio investment.",
        futureBenefitEn: "Directing investment portfolios, managing banking risk, and financing multi-million dollar projects.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Investment Banking Analyst", "Credit & Risk Assessment Officer", "Financial Portfolio Manager"],
        skillsEn: ["Financial Modeling & Valuation", "Credit Risk Management", "Stock Market & Securities Trading"],
        gpaRequirementEn: "60% and above"
      },
      "digital-marketing": {
        nameEn: "Digital Marketing & Brand Strategy",
        shortDescriptionEn: "Data-driven marketing, search engine optimization (SEO), viral content strategy, social analytics, and branding.",
        futureBenefitEn: "Dominating online market share, building viral consumer brands, and driving massive sales funnels.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Head of Digital Marketing", "Brand Strategy Director", "Performance Advertising Specialist"],
        skillsEn: ["Paid Ads (Google / Meta / TikTok)", "SEO & Growth Marketing Funnels", "Consumer Behavior Analytics"],
        gpaRequirementEn: "60% and above"
      },
      "business-intelligence-admin": {
        nameEn: "Business Intelligence & Strategy",
        shortDescriptionEn: "Analyzing corporate KPI benchmarks, revenue modeling, and predictive financial simulations.",
        futureBenefitEn: "Guiding executive boards with actionable data reports to outmaneuver competitors.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Science (B.Sc.)",
        careersEn: ["Business Intelligence Consultant", "Corporate Strategic Advisor", "KPI & Performance Manager"],
        skillsEn: ["Executive Dashboards & BI", "Revenue Forecasting Models", "Strategic Market Data Mining"],
        gpaRequirementEn: "60% and above"
      }
    }
  },
  "humanities": {
    nameEn: "Faculty of Humanities & Social Sciences",
    descriptionEn: "Nurturing outstanding competencies in law, media, psychology, translation, and societal communication.",
    majors: {
      "sharia-law": {
        nameEn: "Sharia & Law (LL.B.)",
        shortDescriptionEn: "Civil, criminal, commercial, and international law, judicial procedures, legal advocacy, and arbitration.",
        futureBenefitEn: "Defending rights, upholding justice, and offering high-level legal counsel to corporations and courts.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Laws (LL.B.)",
        careersEn: ["Attorney & Legal Counselor", "Judiciary & Public Prosecution Member", "Commercial Arbitrator"],
        skillsEn: ["Legal Drafting & Pleading", "Statutory Interpretation & Analysis", "Commercial Dispute Resolution"],
        gpaRequirementEn: "55% - 60%"
      },
      "media-public-relations": {
        nameEn: "Media, Radio, TV & Public Relations",
        shortDescriptionEn: "Broadcast journalism, digital media production, investigative reporting, strategic PR, and reputation management.",
        futureBenefitEn: "Leading public opinion, producing impactful broadcast media, and shaping institutional corporate reputations.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Arts (B.A.)",
        careersEn: ["Corporate Communications Specialist", "Journalist / News Anchor / Producer", "Official Spokesperson"],
        skillsEn: ["Digital Content Creation & TV Production", "Crisis Communications & PR", "Media Interviewing & Public Speaking"],
        gpaRequirementEn: "55% and above"
      },
      "psychology": {
        nameEn: "Clinical & Counseling Psychology",
        shortDescriptionEn: "Mental health assessment, psychotherapy techniques, behavioral science, cognitive testing, and counseling.",
        futureBenefitEn: "Empowering individuals, fostering community mental wellness, and providing professional therapy.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Arts (B.A.)",
        careersEn: ["Psychological Counselor", "Clinical Therapist in Hospitals", "School & Career Guidance Specialist"],
        skillsEn: ["Psychological Assessment & Diagnostic Testing", "Cognitive Behavioral Therapy (CBT)", "Crisis Intervention & Counseling"],
        gpaRequirementEn: "55% and above"
      },
      "english-language": {
        nameEn: "English Language, Translation & Linguistics",
        shortDescriptionEn: "Simultaneous interpretation, legal and literary translation, applied linguistics, and professional English writing.",
        futureBenefitEn: "Bridging global cultures, facilitating diplomatic conferences, and delivering professional international translation.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Arts (B.A.)",
        careersEn: ["Certified Legal & Conference Translator", "Simultaneous Interpreter", "English Linguistic Specialist"],
        skillsEn: ["Simultaneous & Consecutive Interpretation", "Specialized Legal & Medical Translation", "Advanced Comparative Linguistics"],
        gpaRequirementEn: "55% and above"
      },
      "kindergarten": {
        nameEn: "Early Childhood Education & Kindergarten",
        shortDescriptionEn: "Child cognitive development, modern educational psychology, sensory learning methodologies, and childhood care.",
        futureBenefitEn: "Fostering future generations with modern, psychologically sound educational methods.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Arts (B.A.)",
        careersEn: ["Early Childhood Educational Specialist", "Kindergarten Director", "Child Development Consultant"],
        skillsEn: ["Active Learning Curriculum Design", "Child Behavioral Guidance", "Creative Educational Activities"],
        gpaRequirementEn: "55% and above"
      },
      "islamic-studies": {
        nameEn: "Islamic Studies & Quranic Sciences",
        shortDescriptionEn: "Quranic exegesis, Hadith sciences, Islamic jurisprudence, comparative religions, and moderate Islamic thought.",
        futureBenefitEn: "Promoting enlightened, moderate values, religious scholarship, and ethical societal development.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Arts (B.A.)",
        careersEn: ["Islamic Cultural Counselor", "Religious Studies Educator", "Islamic Banking Sharia Auditor"],
        skillsEn: ["Jurisprudential Research", "Sharia Compliance Auditing", "Public Preaching & Ethical Guidance"],
        gpaRequirementEn: "55% and above"
      },
      "arabic-language": {
        nameEn: "Arabic Language & Literature",
        shortDescriptionEn: "Arabic grammar, eloquence, classical and modern literature, literary criticism, and creative writing.",
        futureBenefitEn: "Preserving literary heritage, authoring inspiring literature, and leading linguistic editorial departments.",
        studyDurationEn: "Four Years",
        degreeEn: "Bachelor of Arts (B.A.)",
        careersEn: ["Senior Copywriter & Literary Editor", "Linguistic Proofreader in Publishing", "Arabic Literature Educator"],
        skillsEn: ["Professional Linguistic Editing", "Literary Analysis & Criticism", "Creative Arabic Prose & Composition"],
        gpaRequirementEn: "55% and above"
      }
    }
  },
  "e-learning": {
    nameEn: "Deanship of E-Learning & Distance Education",
    descriptionEn: "Pioneering flexible digital higher education with accredited online bachelor programs for global learners.",
    majors: {
      "distance-degree-programs": {
        nameEn: "Accredited Online Bachelor Degree Programs",
        shortDescriptionEn: "Accredited interactive virtual classrooms, digital exams, on-demand lectures, and flexible remote learning.",
        futureBenefitEn: "Attaining an internationally recognized university degree anytime, anywhere without interrupting your career.",
        studyDurationEn: "Four Years (Flexible Distance Learning)",
        degreeEn: "Bachelor's Degree (Accredited Online)",
        careersEn: ["Remote Digital Specialist", "Business Executive", "International Organization Professional"],
        skillsEn: ["Autonomous Digital Learning", "Virtual Teamwork & Collaboration", "Advanced Digital Productivity"],
        gpaRequirementEn: "50% - 60%"
      }
    }
  },
  "postgraduate": {
    nameEn: "Deanship of Postgraduate Studies & Scientific Research",
    descriptionEn: "Overseeing accredited Master's and PhD degree programs, advancing innovative research and academic excellence.",
    majors: {
      "master-phd-programs": {
        nameEn: "Postgraduate Research Programs (Master's & PhD)",
        shortDescriptionEn: "Rigorous academic master's theses and doctoral dissertations across medical, engineering, computing, and business disciplines.",
        futureBenefitEn: "Leading academic faculties, advancing scientific discoveries, and pioneering research consulting.",
        studyDurationEn: "2 to 3 Years",
        degreeEn: "Master's Degree / Ph.D.",
        careersEn: ["University Professor / Academic Researcher", "Senior Policy & Strategic Consultant", "Scientific R&D Director"],
        skillsEn: ["Rigorous Scientific Research Methodology", "High-Impact Academic Publishing", "Data Analysis & Statistical Modeling"],
        gpaRequirementEn: "Bachelor's Degree (Good or above)"
      }
    }
  }
};

for (const fac of faculties) {
  const fEn = enData[fac.id];
  if (fEn) {
    fac.nameEn = fEn.nameEn;
    fac.descriptionEn = fEn.descriptionEn;
    for (const major of fac.majors) {
      const mEn = fEn.majors[major.id];
      if (mEn) {
        major.nameEn = mEn.nameEn;
        major.shortDescriptionEn = mEn.shortDescriptionEn;
        major.futureBenefitEn = mEn.futureBenefitEn;
        major.studyDurationEn = mEn.studyDurationEn;
        major.degreeEn = mEn.degreeEn;
        major.careersEn = mEn.careersEn;
        major.skillsEn = mEn.skillsEn;
        major.gpaRequirementEn = mEn.gpaRequirementEn;
      }
    }
  }
}

fs.writeFileSync('src/data/faculties.json', JSON.stringify(faculties, null, 2), 'utf8');
console.log('Successfully updated src/data/faculties.json with full English translations!');
