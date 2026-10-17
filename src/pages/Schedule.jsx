import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Coffee } from 'lucide-react';
import scheduleData from '../data/schedule.json';
import { useLanguage } from '../contexts/LanguageContext';

export default function Schedule() {
  const { t, lang } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary flex items-center gap-3">
            <Calendar className="w-8 h-8 text-secondary" />
            {t('scheduleTitle')}
          </h2>
          <p className="text-primary-dark/60 font-medium mt-2">
            {lang === 'ar' ? scheduleData.semester : 'First Semester 2026'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {scheduleData.days.map((day) => (
          <div key={day.id} className="bg-white rounded-2xl shadow-sm border border-border-light overflow-hidden">
            <div className="bg-slate-white/50 border-b border-border-light px-6 py-4 flex items-center gap-3">
              <h3 className="text-xl font-bold text-primary">
                {lang === 'ar' ? day.name : day.id.charAt(0).toUpperCase() + day.id.slice(1)}
              </h3>
              <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-md border border-primary/10">
                {day.classes.length} {t('lectures')}
              </span>
            </div>
            
            <div className="p-4 sm:p-6">
              {day.classes.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                  <div className="bg-gray-50 p-4 rounded-full mb-3 border border-gray-100">
                    <Coffee className="w-8 h-8 text-gray-300" />
                  </div>
                  <p className="font-bold text-lg">{t('noClasses')}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {day.classes.map((cls) => (
                    <div key={cls.id} className="border border-border-light rounded-xl p-5 hover:border-secondary/50 hover:shadow-md transition-all group relative overflow-hidden bg-white">
                      <div className={`absolute top-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-1.5 h-full transition-all group-hover:w-2 ${cls.type === 'نظري' ? 'bg-secondary' : 'bg-accent'}`}></div>
                      
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-primary text-lg leading-tight">
                          {lang === 'ar' ? cls.courseName : cls.courseCode + ' (En)'}
                        </h4>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-md shrink-0 ${cls.type === 'نظري' ? 'bg-secondary/10 text-secondary-dark' : 'bg-accent/10 text-accent-dark'}`}>
                          {lang === 'ar' ? cls.type : (cls.type === 'نظري' ? 'Theory' : 'Practical')}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-5">
                        <span className="text-xs font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2.5 py-0.5 rounded-md">
                          {cls.courseCode}
                        </span>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-border-light/60">
                        <div className="flex items-center gap-3 text-sm font-semibold text-primary-dark/80">
                          <div className="bg-primary/5 p-1.5 rounded-md text-primary">
                            <Clock className="w-4 h-4" />
                          </div>
                          <span dir="ltr">{cls.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-semibold text-primary-dark/80">
                          <div className="bg-gray-100 p-1.5 rounded-md text-gray-500">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <span>{cls.hall}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-semibold text-primary-dark/80">
                          <div className="bg-gray-100 p-1.5 rounded-md text-gray-500">
                            <User className="w-4 h-4" />
                          </div>
                          <span>{lang === 'ar' ? cls.instructor : 'Dr. Instructor'}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
