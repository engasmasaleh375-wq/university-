import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ChevronLeft, ChevronRight, User, BookOpen, 
  FileCheck, Check, AlertCircle, CheckCircle2, Award,
  GraduationCap, Search, ShieldCheck
} from 'lucide-react';
import facultiesData from '../data/faculties.json';
import { useLanguage } from '../contexts/LanguageContext';

export default function AdmissionForm() {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';
  
  const steps = [
    { id: 1, title: isAr ? 'البيانات الشخصية والمعدل' : 'Personal Info & GPA', icon: User },
    { id: 2, title: isAr ? 'الرغبة الأكاديمية المناسبة' : 'Eligible Majors', icon: BookOpen },
    { id: 3, title: isAr ? 'المراجعة والتأكيد' : 'Review & Submit', icon: FileCheck }
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showOnlyEligible, setShowOnlyEligible] = useState(true);
  const [searchMajorQuery, setSearchMajorQuery] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    gpa: '',
    facultyId: '',
    majorId: ''
  });

  const parsedGpa = parseFloat(formData.gpa) || 0;

  // 1 to 10 Scan & Countdown States
  const [scanStep, setScanStep] = useState(0); // 0 = idle, 1..10 = active step
  const [countdown, setCountdown] = useState(10); // 10 down to 1
  const [isScanning, setIsScanning] = useState(false);
  const [hasCompletedScan, setHasCompletedScan] = useState(false);
  const [lastScannedGpa, setLastScannedGpa] = useState(null);
  const scanIntervalRef = useRef(null);
  const debounceTimerRef = useRef(null);

  const runEligibilityScan = (targetGpa = parsedGpa) => {
    if (targetGpa < 50 || targetGpa > 100) return;
    if (scanIntervalRef.current) clearInterval(scanIntervalRef.current);

    setIsScanning(true);
    setHasCompletedScan(false);
    setScanStep(1);
    setCountdown(10);

    let current = 1;
    scanIntervalRef.current = setInterval(() => {
      current += 1;
      if (current <= 10) {
        setScanStep(current);
        setCountdown(11 - current); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
      } else {
        clearInterval(scanIntervalRef.current);
        scanIntervalRef.current = null;
        setIsScanning(false);
        setHasCompletedScan(true);
        setCountdown(0);
        setLastScannedGpa(targetGpa);
      }
    }, 750); // 750ms per step = smooth countdown
  };

  useEffect(() => {
    return () => {
      if (scanIntervalRef.current) clearInterval(scanIntervalRef.current);
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, []);

  // When GPA changes: hide results while typing, and auto-trigger scan after user pauses
  useEffect(() => {
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);

    if (parsedGpa >= 50 && parsedGpa <= 100) {
      if (parsedGpa !== lastScannedGpa) {
        setHasCompletedScan(false);
        setScanStep(0);
        setCountdown(10);
        debounceTimerRef.current = setTimeout(() => {
          runEligibilityScan(parsedGpa);
        }, 700);
      }
    } else {
      setHasCompletedScan(false);
      setScanStep(0);
      setCountdown(10);
      setIsScanning(false);
    }
  }, [parsedGpa, lastScannedGpa]);

  // Flatten all majors to easily count eligible ones
  const allMajorsList = useMemo(() => {
    const list = [];
    facultiesData.forEach(faculty => {
      faculty.majors.forEach(major => {
        list.push({ ...major, facultyId: faculty.id, facultyName: faculty.name });
      });
    });
    return list;
  }, []);

  // Filter majors eligible by GPA
  const eligibleMajorsList = useMemo(() => {
    if (!parsedGpa) return [];
    return allMajorsList.filter(major => parsedGpa >= (major.minGpa || 50));
  }, [allMajorsList, parsedGpa]);

  // Faculties that have at least one eligible major
  const eligibleFaculties = useMemo(() => {
    if (!parsedGpa) return facultiesData;
    return facultiesData.filter(faculty => 
      faculty.majors.some(m => parsedGpa >= (m.minGpa || 50))
    );
  }, [parsedGpa]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (name === 'facultyId') {
        newData.majorId = '';
      }
      return newData;
    });

    if (name === 'gpa') {
      setHasCompletedScan(false);
      setScanStep(0);
      setCountdown(10);
      setIsScanning(false);
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.fullName || !formData.phone || !formData.gpa) return;
      if (parsedGpa < 50 || parsedGpa > 100) return;
      
      // Auto select first eligible faculty if none chosen
      if (!formData.facultyId && eligibleFaculties.length > 0) {
        setFormData(prev => ({ ...prev, facultyId: eligibleFaculties[0].id }));
      }
    }
    if (currentStep === 2) {
      if (!formData.facultyId || !formData.majorId) return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      gpa: '',
      facultyId: '',
      majorId: ''
    });
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const selectedFaculty = facultiesData.find(f => f.id === formData.facultyId);
  const selectedMajor = selectedFaculty?.majors.find(m => m.id === formData.majorId);

  // Active majors inside currently selected faculty
  const currentFacultyMajors = useMemo(() => {
    if (!selectedFaculty) return [];
    let list = selectedFaculty.majors;

    if (showOnlyEligible && parsedGpa > 0) {
      list = list.filter(m => parsedGpa >= (m.minGpa || 50));
    }

    if (searchMajorQuery.trim()) {
      const q = searchMajorQuery.toLowerCase().trim();
      list = list.filter(m => m.name.toLowerCase().includes(q));
    }

    return list;
  }, [selectedFaculty, showOnlyEligible, parsedGpa, searchMajorQuery]);

  return (
    <div className="relative min-h-screen bg-transparent text-primary-dark pt-28 sm:pt-32 md:pt-36 pb-14 px-3 sm:px-6 overflow-x-hidden font-sans">
      {/* Decorative Brand Ambient Glowing Orbs */}
      <div className="fixed top-20 right-10 w-96 h-96 bg-sky-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-10 left-10 w-[450px] h-[450px] bg-emerald-400/6 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-white/50 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-3 sm:mb-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-primary mb-1.5 tracking-tight">
            {t('admissionPortal')}
          </h1>
          <p className="text-primary-dark/80 font-medium text-xs sm:text-[13px] max-w-md mx-auto leading-relaxed">
            {isAr 
              ? 'أدخل بياناتك ومعدل الثانوية العامة لتظهر لك التخصصات والكليات المتاحة لك فوراً.'
              : 'Enter your High School GPA to immediately discover and apply for eligible academic specializations.'}
          </p>
        </div>

        {/* Form Container - Frosted Glass Stadium Capsule */}
        <div className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-[32px] sm:rounded-[44px] md:rounded-[52px] shadow-lg overflow-hidden">
          {/* Stepper Header */}
          <div className="bg-white/20 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-2.5 border-b border-white/30 overflow-x-auto custom-scrollbar">
            <div className="flex justify-between items-center relative min-w-[270px] max-w-md mx-auto">
              {/* Line background */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-primary/10 -z-10 rounded-full"></div>
              {/* Active line */}
              <div 
                className={`absolute ${isAr ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 h-0.5 bg-primary transition-all duration-500 -z-10 rounded-full`}
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              ></div>

              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;

                return (
                  <div key={step.id} className="flex flex-col items-center">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 border-white transition-all duration-300 shadow-xs ${
                      isActive ? 'bg-primary text-white scale-105 shadow-md shadow-primary/30 ring-2 ring-primary/20' 
                      : isCompleted ? 'bg-primary text-white shadow-xs' 
                      : 'bg-white/30 backdrop-blur-md text-primary-dark/60 border border-white/30'
                    }`}>
                      {isCompleted ? <Check className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                    </div>
                    <span className={`mt-1 text-[10.5px] sm:text-xs font-bold whitespace-nowrap ${
                      isActive ? 'text-primary font-black' 
                      : isCompleted ? 'text-primary-dark/80 font-bold' 
                      : 'text-gray-400'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Body */}
          <div className="p-3.5 sm:p-4.5 sm:py-3.5">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-2 shadow-xs border border-primary/20">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-primary mb-1.5">{t('successTitle')}</h2>
                  
                  <div className="bg-white/30 backdrop-blur-md border border-white/30 rounded-3xl p-4 sm:p-5 max-w-md mx-auto mb-3 shadow-lg text-right" dir={isAr ? 'rtl' : 'ltr'}>
                    <div className="flex items-center justify-between pb-2 border-b border-primary/10 mb-2">
                      <span className="text-[11px] font-bold text-primary-dark/60">{isAr ? 'رقم الطلب' : 'Application No'}:</span>
                      <strong className="text-primary bg-primary/10 border border-primary/20 px-3 py-0.5 rounded-full text-xs font-mono">#UST-2026-98347</strong>
                    </div>
                    <div className="space-y-1 text-xs font-semibold text-primary-dark/80">
                      <div><span className="text-primary-dark/50">{isAr ? 'اسم الطالب' : 'Student Name'}:</span> {formData.fullName}</div>
                      <div><span className="text-primary-dark/50">{isAr ? 'المعدل' : 'GPA'}:</span> <span className="font-bold text-primary">{formData.gpa}%</span></div>
                      <div><span className="text-primary-dark/50">{isAr ? 'الكلية' : 'Faculty'}:</span> {isAr ? selectedFaculty?.name : selectedFaculty?.id}</div>
                      <div><span className="text-primary-dark/50">{isAr ? 'التخصص المختار' : 'Major'}:</span> <span className="font-extrabold text-primary">{isAr ? selectedMajor?.name : selectedMajor?.id}</span></div>
                    </div>
                  </div>

                  <p className="text-primary-dark/70 mb-3.5 max-w-sm mx-auto text-xs leading-normal">
                    {isAr 
                      ? 'تم تسجيل طلبك المبدئي بنجاح لدى عمادة القبول والتسجيل. سيتم التواصل معك عبر الهاتف لاستكمال تسليم الوثائق المطلوبة.'
                      : 'Your preliminary application has been received. Our admission staff will contact you shortly to complete the enrollment process.'}
                  </p>
                  
                  <button 
                    onClick={resetForm}
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-8 rounded-full transition-all shadow-sm hover:shadow-md active:scale-95 text-xs sm:text-sm cursor-pointer"
                  >
                    {t('newAppBtn')}
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: isAr ? -15 : 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isAr ? 15 : -15 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* STEP 1: Personal Info & GPA Entry */}
                  {currentStep === 1 && (
                    <div className="space-y-4 sm:space-y-5">
                    {/* Row 1: Full Name on Top (الاسم فوق) */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-primary-dark mb-2 px-2">
                        {t('fullName')} <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={isAr ? 'أدخل اسمك الرباعي كما في استمارة الثانوية' : 'Enter your full name'}
                        className="w-full px-6 py-3 sm:py-3.5 rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/20 focus:bg-white/40 transition-all font-semibold text-xs sm:text-sm text-primary-dark placeholder:text-gray-500"
                      />
                    </div>

                    {/* Row 2: Phone & GPA Side-by-Side (وتحته الرقم والمعدل جمبه) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-primary-dark mb-2 px-2">
                          {t('phone')} <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={isAr ? 'مثال: 77XXXXXXX' : 'e.g. +967 77XXXXXXX'}
                          className={`w-full px-6 py-3 sm:py-3.5 rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/20 focus:bg-white/40 transition-all font-semibold text-xs sm:text-sm text-primary-dark placeholder:text-gray-500 ${isAr ? 'text-left' : ''}`}
                          dir="ltr"
                        />
                      </div>

                      {/* GPA */}
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-primary-dark mb-2 px-2">
                          {isAr ? 'معدل الثانوية العامة (%)' : 'High School GPA (%)'} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input 
                            type="number" 
                            name="gpa"
                            value={formData.gpa}
                            onChange={handleChange}
                            placeholder={isAr ? 'مثلاً: 82' : 'e.g. 82'}
                            min="50" max="100" step="0.01"
                            className="w-full px-6 py-3 sm:py-3.5 rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/20 focus:bg-white/40 transition-all font-black text-sm sm:text-base text-primary rtl:pr-6 rtl:pl-11 ltr:pl-6 ltr:pr-11 placeholder:text-gray-500"
                          />
                          <span className="absolute top-1/2 -translate-y-1/2 font-black text-sm text-primary/70 rtl:left-6 rtl:right-auto ltr:right-6 ltr:left-auto">
                            %
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Diagnostic 1-to-10 GPA Scanner Below (والفحص يكون تحت) */}
                    {parsedGpa > 0 && (
                      <div>
                        {parsedGpa < 50 ? (
                          <motion.div 
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-2.5 sm:p-3 px-5 sm:px-6 rounded-full border bg-red-500/10 backdrop-blur-md border-red-400/30 text-red-950 flex items-center gap-2.5 text-xs font-semibold shadow-sm"
                          >
                            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                            <span>
                              {isAr 
                                ? 'المعدل أقل من الحد الأدنى للقبول في الجامعة (50%).'
                                : 'GPA is below minimum university requirement (50%).'}
                            </span>
                          </motion.div>
                        ) : (
                          <motion.div 
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-3 sm:p-3.5 px-5 sm:px-6 rounded-full border backdrop-blur-md transition-all duration-300 shadow-sm select-none ${
                              hasCompletedScan
                                ? 'bg-emerald-500/15 border-emerald-500/30'
                                : isScanning
                                ? 'bg-sky-500/15 border-sky-400/35'
                                : 'bg-white/25 border-white/30'
                            }`}
                          >
                              <div className="flex items-center gap-3.5">
                                {/* Progress Ring */}
                                <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
                                  <svg className="w-full h-full -rotate-90" viewBox="0 0 44 44">
                                    <circle
                                      cx="22"
                                      cy="22"
                                      r="17"
                                      className="stroke-primary/15"
                                      strokeWidth="3.5"
                                      fill="transparent"
                                    />
                                    <circle
                                      cx="22"
                                      cy="22"
                                      r="17"
                                      className={`transition-all duration-700 ease-out ${
                                        hasCompletedScan ? 'stroke-emerald-600' : 'stroke-primary'
                                      }`}
                                      strokeWidth="3.5"
                                      strokeLinecap="round"
                                      fill="transparent"
                                      strokeDasharray="106.8"
                                      strokeDashoffset={hasCompletedScan ? 0 : 106.8 * (1 - (scanStep / 10))}
                                    />
                                  </svg>

                                  <div className="absolute inset-0 flex items-center justify-center">
                                    {hasCompletedScan ? (
                                      <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
                                        <Check className="w-4 h-4 stroke-[3]" />
                                      </div>
                                    ) : isScanning ? (
                                      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                                    ) : (
                                      <div className="w-2 h-2 rounded-full bg-primary/40" />
                                    )}
                                  </div>
                                </div>

                                {/* Text Info */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2">
                                    <h4 className={`text-xs sm:text-sm font-extrabold truncate ${
                                      hasCompletedScan ? 'text-emerald-800' : 'text-primary'
                                    }`}>
                                      {hasCompletedScan
                                        ? (isAr 
                                            ? 'رائع! معدلك يتيح لك عدة خيارات أكاديمية، انقر على «التالي» لاستعراضها' 
                                            : 'Great! Your GPA qualifies you for multiple academic choices, click "Next" to explore')
                                        : isScanning
                                        ? (isAr 
                                            ? `نعمل الآن على تحليل معدلك (${parsedGpa}%)، ثوانٍ وسنعرض لك الكليات التي تناسب طموحك` 
                                            : `Analyzing your GPA (${parsedGpa}%)... will display matching faculties shortly`)
                                        : (isAr 
                                            ? 'فحص الاستحقاق والمطابقة الأكاديمية الفورية' 
                                            : 'Instant GPA Screening & Academic Matching')}
                                    </h4>

                                    {isScanning && (
                                      <span className="font-mono text-xs font-black text-primary bg-sky-500/15 border border-sky-400/30 px-2.5 py-0.5 rounded-full shrink-0 flex items-center gap-1.5 shadow-2xs">
                                        <svg className="w-3 h-3 text-primary animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                        </svg>
                                        <span>{countdown} {isAr ? 'ثوانٍ' : 's'}</span>
                                      </span>
                                    )}

                                    {hasCompletedScan && (
                                      <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-black text-emerald-700 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/25 shrink-0">
                                        <span>✓ استحقاق مؤكد</span>
                                      </span>
                                    )}
                                  </div>

                                  <p className="text-[11px] sm:text-xs text-primary-dark/75 font-semibold mt-0.5 truncate">
                                    {hasCompletedScan
                                      ? (isAr 
                                          ? `تمت مطابقة ${eligibleFaculties.length} كليات و ${eligibleMajorsList.length} برنامجاً وتخصصاً أكاديمياً تناسب معدلك` 
                                          : `Matched ${eligibleFaculties.length} faculties and ${eligibleMajorsList.length} accredited majors for your score`)
                                      : isScanning
                                      ? (isAr 
                                          ? 'جاري فحص معايير مجلس الاعتماد الأكاديمي والحدود الدنيا لكليات جامعة العلوم والتكنولوجيا' 
                                          : 'Verifying minimum admission thresholds across UST colleges')
                                      : (isAr 
                                          ? 'أدخل معدل الثانوية لنكشف لك فوراً عن قائمة التخصصات المتاحة لك' 
                                          : 'Enter your high school GPA to reveal all eligible programs')}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 2: Academic Choice Driven by GPA */}
                  {currentStep === 2 && (
                    <div className="space-y-1.5 sm:space-y-2">
                      
                      {/* GPA Summary Bar */}
                      <div className="bg-white/25 backdrop-blur-md py-1.5 px-3 sm:px-3.5 rounded-full border border-white/30 flex flex-col sm:flex-row items-center justify-between gap-1 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5.5 h-5.5 rounded-full bg-primary text-white flex items-center justify-center font-black text-[10px] shadow-xs">
                            {parsedGpa}%
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-primary-dark/60 leading-none">{isAr ? 'المعدل المعتمد للفحص' : 'Applicant GPA'}</div>
                            <div className="text-[11px] font-extrabold text-primary leading-tight">
                              {isAr ? `مؤهل لـ ${eligibleMajorsList.length} تخصصاً في كليات الجامعة` : `Eligible for ${eligibleMajorsList.length} majors`}
                            </div>
                          </div>
                        </div>

                        {/* Filter Toggle */}
                        <div className="flex items-center gap-1 bg-white/30 backdrop-blur-md p-0.5 rounded-full border border-white/30 shadow-xs">
                          <button
                            type="button"
                            onClick={() => setShowOnlyEligible(true)}
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                              showOnlyEligible 
                                ? 'bg-primary text-white shadow-xs' 
                                : 'text-primary-dark/70 hover:text-primary'
                            }`}
                          >
                            {isAr ? 'المتاحة لمعدلي فقط' : 'Eligible only'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowOnlyEligible(false)}
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                              !showOnlyEligible 
                                ? 'bg-primary text-white shadow-xs' 
                                : 'text-primary-dark/70 hover:text-primary'
                            }`}
                          >
                            {isAr ? 'عرض الكل' : 'View all'}
                          </button>
                        </div>
                      </div>

                      {/* Faculty Selector Pills */}
                      <div>
                        <label className="block text-[10.5px] sm:text-[11px] font-bold text-primary-dark mb-0.5 px-1">
                          {isAr ? '1. اختر الكلية:' : '1. Select Faculty:'}
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 p-0.5">
                          {facultiesData.map(faculty => {
                            const isSelected = formData.facultyId === faculty.id;
                            const eligibleCount = faculty.majors.filter(m => parsedGpa >= (m.minGpa || 50)).length;
                            const hasEligible = eligibleCount > 0;

                            return (
                              <button
                                key={faculty.id}
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, facultyId: faculty.id, majorId: '' }));
                                }}
                                className={`p-1 px-2.5 rounded-full border text-right transition-all flex items-center justify-between gap-1 cursor-pointer h-7 ${
                                  isSelected 
                                    ? 'bg-primary text-white border-primary shadow-xs' 
                                    : hasEligible
                                    ? 'bg-white/25 hover:bg-white/40 backdrop-blur-md border border-white/30 hover:border-primary/50 text-primary-dark shadow-xs'
                                    : 'bg-white/10 backdrop-blur-sm border-dashed border-white/20 text-gray-400'
                                }`}
                                dir={isAr ? 'rtl' : 'ltr'}
                              >
                                <span className="font-extrabold text-[10.5px] sm:text-[11px] truncate">
                                  {isAr ? faculty.name : (faculty.nameEn || faculty.name)}
                                </span>
                                <span className={`text-[9px] font-black px-1.5 py-0.2 rounded-full shrink-0 ${
                                  isSelected 
                                    ? 'bg-white/20 text-white'
                                    : hasEligible 
                                    ? 'bg-primary/10 text-primary border border-primary/20' 
                                    : 'bg-gray-200 text-gray-500'
                                }`}>
                                  {eligibleCount}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Majors List Inside Selected Faculty */}
                      {formData.facultyId ? (
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <label className="block text-[10.5px] sm:text-[11px] font-bold text-primary-dark">
                              {isAr ? '2. اختر التخصص المطلوب لمعدلك:' : '2. Select Major for your GPA:'}
                            </label>
                            
                            {/* Search inside majors */}
                            <div className="relative w-36 sm:w-44">
                              <Search className="w-2.5 h-2.5 absolute right-2 top-1/2 -translate-y-1/2 text-primary-dark/40 rtl:right-2 rtl:left-auto ltr:left-2 ltr:right-auto" />
                              <input 
                                type="text" 
                                placeholder={isAr ? 'بحث سريع عن تخصص...' : 'Search major...'}
                                value={searchMajorQuery}
                                onChange={(e) => setSearchMajorQuery(e.target.value)}
                                className="w-full bg-white/30 backdrop-blur-md border border-white/30 rounded-full py-0.5 px-5 text-[10.5px] font-semibold text-primary-dark placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary/20 h-6"
                              />
                            </div>
                          </div>

                          {currentFacultyMajors.length === 0 ? (
                            <div className="bg-sky-500/10 backdrop-blur-md border border-sky-400/30 p-2 rounded-xl text-center shadow-xs">
                              <AlertCircle className="w-3.5 h-3.5 text-primary mx-auto mb-0.5" />
                              <h5 className="font-bold text-primary-dark text-xs mb-0.5">
                                {isAr ? 'لا توجد تخصصات متاحة بهذا المعدل في هذه الكلية' : 'No majors available for this GPA in this faculty'}
                              </h5>
                              <p className="text-[10px] text-primary-dark/80 mb-0.5">
                                {isAr 
                                  ? `تتطلب تخصصات ${selectedFaculty?.name} معدلات أعلى من ${parsedGpa}%. يمكنك استعراض الكليات الأخرى المتاحة لك.`
                                  : 'Try selecting another faculty that matches your GPA.'}
                              </p>
                              <button
                                type="button"
                                onClick={() => setShowOnlyEligible(false)}
                                className="text-[11px] font-extrabold text-primary underline"
                              >
                                {isAr ? 'عرض متطلبات جميع تخصصات هذه الكلية' : 'View all major requirements'}
                              </button>
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-[115px] sm:max-h-[120px] overflow-y-auto custom-scrollbar p-0.5">
                              {currentFacultyMajors.map(major => {
                                const isEligible = parsedGpa >= (major.minGpa || 50);
                                const isSelected = formData.majorId === major.id;

                                return (
                                  <div
                                    key={major.id}
                                    onClick={() => {
                                      if (isEligible) {
                                        setFormData(prev => ({ ...prev, majorId: major.id }));
                                      }
                                    }}
                                    className={`p-1.5 px-2.5 rounded-xl border transition-all relative ${
                                      isSelected 
                                        ? 'bg-primary/10 border-2 border-primary ring-2 ring-primary/20 shadow-xs'
                                        : isEligible
                                        ? 'bg-white/25 hover:bg-white/40 backdrop-blur-md border border-white/30 hover:border-primary cursor-pointer shadow-xs'
                                        : 'bg-white/10 backdrop-blur-sm border-white/20 opacity-60 cursor-not-allowed'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between gap-1 mb-0.5">
                                      <h5 className={`font-extrabold text-[11px] sm:text-xs truncate ${
                                        isSelected ? 'text-primary' : isEligible ? 'text-primary-dark' : 'text-gray-500'
                                      }`}>
                                        {isAr ? major.name : (major.nameEn || major.name)}
                                      </h5>
                                      {isSelected && (
                                        <div className="w-3.5 h-3.5 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                          <Check className="w-2.5 h-2.5" />
                                        </div>
                                      )}
                                    </div>

                                    {/* GPA Requirement & Eligibility in ONE Clean Compact Row */}
                                    <div className="flex items-center justify-between text-[10px] pt-0.5 border-t border-black/5">
                                      <div className="flex items-center gap-1 font-bold text-primary-dark/70">
                                        <span>{isAr ? 'الحد الأدنى:' : 'Min:'}</span>
                                        <span className={`font-black px-1.5 py-0.2 rounded-full ${
                                          isEligible 
                                            ? 'bg-primary/10 text-primary border border-primary/20' 
                                            : 'bg-red-50 text-red-700 border border-red-200'
                                        }`}>
                                          {isAr ? (major.gpaRequirement || `${major.minGpa}%`) : (major.gpaRequirementEn || `${major.minGpa}%`)}
                                        </span>
                                      </div>

                                      {/* Eligibility Indicator */}
                                      <div className="font-bold">
                                        {isEligible ? (
                                          <span className="text-primary flex items-center gap-0.5">
                                            <CheckCircle2 className="w-2.5 h-2.5" />
                                            {isAr ? 'مؤهل' : 'Eligible'}
                                          </span>
                                        ) : (
                                          <span className="text-red-500 flex items-center gap-0.5">
                                            <AlertCircle className="w-2.5 h-2.5" />
                                            {isAr ? `${major.minGpa}%` : `Req ${major.minGpa}%`}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="p-2 bg-primary/5 rounded-2xl border border-primary/10 text-center font-semibold text-primary-dark/70 text-xs">
                          {isAr ? 'يرجى اختيار الكلية أولاً لعرض التخصصات المتاحة لمعدلك' : 'Please select a faculty first'}
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 3: Final Review */}
                  {currentStep === 3 && (
                    <div className="space-y-2.5">
                      <div className="bg-white/25 backdrop-blur-md p-3 sm:p-3.5 rounded-3xl border border-white/30 relative overflow-hidden shadow-lg">
                        <div className={`absolute top-0 ${isAr ? 'right-0' : 'left-0'} w-1.5 h-full bg-primary rounded-r-full`}></div>
                        <h3 className="text-xs sm:text-sm font-bold text-primary mb-1.5 border-b border-primary/10 pb-1">
                          {t('confirmTitle')}
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs">
                          <div>
                            <span className="block text-[10px] text-primary-dark/60 font-bold">{t('fullName')}:</span>
                            <span className="font-bold text-primary-dark text-xs sm:text-sm">{formData.fullName}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] text-primary-dark/60 font-bold">{t('phone')}:</span>
                            <span className="font-bold text-primary-dark text-xs sm:text-sm" dir="ltr">{formData.phone}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] text-primary-dark/60 font-bold">{isAr ? 'المعدل والتقييم' : 'GPA'}:</span>
                            <span className="font-black text-primary text-xs sm:text-sm flex items-center gap-1.5">
                              {formData.gpa}%
                              <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] px-2 py-0.2 rounded-full font-bold">
                                {isAr ? 'مستوفي للشروط ✓' : 'Eligible ✓'}
                              </span>
                            </span>
                          </div>
                          <div>
                            <span className="block text-[10px] text-primary-dark/60 font-bold">{isAr ? 'الكلية' : 'Faculty'}:</span>
                            <span className="font-bold text-primary-dark text-xs sm:text-sm">
                              {isAr ? selectedFaculty?.name : (selectedFaculty?.nameEn || selectedFaculty?.name)}
                            </span>
                          </div>

                          <div className="sm:col-span-2 pt-1.5 border-t border-primary/10">
                            <span className="block text-[10px] text-primary-dark/60 font-bold mb-1">
                              {isAr ? 'التخصص الأكاديمي المختار:' : 'Selected Major:'}
                            </span>
                            <div className="bg-white/30 backdrop-blur-md p-2 sm:p-2.5 px-3.5 rounded-2xl sm:rounded-full border border-white/30 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shadow-sm">
                              <div>
                                <h4 className="text-xs sm:text-sm font-black text-primary">
                                  {isAr ? selectedMajor?.name : (selectedMajor?.nameEn || selectedMajor?.name)}
                                </h4>
                                <span className="text-[11px] font-semibold text-primary-dark/60">
                                  {isAr ? selectedMajor?.degree : (selectedMajor?.degreeEn || selectedMajor?.degree)} • {isAr ? selectedMajor?.studyDuration : (selectedMajor?.studyDurationEn || selectedMajor?.studyDuration)}
                                </span>
                              </div>
                              <div className="bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full text-[11px] font-black self-start sm:self-auto">
                                {isAr ? 'معدل القبول: ' : 'Min: '} {isAr ? (selectedMajor?.gpaRequirement || `${selectedMajor?.minGpa}%`) : (selectedMajor?.gpaRequirementEn || `${selectedMajor?.minGpa}%`)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/25 backdrop-blur-md text-primary-dark p-2 sm:p-2.5 px-3.5 sm:px-4 rounded-full flex items-center gap-2 border border-white/30 shadow-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <p className="text-[11px] sm:text-xs font-semibold leading-tight">
                          {isAr 
                            ? 'أقر بأن جميع البيانات المدخلة ومعدل الثانوية العامة صحيحة ومطابقة للوثائق الرسمية، وأوافق على شروط ولوائح القبول بجامعة العلوم والتكنولوجيا.' 
                            : 'I certify that all entered information is accurate and matches my official high school records.'}
                        </p>
                      </div>
                    </div>
                  )}

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Form Actions Footer */}
          {!isSubmitted && (
            <div className={`px-4 sm:px-6 py-2.5 bg-white/20 backdrop-blur-md border-t border-white/30 flex justify-between items-center ${lang === 'en' ? 'flex-row-reverse' : ''}`}>
              <button 
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`flex items-center gap-1 font-bold py-1.5 px-4 rounded-full text-xs sm:text-[13px] transition-all cursor-pointer ${
                  currentStep === 1 
                    ? 'text-gray-400 cursor-not-allowed opacity-0 pointer-events-none' 
                    : 'text-primary-dark hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                {isAr ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
                {t('prev')}
              </button>

              {currentStep < 3 ? (
                <button 
                  onClick={handleNext}
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-1.5 sm:py-2 px-6 rounded-full text-xs sm:text-[13px] transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 cursor-pointer"
                  disabled={
                    isScanning ||
                    (currentStep === 1 && (!formData.fullName || !formData.phone || !formData.gpa || parsedGpa < 50 || parsedGpa > 100)) ||
                    (currentStep === 2 && (!formData.facultyId || !formData.majorId))
                  }
                >
                  <span>{t('next')}</span>
                  {isAr ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                </button>
              ) : (
                <button 
                  onClick={handleSubmit}
                  className="bg-primary hover:bg-primary-dark text-white font-extrabold py-1.5 sm:py-2 px-6 rounded-full text-xs sm:text-[13px] transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
                >
                  <span>{t('submitBtn')}</span>
                  <CheckCircle className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

