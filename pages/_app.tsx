import React, { useEffect } from 'react';
import 'jquery/dist/jquery.slim';

import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

const YosumeApp = function ({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: any;
}) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default YosumeApp;
