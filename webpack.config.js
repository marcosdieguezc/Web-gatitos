const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  mode: "production",
  entry: {
    application: './src/js/application.js',
  },
  devtool: 'inline-source-map',
  devServer:{
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'production',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
      new WebpackObfuscator ({
          rotateStringArray: true
      }, ['']),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};