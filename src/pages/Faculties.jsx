import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { lockBodyScroll } from '../utils/scrollLock';
import { 
  X, Briefcase, GraduationCap, ArrowLeft, ArrowRight, 
  HeartPulse, Pill, Building2, Laptop, TrendingUp, 
  Scale, Globe, ChevronRight, ChevronLeft,
  CheckCircle2, Award, Clock, ArrowUpRight,
  LayoutGrid, Layers, Phone, MessageSquare, Copy, Check, 
  MapPin, Mail, UserCheck, Stethoscope, Microscope,
  Compass, Cpu, Landmark, BookOpen, ScrollText, Network
} from 'lucide-react';
import facultiesData from '../data/faculties.json';
import { useLanguage } from '../contexts/LanguageContext';

// Authentic medical dental tooth crest (شعار أكاديمي طبي لطب الأسنان بدقة ووقار)
const DentalToothIcon = ({ className = "w-5 h-5 text-slate-800" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.5 2 5.5 4.5 5.5 8c0 3.2 1.4 6.2 2.8 9.5 1 2.3 2 4.5 3.7 4.5s2.7-2.2 3.7-4.5c1.4-3.3 2.8-6.3 2.8-9.5 0-3.5-3-6-6.5-6z" />
    <path d="M12 7v5" />
  </svg>
);

// Prestige Faculty Emblems - Futuristic Light Theme Icon Config (أيقونات تقنية متناسقة ونقية بعيداً عن القوالب النمطية)
const facultyEmblemConfig = {
  'medicine': { Icon: Stethoscope },
  'dentistry': { Icon: DentalToothIcon },
  'pharmacy': { Icon: Pill },
  'engineering': { Icon: Compass },
  'computing': { Icon: Cpu },
  'administrative-sciences': { Icon: Briefcase },
  'humanities': { Icon: BookOpen },
  'e-learning': { Icon: Network },
  'postgraduate': { Icon: GraduationCap }
};

// Futuristic Pure Light Emblem Component (أيقونات بتقنية وفخامة إلكترونية نقية بعيداً عن الذكاء الاصطناعي النمطي)
const FacultyIcon = ({ faculty, className = "w-full h-full" }) => {
  const config = (faculty && facultyEmblemConfig[faculty.id]) || {
    Icon: GraduationCap
  };

  const { Icon } = config;

  return (
    <div className={`relative w-full h-full rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden transition-all duration-300 ${className}`}>
      {/* Subtle radial emerald-soft shimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06)_0%,transparent_75%)] pointer-events-none" />
      
      {/* Concentric inner pure white circle */}
      <div className="w-full h-full rounded-full border border-white flex items-center justify-center bg-white shadow-xs relative z-10">
        <Icon 
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-800 group-hover:text-emerald-700 group-hover:scale-110 drop-shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition-all duration-300" 
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
};

// University metadata for faculties
const facultyMeta = {
  'medicine': { 
    year: '1994', num: '1', 
    accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]', 
    tagAr: 'العلوم الطبية', tagEn: 'Medical' 
  },
  'dentistry': { 
    year: '1997', num: '2', 
    accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]', 
    tagAr: 'طب الأسنان', tagEn: 'Dentistry' 
  },
  'pharmacy': { 
    year: '1999', num: '3', 
    accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]', 
    tagAr: 'العلوم الصيدلانية', tagEn: 'Pharmacy' 
  },
  'engineering': { 
    year: '2002', num: '4', 
    accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]', 
    tagAr: 'الهندسة والعمارة', tagEn: 'Engineering' 
  },
  'computing': { 
    year: '2005', num: '5', 
    accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]', 
    tagAr: 'الحاسبات والذكاء الاصطناعي', tagEn: 'Computing & AI' 
  },
  'administrative-sciences': { 
    year: '2009', num: '6', 
    accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]', 
    tagAr: 'العلوم الإدارية والمالية', tagEn: 'Business' 
  },
  'humanities': { 
    year: '2014', num: '7', 
    accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]', 
    tagAr: 'العلوم الإنسانية', tagEn: 'Humanities' 
  },
  'e-learning': { 
    year: '2018', num: '8', 
    accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]', 
    tagAr: 'التعليم الإلكتروني', tagEn: 'E-Learning' 
  },
  'postgraduate': { 
    year: '2022', num: '9', 
    accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]', 
    tagAr: 'الدراسات العليا', tagEn: 'Postgraduate' 
  },
};

