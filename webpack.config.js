const crypto = require('crypto');
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(
  algorithm == 'md4' ? 'sha256' : algorithm
);

module.exports = {
  output: {
    libraryTarget: 'commonjs',
    filename: 'context.js'
  },
  mode: 'production',
  entry: './js/index.js',
  module: {
    rules: [
      {
        test: /\.jsonld$/,
        loader: 'json-loader'
      }
    ]
  }
};
