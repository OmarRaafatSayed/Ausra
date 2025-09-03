'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
const ArticleSuccessPage = () => {
  const relatedArticles = [
    {
      id: 1,
      title: 'كيف تدير ميزانية الأسرة',
      description: 'المصروفات من أكتر الخلافات بين الزوجين. علشان كده:المصروفات من أكتر أسباب الخلافات بين',
      image: '/images/img_rectangle_19.png',
      author: 'كوتش: أميرة حسين',
      date: '15 سبتمبر 2025'
    },
    {
      id: 2,
      title: 'أهمية الصحة النفسية للأسرة',
      description: 'الصحة النفسية مش رفاهية، هي أساس بيت متوازن. الأسرة اللي أفرادها بيدعموا بعض نفسيًا،',
      image: '/images/img_rectangle_19_256x380.png',
      author: 'كوتش: أميرة حسين',
      date: '15 سبتمبر 2025'
    },
    {
      id: 3,
      title: 'سر العلاقة الأسرية الناجحة',
      description: 'في أي أسرة، التواصل هو العمود الفقري للعلاقة. مش مجرد كلام، لكن إصغاء وفهم.',
      image: '/images/img_rectangle_19_1.png',
      author: 'كوتش: أميرة حسين',
      date: '15 سبتمبر 2025'
    }
  ];
  const articleContent = [
    {
      text: 'العائلة مش مجرد ناس عايشين تحت سقف واحد… العائلة هي الدفء، الأمان، والملجأ الأول اللي بيرجع له كل واحد فينا مهما كبر أو تغيّر. لكن سر النجاح في العلاقات الأسرية مش دايمًا بيكون واضح، وناس كتير بتفتكر إن الحب وحده كفاية. الحقيقة؟ الحب مهم، لكن في أسرار تانية لازم تكون موجودة علشان البيت يفضل عامر بالسعادة.',
      color: 'text-global-4'
    },
    {
      text: '1. التواصل الصادق',
      color: 'text-global-2'
    },
    {
      text: 'الكلام أهم جسر بين القلوب. لما الأب والأم والأبناء يتكلموا بصراحة من غير خوف أو كتمان، بيبنوا ثقة قوية. التواصل مش بس كلام… كمان استماع. إنك تسمع للي قدامك بتركيز من غير ما تقاطعه، ده بيخلي كل فرد يحس إنه مهم.',
      color: 'text-global-4'
    },
    {
      text: '2. الاحترام المتبادل',
      color: 'text-global-2'
    },
    {
      text: 'في الأسرة الناجحة، الكبير يحترم الصغير، والصغير يقدّر الكبير. الاحترام بيخلق بيئة آمنة، يخلي كل فرد يحس بقيمته، ويشيل من البيت مشاعر التقليل أو الإهمال.',
      color: 'text-global-4'
    },
    {
      text: '3. المرونة وحل الخلافات',
      color: 'text-global-2'
    },
    {
      text: 'الخلافات طبيعية ومش معناها إن العلاقة ضعيفة. المهم هو إزاي نتعامل معاها. الأسر الناجحة بتعرف تمتص الخلاف، وتفصل بين الموقف وبين الشخص. يعني نزعل من الموقف، مش من الإنسان.',
      color: 'text-global-4'
    },
    {
      text: '4. الدعم وقت الشدة',
      color: 'text-global-2'
    },
    {
      text: 'اللحظة اللي بتحتاج فيها حد جنبك هي اللي بتختبر قوة العيلة. الأسرة الناجحة بتقف مع بعض في الأزمات، وتفرح مع بعض وقت الإنجازات. الكتف اللي يسندك وقت التعب بيخلي الرابطة أقوى.',
      color: 'text-global-4'
    },
    {
      text: '5. مشاركة اللحظات الصغيرة\nمش لازم ننتظر المناسبات الكبيرة. وجبة مع بعض، نزهة بسيطة، أو حتى ضحكة على موقف عادي، دي كلها لحظات بتعمل رصيد من الذكريات الحلوة اللي بتخلي العلاقة تكمل.',
      color: 'text-global-2'
    }
  ];
  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-6">
      <Header />
      {/* Main Content */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16">
        <div className="flex flex-col justify-start items-center w-full">
          {/* Article Header */}
          <div className="flex flex-col justify-start items-center w-full mb-8 sm:mb-12 md:mb-16">
            {/* Breadcrumb and Author Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full mb-4 sm:mb-6 md:mb-8">
              {/* Back Button */}
              <Link 
                href="/articles" 
                className="flex flex-row justify-start items-center gap-2 sm:gap-[6px] mb-4 sm:mb-0 mt-4 sm:mt-[22px] hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src="/images/img_vector_cyan_800.svg"
                  alt="Back arrow"
                  width={14}
                  height={12}
                  className="w-[14px] h-[12px]"
                />
                <span className="text-xs sm:text-sm md:text-[12px] font-medium leading-4 sm:leading-5 md:leading-[20px] text-center text-global-2">
                  الرجوع للخلف
                </span>
              </Link>
              {/* Author Info */}
              <div className="flex flex-row gap-2 sm:gap-[6px] justify-start items-center w-full sm:w-auto">
                <div className="flex flex-col justify-start items-end flex-1 sm:flex-none">
                  <h3 className="text-base sm:text-lg md:text-[21px] font-semibold leading-6 sm:leading-7 md:leading-[35px] text-center text-global-2">
                    كوتش: أميرة حسين
                  </h3>
                  <p className="text-sm sm:text-base md:text-[16px] font-semibold leading-5 sm:leading-6 md:leading-[28px] text-center text-global-6">
                    15 سبتمبر 2025
                  </p>
                </div>
                <Image
                  src="/images/img_ellipse_1107_84x84.png"
                  alt="Author profile"
                  width={84}
                  height={84}
                  className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[84px] md:h-[84px] rounded-full"
                />
              </div>
            </div>
            {/* Article Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-extrabold leading-8 sm:leading-10 md:leading-12 lg:leading-[82px] text-center text-global-2 mb-6 sm:mb-8 md:mb-[30px]">
              سر العلاقة الأسرية الناجحة
            </h1>
            {/* Featured Image */}
            <div className="w-full mb-6 sm:mb-8 md:mb-[30px]">
              <Image
                src="/images/img_rectangle_19_460x856.png"
                alt="Family relationship success"
                width={856}
                height={460}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[460px] object-cover rounded-[18px]"
              />
            </div>
          </div>
          {/* Article Content */}
          <div className="w-full mb-12 sm:mb-16 md:mb-[98px]">
            <div className="prose prose-lg max-w-none">
              {articleContent?.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`text-base sm:text-lg md:text-xl lg:text-[24px] font-bold leading-6 sm:leading-7 md:leading-8 lg:leading-[39px] text-justify ${paragraph?.color} mb-4 sm:mb-6 md:mb-8 whitespace-pre-line`}
                >
                  {paragraph?.text}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Related Articles Section */}
        <section className="w-full mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-extrabold leading-8 sm:leading-10 md:leading-[62px] text-center text-global-2 mb-6 sm:mb-8 md:mb-[16px] text-right">
            مقالات أُخرى قد تُعجبك
          </h2>
          {/* Articles Carousel */}
          <div className="flex flex-row justify-start items-center w-full mt-4 sm:mt-6 md:mt-[16px]">
            {/* Left Arrow */}
            <button 
              className="flex-shrink-0 mr-4 sm:mr-6 md:mr-[20px] hover:scale-110 transition-transform duration-200"
              aria-label="Previous articles"
            >
              <Image
                src="/images/img_component_23.svg"
                alt="Previous"
                width={44}
                height={44}
                className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] md:w-[44px] md:h-[44px]"
              />
            </button>
            {/* Articles Grid */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-[30px] w-full overflow-x-auto sm:overflow-x-visible">
              {relatedArticles?.map((article) => (
                <article 
                  key={article?.id}
                  className="flex flex-col justify-start items-center w-full sm:w-[300px] md:w-[406px] bg-global-7 rounded-[18px] p-3 sm:p-4 md:p-[12px] hover:shadow-lg transition-shadow duration-200 flex-shrink-0"
                >
                  {/* Article Image */}
                  <div className="w-full mb-3 sm:mb-4 md:mb-[12px]">
                    <Image
                      src={article?.image}
                      alt={article?.title}
                      width={380}
                      height={256}
                      className="w-full h-[150px] sm:h-[200px] md:h-[256px] object-cover rounded-[18px]"
                    />
                  </div>
                  {/* Article Content */}
                  <div className="flex flex-col justify-start items-center w-full px-3 sm:px-4 md:px-[22px]">
                    <h3 className="text-lg sm:text-xl md:text-[26px] font-extrabold leading-6 sm:leading-7 md:leading-[43px] text-center text-global-2 mb-2 sm:mb-3 md:mb-4">
                      {article?.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-[16px] font-medium leading-5 sm:leading-6 md:leading-[26px] text-center text-global-6 mb-4 sm:mb-5 md:mb-6">
                      {article?.description}
                    </p>
                  </div>
                  {/* Author Info */}
                  <div className="flex flex-row gap-1 sm:gap-[4px] justify-start items-center w-full px-3 sm:px-4 md:px-[22px] mt-4 sm:mt-5 md:mt-[24px] mb-2 sm:mb-3 md:mb-[12px]">
                    <div className="flex flex-col justify-start items-end flex-1">
                      <p className="text-xs sm:text-sm md:text-[14px] font-semibold leading-4 sm:leading-5 md:leading-[23px] text-center text-global-2">
                        {article?.author}
                      </p>
                      <p className="text-xs sm:text-sm md:text-[10px] font-semibold leading-4 sm:leading-5 md:leading-[18px] text-center text-global-6">
                        {article?.date}
                      </p>
                    </div>
                    <Image
                      src="/images/img_ellipse_1107.png"
                      alt="Author"
                      width={56}
                      height={56}
                      className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] rounded-full"
                    />
                  </div>
                </article>
              ))}
            </div>
            {/* Right Arrow */}
            <button 
              className="flex-shrink-0 ml-4 sm:ml-6 md:ml-[20px] hover:scale-110 transition-transform duration-200"
              aria-label="Next articles"
            >
              <Image
                src="/images/img_component_22.svg"
                alt="Next"
                width={44}
                height={44}
                className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] md:w-[44px] md:h-[44px]"
              />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default ArticleSuccessPage;