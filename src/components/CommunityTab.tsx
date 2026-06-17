import React, { useState } from 'react';
import { COMMUNITY_POSTS, IMAGES } from '../data';
import { CommunityPost } from '../types';
import { MessageCircle, Heart, Search, Eye, Sparkles, Pin, Send, User } from 'lucide-react';

interface CommunityTabProps {
  portfolioMode: boolean;
}

export default function CommunityTab({ portfolioMode }: CommunityTabProps) {
  const [posts, setPosts] = useState<CommunityPost[]>(COMMUNITY_POSTS);
  const [selectedPostId, setSelectedPostId] = useState<string>(COMMUNITY_POSTS[0].id);
  const [filter, setFilter] = useState<string>('전체');
  
  // States for new forum thread
  const [newTitle, setNewTitle] = useState<string>('');
  const [newAuthor, setNewAuthor] = useState<string>('예비합격정원사');
  const [newBody, setNewBody] = useState<string>('');
  const [newReplyText, setNewReplyText] = useState<string>('');

  const activePost = posts.find(p => p.id === selectedPostId) || posts[0];

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newBody.trim()) return;

    const newPost: CommunityPost = {
      id: `CP-NEW-${Date.now()}`,
      title: newTitle,
      author: newAuthor,
      date: new Date().toISOString().substring(0, 10),
      likes: 1,
      views: 12,
      content: newBody,
      replies: [],
      portfolioRationale: "지원자 기여글 예시입니다."
    };

    setPosts([newPost, ...posts]);
    setSelectedPostId(newPost.id);
    setNewTitle('');
    setNewBody('');
  };

  const handleAddReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReplyText.trim()) return;

    const nextPosts = posts.map((p) => {
      if (p.id === selectedPostId) {
        return {
          ...p,
          replies: [
            ...p.replies,
            {
              author: "CM 둥곰",
              content: newReplyText,
              date: "방금 전",
              isGM: true
            }
          ]
        };
      }
      return p;
    });

    setPosts(nextPosts);
    setNewReplyText('');
  };

  const filteredPosts = posts.filter(p => {
    if (filter === '인기') return p.likes > 20;
    if (filter === '공지') return p.isPinned;
    return true;
  });

  return (
    <div className="space-y-6" id="community-tab-container">
      
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-5">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          🎪 공식 토크 플라자 자유광장
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          정원사님들이 자유롭게 모여 호수 영지 배치 스크린샷과 모험 단상을 공유하는 따스한 소통 정원입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Bulletin board feed navigation (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Quick Filters */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-850 justify-between">
            {['전체', '인기', '공지'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filter === f
                    ? 'bg-slate-800 text-sky-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {f} 게시글
              </button>
            ))}
          </div>

          {/* List loops of posts */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 max-h-[460px] overflow-y-auto space-y-1">
            {filteredPosts.map((post) => {
              const isSelected = post.id === selectedPostId;
              return (
                <div
                  key={post.id}
                  id={`community-post-${post.id}`}
                  onClick={() => setSelectedPostId(post.id)}
                  className={`p-3.5 rounded-xl text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-950 border-l-4 border-l-indigo-500 shadow-md'
                      : 'hover:bg-slate-800/30'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 text-[10px]">
                    {post.isPinned && (
                      <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1 py-0.25 rounded font-extrabold flex items-center gap-0.5">
                        <Pin className="w-2.5 h-2.5 rotate-45" /> 베스트
                      </span>
                    )}
                    <span className="text-slate-500 font-mono">No.{post.id.split('-').pop()}</span>
                    <span className="text-slate-400 font-semibold ml-auto">{post.author}</span>
                  </div>

                  <h3 className={`text-xs sm:text-xs font-bold tracking-tight line-clamp-1 truncate text-left ${
                    isSelected ? 'text-white' : 'text-slate-300'
                  }`}>
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-500 font-mono">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-0.5"><Eye className="w-3 h-3" /> {post.views}</span>
                    <span className="flex items-center gap-0.5"><Heart className="w-3 h-3" /> {post.likes}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* New post creation block */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-left space-y-3 shadow-md">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block pl-1">
              📝 광장에 새 소문 쓰기 (Submit Free Post)
            </span>

            <form onSubmit={handleCreatePost} className="space-y-2.5 text-xs text-slate-300 font-sans" id="community-new-post-form">
              <input
                type="text"
                placeholder="게시물 피드백 제목..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
              <textarea
                rows={3}
                placeholder="건전한 비평과 사랑 가득한 내용으로 채워주세요."
                value={newBody}
                onChange={(e) => setNewBody(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 leading-relaxed"
              />
              <button
                type="submit"
                id="community-submit-post-btn"
                className="w-full py-2.5 rounded-lg bg-indigo-500 hover:bg-indigo-450 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                자유게시판 업로드하기 🐾
              </button>
            </form>
          </div>

        </div>

        {/* Right Column: Active Post full reader view & Pinned CM replies (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Portfolio rationale */}
          {portfolioMode && activePost.portfolioRationale && (
            <div className="bg-gradient-to-r from-indigo-950/45 to-purple-950/20 border border-indigo-500/30 p-4 rounded-xl flex flex-col gap-1.5 text-left">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs">
                <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />
                <span>[CM 포뮤니티 공감 덧글 케이스 해설]</span>
              </div>
              <p className="text-[11px] text-slate-200 leading-relaxed font-sans">
                {activePost.portfolioRationale}
              </p>
            </div>
          )}

          {/* Thread Reader view card */}
          <div className="bg-slate-90/80 border border-slate-800 rounded-2xl p-5 md:p-6 text-left space-y-4 shadow-xl" id="community-post-reader">
            <div className="border-b border-slate-800 pb-3">
              <div className="text-xs text-slate-500 font-mono mb-1.5 flex items-center gap-2 text-left">
                <span className="flex items-center gap-0.5 text-indigo-400 font-bold">
                  👤 {activePost.author}
                </span>
                <span>• {activePost.date}</span>
                <span>• 조회수: {activePost.views}</span>
              </div>
              
              <h2 className="text-base sm:text-lg font-bold text-white font-sans leading-snug">
                {activePost.title}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-850 whitespace-pre-line max-h-48 overflow-y-auto">
              {activePost.content}
            </p>

            {/* Render sub replies looping */}
            <div className="space-y-3 pt-3 border-t border-slate-800/65">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block pl-1">
                💬 덧글 파동 ({activePost.replies.length}개)
              </span>

              <div className="space-y-2.5 max-h-[160px] overflow-y-auto pr-1">
                {activePost.replies.map((rep, rIdx) => (
                  <div 
                    key={rIdx} 
                    className={`p-3 rounded-lg text-left text-xs ${
                      rep.isGM 
                        ? 'bg-purple-950/15 border-l-2 border-l-purple-500 border border-slate-850' 
                        : 'bg-slate-900/60 border border-slate-850'
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-slate-900/60 pb-1 mb-1.5 text-[10px]">
                      <span className={`font-bold flex items-center gap-1 ${rep.isGM ? 'text-purple-400' : 'text-slate-400'}`}>
                        {rep.isGM ? '🐻 [CM] 둥곰' : rep.author}
                      </span>
                      <span className="text-slate-500 font-mono">{rep.date}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed font-sans text-xs">
                      {rep.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recruiter mock reply form (Let recruiters test reply-handling!) */}
              <form onSubmit={handleAddReply} className="flex gap-2 pt-2 border-t border-slate-850" id="community-reply-sub-form">
                <input
                  type="text"
                  placeholder="GM 둥곰 이름으로 공식 댓글 수식 작성해 보기..."
                  value={newReplyText}
                  onChange={(e) => setNewReplyText(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-3.5 py-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg text-white font-bold text-xs flex items-center gap-1 hover:opacity-90 cursor-pointer"
                >
                  답변 <Send className="w-3 h-3" />
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
