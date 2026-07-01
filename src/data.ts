import { Notice, GameEvent, GMNote, FAQ, Sanction, PatchNote, CommunityPost, PortfolioMeta } from './types';
import heroImage from './assets/images/dungdung_bright_hero_1781852722249.jpg';
import gardenImage from './assets/images/garden_bright_slide_1781853366023.jpg';
import cleanImage from './assets/images/clean_bright_slide_1781853381633.jpg';
import gmBearImage from './assets/images/gm_bear_1781679285328.jpg';
import logoImage from './assets/images/doongdoong_logo_1781680038931.jpg';
import decoUiImage from './assets/images/deco_mode_ui_1782124598065.jpg';
import decoSelectImage from './assets/images/deco_mode_select_1782124615851.jpg';
import decoActionsImage from './assets/images/deco_mode_actions_1782124632692.jpg';
import group28Image from './assets/images/Group 28.png';
import group29Image from './assets/images/Group 29.png';
import group30Image from './assets/images/Group 30123213.png';
import shopUiImage from './assets/images/shopUI.png';
import shopUi01Image from './assets/images/shopUI01.png';
import group110Image from './assets/images/Group110.png';
import group111Image from './assets/images/Group111.png';

// Let's store the image paths here for ease of import
export const IMAGES = {
  hero: heroImage,
  hero2: gardenImage,
  hero3: cleanImage,
  gm_bear: gmBearImage,
  logo: logoImage,
  deco_ui: decoUiImage,
  deco_select: decoSelectImage,
  deco_actions: decoActionsImage,
  group28: group28Image,
  group29: group29Image,
  group30: group30Image,
  shopUI: shopUiImage,
  shopUI01: shopUi01Image,
  group110: group110Image,
  group111: group111Image,
};

export const PORTFOLIO_META: PortfolioMeta = {
  applicantName: "김두둥",
  desiredRole: "게임 서비스 운영 및 CM (Community Manager)",
  contact: {
    email: "gs45080@gmail.com",
    phone: "010-1234-5678",
    github: "https://github.com/kimchanghyun325",
  },
  philosophies: [
    {
      title: "신뢰와 투명성 (Transparency)",
      desc: "지연 점검이나 치명적인 이슈가 발생할수록 정확한 경위와 투명한 사후 조치, 타임라인을 제공하여 커뮤니티의 신뢰 붕괴를 예방합니다.",
      icon: "Shield"
    },
    {
      title: "공감과 유연성 (Empathy)",
      desc: "단순 정책 전달에 그치지 않고, 유저의 시점에서 불편함을 헤아린 친화적인 GM 코멘트 문체 및 이벤트를 설계하여 유저 만족도를 고취시킵니다.",
      icon: "Heart"
    },
    {
      title: "신속한 리스크 감지 (Proactive)",
      desc: "이슈 발생 초기 15분 골든타임을 사수하고 여론 모니터링 탬플릿을 활용해 즉각적인 채널 전파 및 추가 유입 차단으로 2차 피해를 최소화합니다.",
      icon: "Zap"
    }
  ],
  skills: [
    {
      category: "우수 전문 역량",
      list: [
        { name: "공지사항 & 업데이트 기획서 작성", percentage: 95, desc: "비즈니스 문맥과 유저 눈높이를 고려한 입체적 패치노트 작성 및 위기 대응 공지 수립 능력" },
        { name: "위기 관리 & 긴급 대응 (CS CRM)", percentage: 90, desc: "긴급 이슈 발생 시 로그 추적 공조, 가짜뉴스 확산 방지 및 채널별 모니터링 대응 프로세스 최적화" },
        { name: "커뮤니티 이벤트 기획", percentage: 88, desc: "유저 바이럴 활성화를 위한 참여형 포럼 이벤트, SNS 연동 인증형 이벤트 기획 및 실행" },
        { name: "고객 문의 처리 (CS Matrix)", percentage: 92, desc: "VOC(Voive Of Customer) 분석을 통한 자주 묻는 질문(FAQ)의 정기 업데이트 및 친절하고 명료한 매뉴얼 답변 수립" }
      ]
    }
  ]
};

