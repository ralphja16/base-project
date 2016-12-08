var gulp            = require('gulp'),
    config          = require('../config.js'),
    babel           = require('gulp-babel');

gulp.task('babel', function() {
    gulp.src(config.paths.scripts)
    .pipe(babel())
    .pipe(gulp.dest('./public/library/js'));
});
