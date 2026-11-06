import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Scale,
  Briefcase,
  Heart,
  Calendar,
  MessageSquare,
  Eye,
  Phone,
  Mail,
  MapPin,
  Share2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Check,
  Copy,
  Layers,
  GraduationCap,
  Megaphone,
  BookOpen,
  Globe,
  Tv,
  Users,
  Building2,
  TrendingUp,
  Landmark,
  X
} from 'lucide-react';

export const elearningCategories = [
  {
    id: 'all',
    labelAr: 'جميع التخصصات (19)',
    labelEn: 'All Programs (19)',
    icon: Layers
  },
  {
    id: 'business',
    labelAr: 'الإدارة والعلوم المالية (9)',
    labelEn: 'Management & Finance (9)',
    icon: Briefcase
  },
  {
    id: 'humanities',
    labelAr: 'العلوم الإنسانية والشرعية (7)',
    labelEn: 'Humanities & Sharia (7)',
    icon: BookOpen
  },
  {
    id: 'media',
    labelAr: 'الإعلام (3)',
    labelEn: 'Media (3)',
    icon: Tv
  }
];

const createProgramAd = ({
  id,
  type,
  groupAr,
  groupEn,
  majorAr,
  majorEn,
  tagEn,
  subtitleAr,
  subtitleEn,
  descAr,
  descEn,
  views = '1,650'
}) => ({
  id,
  type,
  groupAr,
  groupEn,
  category: `التعليم عن بُعد • ${groupAr}`,
  categoryEn: `Distance Learning • ${groupEn}`,
  date: 'أكتوبر 2026',
  dateEn: 'October 2026',
  views,
  comments: '0',
  title: `تعلن جامعة العلوم والتكنولوجيا عن فتح باب التسجيل في بكالوريوس ${majorAr} (عن بُعد)`,
  titleEn: `UST Announces Admission for Online Bachelor of ${majorEn} (Distance Learning)`,
  excerpt: descAr,
  excerptEn: descEn,
  poster: {
    badge: 'سجّل الآن',
    badgeEn: 'Register Now',
    year: '2026 / 2027',
    degree: 'بكالوريوس عن بُعد',
    degreeEn: 'Online Bachelor',
    major: majorAr,
    majorEn,
    tagEn,
    subtitle: subtitleAr,
    subtitleEn,
    deanship: 'عمادة التعليم الإلكتروني',
    deanshipEn: 'Deanship of E-Learning',
    slogan: 'The Road to a Better Future | الطريق إلى مستقبل أفضل',
    sloganEn: 'The Road to a Better Future',
    accentColor: '#0284c7',
    themeBg: 'from-[#0b2545] via-[#1e3a8a] to-[#0b2545]',
    phone: '777761641',
    website: 'www.ust.edu.ye'
  },
  formattedText: [
    `🎓 برنامج بكالوريوس ${majorAr} بنظام التعليم الإلكتروني والتعليم عن بُعد`,
    descAr,
    '📞 للتسجيل والاستفسار: 777761641 | www.ust.edu.ye',
    '#عمادة_التعليم_الإلكتروني_والتعليم_عن_بعد',
    '#جامعة_العلوم_والتكنولوجيا'
  ],
  formattedTextEn: [
    `🎓 Online Bachelor of ${majorEn} (Distance Learning Program)`,
    descEn,
    '📞 Inquiries & Admissions: 777761641 | www.ust.edu.ye',
    '#Deanship_of_ELearning',
    '#University_of_Science_and_Technology'
  ],
  highlights: [
    'دراسة مرنة عن بُعد من أي مكان في العالم عبر أحدث المنصات والفصول الافتراضية',
    'هيئة تدريسية متخصصة ومناهج أكاديمية حديثة معتمدة محلياً ودولياً',
    'شهادة بكالوريوس رسمية ومعتمدة ومطابقة لشهادات الانتظام بالجامعة',
    'مراكز امتحانية وتنسيقية متعددة لخدمة الطلاب داخل اليمن ودول الاغتراب'
  ],
  highlightsEn: [
    'Flexible distance learning accessible globally via modern interactive virtual platforms',
    'Distinguished faculty with accredited contemporary academic curricula',
    'Official accredited bachelor degree fully identical to on-campus university degrees',
    'Multiple examination and coordination centers serving students in Yemen and abroad'
  ],
  applyUrl: '/admission'
});

