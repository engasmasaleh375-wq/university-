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
  X
} from 'lucide-react';

export const elearningAnnouncementsData = [
  {
    id: 'sharia-law',
    type: 'law',
    category: 'اعلانات ، التسجيل',
    categoryEn: 'Announcements, Admissions',
    date: '11 أكتوبر, 2026',
    dateEn: 'October 11, 2026',
    views: '1,420',
    comments: '0',
    title: 'تعلن جامعة العلوم والتكنولوجيا عن فتح باب التسجيل في بكالوريوس الشريعة والقانون (عن بُعد)',
    titleEn: 'UST Announces Admission for Online Bachelor of Sharia and Law (Distance Learning)',
    excerpt: 'معرفة قانونية شاملة لمستقبل مهني واعد! انضم لبرنامج بكالوريوس شريعة وقانون عن بعد، واكتسب الخبرة القانونية والشرعية التي تؤهلك للتميز في ميادين المحاماة والاستشارات القانونية، للتسجيل والاستفسار: 777761641...',
    excerptEn: 'Comprehensive legal education for a promising future! Join our online Bachelor of Sharia & Law program and build the legal expertise needed to excel in law practice and consultancy. Inquiries: 777761641...',
    poster: {
      badge: 'سجّل الآن',
      badgeEn: 'Register Now',
      year: '2026 / 2027',
      degree: 'بكالوريوس',
      major: 'شريعة وقانون',
      majorEn: 'Sharia & Law',
      subtitle: 'معرفة قانونية ومستقبل مهني واعد',
      subtitleEn: 'Legal Knowledge & Promising Career',
      deanship: 'عمادة التعليم الإلكتروني',
      deanshipEn: 'Deanship of E-Learning',
      slogan: 'The Road to a Better Future | الطريق إلى مستقبل أفضل',
      accentColor: '#d97706',
      themeBg: 'from-[#0b2545] via-[#134074] to-[#0b2545]',
      phone: '777761641',
      website: 'www.ust.edu.ye'
    },
    formattedText: [
      '🎓 معرفة قانونية شاملة لمستقبل مهني واعد! ⚖️',
      'انضم لبرنامج بكالوريوس شريعة وقانون عن بُعد... واكتسب الخبرة القانونية والشرعية التي تؤهلك للتميز في ميادين المحاماة والاستشارات القانونية. 🏛️',
      '📞 للتسجيل والاستفسار: 777761641 | www.ust.edu.ye',
      '#عمادة_التعليم_الإلكتروني',
      '#جامعة_العلوم_والتكنولوجيا'
    ],
    highlights: [
      'دراسة مرنة عن بُعد من أي مكان في العالم عبر أحدث المنصات الافتراضية',
      'هيئة تدريسية متخصصة ومناهج فقهية وقانونية معاصرة معتمدة',
      'شهادة بكالوريوس رسمية ومعتمدة ومطابقة لشهادات الانتظام بالجامعة',
      'مراكز امتحانية وتنسيقية متعددة لخدمة الطلاب داخل اليمن ودول الاغتراب'
    ],
    applyUrl: '/admission'
  },
  {
    id: 'intl-business',
    type: 'business',
    category: 'اعلانات ، التسجيل',
    categoryEn: 'Announcements, Admissions',
    date: '10 أكتوبر, 2026',
    dateEn: 'October 10, 2026',
    views: '1,890',
    comments: '0',
    title: 'تعلن جامعة العلوم والتكنولوجيا عن إستمرار التسجيل في برنامج بكالوريوس إدارة الأعمال الدولية (عن بُعد)',
    titleEn: 'UST Announces Ongoing Registration for Online Bachelor of International Business Administration',
    excerpt: 'انطلق بنجاحك نحو سوق العمل العالمي! احصل على بكالوريوس إدارة أعمال دولية عبر التعليم الإلكتروني، واكتسب المهارات القيادية والإدارية الحديثة التي تجعلك منافساً قوياً في كبرى الشركات المحلية...',
    excerptEn: 'Launch your success into the global job market! Earn an online Bachelor of International Business and master modern executive leadership skills to compete in top regional and global firms.',
    poster: {
      badge: 'سجّل الآن',
      badgeEn: 'Register Now',
      year: '2026 / 2027',
      degree: 'بكالوريوس',
      major: 'إدارة أعمال دولية',
      majorEn: 'International Business Admin',
      subtitle: 'اكتسب مهارات تؤهلك للمنافسة في سوق العمل العالمي',
      subtitleEn: 'Skills Qualifying You for Global Market',
      deanship: 'عمادة التعليم الإلكتروني',
      deanshipEn: 'Deanship of E-Learning',
      slogan: 'The Road to a Better Future | الطريق إلى مستقبل أفضل',
      accentColor: '#0284c7',
      themeBg: 'from-[#0f172a] via-[#1e3a8a] to-[#0f172a]',
      phone: '777761641',
      website: 'www.ust.edu.ye'
    },
    formattedText: [
      '🚀 انطلق بنجاحك نحو سوق العمل العالمي! 🌐',
      'احصل على بكالوريوس إدارة أعمال دولية عبر التعليم الإلكتروني، واكتسب المهارات القيادية والإدارية الحديثة التي تجعلك منافساً قوياً في كبرى الشركات المحلية والإقليمية والدولية. 📈',
      '📞 للتسجيل والاستفسار: 777761641 | www.ust.edu.ye',
      '#عمادة_التعليم_الإلكتروني',
      '#جامعة_العلوم_والتكنولوجيا'
    ],
    highlights: [
      'تخصص نوعي باللغة الإنجليزية والعربية يواكب متطلبات الاقتصاد الرقمي والتجارة العالمية',
      'فصول افتراضية ومحاضرات تفاعلية مسجلة متاحة 24/7 مع كبار الخبراء والأكاديميين',
      'دراسات حالة وتدريب عملي على نماذج الشركات متعددة الجنسيات',
      'تسهيلات في السداد وأقساط ميسرة لكافة الطلاب داخل وخارج الوطن'
    ],
    applyUrl: '/admission'
  },
  {
    id: 'psychology-counseling',
    type: 'psychology',
    category: 'اعلانات ، التسجيل',
    categoryEn: 'Announcements, Admissions',
    date: '10 أكتوبر, 2026',
    dateEn: 'October 10, 2026',
    views: '2,310',
    comments: '0',
    title: 'تعلن جامعة العلوم والتكنولوجيا عن فتح باب التسجيل في بكالوريوس علم النفس والإرشاد (عن بُعد)',
    titleEn: 'UST Announces Admission for Online Bachelor of Psychology and Counseling (Distance Learning)',
    excerpt: 'تأهيل أكاديمي ومهني رائد في الاستشارات والدعم النفسي! انضم لبرنامج بكالوريوس علم النفس والإرشاد عن بُعد، واكتسب الخبرة التي تؤهلك للتميز في ميادين الإرشاد النفسي والتربوي والمؤسسي...',
    excerptEn: 'Specialized education in psychological counseling and mental health! Join our online Bachelor of Psychology & Counseling program and build modern behavioral and counseling competencies.',
    poster: {
      badge: 'سجّل الآن',
      badgeEn: 'Register Now',
      year: '2027 / 2026',
      degree: 'بكالوريوس',
      major: 'علم النفس والإرشاد',
      majorEn: 'Psychology & Counseling',
      subtitle: 'تأهيل أكاديمي ومهني رائد في الاستشارات والدعم النفسي',
      subtitleEn: 'Academic & Professional Training in Counseling',
      deanship: 'عمادة التعليم الإلكتروني',
      deanshipEn: 'Deanship of E-Learning',
      slogan: 'The Road to a Better Future | الطريق إلى مستقبل أفضل',
      accentColor: '#0284c7',
      themeBg: 'from-[#0b2545] via-[#1e3a8a] to-[#0b2545]',
      phone: '777761641',
      website: 'www.ust.edu.ye'
    },
    formattedText: [
      '🎓 تأهيل رائد في الاستشارات والدعم النفسي! 🧠',
      'انضم لبرنامج بكالوريوس علم النفس والإرشاد عن بُعد... واكتسب الخبرة العلمية والتطبيقية التي تؤهلك للتميز في ميادين الإرشاد النفسي والتربوي والمؤسسي. 🏛️',
      '📞 للتسجيل والاستفسار: 777761641 | www.ust.edu.ye',
      '#عمادة_التعليم_الإلكتروني',
      '#جامعة_العلوم_والتكنولوجيا'
    ],
    highlights: [
      'دراسة مرنة عن بُعد من أي مكان في العالم عبر أحدث المنصات الافتراضية',
      'هيئة تدريسية متخصصة ومناهج معاصرة تجمع بين الأصالة والعلوم السلوكية الحديثة',
      'شهادة بكالوريوس رسمية ومعتمدة ومطابقة لشهادات الانتظام بالجامعة',
      'تأهيل تطبيقي واستشاري يفتح آفاق العمل في المراكز والمدارس والمستشفيات والمنظمات'
    ],
    applyUrl: '/admission'
  }
];

