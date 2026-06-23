import React, { useState } from 'react';
import { 
  NOTICES, 
  EVENTS, 
  GMNUTES, 
  PATCH_NOTES, 
  IMAGES, 
  PORTFOLIO_META 
} from './data';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import NoticeTab from './components/NoticeTab';
import DevLogTab from './components/DevLogTab';
import EventTab from './components/EventTab';
import GMNoteTab from './components/GMNoteTab';
import FAQTab from './components/FAQTab';
import InquiryTab from './components/InquiryTab';
import CommunityTab from './components/CommunityTab';
import PatchNoteTab from './components/PatchNoteTab';

import { 
  Calendar, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  FileWarning, 
  FileText,
  Mail,
  ShieldCheck,
  Zap,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('HOME');
  const [portfolioMode, setPortfolioMode] = useState<boolean>(false); // Disabled by default so it looks like a real, active game service
  const [secretClickCount, setSecretClickCount] = useState<number>(0);

  const handleSecretClick = () => {
    setSecretClickCount(prev => {
      const next = prev + 1;
      if (next >= 5) {
        setPortfolioMode(curr => !curr);
        return 0;
      }
      return next;
    });
  };

  // Helper inside compiler
  const latestNotices = NOTICES.slice(0, 3);
  const activeEvents = EVENTS.slice(0, 3);
  const mainPatch = PATCH_NOTES[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-150 font-sans flex flex-col relative selection:bg-indigo-200 selection:text-indigo-900">
      
      {/* Main Header */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        portfolioMode={portfolioMode} 
        setPortfolioMode={setPortfolioMode} 
      />

      {/* Cozy Healing Ambient Subbar (Displays Synth Background Player & Quick Notice Alerts) */}
      <div className="bg-slate-900 border-b border-slate-850 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Quick operations alert */}
          <div className="flex items-center gap-2 text-left" id="ops-badge-alert">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs text-indigo-600 font-bold font-sans">
              [운영팀 공지] 
            </span>
            <span className="text-xs text-slate-500 truncate max-w-xs sm:max-w-lg cursor-pointer hover:underline text-left leading-none font-medium" onClick={() => { setCurrentTab('NOTICE'); }}>
              조치 완료: 일부 결제 지연 계정 41개에 대한 보석 수동 지급 및 보상 칭호 지급을 신속하게 완료하였습니다.
            </span>
          </div>

          {/* Calming synthesizer audio player */}
          <div className="flex items-center justify-end">
            <MusicPlayer />
          </div>

        </div>
      </div>

      {/* Primary Container Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        
        {/* Render HOME/DASHBOARD Tab */}
        {currentTab === 'HOME' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            {/* Interactive Carousel hero banner */}
            <HeroSection setCurrentTab={setCurrentTab} portfolioMode={portfolioMode} />

            {/* Quick Navigation Panels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="home-quick-navigation">
              <button 
                onClick={() => setCurrentTab('NOTICE')}
                className="p-4 bg-slate-900 border border-slate-850 hover:bg-indigo-50 hover:border-indigo-250 transition-colors flex flex-col gap-1.5 text-left cursor-pointer rounded shadow-3xs group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base text-indigo-600">📰</span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-200">최신 공지사항</h4>
                </div>
                <p className="text-[11px] text-slate-500">점검 일정 및 주요 오류 수정 로그</p>
              </button>
              
              <button 
                onClick={() => setCurrentTab('EVENT')}
                className="p-4 bg-slate-900 border border-slate-850 hover:bg-indigo-50 hover:border-indigo-250 transition-colors flex flex-col gap-1.5 text-left cursor-pointer rounded shadow-3xs group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base text-sky-500">🎁</span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-200">이벤트 다이어리</h4>
                </div>
                <p className="text-[11px] text-slate-500">지정된 7일 출석부 🐾 선물 확인</p>
              </button>

              <button 
                onClick={() => setCurrentTab('INQUIRY')}
                className="p-4 bg-slate-900 border border-slate-850 hover:bg-indigo-50 hover:border-indigo-250 transition-colors flex flex-col gap-1.5 text-left cursor-pointer rounded shadow-3xs group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base text-yellow-500">✉️</span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-200">1:1 CS 고객지원</h4>
                </div>
                <p className="text-[11px] text-slate-500">실시간 유저 소통 대응 센터</p>
              </button>
            </div>

            {/* Main content split grids */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
              
              {/* Left 2/3 Grid: Latest notices & Active Event Cards */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Latest Announcements */}
                <div className="bg-slate-900 border border-slate-850 rounded p-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <h3 className="text-sm font-bold text-slate-100 font-sans tracking-wide">
                      📢 아일랜드 소식지 (최신 공지)
                    </h3>
                    <button 
                      onClick={() => setCurrentTab('NOTICE')}
                      className="text-xs text-sky-400 hover:underline cursor-pointer flex items-center gap-1"
                    >
                      전체보기 <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    {latestNotices.map((n) => (
                      <div 
                        key={n.id}
                        onClick={() => {
                          setCurrentTab('NOTICE');
                        }}
                        className="p-2.5 bg-slate-900 border-b border-slate-850 hover:bg-indigo-50/60 transition-colors cursor-pointer flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className={`px-1.5 py-0.5 text-[9px] font-bold rounded shrink-0 ${
                            n.category === '긴급' ? 'bg-red-500 text-white border border-red-600' :
                            n.category === '점검' ? 'bg-amber-100 text-amber-700 border border-amber-300' :
                            'bg-slate-100 text-slate-700 border border-slate-350'
                          }`}>
                            {n.category}
                          </span>
                          <span className="text-slate-300 font-semibold truncate hover:text-indigo-600 leading-normal">
                            {n.title}
                          </span>
                        </div>

                        <span className="text-[10px] text-slate-500 font-mono shrink-0">
                          {n.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Events Carousel */}
                <div className="bg-slate-900 border border-slate-850 rounded p-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <h3 className="text-sm font-bold text-slate-100 font-sans tracking-wide">
                      🎁 진행 중인 공식 이벤트
                    </h3>
                    <button 
                      onClick={() => setCurrentTab('EVENT')}
                      className="text-xs text-indigo-600 hover:underline cursor-pointer flex items-center gap-1 font-bold"
                    >
                      상세가이드 <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activeEvents.map((evt) => (
                      <div 
                        key={evt.id}
                        onClick={() => {
                          setCurrentTab('EVENT');
                        }}
                        className="bg-slate-900 border border-slate-850 rounded overflow-hidden hover:bg-indigo-50 hover:border-indigo-200 transition-colors cursor-pointer flex flex-col"
                      >
                        <div className="h-20 bg-slate-100 flex items-center justify-center text-3xl font-bold relative border-b border-slate-850">
                          <img 
                            src={IMAGES.hero} 
                            alt={evt.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover opacity-20" 
                          />
                          <span className="absolute text-xl">
                            {evt.type === '출석' ? '🐾' : evt.type === '성장' ? '🏡' : '⚡'}
                          </span>
                        </div>
                        <div className="p-3">
                          <span className="text-[9px] text-indigo-600 font-extrabold block uppercase tracking-wider">{evt.type}</span>
                          <h4 className="text-[11px] font-bold text-slate-200 mt-1 line-clamp-1 truncate">
                            {evt.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right 1/3 Grid: Chief Patch note & GM letter cards */}
              <div className="space-y-6">
                
                {/* Patch notes spec outline */}
                <div className="bg-slate-900 border border-slate-850 rounded p-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                    <span className="text-xs font-bold text-slate-100 font-sans">
                      🛸 최신 패치노트 업데이트 ({mainPatch.version})
                    </span>
                    <button 
                      onClick={() => setCurrentTab('PATCH')}
                      className="text-[10px] text-indigo-600 font-bold hover:underline cursor-pointer"
                    >
                      전체로그 ↗
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-snug mb-3 font-medium">
                    {mainPatch.summary}
                  </p>

                  <div className="space-y-1.5 text-[11px] text-slate-400">
                    {mainPatch.sections[0].items.slice(0, 2).map((item, iIdx) => (
                      <div key={iIdx} className="flex gap-1.5 items-start">
                        <span className="text-indigo-600 font-extrabold mt-0.5">•</span>
                        <span className="truncate leading-normal font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GM Note preview */}
                <div className="p-5 bg-slate-900 border border-slate-850 rounded space-y-3 relative overflow-hidden">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-850">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-850">
                      <img 
                        src={IMAGES.gm_bear} 
                        alt="GM bear portrait" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-100">GM 둥곰의 일지</span>
                      <span className="block text-[10px] text-slate-500 font-mono">조회수: {GMNUTES[0].views}</span>
                    </div>
                  </div>

                  <h4 className="text-xs sm:text-xs font-extrabold text-slate-200 leading-tight">
                    {GMNUTES[0].title}
                  </h4>

                  <p className="text-[11px] text-slate-500 line-clamp-3 leading-relaxed font-medium">
                    {GMNUTES[0].content}
                  </p>

                  <button 
                    onClick={() => setCurrentTab('GM_NOTE')}
                    className="w-full text-center py-2 bg-slate-50 border border-slate-850 rounded text-[10px] text-white hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-colors cursor-pointer block font-bold"
                  >
                    소식 보러가기 🐾
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* Render TAB CONTENTS */}
        {currentTab === 'DEV_LOG' && <DevLogTab portfolioMode={portfolioMode} />}
        {currentTab === 'NOTICE' && <NoticeTab portfolioMode={portfolioMode} />}
        {currentTab === 'EVENT' && <EventTab portfolioMode={portfolioMode} />}
        
        {/* Render PATCH NOTE TAB INDEPENDENTLY */}
        {currentTab === 'PATCH' && <PatchNoteTab portfolioMode={portfolioMode} />}

        {currentTab === 'GM_NOTE' && <GMNoteTab portfolioMode={portfolioMode} />}
        {currentTab === 'FAQ' && <FAQTab portfolioMode={portfolioMode} />}
        {currentTab === 'INQUIRY' && <InquiryTab portfolioMode={portfolioMode} />}
        {currentTab === 'COMMUNITY' && <CommunityTab portfolioMode={portfolioMode} />}

      </main>

      {/* Footer Details */}
      <footer className="bg-slate-950 border-t border-slate-900/80 py-10 px-4 mt-12 text-slate-500 font-sans">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-900/60">
            <div className="text-center lg:text-left space-y-2">
              <span className="text-xs font-bold text-slate-400 block tracking-tight">
                (주)둥둥네트워크 엔터테인먼트
              </span>
              
              {portfolioMode ? (
                <p className="text-[10px] leading-relaxed max-w-xl text-left">
                  본 포트폴리오 사이트는 가상의 모바일 힐링 RPG '둥둥아일랜드' 공식 포털 레이아웃을 전개하여, 
                  게임 CS 위기 대응 능력, 정량적 이벤트 기획 및 CM 소통 능력을 성실하게 검증하기위한 <strong>CM 전문 포트폴리오 허브</strong>입니다. 
                  상업적 무단 도용이나 무단 전재를 엄히 규정합니다.
                </p>
              ) : (
                <p className="text-[10px] leading-relaxed text-slate-500 max-w-3xl text-left">
                  대표이사: 김두둥 | 사업자등록번호: 249-50-24861 | 통신판매업신고: 제 2026-서울강남-0777호<br />
                  주소: 서울특별시 강남구 테헤란로 508, 둥둥타워 11층 | 고객지원 대표메일: {PORTFOLIO_META.contact.email}<br />
                  게임물 등급분류번호: 제 CC-OM-260617-001호 | 등급분류일자: 2026.06.17 | 전체이용가
                </p>
              )}
            </div>

            <div className="text-xs md:text-right font-mono space-y-1">
              {portfolioMode ? (
                <>
                  <span className="block text-slate-400 font-sans font-bold">PORTFOLIO APPLICANT: 김두둥 (CM)</span>
                  <span className="block">Email: {PORTFOLIO_META.contact.email}</span>
                </>
              ) : (
                <div className="flex flex-wrap lg:justify-end gap-x-3 gap-y-1 text-[10px] text-slate-400 font-sans font-medium mb-1.5 justify-center">
                  <span className="hover:text-slate-200 cursor-pointer">이용약관</span>
                  <span className="text-slate-800">|</span>
                  <span className="hover:text-slate-200 font-bold underline cursor-pointer">개인정보처리방침</span>
                  <span className="text-slate-800">|</span>
                  <span className="hover:text-slate-200 cursor-pointer">청소년보호정책</span>
                  <span className="text-slate-800">|</span>
                  <span className="hover:text-slate-200 cursor-pointer" onClick={() => setCurrentTab('INQUIRY')}>고객센터문의</span>
                </div>
              )}
              <p 
                className="text-[10px] hover:text-slate-400 select-none cursor-pointer transition-colors active:scale-95 text-center lg:text-right" 
                onClick={handleSecretClick}
              >
                © 2026 Dungdung Island CM Project. All rights reserved.
              </p>
            </div>
          </div>

          {!portfolioMode ? (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] text-slate-600">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded border border-slate-900 bg-slate-950 font-sans shrink-0">전체이용가</span>
                <span className="text-left">본 게임물은 전체이용가 등급을 획득하였습니다. 폭력성, 선정성 등이 일절 배제된 힐링형 시뮬레이션입니다.</span>
              </div>
              <div className="text-slate-600 font-sans text-center sm:text-right">
                둥둥아일랜드의 공식 이미지와 텍스트 리소스는 가상 테스트 및 포트폴리오를 위해 정교하게 연출되었습니다.
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-between text-xs bg-sky-500/10 text-sky-400 border border-sky-500/20 p-3 rounded-lg gap-3">
              <span className="font-sans text-left">💡 <strong>포트폴리오 평가용 코멘터리 모드</strong>가 활성화되어 있습니다. 언제든지 © Copyright 텍스트를 5번 연달아 누르면 일반 사용자용 라이브 페이지로 즉시 토글됩니다.</span>
              <button 
                onClick={() => setPortfolioMode(false)}
                className="px-2 py-1 text-[10px] font-bold uppercase rounded border border-sky-400/30 text-sky-300 hover:bg-sky-400/10 transition-colors cursor-pointer shrink-0"
              >
                라이브 보기 🌐
              </button>
            </div>
          )}
        </div>
      </footer>

    </div>
  );
}
