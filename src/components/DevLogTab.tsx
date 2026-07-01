import React, { useState } from 'react';
import { Search, Eye, Calendar, BookOpen, Clock, FileText, ArrowRight, Sparkles, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const markdownComponents = {
  h3: ({ ...props }) => (
    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-6 mb-3 flex items-center gap-1.5 border-b border-slate-200 pb-2" {...props} />
  ),
  h4: ({ ...props }) => (
    <h4 className="text-xs sm:text-sm font-bold text-indigo-700 mt-4.5 mb-2" {...props} />
  ),
  p: ({ ...props }) => (
    <p className="text-[13px] sm:text-sm text-slate-800 leading-relaxed sm:leading-7 my-3 font-medium text-left whitespace-pre-line" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="list-disc pl-5 my-4 space-y-2 text-[13px] sm:text-sm text-slate-800 font-medium text-left" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="list-decimal pl-5 my-4 space-y-2 text-[13px] sm:text-sm text-slate-800 font-medium text-left" {...props} />
  ),
  li: ({ ...props }) => (
    <li className="text-[13px] sm:text-sm text-slate-800 leading-relaxed font-semibold text-left" {...props} />
  ),
  strong: ({ ...props }) => (
    <strong className="font-bold text-indigo-650" {...props} />
  ),
  em: ({ ...props }) => (
    <em className="italic text-slate-600 font-medium" {...props} />
  ),
};

interface DevLog {
  id: string;
  title: string;
  date: string;
  views: number;
  intro: string;
  details: string;
  bullets: string[];
}

const DEV_LOGS_DATA: DevLog[] = [
  {
    id: "DEV-08",
    title: "개발일지 #08 - OBT 이후 버그 수정 과정",
    date: "2026-06-16",
    views: 980,
    intro: "안녕하세요.\n둥둥아일랜드입니다.\n\nOBT 진행 이후 확인된 오류와 불편 사항을 바탕으로 안정성 개선 작업을 진행했습니다.\n\n상점에서는 일부 아이템의 가격이 정상적으로 표시되지 않거나, 보유하지 않은 아이템을 판매할 수 있던 문제를 수정했습니다.\n꾸미기 모드에서는 오브젝트 회수, 초기화, 인벤 수량 표시, 고정 건축물 교체 과정에서 발생하던 오류를 점검했습니다.\n\n이 외에도 도감 슬롯 클릭, 창 크기 조절, UI 클릭 처리, 퀘스트 슬롯 표시 등 플레이 중 발견된 문제를 수정하며 전반적인 사용성을 개선했습니다.\n\n앞으로도 테스트 과정에서 확인되는 문제들을 빠르게 정리하고, 안정적인 플레이 환경을 만들 수 있도록 개선을 이어가겠습니다.",
    details: "",
    bullets: [
      "구매 가격 동기화 오류 대조 수정",
      "창 크기 비율 조절 및 캔버스 리사이즈 오류 수정",
      "상점 진입 시 특정 상태에서의 버튼 클릭 오류 보완",
      "꾸미기 영지 인벤토리 특정 아이템 보유 수량 표기 오류 수정",
      "도감 특정 슬롯 단지 클릭 시 동작 정체 반응 오류 등 OBT 이후 발견된 문제 수정"
    ]
  },
  {
    id: "DEV-07",
    title: "개발일지 #07 - 설정창과 도움말 UI 개선",
    date: "2026-06-10",
    views: 1120,
    intro: "안녕하세요.\n둥둥아일랜드입니다.\n\n이번 작업에서는 설정창과 도움말 UI를 중심으로 편의 기능을 개선했습니다.\n\n먼저 사운드 조절 슬라이더와 음소거 버튼이 정상적으로 동작하도록 수정하고, 설정창 UI를 최신 구조에 맞게 정리했습니다.\n또한 플레이어가 각 기능을 더 쉽게 이해할 수 있도록 도움말 UI를 추가했으며, 언어 설정에 따라 도움말 내용이 변경되도록 번역 기능도 함께 적용했습니다.\n\n처음 플레이하는 유저도 기능을 어렵지 않게 이해할 수 있도록 안내 요소를 보강하는 데 초점을 맞췄습니다.",
    details: "",
    bullets: [
      "설정창 배경 음악 / 효과음 사운드 분리 슬라이더 수정",
      "원클릭 전체 음소거 버튼 컨트롤 정상화 적용",
      "설정창 인터랙티브 UI 전면 변경",
      "이용 언어 설정 변환에 따른 도움말 세부 설명 번역 로케일 추가"
    ]
  },
  {
    id: "DEV-06",
    title: "개발일지 #06 - 우편함 기능 구현",
    date: "2026-05-28",
    views: 1250,
    intro: "안녕하세요.\n둥둥아일랜드입니다.\n\n이번 작업에서는 게임 내에서 공지와 보상을 전달할 수 있는 우편함 기능을 구현했습니다.\n\n우편함을 통해 플레이어에게 보상형 우편과 공지형 우편을 발송할 수 있도록 구성했으며, 개발 단계에서는 테스트를 위해 우편을 직접 발행할 수 있는 기능도 함께 추가했습니다.\n이후 우편함 목록이 최신순으로 정렬되도록 개선하고, 보상 수령 후에도 수령 내역을 확인할 수 있도록 수정했습니다.\n\n우편함은 업데이트 안내, 점검 보상, 이벤트 보상 등 운영 과정에서 자주 활용될 수 있는 기능으로 설계했습니다.",
    details: "",
    bullets: [
      "보상형/공지형 우편함 구현",
      "개발자 전용 우편 발행 기능",
      "우편함 최신순 정렬",
      "보상 수령 시 내역 보존",
      "만료일 표시"
    ]
  },
  {
    id: "DEV-05",
    title: "개발일지 #05 - 퀘스트와 도감 기능 제작",
    date: "2026-04-15",
    views: 1390,
    intro: "안녕하세요.\n둥둥아일랜드입니다.\n\n이번 작업에서는 플레이어가 게임 안에서 다음 목표를 더 쉽게 확인할 수 있도록 퀘스트와 도감 기능을 개선했습니다.\n\n퀘스트 매니저와 퀘스트 UI를 구현하고, 낚시 플레이와 퀘스트 진행이 자연스럽게 연결되도록 작업했습니다.\n또한 도감에서는 물고기 정보, 최고 기록, 정렬 기능을 더 쉽게 확인할 수 있도록 팝업창과 슬롯 UI를 수정했습니다.\n\n퀘스트는 플레이 방향을 잡아주는 역할을, 도감은 수집 현황을 확인하는 역할을 하도록 구성해 플레이 흐름이 끊기지 않도록 개선했습니다.",
    details: "",
    bullets: [
      "퀘스트 매니저 구현",
      "퀘스트 UI 제작",
      "낚시 연동",
      "도감 팝업창 개선",
      "최고 기록 표시",
      "정렬 드롭다운 변경"
    ]
  },
  {
    id: "DEV-04",
    title: "개발일지 #04 - 호수 시스템 확장",
    date: "2026-03-05",
    views: 1420,
    intro: "안녕하세요.\n둥둥아일랜드입니다.\n\n이번 작업에서는 호수 공간을 더 다양하게 활용할 수 있도록 호수 관련 기능을 개선했습니다.\n\n기존에는 물고기가 유영하는 공간과 호수 배경의 활용 범위가 제한적이었기 때문에, 물고기 이동 필드를 호수 영역에 맞게 조정하고 호수 배경 구조를 새롭게 정리했습니다.\n또한 바다와 호수를 전환할 수 있는 기능을 추가하고, 호수 테마와 인테리어 아이템을 적용할 수 있도록 상점 및 꾸미기 기능을 함께 개선했습니다.\n\n이를 통해 플레이어가 섬뿐만 아니라 호수 주변 공간까지 자신만의 분위기로 꾸밀 수 있도록 작업했습니다.",
    details: "",
    bullets: [
      "물고기 유영 필드 변경",
      "호수 배경 구조 개선",
      "호수 테마 구매/적용 기능",
      "호수 인테리어 아이템 추가",
      "바다-호수 토글 기능"
    ]
  },
  {
    id: "DEV-03",
    title: "개발일지 #03 - 섬 꾸미기 편집 모드 개선",
    date: "2026-02-01",
    views: 1530,
    intro: "안녕하세요.\n둥둥아일랜드입니다.\n\n이번 작업에서는 꾸미기 모드에서 오브젝트를 배치하고 수정하는 과정의 불편함을 줄이는 데 집중했습니다.\n\n기존에는 장식물을 배치하거나 회수할 때 일부 오브젝트가 정상적으로 처리되지 않거나, 설치 가능 여부를 바로 확인하기 어려운 상황이 있었습니다. 이를 개선하기 위해 그리드 스냅 방식을 조정하고, 배치 불가 영역의 표시를 더 명확하게 수정했습니다.\n\n추가로 전체 회수, 저장, 초기화, 고정 건축물 교체 과정에서 발생하던 오류를 함께 수정해 꾸미기 모드의 안정성을 높였습니다.",
    details: "",
    bullets: [
      "2D 그리드 스냅 방식 변경",
      "미리보기 오브젝트 영역 제한",
      "편집 모드 진입 시 물고기/파티클/배경 비활성화",
      "오브젝트 회수·초기화·저장 로직 개선"
    ]
  },
  {
    id: "DEV-02",
    title: "개발일지 #02 - 낚시 플레이 경험 개선",
    date: "2026-01-10",
    views: 1690,
    intro: "안녕하세요.\n둥둥아일랜드입니다.\n\n이번 작업에서는 낚시 플레이가 더 자연스럽게 이어지도록 낚시 동작과 연출을 중심으로 개선했습니다.\n\n기존에는 낚시 과정에서 일부 동작이 어색하게 반복되거나, 장비 착용 상태가 정확히 보이지 않는 문제가 있었습니다. 이를 개선하기 위해 낚시 Cast 애니메이션을 추가하고, 낚시 사이클이 진행될 때마다 동작이 자연스럽게 이어지도록 수정했습니다.\n\n추가로 낚싯대 착용 상태, 낚시 속도 적용, 미끼와 찌 기능, 낚시바늘 이펙트를 반영해 낚시 콘텐츠의 시각적인 피드백을 강화했습니다.",
    details: "",
    bullets: [
      "낚싯대 착용",
      "낚시 Cast 애니메이션 추가",
      "낚시 사이클 수정",
      "물고기 연속 획득 버그 수정",
      "낚시찌/미끼 구현",
      "낚시바늘 이펙트 추가"
    ]
  },
  {
    id: "DEV-01",
    title: "개발일지 #01 - 상점과 창고 UI 개선 작업",
    date: "2025-11-20",
    views: 2110,
    intro: "안녕하세요. 둥둥아일랜드 개발진입니다.\n\n이번에는 플레이 초반부터 자주 마주하게 되는 상점과 창고 UI를 먼저 살펴봤습니다.\n\n상점에서는 아이템 수가 적을 때 슬롯이 가운데로 몰려 보이던 부분을 조정했고, 필요한 위치를 바로 확인할 수 있도록 스크롤바가 항상 보이게 수정했습니다.\n\n창고는 보유 중인 아이템을 조금 더 편하게 확인할 수 있도록 빈 슬롯 표시와 물고기 설명 영역을 정리하고, 정렬 버튼의 구조도 함께 다듬었습니다.\n\n크게 눈에 띄는 변화는 아닐 수 있지만, 상점과 창고는 플레이 중 계속 사용하게 되는 기능인 만큼 작은 불편함도 줄여보고자 했습니다.\n\n앞으로도 섬지기 여러분이 더 편하게 플레이할 수 있도록 자주 사용하는 화면부터 차근차근 개선해 나가겠습니다.",
    details: "",
    bullets: [
      "상점 스크롤바 상시 표시",
      "슬롯 정렬 변경",
      "구매 팝업 아이콘 추가",
      "창고 UI 슬라이드 수정",
      "빈 슬롯 표시",
      "물고기 설명 추가",
      "정렬 버튼 드롭다운 통합"
    ]
  }
];

interface DevLogTabProps {
  portfolioMode: boolean;
}

export default function DevLogTab({ portfolioMode }: DevLogTabProps) {
  const [selectedLogId, setSelectedLogId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredLogs = DEV_LOGS_DATA.filter((log) => {
    return log.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           log.intro.toLowerCase().includes(searchQuery.toLowerCase()) ||
           log.bullets.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const selectedLog = DEV_LOGS_DATA.find((l) => l.id === selectedLogId);

  return (
    <div className="space-y-6 font-sans text-left" id="devlog-tab-container">
      
      {/* Title page header */}
      <div className="border-b border-slate-800 pb-4 text-left">
        <h2 className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
          🛠️ 개발기록 보드 (개발일지)
        </h2>
        <p className="text-slate-500 text-xs mt-1">
          둥둥아일랜드의 안정성 업그레이드 조치 사항과 세부 빌드 개발 흔적을 투명하게 보고합니다.
        </p>
      </div>

      {!selectedLog ? (
        // BOARD INDEX VIEW (Full Width list of dev diary entries)
        <div className="space-y-4 animate-in fade-in duration-150">
          
          {/* Search Box */}
          <div className="relative max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="빌드 일지 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-850 text-slate-100 text-xs rounded focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* List items widget (single-column vertical list) */}
          <div className="flex flex-col gap-3">
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => {
                return (
                  <div
                    key={log.id}
                    id={`devlog-item-${log.id}`}
                    onClick={() => setSelectedLogId(log.id)}
                    className="w-full text-left p-4 sm:p-5 bg-white border border-slate-850 hover:bg-indigo-50 hover:border-indigo-200 rounded-lg transition-all duration-200 cursor-pointer shadow-3xs hover:shadow-2xs group flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-[10px] text-slate-500 font-mono font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200 shrink-0">
                          {log.id}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 shrink-0">
                          <Calendar className="w-3 h-3 text-slate-400" /> {log.date}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold leading-normal text-left text-black group-hover:text-indigo-650 transition-colors mb-1 truncate">
                        {log.title}
                      </h4>

                      <p className="text-[11px] text-slate-600 line-clamp-1 leading-relaxed">
                        {log.intro}
                      </p>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 md:shrink-0">
                      <span className="text-[10px] text-slate-400 font-mono">👁️ {log.views}회 조회</span>
                      <span className="text-[10px] text-indigo-500 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        자세히 읽기 <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-16 bg-white border border-slate-850 rounded-lg text-center text-slate-500 text-xs font-semibold">
                검색된 개발기록 자료가 존재하지 않습니다.
              </div>
            )}
          </div>
        </div>
      ) : (
        // FULL THREAD READER VIEW
        <div className="space-y-4 animate-in fade-in duration-150">
          
          {/* Back button */}
          <button 
            onClick={() => setSelectedLogId(null)}
            className="px-3.5 py-1.5 text-xs text-slate-705 bg-white hover:bg-slate-50 border border-slate-850 hover:border-indigo-200 rounded hover:text-indigo-600 flex items-center gap-1.5 transition-colors cursor-pointer font-bold shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            목록으로 돌아가기
          </button>

          <div className="bg-white border border-slate-850 rounded overflow-hidden shadow-sm" id="devlog-reader">
            
            {/* Thread Header - Styled identical to NoticeTab */}
            <div className="bg-slate-950 p-6 border-b border-slate-850 text-left">
              <div className="flex items-center gap-2.5 mb-2.5 flex-wrap">
                <span className="px-2.5 py-0.5 text-[10px] font-bold rounded bg-indigo-50 text-indigo-700">
                  DEVELOPER LOG
                </span>
                <span className="text-[11px] text-slate-500 font-semibold font-mono">
                  글번호: {selectedLog.id}
                </span>
                <span className="text-slate-700">|</span>
                <span className="text-[11px] text-slate-500 font-semibold">
                  작성자: 공식 개발진
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
                {selectedLog.title}
              </h3>
              
              <div className="flex items-center gap-4 mt-3 text-[11px] text-slate-500 font-mono border-t border-slate-800 pt-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> 등록일: {selectedLog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> 조회수: {selectedLog.views.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Content body layout - Styled identical to NoticeTab */}
            <div className="p-6 sm:p-8 bg-white min-h-[300px]">
              <div className="markdown-body text-left">
                <ReactMarkdown components={markdownComponents}>
                  {`${selectedLog.intro}

${selectedLog.details ? `### 🔍 세부 분석 및 구현 내역\n${selectedLog.details}` : ''}

### 🚧 개발 세부 리스트
${selectedLog.bullets.map(b => `* **${b}**`).join('\n')}`}
                </ReactMarkdown>
              </div>
            </div>

            {/* Official seal footer layout - Styled identical to NoticeTab */}
            <div className="p-4 bg-slate-950 border-t border-slate-850 flex flex-col sm:flex-row justify-between items-center text-xs gap-3">
              <span className="text-slate-500 font-mono font-medium">
                Dungdung Island Official Portal Service Engine. All rights reserved.
              </span>
              <span className="text-[10px] text-emerald-800 font-bold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-300">
                작성 부서: 개발본부 클라이언트팀
              </span>
            </div>

          </div>

          {/* Foot note feedback CTA feedback copy */}
          <div className="p-4 bg-indigo-50/30 border border-slate-850 rounded flex items-center justify-between text-[11px] text-slate-600 font-medium">
            <span className="font-semibold text-slate-100">둥둥아일랜드 개발본부 시스템 지원부</span>
            <span className="text-emerald-800 bg-emerald-50 border border-emerald-200 text-[10px] px-2 py-0.5 rounded font-sans font-bold">검증필함</span>
          </div>

        </div>
      )}

    </div>
  );
}
