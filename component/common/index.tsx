import React, { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';

export const EmptyRowCol = function <T = {}>({ children }: PropsWithChildren<T>) {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  );
};

export const HrefTargetBlank = function ({
  url,
  text,
}: PropsWithChildren<{ url: string; text?: string }>) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener" className="text-secondary">
      {text || url}
    </a>
  );
};
