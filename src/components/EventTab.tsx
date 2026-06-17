import React, { useState } from 'react';
import { EVENTS, IMAGES } from '../data';
import { GameEvent } from '../types';
import { Calendar, CheckCircle2, Sparkles, Award, Heart, HelpCircle, Check, Play } from 'lucide-react';

interface EventTabProps {
  portfolioMode: boolean;
}

export default function EventTab({ portfolioMode }: EventTabProps) {
  const [selectedEventId, setSelectedEventId] = useState<string>(EVENTS[0].id);
  const [attendDays, setAttendDays] = useState<boolean[]>([true, true, false, false, false, false, false]); // Day 1-2 pre-stamped
  const [isJoinedAttend, setIsJoinedAttend] = useState(false);
  const [heartCount, setHeartCount] = useState<number[]>([42, 28, 19]);
  const [hasHearted, setHasHearted] = useState<boolean[]>([false, false, false]);

  const activeEvent = EVENTS.find((e) => e.id === selectedEventId) || EVENTS[0];

  const handleAttendCheck = () => {
    // Check first unstamped index
    const firstUnusedIdx = attendDays.indexOf(false);
    if (firstUnusedIdx !== -1) {
      const nextDays = [...attendDays];
      nextDays[firstUnusedIdx] = true;
      setAttendDays(nextDays);
      if (firstUnusedIdx === 6) {
        setIsJoinedAttend(true);
      }
    }
  };

  const handleHeartClick = (index: number) => {
    if (hasHearted[index]) {
      const nextHearts = [...heartCount];
      nextHearts[index] -= 1;
      setHeartCount(nextHearts);
      const nextHeartStates = [...hasHearted];
      nextHeartStates[index] = false;
      setHasHearted(nextHeartStates);
    } else {
      const nextHearts = [...heartCount];
      nextHearts[index] += 1;
      setHeartCount(nextHearts);
      const nextHeartStates = [...hasHearted];
      nextHeartStates[index] = true;
      setHasHearted(nextHeartStates);
    }
  };

  const getStatusBadge = (status: string) => {
    return status === '진행중' 
      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30' 
      : 'bg-slate-800 text-slate-400 border-slate-700';
  };

  return (
    <div className="space-y-6" id="event-tab-container">
      
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-5">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          🎁 아일랜드 공식 이벤트
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          매일 즐겁게 둥실섬을 가꿀 수 있도록 준비한 풍성한 특별 혜택 리스트입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Event Selection Pane (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block pl-1">
            소식 보드 목록
          </span>

          <div className="space-y-3">
            {EVENTS.map((evt) => {
              const isSelected = evt.id === selectedEventId;
              return (
                <button
                  key={evt.id}
                  id={`event-btn-${evt.id}`}
                  onClick={() => setSelectedEventId(evt.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-br from-indigo-950/40 to-slate-900 border-sky-500/50 shadow-lg shadow-indigo-500/5'
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 text-[9px] font-bold rounded border ${getStatusBadge(evt.status)}`}>
                      {evt.status}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono ml-auto">
                      {evt.type}
                    </span>
                  </div>

                  <h3 className={`text-xs md:text-sm font-bold tracking-tight line-clamp-2 ${
                    isSelected ? 'text-white' : 'text-slate-300'
                  }`}>
                    {evt.title}
                  </h3>

                  <div className="flex items-center gap-1.5 mt-3 text-[10px] text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{evt.period.split(' ~ ')[0]} ~</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Event Detail & INTERACTIVE SIMULATORS (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">

          {/* Portfolio rationale panel */}
          {portfolioMode && activeEvent.portfolioRationale && (
            <div className="bg-gradient-to-r from-teal-950/40 to-cyan-950/20 border border-teal-500/30 p-4 rounded-2xl shadow-lg flex flex-col gap-2">
              <div className="flex items-center gap-2 text-teal-300 font-sans text-xs font-bold leading-none">
                <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
                <span>[CM 포트폴리오 이벤트 기획 분석]</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                {activeEvent.portfolioRationale}
              </p>
            </div>
          )}

          {/* Core Content Viewer with custom interactives */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col" id="event-detail-pane">
            
            {/* Aspect Banner header */}
            <div className="h-44 bg-slate-950 relative overflow-hidden flex items-end p-6 border-b border-slate-800">
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-0" />
              
              <div className="relative z-10 text-left max-w-xl">
                <span className="bg-sky-500 text-slate-950 font-bold font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">
                  {activeEvent.type} EVENT SPEC
                </span>
                <h3 className="text-lg md:text-xl font-extrabold text-white leading-tight">
                  {activeEvent.title}
                </h3>
                <p className="text-xs text-sky-400 font-mono mt-1">
                  📅 기간: {activeEvent.period}
                </p>
              </div>
            </div>

            {/* Contents Body */}
            <div className="p-6 md:p-8 text-left space-y-6">
              
              {/* Event Description Text */}
              <div className="text-sm text-slate-300 whitespace-pre-line leading-relaxed pb-4 border-b border-slate-800/60">
                {activeEvent.content}
              </div>

              {/* INTERACTIVE COMPONENT 1: 7-DAY ATTENDANCE SHEET */}
              {activeEvent.type === '출석' && (
                <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-2">
                        📅 둥곰이의 구름 도장 출석판 (Recruiter Test)
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        귀여운 도장을 눌러 일러스트 출석 프로세스를 시뮬레이션 해보세요.
                      </p>
                    </div>

                    <button
                      id="attend-stamp-button"
                      onClick={handleAttendCheck}
                      disabled={attendDays.indexOf(false) === -1}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-450 focus:outline-none text-slate-950 font-sans cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {attendDays.indexOf(false) === -1 ? '출석 완주 완료! 🎉' : '오늘의 도장 누르기  🐾'}
                    </button>
                  </div>

                  {/* Stamp grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                    {attendDays.map((isStamped, dIdx) => (
                      <div 
                        key={dIdx} 
                        className={`p-2.5 rounded-xl border text-center flex flex-col justify-between items-center h-24 relative overflow-hidden transition-all duration-300 ${
                          isStamped 
                            ? 'bg-violet-950/20 border-violet-500/50 shadow-inner' 
                            : 'bg-slate-900 border-slate-850 hover:bg-slate-800/40'
                        }`}
                      >
                        <span className="text-[10px] text-slate-500 font-mono">DAY {dIdx + 1}</span>
                        
                        {/* Stamp Circle */}
                        <div className="w-10 h-10 rounded-full flex items-center justify-center relative">
                          {isStamped ? (
                            <div className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center text-violet-400 border border-violet-400/50 scale-105 transition-transform animate-bounce">
                              <Check className="w-5 h-5 font-bold" />
                            </div>
                          ) : (
                            <div className="w-7 h-7 rounded-full bg-slate-950 border border-dashed border-slate-700 flex items-center justify-center text-slate-600 text-[10px]">
                              🎁
                            </div>
                          )}
                        </div>

                        {/* Miniature tooltip Reward text */}
                        <span className="text-[9px] text-slate-400 font-sans line-clamp-1 truncate w-full" title={activeEvent.attendRewards?.[dIdx]}>
                          {activeEvent.attendRewards?.[dIdx]?.split(': ')[1]?.split(' (')[0] || '둥실 선물'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Complete notification */}
                  {attendDays.indexOf(false) === -1 && (
                    <div className="p-3 bg-violet-950/50 border border-violet-500/30 rounded-lg text-xs text-center text-violet-300 animate-pulse font-medium">
                      🐻 축하합니다! 7일차 '잠꾸러기 GM둥곰 인형 인게임 벽난로' 데코 배포 처리가 가상 완료되었습니다!
                    </div>
                  )}
                </div>
              )}

              {/* INTERACTIVE COMPONENT 2: INTERACTIVE MOUNT GALLERY FOR DECORATING EVENT */}
              {activeEvent.type === '성장' && (
                <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-4">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-200">
                      📸 실시간 섬 자랑 이벤트 접수작 (Galleries)
                    </h4>
                    <p className="text-[10px] text-slate-400">
                      실시간으로 참여 중인 유저들의 개성 넘치는 호수 스냅샷입니다. 추천 하트를 남겨 여론을 격려해 보세요!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { author: "연못왕곰돌", title: "구름 분수와 솜잠 자리 정렬", imgSeed: "cloudsky" },
                      { author: "라벤더필드", title: "보랏빛 라벤더 타일 99개 바다", imgSeed: "flower" },
                      { author: "아기새세입자", title: "나무 오솔길과 요정의 쉼터", imgSeed: "forest" }
                    ].map((gallery, gIdx) => (
                      <div key={gIdx} className="bg-slate-900 border border-slate-800/80 rounded-xl overflow-hidden hover:scale-[1.02] transition-all flex flex-col h-44 justify-between">
                        {/* Mock Image using a stylized colored block or template banner */}
                        <div className="h-20 bg-slate-800 flex items-center justify-center text-3xl relative">
                          <img 
                            src={IMAGES.hero} 
                            alt={gallery.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover opacity-60"
                          />
                          <span className="absolute">
                            {gIdx === 0 ? '✨🐻' : gIdx === 1 ? '💜🏡' : '🌲🐦'}
                          </span>
                        </div>

                        {/* Info details */}
                        <div className="p-3">
                          <span className="block text-[10px] text-slate-500 font-mono text-left">CM추천자: {gallery.author}</span>
                          <span className="block text-[11px] text-slate-200 font-bold font-sans text-left truncate">{gallery.title}</span>
                          
                          {/* Heart widget */}
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-[10px] text-slate-400 font-mono">No.{gIdx+1}</span>
                            <button
                              id={`g-heart-btn-${gIdx}`}
                              onClick={() => handleHeartClick(gIdx)}
                              className={`flex items-center gap-1 text-[11px] font-mono cursor-pointer transition-colors ${
                                hasHearted[gIdx] ? 'text-red-400 font-bold' : 'text-slate-500 hover:text-slate-400'
                              }`}
                            >
                              <Heart className={`w-3 h-3 ${hasHearted[gIdx] ? 'fill-current' : ''}`} />
                              <span>{heartCount[gIdx]}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* INTERACTIVE COMPONENT 3: HOT-TIME CLOCK PROGRESSION */}
              {activeEvent.type === '핫타임' && (
                <div className="bg-slate-100 dark:bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-4 text-left">
                  <div className="flex items-center justify-between border-b border-indigo-950 pb-3">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-sky-400" /> 주말 핫타임 버프 적용 타임라인
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        특정 시간대에 동시 접속을 독려하는 CM 운영의 핵심 동력을 시뮬레이션 설계한 보드입니다.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 font-mono">
                    <div className="p-3 bg-slate-900 border border-slate-850 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                        <span className="text-xs text-slate-300 font-bold">1단계 핫타임 (어류 버프 200%)</span>
                      </div>
                      <span className="text-xs text-amber-400 font-bold">매주 토/일 12:00 ~ 14:00</span>
                    </div>

                    <div className="p-3 bg-slate-900 border border-slate-850 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-ping" />
                        <span className="text-xs text-slate-300 font-bold">2단계 핫타임 (경험치 버프 100%)</span>
                      </div>
                      <span className="text-xs text-violet-400 font-bold">매주 토/일 20:00 ~ 22:00</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 leading-relaxed font-sans bg-slate-900/40 p-3 rounded-lg border border-slate-850 text-center">
                    📢 **CM 가치 분석**: 주간 핫타임을 통해 주말 잔존 시간(MCU)이 평일 대비 평균 **32% 상승**하는 효과를 보여주며, 복작복작 수거되는 피드백을 통해 인게임 소비 아이콘 촉진 주기를 조절할 수 있습니다.
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
