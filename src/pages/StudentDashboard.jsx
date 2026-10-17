import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, MapPin, CheckCircle, GraduationCap, Award, CreditCard, Calendar as CalendarIcon, User } from 'lucide-react';
import studentData from '../data/student.json';
import { useLanguage } from '../contexts/LanguageContext';

export default function StudentDashboard() {
  const { t, lang } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Page Title & Date */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">{t('dashTitle')}</h2>
          <p className="text-primary-dark/60 font-medium mt-1">{t('dashSubtitle')}</p>
        </div>
        <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-border-light flex items-center gap-3 w-fit">
          <CalendarIcon className="w-5 h-5 text-secondary" />
          <span className="font-bold text-primary-dark">
            {new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* GPA Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-border-light hover:shadow-md transition-shadow flex flex-col relative overflow-hidden group">
          <div className={`absolute top-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-1.5 h-full bg-primary transition-all group-hover:w-2`}></div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-primary-dark/70 font-bold text-sm">{t('gpaStat')}</h3>
            <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-extrabold text-primary">{studentData.gpa}</span>
            <span className="text-primary-dark/50 font-bold mb-1">/ 4.00</span>
          </div>
        </div>

        {/* Completed Hours Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-border-light hover:shadow-md transition-shadow flex flex-col relative overflow-hidden group">
          <div className={`absolute top-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-1.5 h-full bg-secondary transition-all group-hover:w-2`}></div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-primary-dark/70 font-bold text-sm">{t('completedHours')}</h3>
            <div className="bg-secondary/10 p-2.5 rounded-xl text-secondary">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-extrabold text-primary">{studentData.completedHours}</span>
            <span className="text-primary-dark/50 font-bold mb-1">{t('outOf')} {studentData.totalHours}</span>
          </div>
        </div>

        {/* Academic Status Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-border-light hover:shadow-md transition-shadow flex flex-col relative overflow-hidden group">
          <div className={`absolute top-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-1.5 h-full bg-accent transition-all group-hover:w-2`}></div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-primary-dark/70 font-bold text-sm">{t('academicStatus')}</h3>
            <div className="bg-accent/10 p-2.5 rounded-xl text-accent-dark">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-extrabold text-primary mt-1">{lang === 'ar' ? studentData.academicStatus : 'Regular'}</span>
          </div>
        </div>

        {/* Financial Status Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-border-light hover:shadow-md transition-shadow flex flex-col relative overflow-hidden group">
          <div className={`absolute top-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-1.5 h-full bg-emerald-500 transition-all group-hover:w-2`}></div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-primary-dark/70 font-bold text-sm">{t('financialStatus')}</h3>
            <div className="bg-emerald-500/10 p-2.5 rounded-xl text-emerald-600">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-xl font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
              {lang === 'ar' ? studentData.financialStatus : 'Fully Paid'}
            </span>
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white rounded-2xl shadow-sm border border-border-light overflow-hidden">
        <div className="p-6 border-b border-border-light bg-gray-50/50 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-secondary" />
              {t('todaySchedule')}
            </h3>
            <p className="text-sm text-primary-dark/60 mt-1">
              {lang === 'ar' ? `لديك ${studentData.todaySchedule.length} ${t('classesCount')}` : `You have ${studentData.todaySchedule.length} ${t('classesCount')}`}
            </p>
          </div>
        </div>
        
        <div className="p-0">
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className={`w-full ${lang === 'ar' ? 'text-right' : 'text-left'} border-collapse`}>
              <thead>
                <tr className="bg-white border-b border-border-light text-primary-dark/60 text-sm">
                  <th className="py-4 px-6 font-bold w-1/3">{t('courseTitle')}</th>
                  <th className="py-4 px-6 font-bold">{t('time')}</th>
                  <th className="py-4 px-6 font-bold">{t('hall')}</th>
                  <th className="py-4 px-6 font-bold">{t('instructor')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                {studentData.todaySchedule.map((course) => (
                  <tr key={course.id} className="hover:bg-slate-white/50 transition-colors group">
                    <td className="py-5 px-6">
                      <div className="flex flex-col">
                        <span className="font-bold text-primary text-base group-hover:text-secondary transition-colors">
                          {lang === 'ar' ? course.courseName : course.courseCode + ' (En)'}
                        </span>
                        <span className="text-xs font-bold text-gray-400 mt-1.5 bg-gray-100 w-fit px-2 py-0.5 rounded-md border border-gray-200">{course.courseCode}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2.5 text-primary-dark font-semibold">
                        <div className="bg-accent/10 p-1.5 rounded-md text-accent-dark">
                          <Clock className="w-4 h-4" />
                        </div>
                        <span dir="ltr" className="inline-block mt-1">{course.time}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2.5 text-primary-dark font-semibold">
                        <div className="bg-gray-100 p-1.5 rounded-md text-gray-500">
                          <MapPin className="w-4 h-4" />
                        </div>
                        {course.hall}
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2.5 text-primary-dark font-semibold">
                        <div className="bg-gray-100 p-1.5 rounded-md text-gray-500">
                          <User className="w-4 h-4" />
                        </div>
                        {lang === 'ar' ? course.instructor : 'Dr. Instructor'}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Card View */}
          <div className="lg:hidden divide-y divide-border-light">
            {studentData.todaySchedule.map((course) => (
              <div key={course.id} className="p-5 sm:p-6 hover:bg-slate-white transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-primary text-lg">{lang === 'ar' ? course.courseName : course.courseCode + ' (En)'}</h4>
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md border border-gray-200 shrink-0">{course.courseCode}</span>
                </div>
                
                <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                  <div className="flex items-center gap-3 text-sm font-semibold text-primary-dark/80">
                    <div className="bg-accent/10 p-2 rounded-lg text-accent-dark">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span dir="ltr" className="mt-0.5">{course.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm font-semibold text-primary-dark/80">
                    <div className="bg-gray-100 p-2 rounded-lg text-gray-500">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>{course.hall}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm font-semibold text-primary-dark/80 sm:col-span-2">
                    <div className="bg-gray-100 p-2 rounded-lg text-gray-500">
                      <User className="w-4 h-4" />
                    </div>
                    <span>{lang === 'ar' ? course.instructor : 'Dr. Instructor'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
}