// Official College Registrars Directory (بيانات مسجلي الكليات الرسمية والمعتمدة)
const facultyRegistrars = {
  'medicine': {
    titleAr: 'مسجل كلية الطب والعلوم الصحية',
    titleEn: 'Registrar, Faculty of Medicine & Health Sciences',
    nameAr: 'أ. أحمد محمد الحكيمي',
    nameEn: 'Mr. Ahmed M. Al-Hakimi',
    phone: '01-674000',
    extension: '112',
    mobile: '777761641',
    whatsapp: '967777761641',
    email: 'med.registrar@ust.edu.ye',
    locationAr: 'مجمع الكليات الطبية - الدور الأرضي - مكتب المسجل الأكاديمي (صالة 104)',
    locationEn: 'Medical Campus - Ground Floor - Academic Registrar Office (Room 104)',
    hoursAr: 'السبت إلى الأربعاء (8:00 ص - 2:30 ظهراً)',
    hoursEn: 'Sat - Wed (8:00 AM - 2:30 PM)'
  },
  'dentistry': {
    titleAr: 'مسجل كلية طب الأسنان',
    titleEn: 'Registrar, Faculty of Dentistry',
    nameAr: 'أ. طارق عبدالكريم المنصوب',
    nameEn: 'Mr. Tariq A. Al-Mansoub',
    phone: '01-674000',
    extension: '116',
    mobile: '777761641',
    whatsapp: '967777761641',
    email: 'dent.registrar@ust.edu.ye',
    locationAr: 'مستشفى طب الأسنان الجامعي - شؤون الطلاب (مكتب 102)',
    locationEn: 'University Dental Hospital - Student Affairs (Office 102)',
    hoursAr: 'السبت إلى الأربعاء (8:00 ص - 2:30 ظهراً)',
    hoursEn: 'Sat - Wed (8:00 AM - 2:30 PM)'
  },
  'pharmacy': {
    titleAr: 'مسجل كلية الصيدلة',
    titleEn: 'Registrar, Faculty of Pharmacy',
    nameAr: 'أ. فهد عبدالجليل الشامي',
    nameEn: 'Mr. Fahd A. Al-Shami',
    phone: '01-674000',
    extension: '120',
    mobile: '777761641',
    whatsapp: '967777761641',
    email: 'pharm.registrar@ust.edu.ye',
    locationAr: 'مبنى كلية الصيدلة - الدور الأرضي - صالة القبول والتسجيل',
    locationEn: 'Faculty of Pharmacy Building - Ground Floor - Admissions Hall',
    hoursAr: 'السبت إلى الأربعاء (8:00 ص - 2:30 ظهراً)',
    hoursEn: 'Sat - Wed (8:00 AM - 2:30 PM)'
  },
  'engineering': {
    titleAr: 'مسجل كلية الهندسة والعمارة',
    titleEn: 'Registrar, Faculty of Engineering & Architecture',
    nameAr: 'م. مروان سلطان العريقي',
    nameEn: 'Eng. Marwan S. Al-Ariqi',
    phone: '01-674000',
    extension: '125',
    mobile: '777761641',
    whatsapp: '967777761641',
    email: 'eng.registrar@ust.edu.ye',
    locationAr: 'مبنى كلية الهندسة - الطابق الأول - مكتب شؤون الطلاب والمسجل',
    locationEn: 'Engineering Faculty - First Floor - Student Affairs & Registrar',
    hoursAr: 'السبت إلى الأربعاء (8:00 ص - 2:30 ظهراً)',
    hoursEn: 'Sat - Wed (8:00 AM - 2:30 PM)'
  },
  'computing': {
    titleAr: 'مسجل كلية الحاسبات وتكنولوجيا المعلومات',
    titleEn: 'Registrar, Faculty of Computing & Information Technology',
    nameAr: 'أ. وليد نبيل القدسي',
    nameEn: 'Mr. Waleed N. Al-Qadasi',
    phone: '01-674000',
    extension: '138',
    mobile: '777761641',
    whatsapp: '967777761641',
    email: 'it.registrar@ust.edu.ye',
    locationAr: 'مبنى كلية الحاسبات - الدور الأرضي - مكتب القبول والتسجيل الأكاديمي',
    locationEn: 'Computing Building - Ground Floor - Academic Admissions & Registrar',
    hoursAr: 'السبت إلى الأربعاء (8:00 ص - 2:30 ظهراً)',
    hoursEn: 'Sat - Wed (8:00 AM - 2:30 PM)'
  },
  'administrative-sciences': {
    titleAr: 'مسجل كلية العلوم الإدارية والمالية',
    titleEn: 'Registrar, Faculty of Administrative & Financial Sciences',
    nameAr: 'أ. صادق عبدالله العنسي',
    nameEn: 'Mr. Sadiq A. Al-Ansi',
    phone: '01-674000',
    extension: '142',
    mobile: '777761641',
    whatsapp: '967777761641',
    email: 'admin.registrar@ust.edu.ye',
    locationAr: 'مبنى العلوم الإدارية - الدور الأرضي - مكتب المسجل الأكاديمي',
    locationEn: 'Administrative Sciences Building - Ground Floor - Registrar Office',
    hoursAr: 'السبت إلى الأربعاء (8:00 ص - 2:30 ظهراً)',
    hoursEn: 'Sat - Wed (8:00 AM - 2:30 PM)'
  },
  'humanities': {
    titleAr: 'مسجل كلية العلوم الإنسانية والاجتماعية',
    titleEn: 'Registrar, Faculty of Humanities & Social Sciences',
    nameAr: 'أ. عبدالرحمن علي الصنعاني',
    nameEn: 'Mr. Abdulrahman A. Al-Sanani',
    phone: '01-674000',
    extension: '148',
    mobile: '777761641',
    whatsapp: '967777761641',
    email: 'hum.registrar@ust.edu.ye',
    locationAr: 'مبنى الكليات الإنسانية - الطابق الأول - صالة خدمة الطلاب',
    locationEn: 'Humanities Building - First Floor - Student Services Hall',
    hoursAr: 'السبت إلى الأربعاء (8:00 ص - 2:30 ظهراً)',
    hoursEn: 'Sat - Wed (8:00 AM - 2:30 PM)'
  },
  'e-learning': {
    titleAr: 'مسجل عمادة التعليم الإلكتروني والتعليم عن بُعد',
    titleEn: 'Registrar, Deanship of E-Learning & Distance Education',
    nameAr: 'أ. محمد يحيى الذماري',
    nameEn: 'Mr. Mohammed Y. Al-Dhamari',
    phone: '01-674000',
    extension: '160',
    mobile: '777761641',
    whatsapp: '967777761641',
    email: 'elearning@ust.edu.ye',
    locationAr: 'المبنى الرئيسي - عمادة التعليم الإلكتروني - الدور الثاني',
    locationEn: 'Main Campus - E-Learning Deanship - Second Floor',
    hoursAr: 'السبت إلى الأربعاء (8:00 ص - 3:00 عصراً)',
    hoursEn: 'Sat - Wed (8:00 AM - 3:00 PM)'
  },
  'postgraduate': {
    titleAr: 'مسجل عمادة الدراسات العليا والبحث العلمي',
    titleEn: 'Registrar, Deanship of Postgraduate Studies & Research',
    nameAr: 'د. عادل منصور الحداد',
    nameEn: 'Dr. Adel M. Al-Haddad',
    phone: '01-674000',
    extension: '175',
    mobile: '777761641',
    whatsapp: '967777761641',
    email: 'postgraduate@ust.edu.ye',
    locationAr: 'مبنى الدراسات العليا - الدور الثالث - مكتب القبول والتسجيل الأكاديمي',
    locationEn: 'Postgraduate Studies Building - Third Floor - Admissions & Registrar',
    hoursAr: 'السبت إلى الأربعاء (9:00 ص - 2:00 ظهراً)',
    hoursEn: 'Sat - Wed (9:00 AM - 2:00 PM)'
  }
};

