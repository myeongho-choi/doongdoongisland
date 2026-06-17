import React, { useState } from 'react';
import { Search, Eye, Calendar, BookOpen, Clock, FileText, ArrowRight, Sparkles } from 'lucide-react';

interface DevLogTabProps {
  portfolioMode: boolean;
}

interface DevLog {
  id: string;
  title: string;
  date: string;
  views: number;
  tag: string;
  category: string;
  intro: string;
  details: string;
  bullets: string[];
}

const DEV_LOGS_DATA: DevLog[] = [
  {
    id: "DEV-07",
    title: "개발일지 #07 - OBT를 준비하며",
    date: "2026-06-15",
    views: 1240,
    tag: "OBT 준비",
    category: "안정화",
    intro: "안녕하세요.\n\nOBT를 앞두고 게임 전반의 완성도를 높이기 위한 마무리 작업을 진행했습니다.\n특히 플레이어가 가장 자주 이용하게 될 상점과 거래 기능을 중심으로 UI 개선과 안정성 향상 작업을 진행했습니다.",
    details: "또한 거래 과정에서 발생할 수 있는 오류를 최소화하고, 보다 직관적인 인터페이스를 제공하기 위해 상점 디자인을 전면 개편했습니다.\n이번 작업을 통해 OBT 환경에서 보다 안정적인 플레이 경험을 제공할 수 있도록 준비를 마쳤습니다.",
    bullets: [
      "상점 UI 리뉴얼",
      "카테고리 버튼 개선",
      "슬롯 디자인 개선",
      "드롭다운 UI 개선",
      "거래 팝업 개선",
      "중복 입력 방지 기능 추가",
      "테마 판매 기능 개선",
      "기본 아이템 지급 기능 개선",
      "수량 표시 기능 개선",
      "거래 관련 오류 수정"
    ]
  },
  {
    id: "DEV-06",
    title: "개발일지 #06 - 꾸미기 콘텐츠의 완성도를 높이며",
    date: "2026-05-18",
    views: 1450,
    tag: "꾸미기",
    category: "콘텐츠",
    intro: "안녕하세요.\n\n이번 개발에서는 플레이어만의 공간을 더욱 자유롭게 꾸밀 수 있도록 편집 모드 개선에 집중했습니다.",
    details: "배치 기능뿐만 아니라 카메라 이동, 환경 연출, 오디오 시스템까지 개선하여 꾸미기 콘텐츠의 몰입감을 높이고자 했습니다.\n또한 창고 구조를 개편하여 보유한 아이템을 보다 효율적으로 관리할 수 있도록 개선했습니다.",
    bullets: [
      "카메라 이동 기능 추가",
      "편집 모드 조작 개선",
      "환경 연출 강화",
      "계절 오브젝트 추가",
      "계절 효과 개선",
      "음악 미리듣기 기능 추가",
      "오디오 페이드 효과 적용",
      "익명 로그인 기능 적용",
      "창고 구조 개편",
      "각종 편집 모드 버그 수정"
    ]
  },
  {
    id: "DEV-05",
    title: "개발일지 #05 - 수집과 꾸미기의 재미를 더하다",
    date: "2026-04-20",
    views: 1190,
    tag: "수집 & 데코",
    category: "수집",
    intro: "안녕하세요.\n\n이번 개발에서는 수집 콘텐츠와 꾸미기 콘텐츠의 완성도를 높이는 작업을 진행했습니다.\n도감은 플레이어가 꾸준히 성장한 결과를 확인하는 공간인 만큼 정보 확인이 더욱 편리하도록 개선했습니다.",
    details: "또한 꾸미기 콘텐츠에서는 배경 전환 기능과 오브젝트 회전 기능을 추가하여 보다 자유로운 공간 연출이 가능하도록 개선했습니다.\n플레이어의 개성을 표현할 수 있는 코스튬 시스템도 지속적으로 다듬고 있습니다.",
    bullets: [
      "도감 기본 아이템 자동 해금",
      "도감 현지화 적용",
      "배경 전환 기능 추가",
      "오브젝트 회전 기능 추가",
      "물고기 연출 개선",
      "상점 카테고리 개선",
      "낚시 아이템 필터 수정",
      "코스튬 적용 기능 추가",
      "LP 획득 기능 추가",
      "창고 이동 오류 수정"
    ]
  },
  {
    id: "DEV-04",
    title: "개발일지 #04 - 게임의 목표를 만들어가는 과정",
    date: "2026-03-10",
    views: 1320,
    tag: "목표 설정",
    category: "시스템",
    intro: "안녕하세요.\n\n게임 내 콘텐츠가 점차 늘어나면서 플레이어가 어떤 목표를 가지고 게임을 진행해야 하는지에 대한 고민이 생겼습니다.\n낚시, 꾸미기, 수집 등 다양한 콘텐츠가 존재했지만 이를 연결해 주는 명확한 가이드가 부족하다고 판단했습니다.",
    details: "이를 해결하기 위해 퀘스트 시스템 개발을 진행했습니다.\n퀘스트는 플레이어가 자연스럽게 콘텐츠를 경험하고 성장할 수 있도록 돕는 역할을 수행하며, 앞으로 게임 전반의 플레이 흐름을 안내하는 핵심 시스템이 될 예정입니다.\n또한 도감과 상점, 꾸미기 기능 전반에 대한 개선도 함께 진행하여 플레이 편의성을 높였습니다.",
    bullets: [
      "퀘스트 시스템 구현",
      "퀘스트 UI 제작",
      "퀘스트 보상 기능 추가",
      "낚시 콘텐츠 연동",
      "도감 최고 기록 기능 추가",
      "도감 정렬 기능 개선",
      "상점 필터 기능 개선",
      "편집 모드 저장 기능 추가",
      "아이템 복사 오류 수정",
      "아이템 소실 오류 수정"
    ]
  },
  {
    id: "DEV-03",
    title: "개발일지 #03 - 생활 콘텐츠 확장 이야기",
    date: "2026-02-12",
    views: 1680,
    tag: "생활형 RPG",
    category: "생활",
    intro: "안녕하세요.\n\n이번 개발에서는 낚시 이후의 플레이 경험을 더욱 풍부하게 만들기 위한 생활 콘텐츠 확장에 집중했습니다.",
    details: "그동안 플레이어가 획득한 물고기는 수집의 의미가 강했지만, 보다 다양한 활용 방안을 제공하기 위해 요리와 판매 시스템 개발을 진행했습니다.\n새롭게 추가된 요리 시스템을 통해 플레이어는 획득한 재료를 활용하여 다양한 음식을 제작할 수 있으며, 물고기 판매 기능을 통해 경제 활동도 경험할 수 있습니다.\n또한 코스튬 시스템을 추가하여 플레이어가 자신만의 개성을 표현할 수 있도록 준비했습니다.",
    bullets: [
      "요리 시스템 구현",
      "음식 상태 관리 기능 추가",
      "요리 창고 구현",
      "물고기 판매 기능 추가",
      "코스튬 구매 기능 추가",
      "코스튬 착용 기능 추가",
      "상점 카테고리 개선",
      "구매 처리 구조 개선",
      "인테리어 아이템 연동",
      "배치 취소 기능 추가"
    ]
  },
  {
    id: "DEV-02",
    title: "개발일지 #02 - 성장 시스템과 상호작용 기능 확장",
    date: "2026-01-05",
    views: 1850,
    tag: "성장 설계",
    category: "시스템",
    intro: "안녕하세요.\n\n이번 개발에서는 플레이어의 성장 경험을 보다 명확하게 전달하기 위한 시스템 개선 작업을 진행했습니다.\n기존에는 보관함 성장 구조와 상호작용 요소가 제한적이었기 때문에 플레이 과정에서 성장 체감이 부족한 부분이 있었습니다.",
    details: "이를 개선하기 위해 보관함 업그레이드 기능을 추가하고, 재화 사용 구조를 정비했습니다.\n또한 오브젝트와의 상호작용 기능을 추가하여 플레이어가 환경과 보다 자연스럽게 상호작용할 수 있도록 개선했습니다.\n이번 작업을 통해 플레이어의 성장 동선과 게임 내 활동 범위를 더욱 확장할 수 있는 기반을 마련했습니다.",
    bullets: [
      "보관함 업그레이드 기능 추가",
      "업그레이드 UI 개선",
      "재화 부족 안내 기능 추가",
      "상호작용 버튼 기능 추가",
      "상점 데이터 구조 개선",
      "상점 썸네일 적용",
      "창고 UI 개선",
      "낚시 관련 버그 수정",
      "배치 모드 안정화"
    ]
  },
  {
    id: "DEV-01",
    title: "개발일지 #01 - 플레이 경험 개선을 위한 첫걸음",
    date: "2025-11-25",
    views: 2430,
    tag: "편의성",
    category: "시스템",
    intro: "안녕하세요.\n\n이번 개발 기간에는 플레이어가 게임을 보다 직관적으로 즐길 수 있도록 UI와 기본 플레이 경험 개선에 집중했습니다.\n상점과 창고는 게임 내에서 가장 자주 이용하는 기능 중 하나이지만, 기존에는 원하는 아이템을 찾거나 정보를 확인하는 과정에서 다소 불편함이 있었습니다.\n이를 개선하기 위해 상점 정렬 기능과 창고 UI를 개편하고, 물고기 상세 정보 확인 기능을 추가했습니다.",
    details: "또한 낚시 콘텐츠의 몰입감을 높이기 위해 신규 애니메이션을 적용하고 플레이어 외형 표현을 개선했습니다.\n이외에도 설정창 사운드 옵션 개선, 날씨 정보 표시 기능 추가, 충돌 판정 조정 등 다양한 개선 작업을 진행했습니다.\n앞으로도 플레이어가 더욱 자연스럽게 게임을 즐길 수 있도록 지속적으로 사용성을 개선해 나갈 예정입니다.",
    bullets: [
      "상점 정렬 기능 개선",
      "상점 스크롤바 추가",
      "구매 팝업 UI 개선",
      "창고 UI 개편",
      "물고기 상세 정보 기능 추가",
      "낚시 애니메이션 추가",
      "플레이어 외형 개선",
      "설정창 기능 개선",
      "날씨 정보 표시 기능 추가",
      "충돌 판정 개선",
      "각종 UI 및 인벤토리 오류 수정"
    ]
  }
];

