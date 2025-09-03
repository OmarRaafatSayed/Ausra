'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = [
    { name: 'الكل', active: true },
    { name: 'أسرية', active: false },
    { name: 'نفسية', active: false },
    { name: 'مجتمعية', active: false },
    { name: 'طفولية', active: false }
  ];
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e?.target?.value);
  };
  return (
    <div className="w-full bg-global-6 flex flex-col justify-start items-center min-h-screen">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col justify-start items-end w-full mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-16">
          {/* Back Button and Title Section */}
          <div className="flex flex-col sm:flex-row justify-start items-center w-full gap-4 sm:gap-0">
            {/* Back Button */}
            <div className="flex flex-row justify-start items-center self-end mb-4 sm:mb-[34px] order-2 sm:order-1">
              <Image
                src="/images/img_vector_cyan_800.svg"
                alt="Back arrow"
                width={14}
                height={12}
                className="w-[14px] h-[12px]"
              />
              <span className="text-[8px] sm:text-[10px] md:text-[12px] font-medium leading-4 sm:leading-5 md:leading-[20px] text-center text-[#008695] ml-2 sm:ml-[6px] font-somar">
                الرجوع للخلف
              </span>
            </div>
            {/* Title */}
            <div className="flex justify-center items-center order-1 sm:order-2 mx-auto">
              <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-extrabold leading-[53px] sm:leading-[80px] md:leading-[106px] text-center text-[#008695] font-somar">
                المقالات
              </h1>
            </div>
          </div>
          {/* Decorative Vector */}
          <div className="flex justify-center items-center w-full mt-2 sm:mt-3 md:mt-[14px] mb-8 sm:mb-12 md:mb-16">
            <Image
              src="/images/img_vector_1.svg"
              alt="Decorative line"
              width={258}
              height={40}
              className="w-[129px] h-[20px] sm:w-[194px] sm:h-[30px] md:w-[258px] md:h-[40px]"
            />
          </div>
          {/* Search Bar */}
          <div className="flex flex-row justify-center items-center w-full mb-6 sm:mb-8 md:mb-[30px]">
            <div className="flex flex-row justify-center items-center w-full sm:w-[90%] md:w-[82%] bg-[#e0e0e0] rounded-[10px] py-4 sm:py-5 md:py-[20px] px-4 sm:px-5 md:px-[20px]">
              <div className="flex flex-row justify-center items-center w-full">
                <input
                  type="text"
                  placeholder="ابحث حسب عنوان المقالة"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="flex-1 text-[16px] sm:text-[20px] md:text-[24px] font-semibold leading-[27px] sm:leading-[34px] md:leading-[41px] text-center text-[#818181] bg-transparent outline-none placeholder-[#818181] font-somar px-4 sm:px-6 md:px-[26px]"
                />
                <Image
                  src="/images/img_search.svg"
                  alt="Search icon"
                  width={38}
                  height={38}
                  className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] md:w-[38px] md:h-[38px] ml-2 sm:ml-3 md:ml-[14px] cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* Category Filter Buttons */}
          <div className="flex flex-row justify-center items-center w-full gap-2 sm:gap-3 md:gap-[18px] flex-wrap">
            {categories?.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category?.name)}
                className={`px-4 py-1 sm:px-6 sm:py-1.5 md:px-[34px] md:py-[6px] text-[16px] sm:text-[20px] md:text-[26px] font-extrabold leading-[27px] sm:leading-[34px] md:leading-[44px] text-left rounded-[12px] transition-all duration-200 hover:scale-105 font-somar ${
                  selectedCategory === category?.name || (category?.name === 'الكل' && selectedCategory === 'الكل')
                    ? 'bg-[#008695] text-[#ffffff]' :'bg-[#c2c2c2] text-[#f5f5f5] hover:bg-[#989898]'
                }`}
              >
                {category?.name}
              </button>
            ))}
          </div>
        </div>
        {/* Articles Content Area - Placeholder for future articles */}
        <div className="w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-center items-center bg-white rounded-lg shadow-sm mb-8 sm:mb-12 md:mb-16">
          <div className="text-center p-8 sm:p-12 md:p-16">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 md:mb-8 bg-[#f1f1f1] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#818181]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-bold text-[#008695] mb-2 sm:mb-3 md:mb-4 font-somar">
              {selectedCategory === 'الكل' ? 'جميع المقالات' : `مقالات ${selectedCategory}`}
            </h3>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#818181] font-somar">
              {searchQuery 
                ? `البحث عن: "${searchQuery}"`
                : 'ستظهر المقالات هنا قريباً'
              }
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default ArticlesPage;