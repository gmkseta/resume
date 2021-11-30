import { IGlobal } from '../component/common/IGlobal';

const title = 'SeongJun Kim Resume';
const description = '안녕하세요. 김성준입니다.';

export const _global: IGlobal.Payload = {
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      profile: {
        firstName: 'Seongjun',
        lastName: 'Kim',
        username: 'gmkseta',
        gender: 'male',
      },
    },
  },
};
