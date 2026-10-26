import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Stethoscope,
  Award,
  Share2,
  BookOpen,
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Microscope,
  Activity,
  HeartPulse,
  Heart,
  Eye,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Users,
  Building2,
  FileText,
  BadgeCheck,
  Megaphone,
  Radio,
  Apple
} from 'lucide-react';
import { USTOfficialContactFooter } from './ElearningAnnouncements';

/**
 * Visual Banner: Medical Faculty Announcements & Core Programs matching ust.edu.ye/med/
 */
export function MedicalFacultyNewsBanner({ isAr = true, onApply, onRegisterCourse }) {
  const navigate = useNavigate();
  const [selectedSubTab, setSelectedSubTab] = useState('programs'); // 'programs', 'courses', 'labs', 'community'

  const programs = [
    {
      id: 'medicine-surgery',
      titleAr: 'برنامج الطب والجراحة',
      titleEn: 'Medicine & Surgery Program (MBBS)',
      degreeAr: 'بكالوريوس الطب والجراحة العامة',
      degreeEn: 'Bachelor of Medicine & Surgery (MBBS)',
      durationAr: '6 سنوات دراسية + سنة امتياز سريري',
      durationEn: '6 Academic Years + 1 Internship Year',
      image: '/med-surgery.jpg',
      accreditationAr: 'الاعتماد الذهبي الكامل • معايير WFME العالمية',
      accreditationEn: 'Full Golden Accreditation • WFME Standards',
      badgeColor: 'bg-emerald-600',
      descriptionAr: 'برنامج رائد ومتميز يؤهل أطباء أكفاء من خلال تدريب سريري مكثف في مستشفى الجامعة ومستشفيات الشراكة الإقليمية والدولية.',
      descriptionEn: 'A flagship program preparing qualified physicians through intensive clinical training at UST Hospital and regional & international partner centers.'
    },
    {
      id: 'medical-labs',
      titleAr: 'برنامج المختبرات الطبية',
      titleEn: 'Medical Laboratories Program',
      degreeAr: 'بكالوريوس تكنولوجيا المختبرات الطبية',
      degreeEn: 'B.Sc. in Medical Laboratory Technology',
      durationAr: '4 سنوات دراسية',
      durationEn: '4 Academic Years',
      image: '/med-labs.jpg',
      accreditationAr: 'معتمد برامجياً وأكاديمياً',
      accreditationEn: 'Programmatically & Academically Accredited',
      badgeColor: 'bg-blue-600',
      descriptionAr: 'تأهيل كفاءات طبية وتشخيصية متقدمة في التحاليل السريرية، الكيمياء الحيوية، المناعة، وعلم الأمراض بأحدث الأجهزة المخبرية.',
      descriptionEn: 'Qualifying diagnostic professionals in clinical analysis, biochemistry, immunology, and pathology with state-of-the-art lab equipment.'
    },
    {
      id: 'radiology',
      titleAr: 'برنامج تكنولوجيا الأشعة والتصوير الطبي',
      titleEn: 'Radiology & Medical Imaging Technology',
      degreeAr: 'بكالوريوس التصوير التشخيصي والتداخلي',
      degreeEn: 'B.Sc. in Diagnostic & Interventional Imaging',
      durationAr: '4 سنوات دراسية',
      durationEn: '4 Academic Years',
      image: '/med-radiology.jpg',
      accreditationAr: 'معتمد برامجياً وأكاديمياً',
      accreditationEn: 'Programmatically & Academically Accredited',
      badgeColor: 'bg-sky-600',
      descriptionAr: 'تدريب تطبيقي على أجهزة الأشعة السينية (X-Ray)، الأشعة المقطعية (CT-Scan)، والرنين المغناطيسي (MRI) والتصوير التلفزيوني بالأمواج فوق الصوتية.',
      descriptionEn: 'Hands-on training on digital X-Ray, CT-Scan, MRI, and diagnostic ultrasound imaging devices.'
    },
    {
      id: 'nutrition',
      titleAr: 'برنامج التغذية العلاجية والحميات',
      titleEn: 'Therapeutic Nutrition & Dietetics',
      degreeAr: 'بكالوريوس التغذية السريرية والعلاجية',
      degreeEn: 'B.Sc. in Clinical & Therapeutic Nutrition',
      durationAr: '4 سنوات دراسية',
      durationEn: '4 Academic Years',
      image: '/med-nutrition.jpg',
      accreditationAr: 'معتمد برامجياً وأكاديمياً',
      accreditationEn: 'Programmatically & Academically Accredited',
      badgeColor: 'bg-sky-600',
      descriptionAr: 'تصميم وإدارة الخطط الغذائية العلاجية للمرضى، الحميات الوقائية، وتغذية الرياضيين في المستشفيات والمراكز التخصصية.',
      descriptionEn: 'Designing and managing medical diet plans, preventive nutrition, and sports diets in hospitals and specialized healthcare centers.'
    }
  ];

  const courses = [
    {
      id: 'anatomy-course',
      titleAr: 'دورة أساسيات التشريح العملي (مجانية)',
      titleEn: 'Practical Anatomy Fundamentals (Free Workshop)',
      sponsorAr: 'برعاية أ.د. القاسم محمد عباس رئيس الجامعة',
      sponsorEn: 'Under auspices of Prof. Al-Qasim Abbas, UST President',
      organizerAr: 'النادي العلمي للجامعة وكلية الطب والعلوم الصحية',
      organizerEn: 'UST Science Club & Faculty of Medicine',
      targetAr: 'للطلاب الراغبين بالالتحاق بالكليات الطبية',
      targetEn: 'For prospective medical students & beginners',
      statusAr: 'دورة حضورية مجانية • المقاعد محدودة',
      statusEn: 'Free In-Person Workshop • Limited Seats',
      image: '/anatomy-course.jpg',
      highlightsAr: [
        'تدريب حضوري عملي داخل معامل ومتحف التشريح المتطور بالجامعة',
        'دراسة وتطبيق عملي على المجسمات ثلاثية الأبعاد لأعضاء الجسم البشري',
        'شهادة حضور معتمدة ومجانية من النادي العلمي وكلية الطب والعلوم الصحية',
        'فرصة استكشافية تؤهل الملتحقين لبدء دراستهم الطبية بثقة وتفوق'
      ],
      highlightsEn: [
        'Hands-on training inside UST advanced anatomy laboratories and museum',
        'Direct practical study on high-precision 3D human organ models',
        'Official certified attendance certificate from UST Science Club & Faculty',
        'An exploratory foundation enabling participants to begin medical studies with confidence'
      ]
    },
    {
      id: 'spss-course',
      titleAr: 'برنامج مكثف في التحليل الإحصائي الطبي عبر برنامج SPSS',
      titleEn: 'Intensive Medical Biostatistics via SPSS',
      sponsorAr: 'إدارة التعليم المستمر والبحوث الطبية',
      sponsorEn: 'Continuing Education & Medical Research Dept.',
      organizerAr: 'كلية الطب والعلوم الصحية',
      organizerEn: 'Faculty of Medicine & Health Sciences',
      targetAr: 'للأطباء، الباحثين، وطلاب الدراسات العليا والكليات الطبية',
      targetEn: 'For physicians, researchers, and postgraduate medical students',
      statusAr: 'برنامج احترافي معتمد • تسجيل مفتوح',
      statusEn: 'Certified Professional Course • Open Registration',
      image: '/spss-course.jpg',
      highlightsAr: [
        'انطلق في عالم البحوث الطبية واحتراف تحليل بيانات أبحاثك بنفسك',
        'قراءة واستخراج النتائج الطبية بدقة وفق المعايير الإحصائية الدولية',
        'تطبيق عملي على بيانات سريرية وإكلينيكية وتصميم الدراسات الطبية',
        'شهادة تدريب تخصصية معتمدة من جامعة العلوم والتكنولوجيا'
      ],
      highlightsEn: [
        'Master medical biostatistics and analyze your own research datasets independently',
        'Interpret and extract clinical findings per international statistical standards',
        'Hands-on applications with real clinical data and study design methods',
        'Accredited professional training certificate from University of Science and Technology'
      ]
    }
  ];

  const communityNews = [
    {
      id: 'autism-campaign',
      dateAr: '23 سبتمبر 2026',
      dateEn: 'September 23, 2026',
      titleAr: 'جامعة العلوم تشارك في إطلاق حملة «سند للتوحد» وتُكرّم تقديراً لدورها المجتمعي',
      titleEn: 'UST Joins the "Sanad for Autism" Launch & Receives Community Recognition',
      image: '/autism-campaign.jpg',
      contentAr: 'شاركت جامعة العلوم والتكنولوجيا في حفل إطلاق حملة «سند للتوحد» واختتام مبادرة «وعي وعيد» تقديراً لجهودها المجتمعية المستمرة ولدور كوادرها الطبية في رعاية وتأهيل ذوي الاحتياجات الخاصة ودعم القطاع الصحي المجتمعي.',
      contentEn: 'UST participated in launching the "Sanad for Autism" campaign in recognition of its sustained community efforts and the role of its medical staff in supporting individuals with special needs.'
    },
    {
      id: 'nutrition-field',
      dateAr: '10 سبتمبر 2026',
      dateEn: 'September 10, 2026',
      titleAr: 'طالبات التغذية العلاجية والحميات ينفذن نزولاً ميدانياً توعوياً إلى مدارس الفاتح الدولية',
      titleEn: 'Clinical Nutrition Students Conduct Awareness Field Visit to Al-Fateh International Schools',
      image: '/nutrition-field.jpg',
      contentAr: 'نفذت طالبات المستوى الثالث بقسم التغذية العلاجية والحميات في كلية الطب والعلوم الصحية نزولاً ميدانياً توعوياً حول التغذية السليمة وصحة وجمال البشرة ونمط الحياة الصحي لطلاب ومعلمي المدارس لتعزيز الثقافة الوقائية.',
      contentEn: 'Third-year Clinical Nutrition students conducted an interactive awareness field visit covering healthy dietary habits and wellness lifestyle for students and faculty.'
    }
  ];

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl bg-white select-none">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-r from-[#0B3B60] via-[#07243B] to-[#0284c7] text-white p-5 sm:p-7 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-sky-400/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-accent/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-full bg-white p-1.5 shadow-lg border border-white/30 flex items-center justify-center shrink-0">
              <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-accent text-primary-dark font-black text-[11px] shadow-xs">
                  {isAr ? 'كلية الطب والعلوم الصحية' : 'Faculty of Medicine & Health Sciences'}
                </span>
                <span className="text-[10px] font-bold text-sky-200">
                  {isAr ? 'المركز الرئيسي - صنعاء • ust.edu.ye/med/' : 'Main Campus - Sana\'a'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {isAr ? 'بوابة برامج وأخبار ودورات كلية الطب والعلوم الصحية' : 'Faculty of Medicine Official Programs & Notices'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                if (onApply) onApply();
                else navigate('/admission');
              }}
              className="px-5 py-2.5 rounded-full bg-accent hover:bg-white text-primary-dark font-black text-xs shadow-md border border-sky-200/40 transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <Stethoscope className="w-4 h-4" />
              <span>{isAr ? 'التقديم لكلية الطب' : 'Apply to Medicine'}</span>
            </button>
          </div>
        </div>

        {/* Sub-navigation tabs */}
        <div className="flex items-center gap-2 mt-5 pt-3 border-t border-white/15 overflow-x-auto scrollbar-none">
          {[
            { id: 'programs', labelAr: 'البرامج الأكاديمية (4 برامج)', labelEn: 'Programs', icon: Stethoscope },
            { id: 'courses', labelAr: 'الدورات المجانية والتدريبية (SPSS والتشريح)', labelEn: 'Workshops & Courses', icon: Award },
            { id: 'labs', labelAr: 'معامل ومتحف التشريح المتطور', labelEn: 'Anatomy Labs', icon: Microscope },
            { id: 'community', labelAr: 'الأخبار والمبادرات المجتمعية', labelEn: 'Community News', icon: Users }
          ].map((sub) => {
            const Icon = sub.icon;
            const isActive = selectedSubTab === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubTab(sub.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-primary shadow-sm'
                    : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : 'text-accent'}`} />
                <span>{isAr ? sub.labelAr : sub.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main SubTab Content Area */}
      <div className="p-5 sm:p-7 space-y-6">
        <AnimatePresence mode="wait">
          {/* TAB 1: CORE PROGRAMS (Screenshot 2) */}
          {selectedSubTab === 'programs' && (
            <motion.div
              key="programs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-black text-primary flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-secondary" />
                    <span>{isAr ? 'البرامج والتخصصات المعتمدة بكلية الطب والعلوم الصحية:' : 'Accredited Medical Programs:'}</span>
                  </h4>
                  <p className="text-xs font-semibold text-slate-600 mt-0.5">
                    {isAr
                      ? 'برامج حاصلة على الاعتماد البرامجي الذهبي الكامل ومعايير الجودة العالمية لإعداد كوادر طبية متميزة.'
                      : 'Flagship academic programs with full programmatic accreditation and modern clinical facilities.'}
                  </p>
                </div>

                <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold shrink-0">
                  {isAr ? 'الاعتماد الذهبي الكامل' : 'Golden Accreditation'}
                </div>
              </div>

              {/* 4 Programs Grid matching Screenshot 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {programs.map((p) => (
                  <div
                    key={p.id}
                    className="group bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Program Real Image matching Screenshot 2 */}
                      <div className="relative h-36 w-full overflow-hidden bg-slate-900">
                        <img
                          src={p.image}
                          alt={p.titleAr}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <span className={`absolute top-2.5 right-2.5 ${p.badgeColor} text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md`}>
                          {isAr ? p.accreditationAr : p.accreditationEn}
                        </span>
                        <div className="absolute bottom-2.5 inset-x-3 text-white">
                          <h5 className="text-xs font-black drop-shadow-sm leading-tight text-white">
                            {isAr ? p.titleAr : p.titleEn}
                          </h5>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-3.5 space-y-2">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                          <Clock className="w-3.5 h-3.5 text-accent" />
                          <span>{isAr ? p.durationAr : p.durationEn}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                          {isAr ? p.descriptionAr : p.descriptionEn}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 pt-0">
                      <button
                        onClick={() => {
                          if (onApply) onApply();
                          else navigate('/admission');
                        }}
                        className="w-full py-2 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>{isAr ? 'التقديم على البرنامج' : 'Apply Now'}</span>
                        {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 2: SPECIALIZED COURSES & WORKSHOPS (Screenshots 3 & 4) */}
          {selectedSubTab === 'courses' && (
            <motion.div
              key="courses"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Megaphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-sky-950">
                    {isAr ? 'إعلانات الدورات التدريبية والتأهيلية لطلبة الطب والأطباء الباحثين' : 'Medical Workshops & Scientific Courses'}
                  </h4>
                  <p className="text-[11px] text-sky-900 font-medium mt-0.5">
                    {isAr
                      ? 'دورات تخصصية حضورية وبرامج مكثفة برعاية رئاسة الجامعة وعمادة الكلية والنادي العلمي.'
                      : 'Free hands-on workshops and advanced biostatistics training for medical students and researchers.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl border-2 border-primary/15 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Course Poster Image */}
                      <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.titleAr}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">
                          {isAr ? course.statusAr : course.statusEn}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="p-4 sm:p-5 space-y-3">
                        <div>
                          <span className="text-[11px] font-black text-secondary block mb-0.5">
                            {isAr ? course.sponsorAr : course.sponsorEn}
                          </span>
                          <h4 className="text-base sm:text-lg font-black text-primary leading-snug">
                            {isAr ? course.titleAr : course.titleEn}
                          </h4>
                          <span className="text-xs font-bold text-slate-500 block mt-1">
                            {isAr ? course.targetAr : course.targetEn}
                          </span>
                        </div>

                        {/* Highlights list */}
                        <div className="space-y-1.5 pt-2 border-t border-slate-100">
                          {(isAr ? course.highlightsAr : course.highlightsEn).map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 pt-0">
                      <button
                        onClick={() => {
                          if (onApply) onApply();
                          else navigate('/admission');
                        }}
                        className="w-full py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-black shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Award className="w-4 h-4 text-accent" />
                        <span>{isAr ? 'سجّل الآن في الدورة' : 'Register Now'}</span>
                        {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: ADVANCED ANATOMY LAB (Screenshot 1) */}
          {selectedSubTab === 'labs' && (
            <motion.div
              key="labs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Photo Showcase from Screenshot 1 */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-sky-200 shadow-xl bg-slate-900 group">
                <img
                  src="/anatomy-lab.jpg"
                  alt="معامل ومتحف التشريح الطبي - جامعة العلوم والتكنولوجيا"
                  className="w-full h-auto max-h-[380px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 inset-x-5 text-white z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent text-primary-dark text-xs font-black">
                      {isAr ? 'متحف ومعامل التشريح والمحاكاة الإكلينيكية' : 'Clinical Anatomy & Simulation Museum'}
                    </span>
                    <span className="text-xs font-bold text-sky-200 hidden sm:inline">
                      {isAr ? 'كلية الطب والعلوم الصحية' : 'Faculty of Medicine'}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-black drop-shadow-md">
                    {isAr
                      ? 'تجهيزات مخبرية وسريرية تحاكي أرقى الجامعات العالمية'
                      : 'World-Class Clinical & Anatomy Simulation Facilities'}
                  </h4>
                </div>
              </div>

              {/* Organ Systems breakdown */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                <h4 className="text-sm font-black text-primary">
                  {isAr ? 'المجسمات والنماذج التشريحية ثلاثية الأبعاد المتاحة بالمعمل:' : 'Key Anatomical Models & Training Units:'}
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { title: 'الكلى والمسالك', desc: 'Renal & Urinary System', icon: Activity },
                    { title: 'الجهاز العصبي', desc: 'Central Nervous System', icon: Share2 },
                    { title: 'الجهاز الهضمي', desc: 'Digestive & Visceral', icon: HeartPulse },
                    { title: 'القلب والرئتين', desc: 'Cardiopulmonary Models', icon: Heart },
                    { title: 'العين والحواس', desc: 'Sensory Organs & Eye', icon: Eye },
                    { title: 'التشريح الجراحي', desc: 'Surgical Anatomy Desks', icon: Microscope }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col items-center text-center">
                        <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                          <Icon className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-xs font-black text-primary">{item.title}</span>
                        <span className="text-[10px] text-slate-500 font-medium">{item.desc}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 bg-white rounded-xl border border-primary/10 text-xs font-semibold text-slate-700 leading-relaxed">
                  {isAr
                    ? 'توفر كلية الطب والعلوم الصحية بجامعة العلوم والتكنولوجيا معامل تشريح متقدمة تضم نماذج ومجسمات بلاستيكية وطبية دقيقة مطابقة لجسم الإنسان، ومجهزة بشاشات عرض تفاعلية ومقاعد مخصصة للطلاب لإتقان التشريح الوصفي والتطبيقي تحت إشراف نخبة من أساتذة الطب والاستشاريين.'
                    : 'The Faculty of Medicine provides cutting-edge anatomy and pathology laboratories equipped with high-fidelity anatomical models, interactive projection screens, and clinical workstations ensuring superior practical mastery.'}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: COMMUNITY NEWS & FIELD TRIPS (Screenshot 3) */}
          {selectedSubTab === 'community' && (
            <motion.div
              key="community"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-base font-black text-primary flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" />
                  <span>{isAr ? 'أخبار الكلية والمبادرات الصحية المجتمعية:' : 'Faculty News & Community Initiatives:'}</span>
                </h4>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">
                  {isAr
                    ? 'حضور مجتمعي فاعل ومشاركات ميدانية لنشر الثقافة الصحية ورعاية الفئات الخاصة.'
                    : 'Community outreach, field health campaigns, and community healthcare initiatives.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {communityNews.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                        <img
                          src={item.image}
                          alt={isAr ? item.titleAr : item.titleEn}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-2.5 right-3 bg-white/90 text-primary-dark text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-sm">
                          {isAr ? item.dateAr : item.dateEn}
                        </span>
                      </div>

                      <div className="p-4 space-y-2">
                        <h5 className="text-sm font-black text-primary leading-snug">
                          {isAr ? item.titleAr : item.titleEn}
                        </h5>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                          {isAr ? item.contentAr : item.contentEn}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-0">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-secondary">
                        <BadgeCheck className="w-3.5 h-3.5" />
                        <span>{isAr ? 'مسؤولية مجتمعية وصحية رائدة' : 'UST Social & Healthcare Impact'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/**
 * Visual Banner: 30 Years of Excellence & University Programs Tree (Screenshots 4 & 5)
 */
export function UST30YearsProgramsBanner({ isAr = true, onApply, onExploreFaculties }) {
  const navigate = useNavigate();

  const facultiesGrid = [
    { nameAr: 'الطب والعلوم الصحية', nameEn: 'Medicine & Health Sciences', num: '01', color: 'border-blue-500 text-blue-700' },
    { nameAr: 'طب وجراحة الأسنان', nameEn: 'Dentistry', num: '02', color: 'border-emerald-500 text-emerald-700' },
    { nameAr: 'كلية الصيدلة', nameEn: 'Pharmacy', num: '03', color: 'border-teal-500 text-teal-700' },
    { nameAr: 'الهندسة والعمارة', nameEn: 'Engineering', num: '04', color: 'border-sky-500 text-sky-700' },
    { nameAr: 'الحاسبات وتكنولوجيا المعلومات', nameEn: 'Computing & IT', num: '05', color: 'border-indigo-500 text-indigo-700' },
    { nameAr: 'العلوم الإدارية والإنسانية', nameEn: 'Administrative Sciences', num: '06', color: 'border-purple-500 text-purple-700' }
  ];

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl bg-gradient-to-b from-sky-50 via-white to-sky-50 p-5 sm:p-7 select-none">
      {/* Top Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          {/* 30 Years Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900 text-white shadow-md border border-sky-300">
            <span className="text-accent font-black text-sm">30</span>
            <span className="text-xs font-bold text-sky-100">
              {isAr ? 'عاماً من الريادة والتميز' : 'Years of Excellence'}
            </span>
          </div>

          <div className="w-10 h-10 rounded-full bg-white p-1 border border-primary/20 shadow-xs flex items-center justify-center">
            <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
          </div>
        </div>

        <span className="text-xs font-black text-secondary block uppercase tracking-wider mb-1">
          {isAr ? 'جامعة العلوم والتكنولوجيا • المركز الرئيسي صنعاء' : 'University of Science & Technology - Main Campus'}
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-primary leading-tight">
          {isAr ? 'باب التسجيل مستمر ومفتوح للعام الجامعي 2026-2027' : 'Admissions Open for Academic Year 2026-2027'}
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-xl mx-auto mt-1">
          {isAr
            ? '30 عاماً من العطاء الأكاديمي وبناء أجيال المستقبل عبر كليات معتمدة وبرامج تعليمية نوعية.'
            : '30 Years of Academic Excellence & Building Future Generations Across Accredited Faculties.'}
        </p>
      </div>

      {/* Center Poster & Tree Diagram matching Screenshot 4 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-6">
        {/* Left Column: Official Tree Poster */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg bg-white p-2 w-full max-w-sm group">
            <img
              src="/ust-30years-tree.jpg"
              alt={isAr ? '30 عاماً كليات وبرامج الجامعة' : '30 Years UST Programs Tree'}
              className="w-full h-auto object-contain rounded-xl group-hover:scale-102 transition-transform duration-300"
            />
            <div className="p-2 text-center">
              <span className="text-[11px] font-black text-primary block">
                {isAr ? 'شجرة كليات وبرامج الجامعة المعتمدة' : 'Official Programs & Faculties Tree'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Faculties Grid matching Screenshot 5 */}
        <div className="md:col-span-7 space-y-4">
          <h4 className="text-xs font-black text-primary uppercase tracking-wider">
            {isAr ? 'كليات الجامعة الرئيسية (اختر الكلية للتقديم أو الاستعراض):' : 'Main University Faculties:'}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {facultiesGrid.map((fac, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (onExploreFaculties) onExploreFaculties();
                  else navigate('/faculties');
                }}
                className={`p-3 rounded-xl bg-white border-2 ${fac.color.split(' ')[0]} shadow-2xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between group`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-primary group-hover:text-white font-mono text-xs font-black flex items-center justify-center transition-colors">
                    {fac.num}
                  </span>
                  <span className="text-xs font-black text-slate-800 group-hover:text-primary transition-colors">
                    {isAr ? fac.nameAr : fac.nameEn}
                  </span>
                </div>
                {isAr ? (
                  <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                )}
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-3 flex-wrap">
            <button
              onClick={() => {
                if (onExploreFaculties) onExploreFaculties();
                else navigate('/faculties');
              }}
              className="px-4 py-2 rounded-xl border border-primary/20 text-xs font-bold text-primary hover:bg-white transition-all cursor-pointer"
            >
              {isAr ? 'دليل جميع الكليات والتخصصات' : 'Explore All Faculties'}
            </button>
            <button
              onClick={() => {
                if (onApply) onApply();
                else navigate('/admission');
              }}
              className="px-6 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-black shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{isAr ? 'التقديم والقبول الإلكتروني' : 'Apply Online'}</span>
              {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
