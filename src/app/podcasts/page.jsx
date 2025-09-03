'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
const PodcastsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const podcastData = [
    {
      id: 1,
      image: '/images/img_rectangle_21_348x628.png',
      title: 'عقوق الأبناء مراة تربيتك',
      subtitle: 'هوتيش أميرة حسين',
      episode: '#1',
      category: 'التربية'
    },
    {
      id: 2,
      image: '/images/img_rectangle_21_350x628.png',
      title: 'كيف تجعل طفلك المراهق يتحدث معك',
      subtitle: 'دكتور محمد جبير',
      episode: '#2',
      category: 'التربية'
    },
    {
      id: 3,
      image: '/images/img_rectangle_21_1.png',
      title: 'طرق تجعل الطفل يحب الرياضة',
      subtitle: 'هوتيش أميرة حسين',
      episode: '#4',
      category: 'التربية'
    },
    {
      id: 4,
      image: '/images/img_rectangle_21.png',
      title: 'سحر تنشيط سوق الكويت',
      subtitle: 'هوتيش أميرة حسين',
      episode: '#3',
      category: 'التربية'
    }
  ];
  const handleSearch = (e) => {
    setSearchQuery(e?.target?.value);
  };
  const filteredPodcasts = podcastData?.filter(podcast =>
    podcast?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    podcast?.subtitle?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );
  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-6 font-somar">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex flex-col justify-start items-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16">
        {/* Back Button and Title Section */}
        <div className="flex flex-col sm:flex-row justify-start items-start w-full mb-8 sm:mb-12 md:mb-16">
          {/* Back Button */}
          <div className="flex flex-row justify-start items-center mb-6 sm:mb-0 sm:mt-[38px]">
            <Image
              src="/images/img_vector_cyan_800.svg"
              alt="Back arrow"
              width={14}
              height={12}
              className="w-[14px] h-[12px]"
            />
            <Link 
              href="/"
              className="text-xs sm:text-sm md:text-[12px] font-medium leading-4 sm:leading-5 md:leading-[20px] text-center text-[#008695] ml-2 sm:ml-3 md:ml-[6px] hover:underline"
            >
              الرجوع للخلف
            </Link>
          </div>
          {/* Page Title */}
          <div className="flex justify-center items-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-tight sm:leading-tight md:leading-[106px] text-center text-[#008695]">
              البودكاست
            </h1>
          </div>
        </div>
        {/* Decorative Line */}
        <div className="flex justify-center items-center w-full mb-8 sm:mb-12 md:mb-[14px]">
          <Image
            src="/images/img_vector_1.svg"
            alt="Decorative line"
            width={258}
            height={40}
            className="w-[150px] h-[24px] sm:w-[200px] sm:h-[30px] md:w-[258px] md:h-[40px]"
          />
        </div>
        {/* Search Section */}
        <div className="flex flex-row justify-center items-center w-full mb-8 sm:mb-12 md:mb-[62px] mt-8 sm:mt-12 md:mt-[70px]">
          <div className="flex flex-row justify-center items-center w-full max-w-[600px] md:max-w-[880px] bg-[#e0e0e0] rounded-[10px] px-4 sm:px-5 md:px-[20px] py-4 sm:py-5 md:py-[20px]">
            <input
              type="text"
              placeholder="ابحث حسب اسم  او عنوان البودكاست"
              value={searchQuery}
              onChange={handleSearch}
              className="flex-1 text-base sm:text-lg md:text-[24px] font-semibold leading-6 sm:leading-8 md:leading-[41px] text-center text-[#818181] bg-transparent outline-none placeholder-[#818181]"
            />
            <Image
              src="/images/img_search.svg"
              alt="Search icon"
              width={38}
              height={38}
              className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[38px] md:h-[38px] ml-3 sm:ml-4 md:ml-[14px] cursor-pointer"
            />
          </div>
        </div>
        {/* Podcast Grid */}
        <div className="relative w-full max-w-[1276px] mb-8 sm:mb-12 md:mb-[62px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-[20px] justify-start items-start w-full">
            {/* Left Column */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-[20px] justify-start items-center w-full">
              {filteredPodcasts?.slice(0, 2)?.map((podcast, index) => (
                <div key={podcast?.id} className="relative w-full group cursor-pointer">
                  <Image
                    src={podcast?.image}
                    alt={podcast?.title}
                    width={628}
                    height={348}
                    className="w-full h-[200px] sm:h-[250px] md:h-[348px] object-cover rounded-[10px] transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Episode Number Badge */}
                  <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 bg-[#ff6b6b] text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-bold">
                    {podcast?.episode}
                  </div>
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-5 md:p-6 rounded-b-[10px]">
                    <div className="text-xs sm:text-sm md:text-base text-[#00bcd4] font-semibold mb-1 sm:mb-2">
                      {podcast?.category}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                      {podcast?.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">
                      {podcast?.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-[20px] justify-start items-center w-full">
              {filteredPodcasts?.slice(2, 4)?.map((podcast, index) => (
                <div key={podcast?.id} className="relative w-full group cursor-pointer">
                  <Image
                    src={podcast?.image}
                    alt={podcast?.title}
                    width={628}
                    height={index === 0 ? 350 : 348}
                    className="w-full h-[200px] sm:h-[250px] md:h-[348px] object-cover rounded-[10px] transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Episode Number Badge */}
                  <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 bg-[#ff6b6b] text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-bold">
                    {podcast?.episode}
                  </div>
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-5 md:p-6 rounded-b-[10px]">
                    <div className="text-xs sm:text-sm md:text-base text-[#00bcd4] font-semibold mb-1 sm:mb-2">
                      {podcast?.category}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                      {podcast?.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">
                      {podcast?.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* No Results Message */}
          {filteredPodcasts?.length === 0 && (
            <div className="flex justify-center items-center w-full py-12 sm:py-16 md:py-20">
              <p className="text-lg sm:text-xl md:text-2xl text-[#818181] text-center">
                لم يتم العثور على نتائج للبحث "{searchQuery}"
              </p>
            </div>
          )}
        </div>
        {/* Load More Section */}
        {filteredPodcasts?.length > 0 && (
          <div className="flex justify-center items-center w-full mb-8 sm:mb-12 md:mb-16">
            <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#008695] hover:bg-[#006b75] text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105">
              عرض المزيد من البودكاست
            </button>
          </div>
        )}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default PodcastsPage;