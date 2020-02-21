const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    entry: './app/App.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
      libraryTarget: 'window',
      library: 'App',
    },
    externals: ['react', 'react-dom', 'react-dom/server'],
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [
            path.resolve(__dirname, 'node_modules'),
          ],
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
            },
          }
        },
      ]
    }
  },
  {
    entry: './server/page.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'page.js',
      libraryTarget: 'commonjs' 
    },
    externals: ['react', 'react-dom', 'react-dom/server'],
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [
            path.resolve(__dirname, 'node_modules'),
          ],
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
            },
          }
        },
      ]
    }
  }
]