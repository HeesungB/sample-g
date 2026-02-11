'use client';

import React from 'react';
import { motion } from 'framer-motion';

const JoinUs = () => {
  const options = [
    { title: 'Register Event', sub: 'Host your own side event' },
    { title: 'Sponsor Event', sub: 'Gain visibility at week-scale' },
    { title: 'Become Partner', sub: 'Collaborate with the alliance' },
    { title: 'Join Community', sub: 'Stay updated on Telegram' },
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight">Join the <span className="italic">Movement</span></h2>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg font-medium">
            Whether you are a builder, sponsor, or community leader, there is a place for you in Seoul this April.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-left hover:bg-white hover:text-primary transition-all group"
            >
              <h4 className="text-xl font-bold mb-2">{option.title}</h4>
              <p className="text-primary-100 group-hover:text-primary/70 text-sm">{option.sub}</p>
              <div className="mt-6 font-black text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
