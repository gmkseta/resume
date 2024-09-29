import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'RoR',
      level: 3,
    },
    {
      title: 'Ruby',
      level: 2,
    },
    {
      title: 'Kotlin',
      level: 2,
    },
    {
      title: 'Spring',
      level: 3,
    },
    {
      title: 'Node.js',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Next.js',
      level: 2,
    },
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'ios',
      level: 1,
    },
    {
      title: 'android',
      level: 1,
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'etc',
  items: [
    {
      title: 'MySql',
      level: 2,
    },
    {
      title: 'AWS CDK',
      level: 2,
    },
    {
      title: 'PostgreSQL',
      level: 2,
    },
    {
      title: 'Docker',
      level: 2,
    },
    {
      title: 'K8S',
      level: 2,
    },
    {
      title: 'ELK',
      level: 1,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, frontend, devops],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준\n4: 깊게 알고 있는 수준',
};

export default skill;
