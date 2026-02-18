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

  // 모바일 메뉴 오픈 시 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      className={`fixed top-0 left-0 w-full z-[1000] ${
        isOpen
          ? 'bg-transparent py-3'
          : isTransparent
            ? 'bg-transparent py-6 transition-all duration-500'
            : 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-gray-100 transition-all duration-500'
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 xl:px-8 max-w-[1600px]">
        <div className="flex justify-between items-center gap-4">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo-horizontal.png" 
                alt="Korea Buidl Week 2026" 
                className={`h-7 sm:h-9 md:h-10 xl:h-11 w-auto max-w-[180px] sm:max-w-none transition-all duration-500 ${
                  isTransparent ? 'brightness-0 invert' : 'brightness-100'
                }`} 
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden xl:block">
            <div className="ml-4 flex items-center space-x-1 2xl:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 2xl:px-3 py-2 text-[13px] 2xl:text-sm font-bold transition-colors duration-300 whitespace-nowrap ${
                    isTransparent ? 'text-white/80 hover:text-white' : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="ml-2">
                <Link
                  href="/contact"
                  className={`px-5 py-2 rounded-full text-[13px] 2xl:text-sm font-bold transition-all duration-300 shadow-md inline-block whitespace-nowrap ${
                    isTransparent 
                      ? 'bg-white text-primary hover:bg-gray-100' 
                      : 'bg-primary text-white hover:bg-primary-600'
                  }`}
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${isTransparent ? 'text-white' : 'text-gray-800'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white fixed inset-0 z-[9999] flex flex-col items-center justify-center space-y-6 overflow-y-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-gray-800 p-2"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl text-gray-800 hover:text-primary transition-colors font-bold"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-600 transition-colors shadow-lg mt-4"
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