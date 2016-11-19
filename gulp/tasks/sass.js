var gulp            = require('gulp'),
    config          = require('../config.js'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('autoprefixer'),
    sourcemaps      = require('gulp-sourcemaps'),
    plumber         = require('gulp-plumber'),
    postcss         = require('gulp-postcss')
    reporter        = require('postcss-reporter');

gulp.task('sass', function() {
    var processors = [
        autoprefixer({browsers: ['last 2 version', '> 5%', 'ie 9', 'ios 7', 'android 4']}),
        // stylelint(),
        reporter(),
    ];

    gulp.src('./source/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    // .pipe(cssnano())
    // Initialize sourcemaps
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({outputStyle: 'uncompressed'}))
    // Write sourcemaps to /library/css/maps
    .pipe(sourcemaps.write('./maps'))
    // CSS destination
    .pipe(gulp.dest('./public/library/css'));
});
