const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'browser.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ],
  devtool: 'source-map'
}