export const NOTICES: Notice[] = [
  {
    id: "N-01",
    category: "업데이트",
    title: "[업데이트] v0.0.20 수정 사항 안내",
    date: "2025-11-20",
    views: 2540,
    isImportant: false,
    portfolioRationale: "v0.0.20 초기 수정 공지입니다. 상점 및 창고 드롭다운, 조작 및 음향 기초 사용 편의성 보정을 유려한 한글 포맷으로 안내했습니다.",
    content: `<div style="line-height:1.75; color:#333; font-size:16px;">

  <h1 style="font-size:28px; margin-bottom:24px; color:#222;">
    v0.0.20 업데이트 안내
  </h1>

  <p>
    안녕하세요. 둥둥아일랜드 운영팀입니다.
  </p>

  <p>
    더 편안한 플레이 환경을 제공하기 위해 <strong>v0.0.20 업데이트</strong>가 진행되었습니다.
  </p>

  <p>
    이번 업데이트에서는 상점, 창고, 낚시, 꾸미기 모드, 설정창 등 플레이 중 자주 이용하는 기능을 중심으로 사용성을 개선했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    주요 변경 사항
  </h2>

  <div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
    <p style="margin-top:0; font-weight:600;">
      업데이트 요약
    </p>
    <ul style="margin:0; padding-left:20px;">
      <li>상점 및 창고 UI 개선</li>
      <li>낚시 애니메이션 개선</li>
      <li>꾸미기 모드 배치 사용성 개선</li>
      <li>설정창 사운드 조작 안정화</li>
    </ul>
  </div>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    상점 및 창고 이용 개선
  </h2>

  <p>
    상점과 창고를 이용하는 과정에서 필요한 정보를 더 쉽게 확인할 수 있도록 UI를 개선했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>상점 목록을 더 쉽게 확인할 수 있도록 스크롤바가 항상 표시되도록 변경했습니다.</li>
    <li>아이템 수가 적게 표시될 때도 화면 구성이 어색하지 않도록 슬롯 위치를 조정했습니다.</li>
    <li>구매 확인 창에서 아이템 정보를 더 쉽게 알아볼 수 있도록 아이콘 표시를 개선했습니다.</li>
    <li>창고에서 빈 슬롯과 물고기 설명을 더 편하게 확인할 수 있도록 UI를 수정했습니다.</li>
  </ul>

  <p>
    플레이어가 상점과 창고를 반복해서 이용하는 과정에서 원하는 정보를 더 빠르게 확인할 수 있도록 개선하는 데 초점을 맞췄습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    낚시 동작 개선
  </h2>

  <p>
    낚시 진행 중 캐릭터 동작이 더 자연스럽게 보일 수 있도록 애니메이션을 개선했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>낚싯대를 던지는 동작이 더 자연스럽게 보이도록 애니메이션을 추가했습니다.</li>
    <li>낚시 과정에서 어색하게 이어지던 일부 동작을 수정했습니다.</li>
  </ul>

  <p>
    낚시는 둥둥아일랜드의 기본 플레이 흐름과 연결되는 콘텐츠인 만큼, 조작 과정이 더 부드럽게 느껴질 수 있도록 다듬었습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    꾸미기 모드 사용성 개선
  </h2>

  <p>
    섬을 꾸미는 과정에서 장식물을 더 편하게 배치할 수 있도록 꾸미기 모드 사용성을 개선했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>장식물을 배치할 때 위치를 더 쉽게 맞출 수 있도록 배치 방식을 조정했습니다.</li>
    <li>배치 중 오브젝트가 화면 밖으로 벗어나지 않도록 수정했습니다.</li>
  </ul>

  <p>
    꾸미기 모드는 플레이어가 직접 섬의 분위기를 만들어가는 콘텐츠인 만큼, 배치 과정에서 발생할 수 있는 불편함을 줄이는 방향으로 개선했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    설정창 조작 안정화
  </h2>

  <p>
    사운드 설정을 더 안정적으로 조작할 수 있도록 설정창 기능을 수정했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>사운드 조절 슬라이더가 정상적으로 작동하도록 수정했습니다.</li>
    <li>음소거 버튼이 의도한 대로 동작하도록 개선했습니다.</li>
  </ul>

  <p>
    플레이 환경에 맞춰 사운드를 조절하는 과정에서 불편함이 없도록 설정창 동작을 점검했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    앞으로의 개선 방향
  </h2>

  <p>
    앞으로도 둥둥아일랜드를 더 쾌적하게 즐기실 수 있도록 플레이 중 자주 이용하는 기능을 꾸준히 점검하고 개선해 나가겠습니다.
  </p>

  <p>
    섬지기 여러분이 낚시와 꾸미기를 더 편안하게 즐길 수 있도록 작은 부분까지 살피겠습니다.
  </p>

  <p style="margin-top:28px;">
    감사합니다.
  </p>

</div>`
  },
  {
    id: "N-02",
    category: "업데이트",
    title: "[업데이트] MVP 빌드 적용 안내",
    date: "2025-12-05",
    views: 2890,
    isImportant: false,
    portfolioRationale: "초기 MVP 테스트용 코어 빌드 롤아웃 안내서입니다. 구조화된 표 및 불릿 포인트를 활용했습니다.",
    content: `<div style="line-height:1.75; color:#333; font-size:16px;">

  <h1 style="font-size:28px; margin-bottom:24px; color:#222;">
    MVP 빌드 업데이트 안내
  </h1>

  <p>
    안녕하세요. 둥둥아일랜드 운영팀입니다.
  </p>

  <p>
    둥둥아일랜드 <strong>MVP 빌드 업데이트</strong>가 적용되었습니다.
  </p>

  <p>
    이번 업데이트에서는 섬을 꾸미고 아이템을 관리하는 과정이 더 편해질 수 있도록 보관함, 오브젝트 상호작용, 배치 기능을 중심으로 개선했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    주요 변경 사항
  </h2>

  <div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
    <p style="margin-top:0; font-weight:600;">
      업데이트 요약
    </p>
    <ul style="margin:0; padding-left:20px;">
      <li>보관함 업그레이드 기능 추가</li>
      <li>섬 오브젝트 상호작용 개선</li>
      <li>꾸미기 모드 오류 수정</li>
      <li>시간 및 날씨 변화 표현 추가</li>
    </ul>
  </div>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    보관함 업그레이드 기능 추가
  </h2>

  <p>
    아이템을 더 편하게 관리할 수 있도록 보관함 업그레이드 기능을 추가했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>골드를 사용해 보관함을 업그레이드할 수 있습니다.</li>
    <li>골드가 부족할 경우 업그레이드가 진행되지 않도록 안내 메시지가 표시됩니다.</li>
    <li>보관함 UI 일부를 수정해 아이템을 더 편하게 확인할 수 있도록 개선했습니다.</li>
  </ul>

  <p>
    보관함은 꾸미기 아이템과 여러 보유 아이템을 확인하는 공간인 만큼, 아이템 관리 흐름이 더 자연스럽게 이어질 수 있도록 개선했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    섬 오브젝트 상호작용 개선
  </h2>

  <p>
    섬에 배치된 오브젝트를 더 쉽게 조작할 수 있도록 상호작용 기능을 개선했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>섬에 배치된 3D 오브젝트를 클릭하면 상호작용 버튼이 표시되도록 변경했습니다.</li>
    <li>섬에 배치된 오브젝트를 회수할 수 있는 기능을 추가했습니다.</li>
  </ul>

  <p>
    배치한 오브젝트를 다시 관리하거나 정리해야 하는 상황에서 더 편하게 조작할 수 있도록 구성했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    꾸미기 모드 오류 수정
  </h2>

  <p>
    꾸미기 모드를 이용하는 과정에서 발생하던 일부 오류를 수정했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>회수, 초기화, 저장 버튼 등 배치 상단 버튼에서 발생하던 일부 오류를 수정했습니다.</li>
    <li>배치 과정에서 더 안정적으로 조작할 수 있도록 관련 기능을 점검했습니다.</li>
  </ul>

  <p>
    꾸미기 모드는 플레이어가 직접 섬의 분위기를 만들어가는 콘텐츠인 만큼, 배치 과정에서 조작 흐름이 끊기지 않도록 안정성을 확인했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    환경 변화 표현 추가
  </h2>

  <p>
    시간이나 날씨 변화에 따라 화면에서 상태 변화를 더 쉽게 확인할 수 있도록 관련 이미지를 추가했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>시간 변화에 따른 화면 표현을 추가했습니다.</li>
    <li>날씨 변화에 따른 상태 표현을 확인할 수 있도록 관련 이미지를 반영했습니다.</li>
  </ul>

  <p>
    섬의 분위기 변화가 화면에서 더 잘 느껴질 수 있도록 환경 표현 요소를 보강했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    안내 사항
  </h2>

  <p>
    이번 MVP 빌드는 정식 서비스 전 플레이 흐름과 기본 기능을 점검하기 위한 버전입니다.
  </p>

  <p>
    플레이 중 불편한 점이나 개선이 필요한 부분이 있다면 공식 채널을 통해 의견을 보내주세요.
  </p>

  <p>
    보내주신 의견은 이후 업데이트와 개선 작업에 참고하겠습니다.
  </p>

  <p style="margin-top:28px;">
    감사합니다.
  </p>

</div>`
  },
  {
    id: "N-03",
    category: "업데이트",
    title: "[업데이트] 신규 생활 콘텐츠 및 상점 개선 안내",
    date: "2026-02-12",
    views: 3120,
    isImportant: false,
    portfolioRationale: "요리 라이프사이클 및 호수 지형 개선 핵심 안내서입니다. 수집-소비형 밸런싱의 가독성을 도모했습니다.",
    content: `<div style="line-height:1.75; color:#333; font-size:16px;">

  <h1 style="font-size:28px; margin-bottom:24px; color:#222;">
    생활 콘텐츠 및 상점 개선 업데이트 안내
  </h1>

  <p>
    안녕하세요. 둥둥아일랜드 운영팀입니다.
  </p>

  <p>
    둥둥아일랜드에 새로운 생활 콘텐츠와 상점 개선 업데이트가 적용되었습니다.
  </p>

  <p>
    이번 업데이트에서는 요리, 먹기, 물고기 판매 기능이 추가되었으며, 호수와 상점 이용 과정도 더 편하게 다듬었습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    주요 변경 사항
  </h2>

  <div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
    <p style="margin-top:0; font-weight:600;">
      업데이트 요약
    </p>
    <ul style="margin:0; padding-left:20px;">
      <li>요리 및 먹기 기능 추가</li>
      <li>요리 창고 UI 추가</li>
      <li>물고기 판매 기능 추가</li>
      <li>호수 공간 개선</li>
      <li>상점 UI 및 상품 구조 개선</li>
    </ul>
  </div>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    요리와 먹기 기능 추가
  </h2>

  <p>
    플레이 과정에서 획득한 재료와 아이템을 활용할 수 있도록 요리와 먹기 기능을 추가했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>플레이어가 요리를 만들고 먹을 수 있는 기능을 추가했습니다.</li>
    <li>요리 관련 아이템을 보관할 수 있는 요리 창고 UI를 추가했습니다.</li>
    <li>플레이 중 음식과 관련된 상태를 확인할 수 있도록 관련 기능을 구현했습니다.</li>
  </ul>

  <p>
    이번 기능 추가를 통해 낚시와 아이템 관리에서 이어지는 생활 콘텐츠 흐름을 조금 더 다양하게 경험할 수 있습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    물고기 판매 기능 추가
  </h2>

  <p>
    낚시로 획득한 물고기를 활용할 수 있도록 물고기 판매 기능을 추가했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>낚시로 획득한 물고기를 판매할 수 있는 기능을 추가했습니다.</li>
    <li>보유한 물고기를 활용해 골드를 얻을 수 있도록 플레이 흐름을 개선했습니다.</li>
  </ul>

  <p>
    이제 낚시로 얻은 물고기를 판매해 골드를 확보하고, 확보한 골드를 다시 상점 이용이나 섬 꾸미기에 활용할 수 있습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    호수 공간 개선
  </h2>

  <p>
    호수 공간이 더 자연스럽게 보일 수 있도록 배경 구조와 관련 요소를 정리했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>호수 배경 구조를 정리해 공간이 더 자연스럽게 보이도록 수정했습니다.</li>
    <li>호수와 관련된 꾸미기 기능을 확장할 수 있도록 기반 작업을 진행했습니다.</li>
  </ul>

  <p>
    호수는 낚시와 섬 분위기를 함께 보여주는 공간인 만큼, 이후 꾸미기 콘텐츠와도 자연스럽게 연결될 수 있도록 개선했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    상점 UI 개선
  </h2>

  <p>
    상점에서 필요한 아이템을 더 쉽게 확인하고 구매할 수 있도록 UI와 상품 구조를 개선했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>상점에서 아이템을 더 쉽게 확인하고 구매할 수 있도록 UI를 수정했습니다.</li>
    <li>아이템 정렬과 카테고리 구분 방식을 개선했습니다.</li>
    <li>코스튬, 낚시, 레시피 아이템 구매 기능을 위한 상점 구조를 정리했습니다.</li>
  </ul>

  <p>
    아이템 종류가 늘어나도 원하는 상품을 더 빠르게 찾을 수 있도록 상점 이용 흐름을 다듬었습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    업데이트 안내
  </h2>

  <p>
    이번 업데이트를 통해 낚시로 얻은 물고기를 판매하거나 요리에 활용할 수 있게 되면서, 둥둥아일랜드의 플레이 흐름이 한층 다양해졌습니다.
  </p>

  <p>
    낚시, 판매, 요리, 상점, 꾸미기로 이어지는 흐름이 더 자연스럽게 연결될 수 있도록 앞으로도 관련 기능을 계속 점검하겠습니다.
  </p>

  <p>
    둥둥아일랜드에서 더 많은 생활 콘텐츠를 즐기실 수 있도록 꾸준히 개선해 나가겠습니다.
  </p>

  <p style="margin-top:28px;">
    감사합니다.
  </p>

</div>`
  },
  {
    id: "N-04",
    category: "점검",
    title: "[점검] 퀘스트 및 도감 기능 업데이트를 위한 정기 점검 안내",
    date: "2026-04-15",
    views: 3450,
    isImportant: true,
    portfolioRationale: "점검 마일스톤 공지입니다. 예정된 점검 일정과 패치 세부 항목을 투명하게 사전에 정렬해 점검 리스크를 완화시킵니다.",
    content: `<div style="line-height:1.75; color:#333; font-size:16px;">

  <h1 style="font-size:28px; margin-bottom:24px; color:#222;">
    정기 점검 안내
  </h1>

  <p>
    안녕하세요. 둥둥아일랜드 운영팀입니다.
  </p>

  <p>
    퀘스트와 도감 기능 업데이트를 위해 정기 점검이 진행될 예정입니다.
  </p>

  <p>
    점검 중에는 게임 접속 및 플레이가 불가능하오니 이용에 참고 부탁드립니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    점검 일정
  </h2>

  <div style="background:#fff7ed; border-radius:12px; padding:18px 22px; margin:20px 0;">
    <ul style="margin:0; padding-left:20px;">
      <li><strong>점검 일시:</strong> 2026년 4월 15일 수요일 09:00 ~ 13:00</li>
      <li><strong>점검 시간:</strong> 총 4시간</li>
      <li><strong>점검 영향:</strong> 게임 접속 및 플레이 불가</li>
    </ul>
  </div>

  <p>
    점검 시작 전에는 안전한 데이터 저장을 위해 게임을 종료해 주시기 바랍니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    업데이트 예정 내용
  </h2>

  <div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
    <p style="margin-top:0; font-weight:600;">
      업데이트 요약
    </p>
    <ul style="margin:0; padding-left:20px;">
      <li>퀘스트 기능 추가</li>
      <li>도감 화면 개선</li>
      <li>물고기 최고 기록 확인 기능 추가</li>
      <li>물고기 연출 개선</li>
    </ul>
  </div>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    퀘스트 기능 추가
  </h2>

  <p>
    플레이 목표를 더 쉽게 확인할 수 있도록 퀘스트 기능이 추가됩니다.
  </p>

  <ul style="padding-left:20px;">
    <li>플레이 목표를 확인할 수 있는 퀘스트 기능이 추가됩니다.</li>
    <li>낚시 플레이와 연결된 퀘스트를 진행할 수 있습니다.</li>
    <li>퀘스트 진행 상황과 보상을 확인할 수 있는 UI가 추가됩니다.</li>
  </ul>

  <p>
    이번 퀘스트 기능을 통해 처음 게임을 시작한 플레이어도 다음 목표를 확인하며 자연스럽게 플레이를 이어갈 수 있도록 준비했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    도감 기능 개선
  </h2>

  <p>
    낚시로 획득한 물고기 정보를 더 편하게 확인할 수 있도록 도감 화면이 개선됩니다.
  </p>

  <ul style="padding-left:20px;">
    <li>물고기 정보를 더 쉽게 확인할 수 있도록 도감 화면이 개선됩니다.</li>
    <li>물고기 최고 기록을 확인할 수 있는 기능이 추가됩니다.</li>
    <li>도감 정렬과 카테고리 버튼이 더 보기 쉽게 수정됩니다.</li>
  </ul>

  <p>
    수집한 물고기 정보를 한눈에 확인하고, 기록을 남기며 낚시의 재미를 더 느낄 수 있도록 도감 기능을 다듬었습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    물고기 연출 개선
  </h2>

  <p>
    호수 화면에서 물고기가 더 자연스럽게 보일 수 있도록 연출 요소가 개선됩니다.
  </p>

  <ul style="padding-left:20px;">
    <li>물고기의 움직임이 더 자연스럽게 보이도록 애니메이션이 추가됩니다.</li>
    <li>호수 화면에서 물고기가 더 자연스럽게 표시되도록 개선됩니다.</li>
  </ul>

  <p>
    낚시 콘텐츠와 호수 공간이 더 생동감 있게 느껴질 수 있도록 물고기 움직임과 표시 방식을 점검했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    점검 안내
  </h2>

  <p>
    점검 시간 동안에는 게임 접속 및 플레이가 불가능합니다.
  </p>

  <p>
    점검이 시작되기 전 안전한 데이터 저장을 위해 게임을 종료해 주시기 바랍니다.
  </p>

  <p>
    더 나은 플레이 환경을 제공할 수 있도록 꼼꼼히 점검하겠습니다.
  </p>

  <p style="margin-top:28px;">
    감사합니다.
  </p>

</div>`
  },
  {
    id: "N-05",
    category: "업데이트",
    title: "[업데이트] OBT 3차 빌드 업데이트 안내",
    date: "2026-06-12",
    views: 4120,
    isImportant: false,
    portfolioRationale: "OBT 3차 신규 피처 패키지 배포 전경입니다. 소통 가치와 유저 선물 패스를 균형감 있게 소구하고 있습니다.",
    content: `<div style="line-height:1.75; color:#333; font-size:16px;">

  <h1 style="font-size:28px; margin-bottom:24px; color:#222;">
    OBT 3차 빌드 업데이트 안내
  </h1>

  <p>
    안녕하세요. 둥둥아일랜드 운영팀입니다.
  </p>

  <p>
    둥둥아일랜드 <strong>OBT 3차 빌드 업데이트</strong>가 적용되었습니다.
  </p>

  <p>
    이번 업데이트에서는 우편함 기능이 새롭게 추가되었으며, 꾸미기 모드, 업그레이드 UI, 도감, 설정창 등 여러 기능의 사용성을 개선했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    주요 변경 사항
  </h2>

  <div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
    <p style="margin-top:0; font-weight:600;">
      업데이트 요약
    </p>
    <ul style="margin:0; padding-left:20px;">
      <li>우편함 기능 추가</li>
      <li>꾸미기 모드 사용성 개선</li>
      <li>업그레이드 화면 UI 개선</li>
      <li>도감 및 보상 연출 개선</li>
      <li>설정창 및 메인 화면 개선</li>
      <li>듀얼 모니터 환경 안정성 개선</li>
    </ul>
  </div>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    우편함 기능 추가
  </h2>

  <p>
    게임 내에서 공지와 보상을 확인할 수 있는 우편함 기능이 추가되었습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>게임 내에서 공지와 보상을 확인할 수 있는 우편함을 추가했습니다.</li>
    <li>점검 보상이나 이벤트 보상을 우편함을 통해 받을 수 있습니다.</li>
    <li>우편함 목록이 최신순으로 정렬되도록 개선했습니다.</li>
    <li>보상을 받은 뒤에도 수령 내역을 확인할 수 있도록 수정했습니다.</li>
  </ul>

  <p>
    앞으로 우편함을 통해 점검 보상, 이벤트 보상, 주요 안내를 더 편하게 확인하실 수 있습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    꾸미기 모드 개선
  </h2>

  <p>
    섬을 꾸미는 과정에서 배치 가능 여부를 더 쉽게 확인하고, 고정 건축물 조작 흐름이 안정적으로 이어질 수 있도록 꾸미기 모드를 개선했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>장식물을 배치할 수 없는 위치를 더 쉽게 알아볼 수 있도록 표시 방식을 개선했습니다.</li>
    <li>고정 건축물을 변경한 뒤 취소할 수 있도록 수정했습니다.</li>
    <li>고정 건축물 변경 후 상호작용이 되지 않던 문제를 수정했습니다.</li>
  </ul>

  <p>
    배치 과정에서 발생할 수 있는 혼란을 줄이고, 이미 배치된 오브젝트를 더 안정적으로 관리할 수 있도록 점검했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    업그레이드 화면 개선
  </h2>

  <p>
    업그레이드 진행 시 필요한 정보를 더 쉽게 확인할 수 있도록 화면 구성을 개선했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>업그레이드 화면의 아이콘과 UI를 수정했습니다.</li>
    <li>스태미나, 포만감, 낚시 속도 등 일부 스탯 표시 방식을 개선했습니다.</li>
    <li>업그레이드 후 수치가 정상적으로 반영되지 않던 문제를 수정했습니다.</li>
  </ul>

  <p>
    업그레이드 전후의 변화를 더 명확하게 확인할 수 있도록 표시 방식과 반영 상태를 함께 점검했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    도감 및 보상 연출 개선
  </h2>

  <p>
    수집 정보 확인과 보상 획득 과정이 더 보기 좋게 이어질 수 있도록 도감과 연출 요소를 개선했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>도감 화면의 정렬 기능과 아이콘 표시를 개선했습니다.</li>
    <li>보상 획득 시 연출 효과를 추가했습니다.</li>
    <li>플레이어 이모지 연출을 추가했습니다.</li>
  </ul>

  <p>
    물고기 수집 현황을 더 편하게 확인하고, 보상을 받을 때의 반응도 조금 더 자연스럽게 느껴질 수 있도록 다듬었습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    설정창 및 메인 화면 개선
  </h2>

  <p>
    설정창과 메인 화면의 사용성을 개선하고, 다양한 플레이 환경에서도 안정적으로 이용할 수 있도록 관련 기능을 수정했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>설정창 UI를 새롭게 수정했습니다.</li>
    <li>메인 화면 위치와 UI를 조정했습니다.</li>
    <li>듀얼 모니터 환경에서도 더 안정적으로 플레이할 수 있도록 개선했습니다.</li>
  </ul>

  <p>
    플레이 환경에 따라 화면 위치나 조작 흐름이 어색하게 느껴질 수 있는 부분을 줄이는 데 초점을 맞췄습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    업데이트 안내
  </h2>

  <p>
    이번 OBT 3차 빌드에서는 우편함 기능 추가를 통해 보상과 안내 확인 흐름을 보강하고, 여러 주요 화면의 사용성을 함께 개선했습니다.
  </p>

  <p>
    더 나은 플레이 환경을 제공할 수 있도록 앞으로도 자주 이용하는 기능을 꾸준히 점검하고 개선해 나가겠습니다.
  </p>

  <p style="margin-top:28px;">
    감사합니다.
  </p>

</div>`
  },
  {
    id: "N-06",
    category: "업데이트",
    title: "[업데이트] OBT 4-1차 업데이트 안내",
    date: "2026-06-15",
    views: 4320,
    isImportant: true,
    portfolioRationale: "글로벌 확장 및 도움말 보강 중심의 4-1차 사양 안내입니다. 다국어 마켓 론칭을 위한 정석을 보여줍니다.",
    content: `<div style="line-height:1.75; color:#333; font-size:16px;">

  <h1 style="font-size:28px; margin-bottom:24px; color:#222;">
    OBT 4-1차 업데이트 안내
  </h1>

  <p>
    안녕하세요. 둥둥아일랜드 운영팀입니다.
  </p>

  <p>
    둥둥아일랜드 <strong>OBT 4-1차 업데이트</strong>가 적용되었습니다.
  </p>

  <p>
    이번 업데이트에서는 처음 플레이하는 분들도 기능을 더 쉽게 이해할 수 있도록 도움말 UI가 추가되었으며, 효과음과 음반 기능도 함께 개선되었습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    주요 변경 사항
  </h2>

  <div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
    <p style="margin-top:0; font-weight:600;">
      업데이트 요약
    </p>
    <ul style="margin:0; padding-left:20px;">
      <li>도움말 UI 추가</li>
      <li>언어 설정에 따른 안내 개선</li>
      <li>상점, 구매, 판매 등 주요 버튼 효과음 추가</li>
      <li>음반 정렬 및 필터 기능 추가</li>
      <li>호수 테마 적용 및 상점 이용 개선</li>
    </ul>
  </div>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    도움말 UI 추가
  </h2>

  <p>
    처음 둥둥아일랜드를 플레이하는 분들도 각 기능을 더 쉽게 이해할 수 있도록 도움말 UI를 추가했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>각 화면에서 필요한 설명을 확인할 수 있는 도움말 버튼을 추가했습니다.</li>
    <li>도움말 창을 통해 해당 기능의 사용 방법을 더 쉽게 확인할 수 있습니다.</li>
    <li>도움말 UI 크기와 화면 구성을 보기 편하게 개선했습니다.</li>
  </ul>

  <p>
    게임을 처음 시작했을 때 어떤 기능을 사용해야 하는지 막막하지 않도록, 화면 안에서 바로 안내를 확인할 수 있는 구조로 개선했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    언어 설정에 따른 안내 개선
  </h2>

  <p>
    언어 설정에 따라 안내 문구가 더 자연스럽게 표시될 수 있도록 관련 내용을 수정했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>언어 설정에 따라 도움말 내용이 변경되도록 개선했습니다.</li>
    <li>일부 화면의 문구가 더 자연스럽게 표시되도록 수정했습니다.</li>
  </ul>

  <p>
    설정된 언어에 맞춰 필요한 안내를 확인할 수 있도록 도움말과 화면 문구를 함께 점검했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    효과음 추가
  </h2>

  <p>
    주요 버튼과 기능을 사용할 때 조작 반응을 더 명확하게 느낄 수 있도록 효과음을 추가했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>상점 버튼, 닫기 버튼, 구매, 판매 동작에 효과음을 추가했습니다.</li>
    <li>건설 관련 효과음을 추가했습니다.</li>
    <li>퀘스트, 음식 창고, 물고기 창고 이용 시 효과음이 적용되도록 개선했습니다.</li>
  </ul>

  <p>
    버튼을 누르거나 기능을 실행했을 때 반응이 더 잘 느껴질 수 있도록, 자주 이용하는 화면을 중심으로 효과음을 적용했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    음반 기능 개선
  </h2>

  <p>
    음반을 더 편하게 확인하고 재생할 수 있도록 정렬, 필터, 재생 관련 기능을 개선했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>음반 정렬과 필터 기능을 추가했습니다.</li>
    <li>노래가 끝나기 전에 다음 곡으로 넘어가던 문제를 수정했습니다.</li>
    <li>이전 곡과 다음 곡 버튼을 눌렀을 때 재생 모드 이미지가 정상적으로 표시되도록 수정했습니다.</li>
  </ul>

  <p>
    원하는 음반을 더 쉽게 찾고, 재생 상태를 더 명확하게 확인할 수 있도록 관련 기능을 점검했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    호수 테마 및 상점 이용 개선
  </h2>

  <p>
    호수 테마를 구매하거나 적용하는 과정에서 버튼 상태와 문구가 더 정확하게 표시되도록 수정했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>호수 테마 적용 버튼의 문구가 정상적으로 표시되도록 수정했습니다.</li>
    <li>호수 테마를 구매하거나 적용할 때 버튼 상태가 올바르게 변경되도록 수정했습니다.</li>
    <li>상점에서 스크롤이 원활하게 동작하도록 개선했습니다.</li>
  </ul>

  <p>
    호수 테마를 적용하는 과정에서 현재 상태를 더 쉽게 파악하고, 상점 목록도 더 편하게 확인할 수 있도록 개선했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    업데이트 안내
  </h2>

  <p>
    이번 업데이트를 통해 게임 내 기능 안내와 조작 피드백이 한층 더 명확해졌습니다.
  </p>

  <p>
    처음 플레이하는 섬지기 여러분도 도움말을 통해 필요한 정보를 확인할 수 있으며, 효과음과 음반 기능 개선으로 플레이 과정의 반응도 더 자연스럽게 느낄 수 있습니다.
  </p>

  <p>
    앞으로도 더 편하게 둥둥아일랜드를 즐기실 수 있도록 자주 이용하는 기능을 꾸준히 점검하고 개선해 나가겠습니다.
  </p>

  <p style="margin-top:28px;">
    감사합니다.
  </p>

</div>`
  },
  {
    id: "N-07",
    category: "안내",
    title: "[수정 완료] 상점 가격 표시 및 구매 오류 안내",
    date: "2026-06-16",
    views: 1890,
    isImportant: false,
    portfolioRationale: "버그 대응 핫픽스 교환 공지입니다. 현상에 대한 세밀한 원인 해설과 골든타임 수선 절차를 통해 신뢰를 회복하는 우수 표본입니다.",
    content: `<div style="line-height:1.75; color:#333; font-size:16px;">

  <h1 style="font-size:28px; margin-bottom:24px; color:#222;">
    상점 가격 표시 오류 수정 및 보상 안내
  </h1>

  <p>
    안녕하세요. 둥둥아일랜드 운영팀입니다.
  </p>

  <p>
    6월 16일 임시 점검 이후, 일부 환경에서 상점 가격이 정상적으로 표시되지 않는 문제가 확인되었습니다.
  </p>

  <p>
    해당 문제는 <strong>6월 16일 18:40 수정이 완료</strong>되었으며, 현재는 정상적으로 이용하실 수 있습니다.
  </p>

  <p>
    게임 이용에 불편을 드린 점 진심으로 사과드립니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    발생한 문제
  </h2>

  <p>
    임시 점검 이후 일부 환경에서 상점 가격 정보가 올바르게 불러와지지 않는 문제가 발생했습니다.
  </p>

  <div style="background:#fff7ed; border-radius:12px; padding:18px 22px; margin:20px 0;">
    <ul style="margin:0; padding-left:20px;">
      <li>게임을 처음 실행한 일부 환경에서 상점 가격이 0골드로 표시되는 문제</li>
      <li>실제 가격과 다르게 표시되는 문제</li>
      <li>일부 아이템 구매가 정상적으로 진행되지 않는 문제</li>
    </ul>
  </div>

  <p>
    해당 문제로 인해 상점 이용 과정에서 가격 확인과 아이템 구매에 불편이 발생할 수 있었습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    수정 내용
  </h2>

  <p>
    상점 가격 정보가 정상적으로 표시되고, 아이템 구매 과정이 올바르게 진행될 수 있도록 관련 기능을 수정했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>상점 가격 정보가 정상적으로 불러와지도록 수정했습니다.</li>
    <li>아이템 구매 시 보유 골드와 실제 가격이 올바르게 확인되도록 개선했습니다.</li>
    <li>잘못된 가격 표시로 인해 구매가 진행되지 않던 문제를 수정했습니다.</li>
  </ul>

  <p>
    현재는 상점 가격 표시 및 아이템 구매 기능을 정상적으로 이용하실 수 있습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    보상 안내
  </h2>

  <p>
    이용에 불편을 겪으신 모든 플레이어분들께 아래 보상을 우편함으로 지급해 드렸습니다.
  </p>

  <div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
    <p style="margin-top:0; font-weight:600;">
      지급 보상
    </p>
    <ul style="margin:0; padding-left:20px;">
      <li>둥실보석 200개</li>
      <li>맛있는 스무디 복구 쿠폰 1개</li>
    </ul>
  </div>

  <p style="color:#777; font-size:14px;">
    ※ 보상 수령 기간: 지급일로부터 3일
  </p>

  <p>
    보상은 게임 내 우편함에서 확인하실 수 있으며, 수령 기간이 지나면 보상을 받을 수 없으니 기간 내 수령을 부탁드립니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    안내 말씀
  </h2>

  <p>
    게임 이용에 불편을 드린 점 다시 한 번 사과드립니다.
  </p>

  <p>
    앞으로도 문제 발생 시 빠르게 확인하고, 수정 상황과 보상 안내를 신속하게 전달드릴 수 있도록 노력하겠습니다.
  </p>

  <p>
    더 안정적인 플레이 환경을 제공할 수 있도록 계속 점검하겠습니다.
  </p>

  <p style="margin-top:28px;">
    감사합니다.
  </p>

</div>`
  },
  {
    id: "N-08",
    category: "안내",
    title: "[수정 완료] 꾸미기 모드 및 UI 표시 오류 안내",
    date: "2026-06-17",
    views: 2010,
    isImportant: false,
    portfolioRationale: "꾸미기 영지 및 클라이언트 오작동 크래시 긴급 완화 패치 공지입니다. 기술적 원인을 유저 눈높이로 정돈해 신뢰감을 배가시켰습니다.",
    content: `<div style="line-height:1.75; color:#333; font-size:16px;">

  <h1 style="font-size:28px; margin-bottom:24px; color:#222;">
    꾸미기 모드 및 UI 표시 오류 수정 안내
  </h1>

  <p>
    안녕하세요. 둥둥아일랜드 운영팀입니다.
  </p>

  <p>
    일부 환경에서 꾸미기 모드 이용 중 게임이 멈추거나, UI 표시가 정상적으로 사라지지 않는 문제가 확인되었습니다.
  </p>

  <p>
    해당 문제는 현재 수정이 완료되었으며, 정상적으로 이용하실 수 있습니다.
  </p>

  <p>
    게임 이용에 불편을 드린 점 진심으로 사과드립니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    수정된 내용
  </h2>

  <div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
    <p style="margin-top:0; font-weight:600;">
      수정 요약
    </p>
    <ul style="margin:0; padding-left:20px;">
      <li>꾸미기 모드 멈춤 현상 수정</li>
      <li>창고 수량 표시 오류 수정</li>
      <li>우편 알림 숫자 표시 오류 수정</li>
      <li>화면 표시 안정성 개선</li>
    </ul>
  </div>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    꾸미기 모드 멈춤 현상 수정
  </h2>

  <p>
    꾸미기 모드 진입 및 이용 과정에서 일부 환경에서 발생하던 멈춤 현상을 수정했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>꾸미기 모드에 진입할 때 일부 환경에서 게임이 멈추던 문제를 수정했습니다.</li>
    <li>꾸미기 모드 이용 중 화면이 끊기거나 조작이 불안정하던 현상을 개선했습니다.</li>
  </ul>

  <p>
    섬을 꾸미는 과정에서 조작 흐름이 끊기지 않도록 관련 기능을 점검했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    창고 수량 표시 오류 수정
  </h2>

  <p>
    창고 이용 중 일부 수량 표시가 화면에 남아 있던 문제를 수정했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>창고에서 일부 수량 표시가 화면에 남아 있던 문제를 수정했습니다.</li>
    <li>아이템 수량이 더 정확하게 표시되도록 개선했습니다.</li>
  </ul>

  <p>
    보유 아이템을 확인하는 과정에서 잘못된 표시로 혼란이 생기지 않도록 창고 UI를 점검했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    우편 알림 표시 오류 수정
  </h2>

  <p>
    우편 수령 후에도 알림 숫자가 남아 있던 문제를 수정했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>우편을 수령한 뒤에도 알림 숫자가 사라지지 않던 문제를 수정했습니다.</li>
    <li>우편함 상태가 더 정확하게 반영되도록 개선했습니다.</li>
  </ul>

  <p>
    우편 수령 여부와 알림 상태가 실제 우편함 상태에 맞게 표시되도록 수정했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    화면 표시 안정성 개선
  </h2>

  <p>
    화면 크기나 표시 환경에 따라 일부 UI가 겹쳐 보이던 문제를 개선했습니다.
  </p>

  <ul style="padding-left:20px;">
    <li>화면 크기나 표시 환경에 따라 일부 UI가 겹쳐 보이던 문제를 개선했습니다.</li>
    <li>인벤토리 슬롯 and 버튼 위치가 더 안정적으로 표시되도록 수정했습니다.</li>
  </ul>

  <p>
    다양한 화면 환경에서도 주요 UI가 보다 안정적으로 표시될 수 있도록 관련 요소를 정리했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    안내 말씀
  </h2>

  <p>
    게임 이용에 불편을 드린 점 다시 한 번 사과드립니다.
  </p>

  <p>
    앞으로도 보내주시는 오류 제보를 확인하며, 더 안정적인 플레이 환경을 제공할 수 있도록 꾸준히 개선해 나가겠습니다.
  </p>

  <p>
    이용 중 불편한 점이 있다면 공식 채널을 통해 제보 부탁드립니다.
  </p>

  <p style="margin-top:28px;">
    감사합니다.
  </p>

</div>`
  }
];

