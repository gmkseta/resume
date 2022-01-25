import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '새로운 기술 스택( React & Rails API )에 대한 보일러플레이트 구성',
      startedAt: '2021-01',
      endedAt: '2021-12',
      where: '(주) 인썸니아',
      subTitle: {
        role: '메인',
        skills: ['TypeScript', 'React', 'RoR'],
      },
      descriptions: [
        {
          content: '기존에 **Rails 풀스택만** 사용하던 스택을 21년도에 변경하게 되었습니다',
        },
        {
          content: '프론트는 **React** 백엔드 API 서버를 **Rails, Nest, Django**로 확장하였습니다.',
          descriptions: [
            {
              content: 'Rails를 주로 작업하였고 Django와 Nest는 설계에 관한 도움만 주었습니다.',
            },
          ],
        },
        {
          content:
            '사원 분들 모두 **React** 경험이 없어서 먼저 스터디를 하고 Best Practice를 찾고 전파하려고 노력했습니다.',
        },
        {
          content:
            '프론트엔드는 리엑트 하나만 사용하고, 고객의 요청에 따라 백엔드 스택을 선택하여 사용하는 요구조건이 있었습니다.',
        },
        {
          content: 'React와 Rails API 서버를 구현',
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
            { content: '채팅 서비스를 AppSync, DynamoDB로 분리' },
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
          content: '경기 분석 관련 주요 로직에서 테스트 코드 작성하고 리펙토링 한 경험이 있습니다.',
        },
        {
          content:
            '데이터베이스의 특정 컬럼이 너무 비대해져서 s3로 옮기는 방식을 제안했고 실행했습니다.',
        },
        { content: '상품 판매 웹사이트를 구현했습니다. 결제 및 배송 관련 서비스를 구현했습니다.' },
        { content: '풀스텍으로 작업하였습니다.' },
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
    {
      title: '히든피터',
      startedAt: '2021-09',
      endedAt: '2021-09',
      subTitle: {
        role: '백업',
        skills: ['RoR', 'Nextjs'],
      },
      where: '(주) 인썸니아',
      descriptions: [
        {
          content: '사용자의 체형에 따라 맞는 착장을 추천해주는 패션서비스입니다.',
        },
        {
          content:
            '사용자가 늘어남에 따라 체형을 계산하여 착장과 매칭하는 속도가 너무 느려져서 백업 요청받았습니다.',
        },
        {
          content: '체형 매칭 알고리즘, 쿼리 개선 및 데이터베이스 구조를 개선하였습니다.',
        },
        {
          content:
            '체형을 계산하는 알고리즘 및 쿼리를 기존에 비해 약 1/8 정도의 시간을 소모하도록 변경할 수 있었습니다.',
        },
        {
          content:
            '매번 계산하여 보여주던 로직을 테이블을 생성하여 미리 저장하고 저장된 값을 보여주는 방식으로 속도를 더 개선할 수 있었습니다.',
        },
      ],
    },
    {
      title: 'S프로젝트 - 사내 테스크관리도구',
      startedAt: '2020-03',
      endedAt: '2020-03',
      where: '(주) 인썸니아 - 고객사명은 제외했습니다.',
      subTitle: {
        role: '백업',
        skills: ['RoR'],
      },
      descriptions: [
        {
          content:
            '사내 테스크관리 도구 웹사이트 외주입니다. 메인 개발자분께서 백업 요청하셔서 리펙토링에 참여했습니다.',
        },
        {
          content:
            '트리구조의 테이블이 존재했고, 이를 재귀적으로 순회하는 로직이 백엔드에 있었습니다. ORM 쿼리가 포함되어있는 로직이라 상당히 느렸습니다.',
        },
        {
          content:
            '트리를 만드는 로직은 프론트엔드의 자바스크립트에서 하도록 변경하였고 데이터베이스 구조 및 쿼리를 개선하였습니다.',
        },
      ],
    },
  ],
};

export default project;
