import packageInfo from '../package.json';

import { IFooter } from '../component/footer/IFooter';

const footer: IFooter.Payload = {
  version: packageInfo.version,
  github: packageInfo.homepage,
  nextVersion: packageInfo.dependencies.next.replace('^', ''),
  reactVersion: packageInfo.dependencies.react.replace('^', ''),
  bootstrapVersion: packageInfo.dependencies.bootstrap.replace('^', ''),
};

export default footer;
