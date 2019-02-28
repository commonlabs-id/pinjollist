/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */

import React from 'react';
import { NextComponentType } from 'next';
import { SingletonRouter } from 'next/router';

import * as debugAnalytics from './helpers/debug';
import * as prodAnalytics from './helpers/prod';
import { WithAnalyticsConfig, AnalyticsHelpers } from './types';

// This actually follows a similar pattern as https://github.com/sergiodxa/next-ga, but we added
// an option to let the analytics respect Do Not Track (DNT) requests.

const isLocalhost =
  typeof window !== 'undefined' &&
  Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
  );

const isDev = process.env.NODE_ENV !== 'production';

const isDntEnabled =
  // Do not add Google Analytics when building the static site...
  typeof window === 'undefined' ||
  // ...or when DoNotTrack is enabled:
  (typeof window.navigator !== 'undefined' && window.navigator.doNotTrack === '1');

export interface WithAnalyticsState {
  analytics?: AnalyticsHelpers;
}

export function withAnalytics<P extends {}>(config: WithAnalyticsConfig, Router: SingletonRouter) {
  return (
    WrappedComponent:
      | NextComponentType<P & WithAnalyticsState, P>
      | React.ComponentType<P & WithAnalyticsState>,
  ) => {
    return class extends React.Component<P & WithAnalyticsState, WithAnalyticsState> {
      public static getInitialProps = (WrappedComponent as NextComponentType).getInitialProps;

      public constructor(props: P) {
        super(props);

        this.state = {
          analytics: undefined,
        };
      }

      public componentDidMount() {
        let analytics: AnalyticsHelpers | undefined;

        if (isDev || isLocalhost) {
          analytics = debugAnalytics;
        }

        if (!isDntEnabled || !config.respectDNT) {
          // Only load analytics if we're sure DNT is not enabled AND respectDNT is enabled
          analytics = prodAnalytics;
        }

        if (analytics) {
          // init analytics
          analytics.init(config.trackingCode);
          // log page
          analytics.pageview();

          // save possible previously defined callback
          const previousCallback = Router.onRouteChangeComplete;
          Router.onRouteChangeComplete = url => {
            // call previously defined callback if is a function
            if (typeof previousCallback === 'function') {
              previousCallback(url);
            }

            if (analytics) {
              // log page
              analytics.pageview();
            }
          };

          this.setState({
            analytics,
          });
        }
      }

      public render() {
        const { analytics } = this.state;
        return <WrappedComponent {...this.props} analytics={analytics} />;
      }
    };
  };
}