export const elearningAnnouncementsData = [
  // =========================================================================
  // أولاً: الإدارة والعلوم المالية (9 تخصصات)
  // =========================================================================
  createProgramAd({
    id: 'business-admin',
    type: 'business',
    groupAr: 'الإدارة والعلوم المالية',
    groupEn: 'Management & Financial Sciences',
    majorAr: 'إدارة الأعمال',
    majorEn: 'Business Administration',
    tagEn: 'BUSINESS ADMINISTRATION',
    subtitleAr: 'قيادة المؤسسات والتخطيط الاستراتيجي الحديث',
    subtitleEn: 'Corporate Leadership & Strategic Planning',
    descAr: 'برنامج أكاديمي متكامل يؤهل الطلبة في مجالات القيادة الإدارية، التخطيط الاستراتيجي، إدارة العمليات والمشاريع، وريادة الأعمال لبناء مستقبل مهني متميز.',
    descEn: 'A comprehensive program qualifying students in executive leadership, strategic planning, operations management, and entrepreneurship.'
  }),
  createProgramAd({
    id: 'hr-management',
    type: 'business',
    groupAr: 'الإدارة والعلوم المالية',
    groupEn: 'Management & Financial Sciences',
    majorAr: 'إدارة الموارد البشرية',
    majorEn: 'Human Resource Management',
    tagEn: 'HUMAN RESOURCES (HR)',
    subtitleAr: 'تطوير الكفاءات وإدارة رأس المال البشري',
    subtitleEn: 'Talent Development & Human Capital',
    descAr: 'يُعنى بتأهيل كوادر متخصصة في استقطاب وتنمية المواهب، تقييم الأداء، السلوك التنظيمي، وإدارة الموارد البشرية وفق أحدث الممارسات المؤسسية.',
    descEn: 'Qualifies specialists in talent acquisition, performance management, organizational behavior, and modern HR strategies.'
  }),
  createProgramAd({
    id: 'hospital-management',
    type: 'business',
    groupAr: 'الإدارة والعلوم المالية',
    groupEn: 'Management & Financial Sciences',
    majorAr: 'إدارة المستشفيات',
    majorEn: 'Hospital & Healthcare Management',
    tagEn: 'HOSPITAL MANAGEMENT',
    subtitleAr: 'إدارة المنشآت الصحية وجودة الرعاية الطبية',
    subtitleEn: 'Healthcare Facilities & Quality Administration',
    descAr: 'تخصص نوعي يجمع بين العلوم الإدارية والقطاع الصحي لتأهيل قيادات قادرة على إدارة المستشفيات والمراكز الطبية وتطبيق معايير الجودة الصحية.',
    descEn: 'Combines business administration with healthcare systems to prepare leaders capable of managing hospitals and medical centers.'
  }),
  createProgramAd({
    id: 'marketing-production',
    type: 'business',
    groupAr: 'الإدارة والعلوم المالية',
    groupEn: 'Management & Financial Sciences',
    majorAr: 'التسويق وإدارة الإنتاج',
    majorEn: 'Marketing & Production Management',
    tagEn: 'MARKETING & PRODUCTION',
    subtitleAr: 'استراتيجيات الأسواق وإدارة العمليات الإنتاجية',
    subtitleEn: 'Market Strategies & Production Operations',
    descAr: 'يركز على دراسة الأسواق وسلوك المستهلك، وإدارة سلاسل الإمداد والعمليات الإنتاجية والجودة الشاملة لتعزيز تنافسية الشركات.',
    descEn: 'Focuses on market analysis, consumer behavior, supply chain operations, production planning, and total quality management.'
  }),
  createProgramAd({
    id: 'intl-business',
    type: 'business',
    groupAr: 'الإدارة والعلوم المالية',
    groupEn: 'Management & Financial Sciences',
    majorAr: 'إدارة أعمال دولية',
    majorEn: 'International Business Administration',
    tagEn: 'GLOBAL LEADERSHIP',
    subtitleAr: 'اكتسب مهارات تؤهلك للمنافسة في سوق العمل العالمي',
    subtitleEn: 'Skills Qualifying You for the Global Market',
    descAr: 'احصل على بكالوريوس إدارة أعمال دولية عبر التعليم الإلكتروني، واكتسب المهارات القيادية والإدارية الحديثة في التجارة العالمية والشركات متعددة الجنسيات.',
    descEn: 'Earn an online Bachelor of International Business Administration and master modern leadership skills in global trade and multinational firms.'
  }),
  createProgramAd({
    id: 'accounting-dl',
    type: 'business',
    groupAr: 'الإدارة والعلوم المالية',
    groupEn: 'Management & Financial Sciences',
    majorAr: 'المحاسبة',
    majorEn: 'Accounting',
    tagEn: 'ACCOUNTING & AUDITING',
    subtitleAr: 'إعداد القوائم المالية والمراجعة والمعايير الدولية',
    subtitleEn: 'Financial Reporting, Auditing & IFRS',
    descAr: 'إعداد محاسبين ومدققين ماليين متمكنين من معايير المحاسبة الدولية (IFRS)، التدقيق المالي، محاسبة التكاليف، والنظم المحاسبية الحديثة.',
    descEn: 'Prepares accountants and financial auditors proficient in IFRS standards, financial auditing, cost accounting, and modern accounting systems.'
  }),
  createProgramAd({
    id: 'banking-finance-dl',
    type: 'business',
    groupAr: 'الإدارة والعلوم المالية',
    groupEn: 'Management & Financial Sciences',
    majorAr: 'العلوم المالية والمصرفية',
    majorEn: 'Banking & Financial Sciences',
    tagEn: 'BANKING & FINANCE',
    subtitleAr: 'العمليات المصرفية والاستثمار والأسواق المالية',
    subtitleEn: 'Banking Operations, Investment & Markets',
    descAr: 'تأهيل علمي ومهني في إدارة المصارف والبنوك الإسلامية والتجارية، التحليل المالي، إدارة المحافظ الاستثمارية، وتقييم المخاطر.',
    descEn: 'Academic and professional training in Islamic and commercial banking, financial analysis, investment portfolios, and risk management.'
  }),
  createProgramAd({
    id: 'digital-marketing-dl',
    type: 'business',
    groupAr: 'الإدارة والعلوم المالية',
    groupEn: 'Management & Financial Sciences',
    majorAr: 'التسويق الرقمي',
    majorEn: 'Digital Marketing',
    tagEn: 'DIGITAL MARKETING',
    subtitleAr: 'الحملات الرقمية والتجارة الإلكترونية ونمو العلامات',
    subtitleEn: 'Digital Campaigns, E-Commerce & Branding',
    descAr: 'برنامج عصري يركز على استراتيجيات التسويق عبر المنصات الرقمية، تحسين محركات البحث (SEO)، تحليل البيانات التسويقية، وإدارة العلامات التجارية.',
    descEn: 'A modern program focusing on digital marketing strategies, SEO, social media analytics, e-commerce growth, and brand management.'
  }),
  createProgramAd({
    id: 'intl-relations-diplomacy',
    type: 'business',
    groupAr: 'الإدارة والعلوم المالية',
    groupEn: 'Management & Financial Sciences',
    majorAr: 'العلاقات الدولية والدبلوماسية',
    majorEn: 'International Relations & Diplomacy',
    tagEn: 'DIPLOMACY & INTL RELATIONS',
    subtitleAr: 'العمل الدبلوماسي والمنظمات والشؤون الدولية',
    subtitleEn: 'Diplomatic Affairs & International Organizations',
    descAr: 'يؤهل الكوادر للعمل في السلك الدبلوماسي، المنظمات الدولية والإقليمية، ومراكز الدراسات الاستراتيجية وفهم السياسات والعلاقات الدولية.',
    descEn: 'Qualifies graduates for careers in diplomacy, international and regional organizations, strategic think tanks, and global affairs.'
  }),

  // =========================================================================
  // ثانياً: العلوم الإنسانية والشرعية (7 تخصصات)
  // =========================================================================
  createProgramAd({
    id: 'islamic-studies-dl',
    type: 'humanities',
    groupAr: 'العلوم الإنسانية والشرعية',
    groupEn: 'Humanities & Islamic Sciences',
    majorAr: 'الدراسات الإسلامية',
    majorEn: 'Islamic Studies',
    tagEn: 'ISLAMIC STUDIES',
    subtitleAr: 'تأصيل شرعي وفكر وسطي مستنير',
    subtitleEn: 'Authentic Scholarship & Moderate Thought',
    descAr: 'دراسة معمقة لعلوم الشريعة، الفقه المقارن، الحديث، والعقيدة بمنهجية علمية وسطية تجمع بين الأصالة والمعاصرة.',
    descEn: 'In-depth study of Islamic jurisprudence, Hadith, creed, and contemporary Islamic thought with a balanced academic methodology.'
  }),
  createProgramAd({
    id: 'quranic-sciences-dl',
    type: 'humanities',
    groupAr: 'العلوم الإنسانية والشرعية',
    groupEn: 'Humanities & Islamic Sciences',
    majorAr: 'علوم القرآن',
    majorEn: 'Quranic Sciences',
    tagEn: 'QURANIC SCIENCES',
    subtitleAr: 'التفسير والقراءات وعلوم القرآن الكريم',
    subtitleEn: 'Exegesis, Recitations & Quranic Studies',
    descAr: 'برنامج متخصص في علوم القرآن الكريم، أصول التفسير، القراءات، والإعجاز القرآني لإعداد باحثين ومعلمين متقنين.',
    descEn: 'Specialized program in Quranic sciences, principles of exegesis (Tafsir), recitations, and Quranic research.'
  }),
  createProgramAd({
    id: 'arabic-language-dl',
    type: 'humanities',
    groupAr: 'العلوم الإنسانية والشرعية',
    groupEn: 'Humanities & Islamic Sciences',
    majorAr: 'اللغة العربية',
    majorEn: 'Arabic Language & Literature',
    tagEn: 'ARABIC LANGUAGE',
    subtitleAr: 'النحو والأدب والبلاغة واللسانيات العربية',
    subtitleEn: 'Grammar, Literature, Rhetoric & Linguistics',
    descAr: 'إتقان علوم اللغة العربية وآدابها، النحو والصرف، البلاغة والنقد الأدبي، والتدقيق اللغوي والكتابة الإبداعية.',
    descEn: 'Mastery of Arabic grammar, morphology, rhetoric, literary criticism, linguistic proofreading, and academic writing.'
  }),
  createProgramAd({
    id: 'sharia-law',
    type: 'law',
    groupAr: 'العلوم الإنسانية والشرعية',
    groupEn: 'Humanities & Islamic Sciences',
    majorAr: 'الشريعة والقانون / الحقوق',
    majorEn: 'Sharia & Law / Law',
    tagEn: 'JUSTICE & LAW',
    subtitleAr: 'معرفة قانونية وشرعية ومستقبل مهني واعد',
    subtitleEn: 'Legal Knowledge & Promising Career',
    descAr: 'انضم لبرنامج بكالوريوس الشريعة والقانون / الحقوق عن بُعد، واكتسب الخبرة القانونية والشرعية التي تؤهلك للتميز في ميادين المحاماة والقضاء والاستشارات القانونية.',
    descEn: 'Join our online Bachelor of Sharia & Law program and build the legal expertise needed to excel in law practice, judiciary, and legal consultancy.'
  }),
  createProgramAd({
    id: 'history-dl',
    type: 'humanities',
    groupAr: 'العلوم الإنسانية والشرعية',
    groupEn: 'Humanities & Islamic Sciences',
    majorAr: 'التاريخ',
    majorEn: 'History & Civilization',
    tagEn: 'HISTORY & HERITAGE',
    subtitleAr: 'دراسة التاريخ والحضارات والبحث التاريخي',
    subtitleEn: 'Historical Studies & Civilizations',
    descAr: 'دراسة الحقب التاريخية والحضارات الإنسانية والإسلامية والحديثة، ومناهج البحث والتوثيق التاريخي وتحليل الأحداث.',
    descEn: 'Comprehensive study of Islamic, modern, and world history, historical documentation methodologies, and civilization studies.'
  }),
  createProgramAd({
    id: 'psychology-counseling',
    type: 'psychology',
    groupAr: 'العلوم الإنسانية والشرعية',
    groupEn: 'Humanities & Islamic Sciences',
    majorAr: 'علم النفس',
    majorEn: 'Psychology & Counseling',
    tagEn: 'PSYCHOLOGY & COUNSELING',
    subtitleAr: 'تأهيل أكاديمي ومهني رائد في الاستشارات والدعم النفسي',
    subtitleEn: 'Academic & Professional Training in Psychology',
    descAr: 'تأهيل علمي ومهني في دراسة السلوك الإنساني، الصحة النفسية، القياس النفسي، والإرشاد النفسي والتربوي والأسري.',
    descEn: 'Academic and professional qualification in human behavior, mental health assessment, psychometrics, and counseling.'
  }),
  createProgramAd({
    id: 'sociology-dl',
    type: 'humanities',
    groupAr: 'العلوم الإنسانية والشرعية',
    groupEn: 'Humanities & Islamic Sciences',
    majorAr: 'علم الاجتماع',
    majorEn: 'Sociology & Social Work',
    tagEn: 'SOCIOLOGY & DEVELOPMENT',
    subtitleAr: 'تحليل الظواهر الاجتماعية والتنمية المجتمعية',
    subtitleEn: 'Social Analysis & Community Development',
    descAr: 'يركز على دراسة البنى والظواهر الاجتماعية، التخطيط الاجتماعي، وتصميم وإدارة المبادرات التنموية في المنظمات والمؤسسات المجتمعية.',
    descEn: 'Focuses on social structures, community development planning, social research, and managing humanitarian and developmental programs.'
  }),

  // =========================================================================
  // ثالثاً: الإعلام (3 تخصصات)
  // =========================================================================
  createProgramAd({
    id: 'media-pr',
    type: 'media',
    groupAr: 'الإعلام',
    groupEn: 'Media & Communication',
    majorAr: 'إعلام - علاقات عامة',
    majorEn: 'Media - Public Relations',
    tagEn: 'PUBLIC RELATIONS (PR)',
    subtitleAr: 'الاتصال المؤسسي وإدارة السمعة والحملات الإعلامية',
    subtitleEn: 'Corporate Communication & Reputation Management',
    descAr: 'تأهيل أخصائيي علاقات عامة واتصال مؤسسي قادرين على بناء الصورة الذهنية للمؤسسات، إدارة الأزمات، وتنظيم الفعاليات والحملات الإعلانية.',
    descEn: 'Qualifies PR and corporate communication specialists in brand image building, crisis communication, and media campaign management.'
  }),
  createProgramAd({
    id: 'media-radio-tv',
    type: 'media',
    groupAr: 'الإعلام',
    groupEn: 'Media & Communication',
    majorAr: 'إعلام - إذاعة وتلفزيون',
    majorEn: 'Media - Radio & Television',
    tagEn: 'RADIO & TELEVISION',
    subtitleAr: 'الإنتاج الإذاعي والتلفزيوني والإعلام المرئي والمسموع',
    subtitleEn: 'Broadcast Production & Visual Media',
    descAr: 'إعداد كوادر إعلامية محترفة في التقديم، الإعداد، الإخراج، والإنتاج الإذاعي والتلفزيوني وصناعة المحتوى الرقمي المرئي.',
    descEn: 'Prepares media professionals in broadcasting, scriptwriting, directing, radio/TV production, and digital video storytelling.'
  }),
  createProgramAd({
    id: 'media-journalism',
    type: 'media',
    groupAr: 'الإعلام',
    groupEn: 'Media & Communication',
    majorAr: 'إعلام - صحافة',
    majorEn: 'Media - Journalism',
    tagEn: 'DIGITAL JOURNALISM',
    subtitleAr: 'الصحافة الحديثة والتحرير الإخباري والاستقصائي',
    subtitleEn: 'Modern Journalism & News Reporting',
    descAr: 'تأهيل صحفيين متميزين في التحرير الصحفي، الصحافة الرقمية والاستقصائية، صياغة الأخبار والتقارير، وإدارة المواقع والمنصات الإخبارية.',
    descEn: 'Trains journalists in news editing, digital and investigative journalism, multimedia reporting, and managing online news platforms.'
  })
];

