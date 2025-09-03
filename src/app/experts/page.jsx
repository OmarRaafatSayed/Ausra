'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
const ExpertsPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    type: '',
    specialty: '',
    experience: '',
    position: ''
  });
  const experts = [
    {
      id: 1,
      name: 'كوتش: أمنية محمد',
      specialty: 'اخصائي أُسري',
      experience: '3',
      image: '/images/img_rectangle_4.png'
    },
    {
      id: 2,
      name: 'دكتور: محمد حربي',
      specialty: 'كوتش شباب, مؤسس قدرات',
      experience: '25',
      image: '/images/img_rectangle_4_242x256.png'
    },
    {
      id: 3,
      name: 'كوتش: مريم سمير',
      specialty: 'اخصائي اجتماعي,',
      experience: '7',
      image: '/images/img_rectangle_4_1.png'
    },
    {
      id: 4,
      name: 'كوتش: أميرة حسين',
      specialty: 'اخصائي أُسري, مؤسس أُسرة',
      experience: '15',
      image: '/images/img_rectangle_4_2.png'
    },
    {
      id: 5,
      name: 'كوتش: أميرة حسين',
      specialty: 'اخصائي أُسري, مؤسس أُسرة',
      experience: '15',
      image: '/images/img_rectangle_4_2.png'
    },
    {
      id: 6,
      name: 'كوتش: أمنية محمد',
      specialty: 'اخصائي أُسري',
      experience: '3',
      image: '/images/img_rectangle_4.png'
    },
    {
      id: 7,
      name: 'دكتور: محمد حربي',
      specialty: 'كوتش شباب, مؤسس قدرات',
      experience: '25',
      image: '/images/img_rectangle_4_242x256.png'
    },
    {
      id: 8,
      name: 'كوتش: مريم سمير',
      specialty: 'اخصائي اجتماعي,',
      experience: '7',
      image: '/images/img_rectangle_4_1.png'
    }
  ];
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };
  const handleBookSession = (expertId) => {
    console.log(`Booking session with expert ${expertId}`);
  };
  const handleViewProfile = (expertId) => {
    console.log(`Viewing profile of expert ${expertId}`);
  };
  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-6">
      <Header />
      {/* Hero Section */}
      <section className="w-full bg-global-1 rounded-b-[95px] sm:rounded-b-[150px] md:rounded-b-[190px] lg:rounded-b-[200px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-end pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-0">
            {/* Hero Image */}
            <div className="w-full lg:w-[44%] flex justify-center items-end mb-8 lg:mb-0 lg:ml-[6px]">
              <Image
                src="/images/img_untitled_design.png"
                alt="Experts"
                width={269}
                height={170}
                className="w-[200px] h-[127px] sm:w-[300px] sm:h-[190px] md:w-[400px] md:h-[253px] lg:w-[538px] lg:h-[340px] object-cover"
              />
            </div>
            {/* Hero Content */}
            <div className="flex flex-col justify-center items-end w-full lg:w-auto lg:flex-1 lg:h-[340px] pb-8 sm:pb-12 md:pb-16 lg:pb-0">
              <div className="flex flex-row justify-end items-center w-full bg-transparent px-4 sm:px-8 md:px-12 lg:px-[40px] py-2 sm:py-3 md:py-[12px] mb-4 sm:mb-6 md:mb-8">
                <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-extrabold leading-[42px] sm:leading-[63px] md:leading-[84px] lg:leading-[106px] text-center text-global-10 font-somar">
                  الخبراء
                </h1>
              </div>
              <p className="text-sm sm:text-base md:text-[16px] font-semibold leading-5 sm:leading-6 md:leading-[27px] text-center text-global-10 font-somar mr-4 sm:mr-6 md:mr-[22px]">
                تعرف على خبرائنا في أُسرة
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <div className="flex flex-col justify-start items-center w-full">
        {/* Page Title */}
        <div className="flex flex-row justify-center items-center px-2 sm:px-3 md:px-[12px] py-2 sm:py-3 md:py-[12px] mt-8 sm:mt-10 md:mt-[42px]">
          <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-extrabold leading-[42px] sm:leading-[63px] md:leading-[106px] text-center text-global-2 font-somar">
            الخبراء
          </h2>
        </div>
        {/* Decorative Line */}
        <Image
          src="/images/img_vector_1.svg"
          alt="Decorative line"
          width={129}
          height={20}
          className="w-[100px] h-[15px] sm:w-[150px] sm:h-[23px] md:w-[200px] md:h-[30px] lg:w-[258px] lg:h-[40px] mt-4 sm:mt-6 md:mt-8"
        />
        {/* Search Bar */}
        <div className="flex flex-row justify-center items-center w-full sm:w-[80%] md:w-[60%] lg:w-[46%] mt-8 sm:mt-10 md:mt-[38px]">
          <div className="flex flex-row justify-center items-center w-full bg-global-5 rounded-[10px] px-4 sm:px-5 md:px-[20px] py-4 sm:py-5 md:py-[20px]">
            <div className="flex flex-row justify-center items-center w-full">
              <p className="text-base sm:text-lg md:text-[24px] font-semibold leading-6 sm:leading-8 md:leading-[41px] text-center text-global-7 font-somar">
                ابحث حسب الأسم, و التخصص
              </p>
              <Image
                src="/images/img_search.svg"
                alt="Search"
                width={19}
                height={19}
                className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] md:w-[38px] md:h-[38px] ml-3 sm:ml-4 md:ml-[14px]"
              />
            </div>
          </div>
        </div>
        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-[30px] w-full px-4 sm:px-8 md:px-16 lg:px-[370px] mt-8 sm:mt-12 md:mt-[64px]">
          {/* Type Filter */}
          <div className="flex flex-col gap-1 sm:gap-[2px] justify-start items-center w-full sm:w-[272px]">
            <p className="text-sm sm:text-base md:text-[15px] font-semibold leading-5 sm:leading-6 md:leading-[25px] text-right text-global-4 font-somar">
              النوع
            </p>
            <div className="flex flex-row justify-between items-center w-full border border-global-6 rounded-[5px] px-4 sm:px-5 md:px-[20px] py-2 sm:py-3 md:py-[12px]">
              <Image
                src="/images/img_uil_arrow.svg"
                alt="Arrow"
                width={10}
                height={10}
                className="w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]"
              />
              <p className="text-sm sm:text-base md:text-[15px] font-semibold leading-5 sm:leading-6 md:leading-[25px] text-right text-global-8 font-somar">
                أختر
              </p>
            </div>
          </div>
          {/* Specialty Filter */}
          <div className="flex flex-col gap-1 sm:gap-[2px] justify-start items-center w-full sm:w-[272px]">
            <p className="text-sm sm:text-base md:text-[15px] font-semibold leading-5 sm:leading-6 md:leading-[25px] text-right text-global-4 font-somar">
              التخصص
            </p>
            <div className="flex flex-row justify-between items-center w-full border border-global-6 rounded-[5px] px-4 sm:px-5 md:px-[20px] py-2 sm:py-3 md:py-[12px]">
              <Image
                src="/images/img_uil_arrow.svg"
                alt="Arrow"
                width={10}
                height={10}
                className="w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]"
              />
              <p className="text-sm sm:text-base md:text-[15px] font-semibold leading-5 sm:leading-6 md:leading-[25px] text-right text-global-8 font-somar">
                أختر
              </p>
            </div>
          </div>
          {/* Experience Filter */}
          <div className="flex flex-col gap-1 sm:gap-[2px] justify-start items-center w-full sm:w-[272px]">
            <p className="text-sm sm:text-base md:text-[15px] font-semibold leading-5 sm:leading-6 md:leading-[25px] text-right text-global-4 font-somar">
              سنوات الخبرة
            </p>
            <div className="flex flex-row justify-between items-center w-full border border-global-6 rounded-[5px] px-4 sm:px-5 md:px-[20px] py-2 sm:py-3 md:py-[12px]">
              <Image
                src="/images/img_uil_arrow.svg"
                alt="Arrow"
                width={10}
                height={10}
                className="w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]"
              />
              <p className="text-sm sm:text-base md:text-[15px] font-semibold leading-5 sm:leading-6 md:leading-[25px] text-right text-global-8 font-somar">
                أختر
              </p>
            </div>
          </div>
          {/* Position Filter */}
          <div className="flex flex-col gap-1 sm:gap-[2px] justify-start items-center w-full sm:w-[272px]">
            <p className="text-sm sm:text-base md:text-[15px] font-semibold leading-5 sm:leading-6 md:leading-[25px] text-right text-global-4 font-somar">
              المسمى الوظيفي
            </p>
            <div className="flex flex-row justify-between items-center w-full border border-global-6 rounded-[5px] px-4 sm:px-5 md:px-[20px] py-2 sm:py-3 md:py-[12px]">
              <Image
                src="/images/img_uil_arrow.svg"
                alt="Arrow"
                width={10}
                height={10}
                className="w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]"
              />
              <p className="text-sm sm:text-base md:text-[15px] font-semibold leading-5 sm:leading-6 md:leading-[25px] text-right text-global-8 font-somar">
                أختر
              </p>
            </div>
          </div>
        </div>
        {/* Experts Grid */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 md:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {experts?.map((expert) => (
              <div
                key={expert?.id}
                className="flex flex-col gap-6 sm:gap-8 md:gap-[26px] justify-center items-center bg-global-7 rounded-[10px] p-6 sm:p-8 md:p-[20px] shadow-[4px_4px_12px_#0000000f] hover:shadow-lg transition-shadow duration-300"
              >
              {/* Expert Image and Info */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-[20px] justify-start items-center w-full">
                <Image
                  src={expert?.image}
                  alt={expert?.name}
                  width={128}
                  height={121}
                  className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[242px] object-cover rounded-[10px]"
                />
                <div className="flex flex-col justify-start items-center w-full">
                  <h3 className="text-lg sm:text-xl md:text-[25px] font-extrabold leading-6 sm:leading-8 md:leading-[41px] text-center text-global-2 font-somar">
                    {expert?.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-[14px] font-medium leading-4 sm:leading-5 md:leading-[23px] text-center text-global-3 font-somar mt-1 sm:mt-2">
                    {expert?.specialty}
                  </p>
                </div>
              </div>
              {/* Actions and Experience */}
              <div className="flex flex-row justify-start items-start w-full">
                {/* Action Buttons */}
                <div className="flex flex-col justify-start items-center w-full mb-1 sm:mb-[4px] md:mb-[6px]">
                  <Button
                    onClick={() => handleBookSession(expert?.id)}
                    className="w-full bg-global-1 text-global-7 text-sm sm:text-base md:text-[18px] font-extrabold leading-5 sm:leading-6 md:leading-[31px] rounded-[4px] px-4 sm:px-6 md:px-[34px] py-1 sm:py-2 md:py-[4px] hover:bg-global-2 transition-all duration-200"
                  >
                    أحجز جلسة
                  </Button>
                  <button
                    onClick={() => handleViewProfile(expert?.id)}
                    className="flex flex-row justify-center items-center px-1 sm:px-2 md:px-[4px] py-1 sm:py-2 md:py-[4px] mt-[-1px] sm:mt-[-2px] md:mt-[-4px]"
                  >
                    <p className="text-sm sm:text-base md:text-[15px] font-extrabold leading-4 sm:leading-5 md:leading-[25px] text-left text-global-2 font-somar">
                      عرض الملف الشخصي
                    </p>
                  </button>
                </div>
                {/* Experience Badge */}
                <div className="flex flex-col justify-start items-end w-[30%] sm:w-[24%] md:w-[30%]">
                  <div className="flex flex-col justify-start items-end">
                    <p className="text-sm sm:text-base md:text-[19px] font-bold leading-4 sm:leading-5 md:leading-[21px] text-right text-global-3 font-somar">
                      <span className="text-global-3">الخبرة:</span>
                      <br />
                      <span className="text-lg sm:text-xl md:text-[27px] font-bold leading-6 sm:leading-7 md:leading-[30px] text-global-2">+</span>
                    </p>
                    <p className="text-lg sm:text-2xl md:text-[31px] font-bold leading-6 sm:leading-8 md:leading-[51px] text-center text-global-2 font-somar mt-[-20px] sm:mt-[-30px] md:mt-[-40px] mr-3 sm:mr-4 md:mr-[24px]">
                      {expert?.experience}
                    </p>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ExpertsPage;