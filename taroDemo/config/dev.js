module.exports = {
    env: {
        NODE_ENV: '"development"'
    },
    defineConstants: {
    },
    weapp: {
        compile: {
            exclude: ['src/sdk/AnalysysAgent_encryption.es6.min.js', 'src/sdk/AnalysysAgent_encryption.min.js', 'src/sdk/AnalysysAgent_QuickApp_SDK.custom.es6.min.js', 'src/sdk/AnalysysAgent_QuickApp_SDK.custom.min.js']
        }
    },
    h5: {}
}
