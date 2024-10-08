import { DateTime, Duration } from 'luxon';
import React, { PropsWithChildren } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import { EmptyRowCol } from '../common';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { LUXON_DATE_FORMAT } from '../common/Utils';
import { IExperience } from './IExperience';
import ExperienceRow from './row';

type Payload = IExperience.Payload;

export const Experience = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) =>
    PreProcessingComponent<Payload>({
      payload,
      component: Component,
    }),
};

const Component = function ({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const totalPeriod = () => {
    if (payload.disableTotalPeriod) {
      return '';
    }
    return (
      <span style={{ fontSize: '50%' }}>
        <Badge>{getFormattingExperienceTotalDuration(payload)}</Badge>
      </span>
    );
  };

  // 여기는 기간 표시, Skill Keywords 같은 특이 요소가 있어서 CommonSection, CommonRow 로 못바꾸지 않을까..
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 className="text-primary">EXPERIENCE {totalPeriod()}</h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => (
          <ExperienceRow key={index.toString()} item={item} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
};

const getFormattingExperienceTotalDuration = (payload: IExperience.Payload) => {
  const durations = payload.list
    .filter((item) => item.type === 'full-time')
    .map((item) => ({
      endedAt: item.endedAt
        ? DateTime.fromFormat(item.endedAt, LUXON_DATE_FORMAT.YYYY_LL_DD)
        : DateTime.local(),
      startedAt: DateTime.fromFormat(item.startedAt, LUXON_DATE_FORMAT.YYYY_LL_DD),
    }))
    .map(({ endedAt, startedAt }) => endedAt.plus({ month: 1 }).diff(startedAt));
  const totalExperience = durations.reduce((prev, cur) => prev.plus(cur), Duration.fromMillis(0));
  return totalExperience.toFormat(`총 ${LUXON_DATE_FORMAT.DURATION_KINDNESS}`);
};
