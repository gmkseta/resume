import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      type: 'full-time',
      title: '(주) 카카오 모빌리티',
      subtitle: `<div>라스트마일개발팀 팀장 25.12 ~ Current</div>
    <div>퀵파트 파트장 25.01 ~ Current</div>
    <div>GOS파트 파트장 25.01 ~ Current</div>
    <div>통합연계개발파트 파트장 22.10 ~ Current</div>
    <div>퀵파트 파트원 22.02 ~ 22.10</div>
`,
      position: 'Backend Developer',
      startedAt: '2022-02-28',
      descriptions: [
        {
          title: '라스트마일개발팀 팀장',
          descriptions: [
            '퀵, 도보, 당일배송 개발 파트 리드 (10여 명)',
            '퀵·도보 시스템 통합',
          ],
        },
        {
          title: '퀵 파트 파트원/파트장',
          skillKeywords: ['Ruby', 'Ruby On Rails', 'MySQL', 'Redis', 'Kafka', 'K8S', 'Sentry', 'New Relic'],
          descriptions: [
            '카카오T 앱의 퀵 서비스 담당 - 일 평균 1,700만+ API 요청 처리',
            '매년 50% 이상 서비스 성장을 기술적으로 뒷받침',
            {
              title: 'Google Cloud Gemini AI 도입 프로젝트 리드',
              descriptions: [
                'AI 기반 주소 자동 입력 기능 개발로 사용자 경험 개선',
                '신규 사용자 접수 시간 24% 감소, 접수 완료율 13.39%p 증가',
                '프롬프트 인젝션 보안 취약점 해결 및 Fallback 로직 구현',
                'Google Cloud 공식 블로그에 성공 사례로 소개',
              ],
            },
            {
              title: '시스템 안정성 및 성능 최적화',
              descriptions: [
                'Feature Toggle 도입으로 배포 없이 즉시 기능 제어 가능',
                'Circuit Breaker 도입으로 외부 서비스 장애 전파 차단',
                'Pod 메모리 누수 해결: Puma cluster mode에서 inmemory cache → Redis 중앙화',
                'Sentry/New Relic 알림 체계 개선으로 실시간 장애 감지',
                '테스트 코드 100% 복구 - 수백 개 깨진 테스트 케이스 전체 수정',
              ],
            },
            {
              title: '핵심 기능 개발 및 운영',
              descriptions: [
                '픽업/배송 목표시간 설정 기능 개발로 기사 효율성 향상',
                '대형오더 시스템 개선 - 화물차 매칭 로직 최적화',
                '예약 주문, 반나절 퀵, 안전배송 등 신규 서비스 개발',
              ],
            },
          ],
        },
        {
          title: '통합연계개발파트 파트장',
          skillKeywords: ['Kotlin', 'Spring', 'MySQL', 'Redis', 'Docker', 'React', 'K8S', 'ELK'],
          descriptions: [
            '자발적으로 통합연계개발 TF 초기 멤버로 참여, 파트장으로 성장',
            '20여개 파트너사 API 연동으로 B2B 비즈니스 확대 - API 통한 주문 2배 이상 성장',
            '외부사 연동 공수 90% 절감 (월 1명 → 자동화)',
            {
              title: 'OPEN API 고도화 및 자동화',
              descriptions: [
                '배민스토어, 요기요, 바로고, 올리브영 등 20여개 파트너사 API 연동',
                'Vendor 정보 DB화로 배포 없이 즉시 설정 변경 가능',
                '신규 화주사 오픈 시간 주 단위 → 일 단위로 단축',
                '에러 세분화 및 모니터링 개선으로 벤더사별 실시간 추적',
                'Circuit Breaker 패턴 적용으로 외부 서비스 장애 시에도 안정성 확보',
              ],
            },
            {
              title: '개발자센터 구축 (풀스택 개발)',
              descriptions: [
                '기획/디자인/프론트엔드 없이 직접 풀스택으로 개발자센터 구축',
                '콜백 모니터링, 로그 조회, 시뮬레이터 등 파트너사 자체 테스트 환경 제공',
                '기사앱 시뮬레이터 웹 개발로 실시간 주문 상태 변화 테스트 가능',
                '파트너사 자체 테스트 환경 제공으로 CS 문의 감소',
                '[카카오모빌리티 풀필먼트 개발자센터](https://logistics-developers.kakaomobility.com/)',
              ],
            },
            {
              title: '운영 프로세스 개선',
              descriptions: [
                '챗봇 도입 및 채널톡 연동으로 화주사 응대 효율화',
                'Integration Batch 도입으로 잘못된 데이터 자동 보정',
                '로봇배송 첫 외부사 연동 성공적 오픈',
              ],
            },
          ],
        },
        {
          title: 'GOS(General Order Service) 파트 파트장',
          skillKeywords: ['Kotlin', 'Spring Boot', 'MySQL', 'K8S', 'Redis', 'ELK'],
          descriptions: [
            {
              title: 'KGOS 플랫폼 구축 리드 - Rails GOS를 Kotlin으로 전환',
              descriptions: [
                'Rails 기반 GOS를 Kotlin/Spring Boot 기반 KGOS로 전환하는 프로젝트 리드',
                '첫 번째 마이그레이션으로 카카오모빌리티 대리 서비스의 주문 시스템을 KGOS로 통합',
                '대리 서비스 통합으로 대규모 트래픽 유입에도 안정적 처리 성공',
                '픽커-대리 통합으로 기사 효율성 향상 및 운영 비용 절감',
                '일 1,700만+ 요청 안정적 처리, 시스템 안정성 확보',
                '자원하여 A-Z까지 프로젝트 리드, 기술적 리더십 인정받아 R&R 확대',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'full-time',
      title: '(주) 인썸니아',
      subtitle:
        '스타트업 전문 외주 개발사입니다. 20년에는 고객사 프로젝트 개발을 21년에는 사내 프로젝트 개발, 팀원 백업을 위주로 했습니다.',
      position: 'Full Stack Developer',
      startedAt: '2019-11-25',
      endedAt: '2021-12-23',
      descriptions: [
        'Rails 풀스택에서 React + API 서버 구조로 변경하기 위한 보일러플레이트 구성',
        '인프라를 IaC를 통해서 프로비저닝하는 방식으로 변경',
        '인증 서비스, 채팅 서비스, 스토리지 서비스 분리',

        {
          title: '[뉴젠] 교회 전용 주일학교 학생관리 앱 개발',
          descriptions: ['출석 및 통계 기능 백엔드 및 프론트엔드 개발'],
        },
        {
          title: '[락고] 도시락 정기 배송 서비스 개발',
          descriptions: ['정기 배송 및 정기 결제 기능 구현', '관리 대시보드 구현'],
        },
        {
          title: '[사커비] 축구 경기 분석 웨어러블 솔루션 앱, 홈페이지 개발 및 유지보수',
          descriptions: [
            'gps 좌표 기반 경기 분석 로직 구현 및 리펙토링, 상품 판매 웹사이트 개발',
            '실서버 운영 및 AWS 마이그레이션',
          ],
        },
        '10여개 이상의 프로젝트 백업',
      ],
      skillKeywords: ['AWS', 'Ruby On Rails', 'Node.js', 'TypeScript', 'React', 'Nextjs'],
    },
    {
      type: 'part-time',
      title: '(주) 인썸니아 (프리랜서)',
      position: 'Full Stack Developer',
      startedAt: '2018-07',
      endedAt: '2019-10',
    },
  ],
};

export default experience;
