import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Globe, Award, CheckCircle2, ShieldCheck, ExternalLink, Building2, ArrowUpRight } from 'lucide-react';
import { internationalPartners } from '../data/partnersData';

/**
 * Interactive Partners Carousel matching the exact section on ust.edu.ye/ar/
 * "الشركاء الدوليون لجامعة العلوم والتكنولوجيا في اليمن"
 */
export function InternationalPartnersCarousel({ 
  onOpenPartnerAd, 
  isAr = true, 
  inModal = false,
  id = "international-partners-section" 
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = inModal ? 3 : 4;
  const totalPages = inModal 
    ? Math.ceil(internationalPartners.length / 3) 
    : Math.ceil(internationalPartners.length / 4);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, inModal ? 6000 : 5000);
    return () => clearInterval(timer);
  }, [totalPages, inModal]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  // In modal mode, circular wrap ensures every single slide has exactly 3 partners without lonely cards
  const currentPartners = inModal
    ? Array.from({ length: 3 }).map((_, i) => internationalPartners[(currentPage * 3 + i) % internationalPartners.length])
    : internationalPartners.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

  return (
    <div 
      id={id}
      className={inModal ? "w-full py-1 relative select-none" : "w-full mt-16 pt-12 border-t border-primary/15 relative scroll-mt-24 select-none"}
    >
      {/* Title */}
      <div className={inModal ? "text-center mb-2.5" : "text-center mb-10"}>
        <div className={inModal ? "inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-black mb-1" : "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black mb-2.5"}>
          <Globe className={inModal ? "w-3.5 h-3.5 text-accent" : "w-4 h-4 text-accent"} />
          <span>{isAr ? 'علاقات دولية واعتمادات أكاديمية' : 'Global Relations & Academic Accreditations'}</span>
        </div>
        <h3 className={inModal ? "text-base sm:text-lg md:text-xl font-extrabold text-primary tracking-tight" : "text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight"}>
          {isAr ? 'الشركاء الدوليون لجامعة العلوم والتكنولوجيا في اليمن' : 'International Partners of UST Yemen'}
        </h3>
        <p className={inModal ? "text-[11px] sm:text-xs font-semibold text-primary-dark/60 mt-0.5 max-w-lg mx-auto" : "text-xs sm:text-sm font-semibold text-primary-dark/60 mt-1.5 max-w-xl mx-auto"}>
          {isAr
            ? 'شبكة شراكات واتفاقيات توأمة أكاديمية وتدريب سريري مع كبرى الجامعات والمؤسسات العالمية'
            : 'Academic twinning agreements, clinical training, and dual-track alliances with prestigious institutions'}
        </p>
      </div>

      {/* Carousel Container with Green Circular Buttons */}
      <div className={inModal ? "relative w-full mx-auto px-4 sm:px-11" : "relative max-w-6xl mx-auto px-4 sm:px-12"}>
        {/* Previous Button (Green Circle) */}
        <button
          onClick={handlePrev}
          aria-label="Previous partners"
          className={inModal 
            ? "absolute rtl:right-0 ltr:left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#15803d] hover:bg-[#166534] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            : "absolute rtl:right-0 ltr:left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#15803d] hover:bg-[#166534] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          }
        >
          {isAr ? <ChevronRight className={inModal ? "w-5 h-5 stroke-[2.5]" : "w-6 h-6 stroke-[2.5]"} /> : <ChevronLeft className={inModal ? "w-5 h-5 stroke-[2.5]" : "w-6 h-6 stroke-[2.5]"} />}
        </button>

        {/* Partner Cards Grid (3 per page in modal, 4 on main page) */}
        <div className={inModal ? "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 py-1" : "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-2"}>
          {currentPartners.map((partner, index) => {
            const LogoComponent = partner.logo;
            return (
              <motion.div
                key={`${partner.id}-${index}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                onClick={() => onOpenPartnerAd && onOpenPartnerAd(partner)}
                className={`group relative bg-white/45 hover:bg-white/65 backdrop-blur-2xl ${
                  inModal ? 'rounded-[32px] sm:rounded-[36px] p-3.5 sm:p-4 min-h-[210px]' : 'rounded-[46px] sm:rounded-[52px] p-5 sm:p-5.5 min-h-[255px]'
                } border-2 border-white/70 hover:border-white shadow-[0_12px_30px_rgba(11,59,96,0.06)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.2)] transition-all duration-500 flex flex-col items-center justify-between cursor-pointer text-center overflow-hidden hover:-translate-y-1`}
              >
                {/* Concentric Inner Outline Ring (Stadium Oval Capsule Aesthetic) */}
                <div className={`absolute ${
                  inModal ? 'inset-1.5 rounded-[26px] sm:rounded-[30px]' : 'inset-1.5 sm:inset-2 rounded-[38px] sm:rounded-[44px]'
                } border border-white/50 pointer-events-none group-hover:border-white/80 transition-colors z-0`} />

                {/* Country Flag & Year Badge */}
                <div className="relative z-10 w-full flex items-center justify-between text-xs font-bold px-1">
                  <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/50 backdrop-blur-md border border-white/70 text-slate-700 text-[10px] sm:text-[11px] font-bold shadow-2xs">
                    <span>{partner.flag}</span>
                    <span className="hidden sm:inline">{isAr ? partner.countryAr.split(' ')[0] : partner.countryEn}</span>
                  </span>
                  <span className="text-[10px] font-black text-primary bg-white/50 backdrop-blur-md border border-white/70 px-2.5 py-0.5 rounded-full shadow-2xs">
                    {partner.year}
                  </span>
                </div>

                {/* Logo Area (Circular Frame with Ambient Backlight) */}
                <div className={`relative z-10 ${
                  inModal ? 'mt-1 mb-1.5 w-16 h-16 sm:w-18 sm:h-18 p-2' : 'mt-2 mb-2 w-20 h-20 sm:w-22 sm:h-22 p-3'
                } rounded-full bg-white/60 backdrop-blur-md border-2 border-white/80 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <LogoComponent className={inModal ? "max-h-10 sm:max-h-11 max-w-full object-contain drop-shadow-xs" : "max-h-14 max-w-full object-contain drop-shadow-xs"} />
                </div>

                {/* Partner Name */}
                <div className="relative z-10 w-full px-1">
                  <h4 className="text-xs sm:text-sm font-black text-primary-dark group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {isAr ? partner.nameAr : partner.nameEn}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-bold mt-0.5 line-clamp-1">
                    {isAr ? partner.typeLabelAr : partner.typeLabelEn}
                  </p>
                </div>

                {/* Hover Pill Indicator */}
                <div className={`relative z-10 ${inModal ? 'mt-1.5' : 'mt-2.5'} w-full`}>
                  <div className="py-1 px-3 rounded-full bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 text-[10.5px] font-extrabold shadow-2xs">
                    <span>{isAr ? 'تفاصيل الشراكة' : 'Partnership Details'}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Next Button (Green Circle) */}
        <button
          onClick={handleNext}
          aria-label="Next partners"
          className={inModal
            ? "absolute rtl:left-0 ltr:right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#15803d] hover:bg-[#166534] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            : "absolute rtl:left-0 ltr:right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#15803d] hover:bg-[#166534] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          }
        >
          {isAr ? <ChevronLeft className={inModal ? "w-5 h-5 stroke-[2.5]" : "w-6 h-6 stroke-[2.5]"} /> : <ChevronRight className={inModal ? "w-5 h-5 stroke-[2.5]" : "w-6 h-6 stroke-[2.5]"} />}
        </button>
      </div>

      {/* Pagination Dots */}
      <div className={inModal ? "flex items-center justify-center gap-1.5 mt-2.5" : "flex items-center justify-center gap-2 mt-6"}>
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentPage === idx ? (inModal ? 'w-6 bg-[#15803d]' : 'w-8 bg-[#15803d]') : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
            title={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Rich, eye-catching announcement content for International Partnerships
 * Displayed inside the Popup Modal when clicking the 4th stat or any partner card
 */
export function InternationalPartnersModalContent({ isAr = true, highlightedPartner = null }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterTabs = [
    { id: 'all', labelAr: 'جميع الشركاء والاعتمادات', labelEn: 'All Partners', count: internationalPartners.length },
    { id: 'egypt-jordan', labelAr: 'مصر والأردن 🇪🇬 🇯🇴', labelEn: 'Egypt & Jordan', count: 4 },
    { id: 'global', labelAr: 'الاعتمادات الدولية 🇺🇸 🇲🇾', labelEn: 'Global & Tech', count: 2 },
    { id: 'regional', labelAr: 'التحالفات الإقليمية والطبية 🇸🇴 🇾🇪', labelEn: 'Regional & Clinical', count: 7 },
  ];

  const filteredPartners = internationalPartners.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'egypt-jordan') return p.countryAr.includes('مصر') || p.countryAr.includes('الأردن');
    if (selectedFilter === 'global') return p.countryAr.includes('أمريكا') || p.countryAr.includes('ماليزيا');
    if (selectedFilter === 'regional') return p.countryAr.includes('الصومال') || p.countryAr.includes('اليمن');
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Eye-catching Promotional Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary-dark to-slate-900 text-white p-5 sm:p-6 shadow-xl border border-accent/30">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 rounded-full bg-accent/20 blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-primary-dark text-xs font-black">
              <Award className="w-3.5 h-3.5" />
              <span>{isAr ? 'اتفاقيات واعتمادات عالمية رسمية' : 'Official Global Agreements'}</span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-white">
              {isAr
                ? 'أكثر من 35 اتفاقية توأمة وشراكة أكاديمية وبحثية وسريرية حول العالم'
                : 'Over 35 Academic, Research & Clinical Twinning Agreements Worldwide'}
            </h4>
            <p className="text-xs text-slate-200 leading-relaxed max-w-xl">
              {isAr
                ? 'تتيح لطلبة جامعة العلوم والتكنولوجيا فرص التدريب السريري، استكمال الدراسات العليا، والشهادات الاحترافية العالمية في الأمن السيبراني والذكاء الاصطناعي.'
                : 'Empowering UST students with clinical rotations, postgraduate pathways, and global IT cybersecurity certifications.'}
            </p>
          </div>
          
          <div className="shrink-0 flex sm:flex-col items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 text-center min-w-[130px]">
            <span className="text-2xl sm:text-3xl font-black text-accent font-mono">+35</span>
            <span className="text-[11px] font-bold text-slate-100">{isAr ? 'شريكاً معتمداً' : 'Accredited Partners'}</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedFilter === tab.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>{isAr ? tab.labelAr : tab.labelEn}</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
              selectedFilter === tab.id ? 'bg-accent text-primary-dark font-black' : 'bg-slate-200 text-slate-700'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Partner Logos Showcase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredPartners.map((partner) => {
          const LogoComponent = partner.logo;
          const isHighlighted = highlightedPartner && highlightedPartner.id === partner.id;

          return (
            <div
              key={partner.id}
              className={`relative rounded-[30px] sm:rounded-[34px] p-5 border-2 transition-all flex flex-col justify-between bg-white overflow-hidden ${
                isHighlighted
                  ? 'border-sky-400 ring-2 ring-sky-300/40 shadow-lg bg-sky-50/40'
                  : 'border-slate-200/90 hover:border-primary/40 hover:shadow-lg'
              }`}
            >
              {/* Concentric inner border */}
              <div className="absolute inset-1.5 rounded-[26px] sm:rounded-[28px] border border-primary/10 pointer-events-none z-0" />

              {/* Card Header: Flag & Type */}
              <div className="relative z-10 flex items-center justify-between mb-3 text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 font-bold text-slate-800 text-[11px]">
                  <span>{partner.flag}</span>
                  <span>{isAr ? partner.countryAr : partner.countryEn}</span>
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-primary/10 text-primary">
                  {partner.year}
                </span>
              </div>

              {/* Logo in dedicated frame */}
              <div className="h-20 w-full flex items-center justify-center p-2 mb-2 bg-slate-50/70 rounded-xl border border-slate-100">
                <LogoComponent className="max-h-16 max-w-full object-contain" />
              </div>

              {/* Title & Scope */}
              <div className="space-y-1.5 mt-2">
                <h5 className="text-xs sm:text-sm font-black text-primary-dark leading-tight">
                  {isAr ? partner.nameAr : partner.nameEn}
                </h5>
                <p className="text-[11px] font-bold text-accent-dark">
                  {isAr ? partner.typeLabelAr : partner.typeLabelEn}
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">
                  {isAr ? partner.scopeAr : partner.scopeEn}
                </p>
              </div>

              {/* Verified Badge Footer */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-500">
                <span className="inline-flex items-center gap-1 text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{isAr ? 'اتفاقية سارية ومعتمدة' : 'Active Agreement'}</span>
                </span>
                <span className="font-mono text-slate-400">#UST_Partner</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Accreditations & Key Benefits Grid */}
      <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-primary/10 space-y-3">
        <h5 className="text-xs font-black text-primary uppercase tracking-wider flex items-center gap-2">
          <Award className="w-4 h-4 text-accent" />
          <span>{isAr ? 'مزايا اتفاقيات الشراكة والتوأمة للطلاب والخريجين:' : 'Key Partnership Benefits for Students:'}</span>
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-primary-dark/80">
          <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
            <span>{isAr ? 'فرص تدريب إكلينيكي وسريري في مستشفيات جامعة عين شمس وقناة السويس' : 'Clinical training opportunities at Egyptian university hospitals'}</span>
          </div>
          <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
            <span>{isAr ? 'شهادات مهنية دولية معتمدة في الأمن السيبراني بالشراكة مع EC-Council USA' : 'Internationally recognized cybersecurity certifications with EC-Council'}</span>
          </div>
          <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
            <span>{isAr ? 'معادلة المقررات وسهولة قبول الدراسات العليا في الجامعة الأردنية وعمان' : 'Course equivalency and streamlined postgraduate admission in Jordan'}</span>
          </div>
          <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
            <span>{isAr ? 'إشراف أكاديمي وبحثي مشترك على مشاريع التخرج وأطروحات الماجستير' : 'Joint academic supervision for graduation projects and Master theses'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
