var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.ts',
    style: './src/style.js'
  },
  output: {
    publicPath: './',
    path: __dirname + '/dist',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.ts/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [new HtmlwebpackPlugin()]
};
