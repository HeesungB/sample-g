'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // 메인 페이지가 아닌 경우 항상 'scrolled' 상태와 같은 디자인을 적용하기 위함
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 헤더가 투명해야 하는 조건: 메인 페이지이면서 아직 스크롤되지 않았을 때
  const isTransparent = isHomePage && !scrolled;

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'BuidlHack2026', href: '/buidlhack2026' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isTransparent 
          ? 'bg-transparent py-6' 
          : 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo-horizontal.png" 
                alt="Korea Buidl Week 2026" 
                className={`h-10 md:h-12 w-auto transition-all duration-500 ${
                  isTransparent ? 'brightness-0 invert' : 'brightness-100'
                }`} 
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-bold transition-colors duration-300 ${
                    isTransparent ? 'text-white/80 hover:text-white' : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md ${
                  isTransparent 
                    ? 'bg-white text-primary hover:bg-gray-100' 
                    : 'bg-primary text-white hover:bg-primary-600'
                }`}
              >
                Join Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${isTransparent ? 'text-white' : 'text-gray-800'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white fixed inset-0 z-[60] flex flex-col items-center justify-center space-y-8 text-2xl animate-in fade-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-gray-800">
            <X size={32} />
          </button>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-800 hover:text-primary transition-colors font-bold"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;