import React, { useState } from 'react';
import { Inquiry } from '../types';
import { Mail, Send, CheckCircle2, ShieldCheck, Sparkles, FileText, LayoutGrid, Clock, Users } from 'lucide-react';

interface InquiryTabProps {
  portfolioMode: boolean;
}

export default function InquiryTab({ portfolioMode }: InquiryTabProps) {
  const [isAdminMode, setIsAdminMode] = useState<boolean>(true); // Default to yes so recruiters see the cool simulator immediately!
  
  // State for user submissions
  const [category, setCategory] = useState<string>('결제오류');
  const [title, setTitle] = useState<string>('');
  const [email, setEmail] = useState<string>('guest@company.com');
  const [content, setContent] = useState<string>('');
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // Initial tickets queue
  const [tickets, setTickets] = useState<Inquiry[]>([
    {
      id: "IRQ-201",
      category: "오류/버그",
      title: "길드 연못에서 낚시 조작 도중 캐릭터가 물속에 잠겨 먹통이 됩니다.",
      content: "안녕하세요 길드 연못에서 보랏빛 물고기 건져 올리기 조작 도중 갑자기 제 곰돌이가 화면 밖으로 풍덩 떨어지더니 물구나무 선 채로 굳어 버렸습니다. 접속을 종료했다가 다시 켜봐도 여전히 물속에서 눈만 깜빡이고 행동력 소모가 안 됩니다. 살려주세요!",
      userEmail: "hungrybear@daum.net",
      date: "2026-06-16 14:10",
      status: "접수대기"
    },
    {
      id: "IRQ-202",
      category: "결제오류",
      title: "보석 1500개를 결제하고 돈도 나갔는데 물건이 안 왔어요 ㅜㅜ",
      content: "구글 기프트 카드를 충전해서 영지 테마 출시 기념 보석 1,500개 패키지(9,900원 상당)를 구매했는데 결제 완료 창만 뜨고 인벤토리 우편함에는 아무 보상도 생기지 않았습니다. 구글 플레이 스토어 구매 고유 번호는 GPA.3341-9002-3114입니다. 확인 해 주시고 빠른 복구 부탁드립니다.",
      userEmail: "paymaster_g@naver.com",
      date: "2026-06-16 11:30",
      status: "접수대기"
    },
    {
      id: "IRQ-199",
      category: "제안/건의",
      title: "가구 배치할 때 반투명 그리드 가이드라인 한 칸씩 보이는 걸 원합니다.",
      content: "안녕하십니까 둥둥아일랜드를 너무나 사랑하는 정원사입니다. 가구를 가끔 일렬 배치할 때 눈대중으로 세우다 보니 가로등이나 울타리가 한 칸씩 미세하게 어긋나서 완벽히 정렬하는 데 너무 오랜 감상이 걸립니다. 배치 격자 안내 선(Show Grid) 토글 버튼을 제공해 주시면 매우 맵을 꾸밀 때 고마울 것 같아 제보 올립니다.",
      userEmail: "artgrid_island@gmail.com",
      date: "2026-06-15 10:20",
      status: "답변완료",
      answerText: `안녕하세요, 따뜻한 바람과 라벤더 꽃잎이 휘날리는 둥둥아일랜드 서비스 기획팀입니다.  
먼저 소중한 호수 정원을 더욱 완벽하고 각진 미학으로 아름답게 일구어 가실 수 있도록, 너무나 생산적이고 가치 있는 의견을 등재하여 주신 모험가님께 감사의 마법을 전합니다.

제안해 주신 **[가구 배치 모드 시 자석 격자 그리드 및 반투명 격자선 안내]** 기능은 가구 배치 정렬에 관해 많은 모험가 정원사님들이 깊은 필요성을 리포트해 주셨던 핵심 건의 중 하나였습니다. 

매우 기쁜 소식을 전해드리자면, 현재 개발 엔지니어 부서에서 **꾸미기 모드 내 좌측 토글 톱니바퀴를 눌러 격자선을 ON/OFF 할 수 있는 스냅 자석 가이드** 기능을 개발 진행 중이며, 다가오는 7월 대규모 리빙 패치에 무사 포함하는 것을 최종 승인해 두었습니다! 

모험가님의 빛나는 의견 한 칸이 이 예쁜 둥실랜드를 한 층 더 쾌적하게 가꾸는 밑거름이 됨을 자랑스럽게 믿습니다. 감사의 마음을 소소하게 담아 우편함으로 별빛 가구 뽑기권 1장을 송신해 드렸으니 수령해 주시기 바랍니다.

앞으로도 정원사님들의 작은 속삭임까지 조화롭게 성안하는 따뜻한 둥둥아일랜드 서비스팀이 되겠습니다. 늘 포근한 하루 보내세요!

- 둥두아일랜드 서포터즈 GM 둥곰 드림`,
      answeredDate: "2026-06-15 12:40"
    }
  ]);

  const [selectedTicketId, setSelectedTicketId] = useState<string>("IRQ-201");
  const [adminReplyText, setAdminReplyText] = useState<string>('');

  const activeTicket = tickets.find(t => t.id === selectedTicketId) || tickets[0];

  // Reply Template Boilerplates
  const templates = {
    bug: `안녕하세요, 모험가님들의 따뜻한 영지 소생을 돕는 고객 매니저 GM 둥곰입니다.

먼저 즐거운 둥둥아일랜드 호수 여정 도중 캐릭터가 길드 연못에 갇혀 버리는 현상으로 깊은 우려를 드리게 되어 진심으로 고개 숙여 사과의 말씀을 올립니다.

제보해 주신 현상은 특정 스마트폰 기종의 네트워킹 불안정으로 낚시 던지기 패킷이 겹치면서 캐릭터 리깅 수치가 일시 좌표 혼선을 초래한 현상으로, 기술부서의 물리 엔진 안전 복구 패치 작업 코드를 즉시 공유했습니다.

■ 조치 사항:
보내주신 캐릭터 명의 좌표 세션을 임시 안전 지역(광장 분수)으로 안전하게 이탈 배포 조치를 임시 긴급 이행 완료해 두었으니, 게임을 안전하게 재접속하여 주시기 바랍니다!

또한 점검 기간 동안 불편을 초래하신 모험가님께 위로의 선물로 [행동력 회복 구름 스무디] 3개를 배달하오니 우편함에서 보송하게 확인해 주시기 바랍니다.

앞으로도 늘 쾌적하고 조화로운 힐링을 수호하는 둥곰이가 되겠습니다. 고맙습니다.`,

    billing: `안녕하세요, 신뢰를 바탕으로 안전한 거래를 수호하는 둥둥아일랜드 고객 케어 센터입니다.

먼저 소중한 둥실보석 가구 재화 상품을 구매하셨음에도 결제 통신 대기 병목으로 아이템 공급을 빠르게 정전시키지 못해 대단히 죄송스러운 심정입니다.

리포트 해주신 구글 영수증 고유 트랙 번호 [GPA.3341-9002-3114] 데이터를 대조하여 모바일 스토어 정산 처리가 무사 완료된 것을 확인 수색 완료하였습니다!

■ 후속 조치:
정체되었던 [둥실보석 1,500개 패키지] 내용물을 유저님 계정의 특별 등기 인게임 우편함을 통해 일괄 수동 배포 승인 처리해 두었습니다. 즉각 게임에 재로그온하여 확인하여 주시기 바랍니다.

더욱 안전하고 쾌적한 빌링 수문장 가치를 준수하는 결제 아일랜드가 되겠습니다. 깊은 양해에 감사드립니다.`,

    suggestion: `안녕하세요, 모험가님의 예쁜 꽃집 조력자 GM 둥곰입니다.

먼저 둥둥아일랜드의 미래 방향성에 관해 대단히 사려 깊고 세련된 아이디어가 담긴 가구 정돈 건의 제안 글을 써주셔서 고개 숙여 감사의 은방울을 날립니다.

제안 주신 내용은 꾸미기 감상 부서 및 테마 코딩 엔지니어 팀에 영양가 있는 VOC 안건으로 고이 전송하였습니다. 적극 검토 후 적용될 수 있도록 조치하겠습니다.

더 나은 호수를 일굴 수 있도록 아낌없는 사랑을 보여주신 마음에 깊이 머무르겠습니다. 따뜻한 하루 보내세요!`
  };

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newTicket: Inquiry = {
      id: `IRQ-${Math.floor(Math.random() * 500) + 300}`,
      category: category,
      title: title,
      content: content,
      userEmail: email,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: '접수대기'
    };

    setTickets([newTicket, ...tickets]);
    setSelectedTicketId(newTicket.id);
    setTitle('');
    setContent('');
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 4000);
  };

  const handleAdminSubmit = () => {
    if (!adminReplyText.trim()) return;

    const nextTickets = tickets.map((t) => {
      if (t.id === selectedTicketId) {
        return {
          ...t,
          status: '답변완료' as const,
          answerText: adminReplyText,
          answeredDate: new Date().toISOString().replace('T', ' ').substring(0, 16)
        };
      }
      return t;
    });

    setTickets(nextTickets);
    setAdminReplyText('');
  };

  const getStatusBadge = (status: string) => {
    return status === '답변완료'
      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse';
  };

  // Stats for the CRM panel
  const totalInquiries = tickets.length;
  const pendingInquiries = tickets.filter(t => t.status === '접수대기').length;
  const resolveRate = Math.round(((totalInquiries - pendingInquiries) / totalInquiries) * 100);

  return (
    <div className="space-y-6" id="inquiry-tab-container">
      
      {/* Page header and Selector Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            ✉️ 1:1 고객지원 문의센터
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            둥둥아일랜드의 불편 사항 접수 창구 및 **[지원자 CM 고객지원 상담 콘솔 시뮬레이터]**를 가동합니다.
          </p>
        </div>

        {/* Console view trigger switch */}
        <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-805/80 h-fit self-start md:self-auto">
          <button
            onClick={() => setIsAdminMode(false)}
            id="user-inquiry-mode-btn"
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              !isAdminMode 
                ? 'bg-slate-800 text-white shadow' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            플레이어 접수단 📝
          </button>
          
          <button
            onClick={() => setIsAdminMode(true)}
            id="admin-crm-mode-btn"
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              isAdminMode 
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-slate-950 shadow-lg font-extrabold' 
                : 'text-sky-400 hover:text-sky-300'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            CS 관리 콘솔 🖥️ 
          </button>
        </div>
      </div>

      {portfolioMode && (
        <div className="bg-indigo-950/20 border border-indigo-500/25 p-4 rounded-xl text-left text-xs text-slate-200 leading-relaxed flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5 animate-spin" />
          <div>
            <span className="font-bold text-indigo-300">CM 리크루터 안내: </span>
            이 창구는 실무 면접에서 가장 중요한 <strong>고객 중심 1:1 대응 역량 (CS CRM)</strong>을 보여주기 위한 실제형 장치입니다.
            우측의 <strong>&quot;CS 관리 콘솔&quot;</strong>을 켜서 접수 대기 중인 플레이어 민원을 선택한 후, 답변 템플릿(결제 오류, 버그 패킷 등)을 로드하여 문체와 양식의 완성도를 직접 점검해 보세요.
          </div>
        </div>
      )}

      {/* VIEW A: Player Submission Form */}
      {!isAdminMode && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="player-inquiry-view">
          
          {/* Inquiry Form (7 Cols) */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-850 rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-base sm:text-lg font-bold text-slate-200 mb-6 text-left flex items-center gap-2">
              <Mail className="w-5 h-5 text-sky-400" /> 새 1:1 문의 접수하기
            </h3>

            <form onSubmit={handleUserSubmit} className="space-y-4 text-left" id="user-ticket-submission-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2">상담 분류 선택</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="결제오류">💸 결제/결제 실패 오류</option>
                    <option value="오류/버그">🐛 인게임 치명적 버그 제보</option>
                    <option value="제안/건의">💡 시스템 개선 제안 건의</option>
                    <option value="기타">🍃 비매너 고발 및 기타 질문</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2">답변 알림 받을 이메일</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-sky-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2">문의 제목</label>
                <input
                  type="text"
                  placeholder="예) 보석 결제 후 우편 지연 건 관련 고유번호 제보합니다."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-sky-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2">구체적인 상황 설명 (VOC)</label>
                <textarea
                  rows={6}
                  placeholder="오류가 발생한 시각, 단말기 기종, 상세 진행 조치 단계를 자세히 적어주시면 GM의 답변 회신 처리가 비약적으로 빨라질 수 있습니다."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-sky-500/50 leading-relaxed"
                />
              </div>

              {/* Attachment Drag Area */}
              <div className="border border-dashed border-slate-800 rounded-xl p-6 text-center bg-slate-950/40 hover:bg-slate-950/60 hover:border-slate-700 transition-colors">
                <span className="block text-xl mb-1">📸</span>
                <span className="block text-xs font-medium text-slate-400">참고 스크린샷 캡쳐 이미지 드랍 업로드</span>
                <span className="block text-[10px] text-slate-600 mt-1">PNG, JPG 포맷 최대 5MB 지원</span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="text-[11px] text-slate-500">
                  ⚠️ 허위 민원 제기 시 이용 규정에 따라 소명 배포를 이행해야 할 수 있습니다.
                </div>
                <button
                  type="submit"
                  id="user-ticket-submit-btn"
                  className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-450 font-bold text-slate-950 text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-lg shadow-sky-500/10"
                >
                  상담 접수하기 <Send className="w-4 h-4" />
                </button>
              </div>

              {submitSuccess && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-center text-xs animate-bounce font-bold mt-4">
                  🐳 문의가 완벽하게 접수되었습니다! 우측 상단 'CS 관리 콘솔' 메뉴를 눌러 방금 올린 글의 처리 상태를 가상 점검해 보십시오.
                </div>
              )}
            </form>
          </div>

          {/* Right Column Help notes (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-left">
              <h4 className="text-sm font-bold text-white mb-3">💬 1:1 상담 접수 유의 수치</h4>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed list-disc pl-4">
                <li>영수증 미지급 건은 구글 GPA 주문 고유 번호를 꼭 올려 주셔야 전제 대조가 속개됩니다.</li>
                <li>접수된 티켓은 평균 2시간 이내 CM들의 수동 검증으로 완벽 결성 해결 처리됩니다.</li>
                <li>상담 처리 알림은 고객 설정 이메일 원문으로 실시간 전파 인계됩니다.</li>
              </ul>
            </div>
          </div>

        </div>
      )}

      {/* VIEW B: Rich CS Admin Simulator Panel Console */}
      {isAdminMode && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="admin-crm-console-view">
          
          {/* Incoming Tickets Queue List (4 Cols) */}
          <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-4 flex flex-col max-h-[640px] overflow-hidden justify-between">
            
            {/* Headers metrics */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-850 pb-3 mb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <LayoutGrid className="w-4 h-4 text-sky-400" /> 접수 민원 대기열
                </span>
                <span className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800 font-mono">
                  총 {totalInquiries}건
                </span>
              </div>

              {/* Stats row inside queue */}
              <div className="grid grid-cols-3 gap-2 text-center pb-2">
                <div className="bg-slate-900 p-2 rounded border border-slate-850">
                  <span className="block text-[10px] text-slate-500 font-mono">대기중</span>
                  <span className="text-sm font-bold text-amber-400">{pendingInquiries}건</span>
                </div>
                <div className="bg-slate-900 p-2 rounded border border-slate-850">
                  <span className="block text-[10px] text-slate-500 font-mono">해결완료</span>
                  <span className="text-sm font-bold text-emerald-400">{totalInquiries - pendingInquiries}건</span>
                </div>
                <div className="bg-slate-900 p-2 rounded border border-slate-850">
                  <span className="block text-[10px] text-slate-500 font-mono">오늘 해결률</span>
                  <span className="text-sm font-bold text-indigo-400">{resolveRate}%</span>
                </div>
              </div>
            </div>

            {/* Scrolling ticket loops */}
            <div className="space-y-2 overflow-y-auto pr-1 flex-1 py-2">
              {tickets.map((t) => {
                const isSelected = t.id === selectedTicketId;
                return (
                  <div
                    key={t.id}
                    id={`admin-ticket-item-${t.id}`}
                    onClick={() => setSelectedTicketId(t.id)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-slate-900 border-sky-500/60 shadow-lg'
                        : 'bg-slate-900/30 border-slate-850/60 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1 text-[10px]">
                      <span className={`px-1.5 py-0.25 rounded font-bold text-[9px] ${
                        t.category === '결제오류' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      }`}>
                        {t.category}
                      </span>
                      <span className="text-slate-500 font-mono">{t.id}</span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-200 truncate leading-snug">
                      {t.title}
                    </h4>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-900/40 text-[9px] font-mono text-slate-500">
                      <span>{t.date.split(' ')[1]}</span>
                      <span className={`px-1 rounded ${getStatusBadge(t.status)}`}>
                        {t.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick coaching footer */}
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-850 text-center text-[10px] text-slate-400 leading-relaxed font-sans">
              💡 티켓을 클릭하면 모험가의 VOC 원본과 상담 답변 조치를 속개할 수 있습니다.
            </div>

          </div>

          {/* Active Ticket Reader & Answer Editor (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* Active Ticket complaint card details */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6 text-left shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                  <span className="font-bold text-slate-200">선택된 민원 분석: {activeTicket.id}</span>
                </div>
                <div className="text-slate-500 font-mono">
                  작성자: <span className="text-sky-400">{activeTicket.userEmail}</span> | 접수일: {activeTicket.date}
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                {activeTicket.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-850 whitespace-pre-line max-h-40 overflow-y-auto">
                {activeTicket.content}
              </p>
            </div>

            {/* Answer builder and Presets */}
            <div className="bg-slate-900 border border-slate-850 rounded-2xl p-5 md:p-6 text-left flex-1 flex flex-col justify-between">
              
              {/* Presets block */}
              <div className="space-y-3 mb-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block pl-1">
                  💡 답변 보조 프리셋 매뉴얼 로딩
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => setAdminReplyText(templates.bug)}
                    id="preset-bug-btn"
                    className="p-2 text-center rounded-lg border border-indigo-505 bg-indigo-950/20 text-indigo-300 hover:bg-indigo-900/30 text-xs font-semibold cursor-pointer transition-all"
                  >
                    🐛 버그 수정/세션 회복
                  </button>
                  <button
                    onClick={() => setAdminReplyText(templates.billing)}
                    id="preset-billing-btn"
                    className="p-2 text-center rounded-lg border border-amber-505 bg-amber-950/25 text-amber-300 hover:bg-amber-900/30 text-xs font-semibold cursor-pointer transition-all"
                  >
                    💸 결제 실패 수동 지급
                  </button>
                  <button
                    onClick={() => setAdminReplyText(templates.suggestion)}
                    id="preset-sugg-btn"
                    className="p-2 text-center rounded-lg border border-emerald-505 bg-emerald-950/20 text-emerald-300 hover:bg-emerald-900/30 text-xs font-semibold cursor-pointer transition-all"
                  >
                    💡 개선/친근 수긍 건의
                  </button>
                </div>
              </div>

              {/* Textarea answer input */}
              <div className="flex-1 min-h-48 mb-4 flex flex-col justify-end">
                <label className="block text-[10px] font-bold text-slate-400 mb-1 pl-1">상담 회신 공식 답변문 작성</label>
                <textarea
                  rows={8}
                  placeholder="위의 템플릿 버튼을 클릭하면 전문적인 게임 CS 공식 답변이 자동으로 로드됩니다. 적절하게 전치 검수 뒤 하단의 해결 처리 완료 버튼을 클릭하십시오."
                  value={adminReplyText || (activeTicket.status === '답변완료' ? activeTicket.answerText : '')}
                  onChange={(e) => setAdminReplyText(e.target.value)}
                  disabled={activeTicket.status === '답변완료'}
                  className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-indigo-500 font-sans leading-relaxed flex-1 overflow-y-auto"
                />
              </div>

              {/* Submit resolved */}
              <div className="flex items-center justify-between border-t border-slate-800 pt-3">
                <span className="text-[10px] text-slate-500 font-mono">
                  {activeTicket.status === '답변완료' ? `답변이 완료된 티켓입니다 (${activeTicket.answeredDate})` : '대기 열에서 답변 발송 대기 중'}
                </span>
                
                {activeTicket.status !== '답변완료' ? (
                  <button
                    onClick={handleAdminSubmit}
                    id="admin-ticket-resolved-btn"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:opacity-95 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer shadow-lg"
                  >
                    <CheckCircle2 className="w-4 h-4" /> 상담 해결 완료 등록 ✔
                  </button>
                ) : (
                  <span className="text-xs text-slate-400 font-bold bg-slate-950 px-3 py-1.5 rounded border border-slate-800">
                    처리완료 전송 완료 ✨
                  </span>
                )}
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
