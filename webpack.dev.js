const merge = require('webpack-merge').merge;
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    devServer: {
        contentBase: './dist',
        publicPath: '/',
        port: 8080,
        historyApiFallback: true,
        proxy: {
            "/api/*": {
                target: "http://localhost:3000"
            }
        }
    }
});