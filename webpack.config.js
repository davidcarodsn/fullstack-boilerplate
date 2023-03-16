const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDevEnviroment = process.env.NODE_ENV !== 'production';

module.exports = { 
  entry: {
    index: './frontend/index.ts'
  },
  output: {
    path: path.join(__dirname, 'build/public'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.join(__dirname, 'frontend')],
        exclude: [path.resolve(__dirname, 'backend')]
      },
      {
        test: /\.css/,
        use: [
          isDevEnviroment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ],
        include: [path.join(__dirname, 'frontend')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html',
      chunks: ['index']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: './frontend/assets', to: './assets' }
      ]
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build/public'),
    },
    compress: true,
    port: 8080
  },
  devtool: 'source-map',
  mode: isDevEnviroment ? 'development' : 'production',
};