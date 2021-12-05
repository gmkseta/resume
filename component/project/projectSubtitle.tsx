import React, { PropsWithChildren } from 'react';
import { Badge } from 'reactstrap';
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
        <Badge color="info" className="me-1">
          {skill}
        </Badge>
      ))}
      <br />
    </>
  );
};

export default ProjectSubtitle;
