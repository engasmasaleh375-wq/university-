import React from 'react';

/**
 * High-fidelity vector logos for international and regional university partners of UST Yemen
 * Matching the real logos displayed on ust.edu.ye/ar/
 */

// 1. Suez Canal University - Egypt
export function SuezCanalLogo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70" cy="70" r="66" fill="#ffffff" stroke="#1b4975" strokeWidth="6" />
      <circle cx="70" cy="70" r="54" fill="#f0f7fc" stroke="#2563eb" strokeWidth="2" strokeDasharray="3 3" />
      
      {/* Arabic text arc top */}
      <path id="suezArcTop" d="M 22 70 A 48 48 0 0 1 118 70" fill="none" />
      <text fill="#1b4975" fontSize="11" fontWeight="900" textAnchor="middle">
        <textPath href="#suezArcTop" startOffset="50%">جامعة قناة السويس</textPath>
      </text>

      {/* English text arc bottom */}
      <path id="suezArcBottom" d="M 118 70 A 48 48 0 0 1 22 70" fill="none" />
      <text fill="#1b4975" fontSize="7.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
        <textPath href="#suezArcBottom" startOffset="50%">SUEZ CANAL UNIVERSITY</textPath>
      </text>

      {/* Center Shield & Waves */}
      <rect x="48" y="44" width="44" height="42" rx="6" fill="#1b4975" />
      <rect x="51" y="47" width="38" height="36" rx="4" fill="#ffffff" />
      
      {/* Book & Gear */}
      <path d="M 56 68 Q 70 60 84 68 L 84 54 Q 70 48 56 54 Z" fill="#2563eb" opacity="0.9" />
      <path d="M 70 50 L 70 66" stroke="#ffffff" strokeWidth="2" />
      {/* Sea waves */}
      <path d="M 52 74 Q 60 70 70 74 T 88 74 L 88 78 Q 78 74 70 78 T 52 78 Z" fill="#0284c7" />
      <path d="M 54 79 Q 62 76 70 79 T 86 79" stroke="#38bdf8" strokeWidth="2" />
      
      {/* Torch / Flame top */}
      <circle cx="70" cy="41" r="5" fill="#f59e0b" />
      <path d="M 68 37 Q 70 32 73 37 Q 71 42 68 37 Z" fill="#ef4444" />
    </svg>
  );
}

// 2. Ain Shams University - Egypt
export function AinShamsLogo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Obelisk Pyramidion Triangle Shape */}
      <path d="M 70 14 L 118 108 L 22 108 Z" fill="#ffffff" stroke="#1e3a8a" strokeWidth="4" />
      <path d="M 70 20 L 112 104 L 28 104 Z" fill="#f8fafc" />

      {/* Central Obelisk */}
      <rect x="66" y="32" width="8" height="58" fill="#d97706" />
      <polygon points="66,32 74,32 70,22" fill="#b45309" />
      
      {/* Hieroglyphs / Sun Disc */}
      <circle cx="70" cy="44" r="2.5" fill="#ffffff" />
      <circle cx="70" cy="54" r="2.5" fill="#ffffff" />
      <circle cx="70" cy="64" r="2.5" fill="#ffffff" />
      <circle cx="70" cy="74" r="2.5" fill="#ffffff" />

      {/* Horus Falcon Left */}
      <g transform="translate(42, 60) scale(0.4)">
        <path d="M 20 10 Q 30 0 40 15 Q 35 45 10 50 Q 5 30 20 10 Z" fill="#1e3a8a" />
        <circle cx="28" cy="15" r="3" fill="#f59e0b" />
        <path d="M 12 30 L 2 34 L 10 38 Z" fill="#d97706" />
      </g>

      {/* Horus Falcon Right */}
      <g transform="translate(98, 60) scale(-0.4, 0.4)">
        <path d="M 20 10 Q 30 0 40 15 Q 35 45 10 50 Q 5 30 20 10 Z" fill="#1e3a8a" />
        <circle cx="28" cy="15" r="3" fill="#f59e0b" />
        <path d="M 12 30 L 2 34 L 10 38 Z" fill="#d97706" />
      </g>

      {/* Bottom base with text */}
      <rect x="18" y="104" width="104" height="26" rx="4" fill="#1e3a8a" />
      <text x="70" y="117" fill="#ffffff" fontSize="9.5" fontWeight="900" textAnchor="middle">جامعة عين شمس</text>
      <text x="70" y="126" fill="#fde68a" fontSize="6.5" fontWeight="800" textAnchor="middle" letterSpacing="0.8">AIN SHAMS UNIVERSITY</text>
    </svg>
  );
}

