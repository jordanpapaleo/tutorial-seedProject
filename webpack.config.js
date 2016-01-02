var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    root: [
      path.join(__dirname, 'app')
    ]
  },
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Seed Project',
      filename: 'index.html',
      template: 'index.tmpl.html',
      inject: 'body',
      hash: true
    })
  ]
}
