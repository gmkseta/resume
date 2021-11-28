import { homepage, version, dependencies } from '../package.json';

import { IFooter } from '../component/footer/IFooter';

const footer: IFooter.Payload = {
  version,
  github: homepage,
  nextVersion: dependencies.next.replace('^', ''),
  reactVersion: dependencies.react.replace('^', ''),
  bootstrapVersion: dependencies.bootstrap.replace('^', ''),
};

export default footer;
