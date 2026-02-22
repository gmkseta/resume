import { IIntroduction } from '../component/introduce/IIntroduction';

const introduction: IIntroduction.Payload = {
  disable: false,
  contents: [
    '카카오모빌리티에서 카카오T 앱과 카카오T 픽커 앱의 퀵 주문 시스템을 설계·운영하며 B2C부터 B2B까지 대규모 트래픽을 안정적으로 처리해온 7년차 백엔드 개발자입니다.',
    '퀵/도보 서비스의 **매년 50% 이상 성장**을 기술적으로 뒷받침했습니다. UX 개편, 신규 피처 도입, **20여 개 B2B API 연동**을 통해 수요 측면의 성장을 이끌었고, 대리기사 앱 통합 등 공급 측면의 확대도 주도했습니다. 특히 스타트업처럼 빠른 개발 사이클로 운영/기획 요구사항을 신속히 반영하면서도, **버티컬 중 가장 빠른 장애 대응 능력**을 갖춰 안정성을 확보했습니다.',
    '서비스를 운영하며 휴먼 에러로 인한 장애가 발생하더라도, 사람을 탓하기보다 장애를 방지할 수 있는 시스템을 만들려고 노력합니다. Circuit Breaker, Fallback, Feature Toggle 등의 안정성 패턴을 적극 도입하며, Sentry와 New Relic 알림 체계 개선으로 실시간 모니터링을 강화했습니다. 3개 파트(퀵, GOS, 통합연계)를 동시에 리드하면서도 체계적인 태스크 관리로 프로젝트를 성공적으로 이끌고 있습니다.',
    '복잡한 시스템 레벨의 문제(SLAB 메모리, Pod OOM 등)를 근본적으로 해결하는 것을 즐기며, **대규모 트래픽 환경에서도 무중단으로 안정적인 서비스를 제공하는 아키텍트**로 성장하는 것을 목표로 하고 있습니다.',
  ],
  sign: 'Seongjun Kim',
  // sign: packageJson.author.name,
  latestUpdated: '2026-02-22',
  // latestUpdated: lastestUpdatedAt,
};

export default introduction;
