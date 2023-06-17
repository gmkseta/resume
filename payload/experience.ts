import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      type: 'full-time',
      title: '(주) 카카오 모빌리티',
      subtitle: '풀필먼트개발팀 퀵파트',
      position: 'Backend Developer',
      startedAt: '2022-02-28',
      descriptions: [
        {
          title: '통합배송 파트',
          descriptions: [
            {
              title: '파트너 API 개발',
              descriptions: [
                '배달의민족, 푸드테크, 바나나포스 등 파트너사들의 배달 주문을 받아 퀵 혹은 도보로 전달',
              ],
            },
            {
              title: '포스 프로그램 웹 API 개발',
              descriptions: ['외부사 연동 설정', '공지사항, FAQ등', '배송목록', '결제수단 등록'],
            },
            {
              title: '오픈 API 개발',
              descriptions: [
                '퀵,도보 통합배송 OPEN API',
                'Technical Writer와 [OPEN API 문서](https://kakaomobility-documentation.notion.site/kakaomobility-documentation/T-API-ac9d997dff34409b8eb0cba5c4f223ec) 작성',
                '개발자센터(8월 오픈예정) 샌드박스환경 구축',
              ],
            },
          ],
        },
        {
          title: '퀵 파트',
          descriptions: [
            {
              title: '퀵 유저, 기사, 어드민 서비스 서버 개발 담당',
              descriptions: [
                '유저, 기사 휴면 및 탈퇴 처리 (w/ Kafka)',
                '픽업/배송 기사 알림 기능 추가 및 리펙토링',
                '퀵 쿠폰 템플릿 등록 및 조회 API',
                '어드민 - 정산 리포트 자동 생성',
              ],
            },
            {
              title: '퀵 Open API 개발 담당',
              descriptions: [
                '예약 주문, 반나절 퀵, 안전배송 개발',
                'Config로 관리되던 고객사 정보 DB화',
                'API를 사용하는 고객사들과의 커뮤니케이션',
              ],
            },
            {
              title: '물류 신사업 프로젝트',
              descriptions: [
                'k8s 배포 및 kibana, sentry, grafana 설정 (테스트 서버)',
                '프로젝트 설계 참여',
                '주문 관련 API',
              ],
            },
          ],
        },
      ],
      skillKeywords: ['Ruby On Rails', 'MySql', 'Kotlin', 'K8S', 'ELK'],
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
