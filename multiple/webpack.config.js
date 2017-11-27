var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    page1: './src/page1.js',
    page2: './src/page2.js'
  },
  output: {
    publicPath: './',
    path: __dirname + '/dist',
    filename: '[name].[chunkhash].js'
  },
  plugins: [new HtmlwebpackPlugin()]
};
