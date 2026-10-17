import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Home, Calendar, FileText, LogOut, User as UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function StudentLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, lang } = useLanguage();

  // Read student data from login state, fallback to mock data
  const userData = location.state || {
    studentId: '20260001',
    studentName: lang === 'ar' ? 'أحمد محمد علي' : 'Ahmed Mohammed Ali',
    major: lang === 'ar' ? 'تقنية المعلومات' : 'Information Technology'
  };

  const student = {
    name: userData.studentName,
    id: userData.studentId,
    major: userData.major
  };

  const menuItems = [
    { path: '/student', title: t('menuHome'), icon: Home },
    { path: '/student/schedule', title: t('menuSchedule'), icon: Calendar },
    { path: '/student/academic-record', title: t('menuAcademic'), icon: FileText },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Top Header Navigation (Similar to Main Page Navbar) */}
      <header className="bg-primary text-white shadow-xl sticky top-0 z-50 lg:mt-2 lg:mx-4 xl:mx-6 lg:rounded-2xl border-b lg:border border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            
            {/* Logo & Portal Name */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center p-0.5 shadow-md">
                <img src="/logo.png" alt="UST Logo" className="w-full h-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <h2 className="text-white font-extrabold text-sm sm:text-base leading-tight">{t('studentPortal')}</h2>
                <span className="text-accent text-xs font-bold">{student.id}</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-accent text-primary shadow-md' 
                        : 'text-gray-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : ''}`} />
                    {item.title}
                  </button>
                );
              })}
            </nav>

            {/* User Profile, Logout & Mobile Menu Toggle */}
            <div className="flex items-center gap-4 shrink-0">
              
              {/* User Info */}
              <div className="flex items-center gap-3 bg-white/10 px-4 py-1.5 rounded-full border border-white/5">
                <div className={`text-sm font-bold hidden md:block text-right ${lang === 'ar' ? 'ml-2' : 'mr-2'}`}>
                  <div className="text-white">{student.name}</div>
                  <div className="text-xs text-accent font-bold">{student.major}</div>
                </div>
                <div className="w-9 h-9 rounded-full bg-accent text-primary flex items-center justify-center shrink-0 shadow-sm">
                  <UserIcon className="w-5 h-5" />
                </div>
              </div>

              {/* Logout Button */}
              <button 
                onClick={handleLogout}
                title={t('logout')}
                className="p-2.5 text-red-300 bg-red-500/10 hover:bg-red-500/20 hover:text-red-200 rounded-full transition-colors hidden sm:flex"
              >
                <LogOut className={`w-5 h-5 ${lang === 'ar' ? '' : 'rotate-180'}`} />
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleSidebar}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-white/10 overflow-hidden bg-primary-dark/95 backdrop-blur-xl"
            >
              <div className="px-4 py-4 space-y-2">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                        isActive 
                          ? 'bg-accent text-primary' 
                          : 'text-gray-200 hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.title}
                    </button>
                  );
                })}
                <div className="pt-2 mt-2 border-t border-white/10">
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-300 hover:bg-red-500/20"
                  >
                    <LogOut className={`w-5 h-5 ${lang === 'ar' ? '' : 'rotate-180'}`} />
                    {t('logout')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-2">
        {children}
      </main>

    </div>
  );
}