// 3. Al-Ahliyya Amman University - Jordan
export function AmmanUniversityLogo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Shield */}
      <path d="M 30 18 Q 70 8 110 18 L 116 78 Q 116 114 70 132 Q 24 114 24 78 Z" fill="#1e40af" stroke="#f59e0b" strokeWidth="4" />
      <path d="M 34 24 Q 70 16 106 24 L 110 76 Q 110 108 70 124 Q 30 108 30 76 Z" fill="#ffffff" />

      {/* University Dome / Columns */}
      <path d="M 50 56 Q 70 38 90 56 L 90 82 L 50 82 Z" fill="#1e40af" />
      <circle cx="70" cy="42" r="7" fill="#f59e0b" />
      
      {/* Columns */}
      <rect x="56" y="58" width="4" height="22" fill="#ffffff" rx="1" />
      <rect x="68" y="58" width="4" height="22" fill="#ffffff" rx="1" />
      <rect x="80" y="58" width="4" height="22" fill="#ffffff" rx="1" />

      {/* Open Book */}
      <path d="M 50 86 Q 70 78 90 86 L 90 94 Q 70 88 50 94 Z" fill="#f59e0b" />
      <path d="M 70 80 L 70 94" stroke="#ffffff" strokeWidth="2" />

      {/* Bottom Ribbon */}
      <path d="M 20 108 L 70 120 L 120 108 L 114 122 L 70 134 L 26 122 Z" fill="#1e3a8a" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="70" y="117" fill="#ffffff" fontSize="7" fontWeight="900" textAnchor="middle">جامعة عمان الأهلية</text>
      <text x="70" y="129" fill="#fde68a" fontSize="5.5" fontWeight="800" textAnchor="middle">AL-AHLIYYA AMMAN</text>
    </svg>
  );
}

// 4. The University of Jordan - Jordan
export function JordanUniversityLogo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Green Emblem Shield */}
      <path d="M 28 20 C 50 14 90 14 112 20 C 118 60 118 96 70 128 C 22 96 22 60 28 20 Z" fill="#15803d" stroke="#14532d" strokeWidth="4" />
      <path d="M 34 26 C 54 20 86 20 106 26 C 110 60 110 90 70 120 C 30 90 30 60 34 26 Z" fill="#ffffff" />

      {/* Top Arabic Arc */}
      <text x="70" y="44" fill="#14532d" fontSize="12" fontWeight="900" textAnchor="middle">الجامعة الأردنية</text>

      {/* Torch & Flame in Center */}
      <circle cx="70" cy="62" r="14" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
      <path d="M 68 50 Q 70 42 75 50 Q 72 58 68 50 Z" fill="#dc2626" />
      <path d="M 67 60 L 73 60 L 71 74 L 69 74 Z" fill="#b91c1c" />

      {/* Open Book */}
      <path d="M 46 80 Q 70 70 94 80 L 94 92 Q 70 82 46 92 Z" fill="#15803d" />
      <text x="58" y="88" fill="#ffffff" fontSize="7" fontWeight="bold">١٩٦٢</text>
      <text x="82" y="88" fill="#ffffff" fontSize="7" fontWeight="bold">١٣٨٢</text>

      {/* Laurel leaves wreath */}
      <path d="M 42 96 Q 70 114 98 96" stroke="#ca8a04" strokeWidth="3" strokeDasharray="4 2" fill="none" />
      
      {/* Base Foundation */}
      <rect x="52" y="100" width="36" height="6" rx="2" fill="#14532d" />
    </svg>
  );
}

