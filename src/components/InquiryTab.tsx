import React, { useState } from 'react';
import { Inquiry } from '../types';
import { Mail, Send, CheckCircle2, ShieldCheck, Sparkles, FileText, LayoutGrid, Clock, Users, Image, Upload, X, ZoomIn } from 'lucide-react';

interface InquiryTabProps {
  portfolioMode: boolean;
}

export default function InquiryTab({ portfolioMode }: InquiryTabProps) {
  const [isAdminMode, setIsAdminMode] = useState<boolean>(true); // Default to yes so recruiters see the cool simulator immediately!
  
  // State for user submissions
  const [category, setCategory] = useState<string>('호수/꾸미기');
  const [title, setTitle] = useState<string>('');
  const [email, setEmail] = useState<string>('guest@company.com');
  const [content, setContent] = useState<string>('');
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // States for Image Upload
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageChange(file);
    }
  };

  const handleImageChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드할 수 있습니다.');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleImageChange(file);
    }
  };

  // Initial tickets queue
  const [tickets, setTickets] = useState<Inquiry[]>([
    {
      id: "IRQ-202",
      category: "호수/꾸미기",
      title: "호수 배경 이미지 샀는데 어떻게 적용하나요?",
      content: "상점에서는 구매한 걸로 나오는데, 막상 섬에 배치하려고 하니까 어디서 꺼내야 하는지 모르겠네요.\n\n꾸미기 메뉴 쪽을 눌러봐도 제가 못 찾는 건지 구매한 아이템이 바로 안 보입니다.\n\n구매한 꾸미기 아이템은 가방에서 꺼내는 건가요, 아니면 따로 배치하는 메뉴가 있나요?\n\n적용하는 위치나 순서 알려주시면 감사하겠습니다.",
      userEmail: "lakelover_decor@naver.com",
      date: "2026-06-16 11:30",
      status: "접수대기"
    },
    {
      id: "IRQ-199",
      category: "제안/건의",
      title: "가구를 배치할 때 정렬 스냅 가이드나 그리드 격자선을 보여주세요.",
      content: "안녕하세요, 둥둥아일랜드 방치형 플레이를 켜두고 매일 힐링하며 섬을 꾸미고 있는 정원사입니다. 자동 낚시와 자동 밥먹기로 모은 짱짱한 골드로 상점에서 다양한 꽃나무, 울타리, 가로등 오브젝트들을 잔뜩 구매하고 있습니다.\n\n그런데 가구들을 호숫가에 일렬로 정렬해서 실시간 데코를 진행할 때, 미세하게 틀어지는 경우가 있습니다. 배치 모드에서 그리드 격자 가이드 라인을 토글로 켜고 끌 수 있는 기능이 추가된다면, 상점에서 구입한 예쁜 장식물들로 저만의 섬 레이아웃을 훨씬 정교하고 보기 좋게 완성할 수 있을 것 같아 건의드립니다!",
      userEmail: "artgrid_island@gmail.com",
      date: "2026-06-15 10:20",
      status: "답변완료",
      answerText: `안녕하세요, 편안하게 지켜보는 나만의 휴식처 둥둥아일랜드 서비스 운영기획팀입니다.  
먼저 자동 행동 세션으로 조용히 흐르는 호수를 가꾸며, 저희 둥둥아일랜드에 너무나 영양가 있고 가치 높은 디자인 제안을 등재해 주신 유저 둥이 정원사님께 고개 숙여 진심 어린 사과의 은방울을 날립니다.

제안해 주신 **[가구 배치 모드 내 반투명 격자선(Show Grid) 및 자동 마그네틱 정렬 스냅]** 편의 기능은, 상점에서 벌어들인 골드로 예쁘고 다채로운 오브젝트를 구입해 자신만의 섬과 잔잔한 호수를 디자인하시는 많은 유저분들께서 뜨겁게 건의해 주시던 핵심 방향이었습니다!

매우 기쁜 소식을 전해드리자면, 현재 개발 부서에서 **꾸미기 모드 진입 시 우측 상단 격자 토글 버튼을 제공해 격자선 가이드에 맞추어 사물을 칼같이 일렬 배치할 수 있는 스냅 엔진**을 준비하고 있으며, 다가오는 7월 대규모 이지-클린 꾸미기 수렴 패치 시점에 실제 인게임 완벽 실장을 최종 확정해 두었습니다! 

골드 파밍으로 얻은 꾸미기 오브젝트들을 더욱 아름답게 디자인하실 수 있도록 최선을 다하겠으며, 감사의 소소한 약소 보답으로 인게임 우편함을 통해 [클린 조경용 골드 복리 보상 상자] 1개를 송신해 드렸으니 포근하게 확인해 보시기 바랍니다.

앞으로도 정원사님들이 편하게 방치하면서도 최고의 꾸미기 만족감을 누리실 수 있는 따뜻한 서비스로 동행하겠습니다. 감사합니다!

- 둥둥아일랜드 서포터즈 GM 둥곰 드림`,
      answeredDate: "2026-06-15 12:40"
    }
  ]);

  const [selectedTicketId, setSelectedTicketId] = useState<string>("IRQ-202");
  const [adminReplyText, setAdminReplyText] = useState<string>('');

  const activeTicket = tickets.find(t => t.id === selectedTicketId) || tickets[0];

  // Reply Template Boilerplates
  const templates = {
    bug: `안녕하세요, 조용한 힐링과 여유로운 성장을 지원하는 둥둥아일랜드 고객 케어 센터 GM 둥곰입니다.

먼저 즐거운 둥둥아일랜드의 모험 도중, 상점에서 구매하신 가방 슬롯 확장 결과가 UI 디스플레이에 실시간으로 반영되지 않아 큰 혼선과 불안감을 안겨드린 점 깊은 유감을 표명하며 고개 숙여 진심으로 사죄의 은방울을 올립니다.

해당 현상은 가방 용량 확장 상태 변수 정보가 슬롯 뷰포트 컴포넌트에 즉시 인입 및 리-렌더링 갱신되지 못하면서 발생하는 일시적 동기화 병목 문제임이 확인되었습니다. 안심하셔도 좋은 부분은, 유저 둥이님의 소중한 골드 해금 계정 데이터 정보는 무결하게 데이터베이스에 영구 세이브 기록되어 보관 중입니다.

■ 조치 및 개선 예정 안내:
1) 확장 직후 강제 데이터 리프레시 콜백 함수를 연결하여 별도의 앱 수동 재시작 없이도 가방 칸이 즉시 확대되어 보일 수 있도록 실시간 업데이트 조치하겠습니다!
2) 임시 해결책으로, 인게임 설정 메뉴에서 [동기화] 아이콘을 누르거나 화면을 새로고침하시면 즉시 늘어난 가방 슬롯이 올바르게 나타납니다.

유저 둥이님들의 여유로움과 안락함을 위해 최우선으로 시스템 정밀 모니터링을 상시 가동하고 신속히 이행하는 둥둥아일랜드가 되겠습니다. 깊은 신뢰와 정밀 제보에 거듭 감사드립니다!`,

    billing: `안녕하세요, 나만의 조용한 호수를 일구어내는 둥둥아일랜드 하버 마스터 GM 둥곰입니다.

자동 낚시와 편리한 방치 파밍을 돌리며 고이 적립하신 50,000골드로 상점에서 '가을 핑크 라벤더 호수정원' 전체 배경 레이아웃 교체 정경을 구매하신 뒤, 적용 방식에 대해 혼선을 겪으셨군요!

둥둥아일랜드는 결제 오과금 스트레스가 없는 순수 무결제 플레이 지향 게임으로, 열심히 게임 내에서 자동으로 벌어들이신 리얼 골드 재화만을 고집하여 풍경 배경과 스킨 오브젝트들을 구매하실 수 있습니다.

■ 호수 레이아웃 정경 이미지 교체 방법:
1) 인게임 최하단의 [꾸미기 모드 🔨] 아이콘을 가볍게 터치해 꾸미기 세션에 진입합니다.
2) 화면 우측 하단에 새롭게 생성되는 [호수 레이아웃 테마 정경스킨] 목록 창 슬롯을 확인해 주십시오.
3) 이번에 골드로 획득하신 '가을 핑크 라벤더 호수정원' 썸네일 카드를 선택하신 후 [정경 교체 승인] 버튼을 누르시면, 전체 호수 물빛 정경 레이아웃 이미지가 즉시 고해상도 테마 스킨으로 완벽 원클릭 체인지 전환됩니다!

화려해진 가을 배경 위에 열심히 모아두신 예쁜 정원 장식물들을 마음에 들게 한껏 늘어놓아 감상해 보시길 권장해 드립니다. 언제든 궁금하신 점은 1:1 센터를 똑똑 두드려 주시기 바랍니다. 고맙습니다!`,

    suggestion: `안녕하세요, 아름다운 나만의 무과금 호수 예술정원 도우미 GM 둥곰입니다.

자동으로 열심히 낚은 물고기와 성실하게 챙겨 먹은 요리를 골드로 치환하여, 상점에 전시된 수많은 조경용 가구와 장식 가로등 오브젝트들을 영리하게 소집하고 향유해 주셔서 정말 감사의 풍선을 날립니다!

제안해 주신 꾸미기 모드 내 배치 시 격자 픽셀 안내 라인 및 정밀 일렬 평행 자석 달라붙기(Magnetic Snap) 정렬 기능은, 호수 전경 디자인의 미학과 직결되어 정원사님들의 만족감을 배로 향상시킬 수 있는 아주 똑똑하고 날카로운 VOC 건의 사항입니다.

개발 엔지니어 부서와 즉각 논의하여, 다가오는 7월 정경 메이저 패치 항목에 [그리드 자석 스냅선 활성화 기능]을 우선 구현 안건으로 포함해 두기로 최종 컨펌을 마쳤습니다! 

사용자님의 손길이 닿을수록 더 반짝이는 둥실랜드를 기획하고자 최선을 다하겠습니다. 따뜻한 휴식 되세요!`
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
      status: '접수대기',
      imageUrl: imagePreview || undefined
    };

    setTickets([newTicket, ...tickets]);
    setSelectedTicketId(newTicket.id);
    setTitle('');
    setContent('');
    setImagePreview(null);
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
      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
      : 'bg-amber-50 text-amber-750 border border-amber-200';
  };

  // Stats for the CRM panel
  const totalInquiries = tickets.length;
  const pendingInquiries = tickets.filter(t => t.status === '접수대기').length;
  const resolveRate = Math.round(((totalInquiries - pendingInquiries) / totalInquiries) * 100);

  return (
    <div className="space-y-6 font-sans text-left" id="inquiry-tab-container">
      
      {/* Page header and Selector Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
            ✉️ 1:1 고객지원 문의센터
          </h2>
          <p className="text-slate-500 text-xs mt-1">
            {portfolioMode ? (
              <>인게임 건의 사항 및 빌링 회동 분석을 위한 **[지원자 CM 고객지원 상담 콘솔 시뮬레이터]** 환경입니다.</>
            ) : (
              <>둥둥아일랜드의 온오프라인 해결을 돕는 공식 1:1 라이브 운영지원 해결 센터입니다.</>
            )}
          </p>
        </div>

        {/* Console view trigger switch */}
        <div className="flex bg-slate-100 p-1.5 rounded border border-slate-850 h-fit self-start md:self-auto">
          <button
            onClick={() => setIsAdminMode(false)}
            id="user-inquiry-mode-btn"
            className={`px-3 py-1 text-xs font-bold transition-all cursor-pointer rounded ${
              !isAdminMode 
                ? 'bg-indigo-600 text-white font-bold' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            플레이어 접수창구
          </button>
          
          <button
            onClick={() => setIsAdminMode(true)}
            id="admin-crm-mode-btn"
            className={`px-3 py-1 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer rounded ${
              isAdminMode 
                ? 'bg-slate-950 text-slate-100 border border-slate-800 font-bold' 
                : 'text-indigo-600 hover:text-indigo-700'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            CS 관리 콘솔
          </button>
        </div>
      </div>

      {portfolioMode && (
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded text-xs text-slate-200">
          <span className="font-bold text-yellow-800 flex items-center gap-1 mb-1">
            <Sparkles className="w-4 h-4 text-yellow-600 shrink-0" /> [임용 평가용 CS대응 시뮬레이터 실무요점]
          </span>
          <p className="text-slate-700 leading-relaxed font-semibold">
            우측 상단CS 관리 콘솔 버튼을 클릭하면 실제 접수 대기 중인 유저 결제 장애/인게인 갇힘 민원을 확인하고, 미리 설정된 **수동 대응 회신 프리셋 코드**를 주입하여 해결 처리 결과를 완벽하게 실시간 증명 가능합니다.
          </p>
        </div>
      )}

      {/* VIEW A: Player Submission Form */}
      {!isAdminMode && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="player-inquiry-view">
          
          {/* Inquiry Form (8 Cols) */}
          <div className="lg:col-span-8 bg-white border border-slate-850 rounded p-6 md:p-8">
            <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-600" /> 새 1:1 상담 접수하기
            </h3>

            <form onSubmit={handleUserSubmit} className="space-y-4 text-left" id="user-ticket-submission-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2">상담 분류 선택</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-white border border-slate-855 rounded px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                  >
                    <option value="호수/꾸미기">🏞️ 호수 배경 및 섬 꾸미기</option>
                    <option value="오류/버그">🐛 자동행동 버그 및 가방 장애</option>
                    <option value="제안/건의">💡 가구 오브젝트 / 편의 건의</option>
                    <option value="기타">🍃 데이터 동기화 및 기타 문의</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2">답변 회신 받을 주소 (e-mail)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white border border-slate-855 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2">제목</label>
                <input
                  type="text"
                  placeholder="요점을 간략하게 써주세요..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full bg-white border border-slate-855 rounded px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2">문의 상세 내용</label>
                <textarea
                  rows={6}
                  placeholder="일어난 장애 상황, 기기 데이터 등을 가능한 소상하게 수집해 기술해주십시오."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  className="w-full bg-white border border-slate-855 rounded p-3.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2">이미지 첨부 (선택사항)</label>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-5 transition-all text-center flex flex-col items-center justify-center cursor-pointer ${
                    isDragging
                      ? 'border-indigo-500 bg-indigo-50/10'
                      : 'border-slate-855 bg-slate-950/20 hover:border-slate-400'
                  }`}
                  onClick={() => document.getElementById('image-upload-input')?.click()}
                >
                  <input
                    id="image-upload-input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {imagePreview ? (
                    <div className="relative group w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                      <img
                        src={imagePreview}
                        alt="Attachment preview"
                        className="max-h-48 rounded object-contain border border-slate-800 bg-slate-950 shadow-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setImagePreview(null)}
                        className="absolute top-1 right-2 bg-rose-600 hover:bg-rose-700 text-white p-1 rounded-full shadow-lg cursor-pointer transition-colors"
                        title="이미지 삭제"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[10px] text-slate-500 mt-2">이미지가 성공적으로 첨부되었습니다.</span>
                    </div>
                  ) : (
                    <div className="py-2 flex flex-col items-center">
                      <Upload className="w-8 h-8 text-slate-400 mb-2 group-hover:scale-105 transition-transform" />
                      <p className="text-xs text-slate-400 font-medium">
                        마우스로 이미지를 드래그하여 놓거나 <span className="text-indigo-600 font-semibold underline">이곳을 클릭</span>하여 업로드하세요
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1">PNG, JPG, JPEG, GIF 파일 지원</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-600 rounded text-xs text-white font-bold hover:bg-indigo-700 cursor-pointer text-center"
                >
                  문의 서류 접수하기 📤
                </button>
              </div>

              {submitSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded font-sans text-xs text-center font-bold">
                  ✓ 접수 완료!CS 관리 탭을 눌러 방금 접수된 '{title}' 건의 관제 업무를 모의 시험해 볼 수 있습니다.
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white border border-slate-850 rounded p-5 text-left">
              <h4 className="text-xs font-bold text-slate-800 mb-3">💬 1:1 상담 접수 안내 사항</h4>
              <ul className="space-y-2 text-[11px] text-slate-500 leading-relaxed list-disc pl-4 font-medium">
                <li>둥둥아일랜드는 일체의 유료 결제 시스템이 없는 완벽한 무과금 방치형 힐링 게임입니다. 모든 아이템과 호수 정경은 인게임에서 자동 행동으로 획득한 골드로 상점에서 구매할 수 있습니다.</li>
                <li>오류/버그 제보 시 문제가 발생한 특정 시점, 혹은 가방이나 상점 등의 UI 상태 정황을 소상히 공유해 주시면 큰 도움이 됩니다.</li>
                <li>평일 기준 고객지원 센터에서 1시간 내 복구 조치 및 기획 서신 답변이 완료됩니다.</li>
              </ul>
            </div>
          </div>

        </div>
      )}

      {/* VIEW B: Rich CS Admin Simulator Panel Console */}
      {isAdminMode && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="admin-crm-console-view">
          
          {/* Incoming Tickets Queue List (4 Cols) */}
          <div className="lg:col-span-4 bg-white border border-slate-850 rounded p-4 space-y-4 flex flex-col max-h-[640px] overflow-hidden justify-between">
            
            {/* Headers metrics */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-850 pb-3 mb-3">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <LayoutGrid className="w-4 h-4 text-indigo-600" /> 원격 CS 대기 대열
                </span>
                <span className="text-[10px] bg-slate-950 text-slate-100 px-2 py-0.5 rounded border border-slate-800 font-mono font-bold">
                  {totalInquiries}건 접수됨
                </span>
              </div>

              {/* Stats row inside queue */}
              <div className="grid grid-cols-3 gap-1.5 text-center pb-2">
                <div className="bg-slate-950 p-2 rounded">
                  <span className="block text-[8px] text-slate-500 font-mono font-bold">대기중</span>
                  <span className="text-xs font-bold text-amber-600">{pendingInquiries}건</span>
                </div>
                <div className="bg-slate-950 p-2 rounded">
                  <span className="block text-[8px] text-slate-500 font-mono font-bold">처리완료</span>
                  <span className="text-xs font-bold text-emerald-800">{totalInquiries - pendingInquiries}건</span>
                </div>
                <div className="bg-slate-950 p-2 rounded">
                  <span className="block text-[8px] text-slate-500 font-mono font-bold">답변해결률</span>
                  <span className="text-xs font-bold text-indigo-600">{resolveRate}%</span>
                </div>
              </div>
            </div>

            {/* Scrolling ticket loops */}
            <div className="space-y-2 overflow-y-auto pr-1 flex-1 py-1">
              {tickets.map((t) => {
                const isSelected = t.id === selectedTicketId;
                return (
                  <div
                    key={t.id}
                    id={`admin-ticket-item-${t.id}`}
                    onClick={() => setSelectedTicketId(t.id)}
                    className={`p-3 rounded border text-left cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-slate-950 border-slate-800'
                        : 'bg-white border-slate-855 hover:bg-indigo-50/70 hover:border-indigo-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1 text-[10px]">
                      <span className={`px-1 rounded font-bold text-[9px] ${
                        t.category === '오류/버그' ? 'bg-amber-50 text-amber-700' : 'bg-indigo-50 text-indigo-700'
                      }`}>
                        {t.category}
                      </span>
                      <span className="text-slate-500 font-mono">{t.id}</span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-800 truncate leading-snug">
                      {t.title}
                    </h4>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-850 text-[9px] font-mono text-slate-500">
                      <span>{t.date.split(' ')[1]}</span>
                      <span className={`px-1 py-0.5 rounded font-sans font-bold ${getStatusBadge(t.status)}`}>
                        {t.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick coaching footer */}
            <div className="bg-slate-950 p-2.5 rounded border border-slate-850 text-center text-[10px] text-slate-500 leading-snug">
              💡 민원 선택 시, 우측 영역에서 기획 템플릿 답변 자동 주입 및 해결 배포가 가능해집니다.
            </div>

          </div>

          {/* Active Ticket Reader & Answer Editor (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* Active Ticket complaint card details with integrated Reply Editor */}
            <div className="bg-white border border-slate-850 rounded-lg p-5 md:p-6 text-left space-y-4">
              <div>
                <div className="flex items-center justify-between border-b border-slate-850 pb-2 mb-3 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
                    <span>활성 민원 분석: {activeTicket.id}</span>
                  </div>
                  <div className="text-slate-500 font-mono">
                    작성: <span className="text-indigo-600 underline font-bold">{activeTicket.userEmail}</span> | {activeTicket.date}
                  </div>
                </div>

                <h3 className="text-sm font-extrabold text-slate-850 mb-2 leading-snug">
                  {activeTicket.title}
                </h3>

                <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed bg-slate-950 p-3 rounded border border-slate-850 whitespace-pre-line max-h-40 overflow-y-auto font-medium">
                  {activeTicket.content}
                </p>

                {activeTicket.imageUrl && (
                  <div className="mt-3">
                    <span className="block text-[10px] font-bold text-slate-500 mb-1.5 pl-0.5 flex items-center gap-1">
                      <Image className="w-3.5 h-3.5 text-indigo-500" /> 📂 첨부 이미지 확인
                    </span>
                    <div className="relative group inline-block max-w-[200px] rounded overflow-hidden border border-slate-800 bg-slate-950/80 shadow hover:border-indigo-500/50 transition-colors">
                      <img
                        src={activeTicket.imageUrl}
                        alt="Submitted attachment"
                        className="max-h-36 object-contain w-auto cursor-zoom-in transition-all group-hover:scale-[1.02]"
                        referrerPolicy="no-referrer"
                        onClick={() => setLightboxUrl(activeTicket.imageUrl || null)}
                      />
                      <div 
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-zoom-in pointer-events-none"
                      >
                        <ZoomIn className="w-5 h-5 text-white animate-pulse" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Answer Builder Editor Section right under Complaint Details */}
              <div className="border-t border-slate-850 pt-4 space-y-4">
                
                {/* Presets block */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block pl-0.5">
                    📁 CS 처리 공식 대응 서신 프리셋 코드
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      onClick={() => setAdminReplyText(templates.bug)}
                      id="preset-bug-btn"
                      className="p-1.5 text-center rounded border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-[10px] font-bold cursor-pointer transition-colors"
                    >
                      🐛 가방 슬롯 동기화 가이드
                    </button>
                    <button
                      onClick={() => setAdminReplyText(templates.billing)}
                      id="preset-billing-btn"
                      className="p-1.5 text-center rounded border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 text-[10px] font-bold cursor-pointer transition-colors"
                    >
                      🏞️ 호수 레이아웃 교체 안내
                    </button>
                    <button
                      onClick={() => setAdminReplyText(templates.suggestion)}
                      id="preset-sugg-btn"
                      className="p-1.5 text-center rounded border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-[10px] font-bold cursor-pointer transition-colors"
                    >
                      💡 정렬 스냅/격자 건의 답변
                    </button>
                  </div>
                </div>

                {/* Textarea answer input */}
                <div className="flex flex-col">
                  <label className="block text-[10px] font-bold text-slate-500 mb-1 pl-0.5">상담 회신 공식 문서 에디터</label>
                  <textarea
                    rows={8}
                    placeholder="위의 프리셋 버튼을 클릭하면 전문적인 실무 CS 공식 답변이 즉시 적용됩니다."
                    value={adminReplyText || (activeTicket.status === '답변완료' ? activeTicket.answerText : '')}
                    onChange={(e) => setAdminReplyText(e.target.value)}
                    disabled={activeTicket.status === '답변완료'}
                    className="w-full bg-white border border-slate-855 rounded p-3 text-xs sm:text-xs text-slate-800 focus:outline-none focus:border-indigo-500 font-sans leading-relaxed min-h-[180px] overflow-y-auto"
                  />
                </div>

                {/* Submit resolved */}
                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-850 pt-3 gap-3">
                  <span className="text-[10px] text-slate-550 font-mono">
                    {activeTicket.status === '답변완료' ? `전송 완료: ${activeTicket.answeredDate}` : '대기열 답변 주입 대기 중'}
                  </span>
                  
                  {activeTicket.status !== '답변완료' ? (
                    <button
                      onClick={handleAdminSubmit}
                      id="admin-ticket-resolved-btn"
                      className="px-4 py-1.5 rounded bg-emerald-700 text-white hover:bg-emerald-800 font-bold text-[11px] flex items-center gap-1 cursor-pointer ml-auto"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" /> 상담 티켓 해결 완료 승인
                    </button>
                  ) : (
                    <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded border border-emerald-250 ml-auto">
                      성공적으로 1:1 회신 메일 전송됨 ✓
                    </span>
                  )}
                </div>

              </div>
            </div>

          </div>

        </div>
      )}

      {/* Visual Lightbox Modal Overlay for Close-Up Analysis */}
      {lightboxUrl && (
        <div 
          className="fixed inset-0 bg-slate-950/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setLightboxUrl(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] flex flex-col bg-white rounded border border-slate-800 overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightboxUrl(null)}
              className="absolute top-3 right-3 bg-slate-900/80 text-white rounded-full p-1.5 hover:bg-rose-600 transition-all cursor-pointer z-10"
              title="닫기"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="p-2 bg-slate-950 flex items-center justify-center min-h-[300px]">
              <img
                src={lightboxUrl}
                alt="Enlarged attachment preview"
                className="max-h-[75vh] max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-white px-4 py-2 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>🔍 원본 첨부 이미지 크고 정밀하게 보기</span>
              <button 
                onClick={() => setLightboxUrl(null)} 
                className="text-indigo-600 hover:underline font-bold cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
