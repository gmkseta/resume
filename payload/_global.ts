import { IGlobal } from '../component/common/IGlobal';

const title = 'RESUME-NEXTJS Sample Page';
const description = 'This is a simple web resume sample.';

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
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
