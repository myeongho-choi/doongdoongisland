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
      desc: "귀찮은 호수 정리는 이제 옛말! 버튼 한 번으로 300개의 꾸미기 타일을 인벤토리 상자 속으로 정렬해보세요."
    },
    {
      title: "신입 세입자 정원사 특별 7일 선물 패스",
      subtitle: "매일 도장을 찍고 레전더리 [잠꾸러기 GM둥곰 인형] 받기",
      badge: "EVENT",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      tabLink: "EVENT",
      desc: "아늑한 보금자리를 가꿀 수 있도록 보석 200개와 레전더리 벽난로 세트를 무조건 드립니다!"
    },
    {
      title: "클린한 둥둥랜드를 위한 캠페인 돌입",
      subtitle: "매너 배지 등록 및 1,200종 불법 스팸 키워드 필터 정비",
      badge: "CAMPAIGN",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      tabLink: "NOTICE",
      desc: "타인을 비하하는 혐오 채팅 방명록은 가차 없이 정화! 착한 모험가님께 프로필 구름 이슬 스페셜을 추천합니다."
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
    <section className="w-full mb-8" id="hero-slider-section">
      
      {/* Full-width Banner Slideshow */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[380px] group flex flex-col justify-end">
        {/* Background artwork */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Dungdung Island Banner Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 brightness-[0.70]"
          />
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
        </div>

        {/* Carousel controls */}
        <button 
          id="hero-slider-prev"
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-850 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-900 transition-colors z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          id="hero-slider-next"
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-850 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-900 transition-colors z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Banner Content Area */}
        <div className="relative z-10 p-6 md:p-10 text-left max-w-xl">
          <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border mb-3 ${slides[activeSlide].badgeColor}`}>
            {slides[activeSlide].badge}
          </span>
          <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight">
            {slides[activeSlide].title}
          </h2>
          <p className="text-sm md:text-base font-semibold text-sky-300 mb-2">
            {slides[activeSlide].subtitle}
          </p>
          <p className="text-xs md:text-sm text-slate-300 mb-6 hidden sm:block leading-relaxed">
            {slides[activeSlide].desc}
          </p>
          <button
            id={`banner-action-btn-${activeSlide}`}
            onClick={() => setCurrentTab(slides[activeSlide].tabLink)}
            className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-sky-500/20"
          >
            자세히 보러가기 <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 right-8 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeSlide ? 'w-6 bg-sky-400' : 'bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* CM portfolio indicator overlay */}
        {portfolioMode && (
          <div className="absolute top-4 left-4 bg-yellow-400/10 border border-yellow-400/40 text-yellow-300 text-[10px] md:text-xs px-3 py-1 h-fit rounded backdrop-blur-md font-medium z-10 animate-pulse">
            💡 [포폴 가이더] 메인 배너 슬라이드는 CM 기획 이벤트의 전파 목적입니다.
          </div>
        )}
      </div>

    </section>
  );
}
