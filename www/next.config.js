/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

const withPlugins = require('next-compose-plugins');
const mdx = require('@zeit/next-mdx');
const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [],
    hastPlugins: [rehypePrism],
  },
});

const nextConfig = {
  target: 'serverless',
  // By default next static exports create a `page.html` file, which breaks pretty routes.
  // https://github.com/zeit/next.js/issues/8119
  exportTrailingSlash: true,
  env: {
    API_URL: process.env['API_URL'],
    GOOGLE_ANALYTICS: process.env['GOOGLE_ANALYTICS'],
  },
};

module.exports = withPlugins([[withMDX]], nextConfig);
