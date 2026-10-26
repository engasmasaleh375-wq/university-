import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { lockBodyScroll } from '../utils/scrollLock';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Eye,
  Share2,
  Bookmark,
  CheckCircle2,
  Compass,
  Building2,
  GraduationCap,
  Heart,
  Megaphone,
  X,
  Tag,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const universityNewsData = [
  {
    id: 'mental-health-ust-2026',
    titleAr: 'جامعة العلوم تنظم فعالية علمية وتوعوية بمناسبة اليوم العالمي للصحة النفسية',
    titleEn: 'UST Organizes Scientific & Awareness Event on World Mental Health Day',
    dateAr: '10 أكتوبر, 2026',
    dateEn: 'October 10, 2026',
    categoryAr: 'الفعاليات المركزية',
    categoryEn: 'Central Events',
    facultyAr: 'رئاسة الجامعة • مركز الاستشارات النفسية',
    facultyEn: 'Presidency • Psychological Counseling Center',
    image: '/news-mental-health-ust.jpg',
    partnerAr: 'بالتعاون مع مستشفى الريادة للطب النفسي',
    excerptAr: 'صنعاء – نظمت جامعة العلوم والتكنولوجيا بالتعاون مع مستشفى الريادة للطب النفسي، اليوم 10 أكتوبر فعالية علمية وتوعوية حاشدة بمناسبة اليوم العالمي للصحة النفسية تحت شعار «الصحة النفسية حق إنساني عالمي»، بحضور قيادات الجامعة والعمداء ونخبة من الأطباء والاستشاريين.',
    highlightsAr: [
      'التأكيد على دور الجامعة الرائد في نشر الوعي النفسي وتقديم الدعم الاستشاري المجتمعي للطلاب والكوادر.',
      'جلسات علمية متخصصة حول التعامل مع الضغوط النفسية والأكاديمية وبناء المرونة النفسية.',
      'إطلاق مبادرة استشارات نفسية مجانية للطلاب عبر مركز الاستشارات النفسية بجامعة العلوم والتكنولوجيا.',
      'تكريم الأطباء والمشاركين تقديراً لدورهم الفاعل في التوعية المجتمعية.'
    ],
    relatedFacultyId: 'humanities',
    actionTextAr: 'استعراض مركز الاستشارات النفسية'
  },
  {
    id: 'psychology-dept-event-2026',
    titleAr: 'كلية العلوم الإنسانية تنظم فعالية توعوية بمناسبة اليوم العالمي للصحة النفسية',
    titleEn: 'Faculty of Humanities Hosts Awareness Event on World Mental Health Day',
    dateAr: '8 أكتوبر, 2026',
    dateEn: 'October 8, 2026',
    categoryAr: 'أنشطة طلابية',
    categoryEn: 'Student Activities',
    facultyAr: 'كلية العلوم الإنسانية والاجتماعية • قسم علم النفس',
    facultyEn: 'Faculty of Humanities • Psychology Department',
    image: '/news-psychology-dept.jpg',
    partnerAr: 'إشراف قسم علم النفس',
    excerptAr: 'صنعاء – نظمت طالبات المستوى الثالث بقسم علم النفس في كلية العلوم الإنسانية والاجتماعية بجامعة العلوم والتكنولوجيا فعالية توعوية ومعرضاً تفاعلياً متميزاً بمناسبة اليوم العالمي للصحة النفسية، بهدف تعزيز التثقيف النفسي ونبذ الوصمة الاجتماعية.',
    highlightsAr: [
      'معرض تفاعلي وأركان إرشادية حول الصحة النفسية والتوازن الحياتي والأكاديمي للطلبة.',
      'فقرات ومحاضرات توعوية قصيرة قدمتها طالبات قسم علم النفس تحت إشراف نخبة من أساتذة الكلية.',
      'توزيع مطويات وبروشورات إرشادية حول استراتيجيات إدارة التوتر وتنمية الذات.',
      'إشادة عمادة الكلية بتميز طالبات علم النفس وقدرتهن على ربط المعرفة النظرية بالممارسة الميدانية.'
    ],
    relatedFacultyId: 'humanities',
    actionTextAr: 'استعراض تخصص علم النفس'
  },
  {
    id: 'engineering-masters-workshop-2026',
    titleAr: 'كلية الهندسة تنظم ورشة لمراجعة وإقرار وثيقة وصف برنامج ماجستير إدارة المشاريع الهندسية',
    titleEn: 'Engineering Faculty Holds Workshop to Approve M.Sc. in Engineering Project Management',
    dateAr: '6 أكتوبر, 2026',
    dateEn: 'October 6, 2026',
    categoryAr: 'الدراسات العليا',
    categoryEn: 'Postgraduate Studies',
    facultyAr: 'كلية الهندسة • قسم الهندسة المدنية • عمادة الدراسات العليا',
    facultyEn: 'Faculty of Engineering • Civil Eng • Postgrad Deanship',
    image: '/news-engineering-masters.jpg',
    partnerAr: 'برعاية أ.د. القاسم محمد عباس رئيس الجامعة',
    excerptAr: 'صنعاء – نظم قسم الهندسة المدنية بكلية الهندسة في جامعة العلوم والتكنولوجيا ورشة عمل أكاديمية متخصصة لمراجعة وإقرار وثيقة توصيف برنامج «ماجستير إدارة المشاريع الهندسية»، بحضور قيادات الكلية وعمادة الدراسات العليا والخبراء ومسؤولي الجودة والاعتماد.',
    highlightsAr: [
      'تطوير البرنامج وفق أرقى المعايير العالمية لمواكبة سوق العمل وإدارة المشروعات الكبرى والتحول الرقمي.',
      'مشاركة كبار الاستشاريين والأكاديميين في قطاعات الهندسة المدنية وإدارة المشاريع.',
      'إقرار الخطة الدراسية الحديثة ومخرجات التعلم المستهدفة بما يضمن تميز الخريجين إقليمياً ودولياً.',
      'فتح آفاق جديدة للمهندسين الراغبين في نيل درجة الماجستير في بيئة أكاديمية معتمدة ومتطورة.'
    ],
    relatedFacultyId: 'engineering',
    actionTextAr: 'التقديم على الماجستير'
  }
];

