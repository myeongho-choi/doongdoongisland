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
    <div className="space-y-6" id="faq-tab-container">
      
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-5">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          ❓ 자주 묻는 질문 (FAQ)
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          둥둥아일랜드 서비스 중 정원사님들이 가장 자주 궁금해하셨던 핵심 가이드라인을 알기 쉽게 정돈해 모았습니다.
        </p>
      </div>

      {/* Control Actions Row (Search & Filtering) */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Categories filters scroll list */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenFaqId(null);
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                activeCategory === cat
                  ? 'bg-sky-500 text-slate-950 border-sky-400'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input bar */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="FAQ 키워드(결제, 로그인 등) 검색..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenFaqId(null);
            }}
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-sm rounded-xl focus:outline-none focus:border-sky-500/50 transition-colors"
          />
        </div>

      </div>

      {/* Interactive FAQ Accordion List */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 space-y-3" id="faq-accordion-list">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div 
                key={faq.id} 
                id={`faq-item-${faq.id}`}
                className={`border rounded-xl transition-all ${
                  isOpen 
                    ? 'bg-slate-950 border-sky-500/40 shadow-md' 
                    : 'bg-slate-900/40 border-slate-850 hover:bg-slate-800/20'
                }`}
              >
                {/* Trigger heading line */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 text-sm font-semibold transition-colors focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-left">
                    <span className="text-sky-400 shrink-0">Q.</span>
                    <span className="text-slate-300 font-medium tracking-tight hover:text-white leading-snug">
                      [{faq.category}] {faq.question}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                    isOpen ? 'rotate-90 text-sky-400' : ''
                  }`} />
                </button>

                {/* Collapsible Answer panel */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-900/60 text-left">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans whitespace-pre-line bg-slate-900/50 p-4 rounded-lg border border-slate-850">
                      {faq.answer}
                    </p>
                    
                    {portfolioMode && (
                      <div className="mt-3 p-3 bg-indigo-950/25 border border-indigo-500/25 rounded-lg flex items-start gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="text-[10px] text-slate-300 leading-relaxed">
                          💡 **CM 운영 코멘트**: 자가 해결 수단(Self-service FAQ)을 꼼꼼하게 배치하여 유해 위기 감도를 내리고 불량 1:1 상담 볼륨을 최대 30% 절감하는 효과가 입증된 기본 탬플릿입니다.
                        </span>
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
