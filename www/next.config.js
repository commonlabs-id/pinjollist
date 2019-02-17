/* eslint-disable global-require, import/no-extraneous-dependencies */

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

const nextConfig = (baseConfig = {}) => {
  if (baseConfig.pageExtensions.indexOf('md') === -1) {
    baseConfig.pageExtensions.push('md');
  }

  if (baseConfig.pageExtensions.indexOf('mdx') === -1) {
    baseConfig.pageExtensions.push('mdx');
  }
};

module.exports = withTypescript(withMDX(nextConfig));
