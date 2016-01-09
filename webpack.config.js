var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
      publicPath: 'http://localhost:8080/'
    },
  resolve: {
    root: [
      path.join(__dirname, 'app')
    ],
    extensions: ['', '.js', '.jsx']
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
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(otf|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
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
