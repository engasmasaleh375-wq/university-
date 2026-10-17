import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, Users, Globe, Award, Sparkles, ChevronLeft, ChevronRight, X, CheckCircle2, Megaphone, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { InternationalPartnersCarousel, InternationalPartnersModalContent } from '../components/InternationalPartners';
import ElearningAnnouncementsModal from '../components/ElearningAnnouncements';
import BridgingAnnouncementModal from '../components/BridgingAnnouncementModal';
import AcademicProgramsModal from '../components/AcademicProgramsModal';
import { LatestUniversityNewsSection } from '../components/LatestUniversityNews';

const heroSlides = [
  { url: '/hero-slide-4.jpg', title: 'المبنى الرئيسي ورئاسة الجامعة', titleEn: 'Main Campus & University Presidency' },
  { url: '/hero-building.jpg', title: 'كلية الطب والعلوم الصحية', titleEn: 'Faculty of Medicine & Health Sciences' },
  { url: '/hero-slide-6.jpg', title: 'إطلالة الحرم الجامعي العام', titleEn: 'Main University Campus Overview' },
  { url: '/hero-slide-5.jpg', title: 'كلية العلوم والهندسة', titleEn: 'Faculty of Science & Engineering' },
  { url: '/hero-slide-3.jpg', title: 'كلية العلوم الإدارية والإنسانية', titleEn: 'Faculty of Administrative Sciences' },
  { url: '/hero-slide-1.jpg', title: 'مبنى الكليات - فرع الطالبات', titleEn: 'Colleges Campus - Girls Branch' },
  { url: '/hero-slide-7.jpg', title: 'ساحة وحدائق الحرم الجامعي', titleEn: 'Campus Courtyard & Gardens' },
  { url: '/hero-slide-8.jpg', title: 'المجمع والمرافق الأكاديمية', titleEn: 'Campus Complex & Facilities' },
  { url: '/hero-slide-2.jpg', title: 'المبنى الأكاديمي', titleEn: 'Academic Building' },
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

  const stats = [
    {
      id: 'admission-announcement',
      icon: BookOpen,
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
      icon: Users,
      label: isAr ? 'مركزاً نوعياً وعمادة' : 'Specialized Centers & E-Learning',
      value: '12',
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
      icon: Globe,
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
    <div className="relative bg-slate-white min-h-screen text-primary-dark font-sans overflow-hidden">
      
      {/* Glassy Background Image - Absolute to cover Home content only */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url('${heroSlides[currentSlide].url}')` }}
        ></div>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-md"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-slate-white"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
            
            {/* Left side: Arched Image Container Slideshow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-1/2 flex justify-center order-2"
            >
              <div className="group relative p-3 md:p-5 rounded-[120px] md:rounded-[180px] border border-primary/20 w-[300px] md:w-[420px] bg-white/60 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-primary/40">
                {/* Decorative Elements */}
                <Sparkles className="absolute -top-4 -left-4 w-8 h-8 text-accent animate-pulse z-30" />
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/10 rounded-full blur-md"></div>
                <div className="absolute top-1/4 -right-3 w-6 h-6 rotate-45 border border-secondary/50 rounded-sm"></div>
                <div className="absolute bottom-1/4 -left-4 w-4 h-4 bg-accent/60 rounded-full"></div>
                
                {/* Inner Image Frame / Slideshow */}
                <div className="w-full aspect-[2/3] rounded-[110px] md:rounded-[160px] overflow-hidden relative shadow-2xl border border-white bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/10 z-10 pointer-events-none"></div>
                  
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentSlide}
                      src={heroSlides[currentSlide].url} 
                      alt={isAr ? heroSlides[currentSlide].title : heroSlides[currentSlide].titleEn} 
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-primary flex items-center justify-center backdrop-blur-md shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                  </button>

                  <button 
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-primary flex items-center justify-center backdrop-blur-md shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                  </button>

                  {/* Slide Label & Indicators */}
                  <div className="absolute bottom-5 inset-x-3 z-20 flex flex-col items-center gap-2.5">
                    <div className="bg-primary/90 backdrop-blur-md text-white text-xs md:text-sm px-4 py-1.5 rounded-full shadow-lg border border-white/20 text-center font-bold max-w-[85%] truncate transition-all duration-300">
                      {isAr ? heroSlides[currentSlide].title : heroSlides[currentSlide].titleEn}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex items-center justify-center flex-wrap gap-1.5 bg-black/35 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 max-w-[92%]">
                      {heroSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            idx === currentSlide 
                              ? 'w-5 bg-accent' 
                              : 'w-2 bg-white/60 hover:bg-white'
                          }`}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Right side: Typography (Based on Reference) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-1/2 flex flex-col justify-center order-1"
            >
              {/* Journal Typography label style */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm md:text-base font-bold tracking-wider uppercase bg-accent/10 text-accent-dark px-4 py-1.5 rounded-md border border-accent/20">
                  {lang === 'ar' ? 'التميز الأكاديمي' : 'Academic Excellence'}
                </span>
                <div className="h-[2px] bg-border-light w-16 md:w-32"></div>
              </div>

              {/* Main Title "Don't Compare !" style */}
              <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold mb-8 text-primary flex flex-col gap-2">
                <span className="leading-[1.8] lg:leading-[1.6]">{t('heroTitle1')}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary to-primary block pb-4 leading-[1.4]">{t('heroTitle2')}</span>
              </h1>
              
              {/* Reference underline */}
              <div className="w-32 h-[4px] bg-accent mb-10 rounded-full"></div>

              {/* Description */}
              <p className="text-lg text-primary-dark/70 font-semibold mb-12 max-w-xl leading-relaxed">
                {t('heroDesc')}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <button 
                  onClick={() => navigate('/admission')}
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
                >
                  {t('startAdmission')}
                  {lang === 'ar' ? (
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
                <button 
                  onClick={() => navigate('/faculties')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary border border-border-light rounded-xl font-bold text-lg hover:border-primary/30 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  {t('exploreFaculties')}
                </button>
              </div>

              {/* Hashtag style from reference */}
              <div className="mt-12 text-primary-dark/40 text-sm font-bold tracking-wider">
                #UST_Yemen #Future_Builders
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats / Infographic Section */}
      <section className="py-24 bg-transparent border-t border-primary/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">{t('statTitle', 'أرقام وحقائق')}</h2>
            <p className="text-sm md:text-base font-bold text-primary-dark/70 mb-4 max-w-xl mx-auto">
              {isAr ? 'اضغط على أي رقم لاستعراض أحدث الإعلانات الرسمية والتفاصيل المعتمدة من موقع الجامعة' : 'Click any stat to explore the latest official announcements and accredited details'}
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-16 h-[3px] bg-accent rounded-full"></div>
              <button
                type="button"
                onClick={() => {
                  const newsSec = document.getElementById('latest-news-section');
                  if (newsSec) newsSec.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-black transition-all cursor-pointer shadow-2xs"
              >
                <Megaphone className="w-3.5 h-3.5 text-accent" />
                <span>{isAr ? 'أحدث الأخبار والفعاليات (أكتوبر 2026) ↓' : 'Latest News & Events ↓'}</span>
              </button>
              <div className="w-16 h-[3px] bg-accent rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-4 pb-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ scale: 1.04, y: -6 }}
                onClick={() => setSelectedStat(stat)}
                className={`relative flex flex-col items-center p-7 text-center border-2 border-primary rounded-[80px] bg-white/80 backdrop-blur-sm hover:border-accent hover:bg-white transition-all duration-300 hover:shadow-2xl cursor-pointer group select-none ${idx % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
              >
                {/* Connecting arrow (hidden on mobile, visible on desktop except last) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 rtl:-left-8 ltr:-right-8 w-8 h-[2px] bg-primary z-0 group-hover:bg-accent transition-colors">
                    <ArrowLeft className="absolute -left-3 -top-[11px] text-primary group-hover:text-accent w-6 h-6 rtl:block ltr:hidden transition-colors" />
                    <ArrowRight className="absolute -right-3 -top-[11px] text-primary group-hover:text-accent w-6 h-6 rtl:hidden ltr:block transition-colors" />
                  </div>
                )}
                
                {/* Icon inside double circle */}
                <div className="w-24 h-24 rounded-full border-2 border-primary group-hover:border-accent flex items-center justify-center mb-4 bg-primary group-hover:bg-accent transition-all duration-500 relative z-10 shadow-md">
                  <div className="w-20 h-20 rounded-full bg-white text-primary group-hover:text-primary-dark flex items-center justify-center transition-all duration-500 shadow-sm">
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="mb-3 relative z-10 flex-grow flex flex-col justify-center">
                  <h3 className="text-base font-bold text-primary-dark/80 group-hover:text-primary transition-colors">{stat.label}</h3>
                </div>
                


                {/* Notice preview teaser for academic programs ads */}
                {stat.isAcademicProgramsAds && (
                  <div className="mb-2 relative z-10 flex flex-col items-center gap-1">
                    <div className="flex items-center justify-center gap-1 text-[10px] font-bold bg-primary/5 py-1 px-2 rounded-full border border-primary/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all shadow-2xs text-primary/80">
                      <span>🏆 5 اعتمادات</span>
                      <span>•</span>
                      <span>📰 أحدث الأخبار</span>
                      <span>•</span>
                      <span>🩺 كلية الطب</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-accent-dark group-hover:text-primary transition-colors">
                      {isAr ? '10 إعلانات وأخبار حصرية' : '10 Official Notices'}
                    </span>
                  </div>
                )}

                {/* Notice preview teaser for bridging ads */}
                {stat.isBridgingAds && (
                  <div className="mb-2 relative z-10 flex flex-col items-center gap-1">
                    <div className="flex items-center justify-center gap-1 text-[10px] font-bold bg-primary/5 py-1 px-2.5 rounded-full border border-primary/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all shadow-2xs text-primary/80">
                      <span>📚 دبلوم إلى بكالوريوس</span>
                      <span>•</span>
                      <span>معادلة الساعات</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-accent-dark group-hover:text-primary transition-colors">
                      {isAr ? 'بوستر التجسير الرسمي 2026' : 'Official Bridging Poster'}
                    </span>
                  </div>
                )}

                {/* Notice preview teaser for elearning ads */}
                {stat.isElearningAds && (
                  <div className="mb-2 relative z-10 flex flex-col items-center gap-1">
                    <div className="flex items-center justify-center gap-1 text-[10px] font-bold bg-primary/5 py-1 px-2.5 rounded-full border border-primary/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all shadow-2xs text-primary/80">
                      <span>⚖️ شريعة وقانون</span>
                      <span>•</span>
                      <span>💼 إدارة أعمال</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-accent-dark group-hover:text-primary transition-colors">
                      {isAr ? '3 إعلانات وبوسترات رسمية' : '3 Official Notices'}
                    </span>
                  </div>
                )}

                {/* Country flags ticker for the international partners card */}
                {stat.isPartnersAd && (
                  <div className="mb-2 relative z-10 flex flex-col items-center gap-1">
                    <div className="flex items-center justify-center gap-1.5 text-xs bg-primary/5 py-1 px-3 rounded-full border border-primary/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all shadow-2xs">
                      <span title="مصر">🇪🇬</span>
                      <span title="الأردن">🇯🇴</span>
                      <span title="أمريكا">🇺🇸</span>
                      <span title="ماليزيا">🇲🇾</span>
                      <span title="الصومال">🇸🇴</span>
                      <span title="اليمن">🇾🇪</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-accent-dark group-hover:text-primary transition-colors">
                      {isAr ? '+35 شريكاً دولياً' : '+35 Global Partners'}
                    </span>
                  </div>
                )}

                {/* Large Number at bottom */}
                <div className="mt-auto relative z-10 pb-2">
                  <span className="text-5xl font-extrabold text-border-light group-hover:text-primary/20 transition-colors font-mono">
                    {stat.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest University News & Events Section matching ust.edu.ye/ar/ */}
      <div id="latest-news-section">
        <LatestUniversityNewsSection isAr={isAr} />
      </div>

      {/* Announcement / Advertisement Modal */}
      <AnimatePresence>
        {selectedStat && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedStat(null);
                setHighlightedPartner(null);
              }}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Ad Card Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`relative w-full ${
                selectedStat.isPartnersAd || selectedStat.isElearningAds || selectedStat.isBridgingAds || selectedStat.isAcademicProgramsAds ? 'max-w-5xl' : 'max-w-2xl'
              } bg-white rounded-[2rem] shadow-2xl border-2 border-primary/20 overflow-hidden z-10 my-8 text-right`}
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {selectedStat.isPartnersAd ? (
                /* EXACT CLEAN CAROUSEL LIKE AT THE BOTTOM OF THE PAGE */
                <div className="p-4 sm:p-7 relative">
                  {/* Top Header with Close Button */}
                  <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-primary-dark font-black text-xs shadow-xs">
                        <Megaphone className="w-3.5 h-3.5" />
                        <span>{isAr ? 'إعلان الشركاء والاعتمادات' : 'Partners & Accreditations'}</span>
                      </div>
                      <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10">
                        {isAr ? '+35 شريكاً دولياً' : '+35 Global Partners'}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedStat(null);
                        setHighlightedPartner(null);
                      }}
                      className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all shadow-sm active:scale-90"
                      title={isAr ? 'إغلاق' : 'Close'}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* The exact carousel from bottom of the page */}
                  <InternationalPartnersCarousel
                    isAr={isAr}
                    inModal={true}
                  />

                  {/* Footer Actions */}
                  <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
                      {isAr ? 'شبكة الشركاء المعتمدين لجامعة العلوم والتكنولوجيا' : 'UST Official Accredited Global Partners Network'}
                    </span>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <button
                        onClick={() => {
                          setSelectedStat(null);
                          setHighlightedPartner(null);
                        }}
                        className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all text-center"
                      >
                        {isAr ? 'إغلاق' : 'Close'}
                      </button>
                      <button
                        onClick={() => {
                          setSelectedStat(null);
                          setHighlightedPartner(null);
                          navigate(selectedStat.actionUrl);
                        }}
                        className="flex-1 sm:flex-initial bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-xs font-black transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
                      >
                        <span>{selectedStat.actionText}</span>
                        {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
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
                  <div className="p-6 sm:p-7 space-y-5 max-h-[65vh] overflow-y-auto custom-scrollbar">
                    {/* Description */}
                    <p className="text-sm sm:text-base font-semibold text-primary-dark/80 leading-relaxed">
                      {selectedStat.description}
                    </p>

                    {/* Promotional Highlight Box */}
                    <div className="bg-gradient-to-r from-accent/15 via-accent/25 to-secondary/15 border-2 border-accent/40 rounded-2xl p-4 flex items-center gap-3 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-accent text-primary-dark flex items-center justify-center shrink-0 shadow-sm">
                        <Sparkles className="w-5 h-5" />
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
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200/80 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        setSelectedStat(null);
                        setHighlightedPartner(null);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-primary/20 text-xs font-bold text-primary-dark hover:bg-slate-200 transition-all text-center"
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
                        className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-primary/20 text-xs font-bold text-primary hover:border-primary transition-all text-center"
                      >
                        {selectedStat.secondaryText}
                      </button>
                      <button
                        onClick={() => {
                          setSelectedStat(null);
                          setHighlightedPartner(null);
                          navigate(selectedStat.actionUrl);
                        }}
                        className="flex-1 sm:flex-initial bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-xs font-black transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
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
