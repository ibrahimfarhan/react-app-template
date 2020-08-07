const merge = require('webpack-merge').merge;
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    }
});