import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PublicLayout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-transparent relative overflow-x-clip">
      {/* =========================================================================
          Ultra-Luxurious Master Glassmorphic Background System
          خلفية زجاجية كريستالية فخمة متعددة الأبعاد وراقية تغطي كامل الشاشة بدون أي فراغ
         ========================================================================= */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
        
        {/* Layer 1: Prestigious University Architectural Watermark with Soft Optical Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07] mix-blend-multiply filter blur-[2px] scale-105 pointer-events-none"
          style={{
            backgroundImage: `url('/hero-building.jpg')`,
          }}
        />

        {/* Layer 2: Vibrant Luminous Aurora Glass Halos (توهجات زجاجية ملكية ثلاثية الأبعاد) */}
        {/* Top-Right: Royal Sapphire & Sky Crystal Halo */}
        <div className="absolute -top-24 -right-24 w-[750px] h-[750px] bg-gradient-to-br from-sky-400/28 via-blue-600/18 to-transparent rounded-full blur-[110px]" />
        
        {/* Top-Left: Vibrant Emerald & Mint Fresh Aura */}
        <div className="absolute -top-20 -left-20 w-[680px] h-[680px] bg-gradient-to-tr from-emerald-400/22 via-teal-300/18 to-transparent rounded-full blur-[115px]" />

        {/* Mid Center: Diamond Specular Core (انعكاس ضوئي ألماسي في قلب الشاشة) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-b from-white/75 via-sky-100/35 to-transparent rounded-full blur-[90px]" />

        {/* Bottom-Left: Deep Prestigious Navy & Cyan Refraction */}
        <div className="absolute bottom-10 -left-28 w-[720px] h-[720px] bg-gradient-to-tr from-[#0B3B60]/20 via-sky-500/18 to-transparent rounded-full blur-[130px]" />

        {/* Bottom-Right: Emerald-Teal Luster */}
        <div className="absolute -bottom-20 -right-20 w-[700px] h-[700px] bg-gradient-to-tl from-teal-400/20 via-emerald-300/15 to-transparent rounded-full blur-[125px]" />

        {/* Layer 3: Diagonal Specular Crystal Light Refraction Beams (أشعة انكسار الضوء الكريستالي) */}
        <div className="absolute -inset-x-40 top-0 h-[600px] bg-gradient-to-b from-white/35 via-sky-200/12 to-transparent -rotate-12 transform origin-top-left pointer-events-none blur-[60px]" />
        <div className="absolute -inset-x-40 top-1/2 h-[500px] bg-gradient-to-b from-white/30 via-emerald-200/12 to-transparent rotate-12 transform origin-center pointer-events-none blur-[70px]" />

        {/* Layer 4: Master Silky Frosted Acrylic Glass Filter */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none" />

        {/* Layer 5: Full-Screen Dotted Glass Grid Matrix - 100% Edge-to-Edge with Zero Gaps (خلفية زجاجية منقطة تغطي الشاشة كاملة) */}
        <div 
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(11, 59, 96, 0.16) 1.25px, transparent 1.25px)`,
            backgroundSize: '24px 24px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer rendered across all pages */}
      <Footer />
    </div>
  );
}
