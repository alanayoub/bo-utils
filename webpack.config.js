const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {

  mode: 'development',

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

  // // A module listed as an external will simply be left alone; it will not be bundled in
  // externals: {

  //   // For Socket.io error
  //   // ERROR in ./node_modules/engine.io/lib/server.js
  //   // Module not found: Error: Can't resolve 'uws' in 'node_modules/engine.io/lib'
  //   fs: 'fs',
  //   events: 'events',
  //   pug: 'pug',
  //   glob: 'glob',
  // },

};
