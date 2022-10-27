const commonjs = require('rollup-plugin-commonjs');

module.exports = {
  // Input is created by webpack in previous build step, in CommonJS format.
  input: 'dist/context.js',
  output: {
    file: 'dist/context.esm.js',
    format: 'esm'
  },
  plugins: [
    commonjs({
      // explicitly list exports otherwise only have 'default'
      namedExports: {
        'dist/context.js': [
          'contexts', 'constants', 'CONTEXT_V3', 'CONTEXT_URL_V3',
          'CONTEXT_URL_V3_IMS', 'CONTEXT_URL_V3_JFF_V1'
        ]
      }
    })
  ]
};
