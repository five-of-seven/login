const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'loginbundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 50000,
    publicPath: 'http://localhost:50000/dist/',
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
