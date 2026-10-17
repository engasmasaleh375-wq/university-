import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <footer className="bg-primary text-white mt-16 mb-6 mx-4 md:mx-6 lg:mx-8 rounded-[2.5rem] shadow-2xl border border-white/10 relative z-40 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 pb-6 relative z-10">
        
        {/* Horizontal Layout for content */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-10 mb-10">
          
          {/* Brand & Description */}
          <div className="flex flex-col items-center lg:items-start max-w-lg text-center lg:text-start">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Logo" className="w-14 h-14 bg-white rounded-full p-1 shadow-sm" />
              <h3 className="text-xl md:text-2xl font-bold text-accent">{isAr ? 'جامعة العلوم والتكنولوجيا' : 'University of Science and Technology'}</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed font-medium">
              {isAr 
                ? 'جامعة رائدة في تقديم تعليم أكاديمي متميز يواكب التطورات العلمية والتقنية الحديثة، لإعداد جيل مبدع ومؤهل للمساهمة في بناء المجتمع لسد احتياجات سوق العمل.'
                : 'A leading university providing outstanding academic education that keeps pace with modern scientific and technological developments, to prepare a creative and qualified generation.'}
            </p>
          </div>

          {/* Links & Socials */}
          <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
            {/* Horizontal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-3">
                {(isAr 
                  ? ['الرئيسية', 'عن الجامعة', 'الكليات والتخصصات', 'القبول والتسجيل', 'بوابة الطالب', 'تواصل معنا']
                  : ['Home', 'About Us', 'Faculties & Programs', 'Admission', 'Student Portal', 'Contact Us']
                ).map((link, i) => (
                    <Link 
                      key={i}
                      to={i === 0 ? "/" : i === 2 ? "/faculties" : i === 3 ? "/admission" : i === 4 ? "/login" : "#"} 
                      className="text-sm font-bold text-gray-200 hover:text-accent transition-colors"
                    >
                      {link}
                    </Link>
                ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
        </div>

        {/* Centered Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col items-center justify-center gap-3">
          <p className="text-sm text-gray-400 font-medium text-center">
            &copy; {new Date().getFullYear()} {isAr ? 'جامعة العلوم والتكنولوجيا. جميع الحقوق محفوظة.' : 'University of Science and Technology. All rights reserved.'}
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors text-xs font-medium">{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors text-xs font-medium">{isAr ? 'شروط الاستخدام' : 'Terms of Use'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
