import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { initAnalytics, WithAnalyticsState } from '@pinjollist/next-with-analytics';

const progress = NProgress.configure({ showSpinner: false });

const config = {
  trackingCode: process.env.GOOGLE_ANALYTICS,
  respectDNT: true,
};
const analyticsInstance = initAnalytics(config);

class MyApp extends App<WithAnalyticsState> {
  public componentDidMount() {
    const { handleRouteChange } = analyticsInstance;

    // Enable tracking page views for route change
    Router.events.on('routeChangeComplete', handleRouteChange);

    // NProgress
    Router.events.on('routeChangeStart', () => progress.start());
    Router.events.on('routeChangeComplete', () => progress.done());
    Router.events.on('routeChangeError', () => progress.done());
  }

  public componentWillUnmount() {
    const { handleRouteChange } = analyticsInstance;

    // Disable tracking page views for route change before unmount
    Router.events.off('routeChangeComplete', handleRouteChange);

    // NProgress
    Router.events.off('routeChangeStart', () => progress.start());
    Router.events.off('routeChangeComplete', () => progress.done());
    Router.events.off('routeChangeError', () => progress.done());
  }

  public render() {
    const { Component, pageProps } = this.props;
    const { analytics } = analyticsInstance;

    return <Component analytics={analytics} {...pageProps} />;
  }
}

export default MyApp;
