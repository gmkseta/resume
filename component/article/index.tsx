import React, { PropsWithChildren } from 'react';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { IArticle } from './IArticle';
import { EmptyRowCol } from '../common';
import { CommonSection } from '../common/CommonSection';
import { CommonDescription } from '../common/CommonDescription';
import { customDebug } from '../common/Utils';

type Payload = IArticle.Payload;

export const Article = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) =>
    PreProcessingComponent<Payload>({
      payload,
      component: Component,
    }),
};

const Component = function ({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="ARTICLE">
      <ArticleRow payload={payload} />
    </CommonSection>
  );
};

const ArticleRow = function ({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const log = customDebug('ArticleRow');

  log(payload);

  return (
    <EmptyRowCol>
      <CommonDescription descriptions={payload.list} />
    </EmptyRowCol>
  );
};
