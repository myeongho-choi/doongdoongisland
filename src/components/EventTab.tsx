import React, { useState } from 'react';
import { EVENTS } from '../data';
import { Calendar, Sparkles, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const markdownComponents = {
  h3: ({ ...props }) => (
    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-5 mb-2.5 flex items-center gap-1.5 border-b border-slate-200 pb-1.5" {...props} />
  ),
  h4: ({ ...props }) => (
    <h4 className="text-xs sm:text-sm font-bold text-indigo-700 mt-4 mb-2" {...props} />
  ),
  p: ({ ...props }) => (
    <p className="text-xs sm:text-sm text-black leading-relaxed my-2 font-semibold" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="list-disc pl-5 my-3 space-y-1.5 text-xs sm:text-sm text-black font-semibold" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="list-decimal pl-5 my-3 space-y-1.5 text-xs sm:text-sm text-black font-semibold" {...props} />
  ),
  li: ({ ...props }) => (
    <li className="text-xs sm:text-sm text-black leading-relaxed font-semibold" {...props} />
  ),
  strong: ({ ...props }) => (
    <strong className="font-bold text-indigo-800 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded" {...props} />
  ),
  em: ({ ...props }) => (
    <em className="italic text-slate-650" {...props} />
  ),
};

interface EventTabProps {
  portfolioMode: boolean;
}

export default function EventTab({ portfolioMode }: EventTabProps) {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [attendDays, setAttendDays] = useState<boolean[]>([true, true, false, false, false, false, false]); // Day 1-2 pre-stamped
  const [isJoinedAttend, setIsJoinedAttend] = useState(false);

  const activeEvent = EVENTS.find((e) => e.id === selectedEventId);

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

  const getStatusBadge = (status: string) => {
    return status === '진행중' 
      ? 'bg-emerald-50 text-emerald-700 border-emerald-300' 
      : 'bg-slate-100 text-slate-500 border-slate-350';
  };

  return (
    <div className="space-y-6 font-sans text-left" id="event-tab-container">
      
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
          🎁 아일랜드 공식 이벤트
        </h2>
        <p className="text-slate-500 text-xs mt-1">
          둥둥아일랜드 유저 둥이님들의 성장을 위해 항시 연중무휴 가동 중인 혜택 이벤트 소식을 일목요연하게 전달합니다.
        </p>
      </div>

      {!activeEvent ? (
        // BOARD INDEX VIEW (Full Width list of events)
        <div className="space-y-4 animate-in fade-in duration-150">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block pl-0.5">
            진행 중인 이벤트 일지
          </span>

          <div className="flex flex-col gap-3">
            {EVENTS.map((evt) => {
              return (
                <button
                  key={evt.id}
                  id={`event-btn-${evt.id}`}
                  onClick={() => setSelectedEventId(evt.id)}
                  className="w-full text-left p-4 sm:p-5 bg-white border border-slate-850 hover:bg-indigo-50 hover:border-indigo-200 rounded-lg transition-all duration-200 cursor-pointer shadow-3xs hover:shadow-2xs group flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`px-2 py-0.5 text-[9px] font-bold rounded border ${getStatusBadge(evt.status)}`}>
                        {evt.status}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        분류: {evt.type}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold leading-normal text-left text-black group-hover:text-indigo-650 transition-colors mb-1 truncate">
                      {evt.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                      <Calendar className="w-3 text-slate-400" />
                      <span>이벤트 일정: {evt.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 md:shrink-0 w-full md:w-auto">
                    <span className="text-[10px] text-indigo-500 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform ml-auto">
                      자세히 보기 <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        // FULL THREAD READER VIEW
        <div className="space-y-4 animate-in fade-in duration-150">
          
          {/* Back button */}
          <button 
            onClick={() => setSelectedEventId(null)}
            className="px-3.5 py-1.5 text-xs text-slate-705 bg-white hover:bg-indigo-50 border border-slate-850 hover:border-indigo-200 rounded hover:text-indigo-600 flex items-center gap-1.5 transition-colors cursor-pointer font-bold shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            목록으로 돌아가기
          </button>

          {/* Portfolio rationale panel */}
          {portfolioMode && activeEvent.portfolioRationale && (
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded text-xs text-slate-200 shadow-3xs">
              <div className="flex items-center gap-2 text-yellow-850 font-bold mb-1">
                <Sparkles className="w-4 h-4 text-yellow-600" />
                <span>[CM 전문성: 유저 잔존 유도 및 인게임 KPI 리포트 해설]</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-semibold">
                {activeEvent.portfolioRationale}
              </p>
            </div>
          )}

          {/* Core Content Viewer with custom interactives */}
          <div className="bg-white border border-slate-850 rounded-lg overflow-hidden flex flex-col" id="event-detail-pane">
            
            {/* Aspect Banner header */}
            <div className="p-6 bg-slate-950 border-b border-slate-850 text-left">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="bg-indigo-600 text-white font-bold font-mono text-[9px] px-2 py-0.5 rounded tracking-wide uppercase">
                  {activeEvent.type} EVENT SPEC
                </span>
                <span className="text-[11px] text-slate-500 font-mono font-medium">No.{activeEvent.id}</span>
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-tight">
                {activeEvent.title}
              </h3>
              
              <p className="text-[11px] text-slate-400 font-mono mt-2 flex items-center gap-1">
                📅 공식 일정: {activeEvent.period}
              </p>
            </div>

            {/* Contents Body */}
            <div className="p-6 sm:p-8 bg-white text-left space-y-6">
              
              {/* Event Description Text */}
              <div className="markdown-body text-left pb-5 border-b border-slate-850">
                <ReactMarkdown components={markdownComponents}>
                  {activeEvent.content}
                </ReactMarkdown>
              </div>

              {/* INTERACTIVE COMPONENT 1: 7-DAY ATTENDANCE SHEET */}
              {activeEvent.type === '출석' && (
                <div className="bg-slate-950 p-5 rounded border border-slate-850 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                        📅 둥둥 7일차 구름 도장 출석판 (이벤트 테스터)
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        매일 출석을 체크하여 보상을 시뮬레이션할 수 있는 특수한 위젯 프레임입니다.
                      </p>
                    </div>

                    <button
                      id="attend-stamp-button"
                      onClick={handleAttendCheck}
                      disabled={attendDays.indexOf(false) === -1}
                      className="px-3 py-1 bg-indigo-600 rounded text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm"
                    >
                      {attendDays.indexOf(false) === -1 ? '출석 도장 완주!' : '오늘의 출석🐾'}
                    </button>
                  </div>

                  {/* Stamp grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
                    {attendDays.map((isStamped, dIdx) => (
                      <div 
                        key={dIdx} 
                        className={`p-2 rounded border text-center flex flex-col justify-between items-center h-22 relative overflow-hidden transition-all duration-200 ${
                          isStamped 
                            ? 'bg-indigo-50 border-indigo-200' 
                            : 'bg-white border-slate-850 hover:bg-indigo-50'
                        }`}
                      >
                        <span className="text-[9px] text-slate-500 font-bold font-mono">D-{dIdx + 1}</span>
                        
                        {/* Stamp Circle */}
                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                          {isStamped ? (
                            <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white scale-100 font-extrabold text-[12px]">
                              PASS
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-slate-950 border border-dashed border-slate-800 flex items-center justify-center text-slate-500 text-[9px] font-bold">
                              🎁
                            </div>
                          )}
                        </div>

                        {/* Miniature tooltip Reward text */}
                        <span className="text-[9px] text-slate-500 font-bold font-sans line-clamp-1 truncate w-full" title={activeEvent.attendRewards?.[dIdx]}>
                          {activeEvent.attendRewards?.[dIdx]?.split(': ')[1]?.split(' (')[0] || '둥실 선물'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Complete notification */}
                  {attendDays.indexOf(false) === -1 && (
                    <div className="p-3 bg-indigo-600 text-white rounded text-xs text-center font-bold">
                      🎉 축하합니다! 7일차 '잠꾸러기 GM둥곰 목각 인형 인게임 벽데코' 보상 코드가 수동 발송되었습니다!
                    </div>
                  )}
                </div>
              )}

              {/* INTERACTIVE COMPONENT 3: HOT-TIME CLOCK */}
              {activeEvent.type === '핫타임' && (
                <div className="bg-slate-950 p-5 rounded border border-slate-850 space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-indigo-600" /> 주말 핫타임 버프 배포 타임테이블
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        동접 유지(MCU) 및 유저 트래픽 밀집 지표 관리를 위해 설계한 기획 보드입니다.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 font-mono">
                    <div className="p-2.5 bg-white border border-slate-850 rounded flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-slate-200 font-bold">1구간: 어류 수집 확률 200% 증가 버프</span>
                      </div>
                      <span className="text-indigo-600 font-bold">토/일 12:00 ~ 14:00</span>
                    </div>

                    <div className="p-2.5 bg-white border border-slate-850 rounded flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-slate-200 font-bold">2구간: 밭 경작 골드 획득 150% 증가 버프</span>
                      </div>
                      <span className="text-indigo-600 font-bold">토/일 20:00 ~ 22:00</span>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-500 leading-relaxed font-sans bg-slate-950 p-3 rounded border border-slate-850 text-center">
                    📢 **CM 핫타임 운영전략**: 주말 황금 시간대 버프 배치를 통해 전체 WAU 지수가 크게 신장되는 성공을 이뤄내고 있습니다.
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
