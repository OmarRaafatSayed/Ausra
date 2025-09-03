'use client';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const quickLinks = [
    { text: 'الرئيسية', href: '/' },
    { text: 'عن أُسرة', href: '/about' },
    { text: 'الخبراء', href: '/experts' },
    { text: 'مكتبة أُسرة', href: '/library' }
  ];

  const supportLinks = [
    { text: 'اتصل بنا', href: '/contact' },
    { text: 'الشروط والأحكام', href: '/terms' },
    { text: 'سياسة الاسترجاع', href: '/refund-policy' }
  ];

  const socialLinks = [
    { src: '/images/img_ant_design_facebook_filled.svg', alt: 'Facebook', href: '#' },
    { src: '/images/img_ant_design_instagram_filled.svg', alt: 'Instagram', href: '#' },
    { src: '/images/img_fa6_brands_square_youtube.svg', alt: 'YouTube', href: '#' },
    { src: '/images/img_uil_whatsapp_alt.svg', alt: 'WhatsApp', href: '#' }
  ];

  return (
    <footer className="w-full bg-global-1">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 justify-start items-center py-6 sm:py-8 md:py-12">
          
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-8">
            
            {/* Links Section */}
            <div className="flex flex-col justify-start items-end w-full lg:w-[50%]">
              
              {/* Section Headers */}
              <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0 mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-center text-global-10 w-full sm:w-[44%]">
                  الدعم
                </h3>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-center text-global-10 w-full sm:w-[44%]">
                  روابط مختصرة
                </h3>
              </div>

              {/* Links Content */}
              <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-6 sm:gap-8">
                
                {/* Support Links Column */}
                <div className="flex flex-col justify-start items-center w-full sm:w-[48%] gap-2 sm:gap-3">
                  <a 
                    href="/refund-policy" 
                    className="text-sm sm:text-base md:text-lg font-semibold text-right text-global-10 hover:text-global-9 transition-colors duration-200"
                  >
                    سياسة الاسترجاع
                  </a>
                  <a 
                    href="/terms" 
                    className="text-sm sm:text-base md:text-lg font-semibold text-right text-global-10 hover:text-global-9 transition-colors duration-200"
                  >
                    الشروط والأحكام
                  </a>
                  <a 
                    href="/contact" 
                    className="text-sm sm:text-base md:text-lg font-semibold text-right text-global-10 hover:text-global-9 transition-colors duration-200"
                  >
                    اتصل بنا
                  </a>
                </div>

                {/* Quick Links Column */}
                <div className="flex flex-col gap-2 sm:gap-3 justify-start items-center w-full sm:w-[48%]">
                  <a 
                    href="/" 
                    className="text-sm sm:text-base md:text-lg font-semibold text-right text-global-10 hover:text-global-9 transition-colors duration-200"
                  >
                    الرئيسية
                  </a>
                  <a 
                    href="/about" 
                    className="text-sm sm:text-base md:text-lg font-semibold text-right text-global-10 hover:text-global-9 transition-colors duration-200"
                  >
                    عن أُسرة
                  </a>
                  <a 
                    href="/experts" 
                    className="text-sm sm:text-base md:text-lg font-semibold text-right text-global-10 hover:text-global-9 transition-colors duration-200"
                  >
                    الخبراء
                  </a>
                  <a 
                    href="/library" 
                    className="text-sm sm:text-base md:text-lg font-semibold text-right text-global-10 hover:text-global-9 transition-colors duration-200"
                  >
                    مكتبة أُسرة
                  </a>
                </div>
              </div>
            </div>

            {/* Logo Section */}
            <div className="flex justify-center items-center w-full lg:w-[50%]">
              <Image
                src="/images/img_logo.svg"
                alt="Ausrah Family Organization Logo"
                width={328}
                height={168}
                className="w-[150px] h-[77px] sm:w-[200px] sm:h-[102px] md:w-[250px] md:h-[128px] lg:w-[300px] lg:h-[154px]"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-3 sm:gap-0 bg-global-8 py-2 sm:py-3 px-3 sm:px-4 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-3 sm:gap-0">
              
              {/* Social Media Icons */}
              <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center">
                {socialLinks?.map((social, index) => (
                  <a 
                    key={index}
                    href={social?.href}
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label={social?.alt}
                  >
                    <Image
                      src={social?.src}
                      alt={social?.alt}
                      width={social?.src?.includes('youtube') ? 40 : 46}
                      height={46}
                      className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px]"
                    />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-xs sm:text-sm md:text-base font-bold text-center text-global-2">
                جميع الحقوق محفوظة لـ قدرات © 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;