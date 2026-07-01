import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { GMNUTES, IMAGES } from '../data';
import { GMComment } from '../types';
import { Heart, MessageCircle, Eye, Calendar, Sparkles, Send, ShieldCheck, ArrowLeft } from 'lucide-react';

const markdownComponents = {
  h3: ({ ...props }) => (
    <h3 className="text-sm sm:text-base font-extrabold text-black mt-5 mb-2.5 flex items-center gap-1.5 border-b border-slate-200 pb-1.5" {...props} />
  ),
  h4: ({ ...props }) => (
    <h4 className="text-xs sm:text-sm font-bold text-indigo-750 mt-4 mb-2" {...props} />
  ),
  p: ({ ...props }) => (
    <p className="text-xs sm:text-sm text-black leading-relaxed my-2 font-semibold" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="list-disc pl-5 my-3 space-y-1.5 text-xs sm:text-sm text-black font-semibold" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="list-decimal pl-5 my-3 space-y-1.5 text-xs sm:text-sm text-black font-semibold" {...props} />
  ),
  li: ({ ...props }) => (
    <li className="text-xs sm:text-sm text-black leading-relaxed font-semibold" {...props} />
  ),
  strong: ({ ...props }) => (
    <strong className="font-bold text-indigo-800 bg-indigo-50 border border-indigo-100 px-1 py-0.5 rounded" {...props} />
  ),
  em: ({ ...props }) => (
    <em className="italic text-slate-800 font-semibold" {...props} />
  ),
  hr: ({ ...props }) => (
    <hr className="my-5 border-slate-200" {...props} />
  ),
};

interface GMNoteTabProps {
  portfolioMode: boolean;
}

