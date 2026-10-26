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
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowLeft,
  X,
  Layers,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  Pill,
  Building2,
  Briefcase,
  Plane,
  Car,
  Activity,
  HeartPulse,
  Heart,
  ExternalLink
} from 'lucide-react';
import { MedicalFacultyNewsBanner, UST30YearsProgramsBanner } from './MedicalFacultyAnnouncements';

export { MedicalFacultyNewsBanner, UST30YearsProgramsBanner };

/**
 * Visual Banner 5: 5 Golden Programmatic Accreditations
 * "جامعة العلوم والتكنولوجيا تحصل على الاعتماد الأكاديمي البرامجي الذهبي الكامل لـ 5 برامج"
 */
export function GoldenAccreditationBanner({ isAr = true }) {
  const accreditedPrograms = [
    { nameAr: 'الطب والجراحة', nameEn: 'Medicine & Surgery (MBBS)', icon: Stethoscope },
    { nameAr: 'طب وجراحة الفم والأسنان', nameEn: 'Dentistry (BDS)', icon: Activity },
    { nameAr: 'صيدلة', nameEn: 'Pharmacy (PharmD / BPharm)', icon: Pill },
    { nameAr: 'هندسة مدنية', nameEn: 'Civil Engineering (B.Sc.)', icon: Building2 },
    { nameAr: 'إدارة أعمال', nameEn: 'Business Administration (B.Sc.)', icon: Briefcase }
  ];

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/30 shadow-lg bg-white/20 backdrop-blur-md p-5 sm:p-7 select-none">
      {/* Top 30 Years Anniversary Mark & Crest */}
      <div className="flex flex-col items-center justify-center text-center mb-6">
        <div className="flex items-center gap-4 mb-2">
          {/* 30 Years Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/90 text-white shadow-md border border-sky-300/40 backdrop-blur-sm">
            <span className="text-accent font-extrabold text-xs">30</span>
            <span className="text-[10px] font-bold text-sky-100">عاماً من الريادة والتميز</span>
          </div>

          <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md p-1 border border-white/30 shadow-sm flex items-center justify-center">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
          </div>
        </div>

        <h4 className="text-xs sm:text-sm font-black text-primary uppercase tracking-wider">
          جامعة العلوم والتكنولوجيا • المركز الرئيسي صنعاء
        </h4>
      </div>

      {/* The 5 Golden Accredited Programs Row - Oval / Stadium Capsules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 my-6">
        {accreditedPrograms.map((prog, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center justify-between p-4 sm:p-5 text-center border border-white/30 hover:border-white/60 rounded-[44px] sm:rounded-[48px] bg-white/30 hover:bg-white/45 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 select-none overflow-hidden cursor-default min-h-[250px]"
          >
            {/* Concentric Inner Outline Ring */}
            <div className="absolute inset-1.5 rounded-[36px] sm:rounded-[40px] border border-white/25 pointer-events-none group-hover:border-white/45 transition-colors z-0" />

            {/* Top Futuristic Light Icon Container */}
            <div className="relative z-10 my-1">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-1 bg-white/95 border-2 border-white shadow-[0_0_15px_rgba(0,51,102,0.15)] group-hover:shadow-[0_0_22px_rgba(0,51,102,0.25)] group-hover:scale-105 transition-all flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-white relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.08)_0%,transparent_70%)]" />
                  <prog.icon className="w-8 h-8 text-[#003366] group-hover:rotate-6 transition-transform drop-shadow-[0_2px_8px_rgba(0,51,102,0.12)]" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Accreditation Badge - Pure White & Blue Palette */}
            <div className="relative z-10 my-2 space-y-1">
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-blue-50/80 text-blue-900 border border-blue-200/60 text-[10px] sm:text-[11px] font-black shadow-xs">
                <span>★ اعتماد أكاديمي كامل ★</span>
              </span>
              <span className="text-[10px] font-bold text-primary-dark/70 block">
                مجلس الاعتماد الأكاديمي
              </span>
            </div>

            {/* Pedestal Pill Label matching University Navy theme */}
            <div className="relative z-10 w-full mt-2 py-2 px-3 rounded-full bg-gradient-to-r from-[#072541]/90 to-[#0c4a6e]/90 text-white text-center shadow-xs border border-white/30 group-hover:from-primary group-hover:to-primary-dark transition-all backdrop-blur-xs">
              <span className="text-xs sm:text-[13px] font-black block leading-tight truncate">
                {isAr ? prog.nameAr : prog.nameEn}
              </span>
            </div>
          </div>
        ))}
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
              <div className="w-9 h-9 rounded-full bg-white/30 backdrop-blur-sm p-1 border border-white/30 shadow-xs">
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

              {/* Sky-tinted White Year Text */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-accent drop-shadow-md mt-1">
                {isAr ? 'للعام الجامعي 1448هـ' : 'For Academic Year 1448 AH'}
              </h2>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-sky-400/40 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded-full border border-white/20">
                <Phone className="w-3.5 h-3.5 text-sky-300" />
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
              <span className="text-[10px] font-black text-sky-200 block">
                {isAr ? 'منصة الأبحاث والمناقشات العلمية' : 'Scientific Research Podium'}
              </span>
            </div>
          </div>

          <div className="absolute top-4 right-4 bg-gradient-to-r from-sky-200 to-sky-100 text-primary-dark px-3 py-1 rounded-full shadow-lg border border-white/60 flex items-center gap-1.5">
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
              <h3 className="text-sm sm:text-base font-black text-sky-100 leading-snug">
                {isAr
                  ? 'برامج دراسية بنظام الساعات لتحقيق التوازن بين الدراسة والالتزامات الأخرى في الفترة المسائية'
                  : 'Credit-hour graduate programs designed to balance professional commitments in evening sessions'}
              </h3>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-sky-400/40 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1 bg-white/15 px-3 py-1.5 rounded-full border border-white/20">
                <Phone className="w-3.5 h-3.5 text-sky-300" />
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
            <span className="bg-sky-200 text-primary-dark text-[10px] font-black px-2.5 py-1 rounded-full shadow-md">
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

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-accent leading-tight">
              {isAr ? 'إدارة أعمال دولية باللغة الإنجليزية' : 'International Business Management'}
            </h2>

            <span className="text-xs sm:text-sm font-extrabold text-sky-100 font-sans block tracking-wider">
              International Business Management (English Track)
            </span>
          </div>

          <div className="mt-6 pt-4 border-t border-sky-400/40 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1 bg-white/15 px-3 py-1.5 rounded-full border border-white/20">
                <Phone className="w-3.5 h-3.5 text-sky-300" />
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
    { titleAr: 'طب وجراحة أسنان', icon: Activity },
    { titleAr: 'صيدلة سريرية', icon: Pill },
    { titleAr: 'مختبرات طبية', icon: ShieldCheck },
    { titleAr: 'هندسة وعمارة', icon: Building2 },
    { titleAr: 'حاسبات ونظم تقنية', icon: Globe },
    { titleAr: 'إدارة أعمال ومحاسبة', icon: Briefcase },
    { titleAr: 'لغات وإنسانيات', icon: GraduationCap }
  ];

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl bg-gradient-to-b from-[#0c4a6e] to-[#082f49] text-white p-6 sm:p-8 select-none">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-sky-500/30">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm p-1 border border-white/30 shadow-md">
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

// Authentic medical dental tooth crest (شعار سن أكاديمي دقيق ووقار)
const DentalToothIcon = ({ className = "w-5 h-5 text-[#003366]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.5 2 5.5 4.5 5.5 8c0 3.2 1.4 6.2 2.8 9.5 1 2.3 2 4.5 3.7 4.5s2.7-2.2 3.7-4.5c1.4-3.3 2.8-6.3 2.8-9.5 0-3.5-3-6-6.5-6z" />
    <path d="M12 7v5" />
  </svg>
);

/**
 * Main Component for Stat 1:
 * "البرامج الأكاديمية والاعتمادات الذهبية الـ 5" - صفحة واحدة مدمجة وأنيقة بدون تمرير
 */
export default function AcademicProgramsModal({ isAr = true, onClose }) {
  const navigate = useNavigate();

  const accreditedPrograms = [
    { 
      nameAr: 'الطب والجراحة العامة', 
      nameEn: 'Medicine & Surgery (MBBS)', 
      icon: Stethoscope, 
      tag: 'WFME معتمد دولياً',
    },
    { 
      nameAr: 'طب وجراحة الفم والأسنان', 
      nameEn: 'Dentistry (BDS)', 
      icon: DentalToothIcon, 
      tag: 'اعتماد أكاديمي كامل',
    },
    { 
      nameAr: 'دكتور صيدلة / صيدلة عامة', 
      nameEn: 'Pharmacy (PharmD / BPharm)', 
      icon: Pill, 
      tag: 'معايير GMP الدوائية',
    },
    { 
      nameAr: 'الهندسة المدنية', 
      nameEn: 'Civil Engineering (B.Sc.)', 
      icon: Building2, 
      tag: 'معايير ABET العالمية',
    },
    { 
      nameAr: 'إدارة الأعمال الدولية', 
      nameEn: 'Business Administration (B.Sc.)', 
      icon: Briefcase, 
      tag: 'اعتماد جودة الأعمال',
    }
  ];

  const standards = [
    { textAr: 'مطابقة كاملة لمعايير الفيدرالية العالمية للتعليم الطبي (WFME)', icon: CheckCircle2 },
    { textAr: 'أول جامعة أهلية بالجمهورية اليمنية تنال الاعتماد الذهبي الكامل', icon: Award },
    { textAr: 'مختبرات سريرية وتصنيع دوائي وفق معايير ممارسات التصنيع الجيد (GMP)', icon: CheckCircle2 },
    { textAr: '9 كليات بالمركز الرئيسي بصنعاء وأكثر من 90 برنامجاً وتخصصاً معتمداً', icon: BookOpen }
  ];

  return (
    <div className="w-full text-primary-dark flex flex-col select-none overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-[32px] sm:rounded-[44px]" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Royal Curved Navy Header - Frosted Glass Gradient */}
      <div className="relative px-5 py-4 sm:px-6 sm:py-5 rounded-b-[24px] sm:rounded-b-[30px] shadow-md bg-gradient-to-r from-primary/90 via-primary/95 to-primary-dark/95 backdrop-blur-md border-b border-white/20 text-white flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-blue-100 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,51,102,0.15)] overflow-hidden bg-white/95 p-1">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain drop-shadow-xs" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <span className="text-[11px] font-black tracking-widest text-accent uppercase">
                {isAr ? 'الاعتماد الأكاديمي البرامجي' : 'ACADEMIC PROGRAM ACCREDITATION'}
              </span>
              <span className="inline-flex items-center gap-1 text-[9.5px] font-extrabold text-blue-900 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-blue-100 shadow-xs">
                <Award className="w-3 h-3 text-[#003366]" strokeWidth={1.5} />
                <span>{isAr ? '9 كليات و 90+ برنامجاً معتمداً' : '9 Faculties & 90+ Programs'}</span>
              </span>
            </div>
            <h3 className="text-base sm:text-xl font-black text-white leading-tight">
              {isAr ? 'الريادة الأكاديمية والاعتماد الكامل' : 'Academic Leadership & Full Accreditation'}
            </h3>
            <p className="text-[11px] sm:text-xs text-white/80 mt-0.5 max-w-xl font-medium hidden sm:block">
              {isAr 
                ? 'شهادة تميز وطنية وإقليمية صادرة عن مجلس الاعتماد الأكاديمي وضمان جودة التعليم العالي' 
                : 'National and regional certificate of excellence from the Council for Higher Education Accreditation'}
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all shrink-0 cursor-pointer active:scale-95 shadow-xs"
            title={isAr ? 'إغلاق' : 'Close'}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Modal Body - Single Page with Frosted Glass Cards */}
      <div className="p-4 sm:p-5 space-y-3.5 flex-1 bg-white/10 backdrop-blur-md">
        {/* Highlight Banner Strip */}
        <div className="bg-white/25 backdrop-blur-md border border-white/40 shadow-xs rounded-2xl p-2.5 sm:p-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/95 border border-blue-100 shadow-[0_0_15px_rgba(0,51,102,0.15)] text-[#003366] flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-[#003366]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-xs sm:text-[13px] font-black text-primary">
                {isAr ? 'الجامعة الأولى الحاصلة على الاعتماد الأكاديمي البرامجي الكامل' : 'First University to Receive Full Programmatic Accreditation'}
              </h4>
              <p className="text-[10px] sm:text-[10.5px] font-semibold text-primary-dark/80">
                {isAr ? 'من مجلس الاعتماد الأكاديمي وضمان جودة التعليم العالي لـ 5 برامج تخصصية رائدة' : 'Accredited by the Higher Education Quality Assurance Council for 5 flagship programs'}
              </p>
            </div>
          </div>
          <span className="hidden md:inline-flex px-2.5 py-0.5 rounded-full bg-blue-50/80 text-blue-900 border border-blue-200/60 text-[9.5px] font-extrabold whitespace-nowrap shadow-2xs">
            ★ معتمد رسمياً ★
          </span>
        </div>

        {/* The 5 Accredited Programs Stadium Capsules - Frosted Glass */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {accreditedPrograms.map((prog, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-between p-3 sm:p-3.5 text-center border border-white/40 hover:border-white/70 rounded-[32px] bg-white/30 hover:bg-white/45 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 select-none overflow-hidden"
            >
              {/* Concentric Inner Outline Ring */}
              <div className="absolute inset-1 rounded-[26px] border border-white/25 pointer-events-none group-hover:border-white/50 transition-colors z-0" />

              {/* Top Futuristic Light Icon Container */}
              <div className="relative z-10 my-0.5">
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full p-0.5 bg-white/95 border-2 border-white shadow-[0_0_15px_rgba(0,51,102,0.15)] group-hover:shadow-[0_0_20px_rgba(0,51,102,0.25)] group-hover:scale-105 transition-all flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-white relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.08)_0%,transparent_70%)]" />
                    <prog.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#003366] group-hover:rotate-3 transition-transform drop-shadow-[0_2px_6px_rgba(0,51,102,0.12)]" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Accreditation Badge */}
              <div className="relative z-10 my-1 space-y-0.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50/80 text-blue-900 border border-blue-200/60 text-[9px] font-black shadow-2xs">
                  ★ اعتماد أكاديمي كامل ★
                </span>
                <span className="text-[8.5px] font-bold text-primary-dark/70 block">
                  {prog.tag}
                </span>
              </div>

              {/* Pedestal Pill Label */}
              <div className="relative z-10 w-full mt-1 py-1.5 px-2 rounded-full bg-gradient-to-r from-[#072541]/90 to-[#0c4a6e]/90 text-white text-center shadow-xs border border-white/30 backdrop-blur-xs">
                <span className="text-[11px] sm:text-[12px] font-black block leading-tight">
                  {isAr ? prog.nameAr : prog.nameEn}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-0.5">
          {standards.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/25 hover:bg-white/40 backdrop-blur-md p-2 sm:p-2.5 rounded-2xl border border-white/35 transition-all shadow-xs">
              <item.icon className="w-3.5 h-3.5 text-blue-800 shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] sm:text-[10.5px] font-bold text-primary-dark leading-snug">{item.textAr}</span>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="bg-white/25 backdrop-blur-md border border-white/35 rounded-2xl p-2.5 px-3 flex flex-wrap items-center justify-between gap-2 shadow-xs">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-7 h-7 rounded-full bg-white/90 border border-blue-100 shadow-[0_0_12px_rgba(0,51,102,0.12)] text-[#003366] flex items-center justify-center shrink-0">
              <Phone className="w-3.5 h-3.5 text-[#003366]" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-primary-dark/70 font-semibold text-[10px] block leading-tight">
                {isAr ? 'للتسجيل والاستفسار المباشر:' : 'Direct Admissions & Inquiries:'}
              </span>
              <span className="font-black text-primary text-[11px] sm:text-xs">
                777761641 - 716000700 | {isAr ? 'الرقم المجاني:' : 'Toll Free:'} 8000000
              </span>
            </div>
          </div>

          <span className="text-[10.5px] font-bold text-primary-dark/60">
            www.ust.edu.ye
          </span>
        </div>
      </div>

      {/* Footer Close Only - Frosted Glass */}
      <div className="p-3 sm:p-4 bg-white/25 backdrop-blur-md border-t border-white/30 flex items-center justify-between gap-3 shrink-0 shadow-sm">
        <span className="text-[11px] text-primary-dark/80 font-semibold hidden sm:inline">
          {isAr ? 'جامعة العلوم والتكنولوجيا • الريادة والتميز في التعليم العالي' : 'UST • Excellence in Higher Education'}
        </span>

        <button
          onClick={onClose}
          className="w-full sm:w-auto px-8 py-2 rounded-full bg-white/40 hover:bg-white/60 backdrop-blur-md border border-white/40 hover:border-white/60 text-xs font-bold text-primary-dark transition-all text-center cursor-pointer shadow-xs active:scale-95"
        >
          {isAr ? 'إغلاق' : 'Close'}
        </button>
      </div>
    </div>
  );
}
