import React, { useState } from 'react';
import { FAQS } from '../data';
import { Search, HelpCircle, ChevronRight, Sparkles } from 'lucide-react';

interface FAQTabProps {
  portfolioMode: boolean;
}

export default function FAQTab({ portfolioMode }: FAQTabProps) {
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const categories = ['전체', '계정', '결제', '게임플레이', '오류/버그'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === '전체' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (faqId: string) => {
    setOpenFaqId(openFaqId === faqId ? null : faqId);
  };

  return (
    <div className="space-y-6 font-sans text-left" id="faq-tab-container">
      
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
          ❓ 자주 묻는 질문 (FAQ)
        </h2>
        <p className="text-slate-500 text-xs mt-1">
          둥둥아일랜드 서비스 중 유저분들이 가장 자주 남겨주시는 사항에 대한 해답 가이드라인입니다.
        </p>
      </div>

      {/* Control Actions Row (Search & Filtering) */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Categories filters scroll list */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenFaqId(null);
              }}
              className={`px-3 py-1 text-xs font-bold rounded border transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-950 text-indigo-600 border-indigo-200'
                  : 'bg-white text-slate-400 border-slate-850 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input bar */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="FAQ 검색어 입력..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenFaqId(null);
            }}
            className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-855 text-slate-800 text-xs rounded focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

      </div>

      {/* Interactive FAQ Accordion List */}
      <div className="bg-white border border-slate-850 rounded overflow-hidden divide-y divide-slate-850" id="faq-accordion-list">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div 
                key={faq.id} 
                id={`faq-item-${faq.id}`}
                className={`transition-colors ${
                  isOpen 
                    ? 'bg-slate-950/20' 
                    : 'bg-white hover:bg-indigo-50/40'
                }`}
              >
                {/* Trigger heading line */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4.5 flex items-center justify-between gap-3 text-xs font-bold transition-colors focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-left">
                    <span className="text-indigo-650 shrink-0 font-extrabold font-mono">Q.</span>
                    <span className="text-slate-800 tracking-tight leading-snug font-bold">
                      [{faq.category}] {faq.question}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                    isOpen ? 'rotate-90 text-indigo-600' : ''
                  }`} />
                </button>

                {/* Collapsible Answer panel */}
                {isOpen && (
                  <div className="px-4.5 pb-4.5 text-left bg-slate-950/40 border-t border-slate-850">
                    <p className="text-xs sm:text-sm text-slate-850 leading-relaxed font-sans whitespace-pre-line p-3 bg-white border border-slate-855 rounded font-semibold">
                      {faq.answer}
                    </p>
                    
                    {portfolioMode && (
                      <div className="mt-2.5 p-3.5 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs text-slate-200">
                        <div className="flex items-center gap-1.5 text-yellow-850 font-bold mb-1">
                          <Sparkles className="w-4 h-4 text-yellow-600" />
                          <span>[CM 해설: FAQ 자가 해결 효과]</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed font-semibold">
                          인바운드 1:1 티켓 비중이 높은 다빈도 핵심 질문(결제, 오류)을 사전에 인덱싱 배치하여, 단순 CS 상담 볼륨을 최대 35% 가량 사전에 절감/자동화시키는 실무 관제 요령입니다.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="py-12 text-center text-slate-500 text-xs">
            검색 결과에 맞는 자주 묻는 질문이 존재하지 않습니다. 다른 단어로 검색해 보세요.
          </div>
        )}
      </div>

    </div>
  );
}
