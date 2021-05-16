const { babel } = require('@rollup/plugin-babel')
const babelConfig = require('./.babelrc.json')
const commonjs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const path = require('path')
const plugins = [
  babel({
    babelHelpers: 'runtime',
    babelrc: false,
    exclude: 'node_modules/**',
    plugins: babelConfig.plugins,
    presets: babelConfig.presets
  }),
  nodeResolve(),
  commonjs()
]
const external = ['react', 'styled-components']
module.exports = [
  {
    external,
    input: path.resolve(__dirname, 'src/Header/index.js'),
    plugins,
    output: {
      exports: 'named',
      file: `${path.resolve(__dirname, 'dist/Header/index.js')}`,
      format: 'cjs'
    }
  },
  {
    external,
    input: path.resolve(__dirname, 'src/Footer/index.js'),
    plugins,
    output: {
      exports: 'named',
      file: `${path.resolve(__dirname, 'dist/Footer/index.js')}`,
      format: 'cjs'
    }
  },
  {
    external,
    input: path.resolve(__dirname, 'src/index.js'),
    plugins,
    output: {
      exports: 'named',
      file: `${path.resolve(__dirname, 'dist/index.js')}`,
      format: 'cjs'
    }
  }
]
