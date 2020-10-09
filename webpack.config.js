// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const entryPoints = [
  {
    'name': 'basestyles',
    'path': './src/basestyles.css'
  },
  {
    'name': 'basestyles.min',
    'path': './src/basestyles.css'
  }
];

const config = entry => ({
  devtool: 'source-map',
  entry: entry.path,
  output: {
    path: path.resolve('dist'),
    filename: `${entry.name}.js`,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                ctx: { entry }
              }
            }
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: `${entry.name}.css`
  })],
});

module.exports = entryPoints.map(entry => config(entry));
