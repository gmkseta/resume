import React, { PropsWithChildren } from 'react';
import { Col, Row } from 'reactstrap';
import { CommonDescription } from './CommonDescription';
import { IRow } from './IRow';
import { Style } from './Style';

export const CommonRows = function ({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-end">
          <Row>
            <Col md={12}>
              <h4 style={Style.gray}>{left.title}</h4>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? (
            <div className="d-flex">
              <h4 className="w-auto">{right.title}</h4>
              {right.link && (
                <a
                  href={right.link}
                  className="h6 small text-muted align-self-center px-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗 -상세보기
                </a>
              )}
            </div>
          ) : (
            ''
          )}

          {right.subTitle ? <i style={Style.gray}>{right.subTitle}</i> : ''}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  );
};
