import { DateTime } from 'luxon';
import React, { PropsWithChildren } from 'react';
import ReactMarkdown from 'react-markdown';
import { Badge, Col, Row } from 'reactstrap';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { Style } from '../common/Style';
import { LUXON_DATE_FORMAT } from '../common/Utils';
import { IIntroduce } from './IIntroduce';

type Payload = IIntroduce.Payload;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) =>
    PreProcessingComponent<Payload>({
      payload,
      component: Component,
    }),
};

const Component = function ({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const latestUpdated = DateTime.fromFormat(payload.latestUpdated, LUXON_DATE_FORMAT.YYYY_LL_DD);
  const latestUpdatedByNow = Math.floor(
    DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24,
  );

  return (
    <div className="mt-5">
      <Row>
        <Col sm={12} md={3}>
          <h2 className="text-primary">INTRODUCE</h2>
        </Col>
        <Col sm={12} md={9}>
          {payload.contents.map((content, index) => (
            // eslint-disable-next-line react/no-danger
            <ReactMarkdown key={index.toString()}>{content}</ReactMarkdown>
          ))}
          <p className="text-end">
            <small>Latest Updated</small>{' '}
            <Badge color="secondary">
              {`${latestUpdated.toFormat(
                LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
              )} (D+${latestUpdatedByNow})`}
            </Badge>
          </p>
          <p className="text-end" style={Style.sign}>
            {payload.sign}
          </p>
        </Col>
      </Row>
    </div>
  );
};
