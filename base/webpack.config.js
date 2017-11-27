var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: './',
    path: __dirname + '/dist',
    filename: 'index.[hash].js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8088'
    })
  ]
};
