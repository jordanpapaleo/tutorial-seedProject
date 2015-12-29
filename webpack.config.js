var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
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
