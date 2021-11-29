import React, { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Badge } from 'reactstrap';
import { IProfile } from './IProfile';
import { HrefTargetBlank } from '../common';

const ProfileContact = function ({ payload }: PropsWithChildren<{ payload: IProfile.Contact }>) {
  return (
    <Row className="pb-2">
      <Col xs={1} className="text-end">
        <FontAwesomeIcon icon={payload.icon} />
      </Col>
      <Col xs="auto">{createLink(payload)}</Col>
    </Row>
  );
};

const createLink = (payload: IProfile.Contact) => {
  if (payload.badge) {
    return (
      <Badge color="light" className="text-black">
        {payload.title || payload.link}
      </Badge>
    );
  }
  return payload.link ? (
    <HrefTargetBlank url={payload.link} text={payload.title} />
  ) : (
    <span>{payload.title}</span>
  );
};

export default ProfileContact;
