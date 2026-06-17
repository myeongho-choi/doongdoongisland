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
import PolicyTab from './components/PolicyTab';
import SanctionsTab from './components/SanctionsTab';
import CommunityTab from './components/CommunityTab';

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
  const [portfolioMode, setPortfolioMode] = useState<boolean>(true); // Enabled by default so recruiters see valuable insights.

  // Helper inside compiler
  const latestNotices = NOTICES.slice(0, 3);
  const activeEvents = EVENTS.slice(0, 3);
  const mainPatch = PATCH_NOTES[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-150 font-sans flex flex-col relative selection:bg-purple-500/30 selection:text-white">
      
      {/* Mystical Background decorative cloud gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/10 w-[450px] h-[450px] bg-yellow-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Main Header */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        portfolioMode={portfolioMode} 
        setPortfolioMode={setPortfolioMode} 
      />

      {/* Cozy Healing Ambient Subbar (Displays Synth Background Player & Quick Notice Alerts) */}
      <div className="bg-slate-900/40 border-b border-slate-900 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Quick operations alert */}
          <div className="flex items-center gap-2 text-left" id="ops-badge-alert">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-sky-400 font-bold font-sans">
              [CM 긴급 특보] 
            </span>
            <span className="text-xs text-slate-300 truncate max-w-xs sm:max-w-lg cursor-pointer hover:underline text-left leading-none" onClick={() => { setCurrentTab('NOTICE'); }}>
              수정 완료: 일부 결제 지연 계정 41개에 대한 보석 수동 배포 및 정온 보상 처리를 긴급 조치 완료해 두었습니다.
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
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Interactive Carousel hero banner */}
            <HeroSection setCurrentTab={setCurrentTab} portfolioMode={portfolioMode} />

            {/* Quick Navigation Panels Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="home-quick-navigation">
              <button 
                onClick={() => setCurrentTab('NOTICE')}
                className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl hover:bg-slate-800/40 hover:border-slate-700 hover:scale-[1.01] transition-all flex flex-col gap-2 shadow text-left cursor-pointer"
              >
                <span className="text-xl">📰</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-100">최신 공지사항</h4>
                <p className="text-[10px] text-slate-400">점검 일정 및 결제 장애 복구 소식</p>
              </button>
              
              <button 
                onClick={() => setCurrentTab('EVENT')}
                className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl hover:bg-slate-800/40 hover:border-slate-700 hover:scale-[1.01] transition-all flex flex-col gap-2 shadow text-left cursor-pointer"
              >
                <span className="text-xl">🎁</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-100">이벤트 다이어리</h4>
                <p className="text-[10px] text-slate-400">7일 출석 선물판 🐾 도장찍기</p>
              </button>

              <button 
                onClick={() => setCurrentTab('INQUIRY')}
                className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl hover:bg-slate-800/40 hover:border-slate-700 hover:scale-[1.01] transition-all flex flex-col gap-2 shadow text-left cursor-pointer"
              >
                <span className="text-xl">✉️</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-100">1:1 CS 문의센터</h4>
                <p className="text-[10px] text-slate-400">고객 응대 관리자 시뮬레이션</p>
              </button>

              <button 
                onClick={() => setCurrentTab('SANCTION')}
                className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl hover:bg-slate-800/40 hover:border-slate-700 hover:scale-[1.01] transition-all flex flex-col gap-2 shadow text-left cursor-pointer"
              >
                <span className="text-xl">🔨</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-100">불량 제재소 내역</h4>
                <p className="text-[10px] text-slate-400">오토 매크로 작업장 단속 명부</p>
              </button>
            </div>

            {/* Main content split grids */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
              
              {/* Left 2/3 Grid: Latest notices & Active Event Cards */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Latest Announcements */}
                <div className="bg-slate-900 border border-slate-800/90 rounded-2xl p-6">
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

                  <div className="space-y-3">
                    {latestNotices.map((n) => (
                      <div 
                        key={n.id}
                        onClick={() => {
                          setCurrentTab('NOTICE');
                        }}
                        className="p-3 bg-slate-950/50 border border-slate-850 hover:bg-slate-950 hover:border-slate-800 rounded-xl transition-all cursor-pointer flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className={`px-2 py-0.5 text-[9px] font-bold rounded border shrink-0 ${
                            n.category === '긴급' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                            n.category === '점검' ? 'bg-amber-500/10 text-amber-400 border-amber-550/30' :
                            'bg-slate-800 text-slate-300'
                          }`}>
                            {n.category}
                          </span>
                          <span className="text-slate-300 font-bold truncate hover:text-white leading-normal">
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
                <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <h3 className="text-sm font-bold text-slate-100 font-sans tracking-wide">
                      🎁 진행 중인 둥실 축제 (이벤트)
                    </h3>
                    <button 
                      onClick={() => setCurrentTab('EVENT')}
                      className="text-xs text-sky-400 hover:underline cursor-pointer flex items-center gap-1"
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
                        className="bg-slate-950 border border-slate-850/60 rounded-xl overflow-hidden hover:scale-[1.01] transition-transform cursor-pointer"
                      >
                        <div className="h-20 bg-slate-850 flex items-center justify-center text-3xl font-bold relative">
                          <img 
                            src={IMAGES.hero} 
                            alt={evt.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover opacity-30" 
                          />
                          <span className="absolute text-xl">
                            {evt.type === '출석' ? '🐾' : evt.type === '성장' ? '🏡' : '⚡'}
                          </span>
                        </div>
                        <div className="p-3">
                          <span className="text-[9px] text-indigo-400 font-bold block">{evt.type}</span>
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
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                    <span className="text-xs font-bold text-slate-200 font-sans">
                      🛸 최신 패치노트 ({mainPatch.version})
                    </span>
                    <button 
                      onClick={() => setCurrentTab('PATCH')}
                      className="text-[10px] text-sky-400 hover:underline cursor-pointer"
                    >
                      전체로그 ↗
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-snug mb-3">
                    {mainPatch.summary}
                  </p>

                  <div className="space-y-1.5 text-[11px] text-slate-300 font-mono">
                    {mainPatch.sections[0].items.slice(0, 2).map((item, iIdx) => (
                      <div key={iIdx} className="flex gap-1.5 items-start">
                        <span className="text-sky-400 mt-0.5">•</span>
                        <span className="truncate leading-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GM Note preview */}
                <div className="p-5 bg-gradient-to-br from-violet-950/20 via-slate-900 to-slate-900 border border-slate-800 rounded-2xl space-y-3 relative overflow-hidden">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-850">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img 
                        src={IMAGES.gm_bear} 
                        alt="GM bear portrait" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-200">GM 둥곰의 소식지</span>
                      <span className="block text-[10px] text-slate-500 font-mono">조회수: {GMNUTES[0].views}</span>
                    </div>
                  </div>

                  <h4 className="text-xs sm:text-xs font-extrabold text-white leading-tight">
                    {GMNUTES[0].title}
                  </h4>

                  <p className="text-[11px] text-slate-400 line-clamp-3 leading-relaxed">
                    {GMNUTES[0].content}
                  </p>

                  <button 
                    onClick={() => setCurrentTab('GM_NOTE')}
                    className="w-full text-center py-2 bg-slate-950 border border-slate-850 rounded-xl text-[10px] hover:text-white transition-colors cursor-pointer block font-bold"
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
        {currentTab === 'PATCH' && (
          <div className="space-y-6" id="patchnote-tab-container">
            <div className="border-b border-slate-800 pb-5 text-left">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                🛸 시스템 공식 패치노트
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                둥둥아일랜드의 클라이언트 업데이트 변경 사항 및 성능 튜닝, 버그 제어 일지입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
              {/* Left Detailed reading pane */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                
                {portfolioMode && mainPatch.portfolioRationale && (
                  <div className="bg-gradient-to-r from-indigo-950/40 to-slate-950/20 border border-indigo-500/30 p-4 rounded-xl text-xs text-slate-200">
                    <span className="font-bold text-indigo-400 flex items-center gap-1 mb-1">
                      <Sparkles className="w-4 h-4 text-indigo-300 animate-spin" /> [CM 패치노트 테크니컬 번역 분석]
                    </span>
                    {mainPatch.portfolioRationale}
                  </div>
                )}

                <div className="bg-slate-90/80 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
                  
                  {/* Header info */}
                  <div className="border-b border-slate-800 pb-3">
                    <span className="text-[10px] bg-sky-500/10 text-sky-400 border border-sky-400/25 px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider mb-2 inline-block">
                      {mainPatch.version} COMPLETE
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {mainPatch.title}
                    </h3>
                  </div>

                  {/* Highlights loop */}
                  {mainPatch.sections.map((sect, sIdx) => (
                    <div key={sIdx} className="space-y-2.5">
                      <h4 className="text-xs sm:text-sm font-extrabold text-sky-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        {sect.title}
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 pl-4 list-disc leading-relaxed">
                        {sect.items.map((it, iIdx) => (
                          <li key={iIdx}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* CM Comment inside */}
                  <div className="bg-slate-950 p-4 border border-slate-850 rounded-xl space-y-1.5 text-left">
                    <span className="block text-xs font-bold text-indigo-400">🐾 CM 둥곰의 부드러운 코멘트</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans whitespace-pre-line">
                      {mainPatch.cmComment}
                    </p>
                  </div>

                </div>

              </div>
              
              {/* Right side coaching notes */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    버전 로그 수령 안내
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed list-disc pl-4">
                    <li>패치노트는 업데이트 정기 점검 2일 전 18:00에 수식 전파됩니다.</li>
                    <li>목요일 정기 패치는 패킷 검증 클라이언트를 수반합니다.</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        )}

        {currentTab === 'GM_NOTE' && <GMNoteTab portfolioMode={portfolioMode} />}
        {currentTab === 'FAQ' && <FAQTab portfolioMode={portfolioMode} />}
        {currentTab === 'INQUIRY' && <InquiryTab portfolioMode={portfolioMode} />}
        {currentTab === 'POLICY' && <PolicyTab portfolioMode={portfolioMode} />}
        {currentTab === 'SANCTION' && <SanctionsTab portfolioMode={portfolioMode} />}
        {currentTab === 'COMMUNITY' && <CommunityTab portfolioMode={portfolioMode} />}

      </main>

      {/* Footer Details */}
      <footer className="bg-slate-950 border-t border-slate-900/80 py-10 px-4 mt-12 text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left space-y-1.5">
            <span className="text-xs font-bold font-sans text-slate-400 block tracking-tight">
              (주)둥둥네트워크 엔터테인먼트
            </span>
            <p className="text-[10px] leading-relaxed max-w-xl">
              본 포트폴리오 사이트는 가상의 모바일 힐링 RPG '둥둥아일랜드' 공식 포털 레이아웃을 전개하여, 
              게임 CS 위기 대응 능력, 정량적 이벤트 기획 및 CM 소통 능력을 성실하게 검증하기위한 <strong>CM 전문 포트폴리오 허브</strong>입니다. 
              상업적 무단 도용이나 무단 전재를 엄히 규정합니다.
            </p>
          </div>

          <div className="text-xs md:text-right font-mono space-y-1">
            <span className="block text-slate-400 font-sans font-bold">PORTFOLIO APPLICANT: 김두둥 (CM)</span>
            <span className="block">Email: {PORTFOLIO_META.contact.email}</span>
            <p className="text-[10px]">© 2026 Dungdung Island CM Project. All rights reserved.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
