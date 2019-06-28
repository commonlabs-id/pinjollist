import React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import Router from 'next/router';
import { withAnalytics, WithAnalyticsState } from '@pinjollist/next-with-analytics';
import NProgress from 'nprogress';

import Toast from '../components/ui/Toast';
import Portal from '../components/ui/Portal';

const progress = NProgress.configure({ showSpinner: false });

class MyApp extends App<WithAnalyticsState> {
  public static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  public componentDidMount() {
    Router.events.on('routeChangeStart', () => progress.start());
    Router.events.on('routeChangeComplete', () => progress.done());
    Router.events.on('routeChangeError', () => progress.done());
  }

  public componentWillUnmount() {
    Router.events.off('routeChangeStart', () => progress.start());
    Router.events.off('routeChangeComplete', () => progress.done());
    Router.events.off('routeChangeError', () => progress.done());
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

const nextWithAnalytics = withAnalytics(Router, {
  trackingCode: process.env.GOOGLE_ANALYTICS,
  respectDNT: true,
});

export default nextWithAnalytics(MyApp);
