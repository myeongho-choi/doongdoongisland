import React, { useState } from 'react';
import { SANCTIONS_DATA } from '../data';
import { Search, Calendar, FileWarning, Sparkles, UserX } from 'lucide-react';

interface SanctionsTabProps {
  portfolioMode: boolean;
}

export default function SanctionsTab({ portfolioMode }: SanctionsTabProps) {
  const [selectedSanctionId, setSelectedSanctionId] = useState<string>(SANCTIONS_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeSanction = SANCTIONS_DATA.find((s) => s.id === selectedSanctionId) || SANCTIONS_DATA[0];

  const filteredList = activeSanction.list.filter((item) => {
    return item.username.toLowerCase().includes(searchQuery.toLowerCase()) || 
           item.penalty.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-6" id="sanction-tab-container">
      
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-5">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          🔨 불량 이용자 제재 내역
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          비인가 프로그램 조작, 작업장 악용, 비매너 채팅 유포로 단속 고발 조치된 영구 제재 연동 로그를 공시합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Announcement Details (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Portfolio rationale */}
          {portfolioMode && activeSanction.portfolioRationale && (
            <div className="bg-gradient-to-r from-red-950/40 to-yellow-950/20 border border-red-500/30 p-4 rounded-xl flex flex-col gap-1.5 text-left">
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs">
                <Sparkles className="w-4 h-4 animate-spin text-red-500" />
                <span>[CM 포트폴리오 제재 집행 해설]</span>
              </div>
              <p className="text-[11px] text-slate-200 leading-relaxed font-sans">
                {activeSanction.portfolioRationale}
              </p>
            </div>
          )}

          {/* Sanction Statement reader */}
          <div className="bg-slate-90/80 border border-slate-800 rounded-2xl p-5 md:p-8 text-left space-y-6 shadow-xl" id="sanction-statement-card">
            
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono mb-2">
                <span>작성부서: 영지감식안보부 🐻</span>
                <span>• 작성일: {activeSanction.date}</span>
                <span>• 영제호수: {activeSanction.id}</span>
              </div>
              
              <h3 className="text-md sm:text-lg font-bold tracking-tight text-white font-sans leading-snug">
                {activeSanction.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line font-sans max-h-[360px] overflow-y-auto pr-2">
              {activeSanction.content}
            </p>

          </div>

        </div>

        {/* Right Column: Searchable 제재 대상자 목록 (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg text-left space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5 font-sans">
                  <UserX className="w-4 h-4 text-rose-500" /> 단속 위안 계정 색출 리스트
                </span>
                <span className="text-[10px] bg-red-950/40 text-red-400 px-2 rounded border border-red-900 font-mono font-bold animate-pulse">
                  총 {activeSanction.targetCount}개 제재완료
                </span>
              </div>

              {/* Dynamic search input for recruiters */}
              <div className="relative mb-3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
                  <Search className="w-3.5 h-3.5" />
                </span>
                <input
                  type="text"
                  placeholder="제재 아이디 검색 (예: ang, fruits 등)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-xs rounded-xl focus:outline-none focus:border-red-500/50 transition-colors"
                />
              </div>
            </div>

            {/* List Table */}
            <div className="overflow-hidden border border-slate-850 rounded-lg max-h-[300px] overflow-y-auto">
              <table className="w-full text-left text-[11px] font-mono divide-y divide-slate-850">
                <thead className="bg-slate-950 text-slate-500">
                  <tr>
                    <th className="px-3.5 py-2 font-bold select-none text-left">마스킹 ID</th>
                    <th className="px-3.5 py-2 font-bold select-none text-center">제재수위</th>
                    <th className="px-3.5 py-2 font-bold select-none text-center">보안기간</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850/60 bg-slate-900/35">
                  {filteredList.length > 0 ? (
                    filteredList.map((item, iIdx) => (
                      <tr key={iIdx} className="hover:bg-slate-950/30 transition-colors">
                        <td className="px-3.5 py-2.5 font-bold text-slate-200 text-left">{item.username}</td>
                        <td className="px-3.5 py-2.5 text-center text-rose-400">
                          <span className="px-1.5 py-0.25 rounded bg-rose-500/10 font-bold font-sans">
                            {item.penalty}
                          </span>
                        </td>
                        <td className="px-3.5 py-2.5 text-center text-slate-400 font-mono">{item.duration}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="py-8 text-center text-slate-500 text-[10px] font-sans">
                        검색된 ID 제재 기록이 존재하지 않습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Help note on compliance privacy laws */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-850 text-[10px] text-slate-500 leading-snug">
              📋 **개인정보법 실무 가이드**: 개인 정보 제3자 유포 및 침해 위자료 예방을 위하여, 단속 내역 공표 시 타겟 명칭의 앞 3자리 이후는 무조건 와일드카드 마스킹(<span className="font-mono text-slate-300">***</span>) 처리 기준을 완벽하게 준수하고 있습니다.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
