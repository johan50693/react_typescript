const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    output: 'export',
  basePath: isProd ? '/react_typescript' : '',
  assetPrefix: isProd ? '/react_typescript/' : '',
};

