'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

type PartnerLogo = { src: string; h: string; invert?: boolean; filter?: string; className?: string };

const Partners = ({ animated = false }: { animated?: boolean }) => {
  const { t } = useLanguage();

  const categories: { nameKey: string; logos: PartnerLogo[]; reverse: boolean }[] = [
    {
      nameKey: 'partners.cat1',
      reverse: false,
      logos: [
        { src: '/partner-01.svg', h: 'h-5 md:h-7' },
        { src: '/partner-02.svg', h: 'h-7 md:h-10' },
        { src: '/partner-catalyze.svg', h: 'h-6 md:h-8' },
        { src: '/partner-arkpoint.svg', h: 'h-4 md:h-5' },
        { src: '/partner-kryptoplanet.svg', h: 'h-5 md:h-7' },
        { src: '/partner-xangle.svg', h: 'h-4 md:h-6' },
      ],
    },
    {
      nameKey: 'partners.cat2',
      reverse: true,
      logos: [
        { src: '/partner-03.svg', h: 'h-4 md:h-6' },
        { src: '/partner-ludium.svg', h: 'h-7 md:h-10' },
        { src: '/partner-formula-labs.svg', h: 'h-4 md:h-5' },
        { src: '/prize-bnb-chain.svg', h: 'h-5 md:h-7' },
        { src: '/prize-status-network.png', h: 'h-7 md:h-10' },
        { src: '/prize-near-ai.webp', h: 'h-3.5 md:h-5' },
        { src: '/prize-ygg-play.svg', h: 'h-8 md:h-11' },
        { src: '/prize-verse8.png', h: 'h-3.5 md:h-5' },
        { src: '/partner-axelar.svg', h: 'h-4 md:h-6' },
        { src: '/partner-dcent-black.svg', h: 'h-6 md:h-8' },
        { src: '/partner-redstone.svg', h: 'h-5 md:h-7' },
        { src: '/partner-sero.svg', h: 'h-6 md:h-8' },
        { src: '/partner-squid.svg', h: 'h-7 md:h-10' },
        { src: '/partner-xrpl.svg', h: 'h-8 md:h-11' },
      ],
    },
    {
      nameKey: 'partners.cat3',
      reverse: false,
      logos: [
        { src: '/partner-digital-asset.svg', h: 'h-8 md:h-11' },
        { src: '/partner-coinness.png', h: 'h-5 md:h-7', invert: true },
        { src: '/partner-block-media.svg', h: 'h-8 md:h-11', invert: true },
        { src: '/partner-bloomingbit.svg', h: 'h-7 md:h-9' },
      ],
    },
    {
      nameKey: 'partners.cat4',
      reverse: true,
      logos: [
        { src: '/partner-lootgo.png', h: 'h-[19px] md:h-[26px]', filter: 'invert grayscale contrast-[3] brightness-[0.6]' },
        { src: '/partner-protoville.svg', h: 'h-8 md:h-11', filter: 'grayscale' },
        { src: '/partner-elixi-b.svg', h: 'h-6 md:h-8', className: '-ml-10 md:-ml-16' },
        { src: '/partner-osean.png', h: 'h-[13px] md:h-[18px]', invert: true },
        { src: '/partner-ath.png', h: 'h-8 md:h-11', filter: 'grayscale' },
      ],
    },
    {
      nameKey: 'partners.cat5',
      reverse: false,
      logos: [
        { src: '/community-aidenteti.svg', h: 'h-5 md:h-7', filter: 'grayscale' },
        { src: '/community-bay.svg', h: 'h-7 md:h-10' },
        { src: '/community-blockchain-valley.svg', h: 'h-7 md:h-10' },
        { src: '/community-ewha-chain.png', h: 'h-8 md:h-12', invert: true },
        { src: '/community-pdao.png', h: 'h-7 md:h-10', invert: true },
        { src: '/community-sol3hacker.png', h: 'h-7 md:h-10', filter: 'grayscale' },
        { src: '/community-bluenode.png', h: 'h-5 md:h-7', invert: true },
        { src: '/community-skkrypto.svg', h: 'h-10 md:h-14', filter: 'grayscale' },
      ],
    },
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
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-secondary">{t('partners.heading1')} {t('partners.heading1') && ' '}<span className="text-primary italic">{t('partners.headingHighlight')}</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">{t('partners.description')}</p>
        </div>

        {animated ? (() => {
          // Flatten categories into rows (cat2 splits into 2 rows)
          const rows: PartnerLogo[][] = [];
          categories.forEach((cat, catIdx) => {
            if (catIdx === 1) {
              const mid = Math.ceil(cat.logos.length / 2);
              rows.push(cat.logos.slice(0, mid));
              rows.push(cat.logos.slice(mid));
            } else {
              rows.push(cat.logos);
            }
          });

          return (
            <div className="flex flex-col gap-6">
              {rows.map((logos, rowIdx) => {
                // Ensure enough logos to fill wide viewports
                let filled = [...logos];
                while (filled.length < 16) {
                  filled = [...filled, ...logos];
                }

                const reverse = rowIdx % 2 === 1;
                const duration = filled.length * 3;

                return (
                  <div key={rowIdx} className="relative flex overflow-hidden py-1">
                    <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-white via-white/90 to-transparent z-10"></div>
                    <div
                      className="flex will-change-transform"
                      style={{
                        animation: `${reverse ? 'scroll-right' : 'scroll-left'} ${duration}s linear infinite`,
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      {[0, 1].map((copy) => (
                        <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy > 0 || undefined}>
                          {filled.map((logo, i) => (
                            <div
                              key={i}
                              className={`flex items-center justify-center ${logo.filter ?? (logo.invert ? 'invert grayscale' : 'brightness-0')} opacity-40 hover:opacity-100 transition-opacity shrink-0 mx-8 md:mx-16 ${logo.className ?? ''}`}
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
                );
              })}
            </div>
          );
        })() : (
          <div className="space-y-14 md:space-y-16">
            {categories.filter((_, i) => i !== 3).map((cat, catIdx) => (
              <div key={catIdx}>
                <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">{t(cat.nameKey)}</p>
                <div className="flex items-center justify-center flex-wrap gap-x-12 md:gap-x-20 gap-y-8">
                  {cat.logos.map((logo, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-center ${logo.filter ?? (logo.invert ? 'invert grayscale' : 'brightness-0')} opacity-40 hover:opacity-100 transition-all duration-300 ${logo.className ?? ''}`}
                    >
                      <img
                        src={logo.src}
                        alt="Partner Logo"
                        className={`w-auto object-contain ${logo.h}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