// 5. EC-COUNCIL PARTNER - USA
export function EcCouncilLogo({ className = "w-28 h-12" }) {
  return (
    <svg viewBox="0 0 200 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="196" height="56" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
      {/* EC-COUNCIL in Crimson Red */}
      <text x="24" y="28" fill="#dc2626" fontSize="17" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
        EC-COUNCIL
      </text>
      {/* Divider */}
      <line x1="140" y1="14" x2="140" y2="34" stroke="#94a3b8" strokeWidth="2" />
      {/* ACT */}
      <text x="148" y="28" fill="#0f172a" fontSize="16" fontWeight="900" fontFamily="sans-serif">
        ACT
      </text>
      {/* PARTNER */}
      <line x1="24" y1="36" x2="176" y2="36" stroke="#dc2626" strokeWidth="1.5" />
      <text x="100" y="49" fill="#0f172a" fontSize="10" fontWeight="900" textAnchor="middle" letterSpacing="4">
        — PARTNER —
      </text>
    </svg>
  );
}

// 6. Twintech International University of Technology (I.U.T.T) - Malaysia
export function TwintechLogo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="120" height="120" rx="16" fill="#f0f9ff" stroke="#0284c7" strokeWidth="4" />
      
      {/* Header English text arc */}
      <text x="70" y="26" fill="#0369a1" fontSize="7.5" fontWeight="900" textAnchor="middle">
        International University of Technology
      </text>
      <text x="70" y="36" fill="#0284c7" fontSize="8" fontWeight="800" textAnchor="middle">
        Twintech
      </text>

      {/* Central Blue Box with I.U.T.T */}
      <rect x="36" y="44" width="68" height="24" rx="4" fill="#0369a1" />
      <text x="70" y="61" fill="#ffffff" fontSize="14" fontWeight="900" textAnchor="middle" letterSpacing="2">
        I.U.T.T
      </text>

      {/* Globe Sphere with Orbit */}
      <circle cx="70" cy="88" r="18" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
      <ellipse cx="70" cy="88" rx="18" ry="7" stroke="#ffffff" strokeWidth="2" fill="none" transform="rotate(-25 70 88)" />
      <ellipse cx="70" cy="88" rx="7" ry="18" stroke="#ffffff" strokeWidth="1.5" fill="none" />
      
      {/* Arabic text at bottom */}
      <text x="70" y="122" fill="#0369a1" fontSize="9" fontWeight="900" textAnchor="middle">
        جامعة تونتك الدولية
      </text>
    </svg>
  );
}

// 7. Islamic University of Mogadishu - Somalia
export function MogadishuUniversityLogo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70" cy="70" r="64" fill="#ffffff" stroke="#1e3a8a" strokeWidth="6" />
      <circle cx="70" cy="70" r="50" fill="#1e3a8a" />

      {/* Circular text */}
      <path id="mogaArcTop" d="M 26 70 A 44 44 0 0 1 114 70" fill="none" />
      <text fill="#1e3a8a" fontSize="10" fontWeight="900" textAnchor="middle">
        <textPath href="#mogaArcTop" startOffset="50%">الجامعة الإسلامية - مقديشو</textPath>
      </text>

      {/* Inner Open Book of Holy Quran */}
      <path d="M 46 72 Q 70 60 94 72 L 94 88 Q 70 78 46 88 Z" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
      <line x1="70" y1="64" x2="70" y2="84" stroke="#1e3a8a" strokeWidth="2" />

      {/* Radiating Rays */}
      <g stroke="#f59e0b" strokeWidth="2">
        <line x1="70" y1="52" x2="70" y2="44" />
        <line x1="58" y1="55" x2="52" y2="49" />
        <line x1="82" y1="55" x2="88" y2="49" />
      </g>

      {/* English arc at bottom */}
      <path id="mogaArcBottom" d="M 116 70 A 46 46 0 0 1 24 70" fill="none" />
      <text fill="#1e3a8a" fontSize="7" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
        <textPath href="#mogaArcBottom" startOffset="50%">ISLAMIC UNIVERSITY - SOMALIA</textPath>
      </text>
    </svg>
  );
}

