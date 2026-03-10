'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from '@/context/LanguageContext';

import { members } from '@/data/members';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-10">{t('about.title1')} {t('about.title1') && ' '}<span className="text-primary">{t('about.title2')}</span></h1>
        <div className="prose prose-xl max-w-none text-gray-600 space-y-8">
          <p className="text-2xl font-medium text-black">
            {t('about.intro')}
          </p>
          <p>
            {t('about.body')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-black">{t('about.card1Title')}</h3>
              <p>{t('about.card1Body')}</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-black">{t('about.card2Title')}</h3>
              <p>{t('about.card2Body')}</p>
            </div>
          </div>
        </div>

        {/* Meet the Alliance */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">{t('alliance.heading1')} {t('alliance.heading1') && ' '}<span className="text-primary italic">{t('alliance.headingHighlight')}</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
              {t('alliance.description')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {members.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                <div className="aspect-square bg-slate-100 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className={`w-full h-full object-cover object-top ${member.imageClass || ''}`} />
                  ) : (
                    <span className="text-slate-400 text-4xl md:text-5xl font-bold">{member.name[0]}</span>
                  )}
                </div>
                <div className="p-3 md:p-5 text-center">
                  <h4 className="text-base md:text-lg font-bold mb-1 text-secondary">{member.name}</h4>
                  <p className="text-primary text-xs md:text-sm font-bold mb-1">{member.org}</p>
                  <p className="text-gray-400 text-[10px] md:text-xs font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
