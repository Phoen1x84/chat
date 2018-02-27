const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Here the application starts executing
  // and webpack starts bundling
  entry: {
    app: './src/app/index.js' // string | object | array
  },

  output: {
    filename: '[name].bundle.js', // string
    // the filename template for entry chunks

    path: path.resolve(__dirname, '../dist'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          use: ['css-loader', 'sass-loader']
        }),
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '..') }),
    new ExtractTextPlugin('style.css')
  ]
};
