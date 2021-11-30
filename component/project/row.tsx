import React, { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { Badge } from 'reactstrap';
import { IProject } from './IProject';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';

const ProjectRow = function ({ payload }: PropsWithChildren<{ payload: IProject.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => (
        <CommonRows key={index.toString()} payload={serialize(item)} index={index} />
      ))}
    </EmptyRowCol>
  );
};

const serialize = (payload: IProject.Item): IRow.Payload => {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );
  const title = (() => {
    if (payload.endedAt) {
      const endedAt = DateTime.fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      );
      return `${startedAt} ~ ${endedAt}`;
    }
    return `${startedAt} ~`;
  })();

  const subTitle = (
    <Badge color="secondary" className="me-1">
      {payload.subTitle}
    </Badge>
  );

  return {
    left: {
      title,
      subTitle,
    },
    right: {
      title: payload.title,
      subTitle: payload.where,
      descriptions: payload.descriptions,
    },
  };
};

export default ProjectRow;
