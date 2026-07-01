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
      title: "둥둥 LP 수집 이벤트 안내",
      subtitle: "낚시를 통해 특별한 LP를 수집해 보세요!",
      badge: "EVENT",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      tabLink: "EVENT",
      desc: "이벤트 기간 동안 낚시를 진행하면 일정 확률로 LP를 획득할 수 있습니다. LP를 모아 고급 인광 찌와 클래식 목재 축음기 스피커를 획득해 보세요!",
      image: IMAGES.hero
    },
    {
      title: "OBT 참여 감사 선물 지급 안내",
      subtitle: "모든 섬지기 여러분께 감사의 마음을 담은 선물!",
      badge: "EVENT",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      tabLink: "EVENT",
      desc: "접속만 해도 골드 꾸러미 5,000 Gold, 둥곰이 소파 체어, 그리고 최상급 야광 미끼 50개를 전원 우편함으로 즉시 드립니다.",
      image: IMAGES.hero2
    },
    {
      title: "나만의 둥둥아일랜드 꾸미기 이벤트",
      subtitle: "섬과 호수를 자유롭게 꾸미고, 나만의 공간을 자랑해 주세요!",
      badge: "EVENT",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      tabLink: "EVENT",
      desc: "이벤트 참여 필수 해시태그 #MyDongDongIsland 와 함께 스크린샷을 등록해 주시면 참여 보상과 함께 우수작 보상을 드립니다.",
      image: IMAGES.hero3
    },
    {
      title: "신규 유저분들 정착 지원 이벤트",
      subtitle: "처음 시작하는 신입 섬지기를 위한 파격적인 지원!",
      badge: "EVENT",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      tabLink: "EVENT",
      desc: "매일 게임에 접속하여 도움말을 3회 이상 확인하면 초기 지원 선물팩, 출석 보상, 보관함 업그레이드 아이템을 모두 우편함으로 드립니다.",
      image: IMAGES.hero
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
