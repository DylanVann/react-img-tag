import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'

const pkg = require('./package.json')

const input = 'src/index.ts'

const external = []

const plugins = [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript(),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),
    // Resolve source maps to the original source
    sourceMaps()
]

export default [
    // UMD build for browsers.
    {
        input,
        external,
        output: {
            name: camelCase(pkg.name),
            file: pkg.browser,
            format: 'umd',
            sourcemap: true
        },
        watch: {
            include: 'src/**'
        },
        plugins
    },
    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input,
        external,
        output: [
            { file: pkg.main, format: 'cjs', sourcemap: true },
            { file: pkg.module, format: 'es', sourcemap: true }
        ],
        watch: {
            include: 'src/**'
        },
        plugins
    }
]
