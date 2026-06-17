export interface Notice {
  id: string;
  category: '일반' | '점검' | '긴급' | '업데이트';
  title: string;
  date: string;
  views: number;
  content: string;
  isImportant?: boolean;
  portfolioRationale?: string; // Commentary for recruiters in portfolio mode
}

export interface GameEvent {
  id: string;
  title: string;
  type: '출석' | '성장' | '핫타임';
  period: string;
  status: '진행중' | '종료';
  thumbnailUrl: string;
  content: string;
  attendRewards?: string[];
  portfolioRationale?: string;
}

export interface GMNote {
  id: string;
  title: string;
  author: string;
  date: string;
  views: number;
  likes: number;
  content: string;
  comments: GMComment[];
  portfolioRationale?: string;
}

export interface GMComment {
  id: string;
  user: string;
  avatarUrl?: string;
  content: string;
  date: string;
  gmReply?: string;
}

export interface FAQ {
  id: string;
  category: '계정' | '결제' | '게임플레이' | '오류/버그';
  question: string;
  answer: string;
  portfolioRationale?: string;
}

export interface Inquiry {
  id: string;
  category: string;
  title: string;
  content: string;
  userEmail: string;
  date: string;
  status: '접수대기' | '답변완료';
  answerText?: string;
  answeredDate?: string;
}

export interface Sanction {
  id: string;
  title: string;
  date: string;
  targetCount: number;
  reason: '핵/비인가 프로그램 사용' | '버그 악용' | '작업장 악용' | '채팅 폭언/욕설' | '비정상 결제';
  content: string;
  list: { username: string; penalty: string; duration: string }[];
  portfolioRationale?: string;
}

export interface PatchNote {
  id: string;
  version: string;
  date: string;
  title: string;
  summary: string;
  sections: { title: string; items: string[] }[];
  cmComment: string;
  portfolioRationale?: string;
}

export interface CommunityPost {
  id: string;
  title: string;
  author: string;
  date: string;
  likes: number;
  views: number;
  isActive?: boolean;
  content: string;
  replies: { author: string; content: string; date: string; isGM?: boolean }[];
  isPinned?: boolean;
  portfolioRationale?: string;
}

export interface PortfolioMeta {
  applicantName: string;
  desiredRole: string; // "게임 운영 (CM) / 서비스 GM"
  contact: {
    email: string;
    phone: string;
    github?: string;
    blog?: string;
  };
  philosophies: { title: string; desc: string; icon: string }[];
  skills: { category: string; list: { name: string; percentage: number; desc: string }[] }[];
}
