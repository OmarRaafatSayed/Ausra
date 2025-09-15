'use client';
import React from 'react';
import Image from 'next/image';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-global-6 font-somar">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Branding */}
        <div className="lg:w-1/2 bg-gradient-to-br from-global-1 to-[#006b7a] flex flex-col justify-center items-center p-8 lg:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/img_asian_family_rafiki.svg"
              alt="Family illustration"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Logo */}
          <div className="relative z-10 mb-8">
            <Image
              src="/images/img_logo.svg"
              alt="أُسرة"
              width={200}
              height={102}
              className="w-[150px] h-[76px] sm:w-[200px] sm:h-[102px]"
            />
          </div>
          
          {/* Welcome Text */}
          <div className="relative z-10 text-center max-w-md">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-global-10 mb-4 leading-tight">
              مرحباً بك في أُسرة
            </h1>
            <p className="text-lg sm:text-xl text-global-9 font-semibold leading-relaxed">
              منصة الاستشارات الأسرية والنفسية الرائدة
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-8 right-8 opacity-20">
            <Image
              src="/images/img_vector_1.svg"
              alt="Decorative"
              width={150}
              height={30}
              className="w-[100px] h-[20px] sm:w-[150px] sm:h-[30px]"
            />
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-8 lg:p-12">
          <div className="w-full max-w-md">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-global-2 mb-2">
                {title}
              </h2>
              {subtitle && (
                <p className="text-base sm:text-lg text-global-4 font-semibold">
                  {subtitle}
                </p>
              )}
            </div>
            
            {/* Form Content */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;