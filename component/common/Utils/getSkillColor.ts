export const getSkillColor = (skill: string) => {
  switch (skill.toLowerCase()) {
    case 'react':
    case 'react.js':
    case 'reactjs':
      return '#61dafb';
    case 'typescript':
    case 'typescript.js':
    case 'ts':
      return '#007acc';
    case 'rubyonrails':
    case 'ruby on rails':
    case 'ror':
      return '#cc2124';
    case 'nextjs':
      return 'black';
    case 'nodejs':
    case 'node.js':
    case 'node':
      return '#3c873a';
    case 'mysql':
      return '#005D87';
    case 'spring':
      return '#6AAE3D';
    case 'kotlin':
      return '#716FDB';
    case 'k8s':
      return "#23B4E5";
    case 'aws':
    case 'aws cdk':
    case 'amazon web service':
      return '#ff9900';
    default:
      return 'var(--bs-primary)';
  }
};
