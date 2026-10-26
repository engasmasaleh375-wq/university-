import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, LogIn, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Login() {
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [major, setMajor] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t, lang } = useLanguage();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!studentId || !studentName || !major || !password) {
      setError(lang === 'ar' ? 'الرجاء إدخال جميع البيانات' : 'Please fill in all fields');
      return;
    }
    setTimeout(() => {
      navigate('/student', { state: { studentId, studentName, major } });
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-surface backdrop-blur-xl border border-border-light rounded-3xl shadow-xl overflow-hidden relative z-10"
      >
        <div className="bg-primary p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
          <h1 className="text-3xl font-extrabold text-white mb-2 relative z-10">{t('studentPortal')}</h1>
          <p className="text-white/80 font-medium relative z-10">{t('loginSubtitle')}</p>
        </div>

        <form onSubmit={handleLogin} className="p-8">
          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
              className="bg-red-50 text-red-600 p-3.5 rounded-xl mb-6 text-sm font-bold border border-red-100 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-red-600 rounded-full shrink-0"></span>
              {error}
            </motion.div>
          )}

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-primary-dark mb-2">{t('studentId')}</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className={`w-full ${lang === 'ar' ? 'pl-5 pr-12' : 'pr-5 pl-12'} py-3.5 rounded-xl border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm`}
                  placeholder={t('studentIdPlaceholder')}
                />
                <User className={`absolute ${lang === 'ar' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none`} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-primary-dark mb-2">{lang === 'ar' ? 'اسم الطالب' : 'Student Name'}</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className={`w-full ${lang === 'ar' ? 'pl-5 pr-12' : 'pr-5 pl-12'} py-3.5 rounded-xl border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm`}
                  placeholder={lang === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                />
                <User className={`absolute ${lang === 'ar' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none`} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-primary-dark mb-2">{lang === 'ar' ? 'التخصص' : 'Major'}</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  className={`w-full ${lang === 'ar' ? 'pl-5 pr-12' : 'pr-5 pl-12'} py-3.5 rounded-xl border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm`}
                  placeholder={lang === 'ar' ? 'مثل: هندسة برمجيات' : 'e.g. Software Engineering'}
                />
                <User className={`absolute ${lang === 'ar' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none`} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-primary-dark mb-2">{t('password')}</label>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full ${lang === 'ar' ? 'pl-5 pr-12' : 'pr-5 pl-12'} py-3.5 rounded-xl border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm`}
                  placeholder="••••••••"
                />
                <Lock className={`absolute ${lang === 'ar' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none`} />
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-accent hover:bg-white text-primary-dark font-extrabold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all mt-8 flex items-center justify-center gap-2 group border border-sky-300/40 cursor-pointer"
          >
            {t('loginBtn')}
            <LogIn className={`w-5 h-5 ${lang === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
          </button>

          <div className="mt-8 text-center">
             <button type="button" onClick={() => navigate('/')} className="text-primary-dark/60 hover:text-primary font-bold text-sm flex items-center justify-center gap-1.5 mx-auto transition-colors group">
               {lang === 'ar' ? (
                 <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
               ) : (
                 <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
               )}
               {t('backHome')}
             </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
