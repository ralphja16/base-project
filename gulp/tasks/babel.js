var gulp            = require('gulp'),
    config          = require('../config.js'),
    babel           = require('gulp-babel');

gulp.task('babel', function() {
    gulp.src(config.paths.js)
    .pipe(babel())
    .pipe(gulp.dest('./public/library/js'));
});
