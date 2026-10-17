import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ChevronLeft, ChevronRight, User, BookOpen, 
  FileCheck, Check, Sparkles, AlertCircle, CheckCircle2, 
  GraduationCap, Search, Award, ShieldAlert
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
    <div className="relative min-h-screen bg-slate-white pt-32 pb-16 lg:pt-36 px-4 sm:px-6 lg:px-8 overflow-x-hidden font-sans">
      {/* University Themed Architectural Background (نفس خلفية صفحة الكليات الزجاجية) */}
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
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs sm:text-sm font-bold mb-3">
            <Sparkles className="w-4 h-4 text-accent" />
            {isAr ? 'جامعة العلوم والتكنولوجيا - المركز الرئيسي صنعاء' : 'UST - Main Campus Sana\'a'}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
            {t('admissionPortal')}
          </h1>
          <p className="text-primary-dark/80 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {isAr 
              ? 'تضم جامعة العلوم والتكنولوجيا مجموعة من الكليات والتخصصات المعتمدة، مع اختلاف معدلات القبول بحسب كل تخصص. أدخل معدلك لتظهر لك التخصصات المؤهل لها فوراً.'
              : 'Enter your High School GPA to immediately discover and apply for the academic specializations you are eligible for.'}
          </p>
        </div>

        {/* Form Container */}
        <div className="relative bg-white/90 backdrop-blur-2xl border border-white/80 rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden">
          {/* Stepper Header */}
          <div className="bg-primary/[0.03] px-4 sm:px-8 py-7 border-b border-slate-200/70 overflow-x-auto custom-scrollbar">
            <div className="flex justify-between items-center relative min-w-[320px] max-w-2xl mx-auto">
              {/* Line background */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-primary/10 -z-10 rounded-full"></div>
              {/* Active line */}
              <div 
                className={`absolute ${isAr ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 h-1 bg-accent transition-all duration-500 -z-10 rounded-full`}
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              ></div>

              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;

                return (
                  <div key={step.id} className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white transition-all duration-300 shadow-sm ${
                      isActive ? 'bg-accent text-white scale-110 shadow-lg shadow-accent/40 ring-2 ring-accent/30' 
                      : isCompleted ? 'bg-primary text-white shadow-md' 
                      : 'bg-white text-gray-400 border border-primary/20'
                    }`}>
                      {isCompleted ? <Check className="w-6 h-6" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <span className={`mt-2.5 text-xs sm:text-sm font-bold whitespace-nowrap ${
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
          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-primary mb-3">{t('successTitle')}</h2>
                  
                  <div className="bg-white border border-border-light rounded-2xl p-6 max-w-lg mx-auto mb-8 shadow-sm text-right" dir={isAr ? 'rtl' : 'ltr'}>
                    <div className="flex items-center justify-between pb-3 border-b border-border-light mb-3">
                      <span className="text-sm font-bold text-primary-dark/60">{isAr ? 'رقم الطلب' : 'Application No'}:</span>
                      <strong className="text-secondary bg-secondary/10 px-3 py-1 rounded-lg text-base">#UST-2026-98347</strong>
                    </div>
                    <div className="space-y-2 text-sm font-semibold text-primary-dark/80">
                      <div><span className="text-primary-dark/50">{isAr ? 'اسم الطالب' : 'Student Name'}:</span> {formData.fullName}</div>
                      <div><span className="text-primary-dark/50">{isAr ? 'المعدل' : 'GPA'}:</span> <span className="font-bold text-primary">{formData.gpa}%</span></div>
                      <div><span className="text-primary-dark/50">{isAr ? 'الكلية' : 'Faculty'}:</span> {isAr ? selectedFaculty?.name : selectedFaculty?.id}</div>
                      <div><span className="text-primary-dark/50">{isAr ? 'التخصص المختار' : 'Major'}:</span> <span className="font-extrabold text-secondary">{isAr ? selectedMajor?.name : selectedMajor?.id}</span></div>
                    </div>
                  </div>

                  <p className="text-primary-dark/70 mb-8 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                    {isAr 
                      ? 'تم تسجيل طلبك المبدئي بنجاح لدى عمادة القبول والتسجيل. سيتم التواصل معك عبر الهاتف لاستكمال تسليم الوثائق المطلوبة.'
                      : 'Your preliminary application has been received. Our admission staff will contact you shortly to complete the enrollment process.'}
                  </p>
                  
                  <button 
                    onClick={resetForm}
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg"
                  >
                    {t('newAppBtn')}
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: isAr ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isAr ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                >
                  
                  {/* STEP 1: Personal Info & GPA Entry with Instant Analysis */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-primary-dark mb-2">
                          {t('fullName')} <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder={isAr ? 'أدخل اسمك الرباعي كما في استمارة الثانوية' : 'Enter your full name'}
                          className="w-full px-5 py-3.5 rounded-xl border border-primary/20 hover:border-primary/40 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm font-semibold"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-primary-dark mb-2">
                            {t('phone')} <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={isAr ? 'مثال: 77XXXXXXX' : 'e.g. +967 77XXXXXXX'}
                            className={`w-full px-5 py-3.5 rounded-xl border border-primary/20 hover:border-primary/40 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm font-semibold ${isAr ? 'text-left' : ''}`}
                            dir="ltr"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-primary-dark mb-2">
                            {isAr ? 'معدل الثانوية العامة (%)' : 'High School GPA (%)'} <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <input 
                              type="number" 
                              name="gpa"
                              value={formData.gpa}
                              onChange={handleChange}
                              placeholder={isAr ? 'أدخل معدلك (مثلاً: 82)' : 'Enter GPA (e.g. 82)'}
                              min="50" max="100" step="0.01"
                              className="w-full px-5 py-3.5 rounded-xl border-2 border-primary/25 hover:border-primary/50 bg-white focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all shadow-sm font-bold text-lg text-primary"
                            />
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-primary-dark/40 rtl:left-4 rtl:right-auto ltr:right-4 ltr:left-auto">
                              %
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Live GPA Eligibility Card */}
                      {parsedGpa > 0 && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`p-5 rounded-2xl border transition-all ${
                            parsedGpa >= 80 
                              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                              : parsedGpa >= 65 
                              ? 'bg-blue-50/80 border-blue-200 text-blue-950'
                              : parsedGpa >= 50 
                              ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                              : 'bg-red-50/80 border-red-200 text-red-950'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            {parsedGpa >= 50 ? (
                              <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                            ) : (
                              <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                            )}
                            <div className="w-full">
                              <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                                <h4 className="font-extrabold text-base">
                                  {parsedGpa >= 50 
                                    ? (isAr ? `نتيجة فحص المعدل: ${parsedGpa}%` : `GPA Evaluation: ${parsedGpa}%`)
                                    : (isAr ? 'المعدل أقل من الحد الأدنى للقبول (50%)' : 'GPA is below minimum requirement (50%)')
                                  }
                                </h4>
                                {parsedGpa >= 50 && (
                                  <span className="bg-white/80 px-3 py-1 rounded-full text-xs font-black shadow-sm">
                                    {isAr ? `${eligibleMajorsList.length} تخصصاً متاحاً لك` : `${eligibleMajorsList.length} majors available`}
                                  </span>
                                )}
                              </div>

                              {parsedGpa >= 50 ? (
                                <div>
                                  <p className="text-sm font-semibold opacity-90 mb-3">
                                    {isAr 
                                      ? `معدلك يؤهلك للالتحاق بـ ${eligibleMajorsList.length} تخصصاً في ${eligibleFaculties.length} كليات مختلفة. انقر على "التالي" لاختيار التخصص المناسب لمعدلك.`
                                      : `Your GPA qualifies you for ${eligibleMajorsList.length} specializations in ${eligibleFaculties.length} faculties.`}
                                  </p>
                                  {/* Quick Preview of Eligible Faculties */}
                                  <div className="flex flex-wrap gap-1.5">
                                    {eligibleFaculties.map(f => (
                                      <span key={f.id} className="bg-white/90 text-primary-dark text-xs font-bold px-2.5 py-1 rounded-lg border border-black/5 shadow-2xs">
                                        {isAr ? f.name : f.id}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <p className="text-xs sm:text-sm font-semibold opacity-90">
                                  {isAr 
                                    ? 'الحد الأدنى للقبول في برامج وكليات جامعة العلوم والتكنولوجيا هو 50% للثانوية العامة.'
                                    : 'Minimum admission requirement across university programs is 50%.'}
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* STEP 2: Academic Choice Driven by GPA */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      
                      {/* GPA Summary Bar */}
                      <div className="bg-primary/5 p-4 rounded-2xl border-2 border-primary/15 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center font-black text-sm shadow-xs">
                            {parsedGpa}%
                          </div>
                          <div>
                            <div className="text-xs font-bold text-primary-dark/60">{isAr ? 'المعدل المعتمد للفحص' : 'Applicant GPA'}</div>
                            <div className="text-sm font-extrabold text-primary">
                              {isAr ? `مؤهل لـ ${eligibleMajorsList.length} تخصصاً في الجامعة` : `Eligible for ${eligibleMajorsList.length} majors`}
                            </div>
                          </div>
                        </div>

                        {/* Filter Toggle */}
                        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-primary/20 shadow-xs">
                          <button
                            type="button"
                            onClick={() => setShowOnlyEligible(true)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                              showOnlyEligible 
                                ? 'bg-secondary text-white shadow-xs' 
                                : 'text-primary-dark/70 hover:text-primary'
                            }`}
                          >
                            {isAr ? 'المتاحة لمعدلي فقط' : 'Eligible only'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowOnlyEligible(false)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
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
                        <label className="block text-sm font-bold text-primary-dark mb-2.5">
                          {isAr ? '1. اختر الكلية:' : '1. Select Faculty:'}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto custom-scrollbar p-1">
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
                                className={`p-3 rounded-xl border text-right transition-all flex items-center justify-between ${
                                  isSelected 
                                    ? 'bg-primary text-white border-primary shadow-md'
                                    : hasEligible
                                    ? 'bg-white hover:bg-slate-50 border-primary/20 hover:border-primary/50 text-primary-dark shadow-xs'
                                    : 'bg-gray-50/70 border-dashed border-gray-200 text-gray-400'
                                }`}
                                dir={isAr ? 'rtl' : 'ltr'}
                              >
                                <span className="font-extrabold text-xs sm:text-sm truncate">
                                  {isAr ? faculty.name : faculty.id}
                                </span>
                                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full shrink-0 ${
                                  isSelected 
                                    ? 'bg-white/20 text-white'
                                    : hasEligible 
                                    ? 'bg-emerald-100 text-emerald-800' 
                                    : 'bg-gray-200 text-gray-500'
                                }`}>
                                  {eligibleCount} {isAr ? 'متاح' : 'eligible'}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Majors List Inside Selected Faculty */}
                      {formData.facultyId ? (
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                            <label className="block text-sm font-bold text-primary-dark">
                              {isAr ? '2. اختر التخصص المطلوب لمعدلك:' : '2. Select Major for your GPA:'}
                            </label>
                            
                            {/* Search inside majors */}
                            <div className="relative w-full sm:w-56">
                              <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-primary-dark/40 rtl:right-3 rtl:left-auto ltr:left-3 ltr:right-auto" />
                              <input 
                                type="text"
                                placeholder={isAr ? 'بحث سريع عن تخصص...' : 'Search major...'}
                                value={searchMajorQuery}
                                onChange={(e) => setSearchMajorQuery(e.target.value)}
                                className="w-full bg-white border border-primary/20 rounded-lg py-1.5 px-8 text-xs font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                              />
                            </div>
                          </div>

                          {currentFacultyMajors.length === 0 ? (
                            <div className="bg-amber-50/80 border border-amber-200 p-6 rounded-2xl text-center">
                              <AlertCircle className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                              <h5 className="font-bold text-amber-900 text-sm mb-1">
                                {isAr ? 'لا توجد تخصصات متاحة بهذا المعدل في هذه الكلية' : 'No majors available for this GPA in this faculty'}
                              </h5>
                              <p className="text-xs text-amber-800/80 mb-3">
                                {isAr 
                                  ? `تتطلب تخصصات ${selectedFaculty?.name} معدلات أعلى من ${parsedGpa}%. يمكنك استعراض الكليات الأخرى المتاحة لك.`
                                  : 'Try selecting another faculty that matches your GPA.'}
                              </p>
                              <button
                                type="button"
                                onClick={() => setShowOnlyEligible(false)}
                                className="text-xs font-extrabold text-primary underline"
                              >
                                {isAr ? 'عرض متطلبات جميع تخصصات هذه الكلية' : 'View all major requirements'}
                              </button>
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto custom-scrollbar p-1">
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
                                    className={`p-4 rounded-2xl border transition-all relative ${
                                      isSelected 
                                        ? 'bg-secondary/10 border-2 border-secondary ring-2 ring-secondary/30 shadow-md'
                                        : isEligible
                                        ? 'bg-white hover:bg-slate-50 border border-primary/20 hover:border-secondary cursor-pointer shadow-xs'
                                        : 'bg-gray-50/80 border-gray-200 opacity-60 cursor-not-allowed'
                                    }`}
                                  >
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                      <h5 className={`font-extrabold text-sm sm:text-base leading-snug ${
                                        isSelected ? 'text-secondary' : isEligible ? 'text-primary' : 'text-gray-500'
                                      }`}>
                                        {isAr ? major.name : major.id}
                                      </h5>
                                      {isSelected && (
                                        <div className="w-5 h-5 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                                          <Check className="w-3.5 h-3.5" />
                                        </div>
                                      )}
                                    </div>

                                    {/* GPA Requirement Badge */}
                                    <div className="flex items-center justify-between text-xs pt-2 border-t border-black/5">
                                      <span className="font-bold text-primary-dark/60">
                                        {isAr ? 'معدل القبول المطلوب:' : 'Min GPA:'}
                                      </span>
                                      <span className={`font-black px-2 py-0.5 rounded-md ${
                                        isEligible 
                                          ? 'bg-emerald-100 text-emerald-800' 
                                          : 'bg-red-100 text-red-800'
                                      }`}>
                                        {major.gpaRequirement || `${major.minGpa}%`}
                                      </span>
                                    </div>

                                    {/* Eligibility Indicator */}
                                    <div className="mt-2 text-[11px] font-bold">
                                      {isEligible ? (
                                        <span className="text-secondary flex items-center gap-1">
                                          <CheckCircle2 className="w-3.5 h-3.5" />
                                          {isAr ? 'مؤهل للقبول بمعدلك الحالي' : 'Eligible for your GPA'}
                                        </span>
                                      ) : (
                                        <span className="text-red-500 flex items-center gap-1">
                                          <AlertCircle className="w-3.5 h-3.5" />
                                          {isAr ? `يتطلب معدل ${major.minGpa}% (معدلك: ${parsedGpa}%)` : `Requires ${major.minGpa}%`}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 text-center font-semibold text-primary-dark/70 text-sm">
                          {isAr ? 'يرجى اختيار الكلية أولاً لعرض التخصصات المتاحة لمعدلك' : 'Please select a faculty first'}
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 3: Final Review */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/20 relative overflow-hidden shadow-xs">
                        <div className={`absolute top-0 ${isAr ? 'right-0' : 'left-0'} w-2 h-full bg-accent`}></div>
                        <h3 className="text-xl font-bold text-primary mb-6 border-b border-primary/10 pb-4">
                          {t('confirmTitle')}
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
                          <div>
                            <span className="block text-xs text-primary-dark/60 font-bold mb-1">{t('fullName')}:</span>
                            <span className="font-bold text-primary-dark text-base sm:text-lg">{formData.fullName}</span>
                          </div>
                          <div>
                            <span className="block text-xs text-primary-dark/60 font-bold mb-1">{t('phone')}:</span>
                            <span className="font-bold text-primary-dark text-base sm:text-lg" dir="ltr">{formData.phone}</span>
                          </div>
                          <div>
                            <span className="block text-xs text-primary-dark/60 font-bold mb-1">{isAr ? 'المعدل والتقييم' : 'GPA'}:</span>
                            <span className="font-black text-secondary text-lg flex items-center gap-2">
                              {formData.gpa}%
                              <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full font-bold">
                                {isAr ? 'مستوفي شروط القبول ✓' : 'Eligible ✓'}
                              </span>
                            </span>
                          </div>
                          <div>
                            <span className="block text-xs text-primary-dark/60 font-bold mb-1">{isAr ? 'الكلية' : 'Faculty'}:</span>
                            <span className="font-bold text-primary-dark text-base sm:text-lg">
                              {isAr ? selectedFaculty?.name : selectedFaculty?.id}
                            </span>
                          </div>

                          <div className="sm:col-span-2 pt-4 border-t border-primary/10">
                            <span className="block text-xs text-primary-dark/60 font-bold mb-1">
                              {isAr ? 'التخصص الأكاديمي المختار:' : 'Selected Major:'}
                            </span>
                            <div className="bg-white p-4 rounded-xl border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                              <div>
                                <h4 className="text-lg font-black text-primary">
                                  {isAr ? selectedMajor?.name : selectedMajor?.id}
                                </h4>
                                <span className="text-xs font-semibold text-primary-dark/60">
                                  {selectedMajor?.degree} • {selectedMajor?.studyDuration}
                                </span>
                              </div>
                              <div className="bg-accent/15 text-accent-dark px-3 py-1 rounded-lg text-xs font-black self-start sm:self-auto">
                                {isAr ? 'معدل القبول: ' : 'Min: '} {selectedMajor?.gpaRequirement}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-accent/10 text-primary-dark p-4 rounded-xl flex items-start gap-3 border-2 border-accent/30 shadow-xs">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm font-semibold leading-relaxed">
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
            <div className={`px-6 sm:px-10 py-5 bg-slate-50/90 border-t border-slate-200/70 flex justify-between items-center ${lang === 'en' ? 'flex-row-reverse' : ''}`}>
              <button 
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 font-bold py-2.5 px-5 rounded-xl transition-all ${
                  currentStep === 1 
                    ? 'text-gray-400 cursor-not-allowed opacity-0 pointer-events-none' 
                    : 'text-primary-dark hover:bg-gray-200'
                }`}
              >
                {isAr ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                {t('prev')}
              </button>

              {currentStep < 3 ? (
                <button 
                  onClick={handleNext}
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                  disabled={
                    (currentStep === 1 && (!formData.fullName || !formData.phone || !formData.gpa || parsedGpa < 50 || parsedGpa > 100)) ||
                    (currentStep === 2 && (!formData.facultyId || !formData.majorId))
                  }
                >
                  <span>{t('next')}</span>
                  {isAr ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              ) : (
                <button 
                  onClick={handleSubmit}
                  className="bg-accent hover:bg-yellow-500 text-primary font-extrabold py-3 px-8 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg group active:scale-95"
                >
                  <span>{t('submitBtn')}</span>
                  <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
