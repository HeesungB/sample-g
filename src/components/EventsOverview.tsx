import React from 'react';

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

  const mainEvents: EventDay[] = [
    { date: 'APR 14', events: [
      { title: 'BuidlHack 2026 Builder Day', org: 'KBWA', time: '18:00pm - 22:00pm', location: 'DSRV Office, Gangnam', link: 'https://www.buidlkorea.com/buidlhack2026', logos: ['/org-kbwa.svg'] },
    ] },
    { date: 'APR 15', events: [
      { title: 'AI / Infra Con', org: 'Catalyze Research', time: '18:00pm - 22:00pm', location: 'To Be Announced', link: 'https://luma.com/8nzr1zec', logos: ['/org-catalyze.svg'] },
      { title: 'Buidl Asia: Next Finance Summit', org: 'ARK Point', time: '11:00am - 17:30pm', location: 'Grandhill Convention, Gangnam', logos: ['/org-arkpoint.svg'] },
    ] },
    { date: 'APR 16', events: [
      { title: 'Buidl Asia 2026 Day 1', org: 'KryptoPlanet', time: '10:00am - 18:00pm', location: 'Sofitel Ambassador, Jamsil', link: 'https://buidl.asia', logos: ['/org-kryptoplanet.svg'] },
    ] },
    { date: 'APR 17', events: [
      { title: 'Buidl Asia 2026 Day 2', org: 'KryptoPlanet', time: '10:00am - 18:00pm', location: 'Sofitel Ambassador, Jamsil', link: 'https://buidl.asia', logos: ['/org-kryptoplanet.svg'] },
      { title: 'CIS 2026 - Institutional Day', org: 'Hanhwa, Xangle', time: '13:30pm - 21:00pm', location: 'The Plaza Seoul, Jung-Gu', logos: ['/org-hanwha.svg', '/org-xangle.png'] },
    ] },
    { date: 'APR 18', events: [
      { title: 'CIS 2026 - Retail Festival', org: 'Hanhwa, Xangle', time: '10:00am - 18:00pm', location: 'S-Factory, Seong Su', logos: ['/org-hanwha.svg', '/org-xangle.png'] },
      { title: 'BuidlHack 2026 – Final Pitch', org: 'KBWA', time: '11:00am - 18:00pm', location: 'DSRV Office, Gangnam', link: 'https://www.buidlkorea.com/buidlhack2026', logos: ['/org-kbwa.svg'] },
    ] },
    { date: 'APR 19', events: [
      { title: 'CIS 2026 - Retail Festival', org: 'Hanhwa, Xangle', time: '10:00am - 18:00pm', location: 'S-Factory, Seong Su', logos: ['/org-hanwha.svg', '/org-xangle.png'] },
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
                        {['MON','TUE','WED','THU','FRI','SAT'][dayIdx]}
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
                  <div className="w-32 flex items-center justify-end gap-2 shrink-0">
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
      </div>
    </section>
  );
};

export default EventsOverview;