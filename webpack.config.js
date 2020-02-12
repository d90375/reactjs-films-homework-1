const devConfig = require('./config/webpack/webpack.dev.config');
const prodConfig = require('./config/webpack/webpack.prod.config');

module.exports = (env) => {
  if (env === 'production') {
    return prodConfig;
  }
  return devConfig;
};
