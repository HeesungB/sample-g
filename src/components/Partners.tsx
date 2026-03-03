'use client';

import React from 'react';

const Partners = ({ animated = false }: { animated?: boolean }) => {
  const partnerLogos: { src: string; h: string }[] = [
    { src: '/partner-01.svg', h: 'h-8 md:h-12' },
    { src: '/partner-02.svg', h: 'h-8 md:h-12' },
    { src: '/partner-03.svg', h: 'h-5 md:h-7' },
    { src: '/partner-ludium.svg', h: 'h-8 md:h-12' },
    { src: '/partner-arkpoint.svg', h: 'h-6 md:h-8' },
    { src: '/partner-kryptoplanet.svg', h: 'h-8 md:h-12' },
    { src: '/partner-xangle.svg', h: 'h-6 md:h-8' },
    { src: '/partner-formula-labs.svg', h: 'h-6 md:h-8' },
    { src: '/partner-catalyze.svg', h: 'h-8 md:h-12' },
    { src: '/prize-bnb-chain.svg', h: 'h-6 md:h-9' },
    { src: '/prize-status-network.png', h: 'h-6 md:h-9' },
    { src: '/prize-near-ai.webp', h: 'h-3.5 md:h-6' },
    { src: '/prize-ygg-play.svg', h: 'h-7 md:h-11' },
    { src: '/prize-verse8.png', h: 'h-4 md:h-6' },
  ];

  const categories = [
    { name: 'Main Partners', duration: 43, reverse: false },
    { name: 'Media Partners', duration: 57, reverse: true },
    { name: 'Community Partners', duration: 50, reverse: false },
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

        {animated ? (
          categories.map((cat, catIdx) => (
            <div key={catIdx} className="mb-12 last:mb-0">
              <div className="relative flex overflow-hidden py-4">
                <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-white via-white/90 to-transparent z-10"></div>

                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    className="flex shrink-0 items-center will-change-transform"
                    style={{
                      animation: `${cat.reverse ? 'scroll-right' : 'scroll-left'} ${cat.duration}s linear infinite`,
                    }}
                    aria-hidden={copy === 1 ? true : undefined}
                  >
                    {partnerLogos.map((logo, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center brightness-0 opacity-40 hover:opacity-100 transition-all shrink-0 mx-8 md:mx-16"
                      >
                        <img
                          src={logo.src}
                          alt="Partner Logo"
                          className={`w-auto object-contain ${logo.h}`}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="space-y-10 md:space-y-12">
            {[
              partnerLogos.slice(0, 4),
              partnerLogos.slice(4, 8),
              partnerLogos.slice(8, 11),
              partnerLogos.slice(11, 14),
            ].map((row, ri) => (
              <div key={ri} className="flex items-center justify-center gap-x-12 md:gap-x-20">
                {row.map((logo, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center brightness-0 opacity-40 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={logo.src}
                      alt="Partner Logo"
                      className={`w-auto object-contain ${logo.h}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
