import React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import withGA from 'next-ga';

import Toast from '../components/ui/Toast';
import Portal from '../components/ui/Portal';

const progress = NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.done());
Router.events.on('routeChangeError', () => progress.done());

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
        <Portal>
          <Toast />
        </Portal>
      </Container>
    );
  }
}

export default withGA(process.env.GOOGLE_ANALYTICS, Router)(MyApp);
