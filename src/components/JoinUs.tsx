'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase mb-2 text-sm"
          >
            Get Involved
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight"
          >
            Join the <span className="text-primary italic">Movement</span>
          </motion.h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Whether you are a builder, sponsor, or community leader, there is a place for you in Seoul this April.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <motion.a
              key={index}
              href={option.href}
              {...(option.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-left hover:shadow-xl hover:border-primary/10 transition-all group block"
            >
              <h4 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{option.title}</h4>
              <p className="text-gray-500 text-sm">{option.sub}</p>
              <div className="mt-6 font-black text-2xl text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
