import React, { PropsWithChildren } from 'react';
import { Col, Row } from 'reactstrap';
import { EmptyRowCol } from '.';

export const CommonSection = function ({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 className="text-primary">
              <span>{title}</span>
            </h2>
          </Col>
        </Row>
        {children}
      </EmptyRowCol>
    </div>
  );
};
