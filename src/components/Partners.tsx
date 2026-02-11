'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const categories = [
    { name: 'Main Partners', duration: 15, reverse: false },
    { name: 'Media Partners', duration: 22, reverse: true },
    { name: 'Community Partners', duration: 18, reverse: false },
  ];

  // 로고 리스트
  const partnerLogos = [
    '/partner-01.svg',
    '/partner-02.svg',
    '/partner-03.svg',
  ];

  // 끊김 없는 루프를 위해 로고 배열을 충분히 반복 (Double for the 50% loop logic)
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];

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
            <h3 className="text-center text-[10px] font-bold text-gray-300 uppercase tracking-[0.5em] mb-8">{cat.name}</h3>
            
            <div className="relative flex overflow-hidden py-4">
              {/* Fade masks */}
              <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
              <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-white via-white/90 to-transparent z-10"></div>

              <motion.div
                className="flex items-center gap-16 md:gap-32"
                animate={{ x: cat.reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: cat.duration,
                    ease: "linear",
                  },
                }}
                style={{ width: 'max-content' }}
              >
                {/* 
                  로고들을 펼쳐서 나열. 
                  동일한 세트를 두 번 이상 반복하고 -50%로 이동하면 
                  첫 번째 세트의 끝과 두 번째 세트의 시작이 완벽히 맞물림.
                */}
                {duplicatedLogos.map((logo, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center grayscale opacity-40 hover:opacity-100 transition-all shrink-0"
                  >
                    <img 
                      src={logo} 
                      alt="Partner Logo" 
                      className={`w-auto object-contain brightness-0 ${
                        logo.includes('03') ? 'h-5 md:h-8' : 'h-8 md:h-14'
                      }`} 
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
