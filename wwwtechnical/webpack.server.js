const path = require('path')
const webpack = require('webpack')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [webpackNodeExternals()],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'server.js',
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
    new webpack.DefinePlugin({__isBrowser__: "false"}),
    new webpack.ProvidePlugin({
      "React": "react",
    })
  ],
  devtool: 'source-map'
}
