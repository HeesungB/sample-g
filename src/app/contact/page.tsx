'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Interested in Sponsorship',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState('');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ firstName: '', lastName: '', email: '', subject: 'Interested in Sponsorship', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-10">{t('contactPage.title1')} {t('contactPage.title1') && ' '}<span className="text-primary">{t('contactPage.title2')}</span></h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              {t('contactPage.subtitle')}
            </p>

            <div className="space-y-8">
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase mb-2">{t('contactPage.secretary')}</div>
                <div className="text-xl md:text-2xl font-bold">Agwn</div>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase mb-2">{t('contactPage.email')}</div>
                <button onClick={() => handleCopy('contact@kbwa.events', 'email')} className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary hover:underline cursor-pointer text-left">
                  contact@kbwa.events
                  {copied === 'email' ? <Check size={20} className="text-green-500" /> : <Copy size={20} className="text-gray-400" />}
                </button>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase mb-2">{t('contactPage.telegram')}</div>
                <button onClick={() => handleCopy('@ludium_agwn', 'telegram')} className="flex items-center gap-2 text-xl md:text-2xl font-bold hover:underline cursor-pointer text-left">
                  @ludium_agwn
                  {copied === 'telegram' ? <Check size={20} className="text-green-500" /> : <Copy size={20} className="text-gray-400" />}
                </button>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase mb-2">{t('contactPage.location')}</div>
                <div className="text-xl md:text-2xl font-bold">{t('footer.location')}</div>
              </div>
            </div>
          </div>

          <div id="message" className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 scroll-mt-32">
            <h3 className="text-3xl font-black mb-8">{t('contactPage.sendMessage')}</h3>

            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">&#10003;</div>
                <h4 className="text-2xl font-bold mb-2">{t('contactPage.messageSent')}</h4>
                <p className="text-gray-500">{t('contactPage.messageSentSub')}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-primary font-bold hover:underline cursor-pointer"
                >
                  {t('contactPage.sendAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder={t('contactPage.firstName')}
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="bg-white border border-gray-200 p-4 rounded-2xl w-full"
                  />
                  <input
                    type="text"
                    placeholder={t('contactPage.lastName')}
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="bg-white border border-gray-200 p-4 rounded-2xl w-full"
                  />
                </div>
                <input
                  type="email"
                  placeholder={t('contactPage.emailAddress')}
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white border border-gray-200 p-4 rounded-2xl w-full"
                />
                <div className="relative">
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="bg-white border border-gray-200 p-4 pr-12 rounded-2xl w-full appearance-none cursor-pointer"
                >
                  <option value="Interested in Sponsorship">{t('contactPage.subject1')}</option>
                  <option value="Interested in Hosting Event">{t('contactPage.subject2')}</option>
                  <option value="General Inquiry">{t('contactPage.subject3')}</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </div>
                <textarea
                  placeholder={t('contactPage.message')}
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-white border border-gray-200 p-4 rounded-2xl w-full"
                ></textarea>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium">{t('contactPage.error')}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-primary-600 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? t('contactPage.sending') : t('contactPage.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