export const EVENTS: GameEvent[] = [
  {
    id: "E-01",
    title: "[이벤트] 둥둥 LP 수집 이벤트 안내",
    type: "수집",
    period: "2026-06-15 ~ 2026-06-30",
    status: "진행중",
    thumbnailUrl: heroImage,
    portfolioRationale: "음반 해금 이벤트 및 LP 낚기 등 유저 수집욕을 다방면으로 자극하고 다채로운 인게임 루프를 강화하기 위한 음악 수집 연동형 이벤트 기획서입니다.",
    content: `안녕하세요.
둥둥아일랜드 운영팀입니다.

낚시를 통해 특별한 LP를 수집할 수 있는 **둥둥 LP 수집 이벤트**가 시작됩니다.

이벤트 기간 동안 낚시를 진행하면 일정 확률로 LP를 획득할 수 있으며, 수집한 LP 개수에 따라 다양한 보상을 받을 수 있습니다.

---

### ■ 이벤트 기간

* 2026년 6월 15일 ~ 2026년 6월 30일

---

### ■ 이벤트 참여 방법

#### 1. 낚시를 진행해 주세요.
* 이벤트 기간 동안 일반 낚시를 진행하면 일정 확률로 LP를 획득할 수 있습니다.

#### 2. 획득한 LP를 확인해 주세요.
* 획득한 LP는 음반 목록에서 확인할 수 있습니다.
* LP를 수집하면 새로운 음반이 해금됩니다.

#### 3. 수집 개수에 따라 보상을 받을 수 있습니다.
* LP를 일정 개수 이상 수집하면 보상이 지급됩니다.
* 보상은 우편함을 통해 받을 수 있습니다.

---

### ■ 이벤트 보상

* **LP 3장 해금**: 고급 낚시용 인광 찌 x 10 + 둥실 LP 데코 쿠션
* **LP 5장 해금**: [희귀] 클래식 목재 축음기 스피커

---

### ■ 안내 사항

* 이벤트 보상은 조건 달성 후 우편함으로 지급됩니다.
* 우편함 보상은 수령 기간이 지나면 사라질 수 있으니 기간 내에 받아 주세요.
* 이벤트 내용은 내부 사정에 따라 변경될 수 있으며, 변경 시 공지를 통해 안내드리겠습니다.

낚시를 즐기며 다양한 LP를 모아보세요.

감사합니다.`
  },
  {
    id: "E-02",
    title: "[이벤트] OBT 참여 감사 선물 지급 안내",
    type: "우편",
    period: "2026-06-17 ~ 2026-06-25",
    status: "진행중",
    thumbnailUrl: heroImage,
    portfolioRationale: "우편함 보상 연동 시스템의 무결성 전송 테스트를 진행하는 한편 오픈 베타에 참여해 주신 유저 둥이님들께 무상 초기 성장 자원을 급수하는 라이브 감사 리워드 기획입니다.",
    content: `안녕하세요.
둥둥아일랜드 운영팀입니다.

둥둥아일랜드 OBT에 참여해 주신 모든 섬지기 여러분께 감사의 마음을 담아 특별 보상을 지급해 드립니다.

보상은 우편함을 통해 지급되며, 기간 내에 접속하여 받아 주세요.

---

### ■ 지급 대상

OBT 기간 동안 둥둥아일랜드에 접속한 모든 플레이어

---

### ■ 지급 보상

* **골드 꾸러미**: 5,000 Gold
* **인테리어 아이템**: 둥곰이 소파 체어 1개
* **낚시 아이템**: 최상급 야광 미끼 50개

---

### ■ 수령 방법

1. 게임 접속 후 우편함에서 보상을 받을 수 있습니다.
2. 우편함에서 [모두 받기]를 누르면 보상이 한 번에 지급됩니다.

---

### ■ 수령 기간

지급일로부터 7일

---

### ■ 안내 사항

* 보상 우편은 수령 기간이 지나면 삭제될 수 있습니다.
* 우편함이 보이지 않을 경우 게임을 재접속한 뒤 다시 확인해 주세요.

OBT 기간 동안 보내주신 관심과 피드백에 감사드립니다.
더 나은 둥둥아일랜드가 될 수 있도록 꾸준히 개선해 나가겠습니다.

감사합니다.`
  },
  {
    id: "E-03",
    title: "[이벤트] 나만의 둥둥아일랜드 꾸미기 이벤트",
    type: "성장",
    period: "2026-06-17 ~ 2026-06-29",
    status: "진행중",
    thumbnailUrl: heroImage,
    portfolioRationale: "꾸미기 모드 업데이트와 발맞추어 유저들의 공간 창작 스크린샷 자랑을 촉진하는 참여형 소셜 비주얼 이벤트입니다. 자발적인 영지 자랑 스냅 전파를 활성화해 고매출 및 UGC 입소문을 도모한 설계 기획입니다.",
    content: `안녕하세요.
둥둥아일랜드 운영팀입니다.

섬과 호수를 자유롭게 꾸미고, 나만의 둥둥아일랜드를 자랑해 주세요.

이벤트 기간 동안 꾸미기 모드로 섬 또는 호수를 꾸민 뒤 스크린샷을 공유해 주시면 참여가 완료됩니다.

---

### ■ 이벤트 기간

2026년 6월 17일 ~ 2026년 6월 29일

---

### ■ 참여 방법

#### 1. 섬 또는 호수를 꾸며 주세요.
* 게임 내 꾸미기 모드를 이용해 나만의 공간을 꾸며 주세요.

#### 2. 스크린샷을 촬영해 주세요.
* 꾸민 섬이나 호수가 잘 보이도록 스크린샷을 찍어 주세요.

#### 3. 공식 커뮤니티 또는 SNS에 등록해 주세요.
* 게시글에 아래 해시태그를 함께 입력해 주세요.
* 필수 해시태그: **#MyDongDongIsland**

---

### ■ 참여 예시

* 포근한 휴식 공간
* 낚시하기 좋은 호수 주변
* 둥곰이와 함께하는 작은 정원
* 나만의 테마 섬 꾸미기

---

### ■ 보상

* **참여 보상**: 무지개빛 화분 1개
* **우수작 보상**: 둥곰이 트로피 가구 1개

---

### ■ 당첨자 발표

2026년 7월 2일

---

### ■ 안내 사항

* 직접 꾸민 섬 또는 호수 스크린샷으로만 참여할 수 있습니다.
* 이벤트와 무관한 이미지나 부적절한 게시글은 참여 대상에서 제외될 수 있습니다.
* 보상은 이벤트 종료 후 우편함으로 지급될 예정입니다.

섬지기 여러분의 멋진 둥둥아일랜드를 기다리고 있겠습니다.

감사합니다.`
  },
  {
    id: "E-04",
    title: "[이벤트] 신규 유저분들 정착 지원 이벤트",
    type: "출석",
    period: "2026-06-01 ~ 상시 진행",
    status: "진행중",
    thumbnailUrl: heroImage,
    portfolioRationale: "신규 가입 유저의 핵심 정착 주기인 첫 7일 동안의 가속 혜택과 도움말 친숙도를 다이렉트로 촉발하여 극초반 잔존 및 몰입 지수를 극대화하는 신참 전용 도우미 캠페인입니다.",
    content: `안녕하세요.
둥둥아일랜드 운영팀입니다.

둥둥아일랜드를 처음 시작하는 신규 유저분들을 위해 정착 지원 이벤트가 진행됩니다.

이벤트 기간 동안 매일 접속하고, 도움말을 확인하면 다양한 보상을 받을 수 있습니다.

---

### ■ 이벤트 기간

상시 진행

---

### ■ 참여 대상

이벤트 기간 동안 둥둥아일랜드에 접속한 신규 플레이어

---

### ■ 참여 방법

#### 1. 매일 게임에 접속해 주세요.
* 이벤트 기간 동안 접속하면 일차별 보상을 받을 수 있습니다.

#### 2. 도움말을 확인해 주세요.
* 게임 내 도움말을 확인하면 추가 보상을 받을 수 있습니다.
* 도움말을 3회 이상 확인하면 초기 지원 선물팩이 지급됩니다.

---

### ■ 주요 보상

* 기본 정착 지원 아이템
* 보관함 업그레이드 지원 아이템
* 낚시 및 꾸미기 관련 아이템
* 초기 지원 선물팩

---

### ■ 안내 사항

* 출석 보상은 이벤트 기간 내 접속 시 받을 수 있습니다.
* 도움말 확인 보상은 조건 달성 후 우편함으로 지급됩니다.`
  }
];