export default function DevLogTab({ portfolioMode }: DevLogTabProps) {
  const [selectedLogId, setSelectedLogId] = useState<string>(DEV_LOGS_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredLogs = DEV_LOGS_DATA.filter((log) => {
    return log.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           log.intro.toLowerCase().includes(searchQuery.toLowerCase()) ||
           log.bullets.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const selectedLog = DEV_LOGS_DATA.find((l) => l.id === selectedLogId) || DEV_LOGS_DATA[0];

  return (
    <div className="space-y-6" id="devlog-tab-container">
      
      {/* Title page header */}
      <div className="border-b border-slate-800 pb-5 text-left">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          🛠️ 둥둥아일랜드 개발일지
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          더 나은 힐링 경험을 만들어 나가는 영지 감식 개발진들의 치열한 흔적을 기록합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left List Pane (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Search Box */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="개발일지 제목, 내용 및 항목 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-xl focus:outline-none focus:border-sky-500/50 transition-colors"
            />
          </div>

          {/* List items widget */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 max-h-[500px] overflow-y-auto space-y-1 divide-y divide-slate-800/40">
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => {
                const isSelected = log.id === selectedLogId;
                return (
                  <div
                    key={log.id}
                    id={`devlog-item-${log.id}`}
                    onClick={() => setSelectedLogId(log.id)}
                    className={`block w-full text-left p-3.5 rounded-xl transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-950 border-l-4 border-l-sky-400 shadow-md'
                        : 'hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-slate-500 font-mono">
                        {log.id}
                      </span>
                    </div>

                    <h4 className={`text-xs md:text-xs font-bold tracking-tight text-left leading-normal line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}>
                      {log.title}
                    </h4>

                    <div className="flex items-center gap-3 mt-2.5 text-[10px] text-slate-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {log.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" /> {log.views}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-12 text-center text-slate-500 text-xs">
                검색 조건에 일치하는 개발일지가 없습니다.
              </div>
            )}
          </div>

        </div>

        {/* Right Detail Pane (7 Cols) */}
        <div className="lg:col-span-7">
          
          <div className="bg-slate-90/80 border border-slate-800 rounded-2xl p-5 md:p-8 space-y-6 text-left shadow-xl" id="devlog-reader">
            
            {/* Header info */}
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono mb-2">
                <span>작성자: 둥둥아일랜드 개발위원회 🎨</span>
                <span>• 작성일: {selectedLog.date}</span>
                <span>• 조회수: {selectedLog.views}회</span>
              </div>
              
              <h3 className="text-base sm:text-lg font-bold tracking-tight text-white font-sans leading-snug">
                {selectedLog.title}
              </h3>
            </div>

            {/* Content introduction */}
            <div className="text-xs sm:text-xs text-slate-300 leading-relaxed whitespace-pre-line font-sans">
              {selectedLog.intro}
            </div>

            {/* Split Details */}
            {selectedLog.details && (
              <div className="text-xs sm:text-xs text-slate-300 leading-relaxed whitespace-pre-line font-sans bg-slate-950/40 p-4 rounded-xl border border-slate-850/60">
                {selectedLog.details}
              </div>
            )}

            {/* Key list bullet highlights */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-3">
              <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest block pl-1">
                ⭐ 주요 개발 세부 내역 (Development Scope)
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-200">
                {selectedLog.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-center gap-2 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/60 px-3 py-2 rounded-lg transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span className="font-semibold">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Foot note feedback CTA */}
            <div className="p-3 bg-indigo-950/25 rounded-xl border border-indigo-900/20 flex items-center justify-between">
              <span className="text-[10px] text-slate-400 leading-snug">
                📝 본 개발일지에 대해 제안이나 건의사항이 있으시면 커뮤니티에 의견을 남겨주세요.
              </span>
              <button className="text-[10px] text-indigo-400 font-bold hover:underline flex items-center gap-0.5 whitespace-nowrap">
                건의 글쓰기 🐾
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
