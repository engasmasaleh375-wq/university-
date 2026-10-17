import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, BookOpen } from 'lucide-react';
import academicData from '../data/academicRecord.json';
import { useLanguage } from '../contexts/LanguageContext';

export default function AcademicRecord() {
  const [expandedSemesters, setExpandedSemesters] = useState([academicData[0].id]);
  const { t, lang } = useLanguage();

  const toggleSemester = (id) => {
    setExpandedSemesters(prev => 
      prev.includes(id) ? prev.filter(sId => sId !== id) : [...prev, id]
    );
  };

  const getGradeColor = (grade) => {
    if (grade.includes('A')) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (grade.includes('B')) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (grade.includes('C')) return 'text-accent-dark bg-accent/10 border-accent/30';
    if (grade.includes('D')) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary flex items-center gap-3">
          <FileText className="w-8 h-8 text-secondary" />
          {t('recordTitle')}
        </h2>
        <p className="text-primary-dark/60 font-medium mt-2">{t('recordSubtitle')}</p>
      </div>

      <div className="space-y-5">
        {academicData.map((semester) => {
          const isExpanded = expandedSemesters.includes(semester.id);

          return (
            <div key={semester.id} className="bg-white rounded-2xl shadow-sm border border-border-light overflow-hidden transition-all duration-300">
              
              {/* Accordion Header */}
              <button 
                onClick={() => toggleSemester(semester.id)}
                className={`w-full flex items-center justify-between p-5 sm:p-6 bg-slate-white/30 hover:bg-slate-white transition-colors ${lang === 'ar' ? 'text-right' : 'text-left'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl transition-colors ${isExpanded ? 'bg-primary text-white shadow-md' : 'bg-primary/10 text-primary'}`}>
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary-dark">
                      {lang === 'ar' ? semester.title : semester.id.replace('-', ' ').toUpperCase()}
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 mt-1">
                      {semester.completedHours} {lang === 'ar' ? 'ساعة منجزة' : 'completed hours'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className={`hidden sm:flex items-center gap-6 ${lang === 'ar' ? 'mr-4 text-left' : 'ml-4 text-right'}`}>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 mb-1">{t('semesterGpa')}</span>
                      <span className="font-extrabold text-primary text-lg">{semester.semesterGpa}</span>
                    </div>
                    <div className="w-px h-10 bg-border-light"></div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 mb-1">{t('cumGpa')}</span>
                      <span className="font-extrabold text-secondary text-lg">{semester.cumulativeGpa}</span>
                    </div>
                  </div>
                  <div className={`p-2 rounded-full transition-colors ${isExpanded ? 'bg-primary/5 text-primary' : 'text-gray-400'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-border-light">
                      
                      {/* Mobile GPAs */}
                      <div className="sm:hidden flex items-center justify-around p-4 bg-gray-50 border-b border-border-light">
                        <div className="text-center">
                          <span className="block text-xs font-bold text-gray-400 mb-1">{t('semesterGpa')}</span>
                          <span className="font-extrabold text-primary text-lg">{semester.semesterGpa}</span>
                        </div>
                        <div className="w-px h-10 bg-border-light"></div>
                        <div className="text-center">
                          <span className="block text-xs font-bold text-gray-400 mb-1">{t('cumGpa')}</span>
                          <span className="font-extrabold text-secondary text-lg">{semester.cumulativeGpa}</span>
                        </div>
                      </div>

                      {/* Desktop Table View */}
                      <div className="hidden md:block overflow-x-auto p-4">
                        <table className={`w-full ${lang === 'ar' ? 'text-right' : 'text-left'} border-collapse`}>
                          <thead>
                            <tr className="text-primary-dark/60 text-sm border-b border-border-light">
                              <th className="py-3 px-6 font-bold w-1/3">{t('courseTitle')}</th>
                              <th className="py-3 px-6 font-bold text-center">{t('courseCode')}</th>
                              <th className="py-3 px-6 font-bold text-center">{t('hours')}</th>
                              <th className="py-3 px-6 font-bold text-center">{t('score')}</th>
                              <th className="py-3 px-6 font-bold text-center">{t('grade')}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border-light">
                            {semester.courses.map((course) => (
                              <tr key={course.id} className="hover:bg-slate-white/50 transition-colors">
                                <td className="py-4 px-6 font-bold text-primary">
                                  {lang === 'ar' ? course.name : course.code + ' (En)'}
                                </td>
                                <td className="py-4 px-6 text-center">
                                  <span className="text-sm font-bold text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1 rounded-md">{course.code}</span>
                                </td>
                                <td className="py-4 px-6 text-center font-bold text-primary-dark">{course.hours}</td>
                                <td className="py-4 px-6 text-center font-extrabold text-primary-dark text-lg">{course.score}</td>
                                <td className="py-4 px-6 text-center">
                                  <span className={`inline-flex items-center justify-center min-w-[3rem] px-3 py-1 rounded-lg border font-extrabold ${getGradeColor(course.grade)}`}>
                                    {course.grade}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Mobile Card View */}
                      <div className="md:hidden divide-y divide-border-light bg-gray-50/30">
                        {semester.courses.map((course) => (
                          <div key={course.id} className="p-4 hover:bg-slate-white transition-colors flex justify-between items-center">
                            <div>
                              <h4 className="font-bold text-primary mb-2 text-sm">{lang === 'ar' ? course.name : course.code}</h4>
                              <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-gray-500 bg-white px-2 py-0.5 rounded-md border border-gray-200">{course.code}</span>
                                <span className="text-xs font-bold text-primary-dark/60">{course.hours} {lang === 'ar' ? 'ساعات' : 'hours'}</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className={`inline-flex items-center justify-center min-w-[3rem] px-2 py-1 rounded-lg border font-extrabold text-sm ${getGradeColor(course.grade)}`}>
                                {course.grade}
                              </span>
                              <span className="text-xs font-extrabold text-primary-dark">{course.score} {lang === 'ar' ? 'درجة' : 'pts'}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
