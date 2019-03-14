const path = require('path');
const nodeExternals = require('webpack-node-externals');

const defaultConfig = {

  mode: 'development',

}

const serverConfig = {

  entry: './index.generated.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'bo-utils'
  },

  // The target: 'node' option tells webpack not to touch any built-in modules like fs or path
  target: 'node',

  // Ignore all modules in node_modules folder
  externals: [
    nodeExternals({
      whitelist: []
    })
  ],

};

const clientConfig = {

  mode: 'development',

  entry: './index.client.generated.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.client.js',
    globalObject: 'window',
    libraryTarget: 'umd',
    library: 'bo'
  },

  // The target: 'node' option tells webpack not to touch any built-in modules like fs or path
  target: 'web',

  // Ignore all modules in node_modules folder
  externals: [
    nodeExternals({
      whitelist: []
    })
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ]
          }
        }
      }
    ]
  }

};

module.exports = [
  { ...defaultConfig, ...serverConfig },
  { ...defaultConfig, ...clientConfig }
];
