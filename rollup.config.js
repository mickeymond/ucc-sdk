export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'uccSdk',
    globals: {
      'axios': 'axios'
    }
  },
  external: [ 'axios' ],
  // plugins: [ resolve() ]
};