export const en = {
  // ──────────────────────────────────────────────
  // Navbar (src/components/Navbar.tsx)
  // ──────────────────────────────────────────────
  nav: {
    home: 'Home', // 홈 링크
    about: 'About', // 소개 링크
    events: 'Events', // 이벤트 링크
    buidlhack: 'BuidlHack2026', // BuidlHack 링크
    partners: 'Partners', // 파트너 링크
    contact: 'Contact', // 문의 링크
    joinNow: 'Join Now', // CTA 버튼
  },

  // ──────────────────────────────────────────────
  // Hero (src/components/Hero.tsx) - 메인 페이지 히어로 섹션
  // ──────────────────────────────────────────────
  hero: {
    title1: 'Global Builder Gateway', // 제목 첫 줄
    title2: 'to APAC', // 제목 둘째 줄
    // 부제목 (날짜/장소)
    subtitle: 'April 13-19th, 2026 | Seoul, South Korea',
    seeEvents: 'See Events', // CTA 버튼 1
    joinCommunity: 'Join Community', // CTA 버튼 2
  },

  // ──────────────────────────────────────────────
  // Description (src/components/Description.tsx) - 메인 페이지 소개 섹션
  // ──────────────────────────────────────────────
  desc: {
    label: 'Hello World, from Korea', // 섹션 라벨 태그
    heading: 'Asia is one of the fastest-growing', // 제목 앞부분
    headingHighlight: 'Web3 innovation', // 제목 강조 (컬러)
    headingEnd: 'centers.', // 제목 뒷부분
    // 본문 문단 1
    para1: 'Fueled by scale, liquidity, and a rapidly expanding builder base, Korea Buidl Week concentrates this momentum into one focused moment—where Asia\u2019s builders come together and connect with the world.',
    // 본문 문단 2
    para2: 'Korea Buidl Week turns Seoul into a global launchpad through conferences, residencies, startup competitions, and community-led events. It signals confidence and collaboration—showcasing what Asia is building now, and where it builds next.',
  },

  // ──────────────────────────────────────────────
  // Track Record (src/components/TrackRecord.tsx) - 메인 페이지 실적 섹션
  // ──────────────────────────────────────────────
  track: {
    label: 'Track Record', // 섹션 라벨 태그
    heading1: 'From Market Momentum', // 제목 앞부분
    heading2: 'to', // 제목 중간
    headingHighlight: 'Builder Reality', // 제목 강조 (컬러)
    sinceLbl: 'Since', // 통계 카드 1 라벨
    sinceVal: '2018', // 통계 카드 1 값
    // 통계 카드 1 부가설명
    sinceSub: 'Longest-running builder-first conference',
    eventsLbl: 'Events', // 통계 카드 2 라벨
    eventsVal: '150+', // 통계 카드 2 값
    // 통계 카드 2 부가설명
    eventsSub: 'Flagship conferences and builder gatherings',
    attendeesLbl: 'Attendees', // 통계 카드 3 라벨
    attendeesVal: '20K+', // 통계 카드 3 값
    attendeesSub: 'Week-long participants', // 통계 카드 3 부가설명
    orgsLbl: 'Organizations', // 통계 카드 4 라벨
    orgsVal: '100+', // 통계 카드 4 값
    // 통계 카드 4 부가설명
    orgsSub: 'Global leading foundations & researchers',
  },

  // ──────────────────────────────────────────────
  // Alliance (src/components/Alliance.tsx) - 메인 페이지 얼라이언스 섹션
  // ──────────────────────────────────────────────
  alliance: {
    heading1: 'Meet the', // 제목 앞부분
    headingHighlight: 'Alliance', // 제목 강조 (컬러)
    // 섹션 설명
    description: 'A coalition of Korea\u2019s leading Web3 organizations providing governance, ecosystem curation, and strategic direction.',
  },

  // ──────────────────────────────────────────────
  // Events Overview (src/components/EventsOverview.tsx) - 메인 페이지 이벤트 목록 섹션
  // ──────────────────────────────────────────────
  events: {
    heading1: 'See', // 제목 앞부분
    headingHighlight: 'Events', // 제목 강조 (컬러)
    // 섹션 설명
    description: 'Explore the flagship conferences and community-led gatherings across Seoul.',
    addSideEvent: '+ Add Side Event', // 사이드 이벤트 추가 버튼
    mainEvents: 'Map View', // 탭 버튼
    sideEvents: 'List View', // 탭 버튼
    loading: 'Loading side events...', // 로딩 상태
    // 사이드 이벤트 없음 상태
    noEvents: 'No side events yet. Be the first to add one!',
    // 사이드 이벤트 목록 내 메인 이벤트 뱃지
    mainEventBadge: 'Main Event',
  },

  // ──────────────────────────────────────────────
  // Partners (src/components/Partners.tsx) - 메인 페이지 파트너 섹션
  // ──────────────────────────────────────────────
  partners: {
    heading1: 'Our', // 제목 앞부분
    headingHighlight: 'Partners', // 제목 강조 (컬러)
    // 섹션 설명
    description: 'The organizations making Korea Buidl Week possible.',
    cat1: 'Main Event Organizers', // 카테고리 1
    cat2: 'Participating Organizations', // 카테고리 2
    cat3: 'Media Partners', // 카테고리 3
    cat4: 'Additional Support', // 카테고리 4
    cat5: 'Community Partners', // 카테고리 5
  },

  // ──────────────────────────────────────────────
  // JoinUs (src/components/JoinUs.tsx) - 메인 페이지 참여 CTA 섹션
  // ──────────────────────────────────────────────
  join: {
    label: 'Get Involved', // 섹션 라벨 태그
    heading1: 'Join the', // 제목 앞부분
    headingHighlight: 'Movement', // 제목 강조 (컬러)
    // 섹션 설명
    description: 'Whether you are a builder, sponsor, or community leader, there is a place for you in Seoul this April.',
    registerTitle: 'Register Event', // 참여 카드 1 제목
    // 참여 카드 1 부제목
    registerSub: 'Host your own event during the week',
    sponsorTitle: 'Sponsor Event', // 참여 카드 2 제목
    sponsorSub: 'Gain visibility at week-scale', // 참여 카드 2 부제목
    partnerTitle: 'Become Partner', // 참여 카드 3 제목
    partnerSub: 'Collaborate with the alliance', // 참여 카드 3 부제목
    communityTitle: 'Join Community', // 참여 카드 4 제목
    communitySub: 'Stay updated on Telegram', // 참여 카드 4 부제목
  },

  // ──────────────────────────────────────────────
  // Footer (src/components/Footer.tsx) - 전체 페이지 푸터
  // ──────────────────────────────────────────────
  footer: {
    // 푸터 설명 텍스트
    description: 'Asia\u2019s most influential builder-centric festival, concentrating Web3 momentum into one focused moment in Seoul.',
    links: 'Links', // 링크 섹션 제목
    contact: 'Contact', // 연락처 섹션 제목
    copyright: '© 2026 Korea Buidl Week Alliance. All rights reserved.', // 저작권
    location: 'Seoul, Korea', // 위치 정보
  },

  // ──────────────────────────────────────────────
  // About Page (src/app/about/page.tsx) - 소개 페이지
  // ──────────────────────────────────────────────
  about: {
    title1: 'About', // 제목 앞부분
    title2: 'KBW 2026', // 제목 강조
    // 소개 문구
    intro: 'Korea Buidl Week is a distributed, multi-host, builder-centric festival.',
    // 본문 설명
    body: 'It is not a single event—it is a co-created ecosystem-level experience featuring technical conferences, retail events, hackathons, startup competitions, and cultural activations.',
    card1Title: 'Korea, Crypto & Talent Stronghold', // 카드 1 제목
    // 카드 1 본문
    card1Body: 'Korea combines deep crypto liquidity with a massive user base and a mature exchange infrastructure. Backed by world-class engineering culture and strong university pipelines, it has become a dense talent hub where builders consistently form teams and ship real products.',
    card2Title: 'Global Builder Gateway to APAC', // 카드 2 제목
    // 카드 2 본문
    card2Body: 'Korea Buidl Week turns Seoul into APAC\u2019s builder gateway by concentrating flagship conferences, builder residencies, startup competitions, and showcases into one focused week.',
  },

  // ──────────────────────────────────────────────
  // Contact Page (src/app/contact/page.tsx) - 문의 페이지
  // ──────────────────────────────────────────────
  contactPage: {
    title1: 'Contact', // 제목 앞부분
    title2: 'Us', // 제목 강조
    // 페이지 부제목
    subtitle: 'Have questions or want to get involved? Reach out to the KBWA team.',
    secretary: 'Secretary', // 연락처 라벨
    email: 'Email', // 연락처 라벨
    telegram: 'Telegram', // 연락처 라벨
    location: 'Location', // 연락처 라벨
    sendMessage: 'Send a Message', // 폼 제목
    messageSent: 'Message Sent!', // 성공 상태 제목
    // 성공 상태 부제목
    messageSentSub: 'We\u2019ll get back to you as soon as possible.',
    sendAnother: 'Send another message', // 다시 보내기 버튼
    firstName: 'First Name', // 폼 placeholder
    lastName: 'Last Name', // 폼 placeholder
    emailAddress: 'Email Address', // 폼 placeholder
    subject1: 'Interested in Sponsorship', // 주제 옵션 1
    subject2: 'Interested in Hosting Event', // 주제 옵션 2
    subject3: 'General Inquiry', // 주제 옵션 3
    message: 'Message', // 폼 placeholder
    submit: 'Submit', // 제출 버튼
    sending: 'Sending...', // 전송 중 상태
    // 에러 메시지
    error: 'Failed to send. Please try again or email us directly.',
  },

  // ──────────────────────────────────────────────
  // Events Page (src/app/events/page.tsx) - 이벤트 페이지
  // ──────────────────────────────────────────────
  eventsPage: {
    title1: 'The', // 제목 앞부분
    titleHighlight: 'Schedule', // 제목 강조
    // 페이지 부제목
    subtitle: 'Flagship conferences and technical hackathons across Seoul.',
  },

  // ──────────────────────────────────────────────
  // Partners Page (src/app/partners/page.tsx) - 파트너 페이지
  // ──────────────────────────────────────────────
  partnersPage: {
    title1: 'Network of', // 제목 앞부분
    titleHighlight: 'Innovation', // 제목 강조
    // 페이지 부제목
    subtitle: 'Connecting global builders with Korea\u2019s leading Web3 ecosystem.',
    additionalTitle1: 'Additional', // 추가 지원 섹션 제목 앞부분
    additionalHighlight: 'Support', // 추가 지원 섹션 제목 강조

    // LootGo 카드 (파트너 페이지 하단)
    lootgoSubtitle: 'REAL-WORLD TREASURE HUNTING',
    lootgoTitle: 'Activate Your Audience',
    lootgoHighlight: 'with LootGO',
    lootgoDesc: 'LootGO transforms daily life into a real-world treasure hunt for crypto. A free-to-play app that rewards users with memecoins for their IRL activity — walk to collect loot boxes, open them to earn crypto, NFTs, and real-world prizes. Built on Monad blockchain with an embedded wallet, fiat onramp, and 1inch DEX integration for seamless token swaps.',
    lootgoBtnText: 'View Proposal',

    // Protoville 카드 (파트너 페이지 하단)
    protovilleTitle: 'Prototyping Rural Futures', // 제목
    // 날짜/장소
    protovilleDate: 'April 2 – 8, 2026 · Dumo Village, Namhae, South Korea',
    // 설명 앞부분
    protovilleDesc: 'A 7-day popup village at the intersection of',
    // 설명 강조
    protovilleHighlight: 'Rural Basic Income, Global-Local Co-creation, and Deep Nature',
    // 설명 뒷부분
    protovilleDescEnd: '— co-creating the next chapter of sustainable community life.',
    deepWork: 'Deep Work & Radical Focus', // 특징 1 제목
    deepWorkDesc: '— Korea\u2019s oldest Marine National Park.', // 특징 1 설명
    ubiWatching: 'UBI-Watching', // 특징 2 제목
    ubiWatchingDesc: '— Rural UBI pilot field research.', // 특징 2 설명
    coCreation: 'Co-Creation', // 특징 3 제목
    coCreationDesc: '— Social dining, vibecoding, nomad exchanges.', // 특징 3 설명
    sovereignVillage: 'Sovereign Village', // 특징 4 제목
    sovereignVillageDesc: '— Modular homes & permaculture gardens.', // 특징 4 설명
    protoCost: 'Cost:', // 비용 라벨
    // 비용 설명
    protoCostDesc: '$200–$600 USD (a la carte) · 100% non-profit · Free if you bring your own stay',
    website: 'Website', // 웹사이트 링크 텍스트

    // Elixi Advisory Desk 카드 (파트너 페이지 하단)
    elixiAdvisoryTitle: 'Official Side Event', // 제목 앞부분
    elixiAdvisoryHighlight: 'Advisory Desk', // 제목 강조
    // 설명
    elixiAdvisoryDesc: 'A licensed and accredited accelerator supports your successful side event in Korea.',
    venueRec: 'Venue Recommendations', // 특징 1 제목
    // 특징 1 설명
    venueRecDesc: '— Best-fit by size, vibe, and positioning.',
    budgetOpt: 'Budget Optimization', // 특징 2 제목
    budgetOptDesc: '— Reality check and cost optimization.', // 특징 2 설명
    localContracts: 'Local Contracts', // 특징 3 제목
    localContractsDesc: '— Handle contracts so you don\u2019t get wrecked.', // 특징 3 설명
    agencyReferrals: 'Agency Referrals', // 특징 4 제목
    // 특징 4 설명
    agencyReferralsDesc: '— Trusted production and agency connections.',

    // Elixi Venture Studio 카드 (파트너 페이지 하단)
    ventureTitle: 'Venture Studio', // 제목 앞부분
    ventureHighlight: 'Group', // 제목 강조
    // 설명 1
    ventureDesc1: 'Government-Licensed Korea GTM Accelerator · 900+ strategies · 200+ mandates',
    // 설명 2
    ventureDesc2: 'Korea is a long-term, trust-driven market. Elixi. helps you establish your Korean expansion with institutional credibility.',
    instTrust: 'Institutional Trust Engine', // 특징 1 제목
    // 특징 1 설명
    instTrustDesc: 'License-backed GTM transforms regulatory complexity into market access.',
    dataKol: 'Data-Driven KOL Ignition', // 특징 2 제목
    // 특징 2 설명
    dataKolDesc: 'Web2 & Web3 KOL ecosystems through KPI-native, measurable execution.',
    offlineAuth: 'Trustworthy Offline Authority', // 특징 3 제목
    // 특징 3 설명
    offlineAuthDesc: 'VVIP, government, and university activations for brand authority.',

    // Protoville 카드 서브타이틀
    protovilleSubtitle: 'POPUP VILLAGE EXPERIENCE',
    protovilleBtnText: 'Visit Website',

    // Elixi 카드 서브타이틀
    elixiSubtitle: 'GOVERNMENT-LICENSED ACCELERATOR',
    elixiDesc: 'A licensed and accredited Korean GTM accelerator that supports your successful market entry and side event operations with institutional credibility.',
    elixiBtnText: 'Visit Website',

    // O-SEAN 카드 (파트너 페이지 하단)
    oseanSubtitle: 'ALL-IN-ONE MERCH & EVENT PRODUCTION',
    oseanTitle: 'Get Event Ready', // 제목 앞부분
    oseanHighlight: 'with O-SEAN', // 제목 강조
    oseanDesc: 'O-SEAN is a Web3 merchandise and event production company offering an all-in-one service — from content and design to production and delivery. Custom merch for blockchain projects including T-shirts, stickers, keyrings, bags, and more. Trusted by Abstract, Pudgy Penguins, Monad, and Story.',
    oseanBtnText: 'Visit Website',

    // ATH 카드 (파트너 페이지 하단)
    athSubtitle: 'FULL-CYCLE CREATIVE PRODUCTION',
    athTitle: 'You Focus on Building.',
    athHighlight: 'We Take Care of the Story.',
    athDesc: 'If you\u2019re heading to Korea BUIDL Week 2026, we can capture your conference presence, produce a high-impact vlog, or craft a cinematic trailer around your trip. ATH is a full-cycle creative production. We don\u2019t just shoot and edit. We deconstruct your goals, build a strategic content plan, and execute everything end-to-end — from concept and scripting to visuals, editing, and publishing.',
    athBtnText: 'Visit Website',

    // Tiger Research 카드 (파트너 페이지 하단)
    tigerSubtitle: 'KOREA WEB3 MARKET MAP',
    tigerTitle: 'Navigate Korea with',
    tigerHighlight: 'Tiger Research',
    tigerDesc: 'A market map built by Tiger Research, an Asia-focused Web3 research firm, based on their annual Korea research reports. It maps out the full landscape of Korean players — delivering insights and information that help global projects entering the Korean market.',
    tigerBtnText: 'View Market Map',

    // 파트너 되기 CTA (파트너 페이지 최하단)
    becomePartnerTitle: 'Become a', // 제목 앞부분
    becomePartnerHighlight: 'Partner', // 제목 강조
    // CTA 설명
    becomePartnerDesc: 'Join the coalition of organizations shaping the future of Web3 in Asia.',
    inquiryBtn: 'Inquiry for Partnership', // CTA 버튼
  },

  // ──────────────────────────────────────────────
  // BuidlHack Page (src/app/buidlhack2026/page.tsx) - BuidlHack 페이지
  // ──────────────────────────────────────────────
  buidlhack: {
    title1: 'BuidlHack', // 제목 1
    title2: '2026', // 제목 2
    // 부제목 (날짜/장소)
    subtitle: 'Mar 11th – Apr 18th, 2026 | Seoul, Korea',
    // 페이지 설명
    desc: 'The flagship hackathon of Korea Buidl Week. Where builders come to ship.',
    joinCommunity: 'Join Community', // CTA 버튼 1
    applyToHack: 'Apply to Hack', // CTA 버튼 2

    // 트랙 레코드 섹션 (BuidlHack 페이지 내)
    trackRecordTitle1: 'Track', // 제목 앞부분
    trackRecordHighlight: 'Record', // 제목 강조
    // 섹션 설명
    trackRecordDesc: 'Korea Buidl Week has been at the forefront of builder culture in APAC.',
    sinceLbl: 'Since', // 통계 1 라벨
    // 통계 1 설명
    sinceDesc: 'Korea\u2019s longest-running builder-first technical conference',
    sideEventsLbl: 'Side Events', // 통계 2 라벨
    // 통계 2 설명
    sideEventsDesc: 'One of APAC\u2019s most active decentralized builder ecosystems',
    attendeesLbl: 'Attendees', // 통계 3 라벨
    attendeesDesc: 'Week-long participants', // 통계 3 설명
    orgsLbl: 'Organizations', // 통계 4 라벨
    // 통계 4 설명
    orgsDesc: 'Leading foundations, researchers, infra teams, and investors',

    // 상금 섹션 (BuidlHack 페이지 내)
    prizeTitle1: 'Prize', // 제목 앞부분
    prizeHighlight: 'Pool', // 제목 강조
    prizeAvailable: 'Available in prizes', // 상금 설명

    // 스케줄 섹션 (BuidlHack 페이지 내)
    scheduleTitle1: 'The', // 제목 앞부분
    scheduleHighlight: 'Schedule', // 제목 강조
    scheduleDesc: 'Five days of building, learning, and competing.', // 설명
    kickoffTitle: 'Kickoff AMA',
    kickoffDesc: 'Tracks, rules, and Q&A',
    bnbWorkshopTitle: 'BNB Workshop',
    bnbWorkshopDesc: 'Online technical session on BNB',
    yggWorkshopTitle: 'YGG & Verse8 Workshop',
    yggWorkshopDesc: 'Online technical session on YGG & Verse8',
    nearWorkshopTitle: 'Near AI Workshop',
    nearWorkshopDesc: 'Online technical session on Near AI',
    statusWorkshopTitle: 'Status Network Workshop',
    statusWorkshopDesc: 'Online technical session on Status Network',
    builderDayTitle: 'Builder Day',
    builderDayDesc: 'Offline networking @ DSRV Office',
    hackingTitle: 'Hacking Period',
    hackingTime: 'All Day',
    hackingDesc: 'Build, attend workshops, get mentorship',
    submissionTitle: 'Submission Deadline',
    submissionTime: 'By 23:59 PM',
    submissionDesc: 'Final project submission closes at midnight',
    pitchTitle: 'Final Pitch Day',
    pitchDesc: 'Present to judges, winners announced',

    // 스폰서 & 파트너 섹션 (BuidlHack 페이지 내)
    sponsorsTitle1: 'Our', // 제목 앞부분
    sponsorsHighlight: 'Sponsors', // 제목 강조
    sponsorsDesc: 'The sponsors fueling BuidlHack 2026.', // 설명
    judgesTitle1: 'Judges, Speakers &', // Judges 섹션 제목 앞부분
    judgesHighlight: 'Mentors', // Judges 섹션 제목 강조
    judgesDesc: 'Industry leaders guiding BuidlHack 2026.', // Judges 섹션 설명
    communityTitle1: 'Community', // 커뮤니티 파트너 제목 앞부분
    communityHighlight: 'Partners', // 커뮤니티 파트너 제목 강조
    communityDesc: 'The communities supporting BuidlHack 2026.', // 커뮤니티 파트너 설명
    partnersTitle1: 'Meet the', // 제목 앞부분
    partnersHighlight: 'Organizers', // 제목 강조
    partnersDesc: 'The organizations powering BuidlHack 2026.', // 설명

    // CTA 섹션 (BuidlHack 페이지 최하단)
    ctaTitle1: 'Ready to', // 제목 앞부분
    ctaHighlight: 'Build?', // 제목 강조
    // CTA 설명
    ctaDesc: 'Join our community to stay updated on BuidlHack 2026 — team matching, workshops, and more.',
  },
};
