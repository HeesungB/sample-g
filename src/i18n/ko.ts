export const ko = {
  // ──────────────────────────────────────────────
  // Navbar (src/components/Navbar.tsx)
  // ──────────────────────────────────────────────
  nav: {
    home: '홈', // 홈 링크
    about: '소개', // 소개 링크
    events: '이벤트', // 이벤트 링크
    buidlhack: 'BuidlHack2026', // BuidlHack 링크
    partners: '파트너', // 파트너 링크
    contact: '문의', // 문의 링크
    joinNow: '참여하기', // CTA 버튼
  },

  // ──────────────────────────────────────────────
  // Hero (src/components/Hero.tsx) - 메인 페이지 히어로 섹션
  // ──────────────────────────────────────────────
  hero: {
    title1: '글로벌 빌더 게이트웨이', // 제목 첫 줄
    title2: 'to APAC', // 제목 둘째 줄
    // 부제목 (날짜/장소)
    subtitle: '2026년 4월 13-19일 | 서울, 대한민국',
    seeEvents: '이벤트 보기', // CTA 버튼 1
    joinCommunity: '커뮤니티 참여', // CTA 버튼 2
  },

  // ──────────────────────────────────────────────
  // Description (src/components/Description.tsx) - 메인 페이지 소개 섹션
  // ──────────────────────────────────────────────
  desc: {
    label: 'Hello World, from Korea', // 섹션 라벨 태그
    heading: '아시아는 가장 빠르게 성장하는', // 제목 앞부분
    headingHighlight: 'Web3 혁신', // 제목 강조 (컬러)
    headingEnd: '중심지입니다.', // 제목 뒷부분
    // 본문 문단 1
    para1: '규모, 유동성, 그리고 빠르게 확장하는 빌더 기반을 바탕으로, Korea Buidl Week은 이 모멘텀을 하나의 집중된 순간으로 응축합니다—아시아의 빌더들이 함께 모여 세계와 연결되는 순간입니다.',
    // 본문 문단 2
    para2: 'Korea Buidl Week은 컨퍼런스, 레지던시, 스타트업 경진대회, 커뮤니티 주도 이벤트를 통해 서울을 글로벌 런치패드로 변환합니다. 이는 자신감과 협업을 보여주며—아시아가 지금 무엇을 구축하고 있고, 다음에 어디로 향하는지를 보여줍니다.',
  },

  // ──────────────────────────────────────────────
  // Track Record (src/components/TrackRecord.tsx) - 메인 페이지 실적 섹션
  // ──────────────────────────────────────────────
  track: {
    label: '트랙 레코드', // 섹션 라벨 태그
    heading1: '시장 모멘텀에서', // 제목 앞부분
    heading2: '', // 제목 중간 (한국어 미사용)
    headingHighlight: '빌더 현실로', // 제목 강조 (컬러)
    sinceLbl: '시작', // 통계 카드 1 라벨
    sinceVal: '2018', // 통계 카드 1 값
    // 통계 카드 1 부가설명
    sinceSub: '가장 오래된 빌더 중심 컨퍼런스',
    eventsLbl: '이벤트', // 통계 카드 2 라벨
    eventsVal: '150+', // 통계 카드 2 값
    // 통계 카드 2 부가설명
    eventsSub: '플래그십 컨퍼런스 및 빌더 모임',
    attendeesLbl: '참가자', // 통계 카드 3 라벨
    attendeesVal: '20K+', // 통계 카드 3 값
    attendeesSub: '주간 참가자', // 통계 카드 3 부가설명
    orgsLbl: '조직', // 통계 카드 4 라벨
    orgsVal: '100+', // 통계 카드 4 값
    // 통계 카드 4 부가설명
    orgsSub: '글로벌 선도 재단 및 연구기관',
  },

  // ──────────────────────────────────────────────
  // Alliance (src/components/Alliance.tsx) - 메인 페이지 얼라이언스 섹션
  // ──────────────────────────────────────────────
  alliance: {
    heading1: '', // 제목 앞부분 (한국어 미사용)
    headingHighlight: '얼라이언스', // 제목 강조 (컬러)
    // 섹션 설명
    description: '한국의 선도적인 Web3 조직들이 거버넌스, 생태계 큐레이션, 전략적 방향을 제공하는 연합체입니다.',
  },

  // ──────────────────────────────────────────────
  // Events Overview (src/components/EventsOverview.tsx) - 메인 페이지 이벤트 목록 섹션
  // ──────────────────────────────────────────────
  events: {
    heading1: '', // 제목 앞부분 (한국어 미사용)
    headingHighlight: '이벤트', // 제목 강조 (컬러)
    // 섹션 설명
    description: '서울 전역의 플래그십 컨퍼런스와 커뮤니티 주도 모임을 탐색하세요.',
    addSideEvent: '+ 사이드 이벤트 추가', // 사이드 이벤트 추가 버튼
    mainEvents: '메인 이벤트', // 탭 버튼
    sideEvents: '사이드 이벤트', // 탭 버튼
    loading: '사이드 이벤트 로딩 중...', // 로딩 상태
    // 사이드 이벤트 없음 상태
    noEvents: '아직 사이드 이벤트가 없습니다. 첫 번째로 추가해 보세요!',
    // 사이드 이벤트 목록 내 메인 이벤트 뱃지
    mainEventBadge: '메인 이벤트',
  },

  // ──────────────────────────────────────────────
  // Partners (src/components/Partners.tsx) - 메인 페이지 파트너 섹션
  // ──────────────────────────────────────────────
  partners: {
    heading1: '', // 제목 앞부분 (한국어 미사용)
    headingHighlight: '파트너', // 제목 강조 (컬러)
    // 섹션 설명
    description: 'Korea Buidl Week을 가능하게 하는 조직들입니다.',
    cat1: '메인 이벤트 주최사', // 카테고리 1
    cat2: '참여 조직', // 카테고리 2
    cat3: '미디어 파트너', // 카테고리 3
    cat4: '추가 지원', // 카테고리 4
    cat5: '커뮤니티 파트너', // 카테고리 5
  },

  // ──────────────────────────────────────────────
  // JoinUs (src/components/JoinUs.tsx) - 메인 페이지 참여 CTA 섹션
  // ──────────────────────────────────────────────
  join: {
    label: '참여하기', // 섹션 라벨 태그
    heading1: '', // 제목 앞부분 (한국어 미사용)
    headingHighlight: '무브먼트에 함께하세요', // 제목 강조 (컬러)
    // 섹션 설명
    description: '빌더, 스폰서, 커뮤니티 리더 누구든—올 4월 서울에서 당신의 자리가 있습니다.',
    registerTitle: '이벤트 등록', // 참여 카드 1 제목
    // 참여 카드 1 부제목
    registerSub: '주간 중 나만의 이벤트를 개최하세요',
    sponsorTitle: '이벤트 후원', // 참여 카드 2 제목
    // 참여 카드 2 부제목
    sponsorSub: '주간 규모의 가시성을 확보하세요',
    partnerTitle: '파트너 되기', // 참여 카드 3 제목
    partnerSub: '얼라이언스와 협업하세요', // 참여 카드 3 부제목
    communityTitle: '커뮤니티 참여', // 참여 카드 4 제목
    // 참여 카드 4 부제목
    communitySub: '텔레그램에서 최신 소식을 받으세요',
  },

  // ──────────────────────────────────────────────
  // Footer (src/components/Footer.tsx) - 전체 페이지 푸터
  // ──────────────────────────────────────────────
  footer: {
    // 푸터 설명 텍스트
    description: '아시아에서 가장 영향력 있는 빌더 중심 페스티벌, 서울에서 Web3 모멘텀을 하나의 집중된 순간으로 응축합니다.',
    links: '링크', // 링크 섹션 제목
    contact: '연락처', // 연락처 섹션 제목
    copyright: '© 2026 Korea Buidl Week Alliance. All rights reserved.', // 저작권
    location: '서울, 대한민국', // 위치 정보
  },

  // ──────────────────────────────────────────────
  // About Page (src/app/about/page.tsx) - 소개 페이지
  // ──────────────────────────────────────────────
  about: {
    title1: '', // 제목 앞부분 (한국어 미사용)
    title2: 'KBW 2026 소개', // 제목 강조
    // 소개 문구
    intro: 'Korea Buidl Week은 분산형, 다중 호스트, 빌더 중심의 페스티벌입니다.',
    // 본문 설명
    body: '단일 이벤트가 아닌—기술 컨퍼런스, 리테일 이벤트, 해커톤, 스타트업 경진대회, 문화 활동을 포함하는 공동 창작 생태계 수준의 경험입니다.',
    card1Title: '한국, 암호화폐 및 인재 강국', // 카드 1 제목
    // 카드 1 본문
    card1Body: '한국은 깊은 암호화폐 유동성, 대규모 사용자 기반, 성숙한 거래소 인프라를 결합합니다. 세계적 수준의 엔지니어링 문화와 강력한 대학 파이프라인을 바탕으로, 빌더들이 지속적으로 팀을 구성하고 실제 제품을 출시하는 밀집된 인재 허브가 되었습니다.',
    card2Title: 'APAC 글로벌 빌더 게이트웨이', // 카드 2 제목
    // 카드 2 본문
    card2Body: 'Korea Buidl Week은 플래그십 컨퍼런스, 빌더 레지던시, 스타트업 경진대회, 쇼케이스를 한 주에 집중시켜 서울을 APAC의 빌더 게이트웨이로 변환합니다.',
  },

  // ──────────────────────────────────────────────
  // Contact Page (src/app/contact/page.tsx) - 문의 페이지
  // ──────────────────────────────────────────────
  contactPage: {
    title1: '', // 제목 앞부분 (한국어 미사용)
    title2: '문의하기', // 제목 강조
    // 페이지 부제목
    subtitle: '궁금한 점이 있거나 참여하고 싶으신가요? KBWA 팀에게 연락해 주세요.',
    secretary: '사무국장', // 연락처 라벨
    email: '이메일', // 연락처 라벨
    telegram: '텔레그램', // 연락처 라벨
    location: '위치', // 연락처 라벨
    sendMessage: '메시지 보내기', // 폼 제목
    messageSent: '메시지 전송 완료!', // 성공 상태 제목
    // 성공 상태 부제목
    messageSentSub: '가능한 빨리 답변 드리겠습니다.',
    sendAnother: '다른 메시지 보내기', // 다시 보내기 버튼
    firstName: '이름', // 폼 placeholder
    lastName: '성', // 폼 placeholder
    emailAddress: '이메일 주소', // 폼 placeholder
    subject1: '스폰서십 문의', // 주제 옵션 1
    subject2: '이벤트 개최 문의', // 주제 옵션 2
    subject3: '일반 문의', // 주제 옵션 3
    message: '메시지', // 폼 placeholder
    submit: '제출', // 제출 버튼
    sending: '전송 중...', // 전송 중 상태
    // 에러 메시지
    error: '전송에 실패했습니다. 다시 시도하거나 이메일로 직접 연락해 주세요.',
  },

  // ──────────────────────────────────────────────
  // Events Page (src/app/events/page.tsx) - 이벤트 페이지
  // ──────────────────────────────────────────────
  eventsPage: {
    title1: '', // 제목 앞부분 (한국어 미사용)
    titleHighlight: '스케줄', // 제목 강조
    // 페이지 부제목
    subtitle: '서울 전역의 플래그십 컨퍼런스와 기술 해커톤.',
  },

  // ──────────────────────────────────────────────
  // Partners Page (src/app/partners/page.tsx) - 파트너 페이지
  // ──────────────────────────────────────────────
  partnersPage: {
    title1: '', // 제목 앞부분 (한국어 미사용)
    titleHighlight: '혁신 네트워크', // 제목 강조
    // 페이지 부제목
    subtitle: '한국의 선도적인 Web3 생태계와 글로벌 빌더를 연결합니다.',
    additionalTitle1: '추가', // 추가 지원 섹션 제목 앞부분
    additionalHighlight: '지원', // 추가 지원 섹션 제목 강조

    // LootGo 카드 (파트너 페이지 하단)
    lootgoSubtitle: '실제 세계 보물찾기',
    lootgoTitle: '오디언스를 활성화하세요',
    lootgoHighlight: 'LootGO와 함께',
    lootgoDesc: 'LootGO는 일상을 실제 세계 보물찾기로 변환합니다. 걸으면서 루트박스를 수집하고, 열어서 암호화폐, NFT, 실물 상품을 획득하는 무료 플레이 앱입니다. Monad 블록체인 기반으로 임베디드 월렛, 법정화폐 온램프, 1inch DEX 통합을 통한 원활한 토큰 스왑을 지원합니다.',
    lootgoBtnText: '제안서 보기',

    // Protoville 카드 (파트너 페이지 하단)
    protovilleTitle: '농촌의 미래를 프로토타이핑', // 제목
    // 날짜/장소
    protovilleDate: '2026년 4월 2일 – 8일 · 남해 두모마을, 대한민국',
    protovilleDesc: '7일간의 팝업 빌리지—', // 설명 앞부분
    // 설명 강조
    protovilleHighlight: '농촌 기본소득, 글로컬-로컬 공동창작, 딥 네이처',
    // 설명 뒷부분
    protovilleDescEnd: '의 교차점에서 지속 가능한 커뮤니티 삶의 다음 장을 공동 창작합니다.',
    deepWork: '딥 워크 & 래디컬 포커스', // 특징 1 제목
    deepWorkDesc: '— 한국에서 가장 오래된 해상국립공원.', // 특징 1 설명
    ubiWatching: 'UBI-워칭', // 특징 2 제목
    ubiWatchingDesc: '— 농촌 UBI 파일럿 현장 연구.', // 특징 2 설명
    coCreation: '공동 창작', // 특징 3 제목
    coCreationDesc: '— 소셜 다이닝, 바이브코딩, 노매드 교류.', // 특징 3 설명
    sovereignVillage: '소버린 빌리지', // 특징 4 제목
    sovereignVillageDesc: '— 모듈러 홈 및 퍼머컬처 가든.', // 특징 4 설명
    protoCost: '비용:', // 비용 라벨
    // 비용 설명
    protoCostDesc: '$200–$600 USD (선택식) · 100% 비영리 · 자체 숙소 시 무료',
    website: '웹사이트', // 웹사이트 링크 텍스트

    // Elixi Advisory Desk 카드 (파트너 페이지 하단)
    elixiAdvisoryTitle: '공식 사이드 이벤트', // 제목 앞부분
    elixiAdvisoryHighlight: '자문 데스크', // 제목 강조
    // 설명
    elixiAdvisoryDesc: '인가된 액셀러레이터가 한국에서의 성공적인 사이드 이벤트를 지원합니다.',
    venueRec: '베뉴 추천', // 특징 1 제목
    // 특징 1 설명
    venueRecDesc: '— 규모, 분위기, 포지션에 맞는 최적의 선택.',
    budgetOpt: '예산 최적화', // 특징 2 제목
    budgetOptDesc: '— 현실 검토와 비용 최적화.', // 특징 2 설명
    localContracts: '현지 계약', // 특징 3 제목
    localContractsDesc: '— 계약 처리를 대행합니다.', // 특징 3 설명
    agencyReferrals: '에이전시 연결', // 특징 4 제목
    // 특징 4 설명
    agencyReferralsDesc: '— 신뢰할 수 있는 프로덕션 및 에이전시 연결.',

    // Elixi Venture Studio 카드 (파트너 페이지 하단)
    ventureTitle: '벤처 스튜디오', // 제목 앞부분
    ventureHighlight: '그룹', // 제목 강조
    // 설명 1
    ventureDesc1: '정부 인가 한국 GTM 액셀러레이터 · 900+ 전략 · 200+ 맨데이트',
    // 설명 2
    ventureDesc2: '한국은 장기적이고 신뢰 기반의 시장입니다. Elixi.가 기관적 신뢰성을 바탕으로 한국 확장을 지원합니다.',
    instTrust: '기관 신뢰 엔진', // 특징 1 제목
    // 특징 1 설명
    instTrustDesc: '라이선스 기반 GTM으로 규제 복잡성을 시장 접근으로 전환합니다.',
    dataKol: '데이터 기반 KOL 점화', // 특징 2 제목
    // 특징 2 설명
    dataKolDesc: 'KPI 기반의 측정 가능한 실행을 통한 Web2 및 Web3 KOL 생태계.',
    offlineAuth: '신뢰할 수 있는 오프라인 권위', // 특징 3 제목
    // 특징 3 설명
    offlineAuthDesc: 'VVIP, 정부, 대학 활성화를 통한 브랜드 권위.',

    // Protoville 카드 서브타이틀
    protovilleSubtitle: '팝업 빌리지 체험',
    protovilleBtnText: '자세히 보기',

    // Elixi 카드 서브타이틀
    elixiSubtitle: '정부 인가 액셀러레이터',
    elixiDesc: '인가된 한국 GTM 액셀러레이터가 기관적 신뢰성을 바탕으로 성공적인 시장 진출과 사이드 이벤트 운영을 지원합니다.',
    elixiBtnText: '자세히 보기',

    // O-SEAN 카드 (파트너 페이지 하단)
    oseanSubtitle: '올인원 굿즈 & 이벤트 프로덕션',
    oseanTitle: '이벤트 준비는', // 제목 앞부분
    oseanHighlight: 'O-SEAN과 함께', // 제목 강조
    oseanDesc: 'O-SEAN은 Web3 굿즈 제작 및 이벤트 프로덕션 회사로, 콘텐츠 기획부터 디자인, 제작, 배송까지 올인원 서비스를 제공합니다. 티셔츠, 스티커, 키링, 가방 등 블록체인 프로젝트를 위한 커스텀 굿즈를 제작하며, Abstract, Pudgy Penguins, Monad, Story 등이 신뢰하는 파트너입니다.',
    oseanBtnText: '웹사이트 방문',

    // ATH 카드 (파트너 페이지 하단)
    athSubtitle: '풀사이클 크리에이티브 프로덕션',
    athTitle: '빌딩에 집중하세요.',
    athHighlight: '스토리는 저희가 만듭니다.',
    athDesc: 'Korea BUIDL Week 2026에 참가하신다면, 컨퍼런스 현장을 촬영하고, 임팩트 있는 브이로그를 제작하거나, 시네마틱 트레일러를 만들어 드립니다. ATH는 풀사이클 크리에이티브 프로덕션입니다. 단순히 촬영하고 편집하는 것이 아닙니다. 목표를 분석하고, 전략적 콘텐츠 플랜을 수립하며, 컨셉과 대본부터 비주얼, 편집, 퍼블리싱까지 엔드투엔드로 실행합니다.',
    athBtnText: '웹사이트 방문',

    // 파트너 되기 CTA (파트너 페이지 최하단)
    becomePartnerTitle: '', // 제목 앞부분 (한국어 미사용)
    becomePartnerHighlight: '파트너 되기', // 제목 강조
    // CTA 설명
    becomePartnerDesc: '아시아에서 Web3의 미래를 함께 만들어갈 조직의 연합체에 참여하세요.',
    inquiryBtn: '파트너십 문의', // CTA 버튼
  },

  // ──────────────────────────────────────────────
  // BuidlHack Page (src/app/buidlhack2026/page.tsx) - BuidlHack 페이지
  // ──────────────────────────────────────────────
  buidlhack: {
    title1: 'BuidlHack', // 제목 1
    title2: '2026', // 제목 2
    // 부제목 (날짜/장소)
    subtitle: '2026년 3월 11일 – 4월 18일 | 서울, 대한민국',
    // 페이지 설명
    desc: 'Korea Buidl Week의 플래그십 해커톤. 빌더들이 실제로 만드는 곳.',
    joinCommunity: '커뮤니티 참여', // CTA 버튼 1
    applyToHack: '해커톤 신청', // CTA 버튼 2

    // 트랙 레코드 섹션 (BuidlHack 페이지 내)
    trackRecordTitle1: '트랙', // 제목 앞부분
    trackRecordHighlight: '레코드', // 제목 강조
    // 섹션 설명
    trackRecordDesc: 'Korea Buidl Week은 APAC 빌더 문화의 최전선에 있었습니다.',
    sinceLbl: '시작', // 통계 1 라벨
    // 통계 1 설명
    sinceDesc: '한국에서 가장 오래된 빌더 중심 기술 컨퍼런스',
    sideEventsLbl: '사이드 이벤트', // 통계 2 라벨
    // 통계 2 설명
    sideEventsDesc: 'APAC에서 가장 활발한 분산형 빌더 생태계 중 하나',
    attendeesLbl: '참가자', // 통계 3 라벨
    attendeesDesc: '주간 참가자', // 통계 3 설명
    orgsLbl: '조직', // 통계 4 라벨
    // 통계 4 설명
    orgsDesc: '선도적인 재단, 연구기관, 인프라 팀, 투자자',

    // 상금 섹션 (BuidlHack 페이지 내)
    prizeTitle1: '상금', // 제목 앞부분
    prizeHighlight: '풀', // 제목 강조
    prizeAvailable: '총 상금', // 상금 설명

    // 스케줄 섹션 (BuidlHack 페이지 내)
    scheduleTitle1: '', // 제목 앞부분 (한국어 미사용)
    scheduleHighlight: '스케줄', // 제목 강조
    scheduleDesc: '빌딩, 학습, 경쟁의 5일.', // 설명
    kickoffTitle: '킥오프 AMA',
    kickoffDesc: '트랙, 규칙 및 Q&A',
    bnbWorkshopTitle: 'BNB 워크숍',
    bnbWorkshopDesc: 'BNB 온라인 기술 세션',
    yggWorkshopTitle: 'YGG & Verse8 워크숍',
    yggWorkshopDesc: 'YGG & Verse8 온라인 기술 세션',
    nearWorkshopTitle: 'Near AI 워크숍',
    nearWorkshopDesc: 'Near AI 온라인 기술 세션',
    statusWorkshopTitle: 'Status Network 워크숍',
    statusWorkshopDesc: 'Status Network 온라인 기술 세션',
    builderDayTitle: '빌더 데이',
    builderDayDesc: 'DSRV 오피스에서 오프라인 네트워킹',
    hackingTitle: '해킹 기간',
    hackingTime: '종일',
    hackingDesc: '빌딩, 워크숍 참여, 멘토링',
    submissionTitle: '제출 마감',
    submissionTime: '23:59 PM 까지',
    submissionDesc: '최종 프로젝트 제출 마감 자정',
    pitchTitle: '파이널 피치 데이',
    pitchDesc: '심사위원 앞에서 발표, 수상자 발표',

    // 스폰서 & 파트너 섹션 (BuidlHack 페이지 내)
    sponsorsTitle1: '', // 제목 앞부분 (한국어 미사용)
    sponsorsHighlight: '스폰서', // 제목 강조
    sponsorsDesc: 'BuidlHack 2026을 후원하는 스폰서들.', // 설명
    communityTitle1: '', // 커뮤니티 파트너 제목 앞부분 (한국어 미사용)
    communityHighlight: '커뮤니티 파트너', // 커뮤니티 파트너 제목 강조
    communityDesc: 'BuidlHack 2026을 지원하는 커뮤니티들.', // 커뮤니티 파트너 설명
    partnersTitle1: '', // 제목 앞부분 (한국어 미사용)
    partnersHighlight: '오거나이저', // 제목 강조
    partnersDesc: 'BuidlHack 2026을 지원하는 조직들.', // 설명

    // CTA 섹션 (BuidlHack 페이지 최하단)
    ctaTitle1: '', // 제목 앞부분 (한국어 미사용)
    ctaHighlight: '빌드할 준비 되셨나요?', // 제목 강조
    // CTA 설명
    ctaDesc: 'BuidlHack 2026의 최신 소식을 받으세요 — 팀 매칭, 워크숍 등.',
  },
};
