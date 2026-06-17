import React from 'react';
import { ShieldAlert, BookOpen, Clock, Users, ArrowRight } from 'lucide-react';

interface PolicyTabProps {
  portfolioMode: boolean;
}

export default function PolicyTab({ portfolioMode }: PolicyTabProps) {
  const policies = [
    {
      violation: "비인가 프로그램 제작/배포 및 사용 (핵, 스피드 코드 등)",
      first: "영구 정지 (Permanent Ban)",
      second: "-",
      third: "-",
      note: "시스템 훼손 및 데이터 위변조 확인 시 즉시 영구 봉쇄"
    },
    {
      violation: "인게임 치명 버그 고의적 악용 및 타인 유포 (어뷰징)",
      first: "회수 조치 + 30일 영지 전동 정지",
      second: "영구 정지",
      third: "-",
      note: "버그 발견 즉시 GM센터로 접수하지 않은 데이터 고의 유포자 포함"
    },
    {
      violation: "불량 스팸 작업장 대포 계정 생성 (다중 연동)",
      first: "영구 정지",
      second: "-",
      third: "-",
      note: "동일 프록시 대역 폭 다수 이상 계정 일괄 밴"
    },
    {
      violation: "방명록 욕설, 성희롱, 혐오 표현 채팅 유통",
      first: "방명록 블라인드 + 3일 채팅 금지",
      second: "7일 채팅 차단 + 경고 1회",
      third: "30일 계정 이용 동결",
      note: "클린 캠페인 1기 감시 필터링 단어 기준"
    },
    {
      violation: "계정 현금 불법 거래 조장 및 사기 행각",
      first: "30일 정지",
      second: "영구 정지",
      third: "-",
      note: "불법 계정 탈취 사칭 및 제3자 피해 위기성 광고 포함"
    }
  ];

  return (
    <div className="space-y-6" id="policy-tab-container">
      
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-5">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          📜 아일랜드 공식 운영정책
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          평화롭고 고즈넉한 둥둥아일랜드의 질서와 깨끗한 매너 환경을 구축하기 위한 의무 준수 사항입니다.
        </p>
      </div>

      {/* Philosophy Callout cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-left">
          <BookOpen className="w-5 h-5 text-sky-400" />
          <h4 className="text-xs sm:text-sm font-bold text-slate-100">건전한 커뮤니티 육성</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            비난과 조롱 대신 격려와 칭찬 배지를 나누는 청정에코 아일랜드 생태계를 약속합니다.
          </p>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-left">
          <ShieldAlert className="w-5 h-5 text-amber-400" />
          <h4 className="text-xs sm:text-sm font-bold text-slate-100">위법/비인가 무관용 정책</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            매크로 작업장 봇이나 클라이언트 훼손에 대해서는 1차 확인 즉시 완무 타협 없는 영구 제재에 처합니다.
          </p>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-left">
          <Clock className="w-5 h-5 text-purple-400" />
          <h4 className="text-xs sm:text-sm font-bold text-slate-100">재화 소생 가치 보존</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            오토 파밍, 가차 재작 재해 분실 리스크 추적 로그 데이터를 투명하게 검증해 유저 노력을 지킵니다.
          </p>
        </div>
      </div>

      {/* Rich Table Grid representing standard penalties (Crucial Game Ops indicator) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl text-left" id="policy-table-card">
        
        <div className="p-5 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between">
          <h3 className="text-xs sm:text-sm font-bold text-slate-100 font-sans flex items-center gap-2">
            🔏 인게임 비매너 / 악용자 항목별 페널티 조항 규제 (Table 5-1)
          </h3>
          <span className="text-[10px] text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-500/10">
            운영 기준 제5조 35항 성안
          </span>
        </div>

        {/* Scrollable table container */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-300 divide-y divide-slate-800">
            <thead className="bg-slate-950 text-slate-400 text-[10px] uppercase font-mono uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-bold text-left">비위 위반 행위 유형</th>
                <th className="px-5 py-4 font-bold text-center">1차 벌칙</th>
                <th className="px-5 py-4 font-bold text-center">2차 벌칙</th>
                <th className="px-5 py-4 font-bold text-center">3차 벌칙</th>
                <th className="px-6 py-4 font-bold text-left">특수 비고 가이드</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-slate-900/40">
              {policies.map((p, pIdx) => (
                <tr key={pIdx} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4.5 font-bold text-slate-200 tracking-tight leading-snug">{p.violation}</td>
                  <td className="px-5 py-4.5 text-center text-amber-400 font-medium">{p.first}</td>
                  <td className="px-5 py-4.5 text-center text-slate-400">{p.second}</td>
                  <td className="px-5 py-4.5 text-center text-slate-500">{p.third}</td>
                  <td className="px-6 py-4.5 text-slate-400 leading-relaxed font-sans">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-500 leading-relaxed text-center">
          ※ 본 제재 강도는 모바일 게임 서비스 업계 표준 보조 지표인 K-GSP 및 등급 가이드라인 기준을 100% 충족하며, CM 지원자 김두둥이 실제 입사 시 즉시 규율을 집행 가능한 수준의 전문 서술 프로세스입니다.
        </div>

      </div>

    </div>
  );
}
