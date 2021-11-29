import React, { PropsWithChildren } from 'react';
import { IOpenSource } from './IOpenSource';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';

const OpenSourceRow = function ({ payload }: PropsWithChildren<{ payload: IOpenSource.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => (
        <CommonRows key={index.toString()} payload={serialize(item)} index={index} />
      ))}
    </EmptyRowCol>
  );
};

const serialize = (item: IOpenSource.Item): IRow.Payload => ({
  left: {
    title: item.title,
  },
  right: {
    descriptions: item.descriptions,
  },
});

export default OpenSourceRow;
