import ReactGA from 'react-ga';

export function init(trackingCode?: string) {
  if (typeof window !== 'undefined' && !window.GA_INITIALIZED && trackingCode) {
    ReactGA.initialize(trackingCode);
  }
}

export function pageview() {
  if (typeof window !== 'undefined') {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
}

export function event(category = '', action = '') {
  if (category && action) {
    ReactGA.event({ category, action });
  }
}

export function exception(description = '', fatal = false) {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
}