export const GMNUTES: GMNote[] = [
  {
    id: "GM-01",
    title: "[GM노트] 처음 시작하는 섬지기를 위한 개선 이야기",
    author: "GM 둥곰",
    date: "2026-06-16",
    views: 4567,
    likes: 890,
    portfolioRationale: "신규 유저 둥이님의 원활한 인게이지 정착을 조율하기 위한 GM의 따뜻한 소통 개발비화 기록입니다.",
    images: [IMAGES.group110, IMAGES.group111],
    content: `<p> 안녕하세요. 둥둥아일랜드 GM입니다. </p>

<p> OBT를 준비하면서 가장 많이 고민했던 부분은 처음 둥둥아일랜드에 접속한 섬지기 여러분이 게임의 흐름을 얼마나 쉽게 이해할 수 있는가였습니다. </p>

<p> 둥둥아일랜드에는 낚시, 꾸미기, 상점, 도감 등 여러 콘텐츠가 준비되어 있습니다. 하지만 처음 플레이하는 입장에서는 어떤 기능을 먼저 확인해야 하는지, 각 콘텐츠가 어떤 방식으로 이어지는지 바로 알기 어려운 부분이 있었습니다. </p>

<p> 그래서 이번 개발 과정에서는 신규 플레이어가 주요 기능에 자연스럽게 적응할 수 있도록 도움말 시스템을 추가했습니다. </p>

<hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

<h2 style="font-size:22px; margin-bottom:16px; color:#222;"> 도움말 개발 컷 1 </h2>

<h3 style="font-size:19px; margin-top:28px; margin-bottom:12px; color:#333;"> 필요한 순간에 바로 확인하는 도움말 기능 </h3>

[IMAGE:0]

[IMAGE:1]

<p> 도움말 기능은 각 화면에서 필요한 정보를 바로 확인할 수 있도록 구성했습니다. </p>

<p> 낚시를 진행할 때는 낚시와 관련된 기본 조작 방법을 확인할 수 있으며, 꾸미기 화면에서는 오브젝트 배치와 관련된 안내를 확인할 수 있습니다. </p>

<p> 처음부터 모든 내용을 외우지 않아도, 플레이 중 궁금한 부분이 생겼을 때 화면 안에서 바로 도움말을 열어볼 수 있도록 준비했습니다. </p>

<div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;"> <p style="margin-top:0; font-weight:600;">도움말에서 확인할 수 있는 내용</p> <ul style="margin:0; padding-left:20px;"> <li>낚시 기본 흐름 안내</li> <li>꾸미기 조작 방법 안내</li> <li>상점 이용 방법 안내</li> <li>도감 확인 방법 안내</li> <li>화면별 주요 기능 설명</li> </ul> </div>

<p> 플레이어가 게임 밖에서 별도로 정보를 찾지 않아도, 게임 안에서 필요한 내용을 차근차근 확인할 수 있도록 구성한 점이 이번 도움말 시스템의 핵심입니다. </p>

<hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

<h2 style="font-size:22px; margin-bottom:16px; color:#222;"> 도움말 개발 컷 2 </h2>

<h3 style="font-size:19px; margin-top:28px; margin-bottom:12px; color:#333;"> 핵심 콘텐츠를 천천히 익힐 수 있는 구조 </h3>

<p> 둥둥아일랜드는 낚시를 통해 골드를 모으고, 모은 골드로 상점에서 아이템을 구매한 뒤, 자신만의 섬을 꾸며가는 흐름을 가지고 있습니다. </p>

<p> 이번 도움말 시스템은 신규 플레이어가 이 흐름을 부담 없이 따라갈 수 있도록 안내하는 데 초점을 맞췄습니다. </p>

<p> 처음 접속한 섬지기 여러분이 아래와 같은 궁금증을 느꼈을 때, 도움말을 통해 바로 확인할 수 있도록 했습니다. </p>

<div style="background:#fff7ed; border-radius:12px; padding:18px 22px; margin:20px 0;"> <ul style="margin:0; padding-left:20px;"> <li>무엇부터 해야 할까?</li> <li>이 버튼은 어떤 기능일까?</li> <li>꾸미기 아이템은 어디서 구매할 수 있을까?</li> <li>낚시와 상점, 꾸미기는 어떻게 이어질까?</li> </ul> </div>

<p> 게임을 처음 시작하는 순간부터 낚시, 상점, 꾸미기까지 자연스럽게 이어질 수 있도록 안내 흐름을 정리했습니다. </p>

<hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

<h2 style="font-size:22px; margin-bottom:16px; color:#222;"> 도움말 개발 컷 3 </h2>

<h3 style="font-size:19px; margin-top:28px; margin-bottom:12px; color:#333;"> 더 보기 편해진 주요 화면 UI </h3>

<p> 도움말 기능 추가와 함께 상점, 도감, 꾸미기 화면도 함께 점검했습니다. </p>

<p> 기능을 안내하는 것만큼이나 실제 화면에서 필요한 정보가 잘 보이는 것도 중요하다고 판단했습니다. </p>

<p> 이번 작업에서는 각 화면에서 플레이어가 자주 확인하는 정보를 더 쉽게 찾을 수 있도록 UI 가독성을 개선했습니다. </p>

<div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;"> <p style="margin-top:0; font-weight:600;">주요 개선 방향</p> <ul style="margin:0; padding-left:20px;"> <li>상점에서 아이템 정보와 가격을 더 쉽게 확인할 수 있도록 정리</li> <li>도감에서 수집 정보를 한눈에 볼 수 있도록 개선</li> <li>꾸미기 화면에서 배치와 조작 흐름을 이해하기 쉽게 정리</li> <li>각 화면의 버튼과 안내 요소를 더 명확하게 표시</li> </ul> </div>

<p> 둥둥아일랜드는 편안하게 즐기는 게임인 만큼, 기능을 이해하는 과정에서도 부담이 적어야 한다고 생각했습니다. </p>

<hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

<h2 style="font-size:22px; margin-bottom:16px; color:#222;"> 신규 플레이어 경험 개선의 방향 </h2>

<p> 이번 개선은 신규 플레이어가 게임에 처음 접속했을 때 겪을 수 있는 막막함을 줄이는 데 목적이 있습니다. </p>

<p> 둥둥아일랜드의 콘텐츠를 하나씩 경험하면서 자연스럽게 게임 흐름을 익히고, 이후에는 자신만의 방식으로 섬을 꾸며갈 수 있도록 돕고자 했습니다. </p>

<div style="background:#fff7ed; border-radius:12px; padding:18px 22px; margin:20px 0;"> <p style="margin-top:0; font-weight:600;">이번 개선의 핵심</p> <ul style="margin:0; padding-left:20px;"> <li>처음 접속해도 주요 기능을 쉽게 이해할 수 있는 구조</li> <li>화면별 도움말을 통한 즉시 안내</li> <li>낚시, 상점, 꾸미기로 이어지는 자연스러운 플레이 흐름</li> <li>주요 UI 가독성 개선을 통한 정보 확인 부담 감소</li> </ul> </div>

<p> 작은 안내 하나가 처음 플레이하는 섬지기 여러분에게는 큰 차이로 느껴질 수 있다고 생각했습니다. </p>

<hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

<h2 style="font-size:22px; margin-bottom:16px; color:#222;"> 앞으로의 개선 방향 </h2>

<p> 섬지기 여러분이 낚시와 꾸미기 콘텐츠를 더 편하게 즐길 수 있도록, 도움말과 UI 편의 기능을 중심으로 불편한 부분을 하나씩 보완할 예정입니다. </p>

<p> 플레이 과정에서 막히는 부분은 줄이고, 둥둥아일랜드만의 편안한 분위기는 계속 살려가겠습니다. </p>

<p style="margin-top:28px;"> 감사합니다. </p>`,
    comments: [
      {
        id: "C-01",
        user: "새싹정원사",
        content: "처음 하는데 가이드가 친절해서 쉽게 적응했어요! 도움말 보면서 따라 하니까 금방 익숙해지네요.",
        date: "2026-06-16 10:15:30",
        gmReply: "새싹정원사님 환영합니다! 새로워진 도움말이 도움이 되었다니 다행이네요. 앞으로도 편안한 섬 생활 되시기를 바랍니다!"
      }
    ]
  },
  {
    id: "GM-02",
    title: "[GM노트] 상점 이용을 더 편하게 만들기 위한 개선",
    author: "GM 둥곰",
    date: "2026-06-15",
    views: 3120,
    likes: 642,
    portfolioRationale: "상점의 카테고리 직관성과 구매 편의성을 고스란히 유저 눈높이로 풀어 설명한 리뉴얼 개발 비하인드입니다.",
    images: [IMAGES.shopUI, IMAGES.shopUI01],
    content: `<div style="line-height:1.75; color:#333; font-size:16px;">
<h1 style="font-size:28px; margin-bottom:24px; color:#222;">
상점 UI 개선 안내
</h1>
<p>
안녕하세요. 둥둥아일랜드 GM입니다.
</p>
<p>
둥둥아일랜드의 상점은 섬지기 여러분이 낚시에 필요한 아이템을 준비하고, 섬과 호수를 꾸미기 위한 다양한 아이템을 구매하는 공간입니다.
</p>
<p>
이번 GM노트에서는 아이템을 더 빠르게 찾고, 원하는 기준으로 편하게 확인할 수 있도록 개선된 상점 카테고리 필터와 정렬 기능을 안내해 드립니다.
</p>
<hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">
<h2 style="font-size:22px; margin-bottom:16px; color:#222;">
상점 개발 컷 1
</h2>
<p style="color:#777; font-size:14px; margin-top:-6px;">
상점 카테고리 필터 예시
</p>

[IMAGE:0]

<h3 style="font-size:19px; margin-top:28px; margin-bottom:12px; color:#333;">
원하는 아이템을 빠르게 찾는 카테고리 필터
</h3>
<p>
상점에서는 다양한 꾸미기 아이템과 낚시 아이템을 확인할 수 있습니다.
</p>
<p>
기존에는 아이템 종류가 많아질수록 원하는 상품을 찾기 위해 목록을 직접 많이 살펴봐야 하는 불편함이 있었습니다.
</p>
<p>
이번 개선을 통해 상점 아이템을 종류별로 나누어 확인할 수 있도록 카테고리 필터 기능을 정리했습니다.
</p>
<div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
<p style="margin-top:0; font-weight:600;">
카테고리 필터 항목
</p>
<ul style="margin:0; padding-left:20px;">
<li>모든 아이템</li>
<li>메인 하우스</li>
<li>바닥</li>
<li>고정</li>
<li>자유</li>
</ul>
</div>
<p>
섬 인테리어 아이템을 확인할 때는 전체 목록을 보는 것뿐 아니라, 필요한 분류만 선택해 원하는 상품을 더 빠르게 찾아볼 수 있습니다.
</p>
<p>
예를 들어 집과 관련된 아이템을 보고 싶을 때는 메인 하우스, 바닥 장식을 찾고 싶을 때는 바닥 항목을 선택하여 상품 목록을 좁혀볼 수 있습니다.
</p>
<p>
상점에서 필요한 아이템을 찾는 과정이 조금 더 가볍고 직관적으로 느껴질 수 있도록 구성했습니다.
</p>
<hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">
<h2 style="font-size:22px; margin-bottom:16px; color:#222;">
상점 개발 컷 2
</h2>
<p style="color:#777; font-size:14px; margin-top:-6px;">
상점 정렬 기능 예시
</p>

[IMAGE:1]

<h3 style="font-size:19px; margin-top:28px; margin-bottom:12px; color:#333;">
보유 상태와 가격 기준을 확인하는 정렬 기능
</h3>
<p>
아이템을 구매할 때는 이미 가지고 있는 아이템인지, 아직 구매하지 않은 아이템인지, 현재 보유한 골드로 구매하기 적절한 가격인지 확인하는 과정이 중요합니다.
</p>
<p>
이를 위해 상점 정렬 기능을 개선했습니다.
</p>
<div style="background:#fff7ed; border-radius:12px; padding:18px 22px; margin:20px 0;">
<p style="margin-top:0; font-weight:600;">
정렬 항목
</p>
<ul style="margin:0; padding-left:20px;">
<li>미보유 아이템 순</li>
<li>보유 아이템 순</li>
<li>높은 가격 순</li>
<li>낮은 가격 순</li>
</ul>
</div>
<p>
새로운 아이템을 먼저 확인하고 싶다면 미보유 아이템 순을 선택하면 됩니다.
</p>
<p>
이미 구매한 아이템을 다시 확인하고 싶을 때는 보유 아이템 순을 활용할 수 있습니다.
</p>
<p>
또한 가격 기준 정렬을 통해 비싼 아이템부터 목표를 세우거나, 현재 보유한 골드에 맞춰 부담 없이 구매할 수 있는 아이템부터 확인할 수 있습니다.
</p>
<p>
상점 이용 중 불필요하게 목록을 반복해서 확인하는 시간을 줄이고, 원하는 기준에 맞춰 아이템을 고를 수 있도록 개선했습니다.
</p>
<hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">
<h2 style="font-size:22px; margin-bottom:16px; color:#222;">
더 알아보기 쉬워진 상품 확인 흐름
</h2>
<p>
상점은 골드를 사용해 아이템을 구매하는 공간인 만큼, 상품 정보를 명확하게 확인하는 과정도 중요합니다.
</p>
<p>
이번 개선에서는 아이템 이미지, 이름, 가격, 보유 상태가 더 잘 보이도록 화면 구성을 점검했습니다.
</p>
<p>
아이템을 구매하기 전 필요한 정보를 한눈에 확인할 수 있도록 정리하여, 원하지 않는 아이템을 실수로 구매하거나 이미 보유한 아이템을 헷갈리는 상황을 줄이는 데 초점을 맞췄습니다.
</p>
<p>
또한 골드가 부족한 상황처럼 구매가 어려운 경우에도 플레이어가 현재 상태를 쉽게 이해할 수 있도록 예외 상황을 함께 확인했습니다.
</p>
<hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">
<h2 style="font-size:22px; margin-bottom:16px; color:#222;">
이번 개선의 핵심
</h2>
<p>
이번 상점 UI 개선은 섬지기 여러분이 상점을 이용할 때 느낄 수 있는 작은 불편함을 줄이는 것을 목표로 진행했습니다.
</p>
<div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
<ul style="margin:0; padding-left:20px;">
<li>원하는 아이템을 더 빠르게 찾을 수 있도록 카테고리 정리</li>
<li>보유 여부를 기준으로 상품 확인 가능</li>
<li>가격 기준 정렬로 구매 목표 설정 가능</li>
<li>상품 정보와 구매 흐름을 더 쉽게 이해할 수 있도록 UI 점검</li>
</ul>
</div>
<p>
상점은 게임을 진행하면서 반복적으로 이용하게 되는 공간인 만큼, 작은 화면 구성 하나도 플레이 흐름에 영향을 줄 수 있다고 판단했습니다.
</p>
<hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">
<h2 style="font-size:22px; margin-bottom:16px; color:#222;">
앞으로의 개선 방향
</h2>
<p>
앞으로도 둥둥아일랜드 상점은 섬지기 여러분이 필요한 아이템을 더 쉽게 찾고, 안심하고 구매할 수 있는 공간이 될 수 있도록 개선 방향을 잡고 있습니다.
</p>
<p>
낚시를 준비하는 과정부터 섬을 꾸미는 흐름까지 더 편하게 이어질 수 있도록, 필요한 편의 기능도 차근차근 보완해 나가겠습니다.
</p>
<p style="margin-top:28px;">
감사합니다.
</p>
</div>`,
    comments: [
      {
        id: "C-02",
        user: "도감수집러",
        content: "확실히 이전보다 정리가 잘 되어 있어서 원하는 가구나 소모품을 찾기가 훨씬 유연해졌습니다!",
        date: "2026-06-15 11:22:45",
        gmReply: "도감수집러님 피드백 감사드립니다! 카테고리 개편에 신경을 많이 썼는데 좋게 느껴주셔서 정말 뿌듯합니다!"
      }
    ]
  },
  {
    id: "GM-03",
    title: "「나만의 섬을 만드는 꾸미기 콘텐츠」",
    author: "GM 둥곰",
    date: "2026-06-14",
    views: 5210,
    likes: 980,
    portfolioRationale: "꾸미기를 게임의 핵심 아이덴티티이자 플레이어 창작 허브로 격상시키기 위한 비주얼 및 기능 개발 플랜입니다.",
    images: [IMAGES.group28, IMAGES.group29, IMAGES.group30],
    content: `<div style="line-height:1.75; color:#333; font-size:16px;">

  <h1 style="font-size:28px; margin-bottom:24px; color:#222;">
    꾸미기 모드 편의 기능 안내
  </h1>

  <p>
    안녕하세요. 둥둥아일랜드 GM입니다.
  </p>

  <p>
    둥둥아일랜드의 꾸미기 모드는 섬지기 여러분이 원하는 위치에 가구와 장식물을 배치하며, 자신만의 섬을 만들어갈 수 있는 주요 콘텐츠입니다.
  </p>

  <p>
    이번 GM노트에서는 꾸미기 모드를 이용할 때 더 편하게 섬을 꾸밀 수 있도록 적용된 카메라 이동, 배치 가이드, 오브젝트 조작 메뉴, 상단 제어 기능을 안내해 드립니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    꾸미기 개발 컷 1
  </h2>

  <p style="color:#777; font-size:14px; margin-top:-6px;">
    WASD 카메라 이동 및 꾸미기 화면 예시
  </p>

  [IMAGE:0]

  <h3 style="font-size:19px; margin-top:28px; margin-bottom:12px; color:#333;">
    WASD 키를 활용한 카메라 이동 기능
  </h3>

  <p>
    꾸미기 화면에서는 WASD 키를 이용해 카메라를 이동할 수 있습니다.
  </p>

  <p>
    섬의 원하는 위치를 직접 확인하면서 오브젝트를 배치할 수 있도록 구성했으며, 넓은 공간을 꾸밀 때도 필요한 위치를 살펴보며 배치할 수 있습니다.
  </p>

  <div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
    <p style="margin-top:0; font-weight:600;">
      카메라 이동 조작
    </p>
    <ul style="margin:0; padding-left:20px;">
      <li>W: 위쪽으로 이동</li>
      <li>A: 왼쪽으로 이동</li>
      <li>S: 아래쪽으로 이동</li>
      <li>D: 오른쪽으로 이동</li>
    </ul>
  </div>

  <p>
    카메라 이동 기능을 통해 배치할 공간을 미리 확인하고, 섬 전체의 균형을 보면서 꾸미기를 진행할 수 있도록 개선했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    꾸미기 개발 컷 2
  </h2>

  <p style="color:#777; font-size:14px; margin-top:-6px;">
    바닥 격자 및 배치 가이드 예시
  </p>

  [IMAGE:1]

  <h3 style="font-size:19px; margin-top:28px; margin-bottom:12px; color:#333;">
    배치 가능 여부를 확인할 수 있는 바닥 격자
  </h3>

  <p>
    오브젝트를 배치할 때는 바닥에 표시되는 격자를 통해 배치 위치를 확인할 수 있습니다.
  </p>

  <p>
    배치 가능한 영역과 제한되는 영역을 시각적으로 구분하여, 플레이어가 현재 위치에 오브젝트를 놓을 수 있는지 더 쉽게 판단할 수 있도록 했습니다.
  </p>

  <div style="background:#fff7ed; border-radius:12px; padding:18px 22px; margin:20px 0;">
    <p style="margin-top:0; font-weight:600;">
      배치 가이드 개선 방향
    </p>
    <ul style="margin:0; padding-left:20px;">
      <li>바닥 격자를 통해 배치 위치 확인</li>
      <li>배치 가능한 공간과 제한 공간 구분</li>
      <li>오브젝트 위치를 더 직관적으로 조정 가능</li>
      <li>섬 꾸미기 과정에서 발생할 수 있는 배치 혼란 감소</li>
    </ul>
  </div>

  <p>
    이를 통해 원하는 공간에 오브젝트를 더 안정적으로 배치하고, 섬의 구조에 맞춰 꾸미기 흐름을 정리할 수 있도록 개선했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    꾸미기 개발 컷 3
  </h2>

  <p style="color:#777; font-size:14px; margin-top:-6px;">
    배치된 오브젝트 조작 메뉴 예시
  </p>

  [IMAGE:2]

  <h3 style="font-size:19px; margin-top:28px; margin-bottom:12px; color:#333;">
    배치된 오브젝트를 바로 조작하는 메뉴
  </h3>

  <p>
    이미 배치된 장식물이나 가구를 선택하면, 해당 오브젝트를 바로 조작할 수 있는 메뉴가 표시됩니다.
  </p>

  <p>
    배치 후에도 위치나 방향을 다시 조정할 수 있도록 구성하여, 꾸미기 과정에서 수정이 필요한 상황에 더 편하게 대응할 수 있습니다.
  </p>

  <div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
    <p style="margin-top:0; font-weight:600;">
      오브젝트 조작 메뉴
    </p>
    <ul style="margin:0; padding-left:20px;">
      <li>회수: 배치한 오브젝트를 보관함으로 되돌리는 기능</li>
      <li>이동: 배치된 오브젝트의 위치를 다시 조정하는 기능</li>
      <li>회전: 오브젝트의 방향을 변경하는 기능</li>
      <li>취소: 조작 메뉴를 닫고 기존 상태로 돌아가는 기능</li>
    </ul>
  </div>

  <p>
    이미 놓아둔 가구와 장식물도 필요에 따라 다시 배치하거나 방향을 조정할 수 있어, 섬의 분위기를 더 자유롭게 바꿀 수 있습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    섬 전체 상태를 관리하는 상단 제어 기능
  </h2>

  <p>
    꾸미기 화면 상단에는 섬 전체의 배치 상태를 관리할 수 있는 제어 기능을 준비했습니다.
  </p>

  <p>
    여러 오브젝트를 배치한 뒤 전체적으로 정리하거나, 현재 배치 상태를 저장해야 하는 상황에서 사용할 수 있습니다.
  </p>

  <div style="background:#fff7ed; border-radius:12px; padding:18px 22px; margin:20px 0;">
    <p style="margin-top:0; font-weight:600;">
      상단 제어 기능
    </p>
    <ul style="margin:0; padding-left:20px;">
      <li>전체 회수: 고정 장식물을 제외한 오브젝트를 보관함으로 이동</li>
      <li>초기화: 마지막으로 저장된 배치 상태로 되돌림</li>
      <li>저장: 현재 배치 상태를 저장</li>
    </ul>
  </div>

  <p>
    상단 제어 기능을 통해 섬 전체의 배치 상태를 한 번에 관리할 수 있으며, 꾸미기 작업을 마친 뒤에는 저장 기능을 통해 현재 상태를 유지할 수 있습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    이번 개선의 핵심
  </h2>

  <p>
    이번 꾸미기 모드 개선은 섬지기 여러분이 원하는 공간을 더 쉽게 확인하고, 배치한 오브젝트를 더 편하게 조정할 수 있도록 하는 데 초점을 맞췄습니다.
  </p>

  <div style="background:#f8f8f8; border-left:4px solid #d8b08c; padding:16px 20px; margin:20px 0;">
    <ul style="margin:0; padding-left:20px;">
      <li>WASD 카메라 이동을 통한 넓은 섬 확인</li>
      <li>바닥 격자를 통한 배치 가능 여부 확인</li>
      <li>회수, 이동, 회전 메뉴를 통한 오브젝트 조작 개선</li>
      <li>전체 회수, 초기화, 저장 기능을 통한 배치 관리 편의성 강화</li>
    </ul>
  </div>

  <p>
    꾸미기 모드는 플레이어가 직접 공간을 만들어가는 콘텐츠인 만큼, 조작 흐름이 복잡하지 않고 필요한 기능을 바로 사용할 수 있는 것이 중요하다고 판단했습니다.
  </p>

  <hr style="margin:36px 0; border:0; border-top:1px solid #ddd;">

  <h2 style="font-size:22px; margin-bottom:16px; color:#222;">
    앞으로의 개선 방향
  </h2>

  <p>
    앞으로도 둥둥아일랜드는 섬지기 여러분이 낚시를 더 편하게 즐기고, 섬을 꾸미는 과정에서도 불편함을 느끼지 않도록 도움말과 UI 편의 기능을 계속 보완해 나가겠습니다.
  </p>

  <p style="margin-top:28px;">
    감사합니다.
  </p>

</div>`,
    comments: [
      {
        id: "C-03",
        user: "인테리어장인",
        content: "더 아기자기한 테마가 많이 출시되었으면 좋겠어요. 지금도 꾸미기 카메라 이동 조작성이 크게 완화되어 너무 편합니다.",
        date: "2026-06-14 15:40:12",
        gmReply: "인테리어장인님! 개성 있는 공간을 더 다채롭게 수놓으실 수 있도록 개구리 등 동물 테마와 다양한 인테리어를 정비하겠습니다!"
      }
    ]
  }
];

