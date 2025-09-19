'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
const HomePage = () => {
  const [expandedFaq, setExpandedFaq] = useState(0);
  // Features data
  const features = [
    {
      icon: '/images/img_privcy.svg',
      title: 'خصوصية وأمان',
      description: 'نحرص دائمًا على توفير بيئة آمنة وخاصة تضمن لك السرية التامة لكل ما تشاركه معنا لأن خصوصيتك وثقتك تهمنا'
    },
    {
      icon: '/images/img_group.svg',
      title: 'مرونة المواعيد',
      description: 'احجز جلساتك في الوقت المناسب لك عبر جدول المواعيد المتوفر المناسب لدي الخبير، عبر الإنترنت أو حضوريًا'
    },
    {
      icon: '/images/img_component.svg',
      title: 'جلسات الكوتشنج',
      description: 'جلسات مخصصة لمساعدتك على تحديد أهدافك، وتطوير خطط عمل، وتجاوز العقبات لتحقيق أقصى إمكاناتك.'
    },
    {
      icon: '/images/img_vector.svg',
      title: 'خبراء معتمدون',
      description: 'فريق من الكوتش والاستشاريين المؤهلين والمعتمدين في مختلف التخصصات'
    }
  ];
  // Partners data
  const partners = [
    { src: '/images/img_icf_pc_icon_fullcolor.png', alt: 'ICF Partner' },
    { src: '/images/img_layer_2.svg', alt: 'Partner 2' },
    { src: '/images/img_layer_2_blue_gray_500.svg', alt: 'Partner 3' },
    { src: '/images/img_untitled_design_168x202.png', alt: 'Partner 4' },
    { src: '/images/img_.png', alt: 'Partner 5' }
  ];
  // Testimonials data
  const testimonials = [
    {
      name: 'مريم خالد',
      role: 'محاسبة',
      image: '/images/img_ellipse_1107_86x86.png',
      text: 'أكتر حاجة عجبتني في أُسرة إن الاستشارات سرية ومريحة. حسّيت إني أقدر أتكلم بصراحة من غير خوف من حكم أو انتقاد'
    },
    {
      name: 'أحمد خالد',
      role: 'مدرس رياضيات',
      image: '/images/img_ellipse_1107_1.png',
      text: 'كنت محتار إزاي أتعامل مع ابني المراهق، كل كلام بينّا كان بيتحوّل لخناق. من خلال استشارة على منصة أُسرة عرفت خطوات عملية للتقرب منه… وفعلاً حسّيت بفرق.'
    },
    {
      name: 'أمل مصطفى',
      role: 'ربة منزل',
      image: '/images/img_ellipse_1107_2.png',
      text: 'كنت حاسة إن حياتي الزوجية بتبعد أكتر مع مرور الوقت، ولما جربت جلسات أُسرة لقيت إن التواصل بيني وبين جوزي بدأ يتحسّن جدًا. شكراً على الدعم اللي رجّع الدفء لبيتنا.'
    }
  ];
  // FAQ data
  const faqs = [
    {
      question: 'كيف يمكنني حجز جلسة مع خبير؟',
      answer: 'يمكنك تصفح قائمة الخبراء، اختيار الخبير المناسب لك، ثم الضغط على زر "احجز الآن" لتحديد الموعد والدفع.'
    },
    {
      question: 'هل الجلسات سرية؟',
      answer: 'نعم، جميع الجلسات سرية تماماً ونحرص على حماية خصوصيتك.'
    },
    {
      question: 'كيف يتم اختيار الخبراء في أُسرة؟',
      answer: 'يتم اختيار الخبراء بعناية فائقة بناءً على مؤهلاتهم وخبراتهم المعتمدة.'
    },
    {
      question: 'هل يمكنني تغيير موعد الجلسة أو إلغائها؟',
      answer: 'نعم، يمكنك تغيير أو إلغاء الموعد حسب سياسة الإلغاء المحددة.'
    },
    {
      question: 'هل يمكنني الاستفادة من أُسرة إذا كنت خارج مصر؟',
      answer: 'نعم، نقدم خدمات الاستشارة عبر الإنترنت لجميع أنحاء العالم.'
    },
    {
      question: 'ما هو الفرق بين الكوتشنج والاستشارة والعلاج النفسي؟',
      answer: 'الكوتشنج يركز على تحقيق الأهداف، الاستشارة تقدم النصح والإرشاد، والعلاج النفسي يعالج الاضطرابات النفسية.'
    },
    {
      question: 'كيف يمكنني التواصل مع دعم العملاء',
      answer: 'يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني أو نموذج الاتصال.'
    }
  ];
  return (
    <div className="w-full bg-global-6 font-somar">
      <Header />
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-global-6 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-8 lg:gap-0">
              {/* Hero Image */}
              <div className="flex flex-col justify-start items-end w-full lg:w-[60%] order-2 lg:order-1">
                <div className="relative w-full max-w-[600px] lg:max-w-[734px]">
                  <Image
                    src="/images/img_untitled_design_734x734.png"
                    alt="Family illustration"
                    width={734}
                    height={734}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8">
                    <Image
                      src="/images/img_angle_down_solid_full.svg"
                      alt="Scroll down"
                      width={50}
                      height={50}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] animate-bounce"
                    />
                  </div>
                </div>
              </div>
              {/* Hero Content */}
              <div className="flex flex-col justify-start items-center w-full lg:w-[40%] order-1 lg:order-2">
                <div className="flex flex-col gap-1 sm:gap-2 md:gap-[4px] justify-center items-center w-full p-4 sm:p-6 md:p-[14px]">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[75px] font-extrabold leading-tight sm:leading-tight md:leading-tight lg:leading-[122px] text-right text-global-2 w-full">
                    أُســـــرة أفضل مجتمـع أفضل
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[23px] font-semibold leading-6 sm:leading-7 md:leading-8 lg:leading-[38px] text-right text-global-4 w-full lg:w-[96%] mt-4 sm:mt-6 lg:mt-8">
                    استشارات أسرية ونفسية من نخبة من الخبراء، علشان كل خطوة تاخدها تكون بثقة ووعي.
                  </p>
                </div>
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-3 sm:gap-4 lg:gap-[16px] p-4 sm:p-6 md:p-[14px] mt-4 sm:mt-6">
                  <Button
                    variant="primary"
                    onClick={() => {}}
                    className="w-full sm:w-auto px-6 sm:px-8 lg:px-[34px] py-2 sm:py-3 lg:py-[10px] text-base sm:text-lg lg:text-[24px] font-extrabold leading-6 sm:leading-8 lg:leading-[41px] bg-global-1 text-global-10 rounded-md lg:rounded-[6px] hover:bg-opacity-90 transition-all duration-200"
                  >
                    أحجز جلسة
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {}}
                    className="w-full sm:w-auto px-6 sm:px-8 lg:px-[34px] py-2 sm:py-3 lg:py-[10px] text-base sm:text-lg lg:text-[24px] font-extrabold leading-6 sm:leading-8 lg:leading-[41px] text-global-2 border-2 border-global-2 rounded-md lg:rounded-[6px] hover:bg-global-2 hover:text-global-10 transition-all duration-200"
                  >
                    تواصل معنا
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Partners Section */}
        <section className="w-full bg-gradient-to-r from-global-6 via-global-7 to-global-6 py-8 sm:py-12 md:py-16 overflow-hidden">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col justify-start items-center w-full gap-6 sm:gap-8 md:gap-12">
              <div className="text-center animate-fadeIn">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-tight sm:leading-tight md:leading-[85px] text-global-2 mb-4">
                  شركاء العائلة
                </h2>
                <Image
                  src="/images/img_vector_1.svg"
                  alt="Decorative line"
                  width={258}
                  height={40}
                  className="w-[150px] h-[24px] sm:w-[200px] sm:h-[30px] md:w-[258px] md:h-[40px] mx-auto"
                />
              </div>
              
              {/* Auto-scroll Carousel */}
              <div className="w-full relative">
                <div className="flex animate-scroll hover:pause-animation">
                  {/* First set of logos */}
                  {partners?.map((partner, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8">
                      <div className="bg-global-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-6 md:p-8 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] flex items-center justify-center hover:scale-105">
                        <Image
                          src={partner?.src}
                          alt={partner?.alt}
                          width={120}
                          height={120}
                          className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for infinite scroll */}
                  {partners?.map((partner, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8">
                      <div className="bg-global-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-6 md:p-8 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] flex items-center justify-center hover:scale-105">
                        <Image
                          src={partner?.src}
                          alt={partner?.alt}
                          width={120}
                          height={120}
                          className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="w-full bg-global-6 py-8 sm:py-12 md:py-16">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col justify-start items-center w-full gap-6 sm:gap-8 md:gap-12">
              <div className="flex flex-col justify-start items-center gap-2 sm:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-tight sm:leading-tight md:leading-[85px] text-center text-global-2">
                  المميزات
                </h2>
                <Image
                  src="/images/img_vector_1.svg"
                  alt="Decorative line"
                  width={258}
                  height={40}
                  className="w-[150px] h-[24px] sm:w-[200px] sm:h-[30px] md:w-[258px] md:h-[40px]"
                />
              </div>
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-[40px] w-full max-w-[1276px]">
                {features?.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center bg-global-1 border-[3px] border-[#ffba94] rounded-[20px] p-6 sm:p-8 md:p-[54px_26px] hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-[12px] justify-start items-center w-full">
                      <Image
                        src={feature?.icon}
                        alt={feature?.title}
                        width={index === 0 ? 96 : index === 1 || index === 2 ? 128 : 116}
                        height={116}
                        className={`${
                          index === 0 ? 'w-[48px] h-[58px] sm:w-[72px] sm:h-[87px] md:w-[96px] md:h-[116px]' :
                          index === 1 || index === 2 ? 'w-[64px] h-[58px] sm:w-[96px] sm:h-[87px] md:w-[128px] md:h-[116px]': 'w-[58px] h-[58px] sm:w-[87px] sm:h-[87px] md:w-[116px] md:h-[116px]'
                        }`}
                      />
                      <h3 className="text-lg sm:text-xl md:text-[26px] font-extrabold leading-6 sm:leading-8 md:leading-[44px] text-center text-global-10">
                        {feature?.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-[14px] font-medium leading-5 sm:leading-6 md:leading-[23px] text-center text-global-10">
                        {feature?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Why Ausrah Section */}
        <section className="w-full bg-global-6 py-8 sm:py-12 md:py-16">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col justify-start items-center w-full gap-12 sm:gap-16 md:gap-20">
              {/* Section Title */}
              <div className="flex flex-col justify-start items-center gap-2 sm:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-tight sm:leading-tight md:leading-[85px] text-center text-global-2">
                  لماذا أُسرة
                </h2>
                <Image
                  src="/images/img_vector_1.svg"
                  alt="Decorative line"
                  width={258}
                  height={40}
                  className="w-[150px] h-[24px] sm:w-[200px] sm:h-[30px] md:w-[258px] md:h-[40px]"
                />
              </div>
              
              {/* First Topic - Text Right, Image Left */}
              <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-12">
                {/* Image Left */}
                <div className="w-full lg:w-[45%] order-2 lg:order-1">
                  <Image
                    src="/images/img_father_s_day_bro.svg"
                    alt="Family support illustration"
                    width={600}
                    height={600}
                    className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto mx-auto"
                  />
                </div>
                {/* Content Right */}
                <div className="w-full lg:w-[50%] order-1 lg:order-2" dir="rtl">
                  <div className="flex flex-col gap-4 sm:gap-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[52px] font-extrabold leading-tight sm:leading-tight md:leading-[85px] text-right text-global-2">
                      لبناء مجتمع داعم
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[23px] font-semibold leading-6 sm:leading-7 md:leading-8 lg:leading-[38px] text-right text-global-4 mb-4">
                      أُسرة ليست مجرد منصة للخدمات، بل هي مجتمع متكامل يجمع الأفراد والخبراء. نوفر مساحات آمنة للتفاعل وتبادل الخبرات، وورش عمل جماعية تعزز الشعور بالانتماء والدعم المتبادل، مما يسهم في بناء مجتمع أكثر وعيًا وتكافلاً.
                    </p>
                    <div className="w-full flex justify-start">
                      <Button
                        variant="primary"
                        onClick={() => {}}
                        className="px-6 sm:px-8 lg:px-[34px] py-3 sm:py-4 lg:py-[14px] text-base sm:text-lg lg:text-[20px] font-extrabold leading-6 sm:leading-7 lg:leading-[33px] bg-global-1 text-global-10 rounded lg:rounded-[4px]"
                      >
                        أحجز جلسة
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second Topic - Image Right, Text Left */}
              <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-12">
                {/* Content Left */}
                <div className="w-full lg:w-[50%]" dir="rtl">
                  <div className="flex flex-col gap-4 sm:gap-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[52px] font-extrabold leading-tight sm:leading-tight md:leading-[85px] text-right text-global-2">
                      لتعزيز الروابط الأسرية
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[23px] font-semibold leading-6 sm:leading-7 md:leading-8 lg:leading-[38px] text-right text-global-4 mb-4">
                      نقدم استشارات متخصصة وبرامج تدريبية موجهة للأسرة، لمساعدتك على فهم ديناميكيات العلاقات الأسرية، تحسين التواصل بين أفرادها، وحل النزاعات بشكل بناء، مما يؤدي إلى أسرة أكثر ترابطًا وسعادة.
                    </p>
                    <div className="w-full flex justify-start">
                      <Button
                        variant="primary"
                        onClick={() => {}}
                        className="px-6 sm:px-8 lg:px-[34px] py-3 sm:py-4 lg:py-[14px] text-base sm:text-lg lg:text-[20px] font-extrabold leading-6 sm:leading-7 lg:leading-[33px] bg-global-1 text-global-10 rounded lg:rounded-[4px]"
                      >
                        أحجز جلسة
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Image Right */}
                <div className="w-full lg:w-[45%]">
                  <Image
                    src="/images/img_asian_family_rafiki.svg"
                    alt="Asian family illustration"
                    width={600}
                    height={624}
                    className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto mx-auto"
                  />
                </div>
              </div>
              
              {/* Third Topic - Text Right, Image Left */}
              <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-12">
                {/* Image Left */}
                <div className="w-full lg:w-[45%] order-2 lg:order-1">
                  <Image
                    src="/images/img_helping_a_partner_rafiki.svg"
                    alt="Helping partner illustration"
                    width={596}
                    height={542}
                    className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[596px] h-auto mx-auto"
                  />
                </div>
                {/* Content Right */}
                <div className="w-full lg:w-[50%] order-1 lg:order-2" dir="rtl">
                  <div className="flex flex-col gap-4 sm:gap-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[52px] font-extrabold leading-tight sm:leading-tight md:leading-[85px] text-right text-global-2">
                      برامج مصممة لواقعك
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[23px] font-semibold leading-6 sm:leading-7 md:leading-8 lg:leading-[38px] text-right text-global-4 mb-4">
                      ندرك التحديات التي تواجه الأسر والمجتمعات اليوم. لذلك، نصمم برامجنا وخدماتنا لتكون عملية، مرنة، وقابلة للتطبيق في حياتك اليومية، لمساعدتك على إحداث تغيير إيجابي ومستدام.
                    </p>
                    <div className="w-full flex justify-start">
                      <Button
                        variant="primary"
                        onClick={() => {}}
                        className="px-6 sm:px-8 lg:px-[34px] py-3 sm:py-4 lg:py-[14px] text-base sm:text-lg lg:text-[20px] font-extrabold leading-6 sm:leading-7 lg:leading-[33px] bg-global-1 text-global-10 rounded lg:rounded-[4px]"
                      >
                        أحجز جلسة
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Meet Our Experts Section */}
        <section className="w-full bg-gradient-to-b from-[#008695] to-[#006b7a] py-8 sm:py-12 md:py-16 relative overflow-hidden">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-8 lg:gap-0">
              {/* Background Image */}
              <div className="absolute top-0 right-0 w-full lg:w-[54%] h-full opacity-20 lg:opacity-100">
                <Image
                  src="/images/img_untitled_design_742x886.png"
                  alt="Expert consultation"
                  width={886}
                  height={742}
                  className="w-full h-full object-cover lg:object-contain"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-start items-center w-full lg:w-[60%] relative z-20">
                <div className="flex flex-col gap-2 sm:gap-4 md:gap-[10px] justify-start items-start w-full p-4 sm:p-6 md:p-[20px]">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-extrabold leading-tight sm:leading-tight md:leading-[98px] text-center text-global-10 ml-8 sm:ml-12 md:ml-[34px]">
                    تعرف على خبرائنا
                  </h2>
                  <div className="flex flex-col gap-4 sm:gap-6 md:gap-[18px] justify-start items-start w-full">
                    <p className="text-sm sm:text-base md:text-lg lg:text-[21px] font-bold leading-6 sm:leading-7 md:leading-8 lg:leading-[35px] text-center text-global-10 w-full lg:w-[42%]">
                      نقدم لك نخبة من الكوتش والاستشاريين المعتمدين، كل منهم متخصص في مجاله، ومستعد لتقديم الدعم
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => {}}
                      className="px-6 sm:px-8 lg:px-[22px] py-2 sm:py-3 lg:py-[10px] text-base sm:text-lg lg:text-[24px] font-extrabold leading-6 sm:leading-8 lg:leading-[41px] bg-global-8 text-global-2 rounded-md lg:rounded-[6px] ml-32 sm:ml-40 lg:ml-[154px] hover:bg-opacity-90 transition-all duration-200"
                    >
                      أكتشف الخبراء
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] sm:h-[250px] md:h-[316px] bg-gradient-to-t from-global-1 to-transparent"></div>
        </section>
        {/* Testimonials Section */}
        <section className="w-full bg-global-6 py-8 sm:py-12 md:py-16" id="testimonials">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col justify-start items-center w-full gap-6 sm:gap-8 md:gap-12">
              {/* Section Title */}
              <div className="flex flex-col justify-start items-center gap-2 sm:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-tight sm:leading-tight md:leading-[85px] text-center text-global-2">
                  الآراء
                </h2>
                <Image
                  src="/images/img_vector_1.svg"
                  alt="Decorative line"
                  width={258}
                  height={40}
                  className="w-[150px] h-[24px] sm:w-[200px] sm:h-[30px] md:w-[258px] md:h-[40px]"
                />
              </div>
              {/* Testimonials Carousel */}
              <div className="flex flex-row justify-center items-center w-full max-w-[1276px] gap-4 sm:gap-6 md:gap-8">
                {/* Left Arrow */}
                <Image
                  src="/images/img_component_23.svg"
                  alt="Previous testimonial"
                  width={44}
                  height={44}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-[44px] md:h-[44px] cursor-pointer hover:scale-110 transition-transform duration-200"
                />
                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-[28px] w-full">
                  {testimonials?.map((testimonial, index) => (
                    <div
                      key={index}
                      className="relative bg-global-8 rounded-[14px] p-4 sm:p-6 md:p-[22px_16px] shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4">
                        <Image
                          src="/images/img_vector_gray_100.svg"
                          alt="Quote"
                          width={78}
                          height={56}
                          className="w-12 h-8 sm:w-16 sm:h-10 md:w-[78px] md:h-[56px] opacity-20"
                        />
                      </div>
                      <div className="flex flex-col gap-3 sm:gap-4 md:gap-[12px] justify-start items-center w-full">
                        {/* User Info */}
                        <div className="flex flex-col gap-1 sm:gap-2 md:gap-[4px] justify-start items-center w-full">
                          <div className="flex flex-col justify-start items-center w-full sm:w-[80%] md:w-[26%]">
                            <Image
                              src={testimonial?.image}
                              alt={testimonial?.name}
                              width={86}
                              height={86}
                              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[86px] md:h-[86px] rounded-full"
                            />
                            <div className="flex flex-col justify-start items-center mt-2 sm:mt-3">
                              <h4 className="text-sm sm:text-base md:text-[15px] font-bold leading-5 sm:leading-6 md:leading-[25px] text-center text-global-2">
                                {testimonial?.name}
                              </h4>
                              <p className="text-xs sm:text-sm md:text-[9px] font-semibold leading-4 sm:leading-5 md:leading-[15px] text-center text-global-7">
                                {testimonial?.role}
                              </p>
                            </div>
                          </div>
                          {/* Testimonial Text */}
                          <p className="text-sm sm:text-base md:text-[17px] font-semibold leading-6 sm:leading-7 md:leading-[28px] text-center text-global-5 w-full">
                            <span className="text-global-2">"</span>
                            {testimonial?.text}
                            <span className="text-global-2">"</span>
                          </p>
                        </div>
                        {/* Rating Stars */}
                        <Image
                          src="/images/img_frame_1618872835.svg"
                          alt="5 star rating"
                          width={88}
                          height={14}
                          className="w-16 h-3 sm:w-20 sm:h-3 md:w-[88px] md:h-[14px]"
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
        {/* FAQ Section */}
        <section className="w-full bg-global-6 py-8 sm:py-12 md:py-16">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col justify-start items-center w-full gap-6 sm:gap-8 md:gap-12">
              {/* Section Title */}
              <div className="flex flex-col justify-start items-center gap-2 sm:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-tight sm:leading-tight md:leading-[85px] text-center text-global-2">
                  الأسئلة الشائعة
                </h2>
                <Image
                  src="/images/img_vector_1.svg"
                  alt="Decorative line"
                  width={258}
                  height={40}
                  className="w-[150px] h-[24px] sm:w-[200px] sm:h-[30px] md:w-[258px] md:h-[40px]"
                />
              </div>
              {/* FAQ List */}
              <div className="flex flex-col justify-start items-center w-full max-w-[1276px] gap-4 sm:gap-6">
                {faqs?.map((faq, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center w-full bg-global-8 rounded-[10px] p-4 sm:p-6 md:p-[20px] cursor-pointer hover:shadow-md transition-shadow duration-200"
                    onClick={() => setExpandedFaq(expandedFaq === index ? -1 : index)}
                  >
                    <div className="flex flex-row justify-center items-start w-full gap-4 sm:gap-6">
                      <Image
                        src="/images/img_arrow_right.svg"
                        alt="Expand"
                        width={38}
                        height={expandedFaq === index ? 42 : 40}
                        className={`w-6 h-6 sm:w-8 sm:h-8 md:w-[38px] md:h-[40px] transition-transform duration-200 ${
                          expandedFaq === index ? 'rotate-90' : ''
                        }`}
                      />
                      <div className="flex flex-col justify-start items-end w-full gap-2 sm:gap-4">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-bold leading-6 sm:leading-8 md:leading-10 lg:leading-[52px] text-right text-global-2">
                          {faq?.question}
                        </h3>
                        {expandedFaq === index && (
                          <p className="text-base sm:text-lg md:text-xl lg:text-[32px] font-medium leading-6 sm:leading-8 md:leading-10 lg:leading-[52px] text-right text-global-3 w-full lg:w-[98%] animate-fadeIn">
                            {faq?.answer}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;