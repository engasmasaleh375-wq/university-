import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Award,
  BookOpen,
  GraduationCap,
  Globe,
  Users,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowLeft,
  X,
  Layers,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  Smile,
  Pill,
  Building2,
  Briefcase,
  Plane,
  Bot,
  Car,
  Activity,
  HeartPulse,
  Heart,
  ExternalLink
} from 'lucide-react';
import { USTOfficialContactFooter } from './ElearningAnnouncements';
import { MedicalFacultyNewsBanner, UST30YearsProgramsBanner } from './MedicalFacultyAnnouncements';
import { LatestUniversityNewsModalContent } from './LatestUniversityNews';

export { MedicalFacultyNewsBanner, UST30YearsProgramsBanner, LatestUniversityNewsModalContent };

/**
 * Visual Banner 5: 5 Golden Programmatic Accreditations
 * "جامعة العلوم والتكنولوجيا تحصل على الاعتماد الأكاديمي البرامجي الذهبي الكامل لـ 5 برامج"
 */
export function GoldenAccreditationBanner({ isAr = true }) {
  const accreditedPrograms = [
    { nameAr: 'الطب والجراحة', nameEn: 'Medicine & Surgery (MBBS)', icon: Stethoscope },
    { nameAr: 'طب وجراحة الفم والأسنان', nameEn: 'Dentistry (BDS)', icon: Smile },
    { nameAr: 'صيدلة', nameEn: 'Pharmacy (PharmD / BPharm)', icon: Pill },
    { nameAr: 'هندسة مدنية', nameEn: 'Civil Engineering (B.Sc.)', icon: Building2 },
    { nameAr: 'إدارة أعمال', nameEn: 'Business Administration (B.Sc.)', icon: Briefcase }
  ];

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl bg-gradient-to-b from-sky-50 via-white to-sky-50 p-5 sm:p-7 select-none">
      {/* Top 30 Years Anniversary Mark & Crest */}
      <div className="flex flex-col items-center justify-center text-center mb-6">
        <div className="flex items-center gap-4 mb-2">
          {/* 30 Years Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900 text-white shadow-md border border-amber-400/40">
            <span className="text-amber-400 font-extrabold text-xs">30</span>
            <span className="text-[10px] font-bold text-sky-100">عاماً من الريادة والتميز</span>
          </div>

          <div className="w-12 h-12 rounded-full bg-white p-1 border-2 border-primary/20 shadow-sm flex items-center justify-center">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
          </div>
        </div>

        <h4 className="text-xs sm:text-sm font-black text-primary uppercase tracking-wider">
          جامعة العلوم والتكنولوجيا • المركز الرئيسي صنعاء
        </h4>
      </div>

      {/* The 5 Golden Shields Row matching Screenshot 5 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 my-6">
        {accreditedPrograms.map((prog, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Golden Shield Container */}
            <div className="w-full max-w-[150px] aspect-[4/5] rounded-t-3xl rounded-b-xl bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 border-2 border-amber-500 shadow-md flex flex-col items-center justify-between p-2.5 relative overflow-hidden group-hover:shadow-xl transition-shadow">
              {/* Quality Seal Ribbons */}
              <div className="w-8 h-8 rounded-full bg-amber-500/30 border border-amber-600/50 flex items-center justify-center mt-1">
                <prog.icon className="w-4 h-4 text-amber-900" />
              </div>

              {/* Gold Plaque Center Text */}
              <div className="text-center my-auto px-1">
                <span className="text-[9px] font-black text-amber-950 uppercase tracking-widest block">
                  اعتماد ذهبي
                </span>
                <span className="text-[8px] font-bold text-amber-900 block leading-tight">
                  مجلس الاعتماد الأكاديمي
                </span>
              </div>

              {/* Shield Base */}
              <div className="w-full text-center">
                <span className="text-[8px] font-mono font-bold text-amber-950/80">★ GOLD ★</span>
              </div>
            </div>

            {/* Blue Pedestal Label matching ust.edu.ye */}
            <div className="w-full max-w-[150px] mt-1.5 py-1.5 px-2 rounded-xl bg-[#0088cc] text-white text-center shadow-xs border border-sky-400/30">
              <span className="text-[11px] sm:text-xs font-black block leading-tight truncate">
                {isAr ? prog.nameAr : prog.nameEn}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Cyan/Navy Announcement Banner matching Screenshot 5 */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#0077b5] via-[#0284c7] to-[#0077b5] p-4 sm:p-5 text-white text-center shadow-lg border-2 border-cyan-300/40 relative">
        <h3 className="text-sm sm:text-lg md:text-xl font-black text-white leading-snug">
          {isAr
            ? 'جامعة العلوم والتكنولوجيا تحصل على الاعتماد الأكاديمي البرامجي الذهبي الكامل لـ 5 برامج'
            : 'UST Obtains Full Golden Academic Programmatic Accreditation for 5 Programs'}
        </h3>
        <p className="text-[11px] sm:text-xs text-sky-100 font-semibold mt-1">
          {isAr
            ? 'الاعتماد الصادر عن مجلس الاعتماد الأكاديمي وضمان جودة التعليم العالي في الجمهورية اليمنية'
            : 'Accreditation certified by the Council for Higher Education Accreditation & Quality Assurance'}
        </p>
      </div>
    </div>
  );
}

