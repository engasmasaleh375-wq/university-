import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  X, Briefcase, GraduationCap, ArrowLeft, ArrowRight, 
  HeartPulse, Smile, Pill, Building2, Laptop, TrendingUp, 
  Scale, Globe, ChevronRight, ChevronLeft,
  Sparkles, CheckCircle2, Award, Clock, ArrowUpRight,
  LayoutGrid, Layers
} from 'lucide-react';
import facultiesData from '../data/faculties.json';
import { useLanguage } from '../contexts/LanguageContext';
import {
  EngineeringNewProgramsBanner,
  ClinicalDoctorateBanner
} from '../components/AcademicProgramsModal';
import { MedicalFacultyNewsBanner } from '../components/MedicalFacultyAnnouncements';

const iconMap = {
  HeartPulse: <HeartPulse className="w-5 h-5 xl:w-6 xl:h-6 text-white stroke-[2.2]" />,
  Smile: <Smile className="w-5 h-5 xl:w-6 xl:h-6 text-white stroke-[2.2]" />,
  Pill: <Pill className="w-5 h-5 xl:w-6 xl:h-6 text-white stroke-[2.2]" />,
  Building2: <Building2 className="w-5 h-5 xl:w-6 xl:h-6 text-white stroke-[2.2]" />,
  Laptop: <Laptop className="w-5 h-5 xl:w-6 xl:h-6 text-white stroke-[2.2]" />,
  TrendingUp: <TrendingUp className="w-5 h-5 xl:w-6 xl:h-6 text-white stroke-[2.2]" />,
  Scale: <Scale className="w-5 h-5 xl:w-6 xl:h-6 text-white stroke-[2.2]" />,
  Globe: <Globe className="w-5 h-5 xl:w-6 xl:h-6 text-white stroke-[2.2]" />,
  GraduationCap: <GraduationCap className="w-5 h-5 xl:w-6 xl:h-6 text-white stroke-[2.2]" />
};

// University metadata for faculties
const facultyMeta = {
  'medicine': { 
    year: '1994', num: '01', 
    accentColor: 'from-[#0B3B60] to-[#07243B]', 
    tagAr: 'العلوم الطبية', tagEn: 'Medical' 
  },
  'dentistry': { 
    year: '1997', num: '02', 
    accentColor: 'from-[#10B981] to-[#059669]', 
    tagAr: 'طب الأسنان', tagEn: 'Dentistry' 
  },
  'pharmacy': { 
    year: '1999', num: '03', 
    accentColor: 'from-[#0B3B60] to-[#07243B]', 
    tagAr: 'العلوم الصيدلانية', tagEn: 'Pharmacy' 
  },
  'engineering': { 
    year: '2002', num: '04', 
    accentColor: 'from-[#F59E0B] to-[#D97706]', 
    tagAr: 'الهندسة والعمارة', tagEn: 'Engineering' 
  },
  'computing': { 
    year: '2005', num: '05', 
    accentColor: 'from-[#0B3B60] to-[#07243B]', 
    tagAr: 'الحاسبات والذكاء الاصطناعي', tagEn: 'Computing & AI' 
  },
  'administrative-sciences': { 
    year: '2009', num: '06', 
    accentColor: 'from-[#10B981] to-[#059669]', 
    tagAr: 'العلوم الإدارية والمالية', tagEn: 'Business' 
  },
  'humanities': { 
    year: '2014', num: '07', 
    accentColor: 'from-[#0B3B60] to-[#07243B]', 
    tagAr: 'العلوم الإنسانية', tagEn: 'Humanities' 
  },
  'e-learning': { 
    year: '2018', num: '08', 
    accentColor: 'from-[#F59E0B] to-[#D97706]', 
    tagAr: 'التعليم الإلكتروني', tagEn: 'E-Learning' 
  },
  'postgraduate': { 
    year: '2022', num: '09', 
    accentColor: 'from-[#0B3B60] to-[#07243B]', 
    tagAr: 'الدراسات العليا', tagEn: 'Postgraduate' 
  },
};

