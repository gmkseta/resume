import React, { PropsWithChildren } from 'react';
import ProjectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { IProject } from './IProject';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IProject.Payload;

export const Project = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) =>
    PreProcessingComponent<Payload>({
      payload,
      component: Component,
    }),
};

const Component = function ({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="PROJECT">
      <ProjectRow payload={payload} />
    </CommonSection>
  );
};
