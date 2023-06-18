import { NextSeo } from 'next-seo';
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
import Payload from '../payload';

const Yosume = function () {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
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
        <Profile.Component payload={Payload.profile} />
        <Introduce.Component payload={Payload.introduce} />
        <Skill.Component payload={Payload.skill} />
        <Experience.Component payload={Payload.experience} />
        {/* <Project.Component payload={Payload.project} /> */}
        <OpenSource.Component payload={Payload.openSource} />
        <Presentation.Component payload={Payload.presentation} />
        <Article.Component payload={Payload.article} />
        <Education.Component payload={Payload.education} />
        <Etc.Component payload={Payload.etc} />
        <Footer.Component payload={Payload.footer} />
      </Container>
    </>
  );
};

export default Yosume;