export default function GMNoteTab({ portfolioMode }: GMNoteTabProps) {
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [likes, setLikes] = useState<number>(GMNUTES[0].likes);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [newCommentText, setNewCommentText] = useState<string>('');
  const [comments, setComments] = useState<GMComment[]>(GMNUTES[0].comments);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: GMComment = {
      id: `C-NEW-${Date.now()}`,
      user: "귀염유저둥이님",
      content: newCommentText,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  const selectedNote = GMNUTES.find((n) => n.id === selectedNoteId);

  const renderContentWithImages = (text: string, images?: string[]) => {
    if (!images || images.length === 0) {
      return (
        <div className="text-black leading-relaxed font-semibold text-xs sm:text-sm">
          <ReactMarkdown components={markdownComponents} rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
        </div>
      );
    }

    // Split text by the tags like [IMAGE:0] or [IMAGE:n]
    const parts = text.split(/(\[IMAGE:\d+\])/g);

    return (
      <div className="space-y-4">
        {parts.map((part, index) => {
          const match = part.match(/\[IMAGE:(\d+)\]/);
          if (match) {
            const imgIndex = parseInt(match[1], 10);
            const imgUrl = images[imgIndex];
            if (imgUrl) {
              return (
                <div key={index} className="my-5 border border-slate-100 rounded-lg overflow-hidden bg-slate-150/10 p-4 shadow-sm">
                  <div 
                    onClick={() => setLightboxUrl(imgUrl)}
                    className="group relative cursor-zoom-in rounded overflow-hidden border border-slate-200 bg-slate-50 transition-all hover:scale-[1.01] hover:shadow-md max-w-full md:max-w-xl mx-auto shadow-sm"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`꾸미기 개발 컷 ${imgIndex + 1}`} 
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-contain max-h-[350px]"
                    />
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                      <span className="text-[10px] font-bold text-white bg-slate-950/80 px-2.5 py-1.5 rounded flex items-center gap-1 shadow-md">
                        🔍 클릭하여 큰 이미지로 분석하기
                      </span>
                    </div>
                  </div>
                  {/* Subtle, highly integrated caption */}
                  <div className="text-center mt-2.5 text-xs text-slate-700 font-extrabold">
                    {selectedNote?.id === 'GM-02' ? (
                      <>
                        {imgIndex === 0 && "📸 [상점 카테고리 필터 예시] 꾸미기 아이템 세부 분류 선택 화면"}
                        {imgIndex === 1 && "📸 [상점 정렬 기능 예시] 보유 상태 및 가격 기준 정렬 화면"}
                      </>
                    ) : selectedNote?.id === 'GM-01' ? (
                      <>
                        {imgIndex === 0 && "📸 [도움말 화면 예시] 주요 기능 안내 및 화면별 가이드 1"}
                        {imgIndex === 1 && "📸 [도움말 화면 예시] 주요 기능 안내 및 화면별 가이드 2"}
                      </>
                    ) : (
                      <>
                        {imgIndex === 0 && "📸 [꾸미기 화면 예시] WASD 카메라 이동 및 꽃밭 가든 연출 (Group 28)"}
                        {imgIndex === 1 && "📸 [배치 격자 예시] 가구 바닥 그리드 격자 및 배치 가이드 (Group 29)"}
                        {imgIndex === 2 && "📸 [메뉴 제어 예시] 배치된 오브젝트 회수, 이동, 회전 Context UI (Group 30)"}
                      </>
                    )}
                  </div>
                </div>
              );
            }
            return null;
          }

          if (!part) return null;
          return (
            <div key={index} className="text-black leading-relaxed font-semibold text-xs sm:text-sm">
              <ReactMarkdown components={markdownComponents} rehypePlugins={[rehypeRaw]}>{part}</ReactMarkdown>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6 font-sans text-left" id="gmnote-tab-container">
      
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
          📝 둥곰 소식지 (GM노트)
        </h2>
        <p className="text-slate-500 text-xs mt-1">
          둥둥아일랜드 개발 비하인드 스토리, 미공개 귀여운 원화, 그리고 운영진 일상을 소식지로 공유합니다.
        </p>
      </div>

      {!selectedNote ? (
        // GM NOTE INDEX BOARD VIEW
        <div className="bg-white border border-slate-850 rounded overflow-hidden">
          <div className="bg-slate-950 p-4 border-b border-slate-850">
            <span className="text-xs font-bold text-slate-100">GM둥곰의 둥둥아일랜드 수련 일지</span>
          </div>

          <div className="divide-y divide-slate-850">
            {GMNUTES.map((note) => (
              <div 
                key={note.id}
                onClick={() => {
                  setSelectedNoteId(note.id);
                  setLikes(note.likes);
                  setComments(note.comments);
                  setHasLiked(false);
                }}
                className="p-5 hover:bg-indigo-50/70 cursor-pointer transition-colors flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded overflow-hidden border border-slate-850 shrink-0 bg-slate-100 flex items-center justify-center text-2xl">
                  🐻
                </div>
                
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-indigo-600 px-1.5 py-0.5 rounded bg-indigo-50 border border-indigo-200">
                      GM노트
                    </span>
                    <span className="text-xs text-slate-400 font-mono">ID: {note.id}</span>
                  </div>

                  <h3 className="text-sm font-bold text-black hover:text-indigo-600 truncate hover:underline">
                    {note.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 line-clamp-1 truncate leading-tight font-medium">
                    {note.content}
                  </p>

                  <div className="flex items-center gap-4 text-[10px] text-slate-500 font-mono pt-1">
                    <span className="flex items-center gap-1">📅 {note.date}</span>
                    <span className="flex items-center gap-1">👁️ 조회수 {note.views}</span>
                    <span className="flex items-center gap-1">💬 댓글 {note.comments.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // GM NOTE COMPREHENSIVE DETAILED VIEW
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main content Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Back button */}
            <button 
              onClick={() => setSelectedNoteId(null)}
              className="px-3.5 py-1.5 text-xs text-slate-700 bg-white hover:bg-indigo-50 border border-slate-850 hover:border-indigo-200 rounded hover:text-indigo-600 flex items-center gap-1.5 transition-colors cursor-pointer font-bold shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-slate-400" />
              전체 일지 목록
            </button>

            {/* Portfolio rationale panel */}
            {portfolioMode && selectedNote.portfolioRationale && (
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded text-xs text-slate-200">
                <span className="font-bold text-yellow-800 flex items-center gap-1 mb-1">
                  <Sparkles className="w-4 h-4 text-yellow-600" /> [기획 의도 & CM 역량 코멘트]
                </span>
                <p className="text-slate-700 leading-relaxed font-semibold">
                  {selectedNote.portfolioRationale}
                </p>
              </div>
            )}

            {/* Actual GM Diary Reader */}
            <div className="bg-white border border-slate-850 rounded overflow-hidden">
              <div className="bg-slate-950 p-6 border-b border-slate-850">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-850 shrink-0">
                    <img 
                      src={IMAGES.gm_bear} 
                      alt="GM Bear Avatar" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-100">공식 {selectedNote.author}</span>
                    <span className="block text-[10px] text-slate-500 font-mono font-medium">
                      {selectedNote.date} | 조회수: {selectedNote.views} | 좋 아요: {likes}
                    </span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
                  {selectedNote.title}
                </h3>
              </div>

              <div className="p-6 sm:p-8 bg-white min-h-[260px] border-b border-slate-850">
                <div className="text-xs sm:text-sm text-black leading-relaxed font-sans">
                  {renderContentWithImages(selectedNote.content, selectedNote.images)}
                </div>
              </div>

              {/* Like action bar */}
              <div className="p-4 bg-slate-950 flex items-center justify-between">
                <button
                  id="gmnote-like-button"
                  onClick={handleLike}
                  className={`py-1.5 px-4 rounded text-xs font-bold font-sans flex items-center gap-2 cursor-pointer transition-all border ${
                    hasLiked 
                      ? 'bg-rose-600 text-white border-rose-700' 
                      : 'bg-white text-slate-300 border-slate-850 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-current text-white' : 'text-rose-500'}`} />
                  <span>글이 마음에 드셨나요? ({likes})</span>
                </button>

                <span className="text-[10px] text-slate-500 font-mono">둥둥아일랜드 운영팀</span>
              </div>
            </div>

            {/* Forum-style Comment list */}
            <div className="bg-white border border-slate-850 rounded p-6" id="gmnote-comment-section">
              <h4 className="text-xs font-bold text-slate-100 mb-4 flex items-center gap-2 uppercase tracking-wide">
                <MessageCircle className="w-4 h-4 text-indigo-600" /> 유저 덧글 피드백 ({comments.length}개)
              </h4>

              {/* Comment Form */}
              <form onSubmit={handleAddComment} className="flex gap-2 mb-6" id="gmnote-comment-form">
                <input
                  type="text"
                  placeholder="따뜻한 비판이나 칭찬 한 칸 남기기..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  className="flex-1 bg-white border border-slate-850 rounded px-3 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-indigo-600 rounded font-bold text-xs text-white hover:bg-indigo-700 cursor-pointer"
                >
                  등록
                </button>
              </form>

              {/* Render comments loop */}
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
                {comments.map((comment) => (
                  <div key={comment.id} className="p-3 bg-slate-950 border border-slate-850 rounded space-y-2">
                    <div className="flex items-center justify-between text-[11px] border-b border-slate-850 pb-1.5">
                      <span className="font-bold text-indigo-600">✨ {comment.user}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{comment.date}</span>
                    </div>

                    <p className="text-xs text-slate-200 text-left leading-relaxed font-medium">
                      {comment.content}
                    </p>

                    {/* GM Official Response (High Operational showcase) */}
                    {comment.gmReply ? (
                      <div className="p-3 bg-white rounded border border-purple-200 text-left space-y-1">
                        <div className="flex items-center gap-1 text-[10px] font-bold text-purple-700">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>GM 둥곰의 정안 메아리</span>
                        </div>
                        <p className="text-xs text-black leading-relaxed font-sans font-medium">
                          {comment.gmReply}
                        </p>
                      </div>
                    ) : (
                      portfolioMode && (
                        <div className="text-right">
                          <span className="text-[9px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                            🐾 CM 실시간 VOC 분석 적용 가능
                          </span>
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: GM's Profile Card (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white border border-slate-850 rounded p-6 text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-850 mx-auto mb-3 bg-slate-100">
                <img 
                  src={IMAGES.gm_bear} 
                  alt="GM Bear portrait" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-base font-bold text-slate-100 mb-1 flex items-center justify-center gap-1">
                GM 둥곰 🐻 <span className="bg-purple-100 text-purple-700 border border-purple-200 text-[9px] px-1.5 py-0.5 rounded font-mono font-bold">CHIEF CM</span>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                &quot;둥둥아일랜드 공식 커뮤니티의 소통 기조를 총괄하며 고객 감성 소통 방안을 전담하는 수호 GM팀입니다.&quot;
              </p>

              <div className="border-t border-slate-850 pt-3 space-y-2 text-xs text-slate-300 text-left">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">담당 업무</span>
                  <span className="font-bold text-slate-100">감성 동향 수렴 / 공지 일지화</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">동작 지표</span>
                  <span className="font-bold text-emerald-800">피드백 수치 리포팅 100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">소속</span>
                  <span className="font-bold text-indigo-700">둥둥미디어 헬프센터</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Zoom lightbox modal */}
      {lightboxUrl && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxUrl(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded bg-slate-900 border border-slate-700 shadow-2xl">
            <img 
              src={lightboxUrl} 
              alt="Expanded Zoom View" 
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[75vh] object-contain mx-auto"
            />
            <div className="p-3 bg-slate-950 text-center border-t border-slate-800 flex justify-between items-center px-4">
              <span className="text-[11px] text-slate-400 font-semibold">닫으려면 화면의 아무 곳이나 클릭해 주세요.</span>
              <button 
                onClick={() => setLightboxUrl(null)}
                className="px-3 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-xs font-bold text-black cursor-pointer"
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
