'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Description = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle traditional pattern background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="hanok-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hanok-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-bold tracking-[0.3em] uppercase mb-4 border-l-4 border-primary pl-4 text-sm">{t('desc.label')}</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
              {t('desc.heading')} <span className="text-primary italic">{t('desc.headingHighlight')}</span> {t('desc.headingEnd')}
            </h3>
          </div>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-normal">
            <p>{t('desc.para1')}</p>
            <p>{t('desc.para2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
