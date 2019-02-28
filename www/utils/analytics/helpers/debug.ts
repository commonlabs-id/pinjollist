/* eslint-disable no-console */

export function init(trackingCode?: string) {
  console.log(`[Analytics] Init triggered for ${trackingCode}`);
}

export function pageview() {
  if (typeof window !== 'undefined') {
    console.log(`[Analytics] Pageview triggered for ${window.location.pathname}`);
  }
}

export function event(category = '', action = '') {
  console.log(`[Analytics] Event for category ${category} and action ${action} triggered`);
}

export function exception(description = '', fatal = false) {
  console.log(
    `[Analytics] ${fatal ? 'Fatal exception' : 'Exception'} with description ${description}`,
  );
}
