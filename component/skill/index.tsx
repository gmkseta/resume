import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren, useState } from 'react';
import { Col, Row, Tooltip } from 'reactstrap';
import { EmptyRowCol } from '../common';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { ISkill } from './ISkill';
import SkillRow from './row';

type Payload = ISkill.Payload;

export const Skill = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) =>
    PreProcessingComponent<Payload>({
      payload,
      component: Component,
    }),
};

const Component = function ({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2>
              <span className="text-primary">SKILL</span>
              {createTooltip(payload.tooltip)}
            </h2>
          </Col>
        </Row>
        {payload.skills.map((skill, index) => (
          <SkillRow key={index.toString()} skill={skill} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
};

const createTooltip = (content?: string) => {
  if (!content) {
    return '';
  }

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <small>
      {' '}
      <FontAwesomeIcon icon={faQuestionCircle} id="skill-tooltip" />
      <Tooltip
        style={{ whiteSpace: 'pre-wrap' }}
        placement="right"
        target="skill-tooltip"
        isOpen={tooltipOpen}
        toggle={toggle}
      >
        {content}
      </Tooltip>
    </small>
  );
};
