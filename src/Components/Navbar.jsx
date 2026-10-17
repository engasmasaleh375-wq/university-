import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('faculties'), path: '/faculties' },
    { name: t('admission'), path: '/admission' },
  ];

  return (
    <nav 
      className={`bg-primary text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'mt-0 mx-0 rounded-none border-b border-white/10 shadow-lg' 
          : 'mt-2 sm:mt-2.5 mx-3 sm:mx-5 lg:mx-8 rounded-2xl border border-white/10 shadow-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group gap-2.5">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 sm:w-9 sm:h-9 object-contain bg-white rounded-full p-0.5 shadow-sm" />
            <span className="font-bold text-base sm:text-lg md:text-xl text-accent group-hover:text-white transition-colors">
              {t('universityName')}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-4 md:space-x-6 space-x-reverse rtl:space-x-reverse ltr:space-x-3 items-center">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={index}
                    to={link.path}
                    className={`${isActive ? 'text-accent font-bold' : 'text-gray-200 hover:text-accent'} transition-colors px-2.5 py-1 rounded-lg text-xs md:text-sm font-medium mx-1`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            
            <div className="flex items-center gap-2.5 sm:gap-3 ml-2 mr-2 sm:ml-4 sm:mr-4">
              <button 
                onClick={toggleLanguage} 
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                title={lang === 'ar' ? 'English' : 'عربي'}
              >
                <Globe className="w-4 h-4" />
              </button>

              <Link 
                to="/login"
                className="bg-accent hover:bg-yellow-500 text-primary-dark font-bold px-3.5 py-1.5 rounded-lg shadow-xs transition-all text-xs sm:text-sm flex items-center gap-1.5"
              >
                {t('studentPortal')}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2.5">
            <button 
              onClick={toggleLanguage} 
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              title={lang === 'ar' ? 'English' : 'عربي'}
            >
              <Globe className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-1.5 rounded-lg text-gray-200 hover:text-white hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            >
              {isOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden bg-primary border-t border-secondary/50 shadow-xl ${!isScrolled ? 'rounded-b-3xl' : ''}`}>
          <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={index}
                  to={link.path}
                  className={`${isActive ? 'bg-secondary/20 text-accent font-bold' : 'text-gray-100 hover:text-accent hover:bg-secondary/10'} block px-4 py-3 rounded-md text-base font-medium transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2 mt-2 border-t border-white/10">
              <Link
                to="/login"
                className="w-full text-center bg-accent text-primary-dark hover:bg-yellow-500 block px-4 py-3 rounded-md text-base font-bold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('studentLogin')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
