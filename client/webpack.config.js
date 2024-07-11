const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// * Working on this
// TODO: Add CSS loaders and babel to webpack.
// ! Nothing yet

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE'
      }),

      new WebpackPwaManifest({
        name: 'JATE',
        short_name: 'JATE',
        description: 'Just a text editor.',
        // need to add other elements
      })
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
