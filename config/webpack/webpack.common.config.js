const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
