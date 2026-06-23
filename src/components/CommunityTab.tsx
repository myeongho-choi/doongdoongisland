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
  const [newAuthor, setNewAuthor] = useState<string>('초보정원사');
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
      portfolioRationale: "정원사가 작성한 실시간 모의 질문 자료입니다."
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
    <div className="space-y-6 font-sans text-left" id="community-tab-container">
      
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
          🎪 공식 토크 플라자 (자유광장)
        </h2>
        <p className="text-slate-500 text-xs mt-1">
          둥둥아일랜드의 유저 둥이님들이 모여 자유로운 인게임 배치 팁, 조언, 일상의 이야기를 공유하는 커뮤니티 게시판입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Bulletin board feed navigation (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Quick Filters */}
          <div className="flex bg-slate-100 p-1 rounded border border-slate-850 justify-between">
            {['전체', '인기', '공지'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  filter === f
                    ? 'bg-slate-950 text-indigo-600 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {f} 게시물
              </button>
            ))}
          </div>

          {/* List loops of posts */}
          <div className="bg-white border border-slate-855 rounded overflow-hidden max-h-[460px] overflow-y-auto divide-y divide-slate-855">
            {filteredPosts.map((post) => {
              const isSelected = post.id === selectedPostId;
              return (
                <div
                  key={post.id}
                  id={`community-post-${post.id}`}
                  onClick={() => setSelectedPostId(post.id)}
                  className={`p-4 text-left cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-slate-950 font-bold'
                      : 'hover:bg-indigo-50/70'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 text-[10px]">
                    {post.isPinned && (
                      <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-1 py-0.25 rounded font-extrabold flex items-center gap-0.5 scale-95 leading-none">
                        <Pin className="w-2.5 h-2.5 rotate-45" /> 베스트
                      </span>
                    )}
                    <span className="text-slate-500 font-mono">No.{post.id.split('-').pop()}</span>
                    <span className="text-slate-400 font-semibold ml-auto">{post.author}</span>
                  </div>

                  <h3 className={`text-xs font-bold leading-normal text-left truncate ${
                    isSelected ? 'text-indigo-400' : 'text-slate-800'
                  }`}>
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-550 font-mono">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-0.5 font-medium"><Eye className="w-3 h-3 text-slate-400" /> {post.views}회</span>
                    <span className="flex items-center gap-0.5 font-medium"><Heart className="w-3 h-3 text-rose-500" /> {post.likes}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* New post creation block */}
          <div className="bg-white border border-slate-850 rounded p-4 text-left space-y-3">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block pl-0.5">
              📝 자유 보드에 내 단상 올리기 (Submit Thread)
            </span>

            <form onSubmit={handleCreatePost} className="space-y-2.5 text-xs text-slate-300 font-sans" id="community-new-post-form">
              <input
                type="text"
                placeholder="새로운 화제 제목..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
                className="w-full bg-white border border-slate-855 rounded px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-500"
              />
              <textarea
                rows={3}
                placeholder="건전하고 정중한 내용으로 다른 정원사들과의 예절을 지켜 대화해주세요."
                value={newBody}
                onChange={(e) => setNewBody(e.target.value)}
                required
                className="w-full bg-white border border-slate-855 rounded p-3 text-xs text-slate-800 focus:outline-none focus:border-indigo-500 leading-relaxed font-sans"
              />
              <button
                type="submit"
                id="community-submit-post-btn"
                className="w-full py-2 bg-indigo-600 rounded text-white font-bold text-xs hover:bg-indigo-700 cursor-pointer"
              >
                광장 게시판에 등록하기 🐾
              </button>
            </form>
          </div>

        </div>

        {/* Right Column: Active Post full reader view & Pinned CM replies (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Portfolio rationale */}
          {portfolioMode && activePost.portfolioRationale && (
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded text-xs text-slate-200">
              <div className="flex items-center gap-2 text-yellow-850 font-bold mb-1">
                <Sparkles className="w-4 h-4 text-yellow-600" />
                <span>[CM 전문성: 여론 동향 분석 및 인게임 소통 역량]</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-semibold">
                {activePost.portfolioRationale}
              </p>
            </div>
          )}

          {/* Thread Reader view card */}
          <div className="bg-white border border-slate-850 rounded overflow-hidden" id="community-post-reader">
            <div className="bg-slate-950 p-5 border-b border-slate-850 text-left">
              <div className="text-xs text-slate-500 font-mono mb-1.5 flex items-center gap-2 text-left">
                <span className="flex items-center gap-1 text-indigo-400 font-bold">
                  👤 {activePost.author}
                </span>
                <span>• {activePost.date}</span>
                <span>• 조회수: {activePost.views}회</span>
              </div>
              
              <h2 className="text-base sm:text-lg font-bold text-slate-100 font-sans leading-snug">
                {activePost.title}
              </h2>
            </div>

            <p className="p-6 text-sm sm:text-base text-slate-850 font-semibold leading-relaxed bg-white border-b border-slate-850 whitespace-pre-line max-h-48 overflow-y-auto text-left font-sans">
              {activePost.content}
            </p>

            {/* Render sub replies looping */}
            <div className="p-5 sm:p-6 bg-white space-y-4">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                💬 덧글 응답 파밀랴 ({activePost.replies.length}개)
              </span>

              <div className="space-y-2.5 max-h-[160px] overflow-y-auto pr-1">
                {activePost.replies.map((rep, rIdx) => (
                  <div 
                    key={rIdx} 
                    className={`p-3 rounded text-left text-xs ${
                      rep.isGM 
                        ? 'bg-purple-50 border border-purple-200' 
                        : 'bg-slate-950 border border-slate-850'
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-slate-800/10 pb-1 mb-1.5 text-[10px]">
                      <span className={`font-bold flex items-center gap-1 ${rep.isGM ? 'text-purple-700' : 'text-slate-400'}`}>
                        {rep.isGM ? '🐻 [CM] 공식둥곰' : rep.author}
                      </span>
                      <span className="text-slate-500 font-mono">{rep.date}</span>
                    </div>
                    <p className={`leading-relaxed font-sans text-xs font-semibold ${
                      rep.isGM ? 'text-purple-950 font-bold' : 'text-slate-200'
                    }`}>
                      {rep.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recruiter mock reply form (Let recruiters test reply-handling!) */}
              <form onSubmit={handleAddReply} className="flex gap-2 pt-2 border-t border-slate-850" id="community-reply-sub-form">
                <input
                  type="text"
                  placeholder="공식 CM둥곰의 소통 매아리 이름으로 답변 달기..."
                  value={newReplyText}
                  onChange={(e) => setNewReplyText(e.target.value)}
                  className="flex-1 bg-white border border-slate-855 rounded px-3 py-1.5 text-xs text-slate-800"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-indigo-600 rounded text-white font-bold text-xs flex items-center gap-1 hover:bg-indigo-700 cursor-pointer"
                >
                  답변 등록
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
