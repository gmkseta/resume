import React, { PropsWithChildren, PureComponent } from 'react';
import { DateTime } from 'luxon';
import { Row, Col, Badge } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import { IExperience } from './IExperience';
import { Style } from '../common/Style';
import Util from '../common/Util';

const MdLi: React.FC<{ children: string }> = function ({ children }) {
  return <ReactMarkdown components={{ p: 'li' }}>{children}</ReactMarkdown>;
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
            {item.descriptions?.map((description, descIndex) =>
              typeof description === 'string' ? (
                <MdLi key={descIndex.toString()}>{description}</MdLi>
              ) : (
                <li key={descIndex.toString()}>
                  {description.title}
                  <ul>
                    {description.descriptions?.map((subDescription, subDescIndex) => (
                      <MdLi key={`${descIndex}-${subDescIndex}`}>{subDescription}</MdLi>
                    ))}
                  </ul>
                </li>
              ),
            )}
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
            style={Style.skillKeywordBadge}
            key={index.toString()}
            color="secondary"
            className="me-1"
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
};

const createWorkingPeriod = (startedAtString: string, endedAtString?: string) => {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL);

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

    const _endedAt = DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL);
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
        <Badge color="info">{Util.getFormattingDuration(startedAt, endedAt)}</Badge>
      </Col>
    </Row>
  );
};

export default ExperienceRow;
