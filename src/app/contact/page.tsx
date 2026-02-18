'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
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
        <h1 className="text-5xl md:text-7xl font-black mb-10">Contact <span className="text-primary">Us</span></h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              Have questions or want to get involved? Reach out to the KBWA team.
            </p>

            <div className="space-y-8">
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase mb-2">Secretary</div>
                <div className="text-xl md:text-2xl font-bold">Agwn</div>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase mb-2">Email</div>
                <button onClick={() => handleCopy('contact@kbwa.events', 'email')} className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary hover:underline cursor-pointer text-left">
                  contact@kbwa.events
                  {copied === 'email' ? <Check size={20} className="text-green-500" /> : <Copy size={20} className="text-gray-400" />}
                </button>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase mb-2">Telegram</div>
                <button onClick={() => handleCopy('@ludium_agwn', 'telegram')} className="flex items-center gap-2 text-xl md:text-2xl font-bold hover:underline cursor-pointer text-left">
                  @ludium_agwn
                  {copied === 'telegram' ? <Check size={20} className="text-green-500" /> : <Copy size={20} className="text-gray-400" />}
                </button>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase mb-2">Location</div>
                <div className="text-xl md:text-2xl font-bold">Seoul, Korea</div>
              </div>
            </div>
          </div>

          <div id="message" className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 scroll-mt-32">
            <h3 className="text-3xl font-black mb-8">Send a Message</h3>

            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">&#10003;</div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-gray-500">We&apos;ll get back to you as soon as possible.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="bg-white border border-gray-200 p-4 rounded-2xl w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="bg-white border border-gray-200 p-4 rounded-2xl w-full"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
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
                  <option>Interested in Sponsorship</option>
                  <option>Interested in Hosting Event</option>
                  <option>General Inquiry</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </div>
                <textarea
                  placeholder="Message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-white border border-gray-200 p-4 rounded-2xl w-full"
                ></textarea>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium">Failed to send. Please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-primary-600 transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Submit'}
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
