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
        <div className="flex justify-between items-center py-4 sm:py-5 md:py-6">
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

          {/* Contact Button */}
          <div className="flex justify-center items-center ml-4 sm:ml-8 md:ml-[60px]">
            <Button
              variant="outline"
              onClick={() => {}} // Add this required onClick prop
              className="px-4 py-2 sm:px-6 sm:py-2 md:px-[34px] md:py-[8px] text-sm sm:text-base md:text-[23px] font-extrabold leading-6 sm:leading-8 md:leading-[39px] text-global-10 border-2 border-global-10 rounded-[5px] hover:bg-global-10 hover:text-global-1 transition-all duration-200"
            >
              أتصل بنا
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row gap-4 md:gap-[20px] justify-center items-center">
            {navigationItems?.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                className={`text-base md:text-[22px] font-bold leading-6 md:leading-[36px] text-global-10 hover:text-global-9 transition-colors duration-200 ${
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
              className="w-[100px] h-[51px] sm:w-[140px] sm:h-[71px] md:w-[200px] md:h-[102px] lg:w-[280px] lg:h-[142px]"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
          <div className="flex flex-col gap-4">
            {navigationItems?.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                className={`text-lg font-bold text-global-10 hover:text-global-9 transition-colors duration-200 py-2 ${
                  item?.active ? 'font-black' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item?.text}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;