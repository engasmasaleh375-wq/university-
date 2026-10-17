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
  Sparkles,
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
    id: 'mental-health',
    type: 'psychology',
    category: 'مراكز نوعية ، خدمة المجتمع',
    categoryEn: 'Specialized Centers, Community Service',
    date: '10 أكتوبر, 2026',
    dateEn: 'October 10, 2026',
    views: '2,310',
    comments: '0',
    title: 'اليوم العالمي للصحة النفسية',
    titleEn: 'World Mental Health Day',
    excerpt: 'الصحة النفسية وعي، ورعاية، وإنسانية. الوعي بالصحة النفسية هو الخطوة الأولى نحو رعايتها، وطلب المساعدة شجاعة لا ضعف. فمن حق كل إنسان أن يُسمع، ويُفهم، ويُعامل بكرامة، بعيدًا عن أي أحكام...',
    excerptEn: 'Mental health is awareness, care, and humanity. Seeking support is courage, not weakness. Everyone deserves to be heard, understood, and treated with dignity without judgment.',
    poster: {
      badge: 'مركز الاستشارات النفسية',
      badgeEn: 'Psychological Guidance Center',
      year: '10 أكتوبر - 2026',
      degree: 'اليوم العالمي',
      major: 'للصحة النفسية',
      majorEn: 'WORLD MENTAL HEALTH DAY',
      subtitle: 'قسم أبحاث علم النفس والتربية - أصوات حقيقية، تغيير حقيقي',
      subtitleEn: 'Dept. of Psychology & Education Research',
      deanship: 'مركز الإرشاد والاستشارات النفسية',
      deanshipEn: 'Psychological Counseling Center',
      slogan: 'صحتك النفسية أولويتنا | Your Well-being Matters',
      accentColor: '#10b981',
      themeBg: 'from-[#064e3b] via-[#0284c7] to-[#042f2e]',
      phone: '777761641',
      website: 'www.ust.edu.ye'
    },
    formattedText: [
      '💚 الصحة النفسية وعي، ورعاية، وإنسانية. 🧠',
      'الوعي بالصحة النفسية هو الخطوة الأولى نحو رعايتها، وطلب المساعدة شجاعة لا ضعف. فمن حق كل إنسان أن يُسمع، ويُفهم، ويُعامل بكرامة، بعيدًا عن أي أحكام مسبقة.',
      'يقدم مركز الاستشارات النفسية والتربوية بجامعة العلوم والتكنولوجيا جلسات استشارية وورش توعوية مجانية لخدمة الطلبة والمجتمع.',
      '📞 للاستشارات والاستفسار: 777761641 | www.ust.edu.ye',
      '#اليوم_العالمي_للصحة_النفسية',
      '#جامعة_العلوم_والتكنولوجيا'
    ],
    highlights: [
      'جلسات إرشاد ودعم نفسي متخصصة بسرية وأمان تام على يد أخصائيين معتمدين',
      'ورش عمل دورية لتعزيز الصلابة النفسية وإدارة الضغوط الأكاديمية والمهنية',
      'مبادرات توعوية وشراكات مجتمعية لتعزيز الصحة النفسية الشاملة',
      'استشارات مجانية مخصصة لطلاب وطالبات الجامعة بمختلف المراحل الدراسية'
    ],
    applyUrl: '/admission'
  }
];

/**
 * Authentic High-Fidelity Poster Component matching ust.edu.ye screenshots
 */