/**
 * Authentic High-Fidelity Poster Component matching ust.edu.ye screenshots
 */
export function AnnouncementPoster({ ad, isAr = true }) {
  const p = ad.poster;

  const renderTypeIcon = () => {
    if (ad.type === 'law') return <Scale className="w-5 h-5 text-amber-600" />;
    if (ad.type === 'business') return <Briefcase className="w-5 h-5 text-teal-600" />;
    if (ad.type === 'media') return <Tv className="w-5 h-5 text-indigo-600" />;
    if (ad.type === 'psychology') return <GraduationCap className="w-5 h-5 text-sky-600" />;
    return <BookOpen className="w-5 h-5 text-sky-700" />;
  };

  return (
    <div
      className="relative w-full rounded-[28px] overflow-hidden border-2 border-white/80 hover:border-white shadow-md bg-white/75 backdrop-blur-md select-none transition-all duration-300 max-w-[270px] mx-auto"
    >
      {/* Top Header of Poster */}
      <div className="relative bg-slate-50/80 px-3 py-1.5 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-1">
          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[9px] font-black px-2 py-0.5 rounded-full shadow-2xs">
            {isAr ? p.badge : p.badgeEn}
          </span>
          <span className="text-[9px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-full">
            {p.year}
          </span>
        </div>

        {/* University Crest Mark */}
        <div className="flex items-center gap-1">
          <span className="text-[8px] font-bold text-slate-500 block leading-none">
            UST
          </span>
          <div className="w-6 h-6 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center p-0.5">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Main Stadium Oval Graphic Frame (Light Frosted Crystal) */}
      <div className="p-2.5 bg-gradient-to-b from-slate-50/60 to-white flex flex-col items-center">
        <div
          className="relative w-full h-24 rounded-[20px] overflow-hidden bg-gradient-to-br from-white/95 via-sky-50/60 to-slate-50/90 shadow-xs flex flex-col items-center justify-center p-2 text-center border border-sky-100/80"
        >
          {/* Subtle Ambient Rings & Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.06)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center justify-center mb-1 group-hover:scale-105 transition-transform">
              {renderTypeIcon()}
            </div>
            <span className="text-[8.5px] text-slate-700 font-extrabold uppercase tracking-wider bg-white/90 px-2.5 py-0.5 rounded-full border border-slate-200/70 shadow-2xs">
              {p.tagEn || 'DISTANCE LEARNING'}
            </span>
          </div>

          {/* Oval Border Overlay */}
          <div className="absolute inset-1 border border-sky-100/60 rounded-[18px] pointer-events-none" />
        </div>

        {/* Degree & Major Typography on Poster */}
        <div className="mt-2 text-center w-full">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
            {isAr ? p.degree : (p.degreeEn || 'Online Bachelor')}
          </span>
          <h4 className="text-sm font-black text-slate-900 tracking-tight leading-tight mt-0.5">
            {isAr ? p.major : p.majorEn}
          </h4>
          <p className="text-[9.5px] font-semibold text-slate-500 mt-0.5 max-w-[95%] mx-auto line-clamp-1">
            {isAr ? p.subtitle : p.subtitleEn}
          </p>
        </div>

        {/* Deanship Pill */}
        <div className="mt-1.5">
          <span className="inline-block bg-slate-100/90 border border-slate-200/80 text-slate-600 text-[9px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
            {isAr ? p.deanship : p.deanshipEn}
          </span>
        </div>

        {/* Motto line */}
        <div className="mt-1.5 text-[8px] font-bold text-slate-400 border-t border-slate-100 pt-1 w-full text-center">
          {isAr ? p.slogan : (p.sloganEn || p.slogan)}
        </div>
      </div>
    </div>
  );
}