/**
 * Authentic High-Fidelity Poster Component matching ust.edu.ye screenshots
 */
export function AnnouncementPoster({ ad, isAr = true, isCompact = false }) {
  const p = ad.poster;

  // Distinct elegant badge color per announcement type
  const badgeGradient =
    ad.type === 'law'
      ? 'from-[#0369a1] to-[#0284c7]'
      : ad.type === 'business'
      ? 'from-[#1e40af] to-[#2563eb]'
      : 'from-[#0284c7] to-[#1e40af]';

  return (
    <div
      className="relative w-full rounded-[28px] overflow-hidden border-2 border-white/80 hover:border-white shadow-md bg-white/75 backdrop-blur-md select-none transition-all duration-300 max-w-[270px] mx-auto"
    >
      {/* Top Header of Poster */}
      <div className="relative bg-slate-50/80 px-3 py-1.5 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-1">
          <span className={`bg-gradient-to-r ${badgeGradient} text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-xs`}>
            {isAr ? p.badge : p.badgeEn}
          </span>
          <span className="text-[9px] font-bold text-slate-600 bg-slate-200/60 px-1.5 py-0.5 rounded-full">
            {p.year}
          </span>
        </div>

        {/* University Crest Mark */}
        <div className="flex items-center gap-1">
          <span className="text-[8px] font-bold text-primary block leading-none">
            UST
          </span>
          <div className="w-6 h-6 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center p-0.5">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Main Stadium Oval Graphic Frame */}
      <div className="p-2.5 bg-gradient-to-b from-slate-50/60 to-white flex flex-col items-center">
        <div
          className={`relative w-full h-24 rounded-[20px] overflow-hidden bg-gradient-to-br ${p.themeBg} shadow-inner flex flex-col items-center justify-center p-2 text-white text-center border border-white/80`}
        >
          {/* Subtle Ambient Rings & Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] pointer-events-none" />

          {/* Core Graphic Icon per type */}
          {ad.type === 'law' && (
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-center shadow-md mb-1 group-hover:scale-105 transition-transform">
                <Scale className="w-5 h-5 text-amber-300 drop-shadow-md" />
              </div>
              <span className="text-[8.5px] text-sky-100 font-extrabold uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                Justice & Jurisprudence
              </span>
            </div>
          )}

          {ad.type === 'business' && (
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-center shadow-md mb-1 group-hover:scale-105 transition-transform">
                <Briefcase className="w-5 h-5 text-cyan-300 drop-shadow-md" />
              </div>
              <span className="text-[8.5px] text-cyan-100 font-extrabold uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                Global Business
              </span>
            </div>
          )}

          {ad.type === 'psychology' && (
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-center shadow-md mb-1 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5 text-amber-300 drop-shadow-md" />
              </div>
              <span className="text-[8.5px] text-sky-100 font-extrabold uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                Psychology & Counseling
              </span>
            </div>
          )}

          {/* Oval Border Overlay */}
          <div className="absolute inset-1 border border-white/20 rounded-[18px] pointer-events-none" />
        </div>

        {/* Degree & Major Typography on Poster */}
        <div className="mt-2 text-center w-full">
          <span className="text-[9px] font-black text-sky-700 uppercase tracking-widest block">
            {isAr ? p.degree : 'Degree'}
          </span>
          <h4 className="text-sm font-black text-primary tracking-tight leading-tight mt-0.5">
            {isAr ? p.major : p.majorEn}
          </h4>
          <p className="text-[9.5px] font-bold text-slate-600 mt-0.5 max-w-[95%] mx-auto line-clamp-1">
            {isAr ? p.subtitle : p.subtitleEn}
          </p>
        </div>

        {/* Deanship Pill */}
        <div className="mt-1.5">
          <span className="inline-block bg-gradient-to-r from-[#072541] to-[#0c4a6e] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
            {isAr ? p.deanship : p.deanshipEn}
          </span>
        </div>

        {/* Motto line */}
        <div className="mt-1.5 text-[8px] font-bold text-slate-400 border-t border-slate-100 pt-1 w-full text-center">
          {p.slogan}
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
  const navigate = useNavigate();
  const [selectedAdId, setSelectedAdId] = useState(initialAdId);
  const [copied, setCopied] = useState(false);

  const selectedAd = elearningAnnouncementsData.find((a) => a.id === selectedAdId);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full text-primary-dark flex flex-col select-none overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Royal Curved Navy Header (Matching Faculties Modal) */}
      <div className="relative p-5 sm:p-6 rounded-b-[28px] sm:rounded-b-[36px] shadow-sm bg-gradient-to-r from-primary via-primary to-primary-dark text-white flex items-start justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/40 flex items-center justify-center shrink-0 shadow-lg overflow-hidden bg-slate-900 p-1">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-black tracking-widest text-accent uppercase">
                {isAr ? 'عمادة التعليم الإلكتروني والتعليم عن بُعد' : 'DEANSHIP OF E-LEARNING'}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
              {isAr ? 'الإعلانات الرسمية وبوابة القبول والتسجيل' : 'Official Announcements & E-Admissions'}
            </h3>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer active:scale-95"
            title={isAr ? 'إغلاق' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Switcher Tabs */}
      <div className="px-4 sm:px-6 py-2.5 bg-white/70 border-b border-primary/10 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none shrink-0 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          {/* Back to all button */}
          <button
            onClick={() => setSelectedAdId(null)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              selectedAdId === null
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-primary-dark hover:bg-slate-100 border border-primary/20'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isAr ? 'جميع الإعلانات (3)' : 'All Notices (3)'}</span>
          </button>

          {/* Quick tabs for each announcement */}
          {elearningAnnouncementsData.map((ad) => (
            <button
              key={ad.id}
              onClick={() => setSelectedAdId(ad.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                selectedAdId === ad.id
                  ? 'bg-secondary text-primary shadow-sm font-extrabold'
                  : 'bg-white text-primary-dark/80 hover:bg-slate-100 border border-primary/20'
              }`}
            >
              {ad.type === 'law' && <Scale className="w-3.5 h-3.5" />}
              {ad.type === 'business' && <Briefcase className="w-3.5 h-3.5" />}
              {ad.type === 'psychology' && <GraduationCap className="w-3.5 h-3.5" />}
              <span>{isAr ? ad.poster.major : ad.poster.majorEn}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-3 sm:p-4">
        <AnimatePresence mode="wait">
          {/* VIEW 1: GRID OF 3 ANNOUNCEMENT CARDS (Matching Screenshot 1 - Compact, Zero Scroll) */}
          {selectedAdId === null ? (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {/* Compact Section Subtitle Strip */}
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200" dir={isAr ? 'rtl' : 'ltr'}>
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-black">
                    <Megaphone className="w-3.5 h-3.5 text-accent" />
                    <span>{isAr ? 'عمادة التعليم الإلكتروني والمراكز النوعية' : 'E-Learning & Centers'}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-black text-primary">
                    {isAr ? 'أحدث الإعلانات الرسمية للجامعة' : 'Latest Official Notices'}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-slate-500 hidden sm:inline">
                  {isAr ? 'انقر على أي إعلان لعرض التفاصيل الكاملة' : 'Click any notice for details'}
                </span>
              </div>

              {/* 3 Compact Announcement Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch">
                {elearningAnnouncementsData.map((ad) => {
                  const p = ad.poster;
                  const badgeGradient =
                    ad.type === 'law'
                      ? 'from-[#0369a1] to-[#0284c7]'
                      : ad.type === 'business'
                      ? 'from-[#1e40af] to-[#2563eb]'
                      : 'from-[#0284c7] to-[#1e40af]';

                  return (
                    <div
                      key={ad.id}
                      onClick={() => setSelectedAdId(ad.id)}
                      className="group relative bg-white border-2 border-primary/15 hover:border-primary/50 rounded-[32px] p-3 sm:p-3.5 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden select-none"
                    >
                      {/* Concentric Inner Outline Ring */}
                      <div className="absolute inset-1.5 rounded-[26px] border border-primary/10 pointer-events-none group-hover:border-primary/25 transition-colors z-0" />

                      {/* Card Top: Badges & Crest */}
                      <div className="relative z-10 flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                        <div className="flex items-center gap-1.5">
                          <span className={`bg-gradient-to-r ${badgeGradient} text-white text-[9.5px] font-black px-2.5 py-0.5 rounded-full shadow-2xs`}>
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

                      {/* Stadium Capsule Graphic Box (Compact) */}
                      <div className={`relative z-10 w-full h-24 rounded-[24px] overflow-hidden bg-gradient-to-br ${p.themeBg} shadow-inner flex flex-col items-center justify-center text-white text-center border border-white/70 mb-2`}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] pointer-events-none" />
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-white/15 border border-white/30 backdrop-blur-xs flex items-center justify-center shadow-md mb-1 group-hover:scale-105 transition-transform">
                            {ad.type === 'law' && <Scale className="w-5 h-5 text-amber-300 drop-shadow-xs" />}
                            {ad.type === 'business' && <Briefcase className="w-5 h-5 text-cyan-300 drop-shadow-xs" />}
                            {ad.type === 'psychology' && <GraduationCap className="w-5 h-5 text-amber-300 drop-shadow-xs" />}
                          </div>
                          <span className="text-[9px] text-white/90 font-extrabold uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                            {ad.type === 'law' ? 'Justice & Law' : ad.type === 'business' ? 'Global Leadership' : 'Psychology & Counseling'}
                          </span>
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="relative z-10 text-center flex-grow flex flex-col justify-center my-0.5" dir={isAr ? 'rtl' : 'ltr'}>
                        <span className="text-[9.5px] font-black text-sky-700 uppercase tracking-widest block">
                          {isAr ? p.degree : 'Degree'}
                        </span>
                        <h4 className="text-sm font-black text-primary tracking-tight leading-snug group-hover:text-primary-dark transition-colors mt-0.5">
                          {isAr ? p.major : p.majorEn}
                        </h4>
                        <p className="text-[10px] font-semibold text-slate-500 mt-0.5 line-clamp-1">
                          {isAr ? p.subtitle : p.subtitleEn}
                        </p>
                      </div>

                      {/* Card Footer: Deanship, More Button & Date */}
                      <div className="relative z-10 pt-2 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <span className="text-[9.5px] font-black text-white bg-gradient-to-r from-[#072541] to-[#0c4a6e] px-2.5 py-0.5 rounded-full shadow-2xs">
                          {isAr ? p.deanship : p.deanshipEn}
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedAdId(ad.id);
                          }}
                          className="px-3 py-1 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-slate-700 text-[10px] font-bold transition-all flex items-center gap-1 shadow-2xs cursor-pointer active:scale-95"
                        >
                          <span>{isAr ? 'المزيد...' : 'Details'}</span>
                          {isAr ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Close Button for Grid View */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-center">
                <button
                  onClick={() => {
                    if (onClose) onClose();
                  }}
                  className="px-8 py-1.5 rounded-full border-2 border-slate-300 hover:border-slate-400 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all text-center cursor-pointer shadow-xs active:scale-95"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </motion.div>
          ) : (
            /* VIEW 2: SINGLE ANNOUNCEMENT FULL DETAIL (Compact, Zero Scroll, All Visible) */
            <motion.div
              key={selectedAd.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {/* Clean Lightweight Title Header */}
              <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-200" dir={isAr ? 'rtl' : 'ltr'}>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-black">
                    <Megaphone className="w-3 h-3 text-accent" />
                    <span>{isAr ? selectedAd.category : selectedAd.categoryEn}</span>
                  </span>
                  <h3 className="text-xs sm:text-sm md:text-base font-black text-primary leading-tight line-clamp-1">
                    {isAr ? selectedAd.title : selectedAd.titleEn}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold shrink-0">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>{isAr ? selectedAd.date : selectedAd.dateEn}</span>
                  </span>
                  <span>•</span>
                  <span>{selectedAd.views} {isAr ? 'مشاهدة' : 'Views'}</span>
                </div>
              </div>

              {/* Main Content: Poster + Text Description */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-start">
                {/* Poster Display Column */}
                <div className="md:col-span-5 flex justify-center">
                  <AnnouncementPoster ad={selectedAd} isAr={isAr} isCompact={true} />
                </div>

                {/* Formatted Text Description Column */}
                <div className="md:col-span-7 space-y-2 text-right flex flex-col justify-between" dir={isAr ? 'rtl' : 'ltr'}>
                  {/* Text card */}
                  <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-2.5 sm:p-3 shadow-2xs space-y-1.5">
                    <div className="text-xs sm:text-[13px] font-black text-primary leading-snug">
                      {selectedAd.formattedText[0]}
                    </div>

                    <p className="text-[10.5px] sm:text-[11px] font-semibold text-slate-700 leading-relaxed">
                      {selectedAd.formattedText[1]}
                    </p>

                    <div className="p-1.5 px-2.5 rounded-xl bg-white/80 border border-primary/15 flex items-center gap-2 text-primary text-[11px] font-black font-mono">
                      <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{selectedAd.formattedText[2]}</span>
                    </div>

                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-1.5 text-[9.5px] font-black text-sky-700">
                      <span>{selectedAd.formattedText[3]}</span>
                      <span>•</span>
                      <span>{selectedAd.formattedText[4]}</span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div>
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-wider mb-1">
                      {isAr ? 'مزايا ومعايير البرنامج:' : 'Program Highlights:'}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {selectedAd.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="bg-white/60 backdrop-blur-md border border-white/80 rounded-xl p-1.5 px-2 flex items-start gap-1.5 shadow-2xs"
                        >
                          <CheckCircle2 className="w-3 h-3 text-secondary shrink-0 mt-0.5" />
                          <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-700 leading-snug line-clamp-2">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions - Close Button Only */}
                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-end">
                    <button
                      onClick={() => {
                        if (onClose) onClose();
                      }}
                      className="w-full sm:w-auto px-8 py-1.5 rounded-full border-2 border-slate-300 hover:border-slate-400 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all text-center cursor-pointer shadow-xs active:scale-95"
                    >
                      {isAr ? 'إغلاق' : 'Close'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
