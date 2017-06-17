const { resolve } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  entry: [
    'regenerator-runtime/runtime',
    resolve(__dirname, '..', 'src', 'index.jsx'),
  ],

  output: {
    path: resolve(__dirname, '..', 'build'),
    filename: '[chunkhash].[name].js',
    publicPath: '/',
  },

   plugins: [
    new CleanWebpackPlugin(['build'], {
      root: resolve(__dirname, '..'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    // new webpack.optimize.UglifyJsPlugin({ This breaks synaptic.js ¯\_(ツ)_/¯
    //   sourceMap: true,
    // }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..' ,'src', 'index.ejs'),
      title: 'text-recognition',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new PreloadWebpackPlugin(),
    ...process.env.ANALYZE_BUNDLE ?
        [ new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)() ] :
        [],
  ],
};
