'use client';

import React, { useState } from 'react';

const EventsOverview = () => {
  interface EventEntry {
    title: string;
    org: string;
    description?: string;
    time?: string;
    location?: string;
    link?: string;
    logos?: string[];
  }

  interface EventDay {
    date: string;
    events: EventEntry[];
  }

  interface SideEvent {
    id: string;
    name: string;
    slug: string;
    description: string;
    url: string;
    organizers: { label: string }[];
    location: { address: string; city: string; country: string };
    startDate: string;
    endDate: string;
    eventType: string[];
    topics: string[];
  }

  const mainEvents: EventDay[] = [
    { date: 'APR 14', events: [
      { title: 'BuidlHack 2026 Builder Day', org: 'KBWA', time: '18:00pm - 22:00pm', location: 'DSRV Office, Gangnam', link: 'https://www.buidlkorea.com/buidlhack2026', logos: ['/org-kbwa.svg'] },
    ] },
    { date: 'APR 15', events: [
      { title: 'AI / Infra Con', org: 'Catalyze', time: '18:00pm - 22:00pm', location: 'To Be Announced', link: 'https://luma.com/8nzr1zec', logos: ['/org-catalyze.svg'] },
      { title: 'Buidl Asia: Next Finance Summit', org: 'ARK Point', time: '13:00pm - 18:00pm', location: 'Grandhill Convention, Gangnam', link: 'https://luma.com/cav0i3pu', logos: ['/org-arkpoint.svg'] },
    ] },
    { date: 'APR 16', events: [
      { title: 'Buidl Asia 2026 Day 1', org: 'KryptoPlanet', time: '10:00am - 18:00pm', location: 'Sofitel Ambassador, Jamsil', link: 'https://buidl.asia', logos: ['/org-kryptoplanet.svg'] },
    ] },
    { date: 'APR 17', events: [
      { title: 'Buidl Asia 2026 Day 2', org: 'KryptoPlanet', time: '10:00am - 18:00pm', location: 'Sofitel Ambassador, Jamsil', link: 'https://buidl.asia', logos: ['/org-kryptoplanet.svg'] },
      { title: 'CIS 2026 - Institutional Day', org: 'Xangle', time: '13:30pm - 21:00pm', location: 'The Plaza Seoul, Jung-Gu', link: 'https://cis2060.io/', logos: ['/org-xangle.png'] },
    ] },
    { date: 'APR 18', events: [
      { title: 'CIS 2026 - Retail Festival', org: 'Xangle', time: '10:00am - 18:00pm', location: 'S-Factory, Seong Su', link: 'https://cis2060.io/', logos: ['/org-xangle.png'] },
      { title: 'BuidlHack 2026 – Final Pitch', org: 'KBWA', time: '11:00am - 18:00pm', location: 'DSRV Office, Gangnam', link: 'https://www.buidlkorea.com/buidlhack2026', logos: ['/org-kbwa.svg'] },
    ] },
    { date: 'APR 19', events: [
      { title: 'CIS 2026 - Retail Festival', org: 'Xangle', time: '10:00am - 18:00pm', location: 'S-Factory, Seong Su', link: 'https://cis2060.io/', logos: ['/org-xangle.png'] },
    ] },
  ];

  const sideEvents: SideEvent[] = [
    {
      id: '1',
      name: 'Open Source AI Summit Lisbon',
      slug: 'open-source-ai-summit-lisbon',
      description: 'A gathering focused on open source AI tools, models, and infrastructure for builders and researchers.',
      url: '',
      organizers: [{ label: 'Open Source Collective' }],
      location: { address: 'LX Factory', city: 'Lisbon', country: 'Portugal' },
      startDate: 'JAN 9',
      endDate: 'JAN 9',
      eventType: ['Summit'],
      topics: ['AI', 'Open Source'],
    },
    {
      id: '2',
      name: 'BUIDL AI Hackathon 2026',
      slug: 'buidl-ai-hackathon-2026',
      description: 'Three-day hackathon bringing together developers to build AI-powered Web3 applications.',
      url: '',
      organizers: [{ label: 'KBWA' }, { label: 'Ethereum Foundation' }],
      location: { address: 'DSRV Office', city: 'Seoul', country: 'Korea' },
      startDate: 'JAN 9',
      endDate: 'JAN 11',
      eventType: ['Hackathon'],
      topics: ['AI', 'Web3', 'DeFi'],
    },
  ];

  const [activeTab, setActiveTab] = useState<'main' | 'side'>('main');

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
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">See <span className="text-primary italic">Events</span></h2>
            <p className="text-gray-500 max-w-lg">Explore the flagship conferences and community-led gatherings across Seoul.</p>
          </div>
          {/* <button className="bg-primary text-white px-5 py-2.5 rounded-full font-bold shrink-0">
            + New
          </button> */}
        </div>

        {/* Tabs */}
        {/* <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('main')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === 'main'
                ? 'bg-primary text-white'
                : 'border border-gray-200 text-gray-500 hover:border-gray-300'
            }`}
          >
            Main Events
          </button>
        </div> */}

        {activeTab === 'main' ? (
          <div className="rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {mainEvents.map((day, dayIdx) => (
              day.events.map((event, eventIdx) => (
                <div
                  key={`${dayIdx}-${eventIdx}`}
                  className="flex flex-col md:flex-row md:items-center gap-4 px-5 py-5 hover:bg-gray-50/80 transition-colors"
                >
                  {/* Date */}
                  <div className="md:w-40 shrink-0">
                    {eventIdx === 0 ? (
                      <div className="flex items-center gap-2.5">
                        <span className="bg-primary text-white font-black text-sm px-3 py-1.5 rounded-xl">{day.date}</span>
                        <span className="text-gray-400 text-xs font-semibold uppercase">
                          {['TUE','WED','THU','FRI','SAT','SUN'][dayIdx]}
                        </span>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Event Info (title, org, time/location stacked) */}
                  <div className="flex-grow min-w-0">
                    {event.link ? (
                      <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-secondary hover:text-primary transition-colors hover:underline">{event.title}</a>
                    ) : (
                      <h4 className="text-base font-bold text-secondary">{event.title}</h4>
                    )}
                    <p className="text-primary text-sm font-semibold mt-0.5">{event.org}</p>
                    {(event.time || event.location) && (
                      <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                        {event.time && (
                          <div className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                            <span>{event.time}</span>
                          </div>
                        )}
                        {event.location && (
                          <div className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span>{event.location}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Logos */}
                  {event.logos && event.logos.length > 0 && (
                    <div className="w-auto md:w-32 flex items-center justify-start md:justify-end gap-2 shrink-0">
                      {event.logos.map((logo, li) => (
                        <img
                          key={li}
                          src={logo}
                          alt={event.org}
                          className={`object-contain ${logo.includes('kbwa') ? 'h-10 max-w-[120px]' : 'h-7 max-w-[80px]'}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {sideEvents.map((event) => (
              <div
                key={event.id}
                className="flex flex-col md:flex-row md:items-center gap-4 px-5 py-5 hover:bg-gray-50/80 transition-colors"
              >
                {/* Date */}
                <div className="md:w-40 shrink-0">
                  <div className="flex items-center gap-2.5">
                    <span className="bg-primary text-white font-black text-sm px-3 py-1.5 rounded-xl">{event.startDate}</span>
                    {event.endDate !== event.startDate && (
                      <span className="text-gray-400 text-xs font-semibold">→ {event.endDate}</span>
                    )}
                  </div>
                </div>

                {/* Event Info */}
                <div className="flex-grow min-w-0">
                  <h4 className="text-base font-bold text-secondary">{event.name}</h4>
                  <p className="text-primary text-sm font-semibold mt-0.5">
                    {event.organizers.map(o => o.label).join(', ')}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span>{event.location.address}, {event.location.city}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {[...event.topics, ...event.eventType].map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 text-primary text-xs font-semibold rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="shrink-0 text-gray-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsOverview;
