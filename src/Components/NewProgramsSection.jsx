import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { lockBodyScroll } from '../utils/scrollLock';
import {
  Plane,
  Car,
  Stethoscope,
  Briefcase,
  Scale,
  GraduationCap,
  Clock,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  X,
  Building2,
  ShieldCheck,
  BookOpen,
  BarChart3,
  Code2,
  Cpu,
  Network,
  Layers,
  Compass,
  Award
} from 'lucide-react';

export const newlyLaunchedProgramsData = [
  // 1. Cybersecurity & Digital Forensics (كلية الحاسبات)
  {
    id: 'cybersecurity',
    category: 'computing',
    categoryAr: 'كلية الحاسبات وتكنولوجيا المعلومات',
    categoryEn: 'Computing & IT',
    tagAr: 'الأمن السيبراني والتحري الرقمي',
    tagEn: 'Cybersecurity & Forensics',
    titleAr: 'بكالوريوس الأمن السيبراني والتحري الرقمي',
    titleEn: 'Cybersecurity & Digital Forensics (B.Sc.)',
    facultyAr: 'كلية الحاسبات وتكنولوجيا المعلومات',
    facultyEn: 'Faculty of Computing & Information Technology',
    degreeAr: 'بكالوريوس تخصصي معتمد',
    degreeEn: 'Accredited B.Sc. Degree',
    durationAr: '4 سنوات دراسية',
    durationEn: '4 Academic Years',
    badgeAr: 'جديد NEW',
    badgeEn: 'NEW PROGRAM',
    partnerBadgeAr: 'شراكة مع EC-Council USA',
    partnerBadgeEn: 'EC-Council USA Partner',
    icon: ShieldCheck,
    themeGradient: 'from-slate-950 via-sky-950 to-indigo-950',
    accentColor: '#0ea5e9',
    glowColor: 'rgba(14, 165, 233, 0.4)',
    summaryAr: 'برنامج نوعي متقدم بالشراكة الأكاديمية مع (EC-Council USA) لتأهيل خبراء الأمن السيبراني، التصدي للاختراقات، والتحقيق الجنائي الرقمي.',
    summaryEn: 'An elite cybersecurity program launched in academic partnership with EC-Council USA to qualify experts in enterprise defense and forensics.',
    highlightsAr: [
      'تأهيل معتمد لاجتياز الشهادات الاحترافية الدولية (CEH, CND, CHFI)',
      'معامل متطورة لمحاكاة الهجمات السيبرانية ومراكز العمليات الأمنية (SOC)'
    ],
    highlightsEn: [
      'Direct qualification for global professional certifications (CEH, CND, CHFI)',
      'Advanced labs simulating cyber warfare and Security Operations Centers (SOC)'
    ],
    careerAr: 'محلل أمن سيبراني (SOC Analyst)، مختبر اختراق أخلاقي، مهندس أمن سحابي، محقق جنائي رقمي.',
    careerEn: 'SOC Cybersecurity Analyst, Ethical Hacker, Cloud Security Architect, Digital Forensics Investigator.'
  },

  // 2. Artificial Intelligence & Machine Learning (كلية الحاسبات)
  {
    id: 'artificial-intelligence',
    category: 'computing',
    categoryAr: 'كلية الحاسبات وتكنولوجيا المعلومات',
    categoryEn: 'Computing & IT',
    tagAr: 'الذكاء الاصطناعي وتعلم الآلة',
    tagEn: 'AI & Machine Learning',
    titleAr: 'بكالوريوس الذكاء الاصطناعي وتعلم الآلة',
    titleEn: 'Artificial Intelligence & Machine Learning (B.Sc.)',
    facultyAr: 'كلية الحاسبات وتكنولوجيا المعلومات',
    facultyEn: 'Faculty of Computing & Information Technology',
    degreeAr: 'بكالوريوس تخصصي معتمد',
    degreeEn: 'Accredited B.Sc. Degree',
    durationAr: '4 سنوات دراسية',
    durationEn: '4 Academic Years',
    badgeAr: 'جديد NEW',
    badgeEn: 'NEW PROGRAM',
    partnerBadgeAr: 'معامل GPU وحوسبة ذكية فائقة',
    partnerBadgeEn: 'High-Performance GPU Labs',
    icon: Network,
    themeGradient: 'from-slate-950 via-purple-950 to-indigo-950',
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    summaryAr: 'تخصص المستقبل الأبرز لبناء وتدريب الشبكات العصبية العميقة، خوارزميات التعلم الآلي، والرؤية الحاسوبية وتطبيقات الذكاء الاصطناعي التوليدي.',
    summaryEn: 'A high-impact program designed to train deep neural networks, machine learning algorithms, and generative AI agent systems.',
    highlightsAr: [
      'برمجة وتدريب النماذج العصبية المتقدمة باستخدام Python وPyTorch وTensorFlow',
      'معامل ذكاء اصطناعي مجهزة بأحدث محطات معالجة الرسومات وخوادم GPU'
    ],
    highlightsEn: [
      'Designing neural models with PyTorch, TensorFlow, and Python',
      'Cutting-edge AI labs powered by high-performance GPU computing clusters'
    ],
    careerAr: 'مهندس ذكاء اصطناعي (AI Engineer)، عالم بيانات وتعلم آلي، مطور وكلاء أذكياء، مهندس رؤية حاسوبية.',
    careerEn: 'AI Solutions Engineer, Machine Learning Specialist, Data Scientist, Computer Vision Developer.'
  },

  // 3. Data Science & Business Intelligence (كلية الحاسبات)
  {
    id: 'data-science-bi',
    category: 'computing',
    categoryAr: 'كلية الحاسبات وتكنولوجيا المعلومات',
    categoryEn: 'Computing & IT',
    tagAr: 'علم البيانات وذكاء الأعمال',
    tagEn: 'Data Science & BI',
    titleAr: 'بكالوريوس علم البيانات وذكاء الأعمال',
    titleEn: 'Data Science & Business Intelligence (B.Sc.)',
    facultyAr: 'كلية الحاسبات وتكنولوجيا المعلومات',
    facultyEn: 'Faculty of Computing & Information Technology',
    degreeAr: 'بكالوريوس تخصصي معتمد',
    degreeEn: 'Accredited B.Sc. Degree',
    durationAr: '4 سنوات دراسية',
    durationEn: '4 Academic Years',
    badgeAr: 'جديد NEW',
    badgeEn: 'NEW PROGRAM',
    partnerBadgeAr: 'تحليل البيانات الضخمة Big Data',
    partnerBadgeEn: 'Big Data & Decision Science',
    icon: BarChart3,
    themeGradient: 'from-slate-950 via-teal-950 to-emerald-950',
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    summaryAr: 'التخصص المحرك لقرارات كبرى الشركات والمؤسسات عبر استخراج وتحليل البيانات الضخمة، والنمذجة التنبؤية، وبناء لوحات التحكم التفاعلية.',
    summaryEn: 'An essential discipline driving global enterprise strategies through big data mining, predictive forecasting, and executive dashboards.',
    highlightsAr: [
      'احتراف أدوات ذكاء الأعمال المتقدمة: Power BI, Tableau, SQL, BigQuery',
      'هندسة خطوط معالجة وتدفق البيانات (ETL Pipelines) ومستودعات البيانات السحابية'
    ],
    highlightsEn: [
      'Mastering enterprise data platforms: Power BI, Tableau, SQL, BigQuery',
      'Designing robust ETL pipelines and enterprise data warehouses'
    ],
    careerAr: 'محلل ذكاء أعمال (BI Specialist)، مهندس بيانات ضخمة، أخصائي نمذجة تنبؤية، مستشار استراتيجيات بيانات.',
    careerEn: 'Business Intelligence Architect, Big Data Engineer, Predictive Analytics Specialist, Enterprise Data Analyst.'
  },

  // 4. Software Engineering & Cloud Systems (كلية الحاسبات)
  {
    id: 'software-cloud-engineering',
    category: 'computing',
    categoryAr: 'كلية الحاسبات وتكنولوجيا المعلومات',
    categoryEn: 'Computing & IT',
    tagAr: 'هندسة البرمجيات والنظم السحابية',
    tagEn: 'Software & Cloud Engineering',
    titleAr: 'بكالوريوس هندسة البرمجيات والنظم السحابية',
    titleEn: 'Software Engineering & Cloud Systems (B.Sc.)',
    facultyAr: 'كلية الحاسبات وتكنولوجيا المعلومات',
    facultyEn: 'Faculty of Computing & Information Technology',
    degreeAr: 'بكالوريوس هندسة معتمد',
    degreeEn: 'Accredited Engineering B.Sc.',
    durationAr: '4 سنوات دراسية',
    durationEn: '4 Academic Years',
    badgeAr: 'جديد NEW',
    badgeEn: 'NEW PROGRAM',
    partnerBadgeAr: 'منهجيات DevOps & Microservices',
    partnerBadgeEn: 'DevOps & Cloud Microservices',
    icon: Code2,
    themeGradient: 'from-slate-950 via-blue-950 to-indigo-950',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    summaryAr: 'تأهيل مهندسي برمجيات محترفين لبناء وتصميم المنظومات الرقمية المتكاملة، المعماريات السحابية الموزعة، وتطبيقات الويب والهواتف الحديثة.',
    summaryEn: 'Qualifying elite software engineers to architect enterprise distributed platforms, scalable cloud systems, and native mobile apps.',
    highlightsAr: [
      'تطوير شامل للتطبيقات (Full-Stack Web & Mobile) بأحدث أطر العمل العالمية',
      'إتقان الحوسبة السحابية ومنهجيات النشر الحديثة (Docker, Kubernetes, CI/CD)'
    ],
    highlightsEn: [
      'Full-Stack web & mobile application engineering with modern stacks',
      'Modern DevOps pipelines, cloud containers, and microservices orchestration'
    ],
    careerAr: 'مهندس برمجيات أول (Full-Stack)، مهندس معماريات سحابية DevOps، مهندس جودة واختبار أنظمة QA.',
    careerEn: 'Senior Full-Stack Developer, Cloud DevOps Architect, QA Automation Engineer, Software Solutions Lead.'
  },

  // 5. Aviation Sciences & Technology (كلية الهندسة)
  {
    id: 'aviation-sciences',
    category: 'engineering',
    categoryAr: 'كلية الهندسة والتكنولوجيا',
    categoryEn: 'Engineering & Tech',
    tagAr: 'علوم وتقنيات الطيران',
    tagEn: 'Aviation Sciences & Tech',
    titleAr: 'بكالوريوس علوم وتقنيات الطيران',
    titleEn: 'Aviation Sciences & Technology (B.Sc.)',
    facultyAr: 'كلية الهندسة والعمارة',
    facultyEn: 'Faculty of Engineering & Architecture',
    degreeAr: 'بكالوريوس تخصصي معتمد',
    degreeEn: 'Accredited B.Sc. Degree',
    durationAr: '4 سنوات دراسية',
    durationEn: '4 Academic Years',
    badgeAr: 'جديد NEW',
    badgeEn: 'NEW PROGRAM',
    partnerBadgeAr: 'معايير منظمة الطيران الدولي ICAO',
    partnerBadgeEn: 'ICAO Aviation Standards',
    icon: Plane,
    themeGradient: 'from-slate-950 via-sky-950 to-blue-950',
    accentColor: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.4)',
    summaryAr: 'تخصص نوعي رائد يُطرح لأول مرة في اليمن لإعداد كوادر محترفة في صيانة الطائرات، هياكل ومحركات الطيران، والملاحة الجوية الحديثة.',
    summaryEn: 'A pioneering program introduced for the first time in Yemen to qualify professional experts in aircraft maintenance, avionics, and navigation.',
    highlightsAr: [
      'تدريب عملي ومحاكاة لأنظمة الطيران وهياكل ومحركات الطائرات النفاثة',
      'دراسة متعمقة للملاحة الجوية، أنظمة الرادار، وإلكترونيات الطيران (Avionics)'
    ],
    highlightsEn: [
      'Practical training and simulation on modern jet aircraft systems and avionics',
      'In-depth study of air navigation, radar electronics, and flight control systems'
    ],
    careerAr: 'مهندس صيانة طائرات، مهندس ملاحة جوية، فني إلكترونيات طيران، أخصائي سلامة وجودة طيران.',
    careerEn: 'Aircraft Maintenance Engineer, Flight Operations Specialist, Avionics Engineer, Airline Safety Inspector.'
  },

  // 6. Robotics & AI Engineering (كلية الهندسة)
  {
    id: 'robotics-ai',
    category: 'engineering',
    categoryAr: 'كلية الهندسة والتكنولوجيا',
    categoryEn: 'Engineering & Tech',
    tagAr: 'هندسة الروبوتات والذكاء',
    tagEn: 'Robotics & AI Engineering',
    titleAr: 'بكالوريوس هندسة الروبوتات والذكاء الاصطناعي',
    titleEn: 'Robotics & Artificial Intelligence Engineering (B.Sc.)',
    facultyAr: 'كلية الهندسة والعمارة',
    facultyEn: 'Faculty of Engineering & Architecture',
    degreeAr: 'بكالوريوس هندسة معتمد',
    degreeEn: 'Accredited B.Sc. in Engineering',
    durationAr: '5 سنوات دراسية',
    durationEn: '5 Academic Years',
    badgeAr: 'جديد NEW',
    badgeEn: 'NEW PROGRAM',
    partnerBadgeAr: 'الثورة الصناعية 4.0 والأتمتة الذكية',
    partnerBadgeEn: 'Industry 4.0 & Smart Automation',
    icon: Layers,
    themeGradient: 'from-slate-950 via-violet-950 to-purple-950',
    accentColor: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    summaryAr: 'يجمع بين الهندسة الميكانيكية، الإلكترونيات، وتعلم الآلة لتصميم وتطوير الروبوتات والأنظمة المؤتمتة في مختلف القطاعات الإنتاجية والطبية.',
    summaryEn: 'Integrating mechanical, electronics, and machine learning to design and develop autonomous robots and industrial automation.',
    highlightsAr: [
      'برمجة وتصميم أذرع الروبوتات الصناعية والروبوتات الخدمية والطبية',
      'التحكم الآلي وأنظمة إنترنت الأشياء الصناعية (IIoT) وخطوط الإنتاج المؤتمتة'
    ],
    highlightsEn: [
      'Designing and programming industrial, medical, and service robots',
      'Automated control systems and Industrial Internet of Things (IIoT)'
    ],
    careerAr: 'مهندس روبوتات، مهندس نظم ذكاء اصطناعي، مهندس أتمتة وتحكم صناعي، مطور خوارزميات ذكية.',
    careerEn: 'Robotics Engineer, AI Systems Specialist, Automation & Control Engineer, Embedded Intelligence Developer.'
  },

  // 7. Electric Vehicles Engineering (EV) (كلية الهندسة)
  {
    id: 'electric-vehicles',
    category: 'engineering',
    categoryAr: 'كلية الهندسة والتكنولوجيا',
    categoryEn: 'Engineering & Tech',
    tagAr: 'هندسة السيارات الكهربائية',
    tagEn: 'Electric Vehicles (EV)',
    titleAr: 'بكالوريوس هندسة السيارات الكهربائية (EV)',
    titleEn: 'Electric Vehicles Engineering (EV) (B.Sc.)',
    facultyAr: 'كلية الهندسة والعمارة',
    facultyEn: 'Faculty of Engineering & Architecture',
    degreeAr: 'بكالوريوس هندسة معتمد',
    degreeEn: 'Accredited B.Sc. in Engineering',
    durationAr: '5 سنوات دراسية',
    durationEn: '5 Academic Years',
    badgeAr: 'جديد NEW',
    badgeEn: 'NEW PROGRAM',
    partnerBadgeAr: 'النقل المستدام وبطاريات الليثيوم',
    partnerBadgeEn: 'Green Mobility & Smart Batteries',
    icon: Car,
    themeGradient: 'from-slate-950 via-teal-950 to-cyan-950',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    summaryAr: 'تخصص رائد يواكب التحول العالمي نحو النقل الذكي، ويركز على المحركات الكهربائية، بطاريات الليثيوم، ومنظومات القيادة الذاتية.',
    summaryEn: 'A pioneering program focusing on electric power trains, lithium-ion battery management, and smart autonomous vehicles.',
    highlightsAr: [
      'تصميم وفحص المحركات الكهربائية والمحولات ومنظومات نقل الحركة الذكية',
      'أنظمة إدارة بطاريات الليثيوم المتقدمة (BMS) والسلامة الكهربائية العالية'
    ],
    highlightsEn: [
      'Design and diagnostic testing of electric drive trains and power inverters',
      'Advanced Battery Management Systems (BMS) and high-voltage safety'
    ],
    careerAr: 'مهندس سيارات كهربائية، مهندس أنظمة بطاريات وطاقة، مستشار تحول النقل المستدام.',
    careerEn: 'EV Systems Engineer, Battery & Powertrain Engineer, Sustainable Mobility Consultant.'
  },

  // 8. Clinical MD Programs (الطب والعلوم الصحية)
  {
    id: 'clinical-md',
    category: 'medicine',
    categoryAr: 'الطب والعلوم الصحية',
    categoryEn: 'Medicine & Health',
    tagAr: 'الدكتوراه السريرية MD',
    tagEn: 'Clinical Doctorate MD',
    titleAr: 'برامج الدكتوراه السريرية (MD) في الطب البشري',
    titleEn: 'Clinical MD Doctorate Programs in Medicine',
    facultyAr: 'كلية الطب والعلوم الصحية • مستشفى الجامعة التعليمي',
    facultyEn: 'Faculty of Medicine • UST Teaching Hospital',
    degreeAr: 'دكتوراه سريرية متقدمة (Clinical MD)',
    degreeEn: 'Advanced Clinical MD Doctorate',
    durationAr: '3 - 4 سنوات تدريب سريري تخصصي',
    durationEn: '3 - 4 Years Specialized Clinical Residency',
    badgeAr: 'جديد NEW',
    badgeEn: 'NEW PROGRAM',
    partnerBadgeAr: '14 تخصصاً دقيقاً بمستشفى الجامعة التعليمي',
    partnerBadgeEn: '14 Subspecialties at UST Hospital',
    icon: Stethoscope,
    themeGradient: 'from-slate-950 via-rose-950 to-red-950',
    accentColor: '#e11d48',
    glowColor: 'rgba(225, 29, 72, 0.4)',
    summaryAr: 'برامج دكتوراه سريرية معتمدة وموجهة للأطباء المتخصصين في 14 تخصصاً دقيقاً، مع تدريب سريري وزمالة متقدمة بمستشفى الجامعة التعليمي.',
    summaryEn: 'Accredited clinical fellowship and residency doctorate programs tailored for physicians across 14 vital medical subspecialties.',
    highlightsAr: [
      '14 تخصصاً دقيقاً (جراحة القلب، الأوعية الدموية، طب الأطفال، الأورام، النساء والتوليد)',
      'إشراف استشاري رفيع وتدريب سريري مكثف داخل غرف العمليات الجراحية الكبرى'
    ],
    highlightsEn: [
      '14 specialized tracks (Cardiology, Vascular Surgery, Pediatrics, Oncology, Ob/Gyn)',
      'Senior consultant supervision and intensive fellowship in advanced surgical theaters'
    ],
    careerAr: 'طبيب استشاري أول، جراح متخصص، رئيس قسم سريري بالمستشفيات، أستاذ إكلينيكي.',
    careerEn: 'Senior Consultant Physician, Specialized Surgeon, Clinical Department Head.'
  },

  // 9. International Business Administration (العلوم الإدارية)
  {
    id: 'intl-business-en',
    category: 'business',
    categoryAr: 'العلوم الإدارية والإنسانية',
    categoryEn: 'Business & Management',
    tagAr: 'إدارة الأعمال الدولية',
    tagEn: 'International Business (EN)',
    titleAr: 'بكالوريوس إدارة الأعمال الدولية (باللغة الإنجليزية)',
    titleEn: 'International Business Administration (English Track)',
    facultyAr: 'كلية العلوم الإدارية والإنسانية',
    facultyEn: 'Faculty of Administrative Sciences',
    degreeAr: 'بكالوريوس باللغة الإنجليزية',
    degreeEn: 'Bachelor Degree (Full English Medium)',
    durationAr: '4 سنوات دراسية',
    durationEn: '4 Academic Years',
    badgeAr: 'جديد NEW',
    badgeEn: 'NEW PROGRAM',
    partnerBadgeAr: 'مسار كامل يُدرّس باللغة الإنجليزية',
    partnerBadgeEn: '100% English Medium Curriculum',
    icon: Briefcase,
    themeGradient: 'from-slate-950 via-blue-950 to-slate-900',
    accentColor: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.4)',
    summaryAr: 'برنامج نوعي يُدرّس بالكامل باللغة الإنجليزية وفق أحدث المناهج الدولية، لإعداد قادة أعمال ورواد قادرين على إدارة الشركات العالمية والصفقات الدولية.',
    summaryEn: 'A flagship program conducted entirely in English based on modern international curricula, preparing corporate executives.',
    highlightsAr: [
      'تدريس باللغة الإنجليزية بالكامل بالتعاون مع مناهج جامعات عالمية شريكة',
      'تطبيق عملي على التجارة الرقمية، سلاسل الإمداد العالمية، والاستثمار الدولي'
    ],
    highlightsEn: [
      'Entire curriculum delivered in English aligned with international standards',
      'Practical case studies in global supply chains, fintech, and cross-border trade'
    ],
    careerAr: 'مدير تطوير أعمال دولية، مدير استيراد وتصدير، مستشار إداري واستثماري، رائد أعمال.',
    careerEn: 'International Business Manager, Global Trade Director, Corporate Strategy Consultant.'
  },

  // 10. Sharia & Law Distance Learning (التعليم الإلكتروني)
  {
    id: 'sharia-law-distance',
    category: 'elearning',
    categoryAr: 'التعليم الإلكتروني والمفتوح',
    categoryEn: 'E-Learning & Distance',
    tagAr: 'الشريعة والقانون إلكترونياً',
    tagEn: 'Sharia & Law Online',
    titleAr: 'بكالوريوس الشريعة والقانون (نظام التعليم الإلكتروني)',
    titleEn: 'Bachelor of Sharia & Law (Distance E-Learning)',
    facultyAr: 'عمادة التعليم الإلكتروني والتعليم عن بُعد',
    facultyEn: 'Deanship of E-Learning & Distance Education',
    degreeAr: 'بكالوريوس رسمي معتمد',
    degreeEn: 'Official Accredited Bachelor Degree',
    durationAr: '4 سنوات دراسية مرنة',
    durationEn: '4 Flexible Academic Years',
    badgeAr: 'جديد NEW',
    badgeEn: 'NEW PROGRAM',
    partnerBadgeAr: 'دراسة مرنة معتمدة ومطابقة للانتظام',
    partnerBadgeEn: 'Fully Accredited Distance Degree',
    icon: Scale,
    themeGradient: 'from-slate-950 via-amber-950 to-yellow-950',
    accentColor: '#d97706',
    glowColor: 'rgba(217, 119, 6, 0.4)',
    summaryAr: 'برنامج قانوني وشرعي شامل يُتاح بنظام التعليم الإلكتروني المتطور مع اعتماده الرسمي الكامل، لتمكين الطلاب والمغتربين حول العالم من دراسة القانون بمرونة تامة.',
    summaryEn: 'A comprehensive Sharia and Law bachelor offered via advanced distance learning with full accreditation worldwide.',
    highlightsAr: [
      'دراسة مرنة عبر منصات افتراضية حديثة ومحاضرات تفاعلية مسجلة ومباشرة 24/7',
      'شهادة بكالوريوس رسمية مطابقة لشهادات الانتظام ومعتمدة لدى وزارة التعليم العالي'
    ],
    highlightsEn: [
      'Flexible virtual learning with live interactive sessions and 24/7 recorded lectures',
      'Fully accredited degree identical to on-campus degrees and approved by Higher Education'
    ],
    careerAr: 'محامٍ ومستشار قانوني، عضو هيئة قضائية، مستشار عقود تجارية بالشركات، خبير تحكيم.',
    careerEn: 'Licensed Attorney, Corporate Legal Counsel, Commercial Contracts Specialist.'
  }
];

