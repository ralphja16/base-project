var gulp            = require('gulp'),
    config          = require('../config.js'),
    babel           = require('gulp-babel');

gulp.task('babel', function() {
    gulp.src(config.paths.scripts.src)
    .pipe(babel())
    .pipe(gulp.dest(config.paths.scripts.dest));
});
