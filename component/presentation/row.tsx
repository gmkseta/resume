import React, { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';
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
    title: DateTime.fromFormat(item.at, Util.LUXON_DATE_FORMAT.YYYY_LL).toFormat(
      Util.LUXON_DATE_FORMAT.YYYY_DOT_LL,
    ),
  },
  right: {
    ...item,
  },
});

export default PresentationRow;
