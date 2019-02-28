export interface AnalyticsHelpers {
  init: (trackingCode?: string) => void;
  pageview: () => void;
  event: (category?: string, action?: string) => void;
  exception: (description?: string, fatal?: boolean) => void;
}

export interface WithAnalyticsConfig {
  trackingCode?: string;
  respectDNT?: boolean;
}