export const FAQS: FAQ[] = [
  {
    id: "F-01",
    category: "게임플레이",
    question: "둥둥아일랜드는 어떤 게임인가요?",
    answer: "둥둥아일랜드는 PC에서 창 형태로 실행되는 위젯형 힐링 게임입니다.\n낚시, 꾸미기, 도감, 상점, 퀘스트 등 다양한 콘텐츠를 통해 나만의 작은 섬을 꾸미고 즐길 수 있습니다."
  },
  {
    id: "F-02",
    category: "게임플레이",
    question: "모바일에서도 플레이할 수 있나요?",
    answer: "현재 둥둥아일랜드는 PC 환경을 기준으로 제작되었습니다.\n모바일 환경은 정식 지원하지 않으며, 일부 기능이 정상적으로 동작하지 않을 수 있습니다."
  },
  {
    id: "F-03",
    category: "계정",
    question: "회원가입이나 로그인이 필요한가요?",
    answer: "아니요.\n현재 둥둥아일랜드는 별도의 회원가입이나 로그인 없이 플레이할 수 있습니다."
  },
  {
    id: "F-04",
    category: "계정",
    question: "계정 연동 기능이 있나요?",
    answer: "현재는 별도의 계정 연동 기능을 제공하지 않습니다.\n로그인 기반 게임이 아니기 때문에 다른 PC에서 기존 플레이 정보를 이어서 이용하는 기능은 지원되지 않을 수 있습니다."
  },
  {
    id: "F-05",
    category: "결제",
    question: "결제 상품이 있나요?",
    answer: "아니요.\n현재 둥둥아일랜드에는 유료 결제 상품이 없습니다.\n상점에서 사용하는 재화는 게임 플레이를 통해 획득하는 골드 기준으로 구성되어 있습니다."
  },
  {
    id: "F-06",
    category: "결제",
    question: "환불 문의는 어디로 하면 되나요?",
    answer: "현재 결제 시스템이 제공되지 않기 때문에 별도의 환불 문의 항목은 운영하지 않습니다.\n추후 결제 기능이 추가될 경우 관련 안내를 별도로 공지하겠습니다."
  },
  {
    id: "F-07",
    category: "계정",
    question: "게임은 어떻게 저장되나요?",
    answer: "게임 진행 정보는 현재 빌드 기준으로 게임 내 저장 방식에 따라 관리됩니다.\n게임을 종료하기 전에는 진행 상황이 정상적으로 반영되었는지 확인해 주세요.\n\n※ 저장 방식은 빌드 버전에 따라 변경될 수 있으며, 변경 시 공지를 통해 안내드리겠습니다."
  },
  {
    id: "F-08",
    category: "계정",
    question: "게임을 삭제하면 플레이 정보도 사라지나요?",
    answer: "로그인이나 계정 연동 기능이 없는 상태에서는 게임 삭제, 파일 이동, PC 변경 등에 따라 플레이 정보가 유지되지 않을 수 있습니다.\n중요한 업데이트가 진행될 경우 관련 내용을 공지로 안내드리겠습니다."
  },
  {
    id: "F-09",
    category: "게임플레이",
    question: "화면 크기를 조절할 수 있나요?",
    answer: "네.\n둥둥아일랜드는 PC 창 형태로 실행되며, 일부 화면은 크기 조절을 지원합니다.\n다만 화면 크기를 크게 변경할 경우 일부 UI가 어색하게 보일 수 있어, 권장 해상도에서 플레이해 주시길 권장드립니다."
  },
  {
    id: "F-10",
    category: "게임플레이",
    question: "듀얼 모니터에서도 플레이할 수 있나요?",
    answer: "듀얼 모니터 환경에서도 플레이할 수 있도록 개선이 진행되었습니다.\n다만 사용 중인 해상도나 모니터 배치에 따라 일부 화면 표시가 다르게 보일 수 있습니다."
  },
  {
    id: "F-11",
    category: "게임플레이",
    question: "낚시는 어떻게 진행하나요?",
    answer: "게임 내 낚시 기능을 통해 물고기를 획득할 수 있습니다.\n낚싯대, 미끼, 찌 등 낚시 관련 아이템은 플레이 상황에 따라 활용할 수 있으며, 획득한 물고기는 창고나 도감에서 확인할 수 있습니다."
  },
  {
    id: "F-12",
    category: "게임플레이",
    question: "도감은 어떤 기능인가요?",
    answer: "도감은 획득한 물고기와 수집 정보를 확인할 수 있는 기능입니다.\n물고기 정보, 수집 현황, 최고 기록 등을 확인하며 플레이 목표를 세울 수 있습니다."
  },
  {
    id: "F-13",
    category: "게임플레이",
    question: "꾸미기 모드는 어떤 기능인가요?",
    answer: "꾸미기 모드는 섬과 호수 주변 공간을 자유롭게 꾸밀 수 있는 기능입니다.\n가구와 장식물을 배치하고, 위치를 조정하며 자신만의 공간을 만들 수 있습니다."
  },
  {
    id: "F-14",
    category: "게임플레이",
    question: "상점에서는 무엇을 할 수 있나요?",
    answer: "상점에서는 꾸미기 아이템, 낚시 아이템, 레시피 등 게임 플레이에 필요한 다양한 아이템을 확인할 수 있습니다.\n현재 상점은 유료 결제가 아닌 게임 내 재화 사용을 기준으로 구성되어 있습니다."
  },
  {
    id: "F-15",
    category: "게임플레이",
    question: "우편함은 어떤 기능인가요?",
    answer: "우편함은 공지와 보상을 확인할 수 있는 기능입니다.\n이벤트 보상, 점검 보상 등이 지급될 경우 우편함을 통해 받을 수 있습니다."
  },
  {
    id: "F-16",
    category: "게임플레이",
    question: "우편 보상은 언제까지 받을 수 있나요?",
    answer: "우편 보상은 지급된 내용에 따라 수령 기간이 다를 수 있습니다.\n수령 기간이 지난 우편은 삭제될 수 있으니, 보상 우편을 확인하면 기간 내에 받아 주세요."
  },
  {
    id: "F-17",
    category: "오류/버그",
    question: "게임이 멈추거나 화면이 이상하게 보이면 어떻게 해야 하나요?",
    answer: "먼저 게임을 종료한 뒤 다시 실행해 주세요.\n재실행 후에도 문제가 계속된다면 아래 내용을 함께 전달해 주세요.\n\n발생한 상황\n사용 중인 PC 환경\n문제가 발생한 화면\n가능하다면 스크린샷\n\n확인 후 최대한 빠르게 점검하겠습니다."
  },
  {
    id: "F-18",
    category: "오류/버그",
    question: "버그 제보나 의견은 어디로 보내면 되나요?",
    answer: "게임 이용 중 발견한 오류나 개선 의견은 공식 커뮤니티 또는 문의 채널을 통해 보내주세요.\n보내주신 내용은 업데이트와 개선 작업에 참고하겠습니다."
  },
  {
    id: "F-19",
    category: "계정",
    question: "추후 로그인이나 결제 기능이 추가될 예정인가요?",
    answer: "현재 빌드에서는 로그인과 결제 기능을 제공하지 않습니다.\n추후 기능이 추가될 경우 업데이트 공지를 통해 자세히 안내드리겠습니다."
  }
];