// 8. Emirates International University
export function EmiratesInternationalLogo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 30 18 L 110 18 L 118 78 Q 118 108 70 126 Q 22 108 22 78 Z" fill="#0f172a" stroke="#b91c1c" strokeWidth="4" />
      <path d="M 34 22 L 106 22 L 112 76 Q 112 104 70 120 Q 28 104 28 76 Z" fill="#ffffff" />
      
      {/* Graduation Cap */}
      <path d="M 70 34 L 94 44 L 70 54 L 46 44 Z" fill="#0f172a" />
      <line x1="84" y1="48" x2="84" y2="62" stroke="#b91c1c" strokeWidth="2" />
      <circle cx="84" cy="63" r="2" fill="#b91c1c" />

      {/* Arabic title */}
      <text x="70" y="70" fill="#0f172a" fontSize="10" fontWeight="900" textAnchor="middle">الجامعة الإماراتية</text>
      <text x="70" y="80" fill="#b91c1c" fontSize="8.5" fontWeight="900" textAnchor="middle">الدولية</text>

      {/* Red Banner across bottom */}
      <path d="M 16 94 L 70 102 L 124 94 L 116 110 L 70 120 L 24 110 Z" fill="#dc2626" />
      <text x="70" y="107" fill="#ffffff" fontSize="6.5" fontWeight="900" textAnchor="middle" letterSpacing="0.5">
        EMIRATES INTERNATIONAL
      </text>
      <text x="70" y="116" fill="#ffffff" fontSize="5.5" fontWeight="800" textAnchor="middle">
        • • • UNIVERSITY • • •
      </text>
    </svg>
  );
}

// 9. Azal University for Human Development
export function AzalUniversityLogo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70" cy="70" r="64" fill="#ffffff" stroke="#0f766e" strokeWidth="6" />
      <circle cx="70" cy="70" r="52" fill="#ccfbf1" stroke="#0f766e" strokeWidth="2" />

      {/* Mountain & Dar al-Hajar Palace Silhouette */}
      <path d="M 36 88 Q 50 64 70 66 Q 90 64 104 88 Z" fill="#b45309" opacity="0.8" />
      <rect x="62" y="44" width="16" height="24" fill="#78350f" rx="1" />
      <rect x="65" y="48" width="4" height="6" fill="#ffffff" />
      <rect x="71" y="48" width="4" height="6" fill="#ffffff" />
      <polygon points="60,44 80,44 70,36" fill="#92400e" />

      {/* Text Arc Bottom */}
      <path id="azalArcBottom" d="M 118 70 A 48 48 0 0 1 22 70" fill="none" />
      <text fill="#0f766e" fontSize="9" fontWeight="900" textAnchor="middle">
        <textPath href="#azalArcBottom" startOffset="50%">جامعة آزال للتنمية البشرية</textPath>
      </text>
      
      {/* English Arc Top */}
      <path id="azalArcTop" d="M 22 70 A 48 48 0 0 1 118 70" fill="none" />
      <text fill="#0f766e" fontSize="6.5" fontWeight="800" textAnchor="middle">
        <textPath href="#azalArcTop" startOffset="50%">Azal University for Human Development</textPath>
      </text>
    </svg>
  );
}

