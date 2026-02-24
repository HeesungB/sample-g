import React from 'react';

const Partners = () => {
  const partnerLogos = [
    '/partner-01.svg',
    '/partner-02.svg',
    '/partner-03.svg',
    '/partner-ludium.svg',
    '/partner-arkpoint.svg',
    '/partner-kryptoplanet.svg',
    '/partner-xangle.svg',
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

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {partnerLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center brightness-0 opacity-40 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo}
                alt="Partner Logo"
                className={`w-auto object-contain ${
                  logo.includes('03') ? 'h-5 md:h-8' : 'h-8 md:h-14'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
