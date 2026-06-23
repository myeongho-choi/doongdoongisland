import React, { useState, useEffect } from 'react';
import { Calendar, ShieldAlert, Cpu, Laptop, RefreshCw, ChevronLeft, ChevronRight, Activity, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data';

interface HeroSectionProps {
  setCurrentTab: (tab: string) => void;
  portfolioMode: boolean;
}

export default function HeroSection({ setCurrentTab, portfolioMode }: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [ping, setPing] = useState(18);
  const [serverTime, setServerTime] = useState('');

  const slides = [
    {
      title: "구름 속 호수 대규모 솜결 업데이트!",
      subtitle: "신비한 퍼플 분수 및 일괄 가구 회수 기능 전격 추가",
      badge: "NEW UPDATE",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      tabLink: "NOTICE",
      desc: "귀찮은 호수 정리는 이제 옛말! 버튼 한 번으로 300개의 꾸미기 타일을 인벤토리 상자 속으로 정렬해보세요.",
      image: IMAGES.hero
    },
    {
      title: "신입 세입자 정원사 특별 7일 선물 패스",
      subtitle: "매일 도장을 찍고 레전더리 [잠꾸러기 GM둥곰 인형] 받기",
      badge: "EVENT",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      tabLink: "EVENT",
      desc: "아늑한 보금자리를 가꿀 수 있도록 보석 200개와 레전더리 벽난로 세트를 무조건 드립니다!",
      image: IMAGES.hero2
    },
    {
      title: "클린한 둥둥랜드를 위한 캠페인 돌입",
      subtitle: "매너 배지 등록 및 1,200종 불법 스팸 키워드 필터 정비",
      badge: "CAMPAIGN",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      tabLink: "NOTICE",
      desc: "타인을 비하하는 혐오 채팅 방명록은 가차 없이 정화! 착한 유저 둥이님께 프로필 구름 이슬 스페셜을 추천합니다.",
      image: IMAGES.hero3
    }
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Simulated server monitoring ticker
  useEffect(() => {
    const inter = setInterval(() => {
      setPing(Math.floor(Math.random() * 8) + 14); // Fluctuates between 14-22ms
    }, 2000);

    const updateClock = () => {
      const now = new Date();
      setServerTime(now.toLocaleTimeString('ko-KR'));
    };
    updateClock();
    const clockInter = setInterval(updateClock, 1000);

    return () => {
      clearInterval(inter);
      clearInterval(clockInter);
    };
  }, []);

  return (
    <section className="w-full mb-8 font-sans" id="hero-slider-section">
      
      {/* Full-width Banner Slideshow */}
      <div className="relative w-full rounded-md overflow-hidden border border-slate-800 h-[320px] group flex flex-col justify-end">
        {/* Background artwork */}
        <div className="absolute inset-0 z-0">
          <img 
            src={slides[activeSlide].image} 
            alt="Dungdung Island Banner Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-[1.01] transition-all duration-700 brightness-[0.95]"
          />
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        </div>

        {/* Carousel controls */}
        <button 
          id="hero-slider-prev"
          onClick={handlePrevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-black transition-colors z-10 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button 
          id="hero-slider-next"
          onClick={handleNextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-black transition-colors z-10 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Banner Content Area */}
        <div className="relative z-10 p-6 md:p-8 text-left max-w-xl">
          <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded border mb-2 bg-indigo-600/90 text-white border-indigo-400">
            {slides[activeSlide].badge}
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-white mb-1.5 leading-tight">
            {slides[activeSlide].title}
          </h2>
          <p className="text-xs md:text-sm font-semibold text-yellow-400 mb-1.5">
            {slides[activeSlide].subtitle}
          </p>
          <p className="text-xs text-slate-200 mb-4 hidden sm:block leading-relaxed">
            {slides[activeSlide].desc}
          </p>
          <button
            id={`banner-action-btn-${activeSlide}`}
            onClick={() => setCurrentTab(slides[activeSlide].tabLink)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm rounded border border-indigo-500"
          >
            자세히 보러가기 <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 right-6 flex gap-1.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                i === activeSlide ? 'w-5 bg-indigo-500' : 'bg-slate-400/50 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* CM portfolio indicator overlay */}
        {portfolioMode && (
          <div className="absolute top-4 left-4 bg-yellow-400/90 text-slate-950 text-[10px] md:text-xs px-2.5 py-1 rounded font-bold z-10 shadow-sm">
            💡 [기획 의도] 메인 배너 슬라이드는 CM 가공 소식을 전파하는 시각 채널입니다.
          </div>
        )}
      </div>

    </section>
  );
}
