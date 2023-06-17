import { DateTime } from 'luxon';
import React, { PropsWithChildren } from 'react';
import ReactMarkdown from 'react-markdown';
import { Badge, Col, Row } from 'reactstrap';
import { Style } from '../common/Style';
import { getFormattingDuration, getSkillColor, LUXON_DATE_FORMAT } from '../common/Utils';
import { IExperience } from './IExperience';

const MdLi: React.FC<{ children: string }> = function ({ children }) {
  return <ReactMarkdown components={{ p: 'li' }}>{children}</ReactMarkdown>;
};

const DescriptionRow: React.FC<{ description: IExperience.Description; descIndex: number }> =
  function ({ description, descIndex }) {
    return typeof description === 'string' ? (
      <MdLi key={descIndex.toString()}>{description}</MdLi>
    ) : (
      <li key={descIndex.toString()}>
        {description.title}
        <ul>
          {description.descriptions?.map(
            (subDescription: IExperience.Description, subDescIndex: number) => (
              <DescriptionRow
                key={typeof subDescription === 'string' ? subDescription : subDescription.title}
                description={subDescription}
                descIndex={subDescIndex}
              />
            ),
          )}
        </ul>
      </li>
    );
  };

const ExperienceRow = function ({
  item,
  index,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-end">
          {createWorkingPeriod(item.startedAt, item.endedAt)}
        </Col>
        <Col sm={12} md={9}>
          <h4>{item.title}</h4>
          {item.subtitle ? <div style={Style.gray}>{item.subtitle}</div> : ''}

          <i style={Style.gray}>{item.position}</i>
          <ul className="pt-3">
            {item.descriptions?.map((description, descIndex) => (
              <DescriptionRow
                key={typeof description === 'string' ? description : description.title}
                description={description}
                descIndex={descIndex}
              />
            ))}
            {createSkillKeywords(item.skillKeywords)}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

const createSkillKeywords = (skillKeywords?: string[]) => {
  if (!skillKeywords) {
    return '';
  }
  return (
    <li>
      <strong>Skill Keywords</strong>
      <div>
        {skillKeywords.map((keyword, index) => (
          <Badge
            key={index.toString()}
            className="me-1"
            color="none"
            style={{
              backgroundColor: getSkillColor(keyword),
            }}
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
};

const createWorkingPeriod = (startedAtString: string, endedAtString?: string) => {
  const DATE_FORMAT = LUXON_DATE_FORMAT;
  const input_format = startedAtString.length > 8 ? DATE_FORMAT.YYYY_LL_DD : DATE_FORMAT.YYYY_LL;

  const startedAt = DateTime.fromFormat(startedAtString, input_format);

  const {
    periodTitle,
    endedAt = undefined,
    isWorking,
  } = (() => {
    if (!endedAtString) {
      return {
        periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~`,
        isWorking: true,
      };
    }

    const _endedAt = DateTime.fromFormat(endedAtString, input_format);
    return {
      periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~ ${_endedAt.toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      )}`,
      endedAt: _endedAt,
      isWorking: false,
    };
  })();

  return (
    <Row>
      <Col md={12} xs={isWorking ? 7 : 9}>
        <h4 style={Style.gray}>{periodTitle}</h4>
      </Col>
      <Col md={12} xs={isWorking ? 5 : 3} className="text-md-end text-center">
        {isWorking ? (
          <Badge color="primary" className="me-1">
            재직 중
          </Badge>
        ) : (
          ''
        )}
        <Badge color="info">{getFormattingDuration(startedAt, endedAt)}</Badge>
      </Col>
    </Row>
  );
};

export default ExperienceRow;
