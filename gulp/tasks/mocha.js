var gulp            = require('gulp'),
    config          = require('../config.js'),
    mocha           = require('gulp-mocha');

gulp.task('mocha', function(){
    gulp.src(config.paths.tests)
    .pipe(mocha())
    .on('error', function() {
        gulp.emit('end');
    });

});
