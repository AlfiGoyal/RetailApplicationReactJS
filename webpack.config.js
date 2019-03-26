var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: ['babel-polyfill','./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
      rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ["@babel/preset-env","@babel/preset-react"],
                    plugins: [
                      "@babel/plugin-proposal-class-properties",
                    ]
                }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|jpeg|ttf|...)$/,
            use: [
             { loader: 'url-loader', options: { limit: 8192 } } 
             // limit => file.size =< 8192 bytes ? DataURI : File
            ]
          }
      ]
  },

  watch: true
};