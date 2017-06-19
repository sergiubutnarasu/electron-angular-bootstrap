var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'js/angular2': [
      './app/libs/polyfills',
      './app/libs/angular'
    ],
    'js/app': [
      './app/libs/vendors',
      './app/app.starter'
    ]
  },

  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.(css|html)$/,
        loader: 'raw-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=10000000"
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new CommonsChunkPlugin({ name: 'angular2', filename: 'angular2.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common', filename: 'js/common.js' }),
    new ExtractTextPlugin({ filename: "content/style/style.css", allChunks: true }),
    new CopyWebpackPlugin([
      { from: 'node_modules/jquery/dist/jquery.min.js', to: 'content/vendors/jquery.min.js' },
      { from: 'node_modules/bootstrap/dist', to: 'content/vendors/bootstrap' },
      { from: 'app/index.html', to: 'index.html' },
      { from: 'app/main.js', to: 'main.js' },
      { from: 'app/package.json', to: 'package.json' }
    ])
  ],
  target: 'node-webkit'
};