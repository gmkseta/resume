import React, { PropsWithChildren } from 'react';
import { Badge } from 'reactstrap';
import { getSkillColor } from '../common/Utils';

import { IProject } from './IProject';

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
        <Badge color="none" className="me-1" style={{ backgroundColor: getSkillColor(skill) }}>
          {skill}
        </Badge>
      ))}
      <br />
    </>
  );
};

export default ProjectSubtitle;
