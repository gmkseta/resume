import React from 'react';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NextComponentType } from 'next';

const YosumeApp = function ({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
};

export default YosumeApp;
