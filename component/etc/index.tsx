import React, { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { CommonSection } from '../common/CommonSection';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { IEtc } from './IEtc';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IEtc.Payload;
type Item = IEtc.Item;

export const Etc = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) =>
    PreProcessingComponent<IEtc.Payload>({
      payload,
      component: Component,
    }),
};

const Component = function ({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="ETC">
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
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(item.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );
  const title = (() => {
    if (item.endedAt) {
      const endedAt = DateTime.fromFormat(item.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      );
      return `${startedAt} ~ ${endedAt}`;
    }
    return startedAt;
  })();

  return {
    left: {
      title,
    },
    right: {
      ...item,
    },
  };
};
