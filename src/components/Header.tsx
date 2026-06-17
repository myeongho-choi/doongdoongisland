import React, { useState } from 'react';
import { Sparkles, Briefcase, User, Mail, Phone, Github, ShieldCheck, Heart } from 'lucide-react';
import { PORTFOLIO_META, IMAGES } from '../data';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  portfolioMode: boolean;
  setPortfolioMode: (mode: boolean) => void;
}

export default function Header({ currentTab, setCurrentTab, portfolioMode, setPortfolioMode }: HeaderProps) {
  const [profileOpen, setProfileOpen] = useState(false);

  const menuItems = [
    { id: 'HOME', label: 'HOME' },
    { id: 'DEV_LOG', label: '개발일지' },
    { id: 'NOTICE', label: '공지사항' },
    { id: 'EVENT', label: '이벤트' },
    { id: 'PATCH', label: '패치노트' },
    { id: 'GM_NOTE', label: 'GM노트' },
    { id: 'FAQ', label: 'FAQ' },
    { id: 'INQUIRY', label: '1:1 문의' },
    { id: 'POLICY', label: '운영정책' },
    { id: 'SANCTION', label: '제재내역' },
    { id: 'COMMUNITY', label: '커뮤니티' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div 
            onClick={() => setCurrentTab('HOME')} 
            className="flex items-center cursor-pointer group"
            id="header-logo-container"
          >
            <img 
              src={IMAGES.logo} 
              alt="둥둥아일랜드" 
              referrerPolicy="no-referrer"
              className="h-10 sm:h-12 w-auto object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          {/* Navigation - Main Portal Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-menu-${item.id}`}
                  onClick={() => setCurrentTab(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Empty spacer or simple ornament since portfolio controls are removed */}
          <div className="flex items-center gap-3">
          </div>
        </div>
      </div>

      {/* Mobile Navigation Row */}
      <div className="lg:hidden w-full bg-slate-950 border-t border-slate-900 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1 px-4 py-2">
        {menuItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`inline-block px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                isActive
                  ? 'bg-sky-500/20 text-sky-400 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Applicant Resume Drawer Panel */}
      {profileOpen && (
        <div id="resume-drawer" className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            onClick={() => setProfileOpen(false)} 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
          />

          {/* Drawer Body - Slate Styling */}
          <div className="relative w-full max-w-lg md:max-w-xl h-full bg-slate-900 text-slate-100 shadow-2xl border-l border-slate-800 flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
            
            {/* Close */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-sky-400 font-sans">
                <ShieldCheck className="w-5 h-5 text-mint-400" />
                <span className="font-bold text-lg">CM 지원자 프로필 요약</span>
              </div>
              <button 
                onClick={() => setProfileOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 font-bold transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Profile Header */}
            <div className="flex items-center gap-4 py-6">
              <div className="w-16 h-16 rounded-full bg-slate-800 overflow-hidden flex items-center justify-center border-2 border-indigo-400">
                <img 
                  src={IMAGES.gm_bear} 
                  alt="Applicant Icon" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  {PORTFOLIO_META.applicantName} 
                  <span className="text-sm font-normal text-indigo-300 px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-500/30">신입/경력 주니어</span>
                </h3>
                <p className="text-sm text-slate-400">{PORTFOLIO_META.desiredRole}</p>
              </div>
            </div>

            {/* Contact Grid */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2 mb-6">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{PORTFOLIO_META.contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>{PORTFOLIO_META.contact.phone}</span>
              </div>
              {PORTFOLIO_META.contact.github && (
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Github className="w-4 h-4 text-purple-400" />
                  <a 
                    href={PORTFOLIO_META.contact.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:underline text-sky-400"
                  >
                    포폴 깃허브 방문하기 ↗
                  </a>
                </div>
              )}
            </div>

            {/* Intro paragraph */}
            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">CM 직무 매니페스토</h4>
              <p className="text-sm leading-relaxed text-slate-300">
                &quot;공식 커뮤니티는 <strong>대표 개발팀과 플레이어의 소리를 기꺼이 담는 첫 번째 창구이자 게임 생태계의 온도계</strong>입니다. 
                힐링 RPG 둥둥아일랜드의 온화한 감성을 살리면서 복합적인 버그 및 과금 민원에서는 냉정하고 철저한 가이드라인식 소통을 조장하는 CM이 되겠습니다. 
                단순 매크로 답변이 아닌, 공감 코멘트 설계와 정량적 VOC 수집 분석을 결합하여 인게임 불만 리포트를 실질적 패치 요강으로 성안해 내는 가교가 될 것입니다.&quot;
              </p>
            </div>

            {/* Core philosophies */}
            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">운영 철학 원칙 (Core Standard)</h4>
              <div className="space-y-3">
                {PORTFOLIO_META.philosophies.map((ph, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-800/40 border border-slate-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="p-1 rounded bg-sky-500/10 text-sky-400">
                        {idx === 0 ? '🛡️' : idx === 1 ? '💖' : '⚡'}
                      </span>
                      <h5 className="text-sm font-bold text-slate-200">{ph.title}</h5>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{ph.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Operation Skills percentages */}
            <div className="space-y-4 pb-6">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">CM 핵심 역량 수치 (Metrics)</h4>
              <div className="space-y-4">
                {PORTFOLIO_META.skills[0].list.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-200">{skill.name}</span>
                      <span className="text-mint-400 font-bold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                      <div 
                        className="bg-gradient-to-r from-sky-500 via-mint-400 to-indigo-500 h-2 rounded-full" 
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-auto pt-4 border-t border-slate-800 flex gap-2">
              <button 
                onClick={() => {
                  setProfileOpen(false);
                  setPortfolioMode(true);
                }} 
                className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 hover:opacity-90 font-bold text-sm text-white"
              >
                포폴 모드 설명 켜기 💡
              </button>
              <button 
                onClick={() => setProfileOpen(false)} 
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-semibold"
              >
                닫기
              </button>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