export const SANCTIONS_DATA: Sanction[] = [
  {
    id: "S-25",
    title: "[제재] 비승인 불법 매크로 매점매석 및 영지 해킹 계정 제재 내역 안내 (25차)",
    date: "2026-06-16",
    targetCount: 19,
    reason: "핵/비인가 프로그램 사용",
    portfolioRationale: "민감한 개인정보(닉네임 마스킹) 및 공무 기준을 법적/운영정책적 기준에 안전하게 준수하면서 악성 이용자를 강력히 공표하여 일반 유저 둥이님들에게 엄중한 신뢰감을 전파하고 매니징 권위를 확보하는 '형사 처분 행정적 공지' 시뮬레이션입니다. 마스킹 템플릿 처리 능력을 보여줍니다.",
    content: `안녕하세요, 둥둥아일랜드의 아름다운 법률 사파이어를 지키는 **GM 둥곰**입니다.

저희 수사팀은 6월 15일 야간 실시간 인게임 자원 데이터베이스 대조 및 다중 동시 접근 패킷 트래커 세션을 가동한 결과, 중국/유럽 일부 리커버리 IP 프록시를 가동하여 대량의 계정을 기계적으로 연동 생성한 후 오로지 '호수 산딸기 과일'만 1초당 100개씩 가차 마이닝 매크로 클라이언트로 긁어가 게임 내 재화 시세를 혼탁하게 교란한 악성 작업장 사냥 단체 총 19개 계정을 영구 봉쇄 조치 완료하였기에 유저 둥이 모범 정책에 의거 공개 정비 공고합니다.

둥둥아일랜드는 비인가 제3방 보안 취약 솔루션 패킷 변조 및 하드웨어 가상화 비정상 에뮬레이팅 행위에 대해 단 1밀리미터 수준의 타협도 타협하지 않는 **원-스트라이크 영구 차단 원칙(Zero-Tolerance Policy)**을 적용하고 있습니다.

---

### ■ 영구 제한 아이디 닉네임 리스트 (마스킹 적용)

| 인게임 대표 닉네임 | 사유 | 제재 수위 | 기간 |
| :--- | :--- | :--- | :--- |
| **ang*** | 비인가 다중 매크로 오토 | 영구 격리 | 무기한 영구 |
| **fruits*** | 작업장 산딸기 어뷰징 | 영구 격리 | 무기한 영구 |
| **goldm*** | 패킷 변조 강제 해금 | 영구 격리 | 무기한 영구 |
| **macr*** | 하드웨어 마우스 오토 리깅 | 계정 정지 | 365일 제한 |
| **qqq9*** | 프록시 우회 다중 가입 계정 | 영구 격리 | 무기한 영구 |
| *(나머지 가상 인스턴스 닉네임 소외 작업장 블라인드 계정 14개 동일 조치 적용)*

---

유저 둥이님들이 쏟아부으신 시간과 노력이 한낱 야비한 조작 프로그램 공격에 의해 더럽혀지지 않도록 저희 보안 매니저 곰돌이들은 수호방패 센서를 항시 예리하게 열어두겠습니다. 클린한 섬 가꾸기에 유저 둥이님들의 적극적인 목격 제보 부탁드립니다.`,
    list: [
      { username: "ang***", penalty: "영구 정지", duration: "영구" },
      { username: "fruits***", penalty: "영구 정지", duration: "영구" },
      { username: "goldm***", penalty: "영구 정지", duration: "영구" },
      { username: "macr***", penalty: "이용 정지", duration: "365일" },
      { username: "qqq9***", penalty: "영구 정지", duration: "영구" }
    ]
  }
];

