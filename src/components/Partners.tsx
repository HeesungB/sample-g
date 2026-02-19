'use client';

import React from 'react';

const Partners = () => {
  const categories = [
    { name: 'Main Partners', duration: 30, reverse: false },
    { name: 'Media Partners', duration: 40, reverse: true },
    { name: 'Community Partners', duration: 35, reverse: false },
  ];

  // 로고 리스트
  const partnerLogos = [
    '/partner-01.svg',
    '/partner-02.svg',
    '/partner-03.svg',
    '/partner-elixi.svg',
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="hanok-pattern-partners" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hanok-pattern-partners)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-secondary">Our <span className="text-primary italic">Partners</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">The organizations making Korea Buidl Week possible.</p>
        </div>

        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="mb-12 last:mb-0">
            <div className="relative flex overflow-hidden py-4">
              {/* Fade masks */}
              <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
              <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-white via-white/90 to-transparent z-10"></div>

              <div
                className="flex items-center will-change-transform"
                style={{
                  animation: `${cat.reverse ? 'scroll-right' : 'scroll-left'} ${cat.duration}s linear infinite`,
                }}
              >
                {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center grayscale opacity-40 hover:opacity-100 transition-all shrink-0 mx-8 md:mx-16"
                  >
                    <img
                      src={logo}
                      alt="Partner Logo"
                      className={`w-auto object-contain brightness-0 ${
                        logo.includes('03') ? 'h-5 md:h-8' : logo.includes('elixi') ? 'h-6 md:h-10' : 'h-8 md:h-14'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Partners;
