import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'IaC 전환 CI/CD 파이프라인 구축',
      startedAt: '2021-01',
      where: '(주) 인썸니아',
      subTitle: '메인',
      descriptions: [
        {
          content: '기존 모놀리식 서비스에서 몇가지 서비스를 분리',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '인증 서비스를 Cognito로 분리 Identity pool을 사용하여 리소스 권한 관리',
            },
            { content: '채팅 서비스를 AppSync, DynamoDB로 분리' },
            { content: '이미지 전처리 및 푸시 서비스 람다로 분리' },
          ],
        },
        {
          content: 'CI/CD 파이프라인 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Aws CodePipeline을 사용한 배포 자동화' },
            { content: 'Nextjs serverless 배포 자동화' },
            {
              content: 'Cognito, S3, Rds, VPC, Lambda 배포 자동화',
            },
          ],
        },
      ],
    },
    {
      title: '히든피터',
      startedAt: '2021-08',
      endedAt: '2021-09',
      subTitle: '백업',
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
      title: '사커비',
      startedAt: '2019-01',
      endedAt: '2020-11',
      where: '(주) 인썸니아',
      subTitle: '메인',
      descriptions: [
        { content: '축구 경기 분석 웨어러블 솔루션 앱입니다. 웹앱, 어드민페이지를 개발했습니다.' },
        {
          content: '경기 분석관련 주요 로직에서 테스트 코드 작성하고 리펙토링 한 경험이 있습니다.',
        },
        {
          content:
            '데이터베이스의 특정 컬럼이 너무 비대해져서 s3로 옮기는 방식을 제안했고 실행했습니다.',
        },
        { content: '상품 판매 웹사이트를 구현했습니다. 결제 및 배송 관련 서비스를 구현했습니다.' },
        { content: '프론트엔드 및 백엔드 모두 작업하였습니다.' },
      ],
    },
    {
      title: '락고',
      startedAt: '2019-02',
      endedAt: '2020-10',
      where: '(주) 인썸니아',
      subTitle: '메인',
      descriptions: [
        { content: '도시락 정기배송 관련 앱입니다. 웹앱, 어드민페이지를 개발했습니다.' },
        {
          content: '정기배송 신청 및 정기 결제를 구현하였습니다.',
        },
        {
          content:
            '도시락 판매 관리인 전용 어드민페이지를 구현하였습니다. 배송 및 정산 관련 기능을 구현했습니다.',
        },
      ],
    },
    {
      title: 'S프로젝트 - 사내 테스크관리도구',
      startedAt: '2021-03',
      endedAt: '2021-03',
      where: '(주) 인썸니아 - 고객사명은 제외했습니다.',
      subTitle: '백업',
      descriptions: [
        {
          content:
            '사내 테스크관리 도구 웹사이트 외주입니다. 기존 개발자 분께서 백업 요청하셔서 리펙토링에 참여했습니다.',
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
