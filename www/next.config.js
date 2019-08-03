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
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/docs': { page: '/docs' },
    };
  },
  env: {
    API_URL: process.env['API_URL'],
    GOOGLE_ANALYTICS: process.env['GOOGLE_ANALYTICS'],
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: fileName => (fileName.includes('node_modules') ? 'global' : 'scoped'),
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withPlugins([[withMDX]], nextConfig);
