import React, { useState, useEffect, useRef } from 'react';
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
  Award,
  Maximize2,
  ChevronLeft,
  ChevronRight
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
    accentColor: '#0B3B60',
    glowColor: 'rgba(11, 59, 96, 0.4)',
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

// ألوان الهوية البصرية للجامعة متناسقة وموزعة بالتساوي على البطاقات الـ 10
const BRAND_IDENTITY_THEMES = [
  // 1. الأمن السيبراني والتحري الرقمي: أزرق سماوي تقني
  {
    brandColor: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.32)',
    lightBg: 'rgba(2, 132, 199, 0.08)',
    borderColor: 'rgba(2, 132, 199, 0.25)',
  },
  // 2. الذكاء الاصطناعي وتعلم الآلة: كحلي ملكي (لون الهوية الأساسي)
  {
    brandColor: '#0B3B60',
    glowColor: 'rgba(11, 59, 96, 0.32)',
    lightBg: 'rgba(11, 59, 96, 0.08)',
    borderColor: 'rgba(11, 59, 96, 0.22)',
  },
  // 3. علم البيانات وذكاء الأعمال: أخضر زمردي حيوي (لون الهوية الثانوي)
  {
    brandColor: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.32)',
    lightBg: 'rgba(5, 150, 105, 0.08)',
    borderColor: 'rgba(5, 150, 105, 0.22)',
  },
  // 4. هندسة البرمجيات والنظم السحابية: تركواز حديث
  {
    brandColor: '#0d9488',
    glowColor: 'rgba(13, 148, 136, 0.32)',
    lightBg: 'rgba(13, 148, 136, 0.08)',
    borderColor: 'rgba(13, 148, 136, 0.22)',
  },
  // 5. علوم وتقنيات الطيران: أزرق ملاحة ياقوتي
  {
    brandColor: '#0369a1',
    glowColor: 'rgba(3, 105, 161, 0.32)',
    lightBg: 'rgba(3, 105, 161, 0.08)',
    borderColor: 'rgba(3, 105, 161, 0.25)',
  },
  // 6. هندسة الروبوتات والذكاء الاصطناعي: كحلي ملكي (الهوية الأساسية)
  {
    brandColor: '#0B3B60',
    glowColor: 'rgba(11, 59, 96, 0.32)',
    lightBg: 'rgba(11, 59, 96, 0.08)',
    borderColor: 'rgba(11, 59, 96, 0.22)',
  },
  // 7. هندسة السيارات الكهربائية EV: أخضر زمردي مستدام
  {
    brandColor: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.32)',
    lightBg: 'rgba(5, 150, 105, 0.08)',
    borderColor: 'rgba(5, 150, 105, 0.22)',
  },
  // 8. الدكتوراه السريرية MD في الطب البشري: أزرق سريري ملكي
  {
    brandColor: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.32)',
    lightBg: 'rgba(2, 132, 199, 0.08)',
    borderColor: 'rgba(2, 132, 199, 0.25)',
  },
  // 9. إدارة الأعمال الدولية (EN): كحلي ملكي للهوية الرسمية
  {
    brandColor: '#0B3B60',
    glowColor: 'rgba(11, 59, 96, 0.35)',
    lightBg: 'rgba(11, 59, 96, 0.08)',
    borderColor: 'rgba(11, 59, 96, 0.25)',
  },
  // 10. الشريعة والقانون إلكترونياً: تركواز حديث
  {
    brandColor: '#0d9488',
    glowColor: 'rgba(13, 148, 136, 0.32)',
    lightBg: 'rgba(13, 148, 136, 0.08)',
    borderColor: 'rgba(13, 148, 136, 0.22)',
  }
];

