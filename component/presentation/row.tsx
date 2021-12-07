import { DateTime } from 'luxon';
import React, { PropsWithChildren } from 'react';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import { LUXON_DATE_FORMAT } from '../common/Utils';
import { IPresentation } from './IPresentation';

const PresentationRow = function ({
  payload,
}: PropsWithChildren<{ payload: IPresentation.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => (
        <CommonRows key={index.toString()} payload={serialize(item)} index={index} />
      ))}
    </EmptyRowCol>
  );
};

const serialize = (item: IPresentation.Item): IRow.Payload => ({
  left: {
    title: DateTime.fromFormat(item.at, LUXON_DATE_FORMAT.YYYY_LL).toFormat(
      LUXON_DATE_FORMAT.YYYY_DOT_LL,
    ),
  },
  right: {
    ...item,
  },
});

export default PresentationRow;
