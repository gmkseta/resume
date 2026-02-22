import Head from 'next/head';
import React from 'react';
import { Container } from 'reactstrap';
import { Article } from '../component/article';
import { Style } from '../component/common/Style';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
import { Experience } from '../component/experience';
import { Footer } from '../component/footer';
import { Introduce } from '../component/introduce';
import { OpenSource } from '../component/openSource';
import { Presentation } from '../component/presentation';
import { Profile } from '../component/profile';
import { Skill } from '../component/skill';
import { anonymize } from '../lib/anonymize';
import Payload from '../payload';

const AnonPayload = anonymize(Payload);

const AnonymousResume = function () {
  return (
    <>
      <Head>
        <title>익명 이력서</title>
        <link rel="icon" href="/assets/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/assets/styles/custom.css" />
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={AnonPayload.profile} />
        <Introduce.Component payload={AnonPayload.introduce} />
        <Skill.Component payload={AnonPayload.skill} />
        <Experience.Component payload={AnonPayload.experience} />
        <OpenSource.Component payload={AnonPayload.openSource} />
        <Presentation.Component payload={AnonPayload.presentation} />
        <Article.Component payload={AnonPayload.article} />
        <Education.Component payload={AnonPayload.education} />
        <Etc.Component payload={AnonPayload.etc} />
        <Footer.Component payload={AnonPayload.footer} />
      </Container>
    </>
  );
};

export default AnonymousResume;
