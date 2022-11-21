import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
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
