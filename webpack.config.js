const path = require('path');

module.exports = [
  'source-map'
].map(devtool => ({
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'uccSdk',
  },
  externals: {
    axios: {
      commonjs: 'axios',
      commonjs2: 'axios',
      amd: 'axios',
      root: 'axios',
    },
  },
  devtool,
  optimization: {
    runtimeChunk: true
  }
}));