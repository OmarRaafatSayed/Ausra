'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
const AboutPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const faqItems = [
    {
      question: "كيف يمكنني حجز جلسة مع خبير؟",
      answer: "يمكنك تصفح قائمة الخبراء، اختيار الخبير المناسب لك، ثم الضغط على زر \"احجز الآن\" لتحديد الموعد والدفع."
    },
    {
      question: "هل الجلسات سرية؟",
      answer: "نعم، جميع الجلسات سرية تماماً ونحن نلتزم بأعلى معايير الخصوصية والأمان."
    },
    {
      question: "كيف يتم اختيار الخبراء في أُسرة؟",
      answer: "يتم اختيار الخبراء بعناية فائقة من خلال معايير صارمة تشمل الخبرة والتخصص والشهادات المعتمدة."
    },
    {
      question: "هل يمكنني تغيير موعد الجلسة أو إلغائها؟",
      answer: "نعم، يمكنك تغيير أو إلغاء موعد الجلسة وفقاً لسياسة الإلغاء والتغيير الخاصة بنا."
    },
    {
      question: "هل يمكنني الاستفادة من أُسرة إذا كنت خارج مصر؟",
      answer: "نعم، يمكنك الاستفادة من خدماتنا من أي مكان في العالم من خلال الجلسات الإلكترونية."
    },
    {
      question: "ما هو الفرق بين الكوتشنج والاستشارة والعلاج النفسي؟",
      answer: "الكوتشنج يركز على تطوير المهارات، الاستشارة تقدم نصائح متخصصة، والعلاج النفسي يعالج القضايا النفسية العميقة."
    },
    {
      question: "كيف يمكنني التواصل مع دعم العملاء؟",
      answer: "يمكنك التواصل مع دعم العملاء من خلال البريد الإلكتروني أو الهاتف أو نموذج التواصل على الموقع."
    }
  ];
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-6">
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
                alt="About Ausrah"
                width={538}
                height={340}
                className="w-[200px] h-[127px] sm:w-[300px] sm:h-[190px] md:w-[400px] md:h-[253px] lg:w-[538px] lg:h-[340px] object-cover"
              />
            </div>
            {/* Hero Content */}
            <div className="flex flex-col justify-center items-end w-full lg:w-auto lg:flex-1 lg:h-[340px] pb-8 sm:pb-12 md:pb-16 lg:pb-0">
              <div className="flex flex-row justify-end items-center w-full bg-transparent px-4 sm:px-8 md:px-12 lg:px-[30px] py-2 sm:py-3 md:py-[12px] mb-4 sm:mb-6 md:mb-8">
                <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-extrabold leading-[42px] sm:leading-[63px] md:leading-[84px] lg:leading-[106px] text-center text-global-10 font-somar">
                  عن أُســــــــرة
                </h1>
              </div>
              <p className="text-sm sm:text-base md:text-[16px] font-semibold leading-5 sm:leading-6 md:leading-[27px] text-center text-global-10 font-somar mr-4 sm:mr-6 md:mr-[22px]">
                لمحة عامة عن أُسرة، رؤيتها، رسالتها، وقيمها الأساسية.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are Section */}
      <div className="flex flex-col justify-center items-center w-full mt-[29px] sm:mt-[44px] md:mt-[58px]">
        <div className="flex justify-center items-center px-2 sm:px-3 md:px-[12px] py-2 sm:py-3 md:py-[12px]">
          <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-extrabold leading-[53px] sm:leading-[80px] md:leading-[106px] text-center text-[#008695] font-somar">
            من نحن
          </h2>
        </div>
        <Image
          src="/images/img_vector_1.svg"
          alt="Decorative line"
          width={129}
          height={20}
          className="w-[129px] sm:w-[194px] md:w-[258px] h-[20px] sm:h-[30px] md:h-[40px] mt-4 sm:mt-6 md:mt-8"
        />
        <Image
          src="/images/img_rectangle_11.png"
          alt="About Ausrah team"
          width={618}
          height={274}
          className="w-full sm:w-[80%] md:w-[64%] max-w-[1236px] h-auto rounded-[10px] mt-6 sm:mt-8 md:mt-[40px] px-4 sm:px-0"
        />
        <p className="text-sm sm:text-lg md:text-[23px] font-semibold leading-[22px] sm:leading-[28px] md:leading-[38px] text-justify text-[#3b3b3b] font-somar w-full sm:w-[80%] md:w-[64%] max-w-[1236px] mt-4 sm:mt-6 md:mt-[20px] px-4 sm:px-0">
          هي منصة رائدة تهدف إلى تمكين الأفراد من تحقيق أقصى إمكاناتهم من خلال ربطهم بنخبة من الخبراء والكوتش والاستشاريين المعتمدين. نؤمن بأن كل شخص يستحق الدعم والإرشاد اللازمين للتغلب على تحديات الحياة، وتطوير الذات، وبناء مستقبل مزدهر. تأسست أُسرة على مبدأ توفير بيئة آمنة وداعمة، حيث يمكن للمستخدمين الوصول إلى موارد قيمة وجلسات مخصصة تساعدهم على النمو الشخصي والمهني
        </p>
      </div>
      {/* Vision, Mission, Values Sections */}
      <div className="w-full bg-global-6 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Vision Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 lg:mb-32">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <Image
                src="/images/img_3_1.png"
                alt="Vision illustration"
                width={400}
                height={400}
                className="w-full max-w-[350px] lg:max-w-[400px] h-auto mx-auto rounded-full shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="text-center lg:text-right">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#008695] mb-4">
                  الرؤية
                </h3>
                <Image
                  src="/images/img_vector_1.svg"
                  alt="Decorative line"
                  width={200}
                  height={30}
                  className="w-[150px] h-[20px] mx-auto lg:mr-0 mb-6"
                />
                <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md">
                  <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#3b3b3b] text-justify">
                    أن نكون المنصة الرائدة عالمياً في مجال التطوير الشخصي والمهني، حيث نمكن كل فرد من الوصول إلى أفضل الخبراء والمختصين لتحقيق أهدافه وبناء مستقبل مزدهر.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 lg:mb-32">
            <div className="w-full lg:w-1/2">
              <div className="text-center lg:text-right">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#008695] mb-4">
                  المهمة
                </h3>
                <Image
                  src="/images/img_vector_1.svg"
                  alt="Decorative line"
                  width={200}
                  height={30}
                  className="w-[150px] h-[20px] mx-auto lg:mr-0 mb-6"
                />
                <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md">
                  <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#3b3b3b] text-justify">
                    توفير منصة آمنة وموثوقة تربط الأفراد بنخبة من الخبراء المعتمدين في مختلف المجالات، وتقديم خدمات استشارية وتدريبية عالية الجودة تساعد على النمو الشخصي والمهني.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/img_2_1.png"
                alt="Mission illustration"
                width={400}
                height={400}
                className="w-full max-w-[350px] lg:max-w-[400px] h-auto mx-auto rounded-full shadow-lg"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <Image
                src="/images/img_1_6.png"
                alt="Values illustration"
                width={400}
                height={400}
                className="w-full max-w-[350px] lg:max-w-[400px] h-auto mx-auto rounded-full shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="text-center lg:text-right">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#008695] mb-4">
                  القيم
                </h3>
                <Image
                  src="/images/img_vector_1.svg"
                  alt="Decorative line"
                  width={200}
                  height={30}
                  className="w-[150px] h-[20px] mx-auto lg:mr-0 mb-6"
                />
                <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md">
                  <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#3b3b3b] text-justify">
                    الثقة والشفافية في جميع تعاملاتنا، الجودة والتميز في الخدمات المقدمة، الخصوصية والسرية التامة، والالتزام بأعلى المعايير المهنية والأخلاقية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Meet Our Experts Section */}
      <div className="w-full bg-[linear-gradient(185deg,#008695_0%,#013036_100%)] py-[80px] sm:py-[120px] md:py-[160px]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <div className="text-center lg:text-right">
                <h2 className="text-[30px] sm:text-[45px] md:text-[60px] font-extrabold leading-[49px] sm:leading-[74px] md:leading-[98px] text-[#ffffff] font-somar mb-6">
                  تعرف على خبرائنا
                </h2>
                <p className="text-sm sm:text-lg md:text-[21px] font-bold leading-[22px] sm:leading-[26px] md:leading-[35px] text-[#ffffff] font-somar mb-8">
                  نقدم لك نخبة من الكوتش والاستشاريين المعتمدين، كل منهم متخصص في مجاله، ومستعد لتقديم الدعم
                </p>
                <Button
                  className="px-6 py-3 text-lg font-extrabold text-[#008695] bg-[#ffffff] rounded-[6px] hover:bg-gray-100 transition-all duration-200"
                  onClick={() => {}}
                >
                  أكتشف الخبراء
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/img_untitled_design_742x886.png"
                alt="Expert consultation"
                width={400}
                height={334}
                className="w-full max-w-[350px] lg:max-w-[400px] h-auto mx-auto"
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="flex flex-col justify-start items-center w-full mt-[52px] sm:mt-[78px] md:mt-[104px]">
        <h2 className="text-[26px] sm:text-[39px] md:text-[52px] font-extrabold leading-[43px] sm:leading-[64px] md:leading-[85px] text-center text-[#008695] font-somar">
          الأسئلة الشائعة
        </h2>
        <Image
          src="/images/img_vector_1.svg"
          alt="Decorative line"
          width={129}
          height={20}
          className="w-[129px] sm:w-[194px] md:w-[258px] h-[20px] sm:h-[30px] md:h-[40px] mt-[-1px] sm:mt-[-1px] md:mt-[-2px]"
        />
        <div className="flex flex-col justify-start items-center w-full max-w-[1276px] mt-[33px] sm:mt-[50px] md:mt-[66px] px-4 sm:px-6 md:px-8">
          {/* First FAQ with expanded content */}
          <div className="flex justify-start items-center w-full px-4 sm:px-6 md:px-[20px] py-4 sm:py-6 md:py-[20px] mb-4 sm:mb-6 md:mb-8">
            <div className="flex justify-center items-start w-full bg-[#ffffff] rounded-[10px] px-2 sm:px-3 md:px-[10px] py-2 sm:py-3 md:py-[10px]">
              <div className="flex flex-col sm:flex-row justify-center items-start w-full gap-4 sm:gap-0">
                <Image
                  src="/images/img_arrow_right.svg"
                  alt="Arrow"
                  width={19}
                  height={21}
                  className="w-[19px] h-[21px] sm:w-[28px] sm:h-[31px] md:w-[38px] md:h-[42px] mt-1 sm:mt-2 md:mt-3"
                />
                <div className="flex flex-col justify-end items-center w-full sm:w-[92%] mb-1 sm:mb-2 md:mb-[6px]">
                  <h3 className="text-base sm:text-2xl md:text-[32px] font-bold leading-[26px] sm:leading-[39px] md:leading-[52px] text-right text-[#008695] font-somar w-full">
                    كيف يمكنني حجز جلسة مع خبير؟
                  </h3>
                  <p className="text-base sm:text-2xl md:text-[32px] font-medium leading-[26px] sm:leading-[39px] md:leading-[52px] text-right text-[#242424] font-somar w-full sm:w-[98%] mt-2 sm:mt-3 md:mt-4">
                    يمكنك تصفح قائمة الخبراء، اختيار الخبير المناسب لك، ثم الضغط على زر "احجز الآن" لتحديد الموعد والدفع.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Other FAQ Items */}
          <div className="flex flex-col justify-start items-center w-full gap-4 sm:gap-6 md:gap-8">
            {faqItems?.slice(1)?.map((item, index) => (
              <div key={index + 1} className="flex justify-start items-center w-full px-4 sm:px-6 md:px-[20px] py-4 sm:py-6 md:py-[20px]">
                <div 
                  className="flex justify-center items-center w-full bg-[#ffffff] rounded-[10px] px-3 sm:px-4 md:px-[16px] py-3 sm:py-4 md:py-[16px] cursor-pointer hover:shadow-md transition-shadow duration-200"
                  onClick={() => toggleFaq(index + 1)}
                >
                  <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4 sm:gap-0">
                    <Image
                      src="/images/img_arrow_right.svg"
                      alt="Arrow"
                      width={19}
                      height={20}
                      className={`w-[19px] h-[20px] sm:w-[28px] sm:h-[30px] md:w-[38px] md:h-[40px] ml-0 sm:ml-[14px] md:ml-[28px] transition-transform duration-200 ${
                        expandedFaq === index + 1 ? 'rotate-90' : ''
                      }`}
                    />
                    <h3 className="text-base sm:text-2xl md:text-[32px] font-bold leading-[26px] sm:leading-[39px] md:leading-[52px] text-right text-[#008695] font-somar self-end">
                      {item?.question}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default AboutPage;