export default function Faculties() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedMajor, setSelectedMajor] = useState(null);
  const [hoveredFaculty, setHoveredFaculty] = useState(null);
  const [selectedSpotlightFaculty, setSelectedSpotlightFaculty] = useState(null);
  const [showRegistrarModal, setShowRegistrarModal] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Freeze background page scroll when any modal is open so the background never moves
  useEffect(() => {
    if (selectedFaculty || selectedMajor || showRegistrarModal) {
      const unlock = lockBodyScroll();
      return () => {
        unlock();
      };
    }
  }, [selectedFaculty, selectedMajor, showRegistrarModal]);

  const handleCopyText = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };
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

  // Active spotlight item: either hovered, or pinned clicked faculty, or first item
  const activeSpotlight = hoveredFaculty || selectedSpotlightFaculty || (filteredFaculties.length > 0 ? filteredFaculties[0] : null);
  const activeSpotlightMeta = activeSpotlight ? facultyMeta[activeSpotlight.id] : null;

  const openFacultyDetails = (faculty) => {
    setSelectedFaculty(faculty);
  };

  return (
    <div className="relative min-h-screen font-sans bg-transparent text-primary-dark overflow-x-clip pt-24 sm:pt-28 lg:pt-[124px] pb-4">
      
      {/* Decorative Brand Ambient Glowing Orbs */}
      <div className="fixed top-20 right-10 w-96 h-96 bg-sky-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-10 left-10 w-[450px] h-[450px] bg-emerald-400/6 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-white/50 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1580px] mx-auto px-3 sm:px-5 lg:px-6 w-full">

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
          <div className="relative w-full my-1 py-0">
            <div className="relative max-w-[1440px] mx-auto px-2">
              
              {/* Desktop View: All 9 Faculties Distributed in 3 Columns with Semi-Circular Pill Cards */}
              <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-2 xl:gap-4 relative">
                
                {/* RIGHT COLUMN (In Arabic RTL: Faculties 01 to 05 with semi-circular pill cards) */}
                <div className="flex flex-col justify-between h-[470px] xl:h-[495px] py-0.5">
                  {rightColumnItems.map((faculty, i) => {
                    const meta = facultyMeta[faculty.id] || { 
                      num: String(i + 1).padStart(2, '0'),
                      year: '1994',
                      accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]',
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
                        {/* Semi-Circular Stadium Capsule Card */}
                        <motion.div
                          whileHover={{ scale: 1.02, x: isAr ? 3 : -3 }}
                          className={`w-full max-w-[290px] xl:max-w-[325px] h-[54px] xl:h-[58px] rounded-full bg-white/85 hover:bg-white backdrop-blur-2xl border border-white/90 hover:border-blue-900 transition-all duration-300 shadow-[0_10px_30px_rgba(11,59,96,0.06),inset_0_1.5px_2px_rgba(255,255,255,1)] relative overflow-hidden flex items-center justify-between px-2.5 xl:px-3 py-1 ${
                            isHovered 
                              ? 'border-blue-900 ring-2 ring-blue-900/30 bg-white' 
                              : ''
                          }`}
                        >
                          {/* Glowing Top Highlight Curved Line */}
                          <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                          {/* Outer Side: Semi-Circular Badge with Number & Year */}
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <div className="w-8.5 h-8.5 xl:w-9 xl:h-9 rounded-full border-2 border-white bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center shrink-0">
                              <span className="text-[11px] xl:text-xs font-black font-mono leading-none text-slate-800">{meta.num}</span>
                              <span className="text-[6.5px] xl:text-[7px] font-bold leading-tight mt-0.5 text-slate-500">{meta.year}</span>
                            </div>

                            {/* Faculty Name & Info */}
                            <div className="min-w-0 flex-1 pr-0.5">
                              <span className="text-[7.5px] xl:text-[8px] font-extrabold tracking-wider uppercase block leading-none mb-0.5 truncate text-slate-500">
                                {isAr ? meta.tagAr : meta.tagEn}
                              </span>
                              <h3 className="text-[11px] xl:text-xs font-black truncate leading-tight text-slate-900">
                                {isAr ? faculty.name : (faculty.nameEn || faculty.name)}
                              </h3>
                              <span className="text-[8.5px] xl:text-[9px] font-bold text-slate-500 flex items-center gap-1 mt-0.5 truncate">
                                <GraduationCap className="w-2.5 h-2.5 shrink-0 text-slate-400" strokeWidth={1.5} />
                                <span>{isAr ? `${faculty.majors.length} برامج معتمدة` : `${faculty.majors.length} Majors`}</span>
                              </span>
                            </div>
                          </div>

                          {/* Inner Side: Interactive Arrow in Rounded Capsule */}
                          <div className="w-5.5 h-5.5 rounded-full border border-slate-200 bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mr-0.5 shadow-2xs">
                            <ArrowUpRight className="w-3 h-3" strokeWidth={1.6} />
                          </div>
                        </motion.div>

                        {/* Horizontal Connecting Line with Anchor Dot */}
                        <div className="flex items-center shrink-0 w-3.5 xl:w-5">
                          {/* Connector Dot at Card Semi-Circle Edge */}
                          <div className="w-2 h-2 rounded-full border-2 border-white bg-white shadow-xs" />
                          {/* Horizontal Line */}
                          <div className="h-[1.5px] flex-1 bg-white/80" />
                        </div>

                        {/* Circular Node Placed Directly on Row End (Touching Stadium Perimeter) */}
                        <div className="w-8.5 h-8.5 xl:w-9.5 xl:h-9.5 rounded-full border-2 border-white bg-white backdrop-blur-xl p-0.5 shadow-[0_0_15px_rgba(0,51,102,0.15)] flex items-center justify-center shrink-0 transition-all duration-300">
                          <div className="w-full h-full rounded-full border border-white shadow-xs flex items-center justify-center overflow-hidden bg-white p-0.5">
                            <FacultyIcon faculty={faculty} />
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* CENTER COLUMN: The Central Elongated Circle (دائرة مطولة / Stadium Capsule) */}
                <div className="relative flex items-center justify-center px-1 xl:px-2">
                  
                  <div className="relative w-[230px] xl:w-[255px] h-[470px] xl:h-[495px] rounded-[100px] xl:rounded-[115px] border-2 border-white/95 bg-gradient-to-b from-white/85 via-white/72 to-white/85 backdrop-blur-3xl shadow-[0_25px_65px_rgba(11,59,96,0.12),inset_0_2px_3px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(11,59,96,0.03)] flex flex-col items-center justify-between p-3.5 xl:p-4 text-center overflow-hidden transition-all duration-500">
                    
                    {/* Concentric Inner Outline Ring */}
                    <div className="absolute inset-1.5 rounded-[92px] xl:rounded-[107px] border border-white/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)] pointer-events-none" />

                    {/* Subtle Ambient Backlight Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-secondary/[0.04] to-accent/[0.03] pointer-events-none" />

                    {/* Top Emblem / University Crest */}
                    <div className="relative z-10 pt-2">
                      <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-white shadow-[0_0_15px_rgba(0,51,102,0.15)] border-2 border-white flex items-center justify-center mx-auto p-1 group-hover:scale-105 transition-transform">
                        <img src="/logo.png" alt="University Logo" className="w-full h-full object-contain" />
                      </div>
                      <span className="inline-block mt-1 text-[8.5px] font-black tracking-wider text-secondary uppercase bg-secondary/10 px-2 py-0.2 rounded-full border border-secondary/20">
                        {isAr ? 'المركز الرئيسي - صنعاء' : 'MAIN CAMPUS'}
                      </span>
                    </div>

                    {/* Center Information Display (Dynamic Spotlight on Hover) */}
                    <div className="relative z-10 px-1 my-auto">
                      <AnimatePresence mode="wait">
                        {activeSpotlight ? (
                          <motion.div
                            key={activeSpotlight.id}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-[10px] font-mono font-black text-blue-900 block mb-0.5">
                              #{activeSpotlightMeta?.num || '01'} • {isAr ? `تأسست ${activeSpotlightMeta?.year || '1994'}` : `Est. ${activeSpotlightMeta?.year || '1994'}`}
                            </span>
                            <h2 className="text-sm xl:text-base font-black text-blue-950 leading-tight mb-1">
                              {isAr ? activeSpotlight.name : (activeSpotlight.nameEn || activeSpotlight.name)}
                            </h2>
                            <p className="text-[10px] xl:text-[10.5px] text-slate-600 line-clamp-2 leading-relaxed mb-2">
                              {isAr ? activeSpotlight.description : (activeSpotlight.descriptionEn || activeSpotlight.description)}
                            </p>
                            <button
                              onClick={() => openFacultyDetails(activeSpotlight)}
                              className="px-3.5 py-1 rounded-full bg-blue-900 hover:bg-blue-950 text-white text-[10px] font-bold shadow-xs transition-all inline-flex items-center gap-1 active:scale-95 cursor-pointer"
                            >
                              <span>{isAr ? 'استعراض تخصصات الكلية' : 'View Programs'}</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </button>
                          </motion.div>
                        ) : (
                          <div>
                            <h2 className="text-sm xl:text-base font-black text-primary leading-tight mb-1">
                              {isAr ? 'جامعة العلوم والتكنولوجيا' : 'UNIVERSITY OF SCIENCE & TECHNOLOGY'}
                            </h2>
                            <p className="text-[10px] xl:text-[10.5px] text-primary-dark/75 leading-relaxed">
                              {isAr ? 'صرح أكاديمي رائد يضم 9 كليات وعمادات معتمدة' : 'Unified Academic Structure with 9 Faculties'}
                            </p>
                          </div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom University Stats Watermark */}
                    <div className="relative z-10 pb-2">
                      <div className="p-1.5 xl:p-2 rounded-full bg-slate-100/80 border border-border-light text-center px-3">
                        <span className="text-[9.5px] font-black text-primary block leading-tight">
                          {isAr ? '9 كليات وعمادات | +44 تخصصاً' : '9 Faculties | +44 Programs'}
                        </span>
                        <span className="text-[8.5px] font-bold text-secondary flex items-center justify-center gap-1 mt-0.5 leading-none">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          <span>{isAr ? 'اعتماد محلي ودولي 100%' : '100% Accredited'}</span>
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* LEFT COLUMN (In Arabic RTL: Faculties 06 to 09 with semi-circular pill cards) */}
                <div className="flex flex-col justify-between h-[470px] xl:h-[495px] py-0.5">
                  {leftColumnItems.map((faculty, i) => {
                    const meta = facultyMeta[faculty.id] || { 
                      num: String(i + 6).padStart(2, '0'),
                      year: '2009',
                      accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]',
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
                        <div className="w-8.5 h-8.5 xl:w-9.5 xl:h-9.5 rounded-full border-2 border-white bg-white backdrop-blur-xl p-0.5 shadow-[0_0_15px_rgba(0,51,102,0.15)] flex items-center justify-center shrink-0 transition-all duration-300">
                          <div className="w-full h-full rounded-full border border-white shadow-xs flex items-center justify-center overflow-hidden bg-white p-0.5">
                            <FacultyIcon faculty={faculty} />
                          </div>
                        </div>

                        {/* Horizontal Connecting Line with Anchor Dot */}
                        <div className="flex items-center shrink-0 w-3.5 xl:w-5">
                          {/* Horizontal Line */}
                          <div className="h-[1.5px] flex-1 bg-white/80" />
                          {/* Connector Dot at Card Semi-Circle Edge */}
                          <div className="w-2 h-2 rounded-full border-2 border-white bg-white shadow-xs" />
                        </div>

                        {/* Semi-Circular Stadium Capsule Card */}
                        <motion.div
                          whileHover={{ scale: 1.02, x: isAr ? -3 : 3 }}
                          className={`w-full max-w-[290px] xl:max-w-[325px] h-[54px] xl:h-[58px] rounded-full bg-white/85 hover:bg-white backdrop-blur-2xl border border-white/90 hover:border-blue-900 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.04),inset_0_1.5px_2px_rgba(255,255,255,1)] relative overflow-hidden flex items-center justify-between px-2.5 xl:px-3 py-1 ${
                            isHovered 
                              ? 'border-blue-900 ring-2 ring-blue-900/30 bg-white' 
                              : ''
                          }`}
                        >
                          {/* Glowing Top Highlight Curved Line */}
                          <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                          {/* Inner Side: Interactive Arrow in Rounded Capsule */}
                          <div className="w-5.5 h-5.5 rounded-full border border-slate-200 bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 ml-0.5 shadow-2xs">
                            <ArrowUpRight className="w-3 h-3" strokeWidth={1.6} />
                          </div>

                          {/* Faculty Name & Info */}
                          <div className="min-w-0 flex-1 pl-0.5 text-right rtl:text-right ltr:text-left">
                            <span className="text-[7.5px] xl:text-[8px] font-extrabold tracking-wider uppercase block leading-none mb-0.5 truncate text-slate-500">
                              {isAr ? meta.tagAr : meta.tagEn}
                            </span>
                            <h3 className="text-[11px] xl:text-xs font-black truncate leading-tight text-slate-900">
                              {isAr ? faculty.name : (faculty.nameEn || faculty.name)}
                            </h3>
                            <span className="text-[8.5px] xl:text-[9px] font-bold text-slate-500 flex items-center gap-1 mt-0.5 truncate">
                              <GraduationCap className="w-2.5 h-2.5 shrink-0 text-slate-400" strokeWidth={1.5} />
                              <span>{isAr ? `${faculty.majors.length} برامج معتمدة` : `${faculty.majors.length} Majors`}</span>
                            </span>
                          </div>

                          {/* Outer Side: Semi-Circular Badge with Number & Year */}
                          <div className="w-8.5 h-8.5 xl:w-9 xl:h-9 rounded-full border-2 border-white bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center shrink-0">
                            <span className="text-[11px] xl:text-xs font-black font-mono leading-none text-slate-800">{meta.num}</span>
                            <span className="text-[6.5px] xl:text-[7px] font-bold leading-tight mt-0.5 text-slate-500">{meta.year}</span>
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
                      accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]',
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
                        <div className="w-12 h-12 rounded-full border-2 border-white shadow-[0_0_15px_rgba(0,51,102,0.15)] flex items-center justify-center shrink-0 overflow-hidden bg-white/95 p-0.5">
                          <FacultyIcon faculty={faculty} />
                        </div>

                        {/* Title & Info */}
                        <div className="flex-1 min-w-0 text-right rtl:text-right ltr:text-left">
                          <span className="text-[9px] font-black text-secondary uppercase bg-secondary/10 px-2 py-0.2 rounded-full inline-block mb-0.5">
                            {isAr ? meta.tagAr : meta.tagEn}
                          </span>
                          <h3 className="text-xs sm:text-sm font-bold text-primary truncate">
                            {isAr ? faculty.name : (faculty.nameEn || faculty.name)}
                          </h3>
                          <span className="text-[10px] text-primary-dark/65 truncate block">
                            {isAr ? `${faculty.majors.length} برامج وتخصصات معتمدة` : `${faculty.majors.length} accredited majors`}
                          </span>
                        </div>

                        {/* Number Badge */}
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center text-slate-800 shrink-0">
                          <span className="text-xs font-black font-mono leading-none">{meta.num}</span>
                          <span className="text-[7.5px] font-bold text-slate-500 leading-tight mt-0.5">{meta.year}</span>
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
                num: String(index + 1),
                accentColor: 'from-[#0B3B60] via-[#092B46] to-[#07243B]',
                tagAr: 'كلية معتمدة',
                tagEn: 'Faculty'
              };

              return (
                <motion.div
                  key={faculty.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group crystal-card crystal-card-hover rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${meta.accentColor}`} />

                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full border-2 border-white shadow-[0_0_15px_rgba(0,51,102,0.15)] flex items-center justify-center shrink-0 overflow-hidden bg-white/95 p-0.5">
                          <FacultyIcon faculty={faculty} />
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
                      {isAr ? faculty.name : (faculty.nameEn || faculty.name)}
                    </h3>

                    <p className="text-xs text-primary-dark/70 font-medium leading-relaxed mb-4 line-clamp-3">
                      {isAr ? faculty.description : (faculty.descriptionEn || faculty.description)}
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
                            <span>{isAr ? major.name : (major.nameEn || major.name)}</span>
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
        <div className="text-center pt-2 pb-1 relative z-10 border-t border-primary/10 max-w-4xl mx-auto w-full mt-3">
          <p className="text-[10px] font-bold text-primary-dark/50 tracking-wider">
            {isAr 
              ? 'جامعة العلوم والتكنولوجيا - المركز الرئيسي صنعاء | الريادة والتميز في التعليم العالي والبحث العلمي' 
              : 'UNIVERSITY OF SCIENCE & TECHNOLOGY - SANA\'A MAIN CAMPUS | EXCELLENCE IN HIGHER EDUCATION'}
          </p>
        </div>

      </div>

      {/* Faculty Full Details & Majors Drawer / Modal */}
      <AnimatePresence>
        {selectedFaculty && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 select-none overflow-hidden touch-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFaculty(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className={`relative z-10 w-full max-w-3xl rounded-[48px] sm:rounded-[60px] md:rounded-[70px] bg-white/95 backdrop-blur-2xl border-2 border-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] text-slate-800 overflow-hidden flex flex-col max-h-[88vh] ${
                isAr ? 'text-right' : 'text-left'
              }`}
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {/* Concentric Inner Outline Ring */}
              <div className="absolute inset-1.5 sm:inset-2 rounded-[44px] sm:rounded-[54px] md:rounded-[64px] border border-slate-200/50 pointer-events-none z-20" />

              {/* Modal Header - Luxurious Clean Light Crystal Aesthetic (No blue) */}
              <div className="relative p-6 sm:p-8 rounded-b-[28px] sm:rounded-b-[36px] bg-gradient-to-b from-white via-white to-slate-50/90 border-b border-slate-200/80 text-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Faculty Icon Badge (Pure White with subtle elevation) */}
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center shrink-0 shadow-[0_8px_25px_rgba(0,0,0,0.08)] overflow-hidden bg-white p-0.5">
                    <FacultyIcon faculty={selectedFaculty} />
                  </div>
                  <div>
                    <span className="text-xs font-black tracking-widest text-emerald-600 uppercase block mb-1">
                      {isAr ? 'كليات الجامعة المعتمدة' : 'ACCREDITED FACULTY'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                      {isAr ? selectedFaculty.name : (selectedFaculty.nameEn || selectedFaculty.name)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-xl font-medium leading-relaxed">
                      {isAr ? selectedFaculty.description : (selectedFaculty.descriptionEn || selectedFaculty.description)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedFaculty(null)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shrink-0 shadow-2xs cursor-pointer active:scale-95"
                  title={isAr ? 'إغلاق' : 'Close'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body - List of Majors */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar overscroll-contain touch-auto flex-1 space-y-6">

                <div>
                  <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    <span>{isAr ? 'الأقسام والتخصصات المتاحة (انقر على التخصص لعرض تفاصيله):' : 'Available Departments & Majors:'}</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedFaculty.majors.map((major) => (
                      <div
                        key={major.id}
                        onClick={() => setSelectedMajor(major)}
                        className="group/item cursor-pointer px-4 sm:px-5 py-3 rounded-full bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-emerald-500/80 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3 relative overflow-hidden"
                      >
                        {/* Circular Icon */}
                        <div className="w-10 h-10 rounded-full bg-emerald-50 group-hover/item:bg-emerald-600 group-hover/item:text-white text-emerald-700 border border-emerald-100/80 flex items-center justify-center shrink-0 transition-all duration-300">
                          <GraduationCap className="w-5 h-5" />
                        </div>

                        {/* Title & Duration / Degree */}
                        <div className="min-w-0 flex-1">
                          <h5 className="font-bold text-slate-800 text-xs sm:text-sm group-hover/item:text-emerald-700 transition-colors truncate">
                            {isAr ? major.name : (major.nameEn || major.name)}
                          </h5>
                          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-bold text-slate-500 mt-0.5">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                              <span className="truncate">{isAr ? major.studyDuration : (major.studyDurationEn || major.studyDuration)}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Award className="w-3 h-3 text-emerald-600 shrink-0" />
                              <span className="truncate">{isAr ? major.degree : (major.degreeEn || major.degree)}</span>
                            </span>
                          </div>
                        </div>

                        {/* End Round Arrow Button */}
                        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover/item:bg-emerald-600 group-hover/item:text-white text-slate-600 flex items-center justify-center shrink-0 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedFaculty(null)}
                  className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 shadow-2xs transition-all active:scale-95 cursor-pointer"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <span className="text-xs text-slate-500 font-semibold hidden md:inline">
                    {isAr ? 'لأي استفسار أكاديمي يمكنك التواصل مع مسجل الكلية مباشرة' : 'For academic inquiries, you can contact the faculty registrar'}
                  </span>

                  <button
                    onClick={() => setShowRegistrarModal(true)}
                    className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-800 font-bold text-xs sm:text-sm border border-emerald-200 shadow-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer group/btn"
                  >
                    <Phone className="w-4 h-4 text-emerald-600 group-hover/btn:text-white transition-colors" />
                    <span>{isAr ? 'للاستفسار: مسجل الكلية' : 'Contact Registrar'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Major Detailed Drawer/Modal */}
      <AnimatePresence>
        {selectedMajor && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 select-none overflow-hidden touch-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMajor(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              className={`relative z-10 w-full max-w-2xl rounded-[48px] sm:rounded-[60px] md:rounded-[70px] bg-white/95 backdrop-blur-2xl border-2 border-white text-slate-800 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] flex flex-col ${
                isAr ? 'text-right' : 'text-left'
              }`}
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {/* Concentric Inner Outline Ring */}
              <div className="absolute inset-1.5 sm:inset-2 rounded-[44px] sm:rounded-[54px] md:rounded-[64px] border border-slate-200/50 pointer-events-none z-20" />
              <div className="flex items-start justify-between gap-4 mb-6 border-b border-border-light pb-4">
                <div>
                  <span className="text-xs font-black tracking-widest text-secondary uppercase">
                    {isAr ? 'تفاصيل التخصص الأكاديمي' : 'PROGRAM DETAILS'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mt-1">
                    {isAr ? selectedMajor.name : (selectedMajor.nameEn || selectedMajor.name)}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedMajor(null)}
                  className="w-9 h-9 rounded-full bg-primary/5 hover:bg-primary/10 text-primary-dark/70 hover:text-primary flex items-center justify-center transition-colors shrink-0"
                  title={isAr ? 'إغلاق' : 'Close'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto custom-scrollbar overscroll-contain touch-auto flex-1 space-y-5 pr-1">
                <div className="text-xs sm:text-sm text-primary-dark/85 leading-relaxed bg-white px-5 sm:px-6 py-3.5 rounded-full border border-border-light font-medium shadow-sm text-center">
                  {isAr ? selectedMajor.shortDescription : (selectedMajor.shortDescriptionEn || selectedMajor.shortDescription)}
                </div>

                {/* Degree & Duration */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-full bg-white border border-border-light text-center shadow-sm px-4">
                    <span className="text-[11px] text-primary-dark/60 block font-bold">{isAr ? 'الدرجة العلمية' : 'Degree'}</span>
                    <span className="font-extrabold text-xs sm:text-sm text-primary">{isAr ? selectedMajor.degree : (selectedMajor.degreeEn || selectedMajor.degree)}</span>
                  </div>
                  <div className="p-3 rounded-full bg-white border border-border-light text-center shadow-sm px-4">
                    <span className="text-[11px] text-primary-dark/60 block font-bold">{isAr ? 'مدة الدراسة' : 'Duration'}</span>
                    <span className="font-extrabold text-xs sm:text-sm text-secondary">{isAr ? selectedMajor.studyDuration : (selectedMajor.studyDurationEn || selectedMajor.studyDuration)}</span>
                  </div>
                </div>

                {/* Future Benefit */}
                {selectedMajor.futureBenefit && (
                  <div>
                    <h4 className="text-xs font-black text-primary uppercase tracking-wider mb-2">
                      {isAr ? 'الفائدة والأهمية المستقبلية:' : 'Future Career Benefit:'}
                    </h4>
                    <div className="text-xs text-primary-dark/85 leading-relaxed bg-white px-5 sm:px-6 py-3 rounded-full border border-border-light font-medium shadow-sm text-center">
                      {isAr ? selectedMajor.futureBenefit : (selectedMajor.futureBenefitEn || selectedMajor.futureBenefit)}
                    </div>
                  </div>
                )}

                {/* Careers */}
                {selectedMajor.careers && selectedMajor.careers.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black text-primary uppercase tracking-wider mb-2">
                      {isAr ? 'مجالات العمل والوظائف المتاحة:' : 'Career Opportunities:'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(isAr ? selectedMajor.careers : (selectedMajor.careersEn || selectedMajor.careers)).map((career, i) => (
                        <div key={i} className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-white border border-border-light text-xs font-bold text-primary-dark/90 shadow-sm hover:border-secondary transition-all">
                          <Briefcase className="w-4 h-4 text-secondary shrink-0" />
                          <span className="truncate">{career}</span>
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
                      {(isAr ? selectedMajor.skills : (selectedMajor.skillsEn || selectedMajor.skills)).map((skill, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full bg-white text-xs font-bold text-primary-dark border border-primary/20 flex items-center gap-1.5 shadow-sm hover:border-secondary transition-all">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer with Actions */}
              <div className="pt-4 mt-3 border-t border-border-light flex items-center justify-between gap-2.5">
                <button
                  onClick={() => setSelectedMajor(null)}
                  className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-100 text-primary-dark/80 font-bold text-xs border border-border-light shadow-sm transition-all active:scale-95"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>

                <button
                  onClick={() => setShowRegistrarModal(true)}
                  className="px-6 py-2.5 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary font-bold text-xs border border-primary/20 shadow-xs flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-secondary" />
                  <span>{isAr ? 'للاستفسار: مسجل الكلية' : 'Contact Registrar'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Official College Registrar Dedicated Inquiry Modal */}
      <AnimatePresence>
        {showRegistrarModal && (selectedMajor || selectedFaculty) && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 select-none overflow-hidden touch-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRegistrarModal(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              className={`relative z-10 w-full max-w-lg rounded-[48px] sm:rounded-[60px] md:rounded-[70px] crystal-modal shadow-[0_30px_80px_rgba(11,59,96,0.2)] text-primary-dark overflow-hidden p-6 sm:p-8 ${
                isAr ? 'text-right' : 'text-left'
              }`}
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {/* Concentric Inner Outline Ring */}
              <div className="absolute inset-1.5 sm:inset-2 rounded-[44px] sm:rounded-[54px] md:rounded-[64px] border border-primary/15 pointer-events-none z-20" />
              {(() => {
                const currentFaculty = selectedFaculty || facultiesData.find(f => f.majors.some(m => m.id === selectedMajor?.id)) || facultiesData[0];
                const reg = facultyRegistrars[currentFaculty?.id] || facultyRegistrars['medicine'];

                return (
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-5 border-b border-border-light pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md p-1.5">
                          <img src="/logo.png" alt="UST Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-secondary tracking-wider uppercase block">
                            {isAr ? 'جامعة العلوم والتكنولوجيا - المركز الرئيسي' : 'UNIVERSITY OF SCIENCE & TECHNOLOGY'}
                          </span>
                          <h3 className="text-base sm:text-lg font-black text-primary leading-tight">
                            {isAr ? reg.titleAr : reg.titleEn}
                          </h3>
                        </div>
                      </div>

                      <button
                        onClick={() => setShowRegistrarModal(false)}
                        className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-primary-dark/70 hover:text-primary flex items-center justify-center transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Official Banner Card */}
                    <div className="p-4 rounded-3xl bg-white border border-primary/20 shadow-xs mb-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-primary-dark/60 block">{isAr ? 'اسم المسجل الأكاديمي المعتمد:' : 'Accredited Registrar:'}</span>
                          <span className="text-sm font-black text-primary">{isAr ? reg.nameAr : reg.nameEn}</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-extrabold">
                          {isAr ? 'معتمد رسمياً' : 'Official Registrar'}
                        </span>
                      </div>

                      <div className="p-3 rounded-2xl bg-slate-50 border border-border-light text-xs space-y-1.5">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-secondary shrink-0" />
                          <span className="font-bold text-primary">
                            {isAr 
                              ? (selectedMajor ? `تخصص الاستفسار: ${selectedMajor.name}` : `الكلية: ${currentFaculty.name}`)
                              : (selectedMajor ? `Inquiry Program: ${selectedMajor.nameEn || selectedMajor.name}` : `Faculty: ${currentFaculty.nameEn || currentFaculty.name}`)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-primary-dark/70 text-[11px]">
                          <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{isAr ? reg.locationAr : reg.locationEn}</span>
                        </div>
                        <div className="flex items-center gap-2 text-primary-dark/70 text-[11px]">
                          <Clock className="w-3.5 h-3.5 text-secondary shrink-0" />
                          <span>{isAr ? reg.hoursAr : reg.hoursEn}</span>
                        </div>
                      </div>
                    </div>

                    {/* Communication Numbers */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 rounded-full bg-white border border-border-light text-center px-4">
                        <span className="text-[10px] text-primary-dark/60 font-bold block mb-0.5">
                          {isAr ? 'هاتف الكلية والتحويلة:' : 'Telephone & Extension:'}
                        </span>
                        <div className="font-mono font-black text-primary text-xs sm:text-sm">
                          {reg.phone} <span className="text-[11px] text-secondary font-bold">({isAr ? `تحويلة ${reg.extension}` : `Ext. ${reg.extension}`})</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-full bg-emerald-50/70 border border-emerald-200 text-center px-4">
                        <span className="text-[10px] text-emerald-800 font-bold block mb-0.5">
                          {isAr ? 'الواتساب المباشر:' : 'Direct WhatsApp:'}
                        </span>
                        <div className="font-mono font-black text-emerald-700 text-xs sm:text-sm">
                          +967 {reg.mobile}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
