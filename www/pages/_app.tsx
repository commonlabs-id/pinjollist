import React from 'react';
import App, { Container, NextAppContext, DefaultAppIProps, AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';

import Toast from '../components/ui/Toast';
import Portal from '../components/ui/Portal';
import { withAnalytics, WithAnalyticsState } from '../utils/analytics';

const progress = NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.done());
Router.events.on('routeChangeError', () => progress.done());

class MyApp extends App<WithAnalyticsState> {
  public static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  public render() {
    const { Component, pageProps, analytics } = this.props;
    return (
      <Container>
        <Component analytics={analytics} {...pageProps} />
        <Portal>
          <Toast />
        </Portal>
      </Container>
    );
  }
}

export default withAnalytics<DefaultAppIProps & AppProps>(
  { trackingCode: process.env.GOOGLE_ANALYTICS, respectDNT: true },
  Router,
)(MyApp);
