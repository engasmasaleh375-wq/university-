import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
  Layers,
  GraduationCap,
  Building2,
  Calendar,
  FileCheck
} from 'lucide-react';
import { USTOfficialContactFooter } from './ElearningAnnouncements';

/**
 * Authentic High-Fidelity Banner matching Screenshot 2 from ust.edu.ye:
 * "فتح التسجيل بنظام التجسير - أكمل مسيرتك التعليمية من الدبلوم إلى البكالوريوس"
 */
export function BridgingVisualBanner({ isAr = true, onApply }) {
  const navigate = useNavigate();

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl bg-white select-none">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px] md:min-h-[360px]">
        {/* Right Half in RTL (Left in LTR): University Building & Crest */}
        <div className="md:col-span-6 relative overflow-hidden bg-gradient-to-tr from-[#0284c7] via-[#0369a1] to-[#0c4a6e] p-6 flex flex-col justify-between text-white order-1 md:order-2">
          {/* Background campus overlay */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <img
              src="/hero-building.jpg"
              alt="UST Campus"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e] via-transparent to-transparent opacity-80" />

          {/* Top Logo & University Name */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white p-1 shadow-md border border-white/40 shrink-0">
              <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="text-sm md:text-base font-black text-white leading-tight">
                جامعة العلوم والتكنولوجيا
              </h4>
              <span className="text-[10px] text-sky-200 font-sans block">
                University of Science & Technology
              </span>
            </div>
          </div>

          {/* Center Motto */}
          <div className="relative z-10 my-6 text-center md:text-right">
            <span className="inline-block bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-sky-100 border border-white/20 mb-2">
              {isAr ? 'حملة الدبلوم المتوسط' : 'Diploma Holders'}
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white leading-snug drop-shadow-md">
              {isAr ? 'ارتقِ بمكانتك العلمية والمهنية' : 'Elevate Your Academic & Professional Career'}
            </h3>
          </div>

          {/* Bottom Contact Strip */}
          <div className="relative z-10 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1.5 text-sky-200">
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span className="font-bold text-white tracking-wider">7777 61 64 1</span>
            </div>
            <span className="text-white/80 font-bold">www.ust.edu.ye</span>
          </div>
        </div>

        {/* Left Half in RTL: Typography, Stack of Books, Red "سجل الآن" Button */}
        <div className="md:col-span-6 bg-gradient-to-br from-slate-50 via-white to-sky-50/40 p-6 sm:p-8 flex flex-col justify-between items-start text-right order-2 md:order-1" dir={isAr ? 'rtl' : 'ltr'}>
          {/* Main Headline */}
          <div className="w-full space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7] animate-pulse" />
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">
                {isAr ? 'عمادة القبول والتسجيل' : 'Admissions & Registration'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {isAr ? 'فتح التسجيل' : 'Admissions Open'}
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0284c7] tracking-tight leading-tight">
              {isAr ? 'بنظام التجسير' : 'Bridging Program'}
            </h2>

            <div className="w-16 h-1 bg-[#0284c7] rounded-full my-3" />

            <p className="text-xs sm:text-sm md:text-base font-extrabold text-slate-700 leading-relaxed max-w-sm">
              {isAr
                ? 'أكمل مسيرتك التعليمية من الدبلوم إلى البكالوريوس'
                : 'Complete your academic journey from Diploma to accredited Bachelor Degree'}
            </p>
          </div>

          {/* Middle Graphic: Stack of Academic Books & Red Button */}
          <div className="w-full mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-4 flex-wrap">
            {/* Visual Books Stack Graphic */}
            <div className="flex items-center gap-2 bg-sky-100/60 border border-sky-200/80 px-3.5 py-2 rounded-2xl">
              <div className="flex flex-col -space-y-1">
                <span className="w-7 h-1.5 rounded-sm bg-teal-600 block shadow-xs" />
                <span className="w-8 h-1.5 rounded-sm bg-sky-500 block shadow-xs" />
                <span className="w-7 h-1.5 rounded-sm bg-emerald-500 block shadow-xs" />
                <span className="w-9 h-1.5 rounded-sm bg-blue-700 block shadow-xs" />
              </div>
              <div className="text-[11px] font-black text-primary leading-tight">
                <span>{isAr ? 'معادلة المقررات والساعات' : 'Credit Transfer System'}</span>
              </div>
            </div>

            {/* Red Button "سجّل الآن" matching Screenshot 2 */}
            <button
              onClick={() => {
                if (onApply) onApply();
                else navigate('/admission');
              }}
              className="px-7 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-black shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2 group cursor-pointer"
            >
              <span>{isAr ? 'سجّل الآن' : 'Register Now'}</span>
              {isAr ? (
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Full Bridging Modal Component
 */
export default function BridgingAnnouncementModal({ isAr = true, onClose }) {
  const navigate = useNavigate();

  const eligibleFaculties = [
    { nameAr: 'كلية الصيدلة', nameEn: 'Faculty of Pharmacy', majorAr: 'صيدلة عامة / صيدلة سريرية', count: 'دبلوم صيدلة' },
    { nameAr: 'كلية الطب والعلوم الصحية', nameEn: 'Faculty of Medicine & Health Sciences', majorAr: 'مختبرات طبية، تكنولوجيا الأشعة والتصوير الطبي، التغذية العلاجية والحميات، والتمريض', count: 'دبلومات صحية وطبية' },
    { nameAr: 'كلية الهندسة والحاسبات', nameEn: 'Faculty of Engineering & Computing', majorAr: 'هندسة معمارية، هندسة مدنية، تقنية معلومات', count: 'دبلومات هندسية وتقنية' },
    { nameAr: 'كلية العلوم الإدارية', nameEn: 'Faculty of Administrative Sciences', majorAr: 'محاسبة، إدارة أعمال، تسويق رقمي', count: 'دبلومات إدارية ومالية' }
  ];

  const bridgingRequirements = [
    'أن يكون المتقدم حاصلاً على شهادة الدبلوم المتوسط بعد الثانوية العامة من معهد أو كلية مجتمع معتمدة.',
    'أن يتوافق تخصص الدبلوم مع برنامج البكالوريوس المطلوب التجسير إليه وفق ضوابط وزارة التعليم العالي.',
    'معادلة المقررات الدراسية المشتركة واحتساب الساعات وفق اللائحة الأكاديمية لجامعة العلوم والتكنولوجيا.',
    'توفير أصل شهادة الثانوية العامة وأصل وثيقة الدبلوم مع السجل الأكاديمي المعتمد والمصدق.',
    'جداول دراسية مرنة صباحية ومسائية تناسب الموظفين والعاملين في المستشفيات والمؤسسات والشركات.'
  ];

  return (
    <div className="w-full text-slate-800" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Top Header Bar */}
      <div className="bg-slate-100/90 p-4 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-primary-dark font-black text-xs shadow-2xs">
            <Award className="w-3.5 h-3.5" />
            <span>{isAr ? 'إعلان نظام التجسير المعتمد' : 'Accredited Bridging Notice'}</span>
          </div>
          <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10">
            {isAr ? 'لحملة الدبلوم المتوسط' : 'Diploma to Bachelor'}
          </span>
        </div>

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

      {/* Main Body */}
      <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto custom-scrollbar space-y-6">
        {/* Exact Visual Banner from Screenshot 2 */}
        <BridgingVisualBanner
          isAr={isAr}
          onApply={() => {
            if (onClose) onClose();
            navigate('/admission');
          }}
        />

        {/* Detailed Guidelines Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Eligible Programs */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
            <h4 className="text-sm font-black text-primary flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span>{isAr ? 'الكليات والبرامج المتاحة للتجسير:' : 'Eligible Faculties & Programs:'}</span>
            </h4>
            <div className="space-y-2.5">
              {eligibleFaculties.map((f, idx) => (
                <div key={idx} className="bg-white border border-primary/10 rounded-xl p-3 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-primary">{f.nameAr}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent/20 text-accent-dark">
                      {f.count}
                    </span>
                  </div>
                  <p className="text-[11px] font-semibold text-slate-600 mt-1">
                    {f.majorAr}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Bridging Requirements */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
            <h4 className="text-sm font-black text-primary flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-secondary" />
              <span>{isAr ? 'شروط وضوابط معادلة المواد:' : 'Equivalence Terms & Conditions:'}</span>
            </h4>
            <div className="space-y-2">
              {bridgingRequirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white border border-slate-100 rounded-xl p-2.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-700 leading-snug">
                    {req}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="bg-gradient-to-r from-sky-50 via-white to-sky-50 border border-sky-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div>
              <span className="text-xs font-black text-primary block">
                {isAr ? 'نيابة شؤون الطلاب وعمادة القبول والتسجيل' : 'Admissions & Student Affairs'}
              </span>
              <span className="text-[11px] text-slate-600 font-semibold">
                {isAr ? 'التسجيل متاح حالياً للفصل الدراسي الجديد - المقاعد محدودة' : 'Enrollment open for the upcoming term - limited seats'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                if (onClose) onClose();
                navigate('/faculties');
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-primary/20 text-xs font-bold text-primary hover:bg-white transition-all text-center"
            >
              {isAr ? 'دليل الكليات' : 'Faculties Guide'}
            </button>
            <button
              onClick={() => {
                if (onClose) onClose();
                navigate('/admission');
              }}
              className="flex-1 sm:flex-initial bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-2.5 rounded-xl text-xs font-black shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 active:scale-95"
            >
              <span>{isAr ? 'تقديم طلب التجسير الآن' : 'Apply for Bridging Now'}</span>
              {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Official Contact Footer matching Screenshot 4 */}
        <USTOfficialContactFooter isAr={isAr} />
      </div>
    </div>
  );
}
