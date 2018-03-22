const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const desktop = new ExtractTextPlugin('./src.desktop');

module.exports = {
  entry: './src/index.js',
  // mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // 加入 Loader
    rules: [{
      test: /\.(scss)$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }]
  },
  plugins: [
    // 指定產生檔案名稱與路徑
    new ExtractTextPlugin({
      filename: 'stylesheet.css'
    }),
    desktop
  ]
};