export const PATCH_NOTES: PatchNote[] = [
  {
    id: "P-OBT-4-1",
    version: "OBT 4-1차",
    date: "2026-06-15",
    title: "[패치노트] OBT 4-1차 업데이트 내역",
    summary: "도움말 기능이 추가되었으며 음반, 상점, 도감 편의성과 버그 오류를 개선했습니다.",
    portfolioRationale: "신규 도움말 시스템 도입과 음반, 상점, 도감, 수정 등 메이저 편의성 패치 내역입니다.",
    sections: [
      {
        title: "신규 기능",
        items: [
          "■ 도움말 시스템 추가",
          "  • 게임 내 도움말 기능이 추가되었습니다.",
          "  • 콘텐츠별로 필요한 안내를 확인할 수 있습니다.",
          "  • 처음 이용하는 기능도 더 쉽게 이해할 수 있도록 가이드를 제공합니다."
        ]
      },
      {
        title: "개선 사항",
        items: [
          "■ 음반 시스템 개선",
          "  • 음반 정렬 기능이 추가되었습니다.",
          "  • 음반 필터 기능이 추가되었습니다.",
          "  • 보유한 음반을 더 편하게 확인할 수 있도록 개선했습니다.",
          "■ 상점 개선",
          "  • 상점 이용 시 효과음이 추가되었습니다.",
          "  • 상점 UI를 더 보기 쉽게 개선했습니다.",
          "  • 아이템 구매 흐름이 더 자연스럽게 진행되도록 수정했습니다.",
          "■ 도감 개선",
          "  • 도감 정보 표시 방식을 개선했습니다.",
          "  • 도감 UI를 더 보기 편하게 수정했습니다.",
          "  • 물고기 정보와 수집 현황을 더 쉽게 확인할 수 있도록 개선했습니다."
        ]
      },
      {
        title: "버그 수정",
        items: [
          "• 데이터가 정상적으로 반영되지 않던 일부 동기화 오류를 수정했습니다.",
          "• 일부 팝업창이 정상적으로 표시되지 않던 문제를 수정했습니다.",
          "• 상점 이용 중 발생하던 일부 오류를 수정했습니다.",
          "• 꾸미기 모드 이용 중 발생하던 일부 오류를 수정했습니다."
        ]
      }
    ],
    cmComment: `안녕하세요.
둥둥아일랜드 운영팀입니다.

OBT 4-1차 업데이트를 통해 도움말 기능이 새롭게 추가되었으며, 음반, 상점, 도감 등 주요 기능의 사용성이 개선되었습니다.

더 안정적이고 편리한 플레이 환경을 제공할 수 있도록 계속 개선해 나가겠습니다.

감사합니다.`
  },
  {
    id: "P-OBT-3",
    version: "OBT 3차",
    date: "2026-06-12",
    title: "[패치노트] OBT 3차 업데이트 내역",
    summary: "우편함 기능이 새로 추가되었으며 낚시, 꾸미기 모드, 환경설정 등 주요 기능과 버그를 개선했습니다.",
    portfolioRationale: "OBT 3차 업데이트 상세 내역입니다. 신규 핵심 편의 기능을 구조화하고 가시성을 높였습니다.",
    sections: [
      {
        title: "신규 기능",
        items: [
          "■ 우편함 시스템 추가",
          "  • 게임 내에서 우편을 확인할 수 있는 우편함이 추가되었습니다.",
          "  • 점검 보상, 이벤트 보상 등 보상 우편을 받을 수 있습니다.",
          "  • 운영 안내를 확인할 수 있는 공지 우편 기능이 추가되었습니다."
        ]
      },
      {
        title: "콘텐츠 개선",
        items: [
          "■ 플레이어 기능 개선",
          "  • 낚싯대 장착 기능이 개선되었습니다.",
          "  • 보상을 획득했을 때 출력되는 연출이 추가되었습니다.",
          "  • 플레이 중 보상 획득 상황을 더 쉽게 확인할 수 있도록 개선했습니다.",
          "■ 꾸미기 모드 개선",
          "  • 장식물 배치 안정성이 개선되었습니다.",
          "  • 배치한 오브젝트를 회수하는 기능이 개선되었습니다.",
          "  • 꾸미기 모드에서 카메라 조작이 더 자연스럽게 동작하도록 수정했습니다.",
          "■ 환경설정 개선",
          "  • 듀얼 모니터 환경을 지원하도록 개선했습니다.",
          "  • 설정창 UI를 더 보기 쉽게 수정했습니다.",
          "  • 설정 항목을 더 편하게 확인할 수 있도록 화면 구성을 조정했습니다."
        ]
      },
      {
        title: "버그 수정",
        items: [
          "• 저장 데이터가 정상적으로 반영되지 않던 문제를 수정했습니다.",
          "• 일부 UI가 정상적으로 표시되지 않던 문제를 수정했습니다.",
          "• 꾸미기 모드 이용 중 발생하던 충돌 오류를 수정했습니다."
        ]
      }
    ],
    cmComment: `안녕하세요.
둥둥아일랜드 운영팀입니다.

OBT 3차 업데이트를 통해 우편함 기능이 새롭게 추가되었으며, 낚시, 꾸미기 모드, 환경설정 등 주요 기능의 사용성이 개선되었습니다.

앞으로도 OBT 기간 동안 확인되는 문제를 빠르게 수정하고, 더 안정적인 플레이 환경을 제공할 수 있도록 개선해 나가겠습니다.

감사합니다.`
  }
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: "CP-01",
    title: "야간에 켜놓고 일어났는데 골드 벌린거 대박ㅋㅋㅋ 드디어 라벤더 호수 샀다!",
    author: "방치형러브",
    date: "2026-06-17",
    likes: 142,
    views: 1020,
    isPinned: true,
    portfolioRationale: "커뮤니티 관리 활동 중 '핵심 소통 핀 박기(pinned response)'를 통한 친밀 유저 팬덤 육성 방식 예시입니다. 유저들의 자동화 시스템 및 무과금 호수 꾸미기 긍정 여론을 증폭하고 피드백을 수용하여 커뮤니티 신뢰를 공고히 다집니다.",
    content: "어제 자기전에 자동 낚시랑 자동 밥먹기(물고기 구이 세팅) 빵빵하게 켜두고 잤거든? 물속에 빠지는 버그나 조작 먹통도 전혀 없고 밤새 지가 알아서 낚시하고 알아서 먹으면서 골드 모아둠ㅋㅋㅋ 아침에 보니까 85,000골드 쌓여있어서 바로 상점 달려가서 '가을 핑크 라벤더 호수정원' 배경 레이아웃 질러버림! 전경 일러스트 진짜 몽환적이고 대예쁨 ㅠㅠ 다들 야간 자동 세팅 돌려라!",
    replies: [
      {
        author: "배치마스터",
        content: "헐 8만골드 개부럽네요 ㅠㅠ 저는 오토 낚시 켜두고 밥(요리) 세팅 해둔거 가방 다 차서 오전 내내 썩히고 있었는데 가방 늘리는거부터 사야겠어요!",
        date: "2026-06-17 11:32"
      },
      {
        author: "CM 둥곰",
        content: "방치형러브 유저 둥이님! 밤새 조용히 흐르는 호숫가에서 아늑하게 모아주신 소중한 골드로 꿈꾸시던 라벤더 호수 배경 레이아웃을 교체하셨다니 축하드립니다! 🌸 둥둥아일랜드의 귀여운 곰돌이 캐릭터는 물에 절대로 잠기거나 굳지 않는 무중력 안전 시스템으로 세팅되어 있으니 걱정 마시고 켜두셔도 괜찮습니다. 상점에서 파는 다양한 조경용 꽃나무랑 가로등 장식물들을 그 라벤더 호수 위에 요리조리 자유롭게 배치해 보시며 더욱 특별한 아일랜드를 자랑해 주세요! 둥곰이가 매시간 순찰하여 영지 아이디어를 메모 중이랍니다! 😭",
        date: "2026-06-17 11:45",
        isGM: true
      },
      {
        author: "무과금만세",
        content: "진짜 결제 1원도 유도 안하고 오직 자동낚시+골드벌이로만 최고급 호수풍경이랑 가구 살 수 있다는게 이 게임의 신의 한 수임 소소하게 켜두기 개꿀",
        date: "2026-06-17 11:58"
      }
    ]
  },
  {
    id: "CP-02",
    title: "자동행동으로 모은 골드로 꾸며본 나만의 서정적인 섬 가든스케이프",
    author: "클린정원사",
    date: "2026-06-16",
    likes: 88,
    views: 615,
    isPinned: false,
    portfolioRationale: "민원 및 시스템 안내 접수 글에 대해 친절한 조언 및 유저 맞춤 지원 피드백으로 활발한 서포트를 표현하는 커뮤니티 전담 응대 매뉴얼 예시입니다.",
    content: "자동 낚시로 알아서 밥 먹고 모은 돈으로 산 '동화속 숲속 오두막'이랑 '수정 가로등' 몇 개 퐁당퐁당 연못가에 꺾어 배치해 봤는데 분위기 장난 아님. 호숫가 레이아웃을 이번에 청정 은하수 비주얼로 바꿨더니 수정 가로등 빛 반사되는 게 예술임. 이거 PC 화면 한구석에 조그맣게 켜놓고 사무실에서 멍 때리기 최고의 힐링 게임 인정한다. 과금 유도도 아예 없고 완벽 무결해서 마음 편안함.",
    replies: [
      {
        author: "CM 둥곰",
        content: "클린정원사 정원사님! 은하수 빛깔 호수 스킨 위에 '수정 가로등' 광원이 꺾여 반사되는 전경이라니... 정말 상상만 해도 심장이 녹아내리는 센스 넘치는 연출입니다! 💡 저희 게임은 언제나 바쁜 일상 한편에 작은 위젯 창으로 켜두고, 유저 여러분들의 시선과 마음에 평온을 채워드리는 무결제 힐링 안식처가 되기를 깊이 바라고 있답니다. 다음번엔 섬 상점 조경 가구 업데이트를 통해 더욱 아름다운 정원용 아치와 수생식물 장식들을 출시해 올게요! 매력 충만한 섬 일지 꾸준히 공유해 주세요!",
        date: "2026-06-16 11:32",
        isGM: true
      }
    ]
  }
];
