'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const COMMUNITY_LINK = 'https://bit.ly/KBW_Community';

const stats = [
  { value: '2018', label: 'Since', desc: "Korea's longest-running builder-first technical conference" },
  { value: '150+', label: 'Side Events', desc: "One of APAC's most active decentralized builder ecosystems" },
  { value: '20K+', label: 'Attendees', desc: 'Week-long participants' },
  { value: '100+', label: 'Organizations', desc: 'Leading foundations, researchers, infra teams, and investors' },
];

const prizes = [
  { sponsor: 'BNB Chain', amount: '$5,000' },
  { sponsor: 'Status Network', amount: '$5,000' },
  { sponsor: 'General Pool', amount: '$14,000' },
];

const schedule = [
  { date: 'APR 14', day: 'Mon', title: 'BuidlHack 2026 Builder Day', desc: 'Offline Builder Day — understand the stacks, exchange ideas, and meet teams', time: '6pm – 10pm' },
  { date: 'APR\n15–17', day: 'Tue–Thu', title: 'Hacking Period', desc: 'Build your project with your team, attend workshops, and get mentorship', time: 'All Day' },
  { date: 'APR 18', day: 'Fri', title: 'BuidlHack 2026 Final Pitch', desc: 'Present your project to judges and compete for the prize pool', time: 'All Day' },
];

export default function BuidlHackPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden flex items-end">
        <img
          src="/buidlhack-hero.jpg"
          alt="Korea Buidl Week 2026"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight">
              BuidlHack <span className="text-primary italic">2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-4">April 14 – 18, 2026 | Seoul, Korea</p>
            <p className="text-white/60 max-w-2xl text-lg mb-10">
              The flagship hackathon of Korea Buidl Week. Where builders come to ship.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={COMMUNITY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 inline-block"
              >
                Join Community
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white opacity-50"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Track Record */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Track <span className="text-primary italic">Record</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">Korea Buidl Week has been at the forefront of builder culture in APAC.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-tighter">{stat.label}</div>
                <div className="text-5xl font-black text-primary mb-4">{stat.value}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Prize <span className="text-primary italic">Pool</span></h2>
            <p className="text-4xl md:text-6xl lg:text-7xl font-black text-primary mt-4">$24,000</p>
            <p className="text-gray-500 text-lg font-medium mt-4">Available in prizes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {prizes.map((prize, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 text-center"
              >
                <h4 className="text-lg font-bold text-secondary mb-4">{prize.sponsor}</h4>
                <div className="text-4xl font-black text-primary">{prize.amount}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">The <span className="text-primary italic">Schedule</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">Five days of building, learning, and competing.</p>
          </div>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col md:flex-row items-start bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary/10 transition-all group"
              >
                <div className="flex items-center gap-4 w-full md:w-44 flex-shrink-0 mb-3 md:mb-0">
                  <span className="text-primary font-black text-xl whitespace-pre-line">{item.date}</span>
                  <span className="text-gray-300 font-bold text-sm uppercase">{item.day}</span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-1 font-medium">{item.desc}</p>
                </div>
                <div className="md:w-32 md:text-right text-gray-400 font-bold uppercase tracking-widest text-xs mt-2 md:mt-0 md:pt-1">
                  {item.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Our <span className="text-primary italic">Partners</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">The organizations powering BuidlHack 2026.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
            {['/partner-01.svg', '/partner-02.svg', '/partner-03.svg'].map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="Partner Logo"
                  className={`w-auto object-contain brightness-0 ${logo.includes('03') ? 'h-6 md:h-10' : 'h-10 md:h-16'}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <svg width="100%" height="100%">
                <pattern id="cta-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
              </svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to <span className="text-primary italic">Build?</span></h3>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
                Join our community to stay updated on BuidlHack 2026 — team matching, workshops, and more.
              </p>
              <a
                href={COMMUNITY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 inline-block"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
