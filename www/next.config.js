const withTypescript = require('@zeit/next-typescript');

const nextConfig = {
  exportPathMap: () => {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = withTypescript(nextConfig);
