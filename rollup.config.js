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
          'contexts', 'CONTEXT_URL_V3', 'CONTEXT_URL_V3_ALPHA',
          'CONTEXT_URL_V3_JFF_V1', 'CONTEXT_URL_V3_BETA', 'CONTEXT_URL_V3_0_0',
          'CONTEXT_URL_V3_0_1', 'CONTEXT_URL_V3_0_2'
        ]
      }
    })
  ]
};
