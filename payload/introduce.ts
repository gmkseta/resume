import { IIntroduce } from '../component/introduce/IIntroduce';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    '안녕하세요. 개발자 김성준입니다.',
    '주니어지만 작은 조직에서 테크리드 포지션으로 여러 팀을 관리하고 스타트업 고객사들의 문제를 엔지니어링으로 풀려고 고민했습니다.',
    '**능동적으로** 일을 찾고 만들어가며 일했습니다. gitflow, DevOps, lint, 사내 wiki, react 도입을 제안하고 실행했습니다.',
    '**4개**의 고객사 프로젝트를 개발하였고 성공적으로 출시하고 운영, 유지보수 하였습니다.',
    '팀에서 **10명**정도 되는 개발자분들을 이끌었고, 개발자분들이 어려움을 겪는 에러나 설계 문제가 있을 때 도와드리거나 직접 부분적으로 개발에 참여했습니다.',
    '반복되는 작업, 질의를 줄이기 위해 **40여개**의 사내 도큐, **10여개**의 README, 위키 및 스크립트를 작성했습니다.',
    '최근에는 Spring Boot/JPA를 공부하고 있고 MSA, 대규모 트래픽 처리를 경험하고 싶습니다.',
  ],
  sign: 'Seongjun Kim',
  // sign: packageJson.author.name,
  latestUpdated: '2022-02-08',
  // latestUpdated: lastestUpdatedAt,
};

export default introduce;