/**
 * Official University Contact Footer Box (matching Screenshot 4 from ust.edu.ye)
 */
export function USTOfficialContactFooter({ isAr = true }) {
  return (
    <div className="mt-8 rounded-2xl bg-[#0c4a6e] text-white p-5 sm:p-7 shadow-xl border border-sky-600/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right" dir={isAr ? 'rtl' : 'ltr'}>
        {/* Column 1: العنوان */}
        <div className="space-y-1.5 border-b md:border-b-0 md:border-l md:border-sky-500/30 pb-4 md:pb-0 md:pl-4">
          <h5 className="text-sm font-black text-sky-200 flex items-center justify-center md:justify-start gap-1.5">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{isAr ? 'العنوان' : 'Address'}</span>
          </h5>
          <p className="text-xs font-bold text-white/90 leading-relaxed">
            {isAr ? 'شارع الستين جولة مذبح - جامعة العلوم والتكنولوجيا' : 'Sixty Meter Road, Madhbah Roundabout - UST'}
          </p>
          <p className="text-[11px] text-sky-200/80 font-mono">
            {isAr ? 'ص.ب: (15201 – 13064)' : 'P.O. Box: (15201 – 13064)'}
          </p>
          <p className="text-xs font-bold text-sky-100">
            {isAr ? 'صنعاء – الجمهورية اليمنية' : 'Sana\'a - Republic of Yemen'}
          </p>
        </div>

        {/* Column 2: التلفون */}
        <div className="space-y-1.5 border-b md:border-b-0 md:border-l md:border-sky-500/30 pb-4 md:pb-0 md:pl-4">
          <h5 className="text-sm font-black text-sky-200 flex items-center justify-center md:justify-start gap-1.5">
            <Phone className="w-4 h-4 text-accent" />
            <span>{isAr ? 'التلفون' : 'Telephone'}</span>
          </h5>
          <p className="text-[11px] text-sky-100 font-mono">
            {isAr ? 'فاكس: (00967 1) 530815/530630' : 'Fax: +967 1 530815 / 530630'}
          </p>
          <p className="text-xs font-black text-white font-mono">
            {isAr ? 'موبايل: 777761641' : 'Mobile: +967 777761641'}
          </p>
          <p className="text-xs font-black text-white font-mono">
            {isAr ? 'موبايل: 716000700' : 'Mobile: +967 716000700'}
          </p>
        </div>

        {/* Column 3: الايميل */}
        <div className="space-y-1.5 flex flex-col justify-center">
          <h5 className="text-sm font-black text-sky-200 flex items-center justify-center md:justify-start gap-1.5">
            <Mail className="w-4 h-4 text-accent" />
            <span>{isAr ? 'الايميل' : 'Email'}</span>
          </h5>
          <p className="text-xs font-bold text-white font-mono">
            Email: info@ust.edu.ye
          </p>
          <p className="text-[11px] text-sky-200/80 font-mono">
            www.ust.edu.ye
          </p>
        </div>
      </div>

      {/* Copyright line matching Screenshot 4 */}
      <div className="mt-5 pt-4 border-t border-sky-500/30 text-center text-[10px] text-sky-200/70 font-sans flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>University of Science and Technology. All Rights Reserved 2026–1994 ©</span>
        <div className="flex items-center gap-3">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Main Interactive Component:
 * Can render either the 3-Cards Announcements Grid (Screenshot 1)
 * OR the full single announcement view (Screenshots 2 & 3 & 4)
 */
export default function ElearningAnnouncementsModal({
  isAr = true,
  onClose,
  initialAdId = null
}) {
  const [selectedAdId, setSelectedAdId] = useState(initialAdId);
  const [activeCategory, setActiveCategory] = useState('all');

  const selectedAd = elearningAnnouncementsData.find((a) => a.id === selectedAdId);

  const filteredPrograms = elearningAnnouncementsData.filter((ad) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'business') return ad.groupAr === 'الإدارة والعلوم المالية';
    if (activeCategory === 'humanities') return ad.groupAr === 'العلوم الإنسانية والشرعية';
    if (activeCategory === 'media') return ad.groupAr === 'الإعلام';
    return true;
  });

  const sections = [
    {
      id: 'business',
      titleAr: 'الإدارة والعلوم المالية',
      titleEn: 'Management & Financial Sciences',
      icon: Briefcase,
      items: elearningAnnouncementsData.filter((a) => a.groupAr === 'الإدارة والعلوم المالية')
    },
    {
      id: 'humanities',
      titleAr: 'العلوم الإنسانية والشرعية',
      titleEn: 'Humanities & Islamic Sciences',
      icon: BookOpen,
      items: elearningAnnouncementsData.filter((a) => a.groupAr === 'العلوم الإنسانية والشرعية')
    },
    {
      id: 'media',
      titleAr: 'الإعلام',
      titleEn: 'Media & Communication',
      icon: Tv,
      items: elearningAnnouncementsData.filter((a) => a.groupAr === 'الإعلام')
    }
  ];

  const renderCard = (ad) => {
    const p = ad.poster;

    return (
      <div
        key={ad.id}
        onClick={() => setSelectedAdId(ad.id)}
        className="group relative bg-white border border-slate-200/80 hover:border-sky-300 rounded-[32px] p-3 sm:p-3.5 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(2,132,199,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden select-none"
      >
        {/* Concentric Inner Outline Ring */}
        <div className="absolute inset-1.5 rounded-[26px] border border-slate-100 pointer-events-none group-hover:border-sky-100 transition-colors z-0" />

        {/* Card Top: Badges & Crest */}
        <div className="relative z-10 flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[9.5px] font-black px-2.5 py-0.5 rounded-full shadow-2xs">
              {isAr ? p.badge : p.badgeEn}
            </span>
            <span className="text-[9.5px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
              {p.year}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[8.5px] font-bold text-slate-500">UST</span>
            <div className="w-6 h-6 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center p-0.5">
              <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Stadium Capsule Graphic Box (Light Frosted Crystal) */}
        <div className="relative z-10 w-full h-22 sm:h-24 rounded-[24px] overflow-hidden bg-gradient-to-br from-white/95 via-sky-50/60 to-slate-50/90 shadow-xs flex flex-col items-center justify-center text-center border border-sky-100/80 mb-2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center px-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center justify-center mb-1 group-hover:scale-105 transition-transform">
              {ad.type === 'law' && <Scale className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-amber-600" />}
              {ad.type === 'business' && <Briefcase className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-teal-600" />}
              {ad.type === 'psychology' && <GraduationCap className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-sky-600" />}
              {ad.type === 'humanities' && <BookOpen className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-sky-700" />}
              {ad.type === 'media' && <Tv className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-indigo-600" />}
            </div>
            <span className="text-[8.5px] sm:text-[9px] text-slate-700 font-extrabold uppercase tracking-wider bg-white/90 px-2.5 py-0.5 rounded-full border border-slate-200/70 shadow-2xs truncate max-w-[190px]">
              {p.tagEn}
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="relative z-10 text-center flex-grow flex flex-col justify-center my-0.5" dir={isAr ? 'rtl' : 'ltr'}>
          <span className="text-[9.5px] font-bold text-slate-400 uppercase tracking-widest block">
            {isAr ? 'بكالوريوس عن بُعد' : 'Online Bachelor'}
          </span>
          <h4 className="text-sm font-black text-slate-900 tracking-tight leading-snug group-hover:text-primary transition-colors mt-0.5">
            {isAr ? p.major : p.majorEn}
          </h4>
          <p className="text-[10px] font-semibold text-slate-500 mt-0.5 line-clamp-1">
            {isAr ? p.subtitle : p.subtitleEn}
          </p>
        </div>

        {/* Card Footer: Deanship, More Button */}
        <div className="relative z-10 pt-2 border-t border-slate-100 flex items-center justify-between mt-2">
          <span className="text-[9px] sm:text-[9.5px] font-bold text-slate-600 bg-slate-100/90 border border-slate-200/80 px-2.5 py-0.5 rounded-full shadow-2xs">
            {isAr ? p.deanship : p.deanshipEn}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedAdId(ad.id);
            }}
            className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold transition-all flex items-center gap-1 shadow-2xs cursor-pointer active:scale-95"
          >
            <span>{isAr ? 'المزيد...' : 'Details'}</span>
            {isAr ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full max-h-[86vh] text-primary-dark flex flex-col select-none overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Pure White Glass Header */}
      <div className="relative p-4 sm:p-5 rounded-b-[24px] sm:rounded-b-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-white/95 backdrop-blur-xl border-b border-slate-200/80 text-slate-800 flex items-start justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 border-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden bg-white p-1">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase">
                {isAr ? 'عمادة التعليم الإلكتروني والتعليم عن بُعد' : 'DEANSHIP OF E-LEARNING & DISTANCE EDUCATION'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-800 border border-sky-200/80 text-[10px] font-black">
                {isAr ? 'تخصصات البكالوريوس والماجستير عن بُعد' : 'Online Bachelor & Master Programs'}
              </span>
            </div>
            <h3 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 leading-tight">
              {isAr ? 'الإعلانات الرسمية وبوابة القبول والتسجيل' : 'Official Announcements & Distance Learning Programs'}
            </h3>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 flex items-center justify-center transition-colors shrink-0 cursor-pointer active:scale-95 shadow-xs"
            title={isAr ? 'إغلاق' : 'Close'}
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>

      {/* Switcher Tabs */}
      <div className="px-4 sm:px-6 py-2.5 bg-white/75 border-b border-slate-200/70 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none shrink-0 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          {elearningCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedAdId === null && activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedAdId(null);
                  setActiveCategory(cat.id);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-200/75 via-white/85 to-sky-100/80 backdrop-blur-xl text-primary border border-white/95 shadow-[0_6px_16px_rgba(2,132,199,0.16),inset_0_1.5px_2px_rgba(255,255,255,1)]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-2xs'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-primary" />
                <span>{isAr ? cat.labelAr : cat.labelEn}</span>
              </button>
            );
          })}

          {selectedAd && (
            <span className="px-3 py-1.5 rounded-full text-xs font-black bg-sky-50 text-sky-800 border border-sky-300/80 flex items-center gap-1.5 whitespace-nowrap shadow-xs">
              <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
              <span>{isAr ? selectedAd.poster.major : selectedAd.poster.majorEn}</span>
            </span>
          )}
        </div>
      </div>

      {/* Main Scrollable Content Area */}
      <div className="p-3 sm:p-5 overflow-y-auto custom-scrollbar flex-1 overscroll-contain">
        <AnimatePresence mode="wait">
          {/* VIEW 1: GRID OF ALL 19 DISTANCE LEARNING BACHELOR PROGRAMS */}
          {selectedAdId === null ? (
            <motion.div
              key={`grid-${activeCategory}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              {/* Intro Overview Banner */}
              <div className="bg-white/75 backdrop-blur-md border border-sky-200/70 rounded-2xl p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs" dir={isAr ? 'rtl' : 'ltr'}>
                <div className="flex items-start sm:items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-sky-100/80 text-primary border border-sky-200 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs sm:text-[13px] font-bold text-slate-800 leading-relaxed">
                    {isAr
                      ? 'تطرح جامعة العلوم والتكنولوجيا عبر عمادة التعليم الإلكتروني والتعليم عن بُعد عدداً واسعاً من تخصصات البكالوريوس والماجستير المعتمدة.'
                      : 'UST offers a wide range of accredited online Bachelor\'s and Master\'s programs via the Deanship of E-Learning & Distance Education.'}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-slate-400 shrink-0 hidden md:inline">
                  {isAr ? 'انقر على أي تخصص لعرض التفاصيل الكاملة' : 'Click any program for full details'}
                </span>
              </div>

              {activeCategory === 'all' ? (
                <div className="space-y-6">
                  {sections.map((sec) => {
                    const SecIcon = sec.icon;
                    return (
                      <div key={sec.id} className="space-y-3">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-gradient-to-r from-sky-200/80 via-white/90 to-sky-100/85 border border-white flex items-center justify-center text-primary shadow-2xs">
                              <SecIcon className="w-3.5 h-3.5" />
                            </span>
                            <h4 className="text-sm sm:text-base font-black text-primary">
                              {isAr ? `تخصصات درجة البكالوريوس عن بُعد — ${sec.titleAr}:` : `Online Bachelor Programs — ${sec.titleEn}:`}
                            </h4>
                          </div>
                          <span className="text-[11px] font-extrabold text-primary bg-sky-50 border border-sky-200/70 px-2.5 py-0.5 rounded-full">
                            {isAr ? `${sec.items.length} تخصصات` : `${sec.items.length} Majors`}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 items-stretch">
                          {sec.items.map((ad) => renderCard(ad))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 items-stretch">
                  {filteredPrograms.map((ad) => renderCard(ad))}
                </div>
              )}
            </motion.div>
          ) : (
            /* VIEW 2: SINGLE PROGRAM FULL DETAIL */
            <motion.div
              key={selectedAd.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {/* Clean Lightweight Title Header */}
              <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-200 gap-2 flex-wrap" dir={isAr ? 'rtl' : 'ltr'}>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-black">
                    <Megaphone className="w-3 h-3 text-accent-dark" />
                    <span>{isAr ? selectedAd.category : selectedAd.categoryEn}</span>
                  </span>
                  <h3 className="text-xs sm:text-sm md:text-base font-black text-primary leading-tight">
                    {isAr ? selectedAd.title : selectedAd.titleEn}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedAdId(null)}
                  className="px-3 py-1 rounded-full bg-gradient-to-r from-sky-200/75 via-white/85 to-sky-100/80 text-primary border border-white text-[11px] font-black shadow-xs cursor-pointer flex items-center gap-1"
                >
                  {isAr ? <ArrowRight className="w-3 h-3" /> : <ArrowLeft className="w-3 h-3" />}
                  <span>{isAr ? 'عودة لقائمة التخصصات' : 'Back to Programs'}</span>
                </button>
              </div>

              {/* Main Content: Poster + Text Description */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-start">
                {/* Poster Display Column */}
                <div className="md:col-span-5 flex justify-center">
                  <AnnouncementPoster ad={selectedAd} isAr={isAr} />
                </div>

                {/* Formatted Text Description Column */}
                <div className={`md:col-span-7 space-y-2.5 flex flex-col justify-between ${isAr ? 'text-right' : 'text-left'}`} dir={isAr ? 'rtl' : 'ltr'}>
                  {/* Text card */}
                  <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-3 sm:p-3.5 shadow-2xs space-y-2">
                    <div className="text-xs sm:text-[13.5px] font-black text-primary leading-snug">
                      {isAr ? selectedAd.formattedText[0] : (selectedAd.formattedTextEn ? selectedAd.formattedTextEn[0] : selectedAd.formattedText[0])}
                    </div>

                    <p className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-relaxed">
                      {isAr ? selectedAd.formattedText[1] : (selectedAd.formattedTextEn ? selectedAd.formattedTextEn[1] : selectedAd.formattedText[1])}
                    </p>

                    <div className="p-2 px-3 rounded-xl bg-white/80 border border-primary/15 flex items-center gap-2 text-primary text-[11px] font-black font-mono">
                      <Phone className="w-3.5 h-3.5 text-accent-dark shrink-0" />
                      <span>{isAr ? selectedAd.formattedText[2] : (selectedAd.formattedTextEn ? selectedAd.formattedTextEn[2] : selectedAd.formattedText[2])}</span>
                    </div>

                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-1.5 text-[10px] font-black text-sky-700">
                      <span>{isAr ? selectedAd.formattedText[3] : (selectedAd.formattedTextEn ? selectedAd.formattedTextEn[3] : selectedAd.formattedText[3])}</span>
                      <span>•</span>
                      <span>{isAr ? selectedAd.formattedText[4] : (selectedAd.formattedTextEn ? selectedAd.formattedTextEn[4] : selectedAd.formattedText[4])}</span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div>
                    <h5 className="text-[10.5px] font-black text-primary uppercase tracking-wider mb-1.5">
                      {isAr ? 'مزايا ومعايير الدراسة عن بُعد:' : 'PROGRAM HIGHLIGHTS:'}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {(isAr ? selectedAd.highlights : (selectedAd.highlightsEn || selectedAd.highlights)).map((h, i) => (
                        <div
                          key={i}
                          className="bg-white/60 backdrop-blur-md border border-white/80 rounded-xl p-2 px-2.5 flex items-start gap-1.5 shadow-2xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-700 leading-snug">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fixed Bottom Close Footer */}
      <div className="p-3 sm:p-3.5 bg-white/85 backdrop-blur-md border-t border-slate-200/80 flex items-center justify-center shrink-0">
        <button
          onClick={() => {
            if (onClose) onClose();
          }}
          className="px-8 py-1.5 rounded-full border-2 border-slate-300 hover:border-slate-400 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all text-center cursor-pointer shadow-xs active:scale-95"
        >
          {isAr ? 'إغلاق' : 'Close'}
        </button>
      </div>
    </div>
  );
}
