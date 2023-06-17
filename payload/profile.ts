import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import image from '/assets/profile.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,
  image: '/assets/profile.png',
  name: {
    title: '김성준',
    small: '',
  },
  contact: [
    {
      title: 'gmkseta@gmail.com',
      link: 'mailto:gmkseta@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/gmkseta',
      link: 'https://github.com/gmkseta',
      icon: faGithub,
    },
    // {
    //   title: 'https://blog.seongjun.kr',
    //   link: 'https://blog.seongjun.kr',
    //   icon: faPenFancy,
    // },
  ],
  // notice: {
  //   title: '안녕하세요.  ',
  //   icon: faBell,
  // },
};

export default profile;
