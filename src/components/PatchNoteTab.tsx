import React, { useState } from 'react';
import { PATCH_NOTES, IMAGES } from '../data';
import { Sparkles, Calendar, BookOpen, Clock, ChevronRight, Zap, RefreshCw, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';

interface PatchNoteTabProps {
  portfolioMode: boolean;
}

export default function PatchNoteTab({ portfolioMode }: PatchNoteTabProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedPatch = PATCH_NOTES.find((p) => p.id === selectedId);

  // Helper to render lines nicely depending on their formatting prefix
  const renderItemLine = (item: string, index: number) => {
    if (item.startsWith('■')) {
      return (
        <div key={index} className="text-xs sm:text-sm font-bold text-slate-900 mt-4 mb-2 flex items-center gap-1.5 border-b border-indigo-100 pb-1">
          <span className="text-indigo-600 font-extrabold">▶</span>
          <span>{item.replace('■', '').trim()}</span>
        </div>
      );
    } else if (item.startsWith('  •') || item.startsWith('  -')) {
      return (
        <li key={index} className="ml-6 py-1.5 list-none text-sm text-slate-800 flex items-start gap-1.5 font-semibold leading-relaxed">
          <span className="text-indigo-600 font-bold shrink-0 mt-1">•</span>
          <span className="leading-snug">{item.replace('  •', '').replace('  -', '').trim()}</span>
        </li>
      );
    } else {
      // General item line
      return (
        <li key={index} className="py-1.5 list-none text-sm text-slate-800 flex items-start gap-1.5 font-semibold leading-relaxed pl-1">
          <span className="text-indigo-600 shrink-0 mt-1">•</span>
          <span className="leading-snug">{item.replace('•', '').trim()}</span>
        </li>
      );
    }
  };

  return (
    <div className="space-y-6 font-sans text-left" id="patchnote-tab-container">
      
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-5">
        <h2 className="text-xl font-extrabold text-slate-100 tracking-tight flex items-center gap-2">
          🛸 시스템 공식 패치노트 (Patch Notes)
        </h2>
        <p className="text-slate-500 text-xs sm:text-xs mt-1">
          둥둥아일랜드의 라이브 변경 사양, 기능 도입, 밸런스 조정 및 버그 수정 상세 일지입니다.
        </p>
      </div>

      {!selectedPatch ? (
        // BOARD INDEX VIEW (Full Width list of patch notes)
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="flex flex-col gap-3">
            {PATCH_NOTES.map((patch) => {
              return (
                <button
                  key={patch.id}
                  onClick={() => setSelectedId(patch.id)}
                  className="w-full text-left p-4 sm:p-5 bg-white border border-slate-850 hover:bg-indigo-50 hover:border-indigo-200 rounded-lg transition-all duration-200 cursor-pointer shadow-3xs hover:shadow-2xs group flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-650 border border-indigo-200 shrink-0">
                        {patch.version}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 shrink-0">
                        <Calendar className="w-3 h-3 text-slate-400" /> {patch.date}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold leading-normal text-left text-slate-800 group-hover:text-indigo-650 transition-colors mb-1 truncate">
                      {patch.title}
                    </h4>

                    <p className="text-[11px] text-slate-600 line-clamp-1 leading-relaxed">
                      {patch.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 md:shrink-0 w-full md:w-auto">
                    <span className="text-[10px] text-indigo-500 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform ml-auto">
                      상세 내역 확인 <ArrowRight className="w-3 h-3" />
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
            onClick={() => setSelectedId(null)}
            className="px-3.5 py-1.5 text-xs text-slate-705 bg-white hover:bg-indigo-50 border border-slate-850 hover:border-indigo-200 rounded hover:text-indigo-600 flex items-center gap-1.5 transition-colors cursor-pointer font-bold shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            목록으로 돌아가기
          </button>
          
          {/* Portfolio Recruiter Coach Card */}
          {portfolioMode && selectedPatch.portfolioRationale && (
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4.5 rounded text-xs text-slate-200 shadow-3xs">
              <span className="font-bold text-yellow-800 flex items-center gap-1 mb-1.5">
                <Sparkles className="w-4 h-4 text-yellow-600 shrink-0" />
                <span>[CM 전문 해설: 공무 기술 번역의 완성도]</span>
              </span>
              <p className="text-slate-700 leading-relaxed font-semibold">
                {selectedPatch.portfolioRationale}
              </p>
            </div>
          )}

          {/* Main Patch details paper */}
          <div className="bg-white border border-slate-850 rounded-lg overflow-hidden shadow-sm">
            
            {/* Paper Header (Clean & Bright Backdrop) */}
            <div className="bg-indigo-50/30 p-6 border-b border-slate-850">
              <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                <span className="text-[10px] bg-indigo-100 text-indigo-750 border border-indigo-200 px-2.5 py-0.5 rounded font-mono font-bold tracking-wider uppercase">
                  {selectedPatch.version} Complete
                </span>
                <span className="text-[11px] text-slate-500 font-mono font-semibold">
                  배포일: {selectedPatch.date}
                </span>
              </div>
              
              <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                {selectedPatch.title}
              </h3>
              
              <p className="text-[11px] text-slate-600 mt-2 font-medium leading-relaxed">
                {selectedPatch.summary}
              </p>
            </div>

            {/* Paper Content sections (Bright White with Delicate Accents) */}
            <div className="p-6 md:p-8 bg-white space-y-6">
              {selectedPatch.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  
                  {/* Category Title Heading */}
                  <h4 className="text-xs sm:text-xs font-bold text-indigo-500 flex items-center gap-1.5 bg-indigo-50/80 p-2.5 rounded border border-indigo-100 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    <span className="font-sans font-extrabold tracking-tight">{section.title}</span>
                  </h4>
                  
                  {/* List Items */}
                  <div className="pl-1 space-y-1">
                    {section.items.map((item, iIdx) => renderItemLine(item, iIdx))}
                  </div>

                </div>
              ))}
            </div>

            {/* CM Comment section (Warm, Light and readable) */}
            <div className="p-5.5 bg-slate-950 border-t border-slate-850 text-left">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-850 shrink-0 bg-white">
                  <img 
                    src={IMAGES.gm_bear} 
                    alt="GM Bear portrait representation" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover animate-pulse"
                  />
                </div>
                
                <div className="space-y-1.5 flex-1">
                  <span className="block text-[11px] font-bold text-indigo-500 font-mono">
                    🐾 CM 둥곰의 부드러운 코멘트
                  </span>
                  <p className="text-xs text-slate-800 leading-relaxed font-sans font-medium whitespace-pre-line bg-white p-3 rounded-lg border border-slate-800 shadow-3xs">
                    {selectedPatch.cmComment}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
