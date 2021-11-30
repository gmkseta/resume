import { IIntroduce } from '../component/introduce/IIntroduce';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    '3년차 개발자 김성준입니다.',
    '저는 주니어지만 작은 조직에서 테크리드 포지션으로 여러 팀을 관리하고 스타트업 고객사들의 문제를 엔지니어링으로 풀려고 고민했습니다.',
    '회사에 gitflow, DevOps, lint, 사내 wiki, react 도입을 제안하고 실행했습니다.',
    '매주 회의에서 건전한 기술적인 **토론**을 통해 설득하기도 하고 설득당하기도 하며 여러 기술적인 결정에 기여했습니다.',
    '스타트업 고객사들과 프로젝트를 진행하면서 개발 지식이 부족한 고객사와의 **커뮤니케이션**이 익숙해졌습니다.',
    '반복되는 작업, 질의를 줄이기 위해 **40여개**의 사내 도큐, **10여개**의 README, 위키 및 스크립트를 작성했습니다.',
    'MSA, 대규모 트래픽 처리, DevOps에 관심이 많고 경험하고 싶습니다.',
  ],
  sign: 'Seongjun Kim',
  // sign: packageJson.author.name,
  latestUpdated: '2021-11-28',
  // latestUpdated: lastestUpdatedAt,
};

export default introduce;
