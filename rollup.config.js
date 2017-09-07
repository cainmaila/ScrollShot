import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
// import uglify from 'rollup-plugin-uglify'
// import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
export default {
    entry: 'src/main.js',
    format: 'iife',
    plugins: [
        json(),
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        // uglify(),
        // serve('./'),
        livereload({
            watch: 'build.js'
        }),
    ],
    dest: 'build.js',
    sourceMap: true,
}