export function NewProgramsSection({ isAr = true }) {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'

  const total = newlyLaunchedProgramsData.length;

  const lastWheelTimeRef = useRef(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Smooth throttled mouse wheel scroll - moves ONLY when the user actively scrolls/moves the wheel
  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastWheelTimeRef.current < 450) return;

    const absX = Math.abs(e.deltaX);
    const absY = Math.abs(e.deltaY);

    if (absX > 15 || absY > 20) {
      lastWheelTimeRef.current = now;

      if (absX > absY) {
        if (e.deltaX > 0) {
          if (isAr) handlePrev();
          else handleNext();
        } else {
          if (isAr) handleNext();
          else handlePrev();
        }
      } else {
        if (e.deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        if (isAr) handlePrev();
        else handleNext();
      } else if (e.key === 'ArrowLeft') {
        if (isAr) handleNext();
        else handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAr]);

  // Freeze background page scroll when modal is open so the background never moves
  useEffect(() => {
    if (selectedProgram) {
      const unlock = lockBodyScroll();
      return () => {
        unlock();
      };
    }
  }, [selectedProgram]);

  const activeProg = newlyLaunchedProgramsData[currentIndex];
  const activeTheme = BRAND_IDENTITY_THEMES[currentIndex % BRAND_IDENTITY_THEMES.length];
  const ActiveIcon = activeProg.icon;

  return (
    <section className="py-10 sm:py-16 md:py-18 bg-transparent relative z-10 select-none overflow-hidden">
      {/* Decorative background ambient glows */}
      <div className="absolute top-1/4 -right-24 w-60 h-60 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-60 h-60 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-5 sm:mb-8">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full crystal-card text-primary text-[11px] sm:text-sm font-black mb-3 sm:mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-dark stroke-[2.2]" />
            <span>{isAr ? 'برامج وتخصصات نوعية رائدة لأول مرة بالجامعة' : 'Newly Launched UST Academic Programs'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-primary mb-2.5 sm:mb-3 tracking-tight leading-tight px-2">
            {isAr ? 'التخصصات الأكاديمية والبرامج النوعية الجديدة' : 'Newly Opened University Majors'}
          </h2>

          <p className="text-xs sm:text-base font-medium text-[#244766] max-w-3xl mx-auto leading-relaxed px-2">
            {isAr
              ? 'تخصصات متقدمة تواكب الثورة الصناعية الرابعة وعصر الذكاء الاصطناعي، الأمن السيبراني بالشراكة مع EC-Council، هندسة الطيران، والدكتوراه السريرية بمستشفى الجامعة التعليمي.'
              : 'Cutting-edge academic disciplines introducing cybersecurity, artificial intelligence, aviation technology, robotics, and advanced clinical MD doctorate.'}
          </p>

          {/* Quick Features Row */}
          <div className="flex items-center justify-center gap-2 sm:gap-5 mt-3.5 sm:mt-4 flex-wrap text-[11px] sm:text-xs font-bold text-[#1b3d58]">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full crystal-card shadow-2xs">
              <Award className="w-3.5 h-3.5 text-accent-dark stroke-[2.2]" />
              <span>{isAr ? '10 تخصصات مستقبلية جديدة' : '10 New Future Majors'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full crystal-card shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isAr ? 'اعتمادات وشراكات دولية معتمدة' : 'Accredited Global Partners'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full crystal-card shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-primary" />
              <span>{isAr ? 'معامل تطبيقية وحوسبة فائقة' : 'Advanced Application Labs'}</span>
            </span>
          </div>

          {/* View Mode Switcher: 3D Cover Flow vs All-in-One Compact Grid */}
          <div className="flex items-center justify-center mt-4 sm:mt-5">
            <div className="inline-flex flex-wrap justify-center p-1 rounded-full bg-white/60 backdrop-blur-2xl border border-white/90 shadow-[0_8px_24px_rgba(11,59,96,0.06),inset_0_1px_1.5px_rgba(255,255,255,0.9)]">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-gradient-to-r from-sky-200/75 via-white/85 to-sky-100/80 backdrop-blur-2xl saturate-150 text-primary border border-white/95 shadow-[0_6px_18px_rgba(2,132,199,0.16),inset_0_1.5px_2px_rgba(255,255,255,1)]'
                    : 'text-slate-600 hover:text-primary border border-transparent'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{isAr ? 'منصة العرض ثلاثية الأبعاد' : '3D Cover Flow View'}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-sky-200/75 via-white/85 to-sky-100/80 backdrop-blur-2xl saturate-150 text-primary border border-white/95 shadow-[0_6px_18px_rgba(2,132,199,0.16),inset_0_1.5px_2px_rgba(255,255,255,1)]'
                    : 'text-slate-600 hover:text-primary border border-transparent'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{isAr ? 'شبكة الـ 10 تخصصات كاملة' : 'All 10 Majors Grid'}</span>
              </button>
            </div>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-accent mx-auto mt-5 rounded-full shadow-xs" />
        </div>

        {/* CONDITION 1: 3D Cover Flow View Mode */}
        {viewMode === 'carousel' && (
          <div className="relative w-full py-2 overflow-hidden">
            {/* Main 3D Deck Viewport */}
            <div 
              onWheel={handleWheel}
              className="relative w-full h-[340px] sm:h-[360px] lg:h-[380px] flex items-center justify-center select-none"
              style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
            >
              {newlyLaunchedProgramsData.map((prog, idx) => {
                const Icon = prog.icon;
                const theme = BRAND_IDENTITY_THEMES[idx % BRAND_IDENTITY_THEMES.length];
                
                // Calculate circular distance relative to currentIndex
                let diff = idx - currentIndex;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;

                const isCenter = diff === 0;
                const absDiff = Math.abs(diff);

                // Direction multiplier for RTL
                const dir = isAr ? -1 : 1;
                const sign = Math.sign(diff) * dir;

                // Compute 3D transforms based on distance from center
                let xOffset = 0;
                let scale = 1;
                let rotateY = 0;
                let zIndex = 30;
                let opacity = 1;

                if (absDiff === 0) {
                  xOffset = 0;
                  scale = 1;
                  rotateY = 0;
                  zIndex = 40;
                  opacity = 1;
                } else if (absDiff === 1) {
                  xOffset = sign * 185;
                  scale = 0.88;
                  rotateY = -sign * 22;
                  zIndex = 30;
                  opacity = 0.9;
                } else if (absDiff === 2) {
                  xOffset = sign * 335;
                  scale = 0.76;
                  rotateY = -sign * 32;
                  zIndex = 20;
                  opacity = 0.6;
                } else if (absDiff === 3) {
                  xOffset = sign * 460;
                  scale = 0.65;
                  rotateY = -sign * 40;
                  zIndex = 10;
                  opacity = 0.3;
                } else {
                  xOffset = sign * 580;
                  scale = 0.5;
                  rotateY = -sign * 45;
                  zIndex = 0;
                  opacity = 0;
                }

                return (
                  <motion.div
                    key={prog.id}
                    animate={{
                      x: xOffset,
                      scale: scale,
                      rotateY: rotateY,
                      zIndex: zIndex,
                      opacity: opacity,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 55,
                      damping: 18,
                      mass: 1.1
                    }}
                    drag={isCenter ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset }) => {
                      if (offset.x < -35) {
                        handleNext();
                      } else if (offset.x > 35) {
                        handlePrev();
                      }
                    }}
                    onClick={() => {
                      if (isCenter) {
                        setSelectedProgram(prog);
                      } else {
                        setCurrentIndex(idx);
                      }
                    }}
                    className={`absolute w-[220px] sm:w-[240px] lg:w-[255px] h-[315px] sm:h-[330px] lg:h-[340px] cursor-pointer rounded-[42px] sm:rounded-[48px] ${
                      absDiff > 3 ? 'pointer-events-none' : ''
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Compact Pure White Luxury Circular Card - شكل دائري أنيق متناسق مع هوية الموقع بدون صور وبدون شريط علوي */}
                    <div 
                      className={`relative w-full h-full rounded-[42px] sm:rounded-[48px] bg-white border border-slate-100 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4 transition-all duration-500 group select-none shadow-[0_10px_28px_rgba(11,59,96,0.07)] ${
                        isCenter ? 'hover:-translate-y-2 hover:shadow-[0_22px_48px_rgba(11,59,96,0.18)]' : ''
                      }`}
                      style={{
                        boxShadow: isCenter 
                          ? `0 16px 40px rgba(11, 59, 96, 0.13), 0 0 0 1.5px ${theme.borderColor}`
                          : '0 8px 24px rgba(11, 59, 96, 0.05)'
                      }}
                    >
                      {/* Top Row: Faculty Badge + Program Counter */}
                      <div className="flex items-center justify-between gap-1.5 mb-1.5">
                        <span 
                          className="text-[8.5px] sm:text-[9px] font-bold px-2.5 py-0.5 rounded-full truncate max-w-[155px] shadow-2xs border"
                          style={{
                            backgroundColor: theme.lightBg,
                            color: theme.brandColor,
                            borderColor: theme.borderColor
                          }}
                        >
                          {isAr ? prog.facultyAr : prog.facultyEn}
                        </span>

                        <span className="w-6 h-6 rounded-full flex items-center justify-center text-[9.5px] font-black text-slate-500 tracking-wider shrink-0 bg-slate-50 border border-slate-200/70 shadow-2xs">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Hero Icon Centerpiece - أيقونة دائرية كريستالية تتطابق مع تصميم الموقع */}
                      <div className="relative my-1 flex items-center justify-center">
                        <div 
                          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center shadow-xs transition-transform duration-500 group-hover:scale-108 relative z-10"
                          style={{ 
                            borderColor: theme.borderColor,
                            backgroundColor: theme.lightBg
                          }}
                        >
                          <Icon className="w-6 h-6 sm:w-6.5 sm:h-6.5 transition-transform duration-500 group-hover:rotate-6" style={{ color: theme.brandColor }} strokeWidth={1.8} />
                        </div>
                      </div>

                      {/* Partner / Feature Credential Chip */}
                      <div className="flex items-center justify-center mb-0.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/70 text-[8.5px] sm:text-[9px] font-bold text-slate-700 shadow-2xs max-w-full">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: theme.brandColor }} />
                          <span className="truncate">{isAr ? prog.partnerBadgeAr : prog.partnerBadgeEn}</span>
                        </span>
                      </div>

                      {/* Program Title - خط واضح عالي التباين */}
                      <div className="min-h-[36px] flex items-center justify-center my-1 text-center px-0.5">
                        <h3 
                          className="text-[12px] sm:text-[13px] font-black leading-snug line-clamp-2 transition-colors text-primary group-hover:text-primary-dark"
                        >
                          {isAr ? prog.titleAr : prog.titleEn}
                        </h3>
                      </div>

                      {/* Meta Badges (Duration & Degree) */}
                      <div className="flex items-center justify-center gap-1.5 mb-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/60 text-[8.5px] sm:text-[9px] font-bold text-slate-600">
                          <Clock className="w-2.5 h-2.5 text-slate-400" />
                          <span>{isAr ? prog.durationAr : prog.durationEn}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/60 text-[8.5px] sm:text-[9px] font-bold text-slate-600">
                          <Award className="w-2.5 h-2.5 text-emerald-600" />
                          <span>{isAr ? prog.degreeAr : prog.degreeEn}</span>
                        </span>
                      </div>

                      {/* Action Button: "تفاصيل التخصص" - زر دائري متناسق */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProgram(prog);
                        }}
                        className="w-full py-1.5 sm:py-2 px-3 rounded-full font-black text-[10.5px] sm:text-[11px] bg-gradient-to-r from-sky-200/65 via-white/80 to-sky-100/75 hover:from-sky-200/85 hover:via-white/95 hover:to-sky-100/90 backdrop-blur-xl saturate-150 text-primary border border-white/90 shadow-[0_6px_18px_rgba(2,132,199,0.12),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:shadow-[0_10px_24px_rgba(2,132,199,0.2),inset_0_1.5px_2px_rgba(255,255,255,1)] transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer group/btn active:scale-95 mt-auto"
                      >
                        <BookOpen className="w-3 h-3 text-primary transition-transform group-hover/btn:scale-110" />
                        <span>{isAr ? 'تفاصيل التخصص' : 'Major Details'}</span>
                        {isAr ? (
                          <ArrowLeft className="w-3 h-3 text-primary group-hover/btn:-translate-x-1 transition-transform" />
                        ) : (
                          <ArrowRight className="w-3 h-3 text-primary group-hover/btn:translate-x-1 transition-transform" />
                        )}
                      </button>

                      {/* Side card frosted click overlay */}
                      {!isCenter && (
                        <div 
                          className="absolute inset-0 bg-white/35 hover:bg-white/10 backdrop-blur-[0.5px] transition-all duration-300 z-30 cursor-pointer rounded-[42px] sm:rounded-[48px]"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(idx);
                          }}
                        />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating Navigation Pill Bar */}
            <div className="relative mt-5 sm:mt-6 flex flex-col items-center gap-3 z-40">
              <div className="bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_10px_30px_rgba(11,59,96,0.08),inset_0_1.5px_2px_rgba(255,255,255,1)] rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2 flex items-center gap-2.5 sm:gap-5">
                {/* Prev Button */}
                <button
                  type="button"
                  onClick={isAr ? handlePrev : handlePrev}
                  className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-gradient-to-r from-sky-200/70 via-white/80 to-sky-100/75 hover:from-sky-200/90 hover:via-white/95 hover:to-sky-100/90 backdrop-blur-xl text-primary border border-white/90 flex items-center justify-center transition-all cursor-pointer shadow-[0_4px_12px_rgba(2,132,199,0.14),inset_0_1px_1.5px_rgba(255,255,255,1)] active:scale-90"
                  aria-label="Previous Program"
                  title={isAr ? 'التخصص السابق' : 'Previous Program'}
                >
                  {isAr ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                </button>

                {/* Center Active Summary Chip */}
                <div 
                  onClick={() => setSelectedProgram(activeProg)}
                  className="flex items-center gap-2.5 cursor-pointer group px-1.5 py-0.5 rounded-full hover:bg-slate-50 transition-colors"
                  title={isAr ? 'عرض التفاصيل الكاملة' : 'View Full Details'}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-slate-200 shadow-xs overflow-hidden"
                    style={{ backgroundColor: activeTheme.lightBg }}
                  >
                    <ActiveIcon className="w-4 h-4" style={{ color: activeTheme.brandColor }} />
                  </div>

                  <div className={`${isAr ? 'text-right' : 'text-left'} max-w-[140px] sm:max-w-[220px] truncate`}>
                    <h4 className="text-[11.5px] sm:text-xs font-black text-primary group-hover:text-primary-dark transition-colors truncate">
                      {isAr ? activeProg.titleAr : activeProg.titleEn}
                    </h4>
                    <p className="text-[9.5px] font-semibold text-slate-500 truncate">
                      {isAr ? activeProg.partnerBadgeAr : activeProg.partnerBadgeEn}
                    </p>
                  </div>
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={isAr ? handleNext : handleNext}
                  className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-gradient-to-r from-sky-200/70 via-white/80 to-sky-100/75 hover:from-sky-200/90 hover:via-white/95 hover:to-sky-100/90 backdrop-blur-xl text-primary border border-white/90 flex items-center justify-center transition-all cursor-pointer shadow-[0_4px_12px_rgba(2,132,199,0.14),inset_0_1px_1.5px_rgba(255,255,255,1)] active:scale-90"
                  aria-label="Next Program"
                  title={isAr ? 'التخصص التالي' : 'Next Program'}
                >
                  {isAr ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {newlyLaunchedProgramsData.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      idx === currentIndex 
                        ? 'w-6 h-2 bg-primary shadow-xs' 
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to program ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONDITION 2: All 10 Programs in Compact Grid (صفين كل صف 5 بطاقات صغيرة وأنيقة) */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-3.5 py-2">
            {newlyLaunchedProgramsData.map((prog, idx) => {
              const Icon = prog.icon;
              const theme = BRAND_IDENTITY_THEMES[idx % BRAND_IDENTITY_THEMES.length];

              return (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  onClick={() => setSelectedProgram(prog)}
                  className="relative rounded-[36px] sm:rounded-[42px] bg-white border border-slate-200/80 hover:border-primary/40 shadow-[0_8px_24px_rgba(11,59,96,0.06)] hover:shadow-[0_16px_36px_rgba(11,59,96,0.15)] transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between cursor-pointer select-none overflow-hidden min-h-[305px]"
                >
                  {/* Top Row: Faculty Badge + Counter */}
                  <div className="flex items-center justify-between gap-1.5 mb-1.5">
                    <span 
                      className="text-[8.5px] font-bold px-2.5 py-0.5 rounded-full truncate max-w-[145px]"
                      style={{
                        backgroundColor: theme.lightBg,
                        color: theme.brandColor,
                        border: `1px solid ${theme.borderColor}`
                      }}
                    >
                      {isAr ? prog.facultyAr : prog.facultyEn}
                    </span>

                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black text-slate-500 bg-slate-50 border border-slate-200/70 shadow-2xs">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Center Emblem Icon - أيقونة دائرية تتطابق مع هوية الموقع */}
                  <div className="relative my-1 flex items-center justify-center">
                    <div 
                      className="w-13 h-13 rounded-full border-2 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-108"
                      style={{
                        backgroundColor: theme.lightBg,
                        borderColor: theme.borderColor
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: theme.brandColor }} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Partner Badge */}
                  <div className="flex items-center justify-center mb-0.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/70 text-[8.5px] font-bold text-slate-700 max-w-full truncate">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: theme.brandColor }} />
                      <span className="truncate">{isAr ? prog.partnerBadgeAr : prog.partnerBadgeEn}</span>
                    </span>
                  </div>

                  {/* Program Title */}
                  <div className="min-h-[36px] flex items-center justify-center text-center my-1 px-0.5">
                    <h3 
                      className="text-[12px] sm:text-[12.5px] font-black leading-snug line-clamp-2 text-primary"
                    >
                      {isAr ? prog.titleAr : prog.titleEn}
                    </h3>
                  </div>

                  {/* Duration Meta */}
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/70 text-[8.5px] font-bold text-slate-600">
                      <Clock className="w-2.5 h-2.5 text-slate-400" />
                      <span>{isAr ? prog.durationAr : prog.durationEn}</span>
                    </span>
                  </div>

                  {/* Action Button - زر دائري متناسق */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProgram(prog);
                    }}
                    className="w-full py-1.5 px-3 rounded-full font-black text-[10.5px] bg-gradient-to-r from-sky-200/65 via-white/80 to-sky-100/75 hover:from-sky-200/85 hover:via-white/95 hover:to-sky-100/90 backdrop-blur-xl saturate-150 text-primary border border-white/90 shadow-[0_6px_18px_rgba(2,132,199,0.12),inset_0_1.5px_2px_rgba(255,255,255,1)] transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer mt-auto"
                  >
                    <BookOpen className="w-3 h-3 text-primary" />
                    <span>{isAr ? 'تفاصيل التخصص' : 'Major Details'}</span>
                    {isAr ? <ArrowLeft className="w-3 h-3 text-primary" /> : <ArrowRight className="w-3 h-3 text-primary" />}
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}
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
              <div className="relative bg-white border-b border-slate-200/90 p-4 sm:p-5 overflow-hidden shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-0.5 rounded-full text-[10.5px] font-bold">
                      {isAr ? selectedProgram.partnerBadgeAr : selectedProgram.partnerBadgeEn}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-90 border border-slate-200/60"
                    title={isAr ? 'إغلاق' : 'Close'}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <span className="text-[11px] font-bold text-primary block mb-0.5">
                  {isAr ? selectedProgram.facultyAr : selectedProgram.facultyEn}
                </span>

                <h3 className="text-lg sm:text-xl font-black text-primary leading-tight">
                  {isAr ? selectedProgram.titleAr : selectedProgram.titleEn}
                </h3>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="bg-slate-100 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-slate-700 border border-slate-200">
                    {isAr ? selectedProgram.degreeAr : selectedProgram.degreeEn}
                  </span>
                  <span className="bg-slate-100 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-slate-700 border border-slate-200">
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
              <div className="p-3.5 sm:p-4 border-t border-slate-200/80 bg-slate-50/90 backdrop-blur-xl flex items-center justify-center shrink-0">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-8 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 font-extrabold text-xs sm:text-sm border border-slate-300 shadow-2xs transition-all cursor-pointer active:scale-95 min-w-[120px] text-center"
                >
                  {isAr ? 'إغلاق' : 'Close'}
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
