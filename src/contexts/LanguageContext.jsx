import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  ar: {
    // Navbar
    home: "الرئيسية",
    faculties: "الكليات",
    admission: "القبول والتسجيل",
    studentPortal: "بوابة الطالب",
    studentLogin: "تسجيل دخول الطالب",
    universityName: "جامعة العلوم والتكنولوجيا",
    
    // Home
    openAdmission: "باب القبول والتسجيل مفتوح الآن للفصل الدراسي القادم",
    heroTitle1: "ابنِ مستقبلك الأكاديمي",
    heroTitle2: "الرقمي والمهني معنا",
    heroDesc: "جامعة العلوم والتكنولوجيا تقدم بيئة تعليمية ذكية، برامج أكاديمية متطورة، وفرصاً لا حصر لها لاكتشاف شغفك وتحقيق طموحاتك المهنية.",
    startAdmission: "ابدأ طلب القبول",
    exploreFaculties: "استكشف التخصصات",
    statTitle: "أرقام وحقائق",
    stat1: "كلية معتمدة",
    stat2: "برنامج أكاديمي",
    stat3: "طالب وطالبة",
    stat4: "شراكة دولية",

    // Faculties
    facultiesTitle: "الكليات والتخصصات",
    facultiesSubtitle: "اكتشف برامجنا الأكاديمية المتميزة واختر مسارك نحو المستقبل",
    searchPlaceholder: "ابحث عن كلية أو تخصص...",
    noResults: "لم يتم العثور على نتائج تطابق بحثك.",
    majorsLabel: "التخصصات الأكاديمية:",
    skillsLabel: "مهارات تكتسبها:",

    // Admission
    admissionPortal: "بوابة القبول والتسجيل",
    admissionDesc: "خطوات بسيطة تفصلك عن مستقبلك الجامعي المشرق",
    step1: "البيانات الشخصية",
    step2: "الرغبة الأكاديمية",
    step3: "المراجعة والتأكيد",
    fullName: "الاسم الرباعي",
    namePlaceholder: "أدخل اسمك الكامل",
    phone: "رقم الهاتف",
    phonePlaceholder: "مثال: 05X XXX XXXX",
    gpa: "معدل الثانوية العامة (%)",
    gpaPlaceholder: "مثال: 95.5",
    next: "التالي",
    prev: "السابق",
    selectFaculty: "اختر الكلية",
    chooseFacultyOption: "-- اختر الكلية أولاً --",
    selectMajor: "اختر التخصص",
    chooseMajorOption: "-- اختر التخصص --",
    chooseFacultyFirst: "-- يرجى اختيار الكلية أولاً --",
    confirmTitle: "مراجعة البيانات",
    confirmDesc: "يرجى التأكد من صحة بياناتك قبل الإرسال النهائي",
    submitBtn: "تأكيد وإرسال الطلب",
    successTitle: "تم تقديم طلبك بنجاح!",
    successDesc1: "شكراً لك، ",
    successDesc2: "رقم طلبك التجريبي هو: ",
    successDesc3: "يرجى الاحتفاظ بهذا الرقم لمتابعة حالة الطلب.",
    newAppBtn: "تقديم طلب جديد",
    errorEmpty: "يرجى تعبئة جميع الحقول المطلوبة!",

    // Login
    loginSubtitle: "تسجيل الدخول للنظام الأكاديمي",
    studentId: "الرقم الجامعي",
    studentIdPlaceholder: "مثال: 20260001",
    password: "كلمة المرور",
    loginBtn: "تسجيل الدخول",
    backHome: "العودة للصفحة الرئيسية",
    loginError: "يرجى إدخال الرقم الجامعي وكلمة المرور",

    // Student Layout
    menuHome: "الرئيسية",
    menuSchedule: "الجدول الدراسي",
    menuAcademic: "السجل الأكاديمي",
    logout: "تسجيل الخروج",
    welcome: "مرحباً، ",
    semesterLabel: "الفصل الدراسي الأول 2026",

    // Student Dashboard
    dashTitle: "ملخص الأداء الأكاديمي",
    dashSubtitle: "نظرة سريعة على إنجازاتك وجدولك لليوم",
    gpaStat: "المعدل التراكمي",
    completedHours: "الساعات المنجزة",
    outOf: "من",
    academicStatus: "الحالة الأكاديمية",
    financialStatus: "الحالة المالية",
    todaySchedule: "جدول محاضرات اليوم",
    classesCount: "محاضرات مجدولة لهذا اليوم.",
    courseTitle: "المقرر الدراسي",
    time: "الوقت",
    hall: "القاعة",
    instructor: "مدرس المقرر",
    
    // Academic Record
    recordTitle: "السجل الأكاديمي",
    recordSubtitle: "استعرض درجاتك وتفاصيل الفصول الدراسية السابقة",
    semesterGpa: "المعدل الفصلي",
    cumGpa: "المعدل التراكمي",
    courseCode: "رمز المقرر",
    hours: "الساعات",
    score: "الدرجة",
    grade: "التقدير",

    // Schedule
    scheduleTitle: "الجدول الدراسي الأسبوعي",
    noClasses: "يوم راحة، لا توجد محاضرات!",
    lectures: "محاضرات"
  },
  en: {
    // Navbar
    home: "Home",
    faculties: "Faculties",
    admission: "Admission",
    studentPortal: "Student Portal",
    studentLogin: "Student Login",
    universityName: "UST University",
    
    // Home
    openAdmission: "Admission and registration are open for the next semester",
    heroTitle1: "Build Your Academic",
    heroTitle2: "Digital & Professional Future With Us",
    heroDesc: "University of Science & Technology offers a smart learning environment, advanced academic programs, and endless opportunities to discover your passion and achieve your career goals.",
    startAdmission: "Apply Now",
    exploreFaculties: "Explore Faculties",
    statTitle: "Facts & Figures",
    stat1: "Accredited Colleges",
    stat2: "Academic Programs",
    stat3: "Students",
    stat4: "Global Partnerships",

    // Faculties
    facultiesTitle: "Faculties & Majors",
    facultiesSubtitle: "Discover our distinguished academic programs and choose your path",
    searchPlaceholder: "Search for a faculty or major...",
    noResults: "No results found matching your search.",
    majorsLabel: "Academic Majors:",
    skillsLabel: "Skills you acquire:",

    // Admission
    admissionPortal: "Admission Portal",
    admissionDesc: "Simple steps separating you from your bright university future",
    step1: "Personal Info",
    step2: "Academic Choice",
    step3: "Review & Confirm",
    fullName: "Full Name",
    namePlaceholder: "Enter your full name",
    phone: "Phone Number",
    phonePlaceholder: "Ex: 05X XXX XXXX",
    gpa: "High School GPA (%)",
    gpaPlaceholder: "Ex: 95.5",
    next: "Next",
    prev: "Previous",
    selectFaculty: "Select Faculty",
    chooseFacultyOption: "-- Select Faculty First --",
    selectMajor: "Select Major",
    chooseMajorOption: "-- Select Major --",
    chooseFacultyFirst: "-- Please select a faculty first --",
    confirmTitle: "Review Data",
    confirmDesc: "Please ensure your data is correct before final submission",
    submitBtn: "Confirm & Submit",
    successTitle: "Application Submitted Successfully!",
    successDesc1: "Thank you, ",
    successDesc2: "Your trial application number is: ",
    successDesc3: "Please keep this number to track your application status.",
    newAppBtn: "Submit New Application",
    errorEmpty: "Please fill all required fields!",

    // Login
    loginSubtitle: "Login to Academic System",
    studentId: "University ID",
    studentIdPlaceholder: "Ex: 20260001",
    password: "Password",
    loginBtn: "Login",
    backHome: "Back to Home Page",
    loginError: "Please enter University ID and Password",

    // Student Layout
    menuHome: "Home",
    menuSchedule: "Schedule",
    menuAcademic: "Academic Record",
    logout: "Logout",
    welcome: "Welcome, ",
    semesterLabel: "First Semester 2026",

    // Student Dashboard
    dashTitle: "Academic Performance",
    dashSubtitle: "A quick glance at your achievements and today's schedule",
    gpaStat: "Cumulative GPA",
    completedHours: "Completed Hours",
    outOf: "out of",
    academicStatus: "Academic Status",
    financialStatus: "Financial Status",
    todaySchedule: "Today's Schedule",
    classesCount: "classes scheduled for today.",
    courseTitle: "Course",
    time: "Time",
    hall: "Hall",
    instructor: "Instructor",

    // Academic Record
    recordTitle: "Academic Record",
    recordSubtitle: "Review your grades and details of previous semesters",
    semesterGpa: "Semester GPA",
    cumGpa: "Cumulative GPA",
    courseCode: "Code",
    hours: "Hours",
    score: "Score",
    grade: "Grade",

    // Schedule
    scheduleTitle: "Weekly Schedule",
    noClasses: "Day off, no classes!",
    lectures: "Lectures"
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
