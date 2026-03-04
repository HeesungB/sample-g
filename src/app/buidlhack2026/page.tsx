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
  { sponsor: 'BNB Chain', amount: '$5,000', logo: '/prize-bnb-chain.svg' },
  { sponsor: 'Status Network', amount: '$5,000', logo: '/prize-status-network.png' },
  { sponsor: 'Near AI', amount: '$5,000', logo: '/prize-near-ai.webp' },
  { sponsor: 'YGG & Verse8', amount: '$5,000', logo: '/prize-ygg-play.svg', logo2: '/prize-verse8.png' },
  { sponsor: 'General Track', amount: '$6,000', logo: '/logo-horizontal.png' },
];

const schedule = [
  { date: 'MAR 11', day: 'Wed', title: 'Kickoff AMA', desc: 'Online AMA to introduce BuidlHack2026 Details' },
  { date: 'MAR 12\n– APR 14', day: 'Thu–Tue', title: 'Sponsor Workshop', desc: "Online sponsor workshops to deep dive into the sponsor organization's where about" },
  { date: 'APR 14', day: 'Tue', title: 'BuidlHack 2026 Builder Day', desc: 'Offline Builder Day — understand the stacks, exchange ideas, and meet teams' },
  { date: 'APR 17', day: 'Fri', title: 'Submission Due Date', desc: 'All General/Sponsor Track project submission is due 23:59 KST through Ludium Portal' },
  { date: 'APR 18', day: 'Sat', title: 'Final Pitch Day', desc: 'Present your project to judges and compete for the prize pool' },
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight">
              BuidlHack <span className="text-primary italic">2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-4">Mar 11th – Apr 18th, 2026 | Seoul, Korea</p>
            <p className="text-white/60 max-w-2xl text-lg mb-10">
              The flagship hackathon of Korea Buidl Week. Where builders come to ship.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={COMMUNITY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 inline-block"
              >
                Join Community
              </a>
              <a
                href="https://www.ludium.world/programs/hackathon/f8a6bb25-671a-44c3-a8c3-293a5d048e51"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white/20 transition-all hover:-translate-y-1 inline-block"
              >
                Apply to Hack
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Track <span className="text-primary italic">Record</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">Korea Buidl Week has been at the forefront of builder culture in APAC.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 h-auto md:h-56"
              >
                <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-tighter">{stat.label}</div>
                <div className="text-5xl font-black text-primary mb-4">{stat.value}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Prize <span className="text-primary italic">Pool</span></h2>
            <p className="text-4xl md:text-6xl lg:text-7xl font-black text-primary mt-4">$26,000</p>
            <p className="text-gray-500 text-lg font-medium mt-4">Available in prizes</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-5xl mx-auto">
            {prizes.map((prize, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 flex flex-col items-center justify-center text-center w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] aspect-[1/0.85] md:aspect-[1/0.9] hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all"
              >
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">{prize.sponsor}</h4>
                <p className="text-2xl md:text-4xl font-black text-primary">{prize.amount}</p>
                {prize.logo && (
                  <div className={`flex items-center mt-4 opacity-30 ${prize.logo2 ? 'flex-col gap-3' : 'gap-2'}`}>
                    <img src={prize.logo} alt="" className={`${prize.logo2 ? 'h-8' : prize.sponsor === 'Near AI' ? 'h-4' : prize.sponsor === 'BNB Chain' ? 'h-[21px]' : prize.sponsor === 'General Track' ? 'h-[23px]' : prize.sponsor === 'Status Network' ? 'h-[28px] md:h-[31px]' : 'h-5'} w-auto brightness-0`} />
                    {prize.logo2 && <img src={prize.logo2} alt="" className="h-4 w-auto brightness-0" />}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">The <span className="text-primary italic">Schedule</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">Five days of building, learning, and competing.</p>
          </div>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-start bg-gray-50/50 p-5 md:p-8 rounded-2xl md:rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary/10 transition-all group"
              >
                <div className="flex items-center gap-4 w-full md:w-44 flex-shrink-0 mb-3 md:mb-0">
                  <span className="text-primary font-black text-xl whitespace-pre-line">{item.date}</span>
                  <span className="text-gray-300 font-bold text-sm uppercase">{item.day}</span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-1 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Our <span className="text-primary italic">Sponsors</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">The sponsors fueling BuidlHack 2026.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 max-w-5xl mx-auto">
            {[
              { src: '/sponsor-bnb-chain-color.svg', name: 'BNB Chain', h: 'max-h-10 md:max-h-12' },
              { src: '/sponsor-status-network-color.png', name: 'Status Network', h: 'max-h-[58px] md:max-h-[72px]' },
              { src: '/sponsor-near-ai.webp', name: 'Near AI', h: 'max-h-[19px] md:max-h-5' },
              { src: '/sponsor-verse8-color.svg', name: 'Verse8', h: 'max-h-[19px] md:max-h-5' },
              { src: '/sponsor-ygg-play-color.svg', name: 'YGG Play', h: 'max-h-[38px] md:max-h-10' },
            ].map((logo, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between p-6 md:p-8 aspect-square"
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`max-w-full w-auto object-contain transition-all duration-300 ${logo.h}`}
                  />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Our <span className="text-primary italic">Partners</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">The organizations powering BuidlHack 2026.</p>
          </div>
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-8 md:gap-x-20 max-w-md md:max-w-none mx-auto">
            {[
              { src: '/partner-01.svg', h: 'h-10 md:h-12', className: 'translate-x-2' },
              { src: '/partner-02.svg', h: 'h-10 md:h-12' },
              { src: '/partner-03.svg', h: 'h-6 md:h-7' },
              { src: '/partner-ludium.svg', h: 'h-10 md:h-12' },
            ].map((logo, i) => (
              <div
                key={i}
                className={`flex items-center justify-center brightness-0 opacity-40 hover:opacity-100 transition-all duration-300 ${logo.className || ''}`}
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
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-2xl md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
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
