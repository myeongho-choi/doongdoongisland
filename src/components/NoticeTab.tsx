import React, { useState } from 'react';
import { NOTICES } from '../data';
import { Notice } from '../types';
import { Search, Eye, Calendar, ArrowLeft, MessageSquare, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const markdownComponents = {
  h3: ({ ...props }) => (
    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-5 mb-2.5 flex items-center gap-1.5 border-b border-slate-200 pb-1.5" {...props} />
  ),
  h4: ({ ...props }) => (
    <h4 className="text-xs sm:text-sm font-bold text-indigo-700 mt-4 mb-2" {...props} />
  ),
  p: ({ ...props }) => (
    <p className="text-sm sm:text-base text-slate-850 leading-relaxed my-2 font-semibold" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="list-disc pl-5 my-3 space-y-2 text-sm sm:text-base text-slate-850 font-semibold" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="list-decimal pl-5 my-3 space-y-2 text-sm sm:text-base text-slate-850 font-semibold" {...props} />
  ),
  li: ({ ...props }) => (
    <li className="text-sm sm:text-base text-slate-850 leading-relaxed font-semibold" {...props} />
  ),
  strong: ({ ...props }) => (
    <strong className="font-extrabold text-indigo-700 bg-indigo-50 px-1 py-0.5 rounded" {...props} />
  ),
  em: ({ ...props }) => (
    <em className="italic text-slate-600" {...props} />
  ),
};

interface NoticeTabProps {
  portfolioMode: boolean;
}

export default function NoticeTab({ portfolioMode }: NoticeTabProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['전체', '일반', '점검', '긴급', '업데이트', '안내'];

  const filteredNotices = NOTICES.filter((notice) => {
    const matchesCategory = activeCategory === '전체' || notice.category === activeCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          notice.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case '긴급':
        return 'bg-red-100 text-red-700 border border-red-300';
      case '점검':
        return 'bg-amber-150 text-amber-800 border border-amber-300';
      case '업데이트':
        return 'bg-indigo-100 text-indigo-700 border border-indigo-300';
      case '안내':
        return 'bg-sky-100 text-sky-700 border border-sky-300';
      default:
        return 'bg-slate-100 text-slate-700 border border-slate-300';
    }
  };

  const selectedNotice = NOTICES.find((n) => n.id === selectedId);

  return (
    <div className="space-y-6 font-sans text-left" id="notice-board-container">
      
      {/* Tab Header title */}
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
          📢 아일랜드 소식 (공지사항)
        </h2>
        <p className="text-slate-500 text-xs mt-1">
          둥둥아일랜드의 공식 업데이트 소식, 정기 점검 일정, 긴급 특보 요강을 신속하게 안내합니다.
        </p>
      </div>

      {!selectedNotice ? (
        // BOARD INDEX VIEW (게시판 중심 구조)
        <div className="space-y-4">
          
          {/* Filters & Search Toolbar row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Categories tab switches */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded border transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                      : 'bg-white text-slate-400 border-slate-850 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full md:w-72">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="글 제목 혹은 내용 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-850 text-slate-800 text-xs rounded focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

          </div>

          {/* Tabular Lists Grid */}
          <div className="bg-white border border-slate-850 rounded overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left min-w-[600px]">
                <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-center w-16">번호</th>
                    <th scope="col" className="px-4 py-3 text-center w-24">분류</th>
                    <th scope="col" className="px-6 py-3">제목</th>
                    <th scope="col" className="px-4 py-3 text-center w-28">작성일</th>
                    <th scope="col" className="px-4 py-3 text-center w-24">조회수</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850">
                  {filteredNotices.length > 0 ? (
                    filteredNotices.map((notice) => (
                      <tr 
                        key={notice.id}
                        onClick={() => setSelectedId(notice.id)}
                        className={`hover:bg-indigo-50/70 cursor-pointer transition-colors ${
                          notice.isImportant ? 'bg-indigo-50/40 hover:bg-indigo-55/60' : ''
                        }`}
                      >
                        {/* ID */}
                        <td className="px-4 py-3.5 text-center font-mono text-slate-500">
                          {notice.id.replace('N-', '')}
                        </td>
                        
                        {/* Category badge */}
                        <td className="px-4 py-3.5 text-center">
                          <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${getCategoryBadgeClass(notice.category)}`}>
                            {notice.category}
                          </span>
                        </td>

                        {/* Title list cell */}
                        <td className="px-6 py-3.5">
                          <div className="flex items-center gap-2">
                            {notice.isImportant && (
                              <span className="bg-red-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase leading-none shrink-0 border border-red-600">
                                필독
                              </span>
                            )}
                            <span className="text-slate-800 font-bold hover:text-indigo-600 leading-snug hover:underline">
                              {notice.title}
                            </span>
                          </div>
                        </td>

                        {/* Date */}
                        <td className="px-4 py-3.5 text-center font-mono text-slate-500">
                          {notice.date}
                        </td>

                        {/* Views */}
                        <td className="px-4 py-3.5 text-center font-mono text-slate-500">
                          {notice.views.toLocaleString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-slate-500 font-medium">
                        검색 조건에 맞는 공지 내용이 존재하지 않습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-[11px] text-slate-500 font-mono text-right">
            총 {filteredNotices.length}개의 정기 공지가 게시 중입니다.
          </div>

        </div>
      ) : (
        // FULL THREAD READER VIEW
        <div className="space-y-4 animate-in fade-in duration-150">
          
          {/* Back button */}
          <button 
            onClick={() => setSelectedId(null)}
            className="px-3.5 py-1.5 text-xs text-slate-700 bg-white hover:bg-indigo-50 border border-slate-850 hover:border-indigo-200 rounded hover:text-indigo-600 flex items-center gap-1.5 transition-colors cursor-pointer font-bold shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            목록으로 돌아가기
          </button>

          {/* Portfolio rationale header panel */}
          {portfolioMode && selectedNotice.portfolioRationale && (
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded text-xs text-slate-200">
              <span className="font-bold text-yellow-800 flex items-center gap-1 mb-1">
                <Sparkles className="w-4 h-4 text-yellow-600 shrink-0" /> [운영진 의도 & 위기 대응 분석]
              </span>
              <p className="text-slate-700 leading-relaxed font-medium">
                {selectedNotice.portfolioRationale}
              </p>
            </div>
          )}

          {/* Actual Notice article sheets */}
          <div className="bg-white border border-slate-850 rounded overflow-hidden">
            {/* Thread Header */}
            <div className="bg-slate-950 p-6 border-b border-slate-850 text-left">
              <div className="flex items-center gap-2.5 mb-2.5 flex-wrap">
                <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded ${getCategoryBadgeClass(selectedNotice.category)}`}>
                  {selectedNotice.category}
                </span>
                <span className="text-[11px] text-slate-500 font-semibold font-mono">
                  글번호: {selectedNotice.id}
                </span>
                <span className="text-slate-700">|</span>
                <span className="text-[11px] text-slate-500 font-semibold">
                  작성자: 공식 GM둥곰
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
                {selectedNotice.title}
              </h3>
              
              <div className="flex items-center gap-4 mt-3 text-[11px] text-slate-500 font-mono border-t border-slate-800 pt-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> 등록일: {selectedNotice.date}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> 조회수: {selectedNotice.views.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Content body layout */}
            <div className="p-6 sm:p-8 bg-white min-h-[300px]">
              <div className="markdown-body text-left">
                <ReactMarkdown components={markdownComponents}>
                  {selectedNotice.content}
                </ReactMarkdown>
              </div>
            </div>

            {/* Official seal footer layout */}
            <div className="p-4 bg-slate-950 border-t border-slate-850 flex flex-col sm:flex-row justify-between items-center text-xs gap-3">
              <span className="text-slate-500 font-mono font-medium">
                Dungdung Island Official Portal Service Engine. All rights reserved.
              </span>
              <span className="text-[10px] text-emerald-800 font-bold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-300">
                작성 부서: 게임서비스실 운영1팀
              </span>
            </div>
          </div>

          {/* Quick operations comments or reply mock in a flat style */}
          <div className="bg-slate-900 border border-slate-850 p-4 rounded flex items-start gap-3">
            <span className="text-lg">💡</span>
            <div className="text-xs text-slate-400">
              <span className="font-bold text-slate-200 block mb-1">참고자료 (공식 소통 지표)</span>
              본 공지사항 업데이트 파일은 인게임 민감 요소를 선제 파악하고 오류 대처 보상 패키지를 신속 배포함으로써 유저 적체 불만을 현격히 떨어뜨리는 데 주안점을 맞추었습니다.
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
