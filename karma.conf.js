// Karma configuration
// Generated on Fri Oct 21 2016 12:29:28 GMT+0200 (CEST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'sinon-chai', 'browserify'],


        // list of files / patterns to load in the browser
        files: [
            'test/*.js',
            'source/*.js',
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.spec.js': ['browserify']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'mocha', 'coverage'],


        // Browserify configuration
        // The coverage command goes here instead of the preprocessor because we need it to work with browserify
        browserify: {
            debug: true,
            transform: [
                [
                    'babelify',
                    {
                        presets: 'es2015'
                    }
                ], [
                    'browserify-istanbul',
                    {
                        instrumenterConfig: {
                            embedSource: true
                        }
                    }
                ]
            ]
        },

        // optionally, configure the reporter
        // text displays it within the console (alternative: text-summary)
        // lcov creates a codecov compatible report
        coverageReporter: {
            reporters: [
                {'type': 'text'},
                {'type': 'html', dir: 'coverage'},
                {'type': 'lcov'}
            ]
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
