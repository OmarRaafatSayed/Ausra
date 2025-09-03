'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
const ExpertProfilePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const testimonials = [
    {
      id: 1,
      name: 'مصطفى مرسال',
      title: 'طالب جامعي',
      rating: 5,
      comment: 'كوتش أميرة كوتش توب التوب  توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب ',
      avatar: '/images/img_rectangle_4_70x70.png'
    },
    {
      id: 2,
      name: 'مصطفى مرسال',
      title: 'طالب جامعي',
      rating: 5,
      comment: 'كوتش أميرة كوتش توب التوب  توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب ',
      avatar: '/images/img_rectangle_4_70x70.png'
    },
    {
      id: 3,
      name: 'مصطفى مرسال',
      title: 'طالب جامعي',
      rating: 5,
      comment: 'كوتش أميرة كوتش توب التوب  توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب التوب توب ',
      avatar: '/images/img_rectangle_4_70x70.png'
    }
  ];
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  const handleBookSession = () => {
    // Handle booking session logic
    console.log('Booking session...');
  };
  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-6">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex flex-col justify-start items-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Back Navigation */}
        <div className="flex flex-row justify-start items-center w-full mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-[18px]">
          <Link href="/experts" className="flex flex-row justify-start items-center gap-2">
            <Image
              src="/images/img_vector_cyan_800.svg"
              alt="Back arrow"
              width={14}
              height={12}
              className="w-[14px] h-[12px]"
            />
            <span className="text-[12px] font-medium leading-[20px] text-center text-[#008695] font-somar ml-[6px]">
              الرجوع للخلف
            </span>
          </Link>
        </div>
        {/* Expert Profile Section */}
        <div className="relative w-full mb-6 sm:mb-8 md:mb-[24px]">
          <div className="flex flex-col justify-start items-end w-full">
            {/* Hero Background with Logo */}
            <div className="flex flex-row justify-end items-center w-full max-w-[1276px] mb-4 sm:mb-6 md:mb-0">
              <div 
                className="flex flex-row justify-center items-end w-full bg-[#008695] rounded-[20px] px-8 sm:px-12 md:px-[56px] py-12 sm:py-16 md:py-[72px] relative"
                style={{
                  backgroundImage: "url('/images/img_vectordec202052generated_1.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <Image
                  src="/images/img_logo.svg"
                  alt="Ausrah Logo"
                  width={258}
                  height={116}
                  className="w-[150px] h-[67px] sm:w-[200px] sm:h-[90px] md:w-[258px] md:h-[116px] mt-6 sm:mt-8 md:mt-[36px]"
                />
              </div>
            </div>
            {/* Expert Avatar */}
            <div className="relative -mt-12 sm:-mt-16 md:-mt-[48px] mr-4 sm:mr-6 md:mr-[18px] mb-8 sm:mb-12 md:mb-[46px]">
              <Image
                src="/images/img_rectangle_4_232x232.png"
                alt="Expert Avatar"
                width={232}
                height={232}
                className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[232px] md:h-[232px] rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
          {/* Expert Info and Book Button */}
          <div className="flex flex-col sm:flex-row justify-start items-start w-full gap-4 sm:gap-6 md:gap-0 px-4 sm:px-6 md:px-[18px]">
            {/* Book Session Button */}
            <div className="flex justify-start items-start w-full sm:w-auto order-2 sm:order-1">
              <Button
                onClick={handleBookSession}
                className="bg-[#008695] text-white text-base sm:text-lg md:text-[27px] font-extrabold leading-6 sm:leading-8 md:leading-[45px] px-6 sm:px-8 md:px-[34px] py-2 sm:py-3 md:py-[10px] rounded-[6px] hover:bg-[#006b7a] transition-all duration-200 w-full sm:w-auto"
              >
                احجز جلسة
              </Button>
            </div>
            {/* Expert Details */}
            <div className="flex flex-col justify-start items-end w-full sm:w-[58%] order-1 sm:order-2">
              <h1 className="text-xl sm:text-2xl md:text-[31px] font-extrabold leading-6 sm:leading-8 md:leading-[51px] text-right text-[#008695] font-somar mb-2 sm:mb-3 md:mb-4">
                كوتش: أميرة حسين
              </h1>
              <p className="text-sm sm:text-base md:text-[17px] font-medium leading-5 sm:leading-6 md:leading-[29px] text-right text-[#242424] font-somar mb-2 sm:mb-3 md:mb-4">
                اخصائي أُسري, مؤسس أُسرة
              </p>
              {/* Rating */}
              <div className="flex flex-row justify-end items-center w-full gap-2">
                <Image
                  src="/images/img_vector_amber_700.svg"
                  alt="Star rating"
                  width={12}
                  height={12}
                  className="w-[12px] h-[12px]"
                />
                <span className="text-sm sm:text-base md:text-[17px] font-medium leading-5 sm:leading-6 md:leading-[29px] text-right text-[#005d9a] font-somar">
                  التقيمات (4.9)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Video Section */}
        <div className="relative w-full max-w-[850px] mx-auto mb-6 sm:mb-8 md:mb-[10px]">
          <div className="relative">
            <Image
              src="/images/img_rectangle_15.png"
              alt="Expert video thumbnail"
              width={850}
              height={444}
              className="w-full h-[250px] sm:h-[300px] md:h-[444px] object-cover rounded-[20px]"
            />
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#008695] to-transparent rounded-[20px] border-2 border-[#008695] flex flex-row justify-end items-end p-6 sm:p-8 md:p-[46px]">
              <span className="text-lg sm:text-xl md:text-[24px] font-bold leading-6 sm:leading-8 md:leading-[41px] text-right text-white font-somar mr-2 sm:mr-4 md:mr-[8px]">
                شاهد الفيديو
              </span>
              <button
                onClick={handleVideoPlay}
                className="bg-white rounded-full p-3 sm:p-4 md:p-[14px] hover:scale-110 transition-transform duration-200"
                aria-label="Play video"
              >
                <Image
                  src="/images/img_group_11.svg"
                  alt="Play button"
                  width={18}
                  height={18}
                  className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px]"
                />
              </button>
            </div>
          </div>
        </div>
        {/* About Expert Section */}
        <div className="flex flex-col justify-start items-end w-full max-w-[868px] mx-auto mb-8 sm:mb-12 md:mb-[100px]">
          {/* About Title */}
          <h2 className="text-2xl sm:text-3xl md:text-[35px] font-bold leading-6 sm:leading-8 md:leading-[57px] text-right text-[#008695] font-somar mb-4 sm:mb-6 md:mb-[16px] mr-4 sm:mr-6 md:mr-[22px]">
            عن الخبير
          </h2>
          {/* About Description */}
          <p className="text-sm sm:text-base md:text-[18px] font-medium leading-6 sm:leading-7 md:leading-[30px] text-right text-[#242424] font-somar w-full sm:w-[98%] mb-6 sm:mb-8 md:mb-[24px] mr-4 sm:mr-6 md:mr-[20px]">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            <br /><br />
            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          </p>
          {/* Testimonials Title */}
          <h3 className="text-2xl sm:text-3xl md:text-[35px] font-bold leading-6 sm:leading-8 md:leading-[57px] text-right text-[#008695] font-somar mb-2 sm:mb-3 md:mb-[10px] mr-4 sm:mr-6 md:mr-[20px]">
            <span>التقيمات</span>
            <span className="text-sm sm:text-base md:text-[18px] font-bold leading-6 sm:leading-8 md:leading-[57px]">(3)</span>
          </h3>
          {/* Testimonials List */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-[10px] w-full">
            {testimonials?.map((testimonial) => (
              <div key={testimonial?.id} className="relative w-full">
                {/* Quote Icon */}
                <div className="absolute top-0 right-0 z-10">
                  <Image
                    src="/images/img_ri_double_quotes_r.svg"
                    alt="Quote"
                    width={42}
                    height={42}
                    className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] md:w-[42px] md:h-[42px]"
                  />
                </div>
                {/* Testimonial Card */}
                <div className="bg-[#d9d9d9] rounded-[14px] p-2 sm:p-3 md:p-[8px] w-full">
                  <div className="flex flex-row justify-center items-center w-full gap-4 sm:gap-6 md:gap-0">
                    {/* Testimonial Text */}
                    <p className="text-xs sm:text-sm md:text-[15px] font-semibold leading-5 sm:leading-6 md:leading-[24px] text-justify text-[#242424] font-somar w-full sm:w-[74%] px-2 sm:px-4 md:px-6">
                      {testimonial?.comment}
                    </p>
                    {/* Divider Line */}
                    <div className="w-[1px] h-16 sm:h-20 md:h-[92px] bg-[#989898] rounded-[1px] mx-2 sm:mx-4 md:mx-[22px]"></div>
                    {/* User Info */}
                    <div className="flex flex-col justify-start items-end w-full sm:w-[12%] mb-4 sm:mb-6 md:mb-[20px]">
                      <div className="flex flex-col justify-start items-end w-full mb-1 sm:mb-2 md:mb-[-2px]">
                        <span className="text-xs sm:text-sm md:text-[11px] font-bold leading-4 sm:leading-5 md:leading-[19px] text-right text-[#008695] font-somar">
                          {testimonial?.name}
                        </span>
                        <span className="text-xs sm:text-sm md:text-[11px] font-medium leading-4 sm:leading-5 md:leading-[19px] text-right text-[#6a6a6a] font-somar">
                          {testimonial?.title}
                        </span>
                      </div>
                      {/* Rating Stars */}
                      <Image
                        src="/images/img_frame_1618872835.svg"
                        alt="5 star rating"
                        width={60}
                        height={10}
                        className="w-[40px] h-[7px] sm:w-[50px] sm:h-[8px] md:w-[60px] md:h-[10px]"
                      />
                    </div>
                    {/* User Avatar */}
                    <Image
                      src={testimonial?.avatar}
                      alt={`${testimonial?.name} avatar`}
                      width={70}
                      height={70}
                      className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] rounded-full ml-1 sm:ml-2 md:ml-[6px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default ExpertProfilePage;