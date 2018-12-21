// rollup.config.js
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import posthtml from 'rollup-plugin-posthtml'
import image from 'rollup-plugin-img'
import { uglify } from 'rollup-plugin-uglify'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import postcssUrl from 'postcss-url'

const production = !process.env.ROLLUP_WATCH

const outputFolder = './public'

export default {
  input: 'src/entry.js',
  moduleName: 'KChart',
  output: {
    file: 'dist/kchart.js',
    format: 'iife'
  },
  watch: {
    clearScreen: false
  },
  plugins: [
    image({
      output: `${outputFolder}`,
      limit: 0,
      hash: true
    }),
    posthtml({
      skipParse: true
    }),
    postcss({
      //modules: true,
      plugins: [
        simplevars(),
        nested(),
        cssnext(),
        postcssUrl({ url: 'inline' })
      ]
    }),
    resolve({
      preferBuiltins: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    production && uglify(),
    production && serve('dist'),
    production &&
      livereload({
        watch: 'dist',
        port: 3320
      })
  ]
}
