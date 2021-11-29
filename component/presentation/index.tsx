import React, { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import PresentationRow from './row';
import { IPresentation } from './IPresentation';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IPresentation.Payload;

export const Presentation = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) =>
    PreProcessingComponent<Payload>({
      payload,
      component: Component,
    }),
};

const Component = function ({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="PRESENTATION">
      <PresentationRow payload={payload} />
    </CommonSection>
  );
};
