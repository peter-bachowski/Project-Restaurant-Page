const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
        ,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Restaurant Page',
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ]
};