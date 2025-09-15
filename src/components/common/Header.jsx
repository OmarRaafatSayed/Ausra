'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationItems = [
    { text: 'الرئيسية', href: '/', active: true },
    { text: 'عن أسرة', href: '/about' },
    { text: 'الخبراء', href: '/experts' },
    { text: 'مكتبة أُسرة', href: '/library' },
    { text: 'أراء العملاء', href: '#testimonials' }
  ];

  return (
    <header className="w-full bg-global-1 px-4 sm:px-6 md:px-8 lg:px-[258px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
          {/* Mobile Menu Button */}
          <button 
            className="block lg:hidden p-2 text-global-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Auth Buttons */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 ml-4 sm:ml-8 md:ml-[60px]">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/auth/login'}
              className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-[16px] md:py-[6px] text-sm sm:text-base md:text-[16px] font-bold leading-4 sm:leading-5 md:leading-[24px] text-global-10 border-2 border-global-10 rounded-[5px] hover:bg-global-10 hover:text-global-1 transition-all duration-200"
            >
              دخول
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.location.href = '/auth/register'}
              className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-[16px] md:py-[6px] text-sm sm:text-base md:text-[16px] font-bold leading-4 sm:leading-5 md:leading-[24px] bg-global-8 text-global-1 rounded-[5px] hover:bg-global-9 transition-all duration-200"
            >
              تسجيل
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row gap-4 md:gap-[20px] justify-center items-center">
            {navigationItems?.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                className={`text-sm md:text-[18px] font-bold leading-5 md:leading-[28px] text-global-10 hover:text-global-9 transition-colors duration-200 ${
                  item?.active ? 'font-black' : ''
                }`}
              >
                {item?.text}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/img_logo.svg"
              alt="Ausrah Family Organization Logo"
              width={140}
              height={71}
              className="w-[80px] h-[41px] sm:w-[100px] sm:h-[51px] md:w-[140px] md:h-[71px] lg:w-[180px] lg:h-[91px]"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-3`}>
          <div className="flex flex-col gap-4">
            {navigationItems?.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                className={`text-base font-bold text-global-10 hover:text-global-9 transition-colors duration-200 py-1.5 ${
                  item?.active ? 'font-black' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item?.text}
              </a>
            ))}
            {/* Mobile Auth Buttons */}
            <div className="flex gap-3 pt-3 border-t border-global-10 border-opacity-20">
              <Button
                variant="outline"
                onClick={() => {
                  window.location.href = '/auth/login';
                  setMenuOpen(false);
                }}
                className="flex-1 px-4 py-1.5 text-sm font-bold text-global-10 border-2 border-global-10 rounded-[5px] hover:bg-global-10 hover:text-global-1 transition-all duration-200"
              >
                دخول
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  window.location.href = '/auth/register';
                  setMenuOpen(false);
                }}
                className="flex-1 px-4 py-1.5 text-sm font-bold bg-global-8 text-global-1 rounded-[5px] hover:bg-global-9 transition-all duration-200"
              >
                تسجيل
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;