/**
 * Visual Component to be displayed inside the Announcement Modal
 */
export function LatestUniversityNewsModalContent({ isAr = true, onSelectNews }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeNewsModal, setActiveNewsModal] = useState(null);

  // Freeze background page scroll when modal is open so the background never moves
  useEffect(() => {
    if (activeNewsModal) {
      const unlock = lockBodyScroll();
      return () => {
        unlock();
      };
    }
  }, [activeNewsModal]);

  const categories = [
    { id: 'all', labelAr: 'جميع الأخبار والفعاليات', labelEn: 'All News' },
    { id: 'الفعاليات المركزية', labelAr: 'الفعاليات المركزية', labelEn: 'Central Events' },
    { id: 'أنشطة طلابية', labelAr: 'أنشطة الكليات', labelEn: 'Student Activities' },
    { id: 'الدراسات العليا', labelAr: 'الدراسات العليا', labelEn: 'Postgraduate' }
  ];

  const filteredNews = universityNewsData.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.categoryAr === selectedCategory;
  });

  return (
    <div className="space-y-6 select-none" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Top Banner */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#0B3B60]/85 backdrop-blur-2xl text-white p-5 sm:p-7 shadow-[0_20px_50px_rgba(11,59,96,0.25)] border-2 border-white/20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white p-1.5 shadow-md flex items-center justify-center shrink-0">
              <img src="/logo.png" alt="UST" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-accent text-primary-dark font-black text-[11px] mb-1 inline-block shadow-xs">
                {isAr ? 'أحدث أخبار وفعاليات الجامعة الرسمية' : 'Official UST News & Events'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {isAr ? 'حيوية الحرم الجامعي وأبرز الأنشطة الأكاديمية والمجتمعية' : 'Campus Life, Academic Milestones & Community Impact'}
              </h3>
            </div>
          </div>

          <div className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold text-sky-100 border border-white/20 shrink-0">
            {isAr ? 'أكتوبر 2026' : 'October 2026'}
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-2 mt-5 pt-3 border-t border-white/15 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-accent text-primary-dark shadow-sm'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredNews.map((news) => (
          <div
            key={news.id}
            className="group bg-white/50 hover:bg-white/70 backdrop-blur-2xl rounded-2xl border-2 border-white/70 hover:border-white shadow-[0_10px_30px_rgba(11,59,96,0.06)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.2)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Image Container with Date badge */}
              <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.titleAr}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <span className="absolute top-3 right-3 bg-primary text-white text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-md">
                  {news.categoryAr}
                </span>

                <span className="absolute bottom-2.5 right-3 bg-white/90 text-primary-dark text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-accent" />
                  <span>{news.dateAr}</span>
                </span>
              </div>

              {/* Body */}
              <div className="p-4 space-y-2.5">
                <span className="text-[10px] font-bold text-slate-500 block truncate">
                  {news.facultyAr}
                </span>
                <h4 className="text-sm font-black text-primary leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                  {isAr ? news.titleAr : news.titleEn}
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                  {isAr ? news.excerptAr : news.titleEn}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 pt-0">
              <button
                onClick={() => setActiveNewsModal(news)}
                className="w-full py-2.5 rounded-xl bg-white/70 hover:bg-primary hover:text-white text-primary text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs border border-white/80"
              >
                <span>{isAr ? 'اقرأ كامل الخبر والتفاصيل' : 'Read Full Story'}</span>
                {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Single News Detail Modal */}
      <AnimatePresence>
        {activeNewsModal && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 select-none overflow-hidden touch-none"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveNewsModal(null)}
              className="fixed inset-0 bg-black/25 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl bg-white/92 backdrop-blur-3xl rounded-3xl shadow-[0_25px_60px_rgba(11,59,96,0.25)] border-2 border-white/80 overflow-hidden my-6"
            >
              {/* Header Image */}
              <div className="relative h-60 w-full bg-slate-900 overflow-hidden">
                <img
                  src={activeNewsModal.image}
                  alt={activeNewsModal.titleAr}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                <button
                  onClick={() => setActiveNewsModal(null)}
                  className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 inset-x-5 text-white">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent text-primary-dark font-black text-xs">
                      {activeNewsModal.categoryAr}
                    </span>
                    <span className="text-xs text-sky-200 font-bold">
                      {activeNewsModal.dateAr}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black leading-snug drop-shadow-md">
                    {isAr ? activeNewsModal.titleAr : activeNewsModal.titleEn}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold text-primary flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>{activeNewsModal.facultyAr}</span>
                  {activeNewsModal.partnerAr && (
                    <span className="text-slate-500 font-medium">| {activeNewsModal.partnerAr}</span>
                  )}
                </div>

                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                  {activeNewsModal.excerptAr}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h5 className="text-xs font-black text-primary uppercase tracking-wider">
                    {isAr ? 'أبرز محاور وتفاصيل الفعالية:' : 'Key Event Highlights:'}
                  </h5>
                  {activeNewsModal.highlightsAr.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-xs font-bold text-slate-800 leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveNewsModal(null)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>

                <button
                  onClick={() => {
                    setActiveNewsModal(null);
                    navigate('/admission');
                  }}
                  className="px-6 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-black shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{isAr ? 'التقديم والقبول الإلكتروني' : 'Apply Online'}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Full Interactive Section for the Homepage
 */
export function LatestUniversityNewsSection({ isAr = true }) {
  const navigate = useNavigate();
  const [activeStory, setActiveStory] = useState(null);

  // Freeze background page scroll when modal is open so the background never moves
  useEffect(() => {
    if (activeStory) {
      const unlock = lockBodyScroll();
      return () => {
        unlock();
      };
    }
  }, [activeStory]);

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-sky-50/60 to-transparent relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Screenshot 2 */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full crystal-card text-primary text-xs sm:text-sm font-bold mb-3 shadow-sm">
            <Compass className="w-4 h-4 text-accent-dark stroke-[2.2]" />
            <span>{isAr ? 'بوابة أخبار جامعة العلوم والتكنولوجيا' : 'UST Official News Portal'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-3">
            {isAr ? 'أحدث الأخبار' : 'Latest News'}
          </h2>

          <p className="text-sm sm:text-base font-semibold text-primary-dark/70 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'تابع جديد الفعاليات العلمية والمجتمعية، وورش التطوير الأكاديمي، وأنشطة كليات الجامعة المركزية.'
              : 'Stay up-to-date with scientific events, community initiatives, and academic developments.'}
          </p>

          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 News Cards Grid matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {universityNewsData.map((news, idx) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveStory(news)}
              className="group bg-white rounded-3xl border-2 border-slate-200/80 hover:border-primary/40 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Photo with zoom effect */}
                <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.titleAr}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill */}
                  <span className="absolute top-3.5 right-3.5 bg-primary/90 backdrop-blur-md text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                    {news.categoryAr}
                  </span>

                  {/* Date Badge */}
                  <span className="absolute bottom-3 right-3 bg-white/95 text-primary-dark text-xs font-black px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{news.dateAr}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <span className="text-[11px] font-bold text-slate-500 block truncate">
                    {news.facultyAr}
                  </span>

                  <h3 className="text-base sm:text-lg font-black text-primary leading-snug group-hover:text-secondary transition-colors">
                    {isAr ? news.titleAr : news.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed line-clamp-3">
                    {isAr ? news.excerptAr : news.titleEn}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-black text-primary group-hover:text-secondary transition-colors flex items-center gap-1">
                  <span>{isAr ? 'اقرأ التفاصيل' : 'Read Story'}</span>
                  {isAr ? (
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </span>

                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {activeStory && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 select-none overflow-hidden touch-none"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStory(null)}
              className="fixed inset-0 bg-black/25 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 text-right"
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {/* Header Image */}
              <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                <img
                  src={activeStory.image}
                  alt={activeStory.titleAr}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                <button
                  onClick={() => setActiveStory(null)}
                  className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 inset-x-6 text-white">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="px-3 py-0.5 rounded-full bg-accent text-primary-dark font-black text-xs">
                      {activeStory.categoryAr}
                    </span>
                    <span className="text-xs text-sky-200 font-bold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span>{activeStory.dateAr}</span>
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black leading-snug drop-shadow-md">
                    {isAr ? activeStory.titleAr : activeStory.titleEn}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 space-y-4 max-h-[55vh] overflow-y-auto custom-scrollbar">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold text-primary flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>{activeStory.facultyAr}</span>
                  {activeStory.partnerAr && (
                    <span className="text-slate-500 font-medium">| {activeStory.partnerAr}</span>
                  )}
                </div>

                <p className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed">
                  {activeStory.excerptAr}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <h4 className="text-xs font-black text-primary uppercase tracking-wider">
                    {isAr ? 'أبرز محاور وتفاصيل الخبر والفعالية:' : 'Key Highlights:'}
                  </h4>
                  {activeStory.highlightsAr.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveStory(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setActiveStory(null);
                      navigate('/faculties');
                    }}
                    className="px-4 py-2.5 rounded-xl border border-primary/20 text-xs font-bold text-primary hover:bg-primary/5 cursor-pointer"
                  >
                    {isAr ? 'استعراض الكلية' : 'Explore Faculty'}
                  </button>
                  <button
                    onClick={() => {
                      setActiveStory(null);
                      navigate('/admission');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-black shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{isAr ? 'التقديم الإلكتروني' : 'Apply Online'}</span>
                    {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
