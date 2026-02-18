'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Alliance = () => {
  const members = [
    { name: 'Erica', org: 'KryptoPlanet', role: 'CEO', color: 'bg-slate-100', image: '/members/erica.png' },
    { name: 'Agwn', org: 'Ludium', role: 'CEO', color: 'bg-slate-200', image: '/members/agwn.png' },
    { name: 'Tae Oh', org: 'ARK Point', role: 'CEO', color: 'bg-slate-100', image: '/members/taeoh.png' },
    { name: 'Jay', org: 'Catalyze', role: 'CEO & Co-founder', color: 'bg-slate-200', image: '/members/jay.png' },
    { name: 'Jason', org: 'DeSpread', role: 'CEO', color: 'bg-slate-100', image: '/members/jason.png' },
    { name: 'Scott', org: 'Superteam / Solana Foundation', role: 'Head of Korea', color: 'bg-slate-200', image: '/members/scott.png' },
    { name: 'Ji Yun', org: 'DSRV', role: 'CEO', color: 'bg-slate-100' },
  ];

  // 끊김 없는 루프를 위해 카드 리스트를 복제
  const duplicatedMembers = [...members, ...members];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Meet the <span className="text-primary italic">Alliance</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            A coalition of Korea&apos;s leading Web3 organizations providing governance, ecosystem curation, and strategic direction.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
         <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          style={{ width: 'max-content' }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedMembers.map((member, index) => (
            <div
              key={index}
              className="w-64 flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className={`h-64 ${member.color} flex items-center justify-center overflow-hidden`}>
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-slate-400 text-6xl font-bold">{member.name[0]}</span>
                )}
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold mb-1 text-secondary">{member.name}</h4>
                <p className="text-primary text-sm font-bold mb-2">{member.org}</p>
                <p className="text-gray-400 text-xs font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Alliance;