import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rippleKey, setRippleKey] = useState(0);
  const location = useLocation();
  const { lang, toggleLanguage, t } = useLanguage();

  const barControls = useAnimationControls();
  const rightControls = useAnimationControls();
  const leftControls = useAnimationControls();
  const centerControls = useAnimationControls();
  const photonBeamControls = useAnimationControls();
  const shockwaveControls = useAnimationControls();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sensational Multidimensional Crystal Resonance Animation
  const triggerInterlace = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setRippleKey(prev => prev + 1);

    await Promise.all([
      // 1. Bar Elastic 3D Pulse & Rebound
      barControls.start({
        scale: [1, 0.97, 1.018, 0.993, 1],
        y: [0, 3, -3, 0],
        transition: { duration: 0.65, ease: [0.19, 1, 0.22, 1] }
      }),
      // 2. High-Speed Prismatic Light Sweep across the glass
      photonBeamControls.start({
        x: ['-120%', '220%'],
        opacity: [0, 0.9, 0],
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
      }),
      // 3. Shockwave Glass Ring Expansion
      shockwaveControls.start({
        scale: [0.96, 1.03],
        opacity: [0.8, 0],
        transition: { duration: 0.55, ease: 'easeOut' }
      }),
      // 4. Right Wing Elastic Convergence
      rightControls.start({
        x: [0, -38, 0],
        rotate: [0, -1.2, 0],
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }),
      // 5. Left Wing Elastic Convergence
      leftControls.start({
        x: [0, 38, 0],
        rotate: [0, 1.2, 0],
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }),
      // 6. Center Menu Atmospheric Breathe
      centerControls.start({
        scale: [1, 0.92, 1.05, 1],
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      })
    ]);

    setIsAnimating(false);
  };

  const navLinks = [
    { name: t('faculties'), path: '/faculties' },
    { name: t('admission'), path: '/admission' },
  ];

  return (
    <header 
      className="fixed top-5 sm:top-6 md:top-7 lg:top-8 left-0 right-0 z-30 flex justify-center px-4 sm:px-6 pointer-events-none transition-all duration-300"
    >
      <div className="relative w-full max-w-[860px] pointer-events-auto">
        <motion.nav 
          animate={barControls}
          initial={{ scale: 1, y: 0 }}
          onClick={triggerInterlace}
          className={`transition-all duration-300 ease-out w-full ${
            isOpen ? 'rounded-[32px]' : 'rounded-full'
          } border border-white/80 shadow-[0_16px_45px_rgba(11,59,96,0.08),inset_0_1.5px_2px_rgba(255,255,255,0.95),inset_0_-1px_2px_rgba(11,59,96,0.02)] backdrop-blur-2xl relative overflow-hidden select-none cursor-pointer ${
            isScrolled 
              ? 'bg-white/85 shadow-[0_20px_50px_rgba(11,59,96,0.12)] border-white/95' 
              : 'bg-white/70 hover:bg-white/80'
          }`}
        >
          {/* Subtle top specular hairline reflection */}
          <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none z-20" />

          {/* Dynamic Prismatic Light Sweep Beam (موجة الضوء البلورية عند النقر) */}
          <motion.div
            animate={photonBeamControls}
            initial={{ x: '-120%', opacity: 0 }}
            className="absolute -inset-y-4 w-40 bg-gradient-to-r from-transparent via-white/85 to-transparent -skew-x-12 pointer-events-none z-15"
          />

          {/* Interactive Crystal Shockwave Ring (تموج الرنين الزجاجي) */}
          <motion.div
            key={rippleKey}
            animate={shockwaveControls}
            initial={{ scale: 0.96, opacity: 0 }}
            className="absolute inset-0 rounded-full border border-white/90 pointer-events-none z-15"
          />

          <div className="px-4 sm:px-6 md:px-7 relative z-10">
            <div className="flex justify-between h-14 sm:h-15 md:h-[66px] items-center">
              
              {/* Right Side: University Brand & Emblem */}
              <motion.div
                animate={rightControls}
                initial={{ x: 0, rotate: 0 }}
                className="flex items-center"
              >
                <Link 
                  to="/" 
                  onClick={() => {
                    triggerInterlace();
                    setIsOpen(false);
                    if (location.pathname === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="flex-shrink-0 flex items-center group/logo gap-3 cursor-pointer"
                  title={lang === 'ar' ? 'الصفحة الرئيسية' : 'Home Page'}
                >
                  {/* Clean Crystalline Logo Disc with Dual Ring Accent */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full p-0.5 bg-white/90 border border-white shadow-xs flex items-center justify-center transition-all duration-300 group-hover/logo:scale-108 group-hover/logo:shadow-md">
                    <img src="/logo.png" alt="Logo" className="w-full h-full object-contain p-0.5" />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="font-black text-xs sm:text-sm md:text-[15px] text-primary group-hover/logo:text-primary-dark transition-colors tracking-tight leading-tight">
                      {t('universityName')}
                    </span>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-primary/65 tracking-wider mt-0.5">
                      {lang === 'ar' ? 'المركز الرئيسي • صنعاء' : 'Main Campus • Sana\'a'}
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Center Menu: Clean human-crafted navigation */}
              <motion.div
                animate={centerControls}
                initial={{ scale: 1 }}
                className="hidden md:flex items-center"
              >
                <div className="flex space-x-1.5 md:space-x-2 space-x-reverse rtl:space-x-reverse ltr:space-x-2 items-center p-1.5 rounded-full bg-white/40 border border-white/70 backdrop-blur-md shadow-2xs">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <div key={index}>
                        <Link
                          to={link.path}
                          onClick={() => triggerInterlace()}
                          className={`${
                            isActive 
                              ? 'text-primary font-black bg-white/95 border border-white shadow-xs' 
                              : 'text-primary/75 hover:text-primary hover:bg-white/60 font-bold border border-transparent'
                          } transition-all px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13.5px] tracking-tight block`}
                        >
                          {link.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Left Side: Controls */}
              <motion.div
                animate={leftControls}
                initial={{ x: 0, rotate: 0 }}
                className="hidden md:flex items-center gap-2.5 sm:gap-3"
              >
                {/* Language Switcher Icon Button */}
                <button 
                  onClick={() => {
                    toggleLanguage();
                    triggerInterlace();
                  }}
                  className="flex items-center justify-center w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full bg-white/55 hover:bg-white/85 border border-white/80 text-primary transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
                  title={lang === 'ar' ? 'English' : 'عربي'}
                >
                  <Globe className="w-4 h-4 stroke-[2]" />
                </button>

                {/* Prestigious Academic "بوابة الطالب" Button */}
                <Link
                  to="/login"
                  onClick={() => triggerInterlace()}
                  className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-black px-4.5 sm:px-5 py-2 rounded-full shadow-[0_4px_14px_rgba(14,165,233,0.35)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.45)] text-xs sm:text-[13px] flex items-center gap-2 border border-sky-400/40 select-none cursor-pointer transition-all active:scale-95"
                >
                  {/* Academic Portal Monogram Icon */}
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                  <span>{t('studentPortal')}</span>
                </Link>
              </motion.div>

              {/* Mobile Menu Action Trigger */}
              <div className="flex md:hidden items-center gap-2">
                <button 
                  onClick={() => toggleLanguage()} 
                  className="flex items-center justify-center w-8.5 h-8.5 rounded-full bg-white/60 text-primary border border-white/80 shadow-2xs hover:bg-white transition-colors"
                  title={lang === 'ar' ? 'English' : 'عربي'}
                >
                  <Globe className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-2xl text-primary hover:text-primary-dark hover:bg-white/60 border border-white/60 transition-colors focus:outline-none"
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

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden bg-white/95 backdrop-blur-3xl border-t border-white/80 shadow-xl rounded-b-[32px] overflow-hidden"
              >
                <div className="px-5 pt-3 pb-5 space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={index}
                        to={link.path}
                        className={`${
                          isActive 
                            ? 'bg-primary/10 text-primary font-black border border-primary/20' 
                            : 'text-primary/85 hover:text-primary hover:bg-white/60 font-extrabold'
                        } block px-4 py-2.5 rounded-xl text-sm transition-all`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                  <div className="pt-2 mt-2 border-t border-sky-200/80">
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-center bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white block px-4 py-2.5 rounded-full text-sm font-black shadow-md shadow-sky-500/25 border border-sky-400/30 select-none cursor-pointer flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                      <span>{t('studentPortal')}</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}
