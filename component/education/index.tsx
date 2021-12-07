import { DateTime } from 'luxon';
import React, { PropsWithChildren } from 'react';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { CommonSection } from '../common/CommonSection';
import { IRow } from '../common/IRow';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { LUXON_DATE_FORMAT } from '../common/Utils';
import { IEducation } from './IEducation';

type Payload = IEducation.Payload;
type Item = IEducation.Item;

export const Education = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) =>
    PreProcessingComponent<Payload>({
      payload,
      component: Component,
    }),
};

const Component = function ({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="EDUCATION">
      <EducationRow payload={payload} />
    </CommonSection>
  );
};

const EducationRow = function ({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => (
        <CommonRows key={index.toString()} payload={serialize(item)} index={index} />
      ))}
    </EmptyRowCol>
  );
};

const serialize = (item: Item): IRow.Payload => {
  const DATE_FORMAT = LUXON_DATE_FORMAT;
  const [startedAt] = [item.startedAt].map((at) =>
    DateTime.fromFormat(at, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL),
  );

  const endedAt =
    item.endedAt === undefined
      ? ' '
      : [item.endedAt].map((at) =>
          DateTime.fromFormat(at, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL),
        );

  return {
    left: { title: `${startedAt} ~ ${endedAt}` },
    right: {
      ...item,
    },
  };
};