export function NewProgramsSection({ isAr = true }) {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Freeze background page scroll when modal is open so the background never moves
  useEffect(() => {
    if (selectedProgram) {
      const unlock = lockBodyScroll();
      return () => {
        unlock();
      };
    }
  }, [selectedProgram]);

  return (
    <section className="py-20 bg-transparent relative z-10 select-none overflow-hidden">
      {/* Decorative background ambient glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full crystal-card text-primary text-xs sm:text-sm font-black mb-4 shadow-sm">
            <Compass className="w-4 h-4 text-accent-dark stroke-[2.2]" />
            <span>{isAr ? 'برامج وتخصصات نوعية رائدة لأول مرة بالجامعة' : 'Newly Launched UST Academic Programs'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            {isAr ? 'التخصصات الأكاديمية والبرامج النوعية الجديدة' : 'Newly Opened University Majors'}
          </h2>

          <p className="text-sm sm:text-base font-semibold text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {isAr
              ? 'تخصصات متقدمة تواكب الثورة الصناعية الرابعة وعصر الذكاء الاصطناعي، الأمن السيبراني بالشراكة مع EC-Council، هندسة الطيران، والدكتوراه السريرية بمستشفى الجامعة التعليمي.'
              : 'Cutting-edge academic disciplines introducing cybersecurity, artificial intelligence, aviation technology, robotics, and advanced clinical MD doctorate.'}
          </p>

          {/* Quick Features Row */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mt-6 flex-wrap text-xs font-bold text-slate-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full crystal-card shadow-2xs">
              <Award className="w-3.5 h-3.5 text-accent-dark stroke-[2.2]" />
              <span>{isAr ? '10 تخصصات مستقبلية جديدة' : '10 New Future Majors'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full crystal-card shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isAr ? 'اعتمادات وشراكات دولية معتمدة' : 'Accredited Global Partners'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full crystal-card shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-primary" />
              <span>{isAr ? 'معامل تطبيقية وحوسبة فائقة' : 'Advanced Application Labs'}</span>
            </span>
          </div>

          <div className="w-24 h-1.5 bg-gradient-to-r from-accent via-primary to-accent mx-auto mt-6 rounded-full shadow-xs" />
        </div>

        {/* 5-Columns Circular / Stadium Programs Grid (صفين كل صف 5 تخصصات) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4.5">
          {newlyLaunchedProgramsData.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedProgram(prog)}
                className="group relative flex flex-col items-center py-6 px-3.5 sm:px-4 text-center border-2 border-white/75 hover:border-white rounded-[52px] sm:rounded-[60px] bg-white/45 hover:bg-white/65 backdrop-blur-3xl shadow-[0_12px_30px_rgba(11,59,96,0.06)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.2)] transition-all duration-500 cursor-pointer select-none justify-between overflow-hidden hover:-translate-y-1.5"
              >
                {/* Concentric Inner Outline Ring */}
                <div className="absolute inset-1.5 sm:inset-2 rounded-[44px] sm:rounded-[52px] border border-white/50 pointer-events-none group-hover:border-white/80 transition-colors z-0" />

                {/* Subtle Ambient Backlight Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-400/10 via-emerald-400/5 to-primary/10 pointer-events-none rounded-[52px] sm:rounded-[60px]" />

                {/* Top Category Centered Row */}
                <div className="relative z-10 w-full flex items-center justify-center mb-2 px-1">
                  <span className="bg-white/60 backdrop-blur-md border border-white/80 text-primary text-[9.5px] font-bold px-3 py-0.5 rounded-full truncate max-w-[190px] shadow-2xs">
                    {isAr ? prog.facultyAr : prog.facultyEn}
                  </span>
                </div>

                {/* Circular Pure White Icon Container */}
                <div className="relative my-2 z-10">
                  {/* Ambient soft colored halo */}
                  <div
                    className="absolute -inset-1 rounded-full blur-md opacity-25 group-hover:opacity-60 transition-all duration-500 pointer-events-none"
                    style={{ backgroundColor: prog.accentColor }}
                  />

                  {/* Outer pure white circle frame */}
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full border-2 border-white bg-white/95 backdrop-blur-xl p-1 shadow-[0_6px_20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:scale-108 relative z-10 flex items-center justify-center">
                    {/* Inner pure white circle with icon */}
                    <div className="w-full h-full rounded-full bg-white border border-slate-100 flex items-center justify-center relative overflow-hidden shadow-[inset_0_1px_3px_rgba(255,255,255,1),inset_0_-1px_3px_rgba(0,0,0,0.03)]">
                      {/* Subtle crystal gloss reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/80 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                      <Icon
                        className="w-8 h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)] group-hover:scale-110 transition-transform duration-300"
                        style={{ color: prog.accentColor === '#0ea5e9' ? '#0284c7' : prog.accentColor === '#06b6d4' ? '#0891b2' : prog.accentColor }}
                        strokeWidth={1.75}
                      />
                    </div>
                  </div>
                </div>

                {/* Credential Badge Chip */}
                <div className="relative z-10 mb-2 w-full px-1">
                  <span className="inline-flex items-center justify-center gap-1 px-2.5 py-0.5 rounded-full bg-white/50 backdrop-blur-md border border-white/70 text-slate-700 text-[9px] font-black shadow-2xs max-w-full">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: prog.accentColor }} />
                    <span className="truncate">
                      {isAr ? prog.partnerBadgeAr : prog.partnerBadgeEn}
                    </span>
                  </span>
                </div>

                {/* Duration Meta Pill */}
                <div className="relative z-10 flex items-center justify-center gap-1 mb-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/50 backdrop-blur-md text-slate-600 border border-white/70 text-[9px] sm:text-[10px] font-bold">
                    <Clock className="w-2.5 h-2.5 text-slate-400" />
                    <span>{isAr ? prog.durationAr : prog.durationEn}</span>
                  </span>
                </div>

                {/* Program Title */}
                <div className="relative z-10 min-h-[38px] flex items-center justify-center mb-1 px-1">
                  <h3 className="text-xs sm:text-[13px] font-black text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {isAr ? prog.titleAr : prog.titleEn}
                  </h3>
                </div>


                {/* Single Full-Width Action Button: "تفاصيل التخصص" فقط */}
                <div className="relative z-10 w-full mt-auto pt-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProgram(prog);
                    }}
                    className="w-full py-2.5 px-3 rounded-full bg-primary hover:bg-primary-dark text-white font-black text-[11px] sm:text-xs shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 group/btn"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-accent" />
                    <span>{isAr ? 'تفاصيل التخصص' : 'Program Details'}</span>
                    {isAr ? (
                      <ArrowLeft className="w-3 h-3 group-hover/btn:-translate-x-0.5 transition-transform" />
                    ) : (
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 select-none overflow-hidden touch-none"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="fixed inset-0 bg-black/25 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 320 }}
              className="relative w-full max-w-2xl crystal-modal rounded-[32px] sm:rounded-[36px] shadow-[0_30px_80px_rgba(11,59,96,0.3)] overflow-hidden z-10 flex flex-col max-h-[85vh] overscroll-contain"
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {/* Modal Header */}
              <div className={`relative bg-gradient-to-r ${selectedProgram.themeGradient} text-white p-4 sm:p-5 overflow-hidden shrink-0`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-white/15 px-3 py-0.5 rounded-full text-[10.5px] font-bold text-sky-100 border border-white/20">
                      {isAr ? selectedProgram.partnerBadgeAr : selectedProgram.partnerBadgeEn}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-90"
                    title={isAr ? 'إغلاق' : 'Close'}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <span className="text-[11px] font-bold text-sky-200 block mb-0.5">
                  {isAr ? selectedProgram.facultyAr : selectedProgram.facultyEn}
                </span>

                <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                  {isAr ? selectedProgram.titleAr : selectedProgram.titleEn}
                </h3>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="bg-white/15 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-sky-100 border border-white/20">
                    {isAr ? selectedProgram.degreeAr : selectedProgram.degreeEn}
                  </span>
                  <span className="bg-white/15 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-sky-100 border border-white/20">
                    {isAr ? selectedProgram.durationAr : selectedProgram.durationEn}
                  </span>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-4 sm:p-5 space-y-3 overflow-y-auto custom-scrollbar flex-1 overscroll-contain">
                {/* Description */}
                <div>
                  <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-wider mb-1.5">
                    {isAr ? 'نبذة عن البرنامج الأكاديمي:' : 'About the Program:'}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed bg-white/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/80">
                    {isAr ? selectedProgram.summaryAr : selectedProgram.summaryEn}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-wider mb-1.5">
                    {isAr ? 'أهم مميزات ومحاور التخصص:' : 'Key Program Highlights:'}
                  </h4>
                  <div className="space-y-1.5">
                    {(isAr ? selectedProgram.highlightsAr : selectedProgram.highlightsEn).map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/60 backdrop-blur-md border border-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-slate-800 leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div>
                  <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-wider mb-1.5">
                    {isAr ? 'مجالات وفرص العمل للخريجين:' : 'Career Opportunities:'}
                  </h4>
                  <div className="p-3 rounded-xl bg-amber-50/70 backdrop-blur-md border border-amber-200/80 flex items-start gap-2.5">
                    <Briefcase className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-amber-950 leading-relaxed">
                      {isAr ? selectedProgram.careerAr : selectedProgram.careerEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-3.5 sm:p-4 border-t border-slate-200/80 bg-slate-50/90 backdrop-blur-xl flex items-center justify-between gap-3 shrink-0">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-6 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 font-extrabold text-xs border border-slate-300 shadow-2xs transition-all cursor-pointer active:scale-95"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>

                <button
                  onClick={() => {
                    setSelectedProgram(null);
                    navigate('/admission');
                  }}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <span>{isAr ? 'تقديم طلب القبول في هذا التخصص' : 'Apply for this Major'}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default NewProgramsSection;
