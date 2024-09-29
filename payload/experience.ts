import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      type: 'full-time',
      title: '(주) 카카오 모빌리티',
      subtitle: '물류&에이전트 개발실 통합연계개발파트 파트장',
      position: 'Backend Developer',
      startedAt: '2022-02-28',
      descriptions: [
        {
          title: '통합연계개발파트 파트장',
          skillKeywords: ['Kotlin', 'Spring', 'MySql', 'K8S', 'ELK'],
          descriptions: [
            '처음 통합연계개발 TF가 만들어질때 직접 자원하여 여러 내부 버티컬들을 통합하는 일들을 시작하게되었습니다.\n' +
              '원래 오지랖이 넓고 호기심이 많아서 다른 버티컬들의 서비스 및 코드와 인프라들에대한 이해도가 어느정도 있어서 어려움이 없었습니다. \n' +
              '또한 외부사와의 소통도 적극적으로 하는편이라 파트원 분들이 저보다 연차가 높으셨지만 리드에 잘 따라주셨습니다.\n' +
              '지난 1년간 API를 통한 퀵 접수는 2배이상 성장하였고, 로봇배송은 처음으로 외부사와 연동하여 성공적으로 서비스를 오픈했습니다.',
            {
              title: 'OPEN API, Partner API 개발',
              descriptions: [
                '배달 플랫폼, POS사, 주선사, 대기업 그리고 스타트업들까지 라스트마일에서의 다양한 회사들을 만나볼 수 있었습니다.',
                '외부사와의 커뮤니케이션, 그리고 개발부터 운영유지보수에있어 다양한 이슈들을 경험하고 해결했습니다.',
                '온/오프라인 미팅 및 개발 협업을 통해 다양한 사람들과 소통하고 조율하는 능력을 기를 수 있었습니다.',
                '(배민스토어, 요기요, 땡겨요, 바나나포스, 푸드테크, 바나모빌리티, 디버, 손자, SK PSNM, 삼성전자판매, 그외 스타트업)',
              ],
            },
            {
              title: '개발자센터',
              descriptions: [
                'Technical Writer와 협업하여 Open API 문서를 작성하고, API key를 발급받고 관리하는 개발자센터를 개발하였습니다.',
                '또한 SANDBOX 환경에서 API를 테스트해볼 수 있는 환경을 구축하였습니다.',
                'API에서는 주문 접수 및 조회의 기능을 제공하고있으며 배달 서비스를 사용하는 API입니다.',
                '이떄 기사측의 동작에 따른 오더의 상태변화 확인이 어려워서 따로 기사앱의 시뮬레이터를 웹으로 만들어서 제공하였습니다.',
                '따로 기획이나 디자인, 프론트없이 직접 백엔드부터 프론트엔드까지 개발하였습니다.',
                '이를 통해 매번 연동사와 슬렉이나 카톡으로 연동테스트를 진행하던 것 들을 **줄일 수 있었습니다.**',
                '[카카오모빌리티 풀필먼트 개발자센터](https://logistics-developers.kakaomobility.com/)',
              ],
            },
            {
              title: '포스 프로그램 웹 API 개발',
              descriptions: ['외부사 연동 설정', '공지사항, FAQ등', '배송목록', '결제수단 등록'],
            },
          ],
        },
        {
          title: '퀵 파트 파트원',
          skillKeywords: ['Ruby', 'Ruby On Rails', 'MySql', 'K8S', 'ELK'],
          descriptions: [
            {
              title: '퀵 유저 API, 기사 API, 어드민 서버 개발 담당',
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
