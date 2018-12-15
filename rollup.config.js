// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import posthtml from 'rollup-plugin-posthtml';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.bundle.js',
    format: 'iife'
  },
  watch: {
    clearScreen: false
  },
  plugins: [
    posthtml({
      skipParse: true
    }),
    postcss({
      extensions: ['.css']
    }),
    resolve({
      preferBuiltins: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    serve('dist'),
    livereload({
      watch: 'dist',
      port: 3320
    })
  ]
};
