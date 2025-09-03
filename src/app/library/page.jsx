'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
const LibraryPage = () => {
  // Activities data
  const activitiesData = {
    title: "الفعاليات",
    image: "/images/img_qoute_2_1.png"
  };
  // Podcast data
  const podcastsData = [
    {
      id: 1,
      image: "/images/img_rectangle_21_348x628.png",
      number: "#2"
    },
    {
      id: 2,
      image: "/images/img_rectangle_21_1.png",
      number: "#4"
    },
    {
      id: 3,
      image: "/images/img_rectangle_21_350x628.png",
      number: "#1"
    },
    {
      id: 4,
      image: "/images/img_rectangle_21.png",
      number: "#3"
    }
  ];
  // Articles data
  const articlesData = [
    {
      id: 1,
      image: "/images/img_rectangle_19.png",
      title: "كيف تدير ميزانية الأسرة",
      description: "المصروفات من أكتر الخلافات بين الزوجين. علشان كده:المصروفات من أكتر أسباب الخلافات بين ",
      author: "كوتش: أميرة حسين",
      date: "15 سبتمبر 2025 ",
      authorImage: "/images/img_ellipse_1107.png"
    },
    {
      id: 2,
      image: "/images/img_rectangle_19_256x380.png",
      title: "أهمية الصحة النفسية للأسرة",
      description: "الصحة النفسية مش رفاهية، هي أساس بيت متوازن. الأسرة اللي أفرادها بيدعموا بعض نفسيًا،  ",
      author: "كوتش: أميرة حسين",
      date: "15 سبتمبر 2025 ",
      authorImage: "/images/img_ellipse_1107.png"
    },
    {
      id: 3,
      image: "/images/img_rectangle_19_1.png",
      title: " سر العلاقة الأسرية الناجحة",
      description: "في أي أسرة، التواصل هو العمود الفقري للعلاقة. مش مجرد كلام، لكن إصغاء وفهم.",
      author: "كوتش: أميرة حسين",
      date: "15 سبتمبر 2025 ",
      authorImage: "/images/img_ellipse_1107.png"
    }
  ];
  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#f1f1f1] font-somar">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="w-full bg-global-1 rounded-b-[95px] sm:rounded-b-[150px] md:rounded-b-[190px] lg:rounded-b-[200px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-end pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-0">
            {/* Hero Image */}
            <div className="w-full lg:w-[44%] flex justify-center items-end mb-8 lg:mb-0 lg:ml-[6px]">
              <Image
                src="/images/img_untitled_design.png"
                alt="Family Library"
                width={538}
                height={340}
                className="w-[200px] h-[127px] sm:w-[300px] sm:h-[190px] md:w-[400px] md:h-[253px] lg:w-[538px] lg:h-[340px] object-cover"
              />
            </div>
            {/* Hero Content */}
            <div className="flex flex-col justify-center items-end w-full lg:w-auto lg:flex-1 lg:h-[340px] pb-8 sm:pb-12 md:pb-16 lg:pb-0">
              <div className="flex flex-row justify-end items-center w-full bg-transparent px-4 sm:px-8 md:px-12 lg:px-[40px] py-2 sm:py-3 md:py-[12px] mb-4 sm:mb-6 md:mb-8">
                <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-extrabold leading-[42px] sm:leading-[63px] md:leading-[84px] lg:leading-[106px] text-center text-global-10 font-somar">
                  مكتبة أُسرة
                </h1>
              </div>
              <p className="text-sm sm:text-base md:text-[16px] font-semibold leading-5 sm:leading-6 md:leading-[27px] text-center text-global-10 font-somar mr-4 sm:mr-6 md:mr-[22px]">
                تعرف على مكتبة أُسرة
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Activities Section */}
      <section className="w-full bg-global-6 py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col justify-start items-center w-full gap-6 sm:gap-8 md:gap-12">
            {/* Section Title */}
            <div className="flex flex-col justify-start items-center gap-2 sm:gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-tight sm:leading-tight md:leading-[85px] text-center text-global-2">
                {activitiesData?.title}
              </h2>
              <Image
                src="/images/img_vector_1.svg"
                alt="Decorative line"
                width={258}
                height={40}
                className="w-[150px] h-[24px] sm:w-[200px] sm:h-[30px] md:w-[258px] md:h-[40px]"
              />
            </div>
            {/* Activities Image */}
            <div className="flex justify-center items-center w-full">
              <Image
                src={activitiesData?.image}
                alt="Activities"
                width={1276}
                height={634}
                className="w-full max-w-[1276px] h-auto rounded-[12px] sm:rounded-[18px] md:rounded-[24px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Podcasts Section */}
      <section className="w-full bg-global-6 py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col justify-start items-center w-full gap-6 sm:gap-8 md:gap-12">
            {/* Section Title */}
            <div className="flex flex-col justify-start items-center gap-2 sm:gap-4">
              <Link href="/podcasts" className="hover:opacity-80 transition-opacity duration-200">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-tight sm:leading-tight md:leading-[85px] text-center text-global-2 cursor-pointer">
                  البودكاست
                </h2>
              </Link>
              <Image
                src="/images/img_vector_1.svg"
                alt="Decorative line"
                width={258}
                height={40}
                className="w-[150px] h-[24px] sm:w-[200px] sm:h-[30px] md:w-[258px] md:h-[40px]"
              />
            </div>
            {/* Podcasts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-[20px] w-full max-w-[1276px]">
              {podcastsData?.map((podcast, index) => (
                <div key={podcast?.id} className="relative">
                  <Image
                    src={podcast?.image}
                    alt={`Podcast ${podcast?.number}`}
                    width={628}
                    height={348}
                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[348px] object-cover rounded-[6px] sm:rounded-[8px] md:rounded-[10px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Articles Section */}
      <section className="w-full bg-global-6 py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col justify-start items-center w-full gap-6 sm:gap-8 md:gap-12">
            {/* Section Title */}
            <div className="flex flex-col justify-start items-center gap-2 sm:gap-4">
              <Link href="/articles" className="hover:opacity-80 transition-opacity duration-200">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-tight sm:leading-tight md:leading-[85px] text-center text-global-2 cursor-pointer">
                  المقالات
                </h2>
              </Link>
              <Image
                src="/images/img_vector_1.svg"
                alt="Decorative line"
                width={258}
                height={40}
                className="w-[150px] h-[24px] sm:w-[200px] sm:h-[30px] md:w-[258px] md:h-[40px]"
              />
            </div>
            {/* Articles Container */}
            <div className="flex flex-row justify-center items-center w-full max-w-[1276px] gap-4 sm:gap-6 md:gap-8">
              {/* Left Arrow */}
              <Image
                src="/images/img_component_23.svg"
                alt="Previous testimonial"
                width={44}
                height={44}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-[44px] md:h-[44px] cursor-pointer hover:scale-110 transition-transform duration-200"
              />
              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-[28px] w-full">
                {articlesData?.map((article) => (
                  <div key={article?.id} className="flex flex-col justify-start items-center bg-global-7 rounded-[12px] sm:rounded-[15px] md:rounded-[18px] p-3 sm:p-4 md:p-[12px] hover:shadow-lg transition-shadow duration-200">
                    {/* Article Image */}
                    <Image
                      src={article?.image}
                      alt={article?.title}
                      width={380}
                      height={256}
                      className="w-full h-[180px] sm:h-[220px] md:h-[256px] object-cover rounded-[12px] sm:rounded-[15px] md:rounded-[18px]"
                    />
                    {/* Article Content */}
                    <div className="flex flex-col justify-start items-center w-full px-4 sm:px-5 md:px-[22px] mt-3 sm:mt-4 md:mt-[12px]">
                      <h3 className="text-lg sm:text-xl md:text-[26px] font-extrabold leading-6 sm:leading-8 md:leading-[43px] text-center text-global-2 mb-2 sm:mb-3 md:mb-4">
                        {article?.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-[16px] font-medium leading-5 sm:leading-6 md:leading-[26px] text-center text-global-6 mb-4 sm:mb-5 md:mb-6">
                        {article?.description}
                      </p>
                    </div>
                    {/* Author Info */}
                    <div className="flex flex-row gap-1 sm:gap-2 md:gap-[4px] justify-start items-center w-full px-4 sm:px-5 md:px-[22px] mt-4 sm:mt-5 md:mt-[24px] mb-3 sm:mb-4 md:mb-[12px]">
                      <div className="flex flex-col justify-start items-end flex-1">
                        <p className="text-xs sm:text-sm md:text-[14px] font-semibold leading-4 sm:leading-5 md:leading-[23px] text-center text-global-2">
                          {article?.author}
                        </p>
                        <p className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold leading-3 sm:leading-4 md:leading-[18px] text-center text-global-6">
                          {article?.date}
                        </p>
                      </div>
                      <Image
                        src={article?.authorImage}
                        alt="Author"
                        width={56}
                        height={56}
                        className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] rounded-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Right Arrow */}
              <Image
                src="/images/img_component_22.svg"
                alt="Next testimonial"
                width={44}
                height={44}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-[44px] md:h-[44px] cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default LibraryPage;