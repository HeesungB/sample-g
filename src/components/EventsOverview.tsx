import React from 'react';

const EventsOverview = () => {
  interface EventEntry {
    title: string;
    org: string;
    description?: string;
    time?: string;
    location?: string;
    link?: string;
  }

  interface EventDay {
    date: string;
    events: EventEntry[];
  }

  const mainEvents: EventDay[] = [
    { date: 'APR 14', events: [
      { title: 'BuidlHack 2026 Builder Day', org: 'KBWA', time: '6pm – 10pm', location: 'DSRV Office, Gangnam', link: 'https://www.buidlkorea.com/buidlhack2026' },
    ] },
    { date: 'APR 15', events: [
      { title: 'AI / Infra Conn', org: 'Catalyze Research', time: '6pm – 10pm', location: 'To be announced', link: 'https://luma.com/8nzr1zec' },
      { title: 'Vibe to Invest', org: 'ARK Point', time: '6pm – 10pm', location: 'To be announced' },
    ] },
    { date: 'APR 16', events: [
      { title: 'Buidl Asia Conference Day 1', org: 'KryptoPlanet', location: 'Sofitel Ambassador, Seoul', link: 'https://buidl.asia' },
    ] },
    { date: 'APR 17', events: [
      { title: 'Buidl Asia Conference Day 2', org: 'KryptoPlanet', location: 'Sofitel Ambassador, Seoul', link: 'https://buidl.asia' },
      { title: 'Crypto Investment Show Day 1', org: 'Hanhwa, Xangle', time: '10am – 6pm', location: 'SFactory, Seongsu' },
    ] },
    { date: 'APR 18', events: [
      { title: 'Crypto Investment Show Day 2', org: 'Hanhwa, Xangle', time: '10am – 6pm', location: 'SFactory, Seongsu' },
      { title: 'BuidlHack 2026 – Final Pitch', org: 'KBWA', time: '11am – 6pm', location: 'DSRV Office, Gangnam', link: 'https://www.buidlkorea.com/buidlhack2026' },
    ] },
    { date: 'APR 19', events: [
      { title: 'Crypto Investment Show Day 3', org: 'Hanhwa, Xangle', time: '10am – 6pm', location: 'SFactory, Seongsu' },
    ] },
  ];

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

        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-4">
            {mainEvents.map((day, index) => (
              <div key={index} className="group flex flex-col md:flex-row items-start bg-gray-50/50 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-primary/10">
                <div className="w-24 flex-shrink-0 mb-3 md:mb-0 md:pt-1">
                  <span className="text-primary font-black text-xl">{day.date}</span>
                </div>
                <div className="flex-grow space-y-5">
                  {day.events.map((event, i) => (
                    <div key={i}>
                      <div className="flex items-start gap-3">
                        <div className="flex-grow">
                          {event.link ? (
                            <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold group-hover:text-primary transition-colors hover:underline">{event.title}</a>
                          ) : (
                            <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{event.title}</h4>
                          )}
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-sm">
                            <span className="text-gray-500 font-medium">{event.org}</span>
                            {event.location && <span className="text-gray-400">{event.location}</span>}
                            {event.time && <span className="text-gray-400">{event.time}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsOverview;