const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    desktop: './src/desktop.js',
    mobile: './src/mobile.js'
  },
  // mode: 'development',
  output: {
    filename: 'bundle.[name].js',
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
      filename: '[name].css'
    }),

  ]
};