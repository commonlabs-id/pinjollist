import React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';

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
      </Container>
    );
  }
}

export default MyApp;
