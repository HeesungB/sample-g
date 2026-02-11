'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EventsOverview = () => {
  const [activeTab, setActiveTab] = useState('main');

  interface EventItem {
    date: string;
    title: string;
    time: string;
    sub?: string;
  }

  const mainEvents: EventItem[] = [
    { date: 'APR 13', title: 'Site Open', time: '-' },
    { date: 'APR 14', title: 'BuidlHack 2026 Builder Day', time: '6pm - 10pm' },
    { date: 'APR 15', title: 'AI / Infra Conn', time: 'All Day' },
    { date: 'APR 16', title: 'BUIDL Asia Conference - Day 1', time: 'All Day' },
    { date: 'APR 17', title: 'BUIDL Asia Conference - Day 2', time: 'All Day', sub: 'Rising Star, Clash of Universities, Startup World Cup Korea' },
    { date: 'APR 18', title: 'BuidlHack 2026 - Final Pitch', time: 'All Day' },
    { date: 'APR 19', title: 'Crypto Investment Show', time: 'All Day' },
  ];

  const sideEvents: EventItem[] = [
    { date: 'APR 14', title: 'Night in Seoul Networking', time: '8pm' },
    { date: 'APR 15', title: 'Solana Ecosystem Meetup', time: '7pm' },
    { date: 'APR 16', title: 'Web3 VC Dinner', time: '8pm' },
    { date: 'APR 17', title: 'Developer After Party', time: '10pm' },
  ];

  const currentEvents = activeTab === 'main' ? mainEvents : sideEvents;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle traditional pattern background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="hanok-pattern-events" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hanok-pattern-events)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">See <span className="text-primary italic">Events</span></h2>
            <p className="text-gray-500 max-w-lg">Explore the flagship conferences and community-led gatherings across Seoul.</p>
          </div>
          
          <div className="flex bg-gray-50 p-1 rounded-full border border-gray-100 mx-auto md:mx-0">
            <button 
              onClick={() => setActiveTab('main')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'main' ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-black'}`}
            >
              Main Events
            </button>
            <button 
              onClick={() => setActiveTab('side')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'side' ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-black'}`}
            >
              Side Events
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {currentEvents.map((event, index) => (
                <div key={index} className="group flex flex-col md:flex-row items-start md:items-center bg-gray-50/50 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-primary/10">
                  <div className="w-24 flex-shrink-0 mb-2 md:mb-0">
                    <span className="text-primary font-black text-xl">{event.date}</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{event.title}</h4>
                    {event.sub && <p className="text-gray-500 text-sm mt-1 font-medium">{event.sub}</p>}
                  </div>
                  <div className="w-40 md:text-right text-gray-400 font-bold uppercase tracking-widest text-xs mt-2 md:mt-0">
                    {event.time}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EventsOverview;