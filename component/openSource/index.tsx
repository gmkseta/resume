import React, { PropsWithChildren } from 'react';
import { IOpenSource } from './IOpenSource';
import OpenSourceRow from './row';
import { CommonSection } from '../common/CommonSection';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IOpenSource.Payload;

export const OpenSource = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) =>
    PreProcessingComponent<Payload>({
      payload,
      component: Component,
    }),
};

const Component = function ({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="OPEN SOURCE">
      <OpenSourceRow payload={payload} />
    </CommonSection>
  );
};