export default function Faculties() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedMajor, setSelectedMajor] = useState(null);
  const [hoveredFaculty, setHoveredFaculty] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('diagram'); // 'diagram' or 'grid'



  // Filtered faculties
  const filteredFaculties = useMemo(() => {
    return facultiesData.filter(faculty => {
      if (activeCategory !== 'all' && faculty.category !== activeCategory) {
        return false;
      }
      return true;
    });
  }, [activeCategory]);

  // Split into right and left columns around the single elongated circle
  const rightColumnItems = useMemo(() => {
    const half = Math.ceil(filteredFaculties.length / 2);
    return filteredFaculties.slice(0, half);
  }, [filteredFaculties]);

  const leftColumnItems = useMemo(() => {
    const half = Math.ceil(filteredFaculties.length / 2);
    return filteredFaculties.slice(half);
  }, [filteredFaculties]);

  // Active spotlight item: either hovered, or first item, or general university hub
  const activeSpotlight = hoveredFaculty || (filteredFaculties.length > 0 ? filteredFaculties[0] : null);
  const activeSpotlightMeta = activeSpotlight ? facultyMeta[activeSpotlight.id] : null;

  const openFacultyDetails = (faculty) => {
    setSelectedFaculty(faculty);
  };

  return (
    <div className="relative min-h-screen font-sans bg-slate-white text-primary-dark overflow-x-hidden pt-28 pb-20">
      
      {/* University Themed Architectural Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 filter blur-[8px] pointer-events-none scale-105"
        style={{
          backgroundImage: `url('/hero-building.jpg')`,
        }}
      />

      {/* Decorative Brand Ambient Glowing Orbs */}
      <div className="fixed top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-10 left-10 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">


        {/* Empty State when no faculties match */}
        {filteredFaculties.length === 0 && (
          <div className="my-16 text-center p-8 bg-white/80 rounded-3xl border border-border-light max-w-md mx-auto shadow-sm">
            <Building2 className="w-12 h-12 text-primary/30 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-primary mb-1">{isAr ? 'لم يتم العثور على كليات' : 'No faculties found'}</h3>
            <p className="text-xs text-primary-dark/60 mb-4">{isAr ? 'يرجى اختيار تصنيف آخر.' : 'Please select another category.'}</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-md hover:bg-primary-dark transition-all"
            >
              {isAr ? 'عرض جميع الكليات' : 'Show All Faculties'}
            </button>
          </div>
        )}

        {/* VIEW MODE 1: ALL 9 FACULTIES ON A SINGLE ELONGATED CIRCLE WITH SEMI-CIRCULAR / STADIUM CARDS */}
        {viewMode === 'diagram' && filteredFaculties.length > 0 && (
          <div className="relative w-full my-6 py-2">
            
            <div className="relative max-w-[1540px] mx-auto">
              
              {/* Desktop View: All 9 Faculties Distributed in 3 Columns with Semi-Circular Pill Cards */}
              <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-4 xl:gap-6 relative">
                
                {/* RIGHT COLUMN (In Arabic RTL: Faculties 01 to 05 with semi-circular pill cards) */}
                <div className="flex flex-col justify-between space-y-4 xl:space-y-5 h-[680px] xl:h-[720px] py-1">
                  {rightColumnItems.map((faculty, i) => {
                    const meta = facultyMeta[faculty.id] || { 
                      num: String(i + 1).padStart(2, '0'),
                      year: '1994',
                      accentColor: 'from-[#0B3B60] to-[#07243B]',
                      tagAr: 'كلية معتمدة',
                      tagEn: 'Faculty'
                    };
                    const isHovered = hoveredFaculty?.id === faculty.id;

                    return (
                      <div 
                        key={faculty.id} 
                        className="flex items-center justify-end relative group cursor-pointer"
                        onMouseEnter={() => setHoveredFaculty(faculty)}
                        onMouseLeave={() => setHoveredFaculty(null)}
                        onClick={() => openFacultyDetails(faculty)}
                      >
                        {/* Semi-Circular Stadium Capsule Card (نصف دائري متناسق بدل المربع) */}
                        <motion.div
                          whileHover={{ scale: 1.025, x: isAr ? 4 : -4 }}
                          className={`w-full max-w-[340px] xl:max-w-[380px] h-[86px] xl:h-[92px] rounded-full bg-white/90 hover:bg-white backdrop-blur-xl border transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden flex items-center justify-between px-3.5 xl:px-4 py-2 ${
                            isHovered 
                              ? 'border-secondary shadow-secondary/20 ring-2 ring-secondary/30' 
                              : 'border-primary/20 hover:border-primary/50'
                          }`}
                        >
                          {/* Glowing Top Highlight Curved Line */}
                          <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80" />

                          {/* Outer Side: Semi-Circular Badge with Number & Year */}
                          <div className="flex items-center gap-2.5 min-w-0 flex-1">
                            {/* Circular/Semi-Circular Number Plate */}
                            <div className={`w-12 h-12 xl:w-13 xl:h-13 rounded-full bg-gradient-to-br ${meta.accentColor} shadow-md flex flex-col items-center justify-center shrink-0 text-white transition-transform group-hover:scale-105`}>
                              <span className="text-xs xl:text-sm font-black font-mono leading-none">{meta.num}</span>
                              <span className="text-[8px] font-bold opacity-80 leading-tight mt-0.5">{meta.year}</span>
                            </div>

                            {/* Faculty Name & Info */}
                            <div className="min-w-0 flex-1 pr-1">
                              <span className="text-[9px] font-extrabold tracking-wider text-secondary uppercase block mb-0.5 truncate">
                                {isAr ? meta.tagAr : meta.tagEn}
                              </span>
                              <h3 className="text-xs xl:text-sm font-black text-primary group-hover:text-secondary transition-colors truncate leading-snug">
                                {isAr ? faculty.name : faculty.id.toUpperCase()}
                              </h3>
                              <span className="text-[10px] font-bold text-primary-dark/65 flex items-center gap-1 mt-0.5 truncate">
                                <GraduationCap className="w-3 h-3 text-secondary shrink-0" />
                                <span>{isAr ? `${faculty.majors.length} برامج معتمدة` : `${faculty.majors.length} Majors`}</span>
                              </span>
                            </div>
                          </div>

                          {/* Inner Side: Interactive Arrow in Rounded Capsule */}
                          <div className="w-7 h-7 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center text-primary shrink-0 mr-1">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </motion.div>

                        {/* Horizontal Connecting Line with Anchor Dot */}
                        <div className="flex items-center shrink-0 w-6 xl:w-8">
                          {/* Connector Dot at Card Semi-Circle Edge */}
                          <div className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                            isHovered ? 'bg-secondary border-secondary scale-125' : 'bg-white border-primary/40'
                          }`} />
                          {/* Horizontal Line */}
                          <div className={`h-[2px] flex-1 transition-all duration-300 ${
                            isHovered ? 'bg-secondary' : 'bg-primary/25'
                          }`} />
                        </div>

                        {/* Circular Node Placed Directly on Row End (Touching Stadium Perimeter) */}
                        <div className={`w-12 h-12 xl:w-14 xl:h-14 rounded-full border-2 bg-white/95 backdrop-blur-md p-1 shadow-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isHovered 
                            ? 'border-secondary scale-110 shadow-secondary/40 ring-4 ring-secondary/20' 
                            : 'border-primary/30 hover:border-primary'
                        }`}>
                          <div className={`w-full h-full rounded-full bg-gradient-to-br ${meta.accentColor} shadow-md flex items-center justify-center text-white`}>
                            {iconMap[faculty.icon] || <Sparkles className="w-5 h-5 text-white" />}
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* CENTER COLUMN: The Central Elongated Circle (دائرة مطولة / Stadium Capsule) */}
                <div className="relative flex items-center justify-center px-2 xl:px-4">
                  
                  <div className="relative w-[280px] xl:w-[320px] h-[680px] xl:h-[720px] rounded-[150px] xl:rounded-[170px] border-2 border-primary/25 bg-gradient-to-b from-white/95 via-slate-50/90 to-white/95 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-between p-6 xl:p-8 text-center overflow-hidden">
                    
                    {/* Concentric Inner Outline Ring */}
                    <div className="absolute inset-2.5 rounded-[140px] xl:rounded-[160px] border border-primary/15 pointer-events-none" />

                    {/* Subtle Ambient Backlight Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-secondary/[0.04] to-accent/[0.03] pointer-events-none" />

                    {/* Top Emblem / University Crest */}
                    <div className="relative z-10 pt-4">
                      <div className="w-16 h-16 xl:w-18 xl:h-18 rounded-full bg-white shadow-md border border-primary/20 flex items-center justify-center mx-auto p-1.5 group-hover:scale-105 transition-transform">
                        <img src="/logo.png" alt="University Logo" className="w-full h-full object-contain" />
                      </div>
                      <span className="inline-block mt-2 text-[10px] font-black tracking-widest text-secondary uppercase bg-secondary/10 px-3 py-0.5 rounded-full border border-secondary/20">
                        {isAr ? 'المركز الرئيسي - صنعاء' : 'MAIN CAMPUS'}
                      </span>
                    </div>

                    {/* Center Information Display (Dynamic Spotlight on Hover) */}
                    <div className="relative z-10 px-2 my-auto">
                      <AnimatePresence mode="wait">
                        {activeSpotlight ? (
                          <motion.div
                            key={activeSpotlight.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                          >
                            <span className="text-[11px] font-mono font-black text-accent block mb-1">
                              #{activeSpotlightMeta?.num || '01'} • تأسست {activeSpotlightMeta?.year || '1994'}
                            </span>
                            <h2 className="text-xl xl:text-2xl font-black text-primary leading-tight mb-2">
                              {isAr ? activeSpotlight.name : activeSpotlight.id.toUpperCase()}
                            </h2>
                            <p className="text-xs text-primary-dark/75 line-clamp-3 leading-relaxed mb-4">
                              {activeSpotlight.description}
                            </p>
                            <button
                              onClick={() => openFacultyDetails(activeSpotlight)}
                              className="px-4 py-2 rounded-full bg-primary hover:bg-primary-dark text-white text-xs font-bold shadow-md transition-all inline-flex items-center gap-1 active:scale-95"
                            >
                              <span>{isAr ? 'استعراض تخصصات الكلية' : 'View Programs'}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </motion.div>
                        ) : (
                          <div>
                            <h2 className="text-xl xl:text-2xl font-black text-primary leading-tight mb-2">
                              {isAr ? 'جامعة العلوم والتكنولوجيا' : 'UNIVERSITY OF SCIENCE & TECHNOLOGY'}
                            </h2>
                            <p className="text-xs text-primary-dark/75 leading-relaxed">
                              {isAr ? 'صرح أكاديمي رائد يضم 9 كليات وعمادات معتمدة' : 'Unified Academic Structure with 9 Faculties'}
                            </p>
                          </div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom University Stats Watermark */}
                    <div className="relative z-10 pb-4">
                      <div className="p-3 rounded-full bg-slate-100/80 border border-border-light text-center px-4">
                        <span className="text-[11px] font-black text-primary block">
                          {isAr ? '9 كليات وعمادات | +44 تخصصاً' : '9 Faculties | +44 Programs'}
                        </span>
                        <span className="text-[10px] font-bold text-secondary flex items-center justify-center gap-1 mt-0.5">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{isAr ? 'اعتماد محلي ودولي 100%' : '100% Accredited'}</span>
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* LEFT COLUMN (In Arabic RTL: Faculties 06 to 09 with semi-circular pill cards) */}
                <div className="flex flex-col justify-between space-y-4 xl:space-y-5 h-[680px] xl:h-[720px] py-1">
                  {leftColumnItems.map((faculty, i) => {
                    const meta = facultyMeta[faculty.id] || { 
                      num: String(i + 6).padStart(2, '0'),
                      year: '2009',
                      accentColor: 'from-[#0B3B60] to-[#07243B]',
                      tagAr: 'كلية معتمدة',
                      tagEn: 'Faculty'
                    };
                    const isHovered = hoveredFaculty?.id === faculty.id;

                    return (
                      <div 
                        key={faculty.id} 
                        className="flex items-center justify-start relative group cursor-pointer"
                        onMouseEnter={() => setHoveredFaculty(faculty)}
                        onMouseLeave={() => setHoveredFaculty(null)}
                        onClick={() => openFacultyDetails(faculty)}
                      >
                        {/* Circular Node Placed Directly on Row Start (Touching Stadium Perimeter) */}
                        <div className={`w-12 h-12 xl:w-14 xl:h-14 rounded-full border-2 bg-white/95 backdrop-blur-md p-1 shadow-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isHovered 
                            ? 'border-secondary scale-110 shadow-secondary/40 ring-4 ring-secondary/20' 
                            : 'border-primary/30 hover:border-primary'
                        }`}>
                          <div className={`w-full h-full rounded-full bg-gradient-to-br ${meta.accentColor} shadow-md flex items-center justify-center text-white`}>
                            {iconMap[faculty.icon] || <Sparkles className="w-5 h-5 text-white" />}
                          </div>
                        </div>

                        {/* Horizontal Connecting Line with Anchor Dot */}
                        <div className="flex items-center shrink-0 w-6 xl:w-8">
                          {/* Horizontal Line */}
                          <div className={`h-[2px] flex-1 transition-all duration-300 ${
                            isHovered ? 'bg-secondary' : 'bg-primary/25'
                          }`} />
                          {/* Connector Dot at Card Semi-Circle Edge */}
                          <div className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                            isHovered ? 'bg-secondary border-secondary scale-125' : 'bg-white border-primary/40'
                          }`} />
                        </div>

                        {/* Semi-Circular Stadium Capsule Card (نصف دائري متناسق بدل المربع) */}
                        <motion.div
                          whileHover={{ scale: 1.025, x: isAr ? -4 : 4 }}
                          className={`w-full max-w-[340px] xl:max-w-[380px] h-[86px] xl:h-[92px] rounded-full bg-white/90 hover:bg-white backdrop-blur-xl border transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden flex items-center justify-between px-3.5 xl:px-4 py-2 ${
                            isHovered 
                              ? 'border-secondary shadow-secondary/20 ring-2 ring-secondary/30' 
                              : 'border-primary/20 hover:border-primary/50'
                          }`}
                        >
                          {/* Glowing Top Highlight Curved Line */}
                          <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80" />

                          {/* Inner Side: Interactive Arrow in Rounded Capsule */}
                          <div className="w-7 h-7 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center text-primary shrink-0 ml-1">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>

                          {/* Faculty Name & Info */}
                          <div className="min-w-0 flex-1 pl-1 text-right rtl:text-right ltr:text-left">
                            <span className="text-[9px] font-extrabold tracking-wider text-secondary uppercase block mb-0.5 truncate">
                              {isAr ? meta.tagAr : meta.tagEn}
                            </span>
                            <h3 className="text-xs xl:text-sm font-black text-primary group-hover:text-secondary transition-colors truncate leading-snug">
                              {isAr ? faculty.name : faculty.id.toUpperCase()}
                            </h3>
                            <span className="text-[10px] font-bold text-primary-dark/65 flex items-center gap-1 mt-0.5 truncate">
                              <GraduationCap className="w-3 h-3 text-secondary shrink-0" />
                              <span>{isAr ? `${faculty.majors.length} برامج معتمدة` : `${faculty.majors.length} Majors`}</span>
                            </span>
                          </div>

                          {/* Outer Side: Semi-Circular Badge with Number & Year */}
                          <div className={`w-12 h-12 xl:w-13 xl:h-13 rounded-full bg-gradient-to-br ${meta.accentColor} shadow-md flex flex-col items-center justify-center shrink-0 text-white transition-transform group-hover:scale-105`}>
                            <span className="text-xs xl:text-sm font-black font-mono leading-none">{meta.num}</span>
                            <span className="text-[8px] font-bold opacity-80 leading-tight mt-0.5">{meta.year}</span>
                          </div>
                        </motion.div>

                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Mobile & Tablet Responsive View (Smooth Semi-Circular Cards) */}
              <div className="lg:hidden flex flex-col items-center space-y-6">
                
                {/* Central Hub Compact */}
                <div className="w-full max-w-md p-5 rounded-3xl bg-white/95 border-2 border-primary/20 shadow-xl text-center">
                  <img src="/logo.png" alt="University Logo" className="w-14 h-14 object-contain mx-auto mb-2" />
                  <h2 className="text-lg font-black text-primary mb-1">
                    {isAr ? 'جامعة العلوم والتكنولوجيا' : 'UNIVERSITY OF SCIENCE & TECHNOLOGY'}
                  </h2>
                  <p className="text-xs text-primary-dark/70">
                    {isAr ? 'المركز الرئيسي صنعاء | كافة الكليات والعمادات (9)' : 'Main Campus - Sana\'a | All 9 Faculties'}
                  </p>
                </div>

                {/* All 9 Cards in Semi-Circular Capsule Layout */}
                <div className="w-full max-w-lg space-y-3">
                  {filteredFaculties.map((faculty, i) => {
                    const meta = facultyMeta[faculty.id] || { 
                      num: String(i + 1).padStart(2, '0'),
                      year: '1994',
                      accentColor: 'from-[#0B3B60] to-[#07243B]',
                      tagAr: 'كلية معتمدة',
                      tagEn: 'Faculty'
                    };

                    return (
                      <div
                        key={faculty.id}
                        onClick={() => openFacultyDetails(faculty)}
                        className="p-3 rounded-full bg-white/95 border border-primary/20 shadow-md flex items-center justify-between gap-3 cursor-pointer hover:border-secondary transition-all"
                      >
                        {/* Circular Node Icon */}
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${meta.accentColor} shadow-md flex items-center justify-center shrink-0 text-white`}>
                          {iconMap[faculty.icon] || <Sparkles className="w-5 h-5 text-white" />}
                        </div>

                        {/* Title & Info */}
                        <div className="flex-1 min-w-0 text-right rtl:text-right ltr:text-left">
                          <span className="text-[9px] font-black text-secondary uppercase bg-secondary/10 px-2 py-0.2 rounded-full inline-block mb-0.5">
                            {isAr ? meta.tagAr : meta.tagEn}
                          </span>
                          <h3 className="text-xs sm:text-sm font-bold text-primary truncate">
                            {isAr ? faculty.name : faculty.id.toUpperCase()}
                          </h3>
                          <span className="text-[10px] text-primary-dark/65 truncate block">
                            {isAr ? `${faculty.majors.length} برامج وتخصصات معتمدة` : `${faculty.majors.length} accredited majors`}
                          </span>
                        </div>

                        {/* Number Badge */}
                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-mono font-black text-xs text-primary shrink-0">
                          {meta.num}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>

          </div>
        )}

        {/* VIEW MODE 2: Comprehensive Colleges Grid View */}
        {viewMode === 'grid' && filteredFaculties.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {filteredFaculties.map((faculty, index) => {
              const meta = facultyMeta[faculty.id] || { 
                year: `${1994 + index * 3}`, 
                num: String(index + 1).padStart(2, '0'),
                accentColor: 'from-[#0B3B60] to-[#07243B]',
                tagAr: 'كلية معتمدة',
                tagEn: 'Faculty'
              };

              return (
                <motion.div
                  key={faculty.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="group bg-white/90 hover:bg-white backdrop-blur-md rounded-3xl border border-border-light hover:border-primary/40 shadow-md hover:shadow-xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${meta.accentColor}`} />

                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${meta.accentColor} shadow-md flex items-center justify-center shrink-0`}>
                          {iconMap[faculty.icon] || <Sparkles className="w-7 h-7 text-white" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-slate-100 border border-border-light text-primary uppercase">
                              {isAr ? meta.tagAr : meta.tagEn}
                            </span>
                            <span className="text-[10px] font-bold text-primary-dark/60">
                              {meta.year}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-secondary flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{isAr ? 'برامج أكاديمية معتمدة' : 'Accredited Programs'}</span>
                          </span>
                        </div>
                      </div>

                      <span className="text-2xl font-black text-primary/20 group-hover:text-primary/40 transition-colors font-mono">
                        {meta.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-primary group-hover:text-secondary transition-colors mb-2 leading-snug">
                      {isAr ? faculty.name : faculty.id.toUpperCase()}
                    </h3>

                    <p className="text-xs text-primary-dark/70 font-medium leading-relaxed mb-4 line-clamp-3">
                      {faculty.description}
                    </p>

                    <div className="mb-4">
                      <span className="text-[11px] font-bold text-primary-dark/60 block mb-2">
                        {isAr ? `أبرز التخصصات المتاحة (${faculty.majors.length}):` : `Available Majors (${faculty.majors.length}):`}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {faculty.majors.slice(0, 3).map((major) => (
                          <span 
                            key={major.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedMajor(major);
                            }}
                            className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-[11px] font-bold text-primary-dark/85 border border-border-light transition-colors cursor-pointer flex items-center gap-1"
                          >
                            <span>{isAr ? major.name : major.id}</span>
                            <ArrowUpRight className="w-3 h-3 opacity-60" />
                          </span>
                        ))}
                        {faculty.majors.length > 3 && (
                          <span className="px-2 py-1 rounded-xl bg-primary/5 text-[11px] font-bold text-primary">
                            +{faculty.majors.length - 3} {isAr ? 'أخرى' : 'more'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border-light flex items-center justify-between gap-2">
                    <button
                      onClick={() => openFacultyDetails(faculty)}
                      className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 active:scale-95"
                    >
                      <span>{isAr ? 'استعراض كامل الكلية' : 'View Faculty'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => navigate('/admission')}
                      className="px-3.5 py-2 rounded-xl bg-secondary/10 hover:bg-secondary hover:text-white text-secondary text-xs font-bold border border-secondary/20 transition-all active:scale-95"
                    >
                      {isAr ? 'طلب قبول' : 'Apply'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Footer Brand Watermark */}
        <div className="text-center pt-8 pb-4 relative z-10 border-t border-primary/15 max-w-4xl mx-auto w-full mt-10">
          <p className="text-xs font-bold text-primary-dark/60 tracking-wider">
            {isAr 
              ? 'جامعة العلوم والتكنولوجيا - المركز الرئيسي صنعاء | الريادة والتميز في التعليم العالي والبحث العلمي' 
              : 'UNIVERSITY OF SCIENCE & TECHNOLOGY - SANA\'A MAIN CAMPUS | EXCELLENCE IN HIGHER EDUCATION'}
          </p>
        </div>

      </div>

      {/* Faculty Full Details & Majors Drawer / Modal */}
      <AnimatePresence>
        {selectedFaculty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFaculty(null)}
              className="fixed inset-0 bg-primary-dark/65 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className={`relative z-10 w-full max-w-3xl rounded-3xl bg-slate-white border border-border-light shadow-2xl text-primary-dark overflow-hidden flex flex-col max-h-[88vh] ${
                isAr ? 'text-right' : 'text-left'
              }`}
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {/* Modal Header */}
              <div className="relative p-6 sm:p-8 bg-primary text-white flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-lg">
                    {iconMap[selectedFaculty.icon] || <Sparkles className="w-8 h-8 text-white" />}
                  </div>
                  <div>
                    <span className="text-xs font-black tracking-widest text-accent uppercase">
                      {isAr ? 'كليات الجامعة المعتمدة' : 'ACCREDITED FACULTY'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      {isAr ? selectedFaculty.name : selectedFaculty.id.toUpperCase()}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-xl font-medium">
                      {selectedFaculty.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedFaculty(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
                  title={isAr ? 'إغلاق' : 'Close'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body - List of Majors */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-1 space-y-6">
                {/* Featured Faculty Official Banners matching ust.edu.ye */}
                {selectedFaculty.id === 'engineering' && (
                  <div className="mb-6">
                    <EngineeringNewProgramsBanner
                      isAr={isAr}
                      onApply={() => {
                        setSelectedFaculty(null);
                        navigate('/admission');
                      }}
                    />
                  </div>
                )}

                {selectedFaculty.id === 'medicine' && (
                  <div className="space-y-6 mb-6">
                    <MedicalFacultyNewsBanner
                      isAr={isAr}
                      onApply={() => {
                        setSelectedFaculty(null);
                        navigate('/admission');
                      }}
                    />
                    <ClinicalDoctorateBanner
                      isAr={isAr}
                      onApply={() => {
                        setSelectedFaculty(null);
                        navigate('/admission');
                      }}
                    />
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-extrabold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-secondary" />
                    <span>{isAr ? 'الأقسام والتخصصات المتاحة (انقر على التخصص لعرض تفاصيله):' : 'Available Departments & Majors:'}</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedFaculty.majors.map((major) => (
                      <div
                        key={major.id}
                        onClick={() => setSelectedMajor(major)}
                        className="group/item cursor-pointer px-4 sm:px-5 py-3 rounded-full bg-white hover:bg-white border border-border-light hover:border-secondary shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3 relative overflow-hidden"
                      >
                        {/* Circular Icon */}
                        <div className="w-10 h-10 rounded-full bg-primary/10 group-hover/item:bg-secondary group-hover/item:text-white text-primary flex items-center justify-center shrink-0 transition-all duration-300">
                          <GraduationCap className="w-5 h-5" />
                        </div>

                        {/* Title & Duration / Degree */}
                        <div className="min-w-0 flex-1">
                          <h5 className="font-bold text-primary text-xs sm:text-sm group-hover/item:text-secondary transition-colors truncate">
                            {isAr ? major.name : major.id}
                          </h5>
                          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-bold text-primary-dark/60 mt-0.5">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-accent shrink-0" />
                              <span className="truncate">{major.studyDuration}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Award className="w-3 h-3 text-secondary shrink-0" />
                              <span className="truncate">{major.degree}</span>
                            </span>
                          </div>
                        </div>

                        {/* End Round Arrow Button */}
                        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover/item:bg-secondary group-hover/item:text-white text-primary-dark/60 flex items-center justify-center shrink-0 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 bg-white border-t border-border-light flex items-center justify-between gap-4">
                <span className="text-xs text-primary-dark/60 font-semibold hidden sm:inline">
                  {isAr ? 'القبول والتسجيل متاح إلكترونياً لجميع التخصصات المعتمدة' : 'Online admission is open for all programs'}
                </span>
                <button
                  onClick={() => {
                    setSelectedFaculty(null);
                    navigate('/admission');
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-secondary hover:bg-emerald-600 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>{isAr ? 'التقديم والقبول الإلكتروني' : 'Apply Online Now'}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Major Detailed Drawer/Modal */}
      <AnimatePresence>
        {selectedMajor && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMajor(null)}
              className="fixed inset-0 bg-primary-dark/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              className={`relative z-10 w-full max-w-2xl rounded-3xl bg-slate-white border border-border-light text-primary-dark shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] flex flex-col ${
                isAr ? 'text-right' : 'text-left'
              }`}
              dir={isAr ? 'rtl' : 'ltr'}
            >
              <div className="flex items-start justify-between gap-4 mb-6 border-b border-border-light pb-4">
                <div>
                  <span className="text-xs font-black tracking-widest text-secondary uppercase">
                    {isAr ? 'تفاصيل التخصص الأكاديمي' : 'PROGRAM DETAILS'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mt-1">
                    {isAr ? selectedMajor.name : selectedMajor.id}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedMajor(null)}
                  className="p-2 rounded-xl bg-primary/5 hover:bg-primary/10 text-primary-dark/70 hover:text-primary"
                  title={isAr ? 'إغلاق' : 'Close'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto custom-scrollbar flex-1 space-y-5 pr-1">
                <p className="text-sm text-primary-dark/85 leading-relaxed bg-white p-4 rounded-2xl border border-border-light font-medium shadow-sm">
                  {selectedMajor.shortDescription}
                </p>

                {/* Degree & Duration */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-full bg-white border border-border-light text-center shadow-sm px-4">
                    <span className="text-[11px] text-primary-dark/60 block font-bold">{isAr ? 'الدرجة العلمية' : 'Degree'}</span>
                    <span className="font-extrabold text-xs sm:text-sm text-primary">{selectedMajor.degree}</span>
                  </div>
                  <div className="p-3 rounded-full bg-white border border-border-light text-center shadow-sm px-4">
                    <span className="text-[11px] text-primary-dark/60 block font-bold">{isAr ? 'مدة الدراسة' : 'Duration'}</span>
                    <span className="font-extrabold text-xs sm:text-sm text-secondary">{selectedMajor.studyDuration}</span>
                  </div>
                </div>

                {/* Future Benefit */}
                {selectedMajor.futureBenefit && (
                  <div>
                    <h4 className="text-xs font-black text-primary uppercase tracking-wider mb-2">
                      {isAr ? 'الفائدة والأهمية المستقبلية:' : 'Future Career Benefit:'}
                    </h4>
                    <p className="text-xs text-primary-dark/80 leading-relaxed bg-white p-3.5 rounded-xl border border-border-light font-medium shadow-sm">
                      {selectedMajor.futureBenefit}
                    </p>
                  </div>
                )}

                {/* Careers */}
                {selectedMajor.careers && selectedMajor.careers.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black text-primary uppercase tracking-wider mb-2">
                      {isAr ? 'مجالات العمل والوظائف المتاحة:' : 'Career Opportunities:'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedMajor.careers.map((career, i) => (
                        <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-border-light text-xs font-bold text-primary-dark/90 shadow-sm">
                          <Briefcase className="w-4 h-4 text-secondary shrink-0" />
                          <span>{career}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                {selectedMajor.skills && selectedMajor.skills.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black text-primary uppercase tracking-wider mb-2">
                      {isAr ? 'أهم المهارات المكتسبة:' : 'Key Acquired Skills:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMajor.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-white text-xs font-bold text-primary-dark border border-primary/20 flex items-center gap-1.5 shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-5 mt-4 border-t border-border-light flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedMajor(null)}
                  className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-100 text-primary-dark/80 font-bold text-xs border border-border-light shadow-sm"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
                <button
                  onClick={() => {
                    setSelectedMajor(null);
                    setSelectedFaculty(null);
                    navigate('/admission');
                  }}
                  className="px-6 py-2.5 rounded-full bg-secondary hover:bg-emerald-600 text-white font-black text-xs shadow-md flex items-center gap-1.5 active:scale-95"
                >
                  <span>{isAr ? 'سجل في هذا التخصص الآن' : 'Enroll Now'}</span>
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
