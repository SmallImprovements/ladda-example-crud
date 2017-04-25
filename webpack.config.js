const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    basic: './basic/index.js',
    advanced: './advanced/index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.DefinePlugin({
      PRODUCTION: process.env.NODE_ENV === 'production'
    }),
    new webpack.ProvidePlugin({
      Promise: 'es6-promise-promise'
    })
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: 'basic', to: '/basic.html' },
        { from: 'advanced', to: '/advanced.html' }
      ]
    }
  }
};
