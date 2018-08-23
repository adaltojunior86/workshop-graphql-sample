
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin(
  {
    template: './client/index.html'
  }
)

module.exports = {
  mode: 'development',
  entry: './client/src/index.js',
  output: {
    path: __dirname + '/dist/client/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  plugins: [htmlPlugin]
}