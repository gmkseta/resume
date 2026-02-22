import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '퀵/도보 서비스 성장 - 매년 50% 이상 성장 견인',
      startedAt: '2022-03',
      endedAt: 'PRESENT',
      where: '(주) 카카오모빌리티',
      subTitle: {
        role: '리드',
        skills: ['Ruby on Rails', 'Kotlin', 'Spring', 'MySQL', 'Redis', 'Kafka'],
      },
      descriptions: [
        {
          content: '수요측 성장: 사용자 경험 혁신을 통한 접수 증가',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'Google Gemini AI 도입: 신규 사용자 접수 시간 24% 감소, 접수 완료율 13.39%p 증가',
            },
            {
              content:
                'UX 개편 프로젝트 리드: 접수 후 사용자 이탈률 감소, 재사용률 향상',
            },
            {
              content:
                '신규 피처 도입: 예약 주문, 반나절 퀵, 안전배송, 정기 리포트 기능 개발',
            },
            {
              content:
                'Google Cloud 공식 블로그에 성공 사례로 소개',
              href: 'https://cloud.google.com/blog/ko/topics/customers/kakao-t-quick-delivery-gemini-use-case',
            },
          ],
        },
        {
          content: '공급측 성장: 기사 효율성 향상 및 운영 최적화',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '픽업/배송 목표시간 설정: 기사 업무 효율성 향상, 고객 만족도 증가',
            },
            {
              content:
                '대형오더 시스템 개선: 화물차 매칭 로직 최적화로 수용 가능 주문 확대',
            },
            {
              content:
                '대리-픽커 통합: 기사앱 통합으로 운영 비용 절감 및 기사 pool 확대',
            },
          ],
        },
      ],
    },
    {
      title: '대규모 트래픽 장애 대응 사례',
      startedAt: '2022-03',
      endedAt: 'PRESENT',
      where: '(주) 카카오모빌리티',
      subTitle: {
        role: '리드',
        skills: ['Kubernetes', 'Circuit Breaker', 'Sentry', 'New Relic', 'Redis'],
      },
      descriptions: [
        {
          content: '주요 장애 대응 및 해결 사례',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'Pod 메모리 누수 해결: Puma cluster mode에서 inmemory cache가 worker별로 중복 → Redis 중앙화로 해결',
            },
            {
              content:
                'SLAB 메모리 이슈: kernfs_node_cache 12GB 이상 점유 → OS 레벨 문제 분석 및 해결',
            },
            {
              content:
                '외부 서비스 장애 대응: 내비/주소 서비스 장애 시 Circuit Breaker로 cascade failure 방지',
            },
            {
              content:
                'Kafka 메시지 순서 보장: Key 할당 로직 개선으로 Race Condition 해결',
            },
          ],
        },
        {
          content: '장애 대응 체계 구축',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '24/7 모니터링: Sentry, New Relic, PagerDuty 연동으로 실시간 감지',
            },
            {
              content:
                'Feature Toggle 도입: 배포 없이 즉시 기능 제어로 장애 확산 방지',
            },
            {
              content:
                'Post-mortem 문화 정착: 모든 장애의 근본 원인 분석 및 재발 방지책 수립',
            },
          ],
        },
      ],
    },
    {
      title: 'B2B API 플랫폼 구축 - 20여개 파트너사 연동',
      startedAt: '2022-10',
      endedAt: 'PRESENT',
      where: '(주) 카카오모빌리티',
      link: 'https://logistics-developers.kakaomobility.com/',
      subTitle: {
        role: '파트장',
        skills: ['Kotlin', 'Spring', 'React', 'Docker', 'MySQL', 'Redis'],
      },
      descriptions: [
        {
          content: 'API 연동 프로세스 혁신',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '문제: 매 연동마다 월 1명의 개발자 투입 필요',
            },
            {
              content:
                '해결: Vendor 정보 DB화, 어드민 기반 설정 관리로 자동화',
            },
            {
              content:
                '결과: 개발 공수 90% 절감 (월 1명 → 자동화), 신규 화주사 오픈 시간 주 단위 → 일 단위로 단축',
            },
          ],
        },
        {
          content: '개발자센터 풀스택 개발',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '기획/디자인 없이 직접 개발자센터 전체 구축',
            },
            {
              content:
                '기사앱 시뮬레이터 웹 개발: 파트너사 자체 테스트 환경 제공',
            },
            {
              content:
                '연동 파트너사: 배민스토어, 요기요, 바로고, 올리브영, 바나나포스 등 20여개',
            },
          ],
        },
      ],
    },
    {
      title: 'Rails GOS → Kotlin KGOS 전환 및 대리 서비스 통합',
      startedAt: '2023-01',
      endedAt: '2024-12',
      where: '(주) 카카오모빌리티',
      subTitle: {
        role: '리드',
        skills: ['Kotlin', 'Spring Boot', 'MySQL', 'Redis', 'Kubernetes'],
      },
      descriptions: [
        {
          content: 'Rails 기반 GOS를 Kotlin 기반 KGOS로 전환하며 대규모 서비스 통합',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '배경: Rails GOS의 확장성 한계, 대리 서비스 통합 필요',
            },
            {
              content:
                '과정: Rails GOS를 Kotlin/Spring Boot 기반 KGOS로 전환, 첫 번째로 대리 서비스 마이그레이션',
            },
            {
              content:
                '결과: 카카오모빌리티 대리 서비스의 전체 주문 시스템을 KGOS로 성공적 통합',
            },
            {
              content:
                '성과: 대리 서비스 트래픽 대폭 유입에도 일 1,700만+ API 요청 안정적 처리',
            },
            {
              content:
                '기여도: 자원하여 A-Z까지 프로젝트 리드, 기술 선택부터 배포까지 주도',
            },
          ],
        },
      ],
    },
    {
      title: 'IaC 전환 및 서비스 분리',
      startedAt: '2021-01',
      endedAt: '2021-12',
      where: '(주) 인썸니아',
      subTitle: {
        role: '메인',
        skills: ['TypeScript', 'Aws Cdk'],
      },
      descriptions: [
        {
          content: '기존 모놀리식 서비스에서 몇 가지 서비스를 분리',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '세 개의 스택 ( Rails, Nest, Django )에서 매번 동일한 서비스(기능)를 만들어야 해서 자주 사용하거나 구현이 까다로운 것들을 분리하여 재활용 할 수 있게 했습니다.',
            },
            {
              content: '인증 서비스를 Cognito로 분리 Identity pool을 사용하여 리소스 권한 관리',
            },
            { content: '채팅 서비스를 Aws AppSync로 분리' },
            { content: '이미지 전처리 및 푸시 서비스 람다로 분리' },
          ],
        },
        {
          content: '인프라 프로비저닝 방식을 aws cdk으로 전환 ( Typescript )',
          weight: 'MEDIUM',
          descriptions: [
            { content: '직접 aws console에서 관리하던 인프라를 aws cdk로 정의하고 배포' },
          ],
        },
      ],
    },
    {
      title: '사커비',
      startedAt: '2019-01',
      endedAt: '2020-11',
      where: '(주) 인썸니아',
      link: 'https://gmkseta.notion.site/18f1dbc23a0543d09686ee84427555f3',
      subTitle: {
        role: '메인',
        skills: ['RoR'],
      },
      descriptions: [
        { content: '축구 경기 분석 웨어러블 솔루션 앱입니다. 웹앱, 어드민페이지를 개발했습니다.' },
        {
          content:
            '데이터베이스의 특정 컬럼이 너무 비대해져서 s3로 옮기는 방식을 제안했고 실행했습니다.',
        },
        { content: '상품 판매 웹사이트를 구현했습니다. 결제 및 배송 관련 서비스를 구현했습니다.' },
      ],
    },
    {
      title: '락고',
      startedAt: '2019-02',
      endedAt: '2020-10',
      where: '(주) 인썸니아',
      link: 'https://gmkseta.notion.site/0274857a2bf1456e836b79fb704184dc',
      subTitle: {
        role: '메인',
        skills: ['RoR'],
      },
      descriptions: [
        { content: '도시락 정기배송 관련 앱입니다. 웹앱, 어드민페이지를 개발했습니다.' },
        {
          content: '주문 및 당일 결제, 정기 결제 등을 구현했습니다.',
        },
        {
          content: '백오피스에서 권한처리 및 복잡한 정산 과정을 구현하고 리펙토링했습니다',
        },
      ],
    },
    {
      title: '뉴젠',
      startedAt: '2019-12',
      endedAt: '2020-08',
      where: '(주) 인썸니아',
      subTitle: {
        role: '메인',
        skills: ['RoR'],
      },
      descriptions: [
        { content: '교회 전용 주일학교 학생 관리 앱입니다. 웹앱, 어드민페이지를 개발했습니다.' },
        {
          content: '출석 및 통계 기능 풀스텍으로 개발했습니다.',
        },
      ],
    },
  ],
};

export default project;
