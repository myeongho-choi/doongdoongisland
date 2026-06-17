import React, { useState } from 'react';
import { NOTICES } from '../data';
import { Notice } from '../types';
import { Search, Eye, Calendar, Sparkles, BookOpen, Clock, AlertTriangle } from 'lucide-react';

interface NoticeTabProps {
  portfolioMode: boolean;
}

export default function NoticeTab({ portfolioMode }: NoticeTabProps) {
  const [selectedNoticeId, setSelectedNoticeId] = useState<string>(NOTICES[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['전체', '일반', '점검', '긴급', '업데이트'];

  const filteredNotices = NOTICES.filter((notice) => {
    const matchesCategory = activeCategory === '전체' || notice.category === activeCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          notice.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedNotice = NOTICES.find((n) => n.id === selectedNoticeId) || NOTICES[0];

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case '긴급':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case '점검':
        return 'bg-amber-500/10 text-amber-400 border-amber-550/30';
      case '업데이트':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="space-y-6" id="notice-tab-container">
      
      {/* Title page header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            📰 공지사항 및 운영공지
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            둥둥아일랜드의 최신 소식 및 점검/이슈 사항들을 빠르고 신속하게 보고해 드립니다.
          </p>
        </div>

        {/* Categories togglers */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                // Auto-select first in filtered list if available
                const matched = NOTICES.filter(n => cat === '전체' || n.category === cat);
                if (matched.length > 0) setSelectedNoticeId(matched[0].id);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                activeCategory === cat
                  ? 'bg-sky-500 text-slate-950 border-sky-400'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: List Pane (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Search Box */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="공지사항 제목, 본문 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-xl focus:outline-none focus:border-sky-500/50 transition-colors"
            />
          </div>

          {/* List items widget */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 max-h-[500px] overflow-y-auto space-y-1 divide-y divide-slate-800/40">
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice) => {
                const isSelected = notice.id === selectedNoticeId;
                return (
                  <div
                    key={notice.id}
                    id={`notice-item-${notice.id}`}
                    onClick={() => setSelectedNoticeId(notice.id)}
                    className={`block w-full text-left p-3 rounded-xl transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-950 border-l-4 border-l-sky-400'
                        : 'hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded border ${getCategoryTheme(notice.category)}`}>
                        {notice.category}
                      </span>
                      {notice.isImportant && (
                        <span className="bg-red-500 text-white text-[9px] font-extrabold px-1 rounded animate-pulse">
                          필독
                        </span>
                      )}
                      <span className="text-[10px] text-slate-500 font-mono ml-auto">
                        {notice.id}
                      </span>
                    </div>

                    <h4 className={`text-xs md:text-sm font-semibold tracking-tight text-left leading-snug line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}>
                      {notice.title}
                    </h4>

                    <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {notice.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" /> {notice.views}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-12 text-center text-slate-500 text-xs">
                검색된 필터 조건에 부합하는 공지사항이 존재하지 않습니다.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Reader View (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Portfolio rationale header panel */}
          {portfolioMode && selectedNotice.portfolioRationale && (
            <div className="bg-gradient-to-r from-amber-950/40 to-yellow-950/20 border border-yellow-500/30 p-4 rounded-2xl shadow-lg relative overflow-hidden flex flex-col gap-2">
              <div className="flex items-center gap-2 text-yellow-300 font-sans text-xs font-bold leading-none">
                <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" />
                <span>[CM 포트폴리오 기획서 코멘터리]</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                {selectedNotice.portfolioRationale}
              </p>
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-10 text-yellow-400 scale-150Translate">
                👑
              </div>
            </div>
          )}

          {/* Actual Notice reading area */}
          <div className="bg-slate-90/80 border border-slate-800 rounded-2xl shadow-xl p-5 md:p-8 flex flex-col justify-between" id="notice-reader-pane">
            <div>
              {/* Header inside */}
              <div className="border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 text-xs font-bold rounded border ${getCategoryTheme(selectedNotice.category)}`}>
                    {selectedNotice.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono text-left">
                    작성일: {selectedNotice.date} | 조회수: {selectedNotice.views}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white font-sans text-left leading-snug">
                  {selectedNotice.title}
                </h3>
              </div>

              {/* Main Text Content */}
              <div className="text-left text-sm text-slate-300 leading-relaxed font-sans whitespace-pre-line space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {selectedNotice.content}
              </div>
            </div>

            {/* Footer inside */}
            <div className="border-t border-slate-800/80 mt-8 pt-4 flex justify-between items-center text-xs">
              <span className="text-slate-500 font-mono">
                Dungdung Island Operations Department. All rights reserved.
              </span>
              <span className="text-[10px] text-slate-400 font-bold px-2 py-1 rounded bg-slate-900 border border-slate-800">
                인증 GM: 둥곰🐻
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
