const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/main.js', './src/main.css'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: "css-loader!postcss-loader",
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        proxy: {
          '*': 'http://127.0.0.1:8081'
        }
      }
    })
  ],
  devServer: {
    contentBase: './public',
    port: 8080,
    inline: true,
    historyApiFallback: true,
  },
  devtool: 'source-map'
};