export function AnnouncementPoster({ ad, isAr = true, isCompact = false }) {
  const p = ad.poster;

  return (
    <div
      className={`relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white select-none transition-transform duration-300 ${
        isCompact ? 'max-w-[340px] mx-auto' : 'max-w-md mx-auto shadow-xl'
      }`}
    >
      {/* Top Header of Poster */}
      <div className="relative bg-slate-50 px-4 pt-3 pb-2 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <span className="bg-[#fbbf24] text-slate-900 text-[10px] md:text-xs font-black px-2.5 py-0.5 rounded-full shadow-2xs">
            {isAr ? p.badge : p.badgeEn}
          </span>
          <span className="text-[10px] md:text-xs font-extrabold text-slate-700 tracking-wider">
            {p.year}
          </span>
        </div>

        {/* University Crest Mark */}
        <div className="flex items-center gap-1.5">
          <div className="text-right">
            <span className="text-[9px] font-black text-primary block leading-none">
              جامعة العلوم والتكنولوجيا
            </span>
            <span className="text-[7px] text-slate-400 font-semibold block leading-none">
              University of Science & Tech.
            </span>
          </div>
          <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center p-0.5">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Main Arch Graphic Frame */}
      <div className="p-3 md:p-4 bg-gradient-to-b from-slate-50 to-white flex flex-col items-center">
        <div
          className={`relative w-full aspect-[4/3] rounded-t-[70px] md:rounded-t-[90px] rounded-b-[20px] overflow-hidden bg-gradient-to-br ${p.themeBg} shadow-inner flex flex-col items-center justify-center p-4 text-white text-center border-2 border-white`}
        >
          {/* Subtle Ambient Rings & Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] pointer-events-none" />

          {/* Core Graphic Icon per type */}
          {ad.type === 'law' && (
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-400/20 border border-amber-300/40 backdrop-blur-sm flex items-center justify-center shadow-lg mb-1">
                <Scale className="w-9 h-9 md:w-11 md:h-11 text-amber-300" />
              </div>
              <span className="text-[10px] text-amber-200/90 font-bold uppercase tracking-wider">
                Justice & Jurisprudence
              </span>
            </div>
          )}

          {ad.type === 'business' && (
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cyan-400/20 border border-cyan-300/40 backdrop-blur-sm flex items-center justify-center shadow-lg mb-1">
                <Briefcase className="w-9 h-9 md:w-11 md:h-11 text-cyan-300" />
              </div>
              <span className="text-[10px] text-cyan-200/90 font-bold uppercase tracking-wider">
                Global Business & Leadership
              </span>
            </div>
          )}

          {ad.type === 'psychology' && (
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-emerald-400/20 border border-emerald-300/40 backdrop-blur-sm flex items-center justify-center shadow-lg mb-1">
                <Heart className="w-9 h-9 md:w-11 md:h-11 text-emerald-300" />
              </div>
              <span className="text-[10px] text-emerald-200/90 font-bold uppercase tracking-wider">
                Mental Wellness & Support
              </span>
            </div>
          )}

          {/* Arched Border Overlay */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-t-[70px] md:rounded-t-[90px] rounded-b-[20px] pointer-events-none" />
        </div>

        {/* Degree & Major Typography on Poster */}
        <div className="mt-3 text-center w-full">
          <span className="text-[11px] md:text-xs font-black text-slate-500 uppercase tracking-widest block">
            {isAr ? p.degree : 'Degree'}
          </span>
          <h4 className="text-base md:text-lg font-black text-primary tracking-tight leading-tight mt-0.5">
            {isAr ? p.major : p.majorEn}
          </h4>
          <p className="text-[10px] md:text-xs font-bold text-slate-600 mt-1 max-w-[90%] mx-auto">
            {isAr ? p.subtitle : p.subtitleEn}
          </p>
        </div>

        {/* Green Deanship Pill matching ust.edu.ye */}
        <div className="mt-2.5">
          <span className="inline-block bg-[#15803d] text-white text-[10px] md:text-[11px] font-bold px-3 py-1 rounded-md shadow-2xs">
            {isAr ? p.deanship : p.deanshipEn}
          </span>
        </div>

        {/* Motto line */}
        <div className="mt-2 text-[9px] font-extrabold text-slate-400 border-t border-slate-100 pt-1.5 w-full text-center">
          {p.slogan}
        </div>
      </div>

      {/* Bottom Contact Strip matching ust.edu.ye */}
      <div className="bg-[#0284c7] text-white px-3 py-1.5 flex items-center justify-between text-[10px] font-bold">
        <div className="flex items-center gap-1">
          <span className="bg-white/20 px-1.5 py-0.5 rounded text-[9px] font-mono">USTY</span>
          <span className="opacity-90">@usteduy</span>
        </div>

        <div className="flex items-center gap-2 font-mono">
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3" />
            <span>{p.phone}</span>
          </span>
          <span className="hidden sm:inline opacity-80">|</span>
          <span className="hidden sm:inline font-mono">{p.website}</span>
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
    <div className="w-full text-slate-800" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Top Header / Switcher Tabs */}
      <div className="bg-slate-100/80 p-3 sm:p-4 border-b border-slate-200 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {/* Back to all button */}
          <button
            onClick={() => setSelectedAdId(null)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              selectedAdId === null
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
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
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                selectedAdId === ad.id
                  ? 'bg-secondary text-white shadow-sm font-extrabold'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              {ad.type === 'law' && <Scale className="w-3.5 h-3.5" />}
              {ad.type === 'business' && <Briefcase className="w-3.5 h-3.5" />}
              {ad.type === 'psychology' && <Heart className="w-3.5 h-3.5" />}
              <span>{isAr ? ad.poster.major : ad.poster.majorEn}</span>
            </button>
          ))}
        </div>

        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-200 text-slate-700 border border-slate-300 flex items-center justify-center transition-all shadow-2xs active:scale-90"
            title={isAr ? 'إغلاق' : 'Close'}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          {/* VIEW 1: GRID OF 3 ANNOUNCEMENT CARDS (Matching Screenshot 1) */}
          {selectedAdId === null ? (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {/* Section Subtitle */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black mb-1.5">
                  <Megaphone className="w-3.5 h-3.5 text-accent" />
                  <span>{isAr ? 'إعلانات عمادة التعليم الإلكتروني والمراكز النوعية' : 'E-Learning & Centers Notices'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-primary">
                  {isAr ? 'أحدث الإعلانات الرسمية للجامعة' : 'Latest Official University Notices'}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1 max-w-lg mx-auto">
                  {isAr
                    ? 'اختر أي إعلان واستعرض كامل التفاصيل المعتمدة وبوستر التسجيل الرسمي'
                    : 'Select any notice below to view full details and official poster'}
                </p>
              </div>

              {/* 3 Cards Grid exactly like ust.edu.ye */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {elearningAnnouncementsData.map((ad) => (
                  <div
                    key={ad.id}
                    onClick={() => setSelectedAdId(ad.id)}
                    className="group bg-white border border-slate-200 hover:border-sky-400 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    {/* Visual Poster */}
                    <div className="mb-4">
                      <AnnouncementPoster ad={ad} isAr={isAr} isCompact={true} />
                    </div>

                    {/* Content below poster */}
                    <div className="flex flex-col flex-grow text-right" dir={isAr ? 'rtl' : 'ltr'}>
                      <h4 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-2 mb-2">
                        {isAr ? ad.title : ad.titleEn}
                      </h4>

                      <p className="text-xs text-slate-600 font-semibold leading-relaxed line-clamp-3 mb-4">
                        {isAr ? ad.excerpt : ad.excerptEn}
                      </p>

                      {/* Pill button matching ust.edu.ye "المزيد..." */}
                      <div className="mt-auto pt-2 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedAdId(ad.id);
                          }}
                          className="px-6 py-2 rounded-full bg-[#0088cc] hover:bg-[#0077b5] text-white text-xs font-bold transition-all shadow-sm active:scale-95 flex items-center gap-1.5"
                        >
                          <span>{isAr ? 'المزيد...' : 'Read More...'}</span>
                          {isAr ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                        </button>

                        <span className="text-[11px] font-mono text-slate-400 font-semibold">
                          {ad.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* VIEW 2: SINGLE ANNOUNCEMENT FULL DETAIL (Matching Screenshots 2, 3, and 4) */
            <motion.div
              key={selectedAd.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Blue Header Banner matching Screenshot 3 */}
              <div className="rounded-2xl bg-[#0077b5] text-white p-5 sm:p-7 shadow-lg relative overflow-hidden">
                <div className="relative z-10 space-y-2.5">
                  {/* Category breadcrumb */}
                  <div className="text-xs font-bold text-sky-100 tracking-wide">
                    {isAr ? selectedAd.category : selectedAd.categoryEn}
                  </div>

                  {/* Big title */}
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-white leading-snug">
                    {isAr ? selectedAd.title : selectedAd.titleEn}
                  </h3>

                  {/* Metadata Row with icons */}
                  <div className="pt-2 flex items-center gap-4 text-xs font-medium text-sky-100 flex-wrap border-t border-sky-400/40">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span>{isAr ? selectedAd.date : selectedAd.dateEn}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-accent" />
                      <span>{selectedAd.comments} {isAr ? 'تعليقات' : 'Comments'}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-accent" />
                      <span>{selectedAd.views} {isAr ? 'مشاهدة' : 'Views'}</span>
                    </span>
                  </div>
                </div>

                {/* Background decorative curve */}
                <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none" />
              </div>

              {/* Main Content: Poster + Text Description (matching Screenshot 2) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Poster Display Column */}
                <div className="lg:col-span-5 flex justify-center">
                  <AnnouncementPoster ad={selectedAd} isAr={isAr} isCompact={false} />
                </div>

                {/* Formatted Text Description Column */}
                <div className="lg:col-span-7 space-y-5 text-right" dir={isAr ? 'rtl' : 'ltr'}>
                  {/* The exact emoji bullets text */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4">
                    <div className="text-base sm:text-lg font-black text-primary leading-relaxed">
                      {selectedAd.formattedText[0]}
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed whitespace-pre-line">
                      {selectedAd.formattedText[1]}
                    </p>

                    <div className="p-3 rounded-xl bg-white border border-primary/15 flex items-center gap-2.5 text-primary text-sm font-black font-mono">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <span>{selectedAd.formattedText[2]}</span>
                    </div>

                    {/* Hashtags */}
                    <div className="pt-2 flex flex-wrap gap-2 text-xs font-black text-sky-700">
                      <span>{selectedAd.formattedText[3]}</span>
                      <span>{selectedAd.formattedText[4]}</span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div>
                    <h5 className="text-xs font-black text-primary uppercase tracking-wider mb-2.5">
                      {isAr ? 'مزايا ومعايير البرنامج:' : 'Program Highlights:'}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedAd.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="bg-white border border-slate-200 rounded-xl p-3 flex items-start gap-2 shadow-2xs hover:border-secondary transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span className="text-xs font-bold text-slate-700 leading-snug">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Share Buttons matching Screenshot 2 */}
                  <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-bold text-slate-500 ml-1">
                        {isAr ? 'مشاركة الإعلان:' : 'Share:'}
                      </span>
                      {/* Share button */}
                      <button
                        onClick={handleShare}
                        className="px-3 py-1.5 rounded-lg bg-[#0088cc] hover:bg-[#0077b5] text-white text-xs font-black flex items-center gap-1 shadow-2xs active:scale-95"
                      >
                        {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
                        <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'مشاركة +' : 'Share +')}</span>
                      </button>

                      {/* WhatsApp Share */}
                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(selectedAd.title + ' ' + window.location.href)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:opacity-90 transition-opacity"
                        title="WhatsApp"
                      >
                        واتساب
                      </a>

                      {/* Facebook */}
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1.5 rounded-lg bg-[#1877F2] text-white text-xs font-bold hover:opacity-90 transition-opacity"
                        title="Facebook"
                      >
                        فيسبوك
                      </a>

                      {/* Twitter / X */}
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedAd.title)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1.5 rounded-lg bg-black text-white text-xs font-bold hover:opacity-90 transition-opacity"
                        title="Twitter"
                      >
                        تويتر
                      </a>
                    </div>

                    {/* Navigation Between Announcements */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedAdId(null)}
                        className="px-3.5 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all flex items-center gap-1"
                      >
                        <span>{isAr ? 'رجوع للقائمة' : 'Back'}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onClose) onClose();
                          navigate(selectedAd.applyUrl);
                        }}
                        className="px-4 py-1.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-black shadow-md transition-all flex items-center gap-1.5 active:scale-95"
                      >
                        <GraduationCap className="w-4 h-4 text-accent" />
                        <span>{isAr ? 'سجّل الآن في البرنامج' : 'Apply Now'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official UST Contact Footer matching Screenshot 4 */}
              <USTOfficialContactFooter isAr={isAr} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