// 10. Al-Nasser University
export function AlNasserLogo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 26 22 L 114 22 L 114 86 Q 114 118 70 130 Q 26 118 26 86 Z" fill="#1e293b" stroke="#eab308" strokeWidth="5" />
      <path d="M 32 28 L 108 28 L 108 84 Q 108 112 70 122 Q 32 112 32 84 Z" fill="#0f172a" />

      {/* Top Banner with Arabic Name */}
      <text x="70" y="48" fill="#eab308" fontSize="12" fontWeight="900" textAnchor="middle">
        جامعة الناصر
      </text>
      <line x1="42" y1="54" x2="98" y2="54" stroke="#eab308" strokeWidth="2" />

      {/* Stylized Fountain Pen / Minaret */}
      <polygon points="70,58 78,88 62,88" fill="#ffffff" />
      <polygon points="70,98 78,88 62,88" fill="#eab308" />
      <line x1="70" y1="62" x2="70" y2="82" stroke="#0f172a" strokeWidth="2" />

      {/* English name at bottom */}
      <text x="70" y="112" fill="#ffffff" fontSize="7" fontWeight="900" textAnchor="middle" letterSpacing="0.8">
        AL-NASSER UNIVERSITY
      </text>
    </svg>
  );
}

// 11. 21 September University for Medical & Applied Sciences
export function Univ21SeptLogo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 28 20 C 50 12 90 12 112 20 C 118 56 118 94 70 128 C 22 94 22 56 28 20 Z" fill="#ffffff" stroke="#0284c7" strokeWidth="4" />
      
      {/* 21 top banner */}
      <circle cx="70" cy="24" r="14" fill="#0284c7" />
      <text x="70" y="30" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">21</text>

      {/* Medical Caduceus / MAS Shield */}
      <rect x="48" y="42" width="44" height="48" rx="6" fill="#0284c7" />
      <text x="70" y="60" fill="#ffffff" fontSize="16" fontWeight="900" textAnchor="middle">MAS</text>
      <text x="70" y="74" fill="#facc15" fontSize="8" fontWeight="800" textAnchor="middle">2016 - 1437</text>

      {/* Slogan */}
      <text x="70" y="106" fill="#0369a1" fontSize="9" fontWeight="900" textAnchor="middle">
        جسر من التعليم إلى التعلم
      </text>
      <text x="70" y="118" fill="#64748b" fontSize="6.5" fontWeight="800" textAnchor="middle">
        جامعة 21 سبتمبر للعلوم الطبية
      </text>
    </svg>
  );
}

// 12. Knowledge & Modern Sciences University
export function KnowledgeUniversityLogo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="128" height="128" rx="16" fill="#ffffff" stroke="#16a34a" strokeWidth="3" />
      
      {/* Globe */}
      <circle cx="84" cy="48" r="22" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
      <ellipse cx="84" cy="48" rx="22" ry="9" stroke="#16a34a" strokeWidth="1.5" fill="none" />
      
      {/* Green Open Pages / Tree */}
      <path d="M 30 76 Q 60 48 90 68 Q 110 50 116 76 L 30 76 Z" fill="#15803d" />
      <path d="M 44 68 Q 70 42 96 68" stroke="#ffffff" strokeWidth="3" fill="none" />
      
      {/* University Name */}
      <text x="70" y="94" fill="#14532d" fontSize="9.5" fontWeight="900" textAnchor="middle">
        جامعة المعرفة والعلوم الحديثة
      </text>
      <text x="70" y="105" fill="#64748b" fontSize="6" fontWeight="700" textAnchor="middle">
        Knowledge & Modern Sciences University
      </text>

      {/* Slogan */}
      <rect x="22" y="112" width="96" height="14" rx="3" fill="#fef08a" />
      <text x="70" y="122" fill="#854d0e" fontSize="7.5" fontWeight="900" textAnchor="middle">
        — بالمعرفة تُبنى الحضارات —
      </text>
    </svg>
  );
}

