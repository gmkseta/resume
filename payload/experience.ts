import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      type: 'full-time',
      title: '(주) 인썸니아',
      subtitle:
        '스타트업 전문 외주 개발사입니다. 저는 21년도에 고객사 프로젝트 개발은 백업만 하고 사내 프로젝트 개발만 진행했습니다.',
      position: 'Full Stack Developer',
      startedAt: '2019-11',
      endedAt: '2021-12',
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
