import React, { PropsWithChildren } from 'react';
import { Badge } from 'reactstrap';
import { IProject } from './IProject';

const skillsColor = (skill: string) => {
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
    case 'aws':
    case 'aws cdk':
    case 'amazon web service':
      return '#ff9900';
    default:
      return 'var(--bs-primary)';
  }
};
const ProjectSubtitle = function (props: PropsWithChildren<IProject.Subtitle>) {
  const { role, skills } = props;

  return (
    <>
      {role ? (
        <>
          <Badge color="secondary" className="me-1">
            {role}
          </Badge>
          <br />
        </>
      ) : null}

      {skills?.map((skill) => (
        <Badge color="none" className="me-1" style={{ backgroundColor: skillsColor(skill) }}>
          {skill}
        </Badge>
      ))}
      <br />
    </>
  );
};

export default ProjectSubtitle;