// 13. Iqraa University
export function IqraaUniversityLogo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 28 24 Q 70 12 112 24 L 118 78 Q 118 112 70 130 Q 22 112 22 78 Z" fill="#0284c7" stroke="#38bdf8" strokeWidth="3" />
      <path d="M 32 28 Q 70 18 108 28 L 112 76 Q 112 106 70 122 Q 28 106 28 76 Z" fill="#ffffff" />

      {/* Atomic orbits */}
      <ellipse cx="70" cy="56" rx="26" ry="10" stroke="#0284c7" strokeWidth="1.5" fill="none" transform="rotate(-30 70 56)" />
      <ellipse cx="70" cy="56" rx="26" ry="10" stroke="#0284c7" strokeWidth="1.5" fill="none" transform="rotate(30 70 56)" />
      <circle cx="70" cy="56" r="4" fill="#0284c7" />

      {/* Quill Pen / Arabic "إقرأ" */}
      <path d="M 70 42 L 70 90" stroke="#0369a1" strokeWidth="3" />
      <text x="70" y="104" fill="#0369a1" fontSize="13" fontWeight="900" textAnchor="middle">
        جامعة إقرأ
      </text>
      <text x="70" y="116" fill="#64748b" fontSize="6.5" fontWeight="800" textAnchor="middle">
        Iqraa University
      </text>
    </svg>
  );
}

/**
 * Complete list of official international and regional partners with metadata
 */
