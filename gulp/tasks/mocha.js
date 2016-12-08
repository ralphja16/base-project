var gulp            = require('gulp'),
    config          = require('../config.js'),
    babel           = require('gulp-babel'),
    mocha           = require('gulp-mocha'),
    mochaPhantomJS  = require('gulp-mocha-phantomjs');

gulp.task('mocha', function(){
    gulp.src(config.paths.tests, {read: false})
    .pipe(babel())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function() {
        gulp.emit('end');
    });

    // gulp.task('unittest', function () {
    return gulp
    .src('./test/testrunner.html')
    .pipe(mochaPhantomJS({
		reporter: 'spec',
        phantomjs: {
            useColors:true
        }
	}));
// });

});
