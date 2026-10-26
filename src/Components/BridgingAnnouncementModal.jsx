import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Award,
  CheckCircle2,
  X,
  GraduationCap,
  FileCheck,
  ArrowUpRight,
  Sparkles,
  PhoneCall,
  Check
} from 'lucide-react';

/**
 * Full Bridging Modal Component - Matches the Luxury Crystal Architecture of Faculties Modal
 */
export default function BridgingAnnouncementModal({ isAr = true, onClose }) {
  const navigate = useNavigate();

  const eligibleFaculties = [
    { 
      nameAr: 'كلية الصيدلة', 
      nameEn: 'Faculty of Pharmacy', 
      majorAr: 'صيدلة عامة / صيدلة سريرية', 
      majorEn: 'General / Clinical Pharmacy',
      countAr: 'دبلوم صيدلة معتمد',
      countEn: 'Accredited Pharmacy Diploma',
      icon: Award
    },
    { 
      nameAr: 'كلية الطب والعلوم الصحية', 
      nameEn: 'Faculty of Medicine & Health Sciences', 
      majorAr: 'مختبرات طبية، أشعة، تغذية علاجية، تمريض', 
      majorEn: 'Medical Labs, Radiology, Nutrition, Nursing',
      countAr: 'دبلومات صحية وطبية',
      countEn: 'Health & Medical Diplomas',
      icon: GraduationCap
    },
    { 
      nameAr: 'كلية الهندسة والحاسبات', 
      nameEn: 'Faculty of Engineering & Computing', 
      majorAr: 'هندسة معمارية، مدنية، تقنية معلومات، حاسوب', 
      majorEn: 'Architecture, Civil, IT, Computer Science',
      countAr: 'دبلومات هندسية وتقنية',
      countEn: 'Engineering & Tech Diplomas',
      icon: GraduationCap
    },
    { 
      nameAr: 'كلية العلوم الإدارية', 
      nameEn: 'Faculty of Administrative Sciences', 
      majorAr: 'محاسبة، إدارة أعمال، تسويق رقمي، نظم معلومات', 
      majorEn: 'Accounting, Business Admin, Marketing, MIS',
      countAr: 'دبلومات إدارية ومالية',
      countEn: 'Business & Finance Diplomas',
      icon: Award
    }
  ];

  const bridgingRequirements = isAr ? [
    'شهادة دبلوم متوسط معتمدة بعد الثانوية العامة من معهد أو كلية مجتمع معترف بها.',
    'توافق تخصص الدبلوم مع برنامج البكالوريوس المطلوب التجسير إليه بالجامعة.',
    'معادلة المقررات الدراسية واحتساب الساعات وفق اللائحة الأكاديمية لوزارة التعليم العالي.',
    'جداول دراسية مرنة صباحية ومسائية تناسب الموظفين والعاملين في القطاعات المختلفة.'
  ] : [
    'Accredited intermediate diploma after high school from an approved community college/institute.',
    'Diploma major must align with the target bachelor degree program specifications.',
    'Course credits evaluated and transferred in accordance with UST academic regulations.',
    'Flexible morning and evening study schedules tailored for professionals and working students.'
  ];

  return (
    <div className="w-full text-primary-dark flex flex-col select-none overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Clean Light Crystal Header */}
      <div className="relative p-6 sm:p-8 rounded-b-[28px] sm:rounded-b-[36px] bg-gradient-to-b from-white via-white to-slate-50/90 border-b border-slate-200/80 text-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-start justify-between gap-4 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center shrink-0 shadow-md overflow-hidden bg-white p-1">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-xs font-black tracking-widest text-emerald-600 uppercase">
                {isAr ? 'نظام التجسير الأكاديمي المعتمد' : 'ACCREDITED BRIDGING SYSTEM'}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>{isAr ? 'التسجيل مفتوح ومعتمد' : 'Admissions Open'}</span>
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              {isAr ? 'برنامج معادلة الدبلوم إلى البكالوريوس' : 'Diploma to Bachelor Bridging Program'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-medium">
              {isAr 
                ? 'أكمل مسيرتك الأكاديمية ونيل درجة البكالوريوس الرسمية بجامعة العلوم والتكنولوجيا للعام الجامعي 1448هـ' 
                : 'Complete your academic journey from diploma to official accredited Bachelor Degree at UST for the year 1448H'}
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shrink-0 cursor-pointer active:scale-95 shadow-2xs"
            title={isAr ? 'إغلاق' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Modal Body - Frosted Crystal Content */}
      <div className="p-5 sm:p-7 overflow-y-auto custom-scrollbar overscroll-contain touch-auto flex-1 space-y-5">
        {/* Section 1: Eligible Faculties (Stadium Pill Cards) */}
        <div>
          <h4 className="text-xs sm:text-sm font-extrabold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-secondary" />
            <span>{isAr ? 'الكليات والبرامج المتاحة للتجسير ومعادلة الساعات:' : 'Available Faculties & Programs for Bridging:'}</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {eligibleFaculties.map((f, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (onClose) onClose();
                  navigate('/admission');
                }}
                className="group/item cursor-pointer px-4 sm:px-5 py-3 rounded-2xl sm:rounded-full bg-white/85 hover:bg-white border border-primary/15 hover:border-secondary shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-3 relative overflow-hidden backdrop-blur-sm"
              >
                {/* Circular Icon */}
                <div className="w-10 h-10 rounded-full bg-primary/10 group-hover/item:bg-secondary group-hover/item:text-white text-primary flex items-center justify-center shrink-0 transition-all duration-300">
                  <f.icon className="w-5 h-5" />
                </div>

                {/* Title & Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h5 className="font-black text-primary text-xs sm:text-sm group-hover/item:text-secondary transition-colors truncate">
                      {isAr ? f.nameAr : f.nameEn}
                    </h5>
                    <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-secondary/15 text-primary-dark whitespace-nowrap">
                      {isAr ? f.countAr : f.countEn}
                    </span>
                  </div>
                  <p className="text-[10.5px] sm:text-[11px] font-semibold text-primary-dark/70 mt-0.5 truncate">
                    {isAr ? f.majorAr : f.majorEn}
                  </p>
                </div>

                {/* End Round Arrow Button */}
                <div className="w-8 h-8 rounded-full bg-primary/5 group-hover/item:bg-secondary group-hover/item:text-white text-primary flex items-center justify-center shrink-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Bridging Terms & Requirements (Crystal Frosted Strip) */}
        <div>
          <h4 className="text-xs sm:text-sm font-extrabold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-secondary" />
            <span>{isAr ? 'شروط وضوابط معادلة المواد واحتساب الساعات:' : 'Equivalence Terms & Credit Transfer Requirements:'}</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {bridgingRequirements.map((req, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/70 hover:bg-white border border-primary/15 shadow-2xs transition-all backdrop-blur-sm"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-primary-dark/85 leading-snug">
                  {req}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Footer (Identical to Faculties Modal Style) */}
      <div className="p-4 sm:p-5 bg-white/95 border-t border-primary/15 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <button
          onClick={onClose}
          className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-100 text-primary-dark/80 font-bold text-xs sm:text-sm border border-primary/20 shadow-xs transition-all active:scale-95 cursor-pointer"
        >
          {isAr ? 'إغلاق' : 'Close'}
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <span className="text-xs text-primary-dark/70 font-semibold hidden md:inline">
            {isAr ? 'جامعة العلوم والتكنولوجيا • الريادة والتميز في التعليم العالي' : 'UST • Excellence in Higher Education'}
          </span>

          <button
            onClick={() => {
              if (onClose) onClose();
              navigate('/admission');
            }}
            className="flex-1 sm:flex-initial px-7 py-2.5 rounded-full bg-secondary hover:bg-secondary-light text-primary font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{isAr ? 'بدء إجراءات التجسير والقبول' : 'Start Bridging Application'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
