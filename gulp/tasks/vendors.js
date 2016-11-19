var gulp            = require('gulp'),
    config          = require('../config.js'),
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglify');

gulp.task('vendors', function(){
    gulp.src(config.paths.vendors)
    // Concatenate all JS files into one
    .pipe(concat('vendors.min.js'))
    // Minify JS
    .pipe(uglify())
    // Where to store the finalized JS
    .pipe(gulp.dest('./public/library/js'));

});
