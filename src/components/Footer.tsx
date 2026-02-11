'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <img src="/logo-horizontal.png" alt="Korea Buidl Week 2026" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Asia&apos;s most influential builder-centric festival, concentrating Web3 momentum into one focused moment in Seoul.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/buidlhack2026" className="hover:text-white transition-colors">BuidlHack2026</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>agwn@formulalabs.xyz</li>
              <li>@ludium_agwn (Telegram)</li>
              <li>(+82) 010-3544-6625</li>
              <li>Seoul, Korea</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Korea Buidl Week Alliance. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Twitter</Link>
            <Link href="#" className="hover:text-white">Discord</Link>
            <Link href="#" className="hover:text-white">Telegram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
