var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
     { test: /\.js$/,
       loader: 'babel-loader',
       exclude: /node_modules/
     },
     { test: /\.css$/, loader: "style!css" },
     { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url?limit=8192' },
     { test: /\.(otf|eot|ttf)$/, loader: "file?prefix=font/" },
     { test: /\.svg$/, loader: "file" }
   ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    port: 8081
  },
};
