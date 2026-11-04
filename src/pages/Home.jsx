import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, Users, Globe, Globe2, Award, ChevronLeft, ChevronRight, X, CheckCircle2, Megaphone, PhoneCall, GraduationCap, ShieldCheck, Laptop } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { InternationalPartnersCarousel, InternationalPartnersModalContent } from '../Components/InternationalPartners';
import ElearningAnnouncementsModal from '../Components/ElearningAnnouncements';
import BridgingAnnouncementModal from '../Components/BridgingAnnouncementModal';
import AcademicProgramsModal from '../Components/AcademicProgramsModal';
import { NewProgramsSection } from '../Components/NewProgramsSection';
import { lockBodyScroll } from '../utils/scrollLock';

const heroSlides = [
  {
    url: '/hero-new-1.jpg',
    title: 'رئاسة الجامعة وكلية الطب والعلوم الصحية',
    titleEn: 'University Presidency & Medical Faculty',
    objectPosition: 'center 30%',
    scale: 1.0
  },
  {
    url: '/hero-new-7.jpg',
    title: 'مبنى كلية العلوم والهندسة',
    titleEn: 'Faculty of Science & Engineering Campus',
    objectPosition: 'center 22%',
    scale: 1.0
  },
  {
    url: '/hero-new-2.jpg',
    title: 'كلية العلوم الإدارية وكلية العلوم الإنسانية',
    titleEn: 'Faculty of Administrative & Human Sciences',
    objectPosition: 'center center',
    scale: 1.0
  },
  {
    url: '/hero-new-8.jpg',
    title: 'المجمع الأكاديمي ومبنى الكليات التخصصية',
    titleEn: 'Specialized Colleges & Academic Complex',
    objectPosition: 'center center',
    scale: 1.0
  },
  {
    url: '/hero-new-3.jpg',
    title: 'إطلالة الحرم الجامعي العام ومجمع الكليات',
    titleEn: 'Main University Campus Overview',
    objectPosition: 'center center',
    scale: 1.0
  },
  {
    url: '/hero-new-4.png',
    title: 'مبنى الكليات - فرع الطالبات (30 عاماً من التميز)',
    titleEn: 'Colleges Campus - Girls Branch',
    objectPosition: 'center center',
    scale: 1.0
  },
  {
    url: '/hero-new-5.jpg',
    title: 'الساحة والحدائق الداخلية للحرم الجامعي',
    titleEn: 'University Courtyard & Campus Gardens',
    objectPosition: 'center center',
    scale: 1.0
  },
  {
    url: '/hero-new-6.jpg',
    title: 'مجمع القاعات والأنشطة والمسطحات الخضراء',
    titleEn: 'Auditorium Complex & Green Spaces',
    objectPosition: 'center center',
    scale: 1.0
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const [selectedStat, setSelectedStat] = useState(null);
  const [highlightedPartner, setHighlightedPartner] = useState(null);

  // Freeze background page scroll when modal is open so the background never moves
  useEffect(() => {
    if (selectedStat) {
      const unlock = lockBodyScroll();
      return () => {
        unlock();
      };
    }
  }, [selectedStat]);

  const stats = [
    {
      id: 'admission-announcement',
      icon: GraduationCap,
      label: isAr ? 'كلية و 90+ برنامجاً' : '9 Faculties & 90+ Programs',
      value: '9',
      date: isAr ? 'أكتوبر 2026' : 'October 2026',
      badge: isAr ? 'الاعتماد الذهبي والدراسات العليا' : 'Golden Accreditation & Postgrad',
      isAcademicProgramsAds: true,
      tagline: isAr ? 'الاعتماد الأكاديمي البرامجي الذهبي الكامل لـ 5 برامج' : 'Full Golden Accreditation for 5 Programs',
      title: isAr
        ? 'جامعة العلوم والتكنولوجيا - الاعتماد الذهبي والبرامج الأكاديمية والدراسات العليا'
        : 'UST - Golden Accreditations, Academic Programs & Postgraduate Studies',
      image: '/hero-building.jpg',
      description: isAr
        ? 'حصول جامعة العلوم والتكنولوجيا على الاعتماد الأكاديمي البرامجي الذهبي الكامل لخمسة برامج استراتيجية، وفتح باب القبول في الدراسات العليا المسائية وبرنامج إدارة الأعمال الدولية بالإنجليزية.'
        : 'UST achieves full golden programmatic accreditation across 5 flagship programs, opens evening graduate studies and international business programs.',
      highlights: isAr ? [
        'الاعتماد الذهبي في: الطب البشري، طب وجراحة الأسنان، الصيدلة، الهندسة المدنية، وإدارة الأعمال',
        'عمادة الدراسات العليا والبحث العلمي: ماجستير ودكتوراه بنظام الساعات في الفترة المسائية',
        'برنامج بكالوريوس إدارة أعمال دولية باللغة الإنجليزية (International Business Management - NEW)',
        'أكثر من 90 برنامجاً وتخصصاً أكاديمياً معتمداً محلياً وإقليمياً ودولياً'
      ] : [
        'Golden Accreditation for Medicine, Dentistry, Pharmacy, Civil Eng, and Business',
        'Postgraduate evening programs (M.Sc., MBA, PhD) accommodating professionals',
        'International Business Management taught fully in English (NEW Track)',
        'Over 90 accredited academic programs meeting top quality criteria'
      ],
      contactInfo: isAr ? 'للتسجيل والاستفسار: 777761641 - 716000700 | الرقم المجاني: 8000000' : 'Inquiries & Admission: +967 777761641 - 716000700',
      promoBanner: isAr ? 'الجامعة الأهلية الأولى الحاصلة على الاعتماد الأكاديمي الذهبي الكامل' : 'First private university with full golden programmatic accreditation',
      actionUrl: '/admission',
      actionText: isAr ? 'سجّل في البرامج الأكاديمية' : 'Apply for Programs',
      secondaryUrl: '/faculties',
      secondaryText: isAr ? 'دليل الكليات والاعتمادات' : 'Faculties & Accreditations'
    },
    {
      id: 'bridging-announcement',
      icon: Award,
      label: isAr ? 'برنامجاً بنظام التجسير' : 'Bridging Programs',
      value: '61',
      date: isAr ? 'أكتوبر 2026' : 'October 2026',
      badge: isAr ? 'إعلان فتح التسجيل بنظام التجسير' : 'Bridging Admissions Notice',
      isBridgingAds: true,
      tagline: isAr ? 'عمادة القبول والتسجيل • حملة الدبلوم المتوسط' : 'Admissions & Registration • Diploma Holders',
      title: isAr
        ? 'فتح التسجيل بنظام التجسير - أكمل مسيرتك التعليمية من الدبلوم إلى البكالوريوس'
        : 'Admissions Open for Bridging: From Diploma to Accredited Bachelor Degree',
      image: '/hero-slide-5.jpg',
      description: isAr
        ? 'تعلن جامعة العلوم والتكنولوجيا عن فتح باب القبول والتسجيل بنظام التجسير لحملة الدبلوم المتوسط بعد الثانوية العامة في مختلف التخصصات الطبية والهندسية والإدارية مع معادلة المقررات والساعات.'
        : 'UST announces open enrollment in bridging programs for intermediate diploma holders across medical, engineering, IT, and business faculties with credit transfers.',
      highlights: isAr ? [
        'معادلة المقررات والساعات الدراسية السابقة المنجزة في الدبلوم وفق اللوائح الأكاديمية المعتمدة',
        'إتاحة التجسير في تخصصات الصيدلة، التمريض، المختبرات الطبية، الهندسة، ونظم المعلومات',
        'جداول دراسية مرنة ومناسبة للموظفين والعاملين في القطاعات الصحية والمهنية',
        'شهادات تخرج بكالوريوس نظامية معتمدة وموثقة من وزارة التعليم العالي والبحث العلمي'
      ] : [
        'Course and credit transfer evaluation in accordance with recognized academic standards',
        'Bridging available in Pharmacy, Nursing, Medical Labs, Engineering, and Information Systems',
        'Flexible schedule accommodating working professionals and healthcare personnel',
        'Fully certified and accredited Bachelor Degrees issued upon graduation'
      ],
      contactInfo: isAr ? 'للاستفسار ومعادلة المواد: نيابة شؤون الطلاب - هاتف: 777761641' : 'Credit evaluation inquiries: +967 777761641',
      promoBanner: isAr ? 'ارتقِ بمكانتك العلمية والمهنية وأكمل مسيرتك نحو البكالوريوس' : 'Elevate your academic standing and upgrade your diploma to a degree',
      actionUrl: '/admission',
      actionText: isAr ? 'طلب التجسير والقبول' : 'Apply for Bridging',
      secondaryUrl: '/faculties',
      secondaryText: isAr ? 'شروط ومعايير التجسير' : 'Bridging Requirements'
    },
    {
      id: 'elearning-announcement',
      icon: Laptop,
      label: isAr ? 'التعليم الإلكتروني والمراكز' : 'E-Learning & Centers',
      value: isAr ? '3 برامج' : '3 Programs',
      date: isAr ? 'أكتوبر 2026' : 'October 2026',
      badge: isAr ? 'إعلانات التعليم الإلكتروني والمراكز' : 'E-Learning & Centers Notices',
      tagline: isAr ? 'عمادة التعليم الإلكتروني • مركز الاستشارات النفسية' : 'Deanship of E-Learning & Counseling Centers',
      title: isAr
        ? 'إعلانات عمادة التعليم الإلكتروني والمراكز النوعية والاستشارية'
        : 'UST E-Learning Deanship & Specialized Centers Official Notices',
      image: '/hero-slide-3.jpg',
      isElearningAds: true,
      description: isAr
        ? 'تعلن جامعة العلوم والتكنولوجيا عن فتح واستمرار التسجيل في برامج البكالوريوس عبر التعليم الإلكتروني والتعليم عن بُعد (الشريعة والقانون، إدارة الأعمال الدولية) والفعاليات النوعية لمركز الاستشارات النفسية.'
        : 'UST announces open enrollment in online bachelor degrees (Sharia & Law, International Business) and community initiatives of specialized counseling centers.',
      highlights: isAr ? [
        'منصة تعليمية إلكترونية ذكية وفصول افتراضية تفاعلية ومحاضرات مسجلة متاحة على مدار الساعة',
        'هيئة تدريسية متخصصة ومناهج حديثة تواكب مستجدات التجارة العالمية والتشريعات القانونية',
        'شهادات جامعية معتمدة ومطابقة لشهادات الانتظام ومعترف بها في مختلف الدول',
        'مراكز امتحانية وتنسيقية منتشرة لخدمة الطلاب المغتربين والدارسين داخل وخارج اليمن'
      ] : [
        'Smart learning management system with 24/7 interactive virtual classrooms & lecture recordings',
        'Distinguished faculty and modern curricula aligned with international trade and law',
        'Recognized academic degrees matching on-campus equivalency',
        'Worldwide examination centers serving international and expatriate students'
      ],
      contactInfo: isAr ? 'عمادة التعليم الإلكتروني: 777761641 | البريد: elearning@ust.edu.ye' : 'E-Learning Deanship: +967 777761641 | elearning@ust.edu.ye',
      promoBanner: isAr ? 'دراسة مرنة من أي دولة مع إمكانية تسديد الرسوم بأقساط ميسرة' : 'Study from anywhere globally with flexible payment installment plans',
      actionUrl: '/admission',
      actionText: isAr ? 'سجل في التعليم عن بُعد' : 'Enroll Online',
      secondaryUrl: '/login',
      secondaryText: isAr ? 'منصة التعليم الإلكتروني' : 'LMS Portal'
    },
    {
      id: 'partners-announcement',
      icon: Globe2,
      label: isAr ? 'شراكة دولية واعتماد' : 'International Partnerships',
      value: '+35',
      date: isAr ? 'شبكة الشركاء المعتمدين 2026' : 'Accredited Partners Network 2026',
      badge: isAr ? 'إعلان الشركاء الدوليين والاعتمادات' : 'International Partners Notice',
      tagline: isAr ? 'جامعة العلوم والتكنولوجيا • شبكة التعاون والتبادل الأكاديمي الدولي' : 'UST Global Academic Exchange & Partner Network',
      title: isAr
        ? 'إعلان شبكة الشركاء الدوليين والجامعات العالمية الشريكة لجامعة العلوم والتكنولوجيا'
        : 'Announcement of UST International Academic Partners & Global University Network',
      image: '/hero-slide-4.jpg',
      isPartnersAd: true,
      description: isAr
        ? 'ترتبط جامعة العلوم والتكنولوجيا بشبكة واسعة تضم أكثر من 35 اتفاقية شراكة وتوأمة أكاديمية وبحثية وتدريب سريري مع كبرى الجامعات المرموقة في جمهورية مصر العربية، المملكة الأردنية الهاشمية، ماليزيا، الصومال، ومؤسسات الشهادات الدولية مثل المجلس الدولي للاستشارات الإلكترونية (EC-Council USA).'
        : 'UST is affiliated with a distinguished global network of over 35 academic partnerships, clinical twinning, and international certification bodies including top universities in Egypt, Jordan, Malaysia, and EC-Council USA.',
      highlights: isAr ? [
        'جامعات مصرية عريقة: جامعة عين شمس وجامعة قناة السويس للتبادل الأكاديمي والتدريب السريري والإكلينيكي لطلبة الطب',
        'جامعات المملكة الأردنية الهاشمية: الجامعة الأردنية وجامعة عمان الأهلية لضمان الجودة والأبحاث والتعليم المشترك',
        'الولايات المتحدة الأمريكية: شراكة حصرية مع EC-Council لشهادات الأمن السيبراني المعتمدة عالمياً (CEH, CND, CHFI)',
        'ماليزيا والصومال وتحالفات إقليمية: جامعة تونتك الدولية (I.U.T.T)، الجامعة الإسلامية بمقديشو، والتحالفات الطبية والبحثية'
      ] : [
        'Egyptian Universities: Ain Shams & Suez Canal for medical training & clinical supervision',
        'Jordanian Universities: The University of Jordan & Al-Ahliyya Amman for research & quality assurance',
        'USA: Exclusive EC-Council academic partner for global cybersecurity certifications (CEH, CND)',
        'Malaysia & Regional: Twintech International (I.U.T.T), Islamic Univ Mogadishu & clinical syndicates'
      ],
      contactInfo: isAr ? 'إدارة التعاون الدولي والعلاقات الأكاديمية - هاتف: 777761641 - 716000700 | international@ust.edu.ye' : 'Office of International Relations: +967 777761641 | international@ust.edu.ye',
      promoBanner: isAr ? 'فرص تدريب سريري وتبادل طلابي وشهادات أمن سيبراني معتمدة عالمياً' : 'Clinical exchange, global certifications, and international degree recognition',
      actionUrl: '/admission',
      actionText: isAr ? 'التقديم لبرامج التبادل والقبول' : 'Apply for International Programs',
      secondaryUrl: '/faculties',
      secondaryText: isAr ? 'دليل الاتفاقيات الدولية' : 'Partnership Agreements'
    }
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-primary-dark dark:text-slate-100 font-sans overflow-hidden transition-colors duration-500">

      {/* Hero Section */}
      <section className="relative pt-22 sm:pt-28 md:pt-32 lg:pt-36 pb-10 sm:pb-16 lg:pb-24 overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-7 sm:gap-8 lg:gap-16">

            {/* Left side: Stadium Capsule Image Container Slideshow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-1/2 flex justify-center order-2"
            >
              <div className="group relative p-2 sm:p-2.5 lg:p-3 rounded-full border-2 border-white/80 dark:border-white/10 w-[265px] sm:w-[335px] md:w-[385px] lg:w-[425px] h-[390px] sm:h-[480px] md:h-[510px] lg:h-[530px] bg-white/45 dark:bg-slate-900/45 hover:bg-white/60 dark:hover:bg-slate-900/60 backdrop-blur-3xl shadow-[0_20px_50px_rgba(11,59,96,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 flex items-center justify-center">
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-sky-400/20 rounded-full blur-xl pointer-events-none"></div>

                {/* Concentric Inner Outline Ring */}
                <div className="absolute inset-2 sm:inset-2.5 rounded-full border border-white/60 dark:border-white/10 pointer-events-none z-20" />

                {/* Subtle Ambient Backlight Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-400/10 via-emerald-400/5 to-primary/10 pointer-events-none rounded-full" />

                {/* Inner Capsule Image Frame / Slideshow */}
                <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner border-2 border-white/80 dark:border-white/15 bg-slate-100 dark:bg-slate-800 z-10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent z-10 pointer-events-none" />

                  <AnimatePresence initial={false}>
                    <motion.img
                      key={currentSlide}
                      src={heroSlides[currentSlide].url}
                      alt={isAr ? heroSlides[currentSlide].title : heroSlides[currentSlide].titleEn}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{ objectPosition: heroSlides[currentSlide].objectPosition || 'center center' }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/85 dark:bg-slate-800/85 hover:bg-white dark:hover:bg-slate-700 text-primary dark:text-slate-100 flex items-center justify-center backdrop-blur-md shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/85 dark:bg-slate-800/85 hover:bg-white dark:hover:bg-slate-700 text-primary dark:text-slate-100 flex items-center justify-center backdrop-blur-md shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                  </button>

                  {/* Slide Label & Indicators */}
                  <div className="absolute bottom-5 sm:bottom-7 inset-x-3 sm:inset-x-4 z-20 flex flex-col items-center gap-1.5 pointer-events-none">
                    <div className="bg-gradient-to-r from-sky-200/70 via-white/80 to-sky-100/75 hover:from-sky-200/85 hover:via-white/90 hover:to-sky-100/85 backdrop-blur-2xl saturate-150 text-primary text-[9.5px] sm:text-[11px] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/90 shadow-[0_10px_28px_rgba(2,132,199,0.18),inset_0_1.5px_2px_rgba(255,255,255,1)] text-center font-extrabold max-w-[88%] truncate transition-all duration-300 pointer-events-auto">
                      {isAr ? heroSlides[currentSlide].title : heroSlides[currentSlide].titleEn}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex items-center justify-center flex-wrap gap-1.5 bg-gradient-to-r from-sky-100/65 via-white/70 to-sky-100/65 backdrop-blur-xl saturate-150 px-3 py-1 rounded-full border border-white/85 shadow-[0_4px_15px_rgba(2,132,199,0.12),inset_0_1px_1.5px_rgba(255,255,255,0.95)] max-w-[90%] pointer-events-auto">
                      {heroSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide
                            ? 'w-4 bg-primary'
                            : 'w-1.5 bg-primary/35 hover:bg-primary/65'
                            }`}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Right side: Typography with Cairo Font Styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`w-full md:w-1/2 flex flex-col justify-center order-1 ${isAr ? 'text-right items-start' : 'text-left items-start'}`}
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {/* Top Accent Badge */}
              <div className={`flex items-center gap-2 mb-2.5 sm:mb-3 ${isAr ? '' : 'self-start'}`}>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-[0_4px_20px_rgba(11,59,96,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-primary dark:text-sky-300 tracking-wide">
                    {lang === 'ar' ? 'التميز الأكاديمي والاعتماد الدولي' : 'Academic Excellence & Global Accreditation'}
                  </span>
                </div>
                <div className="hidden sm:block h-[1.5px] bg-gradient-to-r from-sky-300 to-transparent flex-grow max-w-[100px]" />
              </div>

              {/* Main Title - Proportioned cleanly for Thmanyah */}
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-black text-primary dark:text-white flex flex-col gap-1 tracking-tight mb-3 w-full ${isAr ? 'text-right' : 'text-left'}`}
                style={{ fontFamily: "'ThmanyahSans', sans-serif" }}
              >
                <span className="leading-snug" style={{ fontFamily: "'ThmanyahSans', sans-serif" }}>{t('heroTitle1')}</span>
                <span
                  className={`text-transparent bg-clip-text ${isAr ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-secondary via-teal-600 to-primary dark:to-sky-400 block leading-snug`}
                  style={{ fontFamily: "'ThmanyahSans', sans-serif" }}
                >
                  {t('heroTitle2')}
                </span>
              </h1>

              {/* Reference underline */}
              <div className={`w-16 sm:w-20 h-[3px] sm:h-[3.5px] bg-gradient-to-r from-sky-400 via-sky-300 to-secondary/60 mb-3.5 sm:mb-4 rounded-full ${isAr ? '' : 'self-start'}`}></div>

              {/* Description */}
              <p className={`text-xs sm:text-sm md:text-[15px] text-primary-dark/80 dark:text-slate-300 font-normal leading-relaxed mb-4 sm:mb-5 max-w-lg ${isAr ? 'text-right' : 'text-left'}`}>
                {t('heroDesc')}
              </p>

              {/* Buttons */}
              <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto ${isAr ? '' : 'self-start'}`}>
                <button
                  onClick={() => navigate('/admission')}
                  className="relative overflow-hidden w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-sky-200/70 via-white/80 to-sky-100/75 hover:from-sky-200/85 hover:via-white/95 hover:to-sky-100/90 backdrop-blur-2xl saturate-150 text-primary border-2 border-white/90 hover:border-white rounded-full font-black text-xs sm:text-sm md:text-base shadow-[0_10px_28px_rgba(2,132,199,0.14),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:shadow-[0_15px_35px_rgba(2,132,199,0.22),inset_0_2px_3px_rgba(255,255,255,1)] transition-all duration-500 ease-out hover:-translate-y-1 flex items-center justify-center gap-2.5 group active:scale-95 cursor-pointer"
                >
                  <span>{t('startAdmission')}</span>
                  {lang === 'ar' ? (
                    <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
                <button
                  onClick={() => navigate('/faculties')}
                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl text-primary dark:text-slate-100 border-2 border-white/40 dark:border-white/10 hover:border-white dark:hover:border-white/20 hover:bg-white/70 dark:hover:bg-slate-800/70 rounded-full font-bold text-xs sm:text-sm md:text-base shadow-[0_4px_20px_rgba(11,59,96,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <span>{t('exploreFaculties')}</span>
                </button>
              </div>

              {/* Trust Micro-Highlights */}
              <div className={`mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/60 dark:border-white/10 grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-4 sm:flex-wrap w-full ${isAr ? '' : 'justify-start'}`}>
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-lg rounded-xl text-slate-800 dark:text-slate-100 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer">
                  <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-900 dark:text-sky-300 border border-blue-100 dark:border-blue-900/40 shrink-0">
                    <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-900 dark:text-sky-300" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10.5px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                    {isAr ? '+90 برنامجاً وتخصصاً' : '90+ Programs'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-lg rounded-xl text-slate-800 dark:text-slate-100 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer">
                  <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-emerald-50 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40 shrink-0">
                    <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-emerald-400" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10.5px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                    {isAr ? 'الجامعة الأولى محلياً' : '#1 in Yemen'}
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-lg rounded-xl text-slate-800 dark:text-slate-100 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer">
                  <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-900 dark:text-sky-300 border border-blue-100 dark:border-blue-900/40 shrink-0">
                    <Globe2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-900 dark:text-sky-300" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10.5px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                    {isAr ? '+35 شراكة دولية' : '35+ Global Partners'}
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats / Infographic Section */}
      <section className="py-10 sm:py-16 bg-transparent border-t border-sky-100/60 dark:border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

          <div className="text-center mb-7 sm:mb-10">
            <h2 className="text-xl sm:text-3xl font-black text-primary dark:text-white mb-2">{t('statTitle', 'أرقام وحقائق')}</h2>
            <p className="text-xs sm:text-sm font-medium text-primary-dark/70 dark:text-slate-300 mb-3 max-w-xl mx-auto px-2">
              {isAr ? 'اضغط على أي رقم لاستعراض أحدث الإعلانات الرسمية والتفاصيل المعتمدة من موقع الجامعة' : 'Click any stat to explore the latest official announcements and accredited details'}
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3">
              <div className="hidden xs:block w-8 sm:w-12 h-[2.5px] bg-sky-300 dark:bg-sky-500/50 rounded-full"></div>
              <button
                type="button"
                onClick={() => {
                  const programsSec = document.getElementById('new-programs-section');
                  if (programsSec) programsSec.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full crystal-card hover:bg-white/70 dark:hover:bg-slate-800/70 text-primary dark:text-slate-100 text-[11px] sm:text-xs font-black transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg cursor-pointer shadow-xs"
              >
                <GraduationCap className="w-3.5 h-3.5 text-primary dark:text-sky-300 stroke-[2.2]" />
                <span>{isAr ? 'التخصصات والبرامج الجديدة بالجامعة ↓' : 'Newly Opened University Majors ↓'}</span>
              </button>
              <div className="hidden xs:block w-8 sm:w-12 h-[2.5px] bg-sky-300 dark:bg-sky-500/50 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 pt-2 sm:pt-4 pb-6 sm:pb-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                onClick={() => setSelectedStat(stat)}
                className={`relative flex flex-col items-center py-5 px-3 sm:py-8 sm:px-6 text-center rounded-[40px] sm:rounded-full bg-white/45 dark:bg-slate-900/45 hover:bg-white/70 dark:hover:bg-slate-900/70 backdrop-blur-3xl border-2 border-white/80 dark:border-white/10 hover:border-white dark:hover:border-white/20 text-slate-800 dark:text-slate-100 shadow-[0_15px_35px_rgba(2,132,199,0.08)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer group select-none min-h-[240px] sm:min-h-[340px] lg:min-h-[380px] justify-between overflow-hidden ${idx % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
              >
                {/* Subtle Ambient Backlight Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-400/10 dark:from-sky-500/5 via-emerald-400/5 dark:via-blue-600/5 to-sky-400/5 dark:to-sky-500/5 pointer-events-none rounded-full" />

                {/* Connecting arrow (hidden on mobile, visible on desktop except last) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 rtl:-left-8 ltr:-right-8 w-8 h-[2px] bg-sky-300/40 dark:bg-white/15 z-0 group-hover:bg-sky-500 transition-colors">
                    <ArrowLeft className="absolute -left-3 -top-[11px] text-sky-400/60 group-hover:text-sky-600 w-6 h-6 rtl:block ltr:hidden transition-colors" />
                    <ArrowRight className="absolute -right-3 -top-[11px] text-sky-400/60 group-hover:text-sky-600 w-6 h-6 rtl:hidden ltr:block transition-colors" />
                  </div>
                )}

                {/* Luxurious Circular Icon Emblem */}
                <div className="relative z-10 mt-1 sm:mt-2 mb-2 sm:mb-3 flex items-center justify-center">
                  {/* Subtle Ambient Royal Blue Halo */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400/15 via-indigo-300/10 to-transparent dark:from-sky-400/20 dark:via-blue-600/10 rounded-full blur-md opacity-60 group-hover:opacity-100 group-hover:scale-115 transition-all duration-500 pointer-events-none" />

                  {/* Outer Circular Medallion */}
                  <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full border-2 border-white dark:border-white/20 bg-white/95 dark:bg-slate-800/90 backdrop-blur-xl p-1 sm:p-1.5 shadow-[0_8px_25px_rgba(29,78,216,0.12)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.4)] group-hover:shadow-[0_14px_35px_rgba(29,78,216,0.22)] group-hover:scale-108 transition-all duration-500 flex items-center justify-center relative overflow-hidden">
                    {/* Inner Pristine Faceted Core */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-white dark:from-slate-800 via-blue-50/60 dark:via-slate-800/70 to-indigo-50/30 dark:to-slate-900 border border-blue-100/90 dark:border-white/10 group-hover:border-blue-300/80 dark:group-hover:border-sky-400/40 flex items-center justify-center relative overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(29,78,216,0.04)]">
                      {/* Subtle Crystal Gloss Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/80 dark:via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                      {/* Dark Blue Icon with refined stroke */}
                      <stat.icon
                        className="w-6 h-6 sm:w-9 sm:h-9 md:w-10 md:h-10 text-blue-900 dark:text-sky-300 group-hover:text-blue-950 dark:group-hover:text-sky-200 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(30,58,138,0.18)] group-hover:scale-110"
                        strokeWidth={1.65}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-2 sm:mb-3 relative z-10 flex-grow flex flex-col justify-center">
                  <h3 className="text-xs sm:text-base md:text-lg font-black text-slate-800 dark:text-slate-100 group-hover:text-blue-900 dark:group-hover:text-sky-300 transition-colors leading-snug">{stat.label}</h3>
                </div>

                {/* Large Number at bottom */}
                <div className="mt-auto relative z-10 pb-1 sm:pb-2">
                  <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-900/20 dark:text-sky-300/20 group-hover:text-blue-900/40 dark:group-hover:text-sky-300/50 transition-colors font-mono tracking-tight">
                    {stat.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newly Opened Academic Programs Section */}
      <div id="new-programs-section">
        <NewProgramsSection isAr={isAr} />
      </div>

      {/* Announcement / Advertisement Modal */}
      <AnimatePresence>
        {selectedStat && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 select-none overflow-hidden touch-none"
          >
            {/* Backdrop with signature University Navy Frosted Refraction */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedStat(null);
                setHighlightedPartner(null);
              }}
              className="fixed inset-0 bg-[#0B3B60]/25 backdrop-blur-md"
            />

            {/* Ad Card Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`relative z-10 w-full ${selectedStat.isAcademicProgramsAds
                ? 'max-w-5xl'
                : selectedStat.isBridgingAds || selectedStat.isPartnersAd || selectedStat.isElearningAds
                  ? 'max-w-4xl'
                  : 'max-w-2xl'
                } rounded-[44px] sm:rounded-[54px] md:rounded-[60px] crystal-modal shadow-[0_30px_80px_rgba(11,59,96,0.2)] text-primary-dark overflow-hidden flex flex-col max-h-[88vh] ${isAr ? 'text-right' : 'text-left'
                }`}
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {/* Concentric Inner Outline Ring */}
              <div className="absolute inset-1.5 sm:inset-2 rounded-[44px] sm:rounded-[54px] md:rounded-[64px] border border-primary/15 pointer-events-none z-20" />

              {selectedStat.isPartnersAd ? (
                /* EXACT CLEAN CAROUSEL LIKE AT THE BOTTOM OF THE PAGE */
                <div className="flex flex-col h-full w-full">
                  {/* Top Header with Close Button - Clean Light Style */}
                  <div className="relative p-5 sm:p-7 rounded-b-[28px] sm:rounded-b-[36px] bg-gradient-to-b from-white via-white to-slate-50/90 border-b border-slate-200/80 text-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-start justify-between gap-4 shrink-0">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white flex items-center justify-center shrink-0 shadow-md overflow-hidden bg-white p-1">
                        <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-black tracking-widest text-emerald-600 uppercase">
                            {isAr ? 'الاعتمادات والشراكات الدولية' : 'ACCREDITATIONS & PARTNERS'}
                          </span>
                          <span className="text-[10px] font-bold text-emerald-700 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                            {isAr ? '+35 شريكاً دولياً' : '+35 Global Partners'}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-2xl font-black text-slate-900 leading-tight">
                          {isAr ? 'شبكة الشركاء والاعتمادات الدولية المعتمدة' : 'Official International Partners & Accreditations'}
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedStat(null);
                        setHighlightedPartner(null);
                      }}
                      className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shrink-0 cursor-pointer active:scale-95 shadow-2xs"
                      title={isAr ? 'إغلاق' : 'Close'}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* The exact carousel from bottom of the page */}
                  <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1">
                    <InternationalPartnersCarousel
                      isAr={isAr}
                      inModal={true}
                    />
                  </div>

                  {/* Footer Actions */}
                  <div className="p-4 sm:p-5 bg-white/95 border-t border-primary/15 flex items-center justify-between gap-3 shrink-0">
                    <span className="text-xs text-primary-dark/70 font-semibold hidden sm:inline">
                      {isAr ? 'شبكة الشركاء المعتمدين لجامعة العلوم والتكنولوجيا' : 'UST Official Accredited Global Partners Network'}
                    </span>

                    <div className="flex items-center justify-end w-full sm:w-auto">
                      <button
                        onClick={() => {
                          setSelectedStat(null);
                          setHighlightedPartner(null);
                        }}
                        className="w-full sm:w-auto px-7 py-2 rounded-full border border-primary/20 hover:border-primary/40 text-xs font-bold text-primary-dark hover:bg-slate-100 transition-all text-center cursor-pointer shadow-xs active:scale-95"
                      >
                        {isAr ? 'إغلاق' : 'Close'}
                      </button>
                    </div>
                  </div>
                </div>
              ) : selectedStat.isElearningAds ? (
                /* EXACT OFFICIAL UNIVERSITY ANNOUNCEMENTS PORTAL (Matching Screenshot 1, 2, 3, 4) */
                <ElearningAnnouncementsModal
                  isAr={isAr}
                  onClose={() => {
                    setSelectedStat(null);
                    setHighlightedPartner(null);
                  }}
                />
              ) : selectedStat.isBridgingAds ? (
                /* EXACT BRIDGING ANNOUNCEMENT MODAL (Matching Screenshot 2 from ust.edu.ye) */
                <BridgingAnnouncementModal
                  isAr={isAr}
                  onClose={() => {
                    setSelectedStat(null);
                    setHighlightedPartner(null);
                  }}
                />
              ) : selectedStat.isAcademicProgramsAds ? (
                /* ACADEMIC PROGRAMS & GOLDEN ACCREDITATION MODAL (Matching Screenshots 5, 1, 3, 4 from ust.edu.ye) */
                <AcademicProgramsModal
                  isAr={isAr}
                  onClose={() => {
                    setSelectedStat(null);
                    setHighlightedPartner(null);
                  }}
                />
              ) : (
                /* Regular ad layout for stats 1 and 2 */
                <>
                  {/* Header Banner with University Image */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                    <img
                      src={selectedStat.image}
                      alt={selectedStat.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                    {/* Top Badge and Close Button */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent text-primary-dark font-black text-xs shadow-lg">
                          <Megaphone className="w-4 h-4" />
                          <span>{selectedStat.badge}</span>
                        </div>
                        {selectedStat.date && (
                          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-sm">
                            {selectedStat.date}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedStat(null)}
                        className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all shadow-md active:scale-90"
                        title={isAr ? 'إغلاق' : 'Close'}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Title and Tagline on the image */}
                    <div className="absolute bottom-4 inset-x-5 z-10">
                      <span className="text-accent font-extrabold text-xs sm:text-sm tracking-wide block mb-1">
                        {selectedStat.tagline}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-snug drop-shadow-md">
                        {selectedStat.title}
                      </h3>
                    </div>
                  </div>

                  {/* Modal Body */}
                  <div className="p-6 sm:p-7 space-y-5 max-h-[65vh] overflow-y-auto custom-scrollbar overscroll-contain touch-auto">
                    {/* Description */}
                    <p className="text-sm sm:text-base font-semibold text-primary-dark/80 leading-relaxed">
                      {selectedStat.description}
                    </p>

                    {/* Promotional Highlight Box */}
                    <div className="bg-gradient-to-r from-accent/15 via-accent/25 to-secondary/15 border-2 border-accent/40 rounded-2xl p-4 flex items-center gap-3 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-accent text-primary-dark flex items-center justify-center shrink-0 shadow-sm">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black text-accent-dark block uppercase tracking-wider">
                          {isAr ? 'عرض وميزة حصرية' : 'Exclusive Feature'}
                        </span>
                        <strong className="text-xs sm:text-sm font-extrabold text-primary-dark">
                          {selectedStat.promoBanner}
                        </strong>
                      </div>
                    </div>

                    {/* Highlights List (2x2 grid) */}
                    <div>
                      <h4 className="text-xs font-black text-primary uppercase tracking-wider mb-3">
                        {isAr ? 'أبرز مميزات وحقائق الإعلان:' : 'Key Highlights:'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedStat.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="bg-slate-50 border border-primary/10 rounded-xl p-3 flex items-start gap-2.5 shadow-2xs hover:border-primary/30 transition-all"
                          >
                            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                            <span className="text-xs font-bold text-primary-dark/80 leading-snug">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Official Contact Box */}
                    {selectedStat.contactInfo && (
                      <div className="bg-primary/5 border border-primary/15 rounded-2xl p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <PhoneCall className="w-5 h-5" />
                        </div>
                        <div className="text-xs">
                          <span className="block text-primary-dark/60 font-bold text-[11px] mb-0.5">
                            {isAr ? 'بيانات التواصل والاستفسار الرسمية:' : 'Official Contact & Inquiries:'}
                          </span>
                          <span className="font-black text-primary text-xs sm:text-sm">
                            {selectedStat.contactInfo}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Official Source attribution */}
                    <div className="pt-2 text-[11px] text-slate-400 font-medium flex items-center justify-between border-t border-slate-100">
                      <span>{isAr ? 'المصدر: بوابة وإعلانات جامعة العلوم والتكنولوجيا الرسمية' : 'Source: Official UST Portal & Announcements'}</span>
                      <span className="text-primary font-bold">ust.edu.ye</span>
                    </div>
                  </div>

                  {/* Modal Footer / Actions */}
                  <div className="p-4 sm:p-5 bg-white/95 border-t border-primary/15 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 shrink-0">
                    <button
                      onClick={() => {
                        setSelectedStat(null);
                        setHighlightedPartner(null);
                      }}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-primary/20 text-xs font-bold text-primary-dark hover:bg-slate-100 transition-all text-center cursor-pointer active:scale-95 shadow-xs"
                    >
                      {isAr ? 'إغلاق' : 'Close'}
                    </button>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <button
                        onClick={() => {
                          setSelectedStat(null);
                          setHighlightedPartner(null);
                          navigate(selectedStat.secondaryUrl);
                        }}
                        className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full border border-primary/20 text-xs font-bold text-primary hover:border-primary transition-all text-center cursor-pointer active:scale-95"
                      >
                        {selectedStat.secondaryText}
                      </button>
                      <button
                        onClick={() => {
                          setSelectedStat(null);
                          setHighlightedPartner(null);
                          navigate(selectedStat.actionUrl);
                        }}
                        className="flex-1 sm:flex-initial bg-secondary hover:bg-secondary-light text-primary font-black px-6 py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                      >
                        <span>{selectedStat.actionText}</span>
                        {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
