import { IIntroduce } from '../component/introduce/IIntroduce';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    '안녕하세요. 개발자 김성준입니다.',
    '현재 카카오 모빌리티라는 회사에서 퀵 서비스의 서버를 주로 담당하여 서버 개발을 하고있습니다.',
    '퀵 서비스는 이제 1년 넘어가는 작은 버티컬 서비스지만 복잡한 도메인을 갖고있었습니다.',
    '하지만 이전 회사에서 겪은 다양한 문제 해결 경험을 통해 도메인에 빠르게 적응해서 **일주일만에** 실무에 투입되어 기여할 수 있었습니다.',
    '또한 다양한 기획, 사업, 디자인, 개발팀들과 대화하며 협업하여 더 좋은 결과물을 내려고 노력했습니다.',
    '최근에는 물류 신사업 프로젝트를 **Kotlin Spring**으로 시작하였습니다.',
    '이전 회사인 인썸니아에서는 주니어지만 작은 조직에서 테크리드 포지션으로 여러 팀을 관리하고 스타트업 고객사들의 문제를 엔지니어링으로 풀려고 고민했습니다.',
    '팀에서 **10명**정도 되는 개발자분들을 이끌었고, 개발자분들이 어려움을 겪는 에러나 설계 문제가 있을 때 도와드리거나 직접 부분적으로 개발에 참여했습니다.',
    '반복되는 작업, 질의를 줄이기 위해 **40여개**의 사내 도큐, **10여개**의 README, 위키 및 스크립트를 작성했습니다.',
  ],
  sign: 'Seongjun Kim',
  // sign: packageJson.author.name,
  latestUpdated: '2022-08-14',
  // latestUpdated: lastestUpdatedAt,
};

export default introduce;