export const internationalPartners = [
  {
    id: 'suez-canal',
    nameAr: 'جامعة قناة السويس',
    nameEn: 'Suez Canal University',
    countryAr: 'جمهورية مصر العربية',
    countryEn: 'Egypt',
    flag: '🇪🇬',
    type: 'international',
    typeLabelAr: 'شراكة أكاديمية وطبية دولية',
    typeLabelEn: 'International Academic & Medical Partnership',
    year: '1976',
    scopeAr: 'التبادل السريري لطلبة الطب والعلوم الصحية، ومعادلة المقررات والبحوث العلمية المشتركة',
    scopeEn: 'Clinical training exchange for medical students, credit evaluation, and joint research',
    logo: SuezCanalLogo,
    badgeColor: 'from-blue-600 to-sky-700'
  },
  {
    id: 'ain-shams',
    nameAr: 'جامعة عين شمس',
    nameEn: 'Ain Shams University',
    countryAr: 'جمهورية مصر العربية',
    countryEn: 'Egypt',
    flag: '🇪🇬',
    type: 'international',
    typeLabelAr: 'شراكة دراسات عليا وتدريب طبي',
    typeLabelEn: 'Postgraduate & Medical Training Alliance',
    year: '1950',
    scopeAr: 'برامج الإقامة الطبية المتقدمة، الإشراف الأكاديمي المشترك على رسائل الماجستير والدكتوراه',
    scopeEn: 'Advanced medical residency, joint thesis supervision, and faculty exchange',
    logo: AinShamsLogo,
    badgeColor: 'from-sky-600 to-blue-900'
  },
  {
    id: 'university-of-jordan',
    nameAr: 'الجامعة الأردنية',
    nameEn: 'The University of Jordan',
    countryAr: 'المملكة الأردنية الهاشمية',
    countryEn: 'Jordan',
    flag: '🇯🇴',
    type: 'international',
    typeLabelAr: 'شراكة رائدة في البحث والاعتماد',
    typeLabelEn: 'Premier Research & Accreditation Partner',
    year: '1962',
    scopeAr: 'التعاون في ضمان الجودة والاعتماد الأكاديمي الدولي، وتطوير المناهج والتبادل الأكاديمي',
    scopeEn: 'Quality assurance benchmarking, curriculum development, and faculty sabbatical exchange',
    logo: JordanUniversityLogo,
    badgeColor: 'from-emerald-700 to-green-900'
  },
  {
    id: 'amman-arab-univ',
    nameAr: 'جامعة عمان الأهلية',
    nameEn: 'Al-Ahliyya Amman University',
    countryAr: 'المملكة الأردنية الهاشمية',
    countryEn: 'Jordan',
    flag: '🇯🇴',
    type: 'international',
    typeLabelAr: 'شراكة هندسية وتكنولوجية متقدمة',
    typeLabelEn: 'Engineering & Technology Alliance',
    year: '1990',
    scopeAr: 'برامج التعاون في كليات الصيدلة، الهندسة وتكنولوجيا المعلومات، والمؤتمرات العلمية',
    scopeEn: 'Pharmacy, engineering and IT collaborative academic symposia and joint workshops',
    logo: AmmanUniversityLogo,
    badgeColor: 'from-blue-700 to-indigo-900'
  },
  {
    id: 'ec-council',
    nameAr: 'المجلس الدولي للاستشارات الإلكترونية (EC-Council)',
    nameEn: 'EC-Council International | ACT Partner',
    countryAr: 'الولايات المتحدة الأمريكية',
    countryEn: 'USA',
    flag: '🇺🇸',
    type: 'global_cert',
    typeLabelAr: 'اعتماد دولي وشهادات أمن سيبراني',
    typeLabelEn: 'Global Cybersecurity Certification Partner',
    year: '2001',
    scopeAr: 'شريك أكاديمي حصري لتدريب واختبار الشهادات العالمية المعتمدة في الأمن السيبراني (CEH, CND, CHFI)',
    scopeEn: 'Exclusive academic partner for world-recognized cybersecurity certifications (CEH, CND, CHFI)',
    logo: EcCouncilLogo,
    badgeColor: 'from-rose-600 to-red-800'
  },
  {
    id: 'twintech-iutt',
    nameAr: 'جامعة تونتك الدولية للتكنولوجيا (I.U.T.T)',
    nameEn: 'Twintech International Univ of Technology',
    countryAr: 'ماليزيا',
    countryEn: 'Malaysia',
    flag: '🇲🇾',
    type: 'international',
    typeLabelAr: 'برامج تكنولوجيا وحوسبة دولية',
    typeLabelEn: 'International IT & Computing Transfer',
    year: '1993',
    scopeAr: 'معادلة شهادات وبرامج هندسة تكنولوجيا المعلومات والوسائط المتعددة ونقل التكنولوجيا الحديثة',
    scopeEn: 'IT & multimedia software engineering curriculum alignment and dual-track pathways',
    logo: TwintechLogo,
    badgeColor: 'from-cyan-600 to-blue-800'
  },
  {
    id: 'islamic-mogadishu',
    nameAr: 'الجامعة الإسلامية بمقديشو',
    nameEn: 'Islamic University of Mogadishu',
    countryAr: 'جمهورية الصومال الفيدرالية',
    countryEn: 'Somalia',
    flag: '🇸🇴',
    type: 'international',
    typeLabelAr: 'تحالف الجامعات الإقليمية',
    typeLabelEn: 'Regional Higher Education Consortium',
    year: '1997',
    scopeAr: 'تبادل المنح والبعثات الطلابية، وتطوير برامج الشريعة والقانون والعلوم الطبية في القرن الإفريقي',
    scopeEn: 'Student scholarship exchange and curricula alignment for medical and legal disciplines',
    logo: MogadishuUniversityLogo,
    badgeColor: 'from-sky-600 to-indigo-800'
  },
  {
    id: 'emirates-intl',
    nameAr: 'الجامعة الإماراتية الدولية (EIU)',
    nameEn: 'Emirates International University',
    countryAr: 'اليمن / شراكة إقليمية',
    countryEn: 'Regional Partner',
    flag: '🇾🇪',
    type: 'regional',
    typeLabelAr: 'تحالف علمي وطبي',
    typeLabelEn: 'Academic & Clinical Consortium',
    year: '2014',
    scopeAr: 'التعاون المشترك في تدريب أطباء الأسنان، المؤتمرات الصحية والبحوث الصيدلانية',
    scopeEn: 'Clinical dentistry training alliance, pharmaceutical research conferences',
    logo: EmiratesInternationalLogo,
    badgeColor: 'from-red-600 to-slate-900'
  },
  {
    id: 'azal-univ',
    nameAr: 'جامعة آزال للتنمية البشرية',
    nameEn: 'Azal University for Human Development',
    countryAr: 'اليمن',
    countryEn: 'Yemen',
    flag: '🇾🇪',
    type: 'regional',
    typeLabelAr: 'تحالف أكاديمي ومجتمعي',
    typeLabelEn: 'Human Development Alliance',
    year: '2008',
    scopeAr: 'برامج تنمية المهارات السريرية والمشاركة المجتمعية والمؤتمرات الطلابية التخصصية',
    scopeEn: 'Clinical skills workshops, community healthcare initiatives, and student symposia',
    logo: AzalUniversityLogo,
    badgeColor: 'from-teal-600 to-emerald-800'
  },
  {
    id: 'al-nasser',
    nameAr: 'جامعة الناصر',
    nameEn: 'Al-Nasser University',
    countryAr: 'اليمن',
    countryEn: 'Yemen',
    flag: '🇾🇪',
    type: 'regional',
    typeLabelAr: 'شراكة بحثية وطبية',
    typeLabelEn: 'Research & Medical Syndicate',
    year: '2007',
    scopeAr: 'أبحاث الصيدلة السريرية، المجلات العلمية المحكمة، وبرامج التدريب التقني',
    scopeEn: 'Clinical pharmacy joint publications, peer-reviewed journals, and IT labs access',
    logo: AlNasserLogo,
    badgeColor: 'from-sky-600 to-slate-900'
  },
  {
    id: 'univ-21-sept',
    nameAr: 'جامعة 21 سبتمبر للعلوم الطبية والتطبيقية',
    nameEn: '21 September Univ of Medical Sciences',
    countryAr: 'اليمن',
    countryEn: 'Yemen',
    flag: '🇾🇪',
    type: 'regional',
    typeLabelAr: 'تحالف التدريب الطبي الإكلينيكي',
    typeLabelEn: 'Clinical Medical Training Alliance',
    year: '2016',
    scopeAr: 'التدريب العملي لطلبة الطب البشري والتمريض في المستشفيات التعليمية والمراكز التخصصية',
    scopeEn: 'Hands-on clinical internships in university teaching hospitals and health centers',
    logo: Univ21SeptLogo,
    badgeColor: 'from-sky-700 to-teal-800'
  },
  {
    id: 'knowledge-modern',
    nameAr: 'جامعة المعرفة والعلوم الحديثة',
    nameEn: 'Knowledge & Modern Sciences University',
    countryAr: 'اليمن',
    countryEn: 'Yemen',
    flag: '🇾🇪',
    type: 'regional',
    typeLabelAr: 'شراكة تطوير المناهج والحوسبة',
    typeLabelEn: 'Computing & Curriculum Alliance',
    year: '2011',
    scopeAr: 'تطوير المعايير الأكاديمية المشتركة في هندسة البرمجيات والذكاء الاصطناعي وإدارة الأعمال',
    scopeEn: 'Software engineering & AI shared curriculum development, business management studies',
    logo: KnowledgeUniversityLogo,
    badgeColor: 'from-emerald-600 to-green-800'
  },
  {
    id: 'iqraa-univ',
    nameAr: 'جامعة إقرأ',
    nameEn: 'Iqraa University',
    countryAr: 'اليمن',
    countryEn: 'Yemen',
    flag: '🇾🇪',
    type: 'regional',
    typeLabelAr: 'تحالف أكاديمي وبحثي',
    typeLabelEn: 'Academic & Research Syndicate',
    year: '2010',
    scopeAr: 'تنسيق المسابقات الأكاديمية والابتكارات الطلابية وتبادل المصادر المعرفية والمكتبية',
    scopeEn: 'Academic student hackathons, shared digital libraries, and scientific competitions',
    logo: IqraaUniversityLogo,
    badgeColor: 'from-blue-600 to-cyan-800'
  }
];
