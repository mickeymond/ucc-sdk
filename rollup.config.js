import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default [
	// browser-friendly UMD build
	{
		input: 'src/main.js',
		output: {
			name: 'uccSdk',
			file: 'dist/bundle.umd.js',
			format: 'umd',
			globals: {
				'axios': 'axios'
			}
		},
		external: [ 'axios' ],
		plugins: [
			resolve(), // so Rollup can find `axios`
			commonjs(), // so Rollup can convert `axios` to an ES module
			json()
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	{
		input: 'src/main.js',
		external: [ 'axios' ],
		output: [
			{ file: 'dist/bundle.cjs.js', format: 'cjs' },
			{ file: 'dist/bundle.esm.js', format: 'es' }
		]
	}
];
