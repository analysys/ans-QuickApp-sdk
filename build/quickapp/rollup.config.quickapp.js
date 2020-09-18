import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'
import path from 'path'

const pathResolve = p => path.join(__dirname, p)

function changePath (options) {
    return {
        name: 'changePath',
        transform: function transform (code, id) {
            code = code.replace(/\@Storage/g, pathResolve('../../src/ProgramDiff/quickapp/storage'))
                .replace(/\@Device/g, pathResolve('../../src/ProgramDiff/quickapp/device'))
                .replace(/\@Fetch/g, pathResolve('../../src/ProgramDiff/quickapp/fetch'))
                .replace(/\@Router/g, pathResolve('../../src/ProgramDiff/quickapp/router'))
                .replace(/\@Path/g, pathResolve('../../src/ProgramDiff/quickapp/path'))
                .replace(/\$ANS/g, 'QK')
                .replace(/\$LIB/g, 'Quickapp')
                .replace(/\$LibVERSION/, '4.3.0')
            return {
                code: code,
                id: id
            }
        }
    }
}
export default [{
    input: './src/main_custom.js',
    output: [{
        file: './Demo/src/Common/sdk/AnalysysAgent_QuickApp_SDK.custom.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [
            terser({
                'mangle': {
                    toplevel: true
                }
            })
        ]
    },
    {
        file: './Demo/src/Common/sdk/AnalysysAgent_QuickApp_SDK.custom.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [
            uglify({
                'mangle': {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './taroDemo/src/sdk/AnalysysAgent_QuickApp_SDK.custom.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [
            terser({
                'mangle': {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './taroDemo/src/sdk/AnalysysAgent_QuickApp_SDK.custom.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [
            uglify({
                'mangle': {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './SDK/quickApp/sdk/AnalysysAgent_QuickApp_SDK.custom.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [
            terser({
                'mangle': {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './SDK/quickApp/sdk/AnalysysAgent_QuickApp_SDK.custom.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [
            uglify({
                'mangle': {
                    toplevel: true
                }
            })
        ]
    }],
    plugins: [
        changePath(),
        replace({
            $ans: '{}',
            delimiters: ['', '']
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        eslint({
            exclude: [
                'src/**'
            ]
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        terser({
            'mangle': {
                toplevel: true
            }
        })
    ],
    sourceMap: true

}]
