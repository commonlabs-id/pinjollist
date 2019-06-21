/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
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
  env: {
    API_URL: process.env['API_URL'],
    GOOGLE_ANALYTICS: process.env['GOOGLE_ANALYTICS'],
  },
  // Read the `BUILD_TARGET` variable and use the passed mode
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/search': { page: '/search' },
      '/api': { page: '/api' },
    };
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

module.exports = withPlugins([[withTypescript], [withMDX]], nextConfig);
