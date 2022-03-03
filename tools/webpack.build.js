const webpack_config = require('./webpack.config')
const path = require('path')

module.exports = Object.assign({}, webpack_config, {
  mode: 'production',
  devtool: 'none',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'index.js',
    library: 'CssSelectorGenerator',
    libraryTarget: 'umd',
  },
})
