import React from 'react';

const JoinUs = () => {
  const options = [
    { title: 'Register Event', sub: 'Host your own event during the week', href: '/events' },
    { title: 'Sponsor Event', sub: 'Gain visibility at week-scale', href: '/contact#message' },
    { title: 'Become Partner', sub: 'Collaborate with the alliance', href: '/contact#message' },
    { title: 'Join Community', sub: 'Stay updated on Telegram', href: 'https://bit.ly/KBW_Community', external: true },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">
            Get Involved
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight">
            Join the <span className="text-primary italic">Movement</span>
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Whether you are a builder, sponsor, or community leader, there is a place for you in Seoul this April.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <a
              key={index}
              href={option.href}
              {...(option.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-left hover:shadow-xl hover:border-primary/10 hover:-translate-y-1 transition-all group block"
            >
              <h4 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{option.title}</h4>
              <p className="text-gray-500 text-sm">{option.sub}</p>
              <div className="mt-6 font-black text-2xl text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
