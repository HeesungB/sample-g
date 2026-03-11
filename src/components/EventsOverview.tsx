'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

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

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
};

const mainEventKeywords = [
  'buidl asia', 'buidlhack', 'cis 2026', 'ai / infra con',
  'next finance summit',
];

const isMainEvent = (sideEventName: string) => {
  const name = sideEventName.toLowerCase();
  return mainEventKeywords.some((keyword) => name.includes(keyword));
};

const EventsOverview = () => {
  const { t } = useLanguage();

  const [sideEvents, setSideEvents] = useState<SideEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'main' | 'side'>('main');

  useEffect(() => {
    const fetchSideEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/side-events');
        const json = await res.json();
        if (json.success && json.data?.events) {
          setSideEvents(json.data.events.map((e: Record<string, unknown>) => ({
            id: e.id as string,
            name: e.name as string,
            slug: e.slug as string,
            description: e.description as string,
            url: e.url as string,
            organizers: (e.organizers as { label: string }[]) || [],
            location: e.location as { address: string; city: string; country: string },
            startDate: formatDate(e.startDate as string),
            endDate: formatDate(e.endDate as string),
            eventType: (e.eventType as string[]) || [],
            topics: (e.topics as string[]) || [],
          })));
        }
      } catch (err) {
        console.error('Failed to fetch side events:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSideEvents();
  }, []);

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
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{t('events.heading1')} {t('events.heading1') && ' '}<span className="text-primary italic">{t('events.headingHighlight')}</span></h2>
            <p className="text-gray-500 max-w-lg">{t('events.description')}</p>
          </div>
          <a href="https://se.ro/events/new?&parentEventSlug=korea-buidl-week-2026" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden border-2 border-primary text-primary px-5 py-2.5 rounded-full font-bold shrink-0 transition-all hover:shadow-lg hover:shadow-primary/25 hover:scale-105">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />
            <span className="relative">{t('events.addSideEvent')}</span>
          </a>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('main')}
            className={`min-w-[120px] px-5 py-2 rounded-full text-sm font-semibold transition-colors text-center cursor-pointer ${
              activeTab === 'main'
                ? 'bg-primary text-white'
                : 'border border-gray-200 text-gray-500 hover:border-gray-300'
            }`}
          >
            {t('events.mainEvents')}
          </button>
          <button
            onClick={() => setActiveTab('side')}
            className={`min-w-[120px] px-5 py-2 rounded-full text-sm font-semibold transition-colors text-center cursor-pointer ${
              activeTab === 'side'
                ? 'bg-primary text-white'
                : 'border border-gray-200 text-gray-500 hover:border-gray-300'
            }`}
          >
            {t('events.sideEvents')}
          </button>
        </div>

        {activeTab === 'main' ? (
          <div className="rounded-2xl border border-gray-100 overflow-hidden">
            <iframe
              src="https://buidlkorea.lootgo.app/"
              className="w-full h-[500px] md:h-[650px] lg:h-[800px]"
              style={{ border: 'none' }}
              allowFullScreen
              title="Korea Buidl Week Event Map"
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {loading ? (
              <div className="px-5 py-10 text-center text-gray-400">{t('events.loading')}</div>
            ) : sideEvents.length === 0 ? (
              <div className="px-5 py-10 text-center text-gray-400">{t('events.noEvents')}</div>
            ) : (
              sideEvents.map((event) => (
                <a
                  key={event.id}
                  href={event.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row md:items-center gap-4 px-5 py-5 hover:bg-gray-50/80 transition-colors block"
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

                  {/* Main Event Badge or Arrow */}
                  <div className="shrink-0">
                    {isMainEvent(event.name) ? (
                      <span className="inline-flex items-center gap-1.5 bg-secondary text-white text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-xl">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" /></svg>
                        {t('events.mainEventBadge')}
                      </span>
                    ) : (
                      <div className="text-gray-300">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </a>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsOverview;
