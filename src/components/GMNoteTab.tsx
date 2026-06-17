import React, { useState } from 'react';
import { GMNUTES, IMAGES } from '../data';
import { GMComment } from '../types';
import { Heart, MessageCircle, Eye, Calendar, Sparkles, Send, ShieldCheck } from 'lucide-react';

interface GMNoteTabProps {
  portfolioMode: boolean;
}

export default function GMNoteTab({ portfolioMode }: GMNoteTabProps) {
  const [selectedNoteId, setSelectedNoteId] = useState<string>(GMNUTES[0].id);
  const [likes, setLikes] = useState<number>(GMNUTES[0].likes);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [newCommentText, setNewCommentText] = useState<string>('');
  const [comments, setComments] = useState<GMComment[]>(GMNUTES[0].comments);

  const activeNote = GMNUTES.find((n) => n.id === selectedNoteId) || GMNUTES[0];

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
      user: "우수정원사GM곰돌",
      content: newCommentText,
      date: new Date().toISOString().replace('T', ' ').substring(0, 19),
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  return (
    <div className="space-y-6" id="gmnote-tab-container">
      
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-5">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          📝 둥곰 소식지 (GM노트)
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          게임 개발 비하인드 스토리, 미공개 원화, 그리고 모험가님과의 깊은 일주일을 소통하는 일기장입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Note list & comments pane */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Portfolio rationale panel */}
          {portfolioMode && activeNote.portfolioRationale && (
            <div className="bg-gradient-to-r from-purple-950/40 to-indigo-950/20 border border-purple-500/30 p-4 rounded-2xl shadow-lg flex flex-col gap-2">
              <div className="flex items-center gap-2 text-purple-300 font-sans text-xs font-bold leading-none">
                <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
                <span>[CM 포트폴리오 감성 소통 노트 분석]</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                {activeNote.portfolioRationale}
              </p>
            </div>
          )}

          {/* Actual GM Diary Reader */}
          <div className="bg-slate-90/80 border border-slate-800 rounded-2xl shadow-xl p-5 md:p-8 text-left space-y-6" id="gmnote-reader-pane">
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-700">
                  <img 
                    src={IMAGES.gm_bear} 
                    alt="GM Bear Avatar" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-200">{activeNote.author}</span>
                  <span className="block text-[10px] text-slate-500 font-mono">
                    {activeNote.date} | 조회수: {activeNote.views} | 좋 아요: {likes}
                  </span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-white leading-tight font-sans">
                {activeNote.title}
              </h3>
            </div>

            {/* Note Content */}
            <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {activeNote.content}
            </div>

            {/* Like and share buttons */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/85">
              <button
                id="gmnote-like-button"
                onClick={handleLike}
                className={`py-2 px-5 rounded-full text-xs font-bold font-sans flex items-center gap-2 cursor-pointer transition-all ${
                  hasLiked 
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' 
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
                <span>정성 가득 하트 날리기 ! ({likes})</span>
              </button>
            </div>
          </div>

          {/* Forum-style Comment list */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-md p-6" id="gmnote-comment-section">
            <h4 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-sky-400" /> 댓글 한 칸 모음 ({comments.length}개)
            </h4>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="flex gap-2 mb-6" id="gmnote-comment-form">
              <input
                type="text"
                placeholder="둥곰 소식지에 의견 한 칸 채우기..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-purple-500/55 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl font-bold text-xs sm:text-sm text-white flex items-center gap-2 hover:opacity-90 cursor-pointer"
              >
                등록 <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Render comments loop */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
              {comments.map((comment) => (
                <div key={comment.id} className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-slate-900 pb-2">
                    <span className="font-bold text-indigo-400">✨ {comment.user}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{comment.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 text-left leading-relaxed">
                    {comment.content}
                  </p>

                  {/* GM Official Response (High Operational showcase) */}
                  {comment.gmReply ? (
                    <div className="p-3.5 bg-slate-900 rounded-lg border-l-2 border-l-purple-500 text-left space-y-1.5">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-purple-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>GM 둥곰의 따스한 메아리</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {comment.gmReply}
                      </p>
                    </div>
                  ) : (
                    // Give option in portfolio to mock reply
                    portfolioMode && (
                      <div className="text-right">
                        <span className="text-[9px] text-emerald-400 hover:underline cursor-pointer bg-slate-900 px-2 py-1 rounded border border-slate-800">
                          🐾 CM 답안 시뮬레이터 구성 완료
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
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-lg">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500 mx-auto mb-4 bg-slate-850">
              <img 
                src={IMAGES.gm_bear} 
                alt="GM Bear portrait" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-bold text-white mb-1 flex items-center justify-center gap-1">
              GM 둥곰 🐻 <span className="bg-purple-500/20 text-purple-400 border border-purple-500/30 text-[9px] px-1 py-0.5 rounded font-mono font-bold">CHIEF CM</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              &quot;둥둥아일랜드의 온갖 소식과 세입자 곰돌이들의 불면증을 연구하는 수호 GM입니다.&quot;
            </p>

            <div className="border-t border-slate-800 pt-4 space-y-2 text-xs text-slate-300 text-left">
              <div className="flex justify-between">
                <span className="text-slate-500">담당 업무</span>
                <span className="font-semibold text-white">커뮤니티/건의/CS 패치</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">소통 지표</span>
                <span className="font-semibold text-emerald-400">실시간 피드백 100% 반영</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">사랑하는 간식</span>
                <span className="font-semibold text-sky-400">조팝나무 꿀 스무디 🍹</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
