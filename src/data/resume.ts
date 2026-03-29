export interface Profile {
  name: string;
  // title: string;           // 직함 / 한 줄 포지션 설명
  summary: string;         // 헤더 아래 짧은 소개 (1-2문장)
  email: string;
  github?: string;         // username만 (예: "johndoe")
  linkedin?: string;       // profile url path만 (예: "in/johndoe")
  blog?: string;           // 블로그 URL
  location?: string;
  birthdate?: string;      // 생년월일
  hobbies?: string;        // 취미
  specialties?: string;    // 특기
  mbti?: string;
}

export interface TrainingItem {
  name: string;            // 교육명
  institution: string;     // 기관
  period: string;
  description?: string;
}

export interface TaskItem {
  text: string;
  subItems?: string[];
}

export interface AttachmentItem {
  type: 'pdf' | 'image' | 'xlsx';
  label: string;
  filename: string;        // src/assets/ 아래 파일명
}

export interface ExperienceItem {
  company: string;
  projectName?: string;    // 프로젝트/개편명
  role: string;            // 직책
  period: string;          // 예: "2021.03 - 현재"
  description?: string;    // 팀/사업부 설명 (선택)
  teamSize?: string;       // 팀 구성
  tools?: string;          // 협업 도구
  tasks: TaskItem[];       // 담당 업무 및 성과
  skills?: string[];       // 사용 기술 태그
  attachments?: AttachmentItem[];  // 첨부 산출물
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CareerEntry {
  period: string;
  company: string;
  role: string;
  duration: string;
  bullets: string[];
  stack: string;
}

export interface CareerDetail {
  totalExp: string;
  entries: CareerEntry[];
}

export interface IntroductionSection {
  title: string;
  bullets: string[];
}

export interface IntroductionDetail {
  sections: IntroductionSection[];
}

export interface ResumeCategory {
  category: string;
  type: "resume" | "career" | "introduction";
  icon: string;
  iconSize?: number;
  iconColor?: "text" | "light" | "muted" | "accent";
  detail?: string;
  careerDetail?: CareerDetail;
  introductionDetail?: IntroductionDetail;
}

export interface ProjectItem {
  name: string;
  period?: string;
  description: string;
  role?: string;
  achievements: string[];
  skills?: string[];
  link?: string;
}

export interface EducationItem {
  school: string;
  major?: string;
  degree?: string;
  period: string;
}

export const profile: Profile = {
  name: "Profile : 이종희",
  summary: "서울에서 3년차 웹백엔드 개발자로 일하고 있습니다.\n" +
      "백엔드 개발의 핵심은 시스템이 확장되더라도 일관성을 유지하는 데 있다고 믿습니다.\n" +
      "동료가 읽기 편한 코드를 짜고, 관리가 용이한 인프라를 구축하여 " +
      "비즈니스의 성장을 기술적으로 뒷받침하는 백엔드 직무에 지원합니다.",
  email: "jonghee99@naver.com",
  github: "deerbugger",
  location: "강서구, 서울",
  birthdate: "1999.10.25",
  hobbies: "독서, 러닝",
  specialties: "시스템 설계, 문서화",
  mbti: "ISTJ",
};

export const experience: ExperienceItem[] = [
  {
    company: "(주)호디",
    projectName: "Hodi ERP 신규 개편",
    role: "사원",
    period: "2025.12 - 2026.03",
    description: "웹 솔루션 개발팀",
    teamSize: "개발자 4명, 디자이너 1명",
    tools: "GitLab, Slack, Google Sheets",
    tasks: [
      {
        text: "노후화된 사내 인트라 시스템의 전면 개편 프로젝트에 참여하여, 기획부터 데이터 설계, 개발, 마이그레이션까지 전 과정에 기여. 운영 단계에서는 Google Sheets 기반 버그 리포트를 통해 지속적인 유지보수 수행.",
      },
      { text: "서비스 구조 개선을 위한 화면 설계 및 UX 정의" },
      { text: "기존 시스템 DB 구조 분석 및 신규 DB 설계" },
      { text: "데이터 이관을 위한 마이그레이션 매핑 설계서 작성" },
      {
        text: "핵심 도메인 기능 개발",
        subItems: [
          "사원 관리",
          "거래처 관리",
          "계약 관리",
          "매입/매출 관리 : 세금계산서 자동업로드, 연관그룹화, 결제라인 자동화",
        ],
      },
      { text: "프로젝트 결과 공유 및 방향성 정리를 위한 워크샵 발표 진행" },
    ],
    skills: ["Kotlin", "TypeScript", "Vue.js", "GraphQL (DGS)", "Oracle"],
    attachments: [
      { type: 'image', label: 'ERD (권한 관리)', filename: 'ERP_ERD_GRANT.png' },
      { type: 'image', label: 'ERD (TRD)', filename: 'ERP_ERD_TRD.png' },
      { type: 'pdf', label: '화면설계서 - 사원관리', filename: '인트라화면설계서_사원관리.pdf' },
      { type: 'pdf', label: '화면설계서 - 계약관리', filename: '인트라화면설계서_계약관리.pdf' },
      { type: 'pdf', label: '화면설계서 - 매입매출', filename: '인트라화면설계서_매입매출.pdf' },
      { type: 'pdf', label: '화면설계서 - 권한관리', filename: '인트라화면설계서_권한관리.pdf' },
    ],
  },
  {
    company: "(주)호디",
    projectName: "좌석 / 시설예약 시스템 유지보수",
    role: "사원",
    period: "2025년",
    description: "웹 솔루션 개발팀",
    tasks: [
      {
        text: "다수 대학을 대상으로 납품된 좌석 및 시설 예약 시스템을 커스터마이징하고, 운영 중 발생하는 장애 대응 및 성능 개선을 수행.",
      },
      {
        text: "다수 기관 대상 시스템 구축 및 운영 대응",
        subItems: ["연세대, 고려대, 경희대, 동국대, 뉴욕주립대 등"],
      },
      {
        text: "예약 프로세스 개선",
        subItems: [
          "예약 전 학사 DB 조회 후 사용자 신분/소속코드 동기화",
          "검증 로직 및 UX / UI 리팩토링",
        ],
      },
      {
        text: "장애 분석 및 대응",
        subItems: [
          "DB 커넥션 끊김 현상 모니터링 및 대응",
          "자정 시간대 서비스 장애 실시간 모니터링 및 NGINX 로그 밸런싱으로 트래픽 분산",
        ],
      },
      {
        text: "보안 및 인증 강화",
        subItems: [
          "QR 코드 기반 인증 API 구현",
          "로그인 보안 강화 및 악성 사용자 대응 (비정상 요청 차단, 도메인 검증, 권한 검증 로직 강화)",
          "SHA-256 기반 토큰 인증 및 로그인 시도 로깅 체계 구축",
          "SSL 적용 및 TLS 1.2/1.3 업그레이드 (SSL Labs A등급 달성)"
        ],
      },
      {
        text: "세콤 시설물 출입 IoT 연계 전자인증 API 개발",
        subItems: [
          "협력사 인증 기기와 연동하여 회원 정보 기반 출입 인증 상태를 실시간으로 업데이트",
          "API 명세서 작성 및 문서화"
        ],
      },

    ],
    skills: ["Spring", "JPA", "TypeScript", "Angular", "Spring Security", "Oracle"],
    attachments: [
      { type: 'xlsx', label: 'API 명세서 - 출입인증(연동)', filename: '출입인증(연동)_API_V1.0.xlsx' },
    ],
  },
  {
    company: "(주)호디",
    projectName: "도서관 출입관리 시스템 개발",
    role: "사원",
    period: "2024년 하반기",
    description: "웹 솔루션 개발팀",
    tasks: [
      {
        text: "도서관 출입 및 좌석 이용을 통합 관리하는 시스템을 설계 및 개발하고, 관리자 기능 및 운영 자동화 기능을 구현.",
      },
      { text: "관리자 권한 체계 설계 및 구현 (최고/중간/일반 관리자)" },
      {
        text: "주요 기능 개발",
        subItems: [
          "계정 관리 및 환경 설정",
          "출입 및 좌석 상태 관리",
          "운영시간 초과 시 자동 퇴실 처리",
          "휴관일 관리 기능",
        ],
      },
      {
        text: "사용자 편의 및 운영 기능",
        subItems: [
          "정원 초과 / 연령 제한 시 실시간 알림",
          "출입 이벤트 기반 알림 팝업",
          "메인 대시보드 및 통계 차트 구성",
        ],
      },
      {
        text: "데이터 및 운영 자동화",
        subItems: [
          "DB 자동 백업 서비스 구성",
          "일정 기간 경과 데이터 자동 삭제 처리",
        ],
      },
      {
        text: "시스템 구조 및 개발",
        subItems: [
          "REST API 설계 및 JSON 응답 처리 (태블릿 연동)",
          "Thymeleaf 기반 레이아웃 구성",
          "AOP 기반 로그 수집 및 조회 기능 구현",
          "페이지 구조 정리 및 메뉴 체계 설계",
        ],
      },
    ],
    skills: ["Spring", "JPA", "TypeScript", "Angular", "Spring Security", "Chart.js", "FullCalendar.js", "Oracle"],
  },
  {
    company: "(주)호디",
    projectName: "공공 도서관 CMS 및 서비스 플랫폼 유지보수",
    role: "사원",
    period: "2023년 하반기 – 2024년 상반기",
    description: "웹 솔루션 개발팀",
    tools: "광양시립도서관, 순천시립도서관, 광양육아지원센터 등 / 외부 솔루션(채움, KLAS) 연동",
    tasks: [
      {
        text: "전자정부프레임워크 기반 CMS를 활용하여 공공 도서관 서비스 플랫폼 구축 및 고도화를 수행. 대민 서비스 기능 개선과 함께 보안, 성능, 접근성 품질을 전반적으로 개선.",
      },
      { text: "전자정부프레임워크 기반 CMS 구조 이해 및 기능 확장 개발" },
      { text: "도서관 주요 서비스(예약, 신청, 회원 관리 등) 통합 구현 및 고도화" },
      {
        text: "외부 시스템 연동",
        subItems: [
          "SSO 로그인 연동",
          "행안부 비대면 인증 적용",
          "SMS 발송 및 외부 API 연동 개발",
        ],
      },
      {
        text: "성능 개선 및 장애 대응",
        subItems: [
          "주요 조회 쿼리 튜닝을 통한 응답 속도 개선",
          "로그인 장애 및 통계 쿼리 이슈 해결",
          "서버 권한 문제로 인한 이미지 로딩 장애 대응",
        ],
      },
      {
        text: "인프라 및 보안 강화",
        subItems: [
          "Apache → Nginx 전환",
          "SSL 적용 및 보안 정책 강화 (로그인 실패 잠금, 세션 검증 등)",
          "개인정보 처리 구조 개선 (DB → API 기반 로딩)",
          "robots.txt 및 메타 태그 적용을 통한 크롤링 제어",
        ],
      },
      {
        text: "사용자 편의 기능 개선",
        subItems: [
          "모바일 회원증 및 바코드 기능 구현",
          "회원 관리 정책 개선 (탈퇴 이력 관리 및 중복 검증 반영)",
        ],
      },
      {
        text: "웹 품질 개선",
        subItems: [
          "광양시립도서관 웹 접근성 인증 획득 (디자이너 협업)",
        ],
      },
      {
        text: "산출물 작성",
        subItems: [
          "ERD 및 DB 테이블 명세서 작성",
          "서버 접근 환경 및 운영 문서 정리",
        ],
      },
    ],
    skills: ["Java", "Spring (전자정부프레임워크)", "JavaScript", "jQuery", "Oracle"],
  },
  {
    company: "퓨렌스㈜",
    projectName: "CRM 시스템 유지보수 및 성능 개선",
    role: "사원",
    period: "2022.02 – 2022.06",
    description: "개발팀",
    tasks: [
      {
        text: "클라우드 기반 CRM 솔루션 유지보수를 담당하며, 주요 화면 성능 개선 및 실시간 데이터 처리 API 개발 수행.",
      },
      {
        text: "메인 페이지 성능 개선",
        subItems: [
          "레거시 스크립트(약 6,000줄) 분석을 통해 병목 구간 식별",
          "분산된 비동기 호출을 단일 요청으로 통합 및 DB 쿼리 개선",
          "페이지 로딩 시간 30초 → 3초 단축",
        ],
      },
      {
        text: "실시간 데이터 처리 API 개발",
        subItems: [
          "대기 인원/신청 인원 등 실시간 데이터 수신 후 Redis에 저장",
          "주기적 화면 갱신을 위한 API 설계 및 구현",
        ],
      },
      {
        text: "운영 환경 대응",
        subItems: [
          "외부 기관 서버실(건강보험공단 등) 배포 및 운영 지원",
        ],
      },
    ],
    skills: ["Java", "Spring Framework", "JavaScript (jQuery/ES5)", "JSP", "MySQL", "Redis"],
  },
];

export const resumeItems: ResumeCategory[] = [
  {
    category: "이력서",
    type: "resume",
    icon: "attachment",
    iconColor: "muted",
    detail: "test"
  },
  {
    category: "경력기술서",
    type: "career",
    icon: "attachment",
    iconColor: "muted",
    careerDetail: {
      totalExp: "총 36개월 (총 3년 0개월)",
      entries: [
        {
          period: "2023년 7월 ~ 현재",
          company: "㈜호디 웹솔루션개발팀",
          role: "사원",
          duration: "32개월",
          bullets: [
            "입사 후 사내 임직원이 매일 접속하여 사용하는 인트라넷 시스템은 이전 담당자들의 퇴사 이후 문서화된 자료가 전혀 없이 방치된 상태였습니다. 잦은 에러와 비효율적인 UX를 개선하기 위해서는 레거시 구조를 반드시 파악해야 했습니다.",
            "리더와 상의 끝에 레거시 구조 파악에 자원했습니다. 리버스 엔지니어링을 진행한 약 2주간 기존 PHP 소스 코드와 MSSQL 테이블을 일일이 대조하며 특정 데이터가 어느 메뉴에 호출되는지 추적하는 전체 매핑 설계서부터 작성했습니다. 완성된 매핑 문서는 타 부서 개발자 및 디자이너와 공유하여 시스템의 공통 도메인부터 확립했습니다.",
            "기존 DB 설계가 ACID(원자성, 일관성, 고립성, 지속성) 원칙을 위배하여 데이터 무결성을 보장하지 못하는 구조임을 파악하고, 이를 바로잡는 방향으로 DB를 재설계했습니다. 동시에 추후 모바일 앱 확장을 고려해 메인 언어를 Kotlin으로 전환하자는 내부 의견을 수용하여, GraphQL 기반의 DGS 프레임워크를 실무와 병행하여 학습 및 적용했습니다. 인트라넷 내 여러 메뉴에서 반복 사용되는 사원/부서 검색 기능은 별도의 컴포넌트로 모듈화하고, Git 스니펫을 통해 사용법을 공유하여 개발 일관성을 유지했습니다.",
            "4개월에 걸친 마이그레이션과 서버 이전을 완료하여 임직원 워크숍에서 성공적으로 시연하고 배포까지 마쳤습니다. 문서화와 모듈화를 바탕으로 레거시 시스템을 걷어내는 과정을 통해, 리팩토링을 감수한 데이터 무결성 확보가 전체 프로젝트의 안정성에 미치는 영향을 객관적으로 확인하는 경험이었습니다.",
          ],
          stack: "Kotlin, TypeScript, Vue.js, DGS (GraphQL), Oracle",
        },
        {
          period: "2022년 2월 ~ 6월",
          company: "퓨렌스㈜ 개발팀",
          role: "사원",
          duration: "4개월",
          bullets: [
            "입사 후 클라우드 기반 고객관리시스템(CRM) 솔루션의 유지보수 업무를 담당했습니다. 콜센터 상담사들이 주로 사용하는 메인 페이지의 로딩 속도가 30초에 달하여 업무 지연을 호소하는 민원이 반복적으로 접수되었습니다. 해당 페이지는 약 6,000줄에 달하는 방대한 레거시 스크립트로 구성되어 있어 파편화된 로직을 해체하고 원인을 규명해야 했습니다.",
            "전체 코드의 실행 흐름을 처음부터 끝까지 추적하여 병목이 발생하는 구간을 특정하는 방식을 택했습니다. 흐름을 분석한 결과, 메인 페이지의 기간별 실적 그래프를 렌더링할 때 기본 조회 일수만큼 비동기 호출 이벤트가 개별적이고 연속적으로 발생하여 서버에 과부하를 주고 있음을 확인했습니다. 이를 해결하기 위해 여러 번 나뉘어 있던 요청을 1회의 단일 요청으로 통합하여 처리하도록 스크립트를 수정하였고, 변경된 요청 구조에 맞춰 서버 DB 쿼리도 개선했습니다.",
            "최소한의 코드 수정으로 메인 페이지의 로딩 속도를 30초에서 3초로 대폭 단축하였고, 관련 성능 민원을 해결하여 수습 기간 통과 및 정규직으로 전환되었습니다. 이 과정을 통해 프론트엔드의 불필요한 비동기 호출이 서버 부하에 미치는 영향을 이해할 수 있었습니다. 이후 입사 시 협의된 내근직 업무와 달리 외부 기관 서버실 파견(원주 건강보험공단 등)이 잦았고, 특히 인프라 세팅이 미비한 상태에서 무리한 현장 투입이 반복되어 퇴사를 결정했습니다.",
          ],
          stack: "Java, Spring Framework, JavaScript (jQuery/ES5), JSP, MySQL",
        },
      ],
    },
  },
  {
    category: "자기소개서",
    type: "introduction",
    icon: "attachment",
    iconColor: "muted",
    introductionDetail: {
      sections: [
        {
          title: "지원동기",
          bullets: [
            "백엔드 개발의 핵심은 시스템이 확장되더라도 무너지지 않는 일관성을 유지하는 데 있다고 믿습니다. 저는 이를 위해 모듈화와 문서화라는 두 가지 원칙을 고수하며 개발에 임합니다.",
            "먼저 모듈화입니다. 여러 업체의 손을 탄 육아지원센터 프로젝트를 유지보수할 때, 동일한 기능임에도 각기 다른 로직으로 구현된 함수가 6개나 되어 사소한 수정조차 예기치 못한 버그를 낳는 환경을 경험했습니다. 그 이후부터는 공통 기능을 클래스로 관리하는 것을 원칙으로 삼되, 클래스 만능주의라는 도그마에 빠지지 않도록 주의합니다. 대신 후속 개발의 편의를 고려하여 항상 TC와 기술 명세서를 병행하며 관리의 유연성을 확보합니다.",
            "다음은 문서화입니다. 저는 문서화를 업무 흐름의 필수적인 단계로 포함시킵니다. DB 설계를 시각화하고 명세서를 작성하는 과정은 막무가내식 개발로 인한 리소스 누수를 방지하며, 클라이언트와의 의도 차이로 발생하는 재작성 비용을 획기적으로 줄여줍니다. 기술 명세서는 가장 적은 비용으로 후속 개발자에게 정보를 전달하는 가장 확실한 방법입니다.",
            "지금껏 쌓아온 설계 강박과 문서화 습관을 바탕으로 ①서버 시스템의 가벼운 설계와 ②거대화되는 과정에서도 확장성을 놓치지 않는 2마리 토끼를 잡고 싶습니다. 동료가 읽기 편한 코드를 짜고 관리가 용이한 인프라를 구축하여 비즈니스의 성장을 기술적으로 뒷받침하는 든든한 백엔드 전문가가 되겠습니다.",
          ],
        },
        {
          title: "장단점",
          bullets: [
            "저는 제가 지독한 내향인인 줄로만 알고 살았습니다. 일 년 내내 집 밖으로 나가지 않아도 평온함을 느끼는 전형적인 '집순이'이기 때문입니다. 하지만 최근 지인들 사이에서 제 평판은 조금 다를지도 모르겠다는 경험을 했습니다. 몇 년 전, 외향적인 친구의 제안으로 베트남 패키지 여행을 떠난 적이 있습니다. 사실 저는 리조트에서 종일 휴식하다 밤에만 나가는 휴양파이지만, 친구의 즐거움을 위해 오전부터 시작되는 모든 외부 활동에 기꺼이 동참했습니다. 부지런히 호흡을 맞춘 덕분에, 여행을 마칠 무렵 친구는 \"보통 친구끼리 여행 가면 싸우기 마련인데, 한 번도 안 싸운 여행은 이번이 처음\"이라며 다음을 기약했습니다.",
            "이런 타인에 대한 높은 수용력이 거절을 어려워하는 단점이 되기도 합니다. 제 주관이 뚜렷해야 하는 순간에도 상대의 의견에 휩쓸려 뒤늦게 속앓이를 할 때가 있습니다. 이를 보완하기 위해 저는 업무적인 소통에서만큼은 '적극적인 책임감'을 발휘하려 노력합니다. 좋은 제안은 기꺼이 수용하되, 제가 감당할 수 있는 범위를 넘어서거나 기술적으로 충돌이 예상될 때는 솔직하게 상황을 공유하고 \"이런 방향이면 가능할 것 같습니다\" 대안을 제시하며 개선하는 중입니다.",
          ],
        },
      ],
    },
  },
];

// export const projects: ProjectItem[] = [
//   {
//     name: "프로젝트명",
//     period: "YYYY.MM - YYYY.MM",
//     description: "프로젝트 설명",
//     role: "담당 역할",
//     achievements: [
//       "주요 성과 또는 기여 내용",
//     ],
//     skills: ["기술1", "기술2"],
//     // link: "https://github.com/...",
//   },
// ];

export const education: EducationItem[] = [
  {
    school: "강원대학교",
    major: "영어영문학과",
    degree: "학사",
    period: "2015.03 - 2020.06",
  },
  {
    school: "홍익대학교사대부속여자고등학교",
    period: "2012.03 - 2015.02",
  },
];

export const about = "";

export const training: TrainingItem[] = [
  {
    name: "디지털컨버전스 자바개발자 국비과정",
    institution: "한국직업전문학교",
    period: "2021.05 - 2021.11",
  },
];