/**
 * Visual Banner: NEW Engineering Programs (Screenshot 1)
 * "جديد برامج بكالوريوس كلية الهندسة"
 */
export function EngineeringNewProgramsBanner({ isAr = true, onApply }) {
  const navigate = useNavigate();

  const engineeringPrograms = [
    {
      titleAr: 'بكالوريوس علوم وتقنيات الطيران',
      titleEn: 'Aviation Sciences & Technology',
      subAr: 'صيانة وهياكل وملاحة جوية',
      icon: Plane,
      theme: 'from-amber-500 to-sky-600',
      bgImg: '/hero-slide-5.jpg'
    },
    {
      titleAr: 'بكالوريوس هندسة الطيران المدني',
      titleEn: 'Civil Aviation Engineering',
      subAr: 'كهرباء وإلكترونيات / هياكل ومحركات',
      icon: Plane,
      theme: 'from-blue-600 to-cyan-500',
      bgImg: '/hero-slide-4.jpg'
    },
    {
      titleAr: 'بكالوريوس هندسة الروبوتات والذكاء الاصطناعي',
      titleEn: 'Robotics & AI Engineering',
      subAr: 'أنظمة ذكية وأتمتة صناعية وروبوتات',
      icon: Bot,
      theme: 'from-purple-600 to-indigo-500',
      bgImg: '/hero-slide-6.jpg'
    },
    {
      titleAr: 'بكالوريوس هندسة السيارات الكهربائية',
      titleEn: 'Electric Vehicles Engineering (EV)',
      subAr: 'طاقة نظيفة ومحركات وبطاريات ذكية',
      icon: Car,
      theme: 'from-cyan-600 to-blue-700',
      bgImg: '/hero-building.jpg'
    }
  ];

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl bg-gradient-to-b from-white via-sky-50/40 to-white p-5 sm:p-7 select-none">
      {/* Top Header with Crest & NEW Badge */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white p-1 border-2 border-primary/20 shadow-sm flex items-center justify-center shrink-0">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
          </div>
          <div className="text-right" dir={isAr ? 'rtl' : 'ltr'}>
            <h4 className="text-sm font-black text-primary">جامعة العلوم والتكنولوجيا</h4>
            <span className="text-[10px] text-slate-500 font-sans">كلية الهندسة والحاسبات • Faculty of Engineering</span>
          </div>
        </div>

        {/* Big "جديد NEW" Badge */}
        <div className="flex items-center gap-2">
          <span className="px-4 py-1.5 rounded-full bg-[#dc2626] text-white text-xs font-black shadow-md uppercase tracking-wider animate-pulse">
            جديد NEW
          </span>
        </div>
      </div>

      {/* Main Title matching Screenshot 1 */}
      <div className="text-center my-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0284c7] tracking-tight">
          {isAr ? 'جديد برامج بكالوريوس كلية الهندسة' : 'New Engineering Bachelor Programs'}
        </h3>
        <p className="text-xs sm:text-sm font-bold text-slate-600 mt-1 max-w-xl mx-auto">
          {isAr
            ? 'تخصصات نوعية مستقبلية لأول مرة في اليمن تواكب التطور التكنولوجي وصناعة الطيران والذكاء الاصطناعي'
            : 'Cutting-edge future disciplines introduced for the first time in Yemen'}
        </p>
      </div>

      {/* 4 Circular Programs Cards matching Screenshot 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
        {engineeringPrograms.map((prog, idx) => {
          const Icon = prog.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#0284c7] p-4 flex flex-col items-center text-center shadow-xs hover:shadow-xl transition-all duration-300 group"
            >
              {/* Circular Graphic with NEW badge */}
              <div className="relative mb-3">
                <span className="absolute -top-2 -right-2 z-10 px-2 py-0.5 rounded-full bg-[#dc2626] text-white text-[9px] font-black shadow-xs">
                  جديد
                </span>
                <div className={`w-28 h-28 rounded-full p-1 bg-gradient-to-tr ${prog.theme} shadow-md group-hover:scale-105 transition-transform overflow-hidden relative flex items-center justify-center`}>
                  <div className="w-full h-full rounded-full bg-slate-900/40 backdrop-blur-xs flex items-center justify-center text-white">
                    <Icon className="w-12 h-12 text-white drop-shadow-md" />
                  </div>
                </div>
              </div>

              {/* Checked circle & Title matching Screenshot 1 */}
              <div className="flex items-start gap-1.5 mb-1.5 text-right" dir={isAr ? 'rtl' : 'ltr'}>
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug group-hover:text-primary transition-colors">
                  {isAr ? prog.titleAr : prog.titleEn}
                </h4>
              </div>

              <span className="text-[10px] font-semibold text-slate-500 mt-auto pt-1">
                {isAr ? prog.subAr : ''}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom Bar: Apply & Phone */}
      <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full font-bold">
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>7777 61 64 1</span>
          </div>
          <span className="text-slate-600 font-bold hidden sm:inline">www.ust.edu.ye</span>
        </div>

        <button
          onClick={() => {
            if (onApply) onApply();
            else navigate('/admission');
          }}
          className="px-8 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-black shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
        >
          <span>{isAr ? 'سجّل الآن في كلية الهندسة' : 'Enroll in Engineering Now'}</span>
          {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

/**
 * Visual Banner: Clinical MD Doctorate Programs (Screenshot 2)
 * "فتح باب التسجيل في برامج الدكتوراه السريرية (MD) للعام الدراسي 2026-2027"
 */
export function ClinicalDoctorateBanner({ isAr = true, onApply }) {
  const navigate = useNavigate();

  const specialtiesCol1 = [
    'جراحة القلب والأوعية الدموية',
    'الأمراض الجلدية والتناسلية',
    'أنف وأذن وحنجرة',
    'أمراض الغدد الصماء',
    'الأشعة التشخيصية',
    'التوليد وأمراض النساء',
    'أمراض الأعصاب'
  ];

  const specialtiesCol2 = [
    'أمراض القلب والأوعية الدموية',
    'طب أمراض قلب الأطفال',
    'طب الأطفال',
    'جراحة العظام',
    'جراحة الأورام',
    'أمراض الجهاز الهضمي والكبد',
    'جراحة المسالك البولية'
  ];

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl bg-gradient-to-br from-white via-slate-50 to-sky-50/50 p-5 sm:p-7 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Right Half: Doctor in Clinical Coat, Hospital, Button (Screenshot 2) */}
        <div className="lg:col-span-5 flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-200/80 shadow-sm order-1 lg:order-2">
          {/* Top red badge */}
          <div className="mb-3">
            <span className="px-3.5 py-1 rounded-md bg-[#dc2626] text-white text-xs font-black shadow-xs">
              جديد NEW
            </span>
          </div>

          {/* Doctor Portrait representation */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-3 bg-gradient-to-br from-[#0c4a6e] to-[#0369a1] flex items-center justify-center">
            <img
              src="/hero-slide-2.jpg"
              alt="Clinical Doctor"
              className="w-full h-full object-cover mix-blend-luminosity opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-transparent to-transparent" />
            <Stethoscope className="absolute bottom-3 text-white w-8 h-8 drop-shadow-md" />
          </div>

          <div className="w-10 h-10 rounded-full bg-white p-1 shadow-sm border border-slate-200 mb-1 flex items-center justify-center">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
          </div>
          <h4 className="text-sm font-black text-primary">جامعة العلوم والتكنولوجيا</h4>
          <span className="text-[10px] text-slate-500 font-bold block mb-3">
            مستشفى جامعة العلوم والتكنولوجيا التعليمي
          </span>

          <span className="text-xs font-black text-sky-800 bg-sky-100 px-3 py-1 rounded-full mb-3">
            للعام الدراسي 2026-2027
          </span>

          <button
            onClick={() => {
              if (onApply) onApply();
              else navigate('/admission');
            }}
            className="w-full max-w-[200px] py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-black shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            {isAr ? 'سجّل الآن' : 'Apply Now'}
          </button>

          <div className="mt-3 text-[11px] font-mono text-slate-600 flex items-center justify-center gap-2">
            <span>📞 7777 61 64 1</span>
            <span>•</span>
            <span>www.ust.edu.ye</span>
          </div>
        </div>

        {/* Left Half: Headline & 14 Clinical Programs in 2 Columns matching Screenshot 2 */}
        <div className="lg:col-span-7 space-y-4 text-right order-2 lg:order-1" dir={isAr ? 'rtl' : 'ltr'}>
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-[#dc2626]">
              {isAr ? 'فتح باب التسجيل في' : 'Admissions Open For'}
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0284c7] leading-snug">
              {isAr ? 'برامج الدكتوراه السريرية (MD)' : 'Clinical Doctorate Programs (MD)'}
            </h3>
            <p className="text-xs font-bold text-slate-600">
              {isAr
                ? 'تدريب سريري متقدم وإشراف استشاري رفيع بالمستشفى الجامعي التعليمي'
                : 'Advanced clinical fellowship and residency at UST University Hospital'}
            </p>
          </div>

          {/* 14 Programs Grid in 2 Columns matching Screenshot 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            <div className="space-y-1.5">
              {specialtiesCol1.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-[#0088cc] text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center justify-between shadow-2xs hover:bg-[#0077b5] transition-colors"
                >
                  <span className="truncate">{s}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 ml-1" />
                </div>
              ))}
            </div>

            <div className="space-y-1.5">
              {specialtiesCol2.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-[#0088cc] text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center justify-between shadow-2xs hover:bg-[#0077b5] transition-colors"
                >
                  <span className="truncate">{s}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 ml-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Visual Banner: General Admission 1448 AH (Screenshot 3)
 * "تعلن جامعة العلوم والتكنولوجيا عن فتح باب التسجيل للعام الجامعي 1448هـ"
 */
export function GeneralAdmission1448Banner({ isAr = true, onApply }) {
  const navigate = useNavigate();

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl bg-[#0284c7] text-white select-none">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px]">
        {/* Left Side: Campus Building arched photo matching Screenshot 3 */}
        <div className="md:col-span-5 relative bg-[#075985] p-6 flex items-center justify-center overflow-hidden order-1 md:order-1">
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl relative">
            <img
              src="/hero-building.jpg"
              alt="UST Presidency"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-2 inset-x-2 text-center">
              <span className="text-[10px] font-black text-white bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full">
                مبنى رئاسة الجامعة - الجولة مذبح
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: 3D Typography "فتح باب التسجيل للعام الجامعي 1448هـ" */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between order-2 md:order-2 text-right" dir={isAr ? 'rtl' : 'ltr'}>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-white p-1">
                <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xs font-bold text-sky-100 block">جامعة العلوم والتكنولوجيا</span>
                <span className="text-[9px] text-sky-200">University of Science & Technology</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-base sm:text-lg font-bold text-sky-100 block">
                {isAr ? 'تُعــــلــن جامعة العلوم والتكنولوجيا عن' : 'UST Announces'}
              </span>

              {/* 3D Big White Header */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg leading-tight mt-1">
                {isAr ? 'فتح باب التسجيل' : 'Admissions Open'}
              </h1>

              {/* Yellow Year Text */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#fde047] drop-shadow-md mt-1">
                {isAr ? 'للعام الجامعي 1448هـ' : 'For Academic Year 1448 AH'}
              </h2>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-sky-400/40 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded-full border border-white/20">
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span className="font-bold text-white">7777 61 64 1</span>
              </div>
              <span className="text-sky-100 font-bold hidden sm:inline">www.ust.edu.ye</span>
            </div>

            <button
              onClick={() => {
                if (onApply) onApply();
                else navigate('/admission');
              }}
              className="px-7 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-black shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>{isAr ? 'سجّل الآن في الجامعة' : 'Apply Now'}</span>
              {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Visual Banner 1: Postgraduate Studies & Scientific Research
 * "عمادة الدراسات العليا والبحث العلمي"
 */
export function PostgraduateBanner({ isAr = true, onApply }) {
  const navigate = useNavigate();

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl bg-[#0077b5] text-white select-none">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px]">
        {/* Right Half: Abaya Student at Podium & Gold #1 Badge */}
        <div className="md:col-span-5 relative bg-gradient-to-b from-[#005f94] to-[#004870] flex items-center justify-center p-6 order-1 md:order-2 overflow-hidden">
          <div className="w-48 sm:w-56 aspect-[3/4] rounded-t-[90px] rounded-b-[20px] bg-slate-900/60 border-2 border-white/30 overflow-hidden relative shadow-2xl flex items-center justify-center">
            <img
              src="/hero-slide-3.jpg"
              alt="Postgraduate Student"
              className="w-full h-full object-cover mix-blend-luminosity opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 inset-x-3 text-center">
              <span className="text-[10px] font-black text-amber-300 block">
                {isAr ? 'منصة الأبحاث والمناقشات العلمية' : 'Scientific Research Podium'}
              </span>
            </div>
          </div>

          <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 px-3 py-1 rounded-full shadow-lg border border-white/40 flex items-center gap-1.5">
            <span className="text-xs font-black">#1</span>
            <span className="text-[9px] font-bold">الجامعة الأولى</span>
          </div>
        </div>

        {/* Left Half: Typography & Register Button */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between order-2 md:order-1 text-right" dir={isAr ? 'rtl' : 'ltr'}>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-white/20 p-1 backdrop-blur-sm border border-white/30">
                <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-bold text-sky-100">جامعة العلوم والتكنولوجيا</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              {isAr ? 'عمادة الدراسات العليا والبحث العلمي' : 'Deanship of Postgraduate Studies'}
            </h2>

            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-sm sm:text-base font-black text-amber-300 leading-snug">
                {isAr
                  ? 'برامج دراسية بنظام الساعات لتحقيق التوازن بين الدراسة والالتزامات الأخرى في الفترة المسائية'
                  : 'Credit-hour graduate programs designed to balance professional commitments in evening sessions'}
              </h3>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-sky-400/40 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1 bg-white/15 px-3 py-1.5 rounded-full border border-white/20">
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span className="font-bold text-white">7777 61 64 1</span>
              </div>
              <span className="text-sky-200 font-bold hidden sm:inline">USTY</span>
            </div>

            <button
              onClick={() => {
                if (onApply) onApply();
                else navigate('/admission');
              }}
              className="px-6 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-black shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>{isAr ? 'سجّل الآن ←' : 'Register Now →'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Visual Banner 3: International Business Administration (English) - NEW
 * "بكالوريوس إدارة أعمال دولية باللغة الإنجليزية"
 */
export function InternationalBusinessEnglishBanner({ isAr = true, onApply }) {
  const navigate = useNavigate();

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl bg-[#0284c7] text-white select-none">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px]">
        {/* Right Half: Businessman in Suit with glowing digital waves */}
        <div className="md:col-span-5 relative bg-gradient-to-br from-[#0c4a6e] to-[#075985] flex items-center justify-center p-6 order-1 md:order-2 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.3)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-cyan-400/20 border-2 border-cyan-300/40 backdrop-blur-md flex items-center justify-center shadow-2xl mb-2">
              <Briefcase className="w-12 h-12 text-cyan-200" />
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-300 to-transparent rounded-full shadow-lg" />
            <span className="text-[10px] text-cyan-200 font-bold uppercase tracking-widest mt-2">
              Global Leadership & Tech
            </span>
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="bg-[#dc2626] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              جديد NEW
            </span>
            <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full shadow-md">
              UST #1
            </span>
          </div>
        </div>

        {/* Left Half: Typography & Apply */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between order-2 md:order-1 text-right" dir={isAr ? 'rtl' : 'ltr'}>
          <div className="space-y-2">
            <span className="text-xs font-black text-sky-200 uppercase tracking-widest block">
              {isAr ? 'كلية العلوم الإدارية والإنسانية' : 'Faculty of Administrative Sciences'}
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-white">
              {isAr ? 'بكالوريوس' : 'Bachelor of'}
            </h3>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#fde047] leading-tight">
              {isAr ? 'إدارة أعمال دولية باللغة الإنجليزية' : 'International Business Management'}
            </h2>

            <span className="text-xs sm:text-sm font-extrabold text-sky-100 font-sans block tracking-wider">
              International Business Management (English Track)
            </span>
          </div>

          <div className="mt-6 pt-4 border-t border-sky-400/40 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1 bg-white/15 px-3 py-1.5 rounded-full border border-white/20">
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span className="font-bold text-white">7777 61 64 1</span>
              </div>
              <span className="text-sky-100 font-bold hidden sm:inline">www.ust.edu.ye</span>
            </div>

            <button
              onClick={() => {
                if (onApply) onApply();
                else navigate('/admission');
              }}
              className="px-6 py-2.5 rounded-full bg-[#0369a1] hover:bg-[#0284c7] text-white text-xs font-black shadow-lg hover:shadow-xl transition-all border border-cyan-300/40 active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>{isAr ? 'سجّل الآن ←' : 'Register Now →'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Visual Banner 4: The Road to a Better Future (8 Specializations)
 * "الطريق إلى مستقبل أفضل..."
 */
export function RoadToBetterFutureBanner({ isAr = true }) {
  const students = [
    { titleAr: 'طب بشري وجراحة', icon: Stethoscope },
    { titleAr: 'طب وجراحة أسنان', icon: Smile },
    { titleAr: 'صيدلة سريرية', icon: Pill },
    { titleAr: 'مختبرات طبية', icon: ShieldCheck },
    { titleAr: 'هندسة وعمارة', icon: Building2 },
    { titleAr: 'حاسبات وذكاء اصطناعي', icon: Globe },
    { titleAr: 'إدارة أعمال ومحاسبة', icon: Briefcase },
    { titleAr: 'لغات وإنسانيات', icon: GraduationCap }
  ];

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl bg-gradient-to-b from-[#0c4a6e] to-[#082f49] text-white p-6 sm:p-8 select-none">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-sky-500/30">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white p-1 shadow-md">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
          </div>
          <div className="text-right" dir={isAr ? 'rtl' : 'ltr'}>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {isAr ? 'الطريق إلى مستقبل أفضل...' : 'The Road to a Better Future...'}
            </h3>
            <span className="text-[11px] text-sky-200">
              جامعة العلوم والتكنولوجيا • ريادة أكاديمية واعتراف دولي
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-mono">
          <span className="bg-sky-400 text-slate-950 px-1.5 py-0.5 rounded text-[10px] font-black">UST</span>
          <span className="font-bold text-white">#1 in Yemen</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 my-6">
        {students.map((s, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-3 flex flex-col items-center text-center hover:bg-white/20 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-sky-400/20 border border-sky-300/40 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <s.icon className="w-5 h-5 text-sky-200" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-black text-white leading-tight">
              {s.titleAr}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center pt-2">
        <span className="text-xs font-bold text-sky-200">
          {isAr
            ? 'أكثر من 90 برنامجاً وتخصصاً أكاديمياً معتمداً تلبي احتياجات الحاضر وتصنع المستقبل'
            : 'Over 90 accredited academic programs preparing future leaders across all domains'}
        </span>
      </div>
    </div>
  );
}

/**
 * Main Interactive Component for Stat 1:
 * "البرامج الأكاديمية والاعتمادات والدراسات العليا والبرامج الجديدة"
 */
export default function AcademicProgramsModal({ isAr = true, onClose }) {
  const [activeTab, setActiveTab] = useState('gold');
  const navigate = useNavigate();

  const tabs = [
    { id: 'gold', labelAr: 'الاعتماد الذهبي (5 برامج)', labelEn: 'Golden Accreditation', icon: Award },
    { id: 'latest-news', labelAr: 'أحدث الأخبار (أكتوبر 2026)', labelEn: 'Latest UST News', icon: Megaphone },
    { id: 'medicine-faculty', labelAr: 'كلية الطب وأخبارها (SPSS والتشريح)', labelEn: 'Medicine & Health Notices', icon: HeartPulse },
    { id: '30years-tree', labelAr: 'كليات الجامعة (30 عاماً)', labelEn: '30 Years: Programs Tree', icon: Layers },
    { id: 'engineering', labelAr: 'جديد برامج الهندسة', labelEn: 'New Engineering', icon: Plane },
    { id: 'clinical-md', labelAr: 'الدكتوراه السريرية (MD)', labelEn: 'Clinical MD', icon: Stethoscope },
    { id: 'admission-1448', labelAr: 'التسجيل 1448هـ', labelEn: 'Admissions 1448', icon: BookOpen },
    { id: 'postgrad', labelAr: 'الدراسات العليا المسائية', labelEn: 'Postgrad Studies', icon: GraduationCap },
    { id: 'business', labelAr: 'إدارة أعمال بالإنجليزية', labelEn: 'Int. Business', icon: Briefcase },
    { id: 'road', labelAr: 'الطريق للمستقبل', labelEn: 'Road to Future', icon: Sparkles }
  ];

  return (
    <div className="w-full text-slate-800" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Top Switcher Bar */}
      <div className="bg-slate-100/90 p-3 sm:p-4 border-b border-slate-200 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-accent" />
                <span>{isAr ? tab.labelAr : tab.labelEn}</span>
              </button>
            );
          })}
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-200 text-slate-700 border border-slate-300 flex items-center justify-center transition-all shadow-2xs active:scale-90 cursor-pointer"
            title={isAr ? 'إغلاق' : 'Close'}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto custom-scrollbar space-y-6">
        <AnimatePresence mode="wait">
          {/* TAB 1: GOLDEN ACCREDITATIONS (Screenshot 5) */}
          {activeTab === 'gold' && (
            <motion.div
              key="gold"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <GoldenAccreditationBanner isAr={isAr} />

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
                <h4 className="text-sm font-black text-primary">
                  {isAr ? 'عن الاعتماد الأكاديمي البرامجي الكامل:' : 'About Full Programmatic Accreditation:'}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                  {isAr
                    ? 'تعتبر جامعة العلوم والتكنولوجيا أول جامعة أهلية في اليمن تنال الاعتماد البرامجي الذهبي الكامل لخمسة برامج أكاديمية استراتيجية من مجلس الاعتماد الأكاديمي وضمان جودة التعليم العالي، مما يضمن للخريجين اعترافاً دولياً ومحلياً بشهاداتهم وكفاءاتهم في أرقى المؤسسات العالمية.'
                    : 'UST is the pioneer institution in Yemen awarded full golden programmatic accreditation across 5 flagship programs, ensuring global recognition and elite standards for its graduates.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {[
                    'مطابقة كاملة لمعايير الفيدرالية العالمية للتعليم الطبي (WFME) في الطب البشري',
                    'اعتراف مجلس أطباء الأسنان والجمعيات الإقليمية والدولية',
                    'مختبرات صيدلانية وتصنيع دوائي متقدم وفق معايير ممارسات التصنيع الجيد (GMP)',
                    'اعتمادات هندسية وفق معايير ABET الدولية ومعايير جودة إدارة الأعمال'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-primary/10">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-xs font-bold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: MEDICAL FACULTY ANNOUNCEMENTS & LABS (Matching Screenshots 1, 2, 3, 4) */}
          {activeTab === 'medicine-faculty' && (
            <motion.div
              key="medicine-faculty"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <MedicalFacultyNewsBanner
                isAr={isAr}
                onApply={() => {
                  if (onClose) onClose();
                  navigate('/admission');
                }}
              />
            </motion.div>
          )}

          {/* TAB: 30 YEARS FACULTIES TREE (Matching Screenshots 4 & 5) */}
          {activeTab === '30years-tree' && (
            <motion.div
              key="30years-tree"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <UST30YearsProgramsBanner
                isAr={isAr}
                onApply={() => {
                  if (onClose) onClose();
                  navigate('/admission');
                }}
                onExploreFaculties={() => {
                  if (onClose) onClose();
                  navigate('/faculties');
                }}
              />
            </motion.div>
          )}

          {/* TAB: LATEST UNIVERSITY NEWS & EVENTS (Matching Screenshot 2 from ust.edu.ye/ar/) */}
          {activeTab === 'latest-news' && (
            <motion.div
              key="latest-news"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <LatestUniversityNewsModalContent isAr={isAr} />
            </motion.div>
          )}

          {/* TAB 2: NEW ENGINEERING PROGRAMS (Screenshot 1) */}
          {activeTab === 'engineering' && (
            <motion.div
              key="engineering"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <EngineeringNewProgramsBanner
                isAr={isAr}
                onApply={() => {
                  if (onClose) onClose();
                  navigate('/admission');
                }}
              />

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
                <h4 className="text-sm font-black text-primary">
                  {isAr ? 'عن التخصصات الهندسية الحديثة:' : 'About New Engineering Programs:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-primary/10">
                    <span className="text-xs font-black text-primary block mb-1">علوم وتقنيات وهندسة الطيران المدني</span>
                    <p className="text-[11px] text-slate-600 font-semibold leading-relaxed">
                      تأهيل مهندسين وفنيين متخصصين في صيانة وهياكل ومحركات الطائرات المدنية والملاحة الجوية بالتعاون مع كبرى الأكاديميات وهيئات الطيران.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-primary/10">
                    <span className="text-xs font-black text-primary block mb-1">هندسة الروبوتات والسيارات الكهربائية</span>
                    <p className="text-[11px] text-slate-600 font-semibold leading-relaxed">
                      تصميم وبرمجة الأنظمة الذكية المستقلة، الروبوتات الطبية والصناعية، وتكنولوجيا السيارات الكهربائية وبطاريات الليثيوم المتقدمة.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: CLINICAL MD DOCTORATE (Screenshot 2) */}
          {activeTab === 'clinical-md' && (
            <motion.div
              key="clinical-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <ClinicalDoctorateBanner
                isAr={isAr}
                onApply={() => {
                  if (onClose) onClose();
                  navigate('/admission');
                }}
              />

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
                <h4 className="text-sm font-black text-primary">
                  {isAr ? 'مميزات برامج الدكتوراه السريرية بمستشفى الجامعة:' : 'UST Hospital Clinical Fellowship Advantages:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'تدريب عملي سريري في مستشفى جامعة العلوم والتكنولوجيا الأكبر في اليمن',
                    'إشراف مباشر من نخبة استشاريي الطب والجراحة في مختلف التخصصات الدقيقة',
                    'تجهيزات طبية متطورة وغرف عمليات رقمية وقسطرة قلبية ومختبرات مرجعية',
                    'شهادة دكتوراه سريرية مهنية (MD) معتمدة تفتح آفاق العمل الإقليمي والدولي'
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-xs font-bold text-slate-700">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: GENERAL ADMISSION 1448 AH (Screenshot 3) */}
          {activeTab === 'admission-1448' && (
            <motion.div
              key="admission-1448"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <GeneralAdmission1448Banner
                isAr={isAr}
                onApply={() => {
                  if (onClose) onClose();
                  navigate('/admission');
                }}
              />

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
                <h4 className="text-sm font-black text-primary">
                  {isAr ? 'إجراءات وخطوات القبول والتسجيل للعام 1448هـ:' : 'Admission Procedures for 1448 AH:'}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                  {isAr
                    ? 'ترحب جامعة العلوم والتكنولوجيا بالطلبة الجدد للعام الجامعي 1448هـ (2026-2027م) وتتيح التسجيل الإلكتروني الميسر مع توفير اختبارات تحديد المستوى، المنح التنافسية، وخدمات الإرشاد الأكاديمي.'
                    : 'UST warmly welcomes new students for the academic year 1448 AH with expedited online admission and competitive scholarships.'}
                </p>
              </div>
            </motion.div>
          )}

          {/* TAB 5: POSTGRADUATE STUDIES (Screenshot 1 previous) */}
          {activeTab === 'postgrad' && (
            <motion.div
              key="postgrad"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <PostgraduateBanner
                isAr={isAr}
                onApply={() => {
                  if (onClose) onClose();
                  navigate('/admission');
                }}
              />

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
                <h4 className="text-sm font-black text-primary">
                  {isAr ? 'برامج الماجستير والدكتوراه والدبلوم العالي المتاحة:' : 'Available Master, PhD & Higher Diploma Programs:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-primary/10">
                    <span className="text-xs font-black text-primary block mb-1">العلوم الطبية والصحية</span>
                    <p className="text-[11px] text-slate-600 font-semibold">ماجستير طب الأطفال، طب وجراحة العيون، الصحة العامة، والصيدلة السريرية</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-primary/10">
                    <span className="text-xs font-black text-primary block mb-1">العلوم الإدارية والمالية</span>
                    <p className="text-[11px] text-slate-600 font-semibold">ماجستير ودكتوراه إدارة الأعمال (MBA & PhD)، المحاسبة، والعلوم المالية والمصرفية</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-primary/10">
                    <span className="text-xs font-black text-primary block mb-1">الهندسة والحاسبات</span>
                    <p className="text-[11px] text-slate-600 font-semibold">ماجستير الهندسة المعمارية والمدنية، وماجستير نظم المعلومات الحاسوبية والذكاء الاصطناعي</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 6: INTERNATIONAL BUSINESS ENGLISH (Screenshot 3 previous) */}
          {activeTab === 'business' && (
            <motion.div
              key="business"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <InternationalBusinessEnglishBanner
                isAr={isAr}
                onApply={() => {
                  if (onClose) onClose();
                  navigate('/admission');
                }}
              />

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
                <h4 className="text-sm font-black text-primary">
                  {isAr ? 'مميزات المسار الدولي باللغة الإنجليزية:' : 'Key Advantages of the International English Track:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'تدريس كامل باللغة الإنجليزية من قبل أساتذة وخبراء معتمدين دولياً',
                    'منهج معتمد يواكب متطلبات كبرى المنظمات الدولية والشركات متعددة الجنسيات',
                    'فرص تبادل أكاديمي وتدريب صيفي مع الجامعات الشريكة في ماليزيا والأردن ومصر',
                    'تأهيل الخريج للحصول على شهادات قيادية دولية في إدارة المشاريع والتجارة الإلكترونية'
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-xs font-bold text-slate-700">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 7: ROAD TO BETTER FUTURE */}
          {activeTab === 'road' && (
            <motion.div
              key="road"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <RoadToBetterFutureBanner isAr={isAr} />

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs text-center space-y-3">
                <h4 className="text-sm font-black text-primary">
                  {isAr ? 'اختر تخصصك وابدأ قصة نجاحك في الجامعة الأولى في اليمن' : 'Choose Your Major & Start Your Success Story'}
                </h4>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      if (onClose) onClose();
                      navigate('/faculties');
                    }}
                    className="px-5 py-2.5 rounded-xl border border-primary/20 text-xs font-bold text-primary hover:bg-white transition-all cursor-pointer"
                  >
                    {isAr ? 'استعراض جميع الكليات والتخصصات' : 'Explore All Faculties'}
                  </button>
                  <button
                    onClick={() => {
                      if (onClose) onClose();
                      navigate('/admission');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-black shadow-md transition-all cursor-pointer"
                  >
                    {isAr ? 'التقديم والقبول الإلكتروني' : 'Apply Online'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Official Contact Footer matching Screenshot 4 */}
        <USTOfficialContactFooter isAr={isAr} />
      </div>
    </div>
  );
}
