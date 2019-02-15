const withTypescript = require('@zeit/next-typescript');

const nextConfig = {
  target: 'serverless',
};

module.exports = withTypescript(nextConfig);
