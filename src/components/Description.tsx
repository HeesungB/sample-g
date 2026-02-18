'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Description = () => {
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-[0.3em] uppercase mb-4 border-l-4 border-primary pl-4 text-sm">Hello World, from Korea</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
              Asia is one of the fastest-growing <span className="text-primary italic">Web3 innovation</span> centers.
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-600 text-lg leading-relaxed font-normal"
          >
            <p>
              Fueled by scale, liquidity, and a rapidly expanding builder base, Korea Buidl Week concentrates this momentum into one focused moment—where Asia&apos;s builders come together and connect with the world.
            </p>
            <p>
              Korea Buidl Week turns Seoul into a global launchpad through conferences, residencies, startup competitions, and community-led events. It signals confidence and collaboration—showcasing what Asia is building now, and where it builds next.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Description;
