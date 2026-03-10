'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsOverview from "@/components/EventsOverview";
import { useLanguage } from '@/context/LanguageContext';

export default function EventsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Page Header */}
      <div className="pt-40 pb-10 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">{t('eventsPage.title1')} {t('eventsPage.title1') && ' '}<span className="text-primary italic">{t('eventsPage.titleHighlight')}</span></h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">{t('eventsPage.subtitle')}</p>
      </div>

      <EventsOverview />

      <Footer />
    </main>
  );
}
