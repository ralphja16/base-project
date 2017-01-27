var gulp            = require('gulp'),
    config          = require('../config.js'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('autoprefixer'),
    sourcemaps      = require('gulp-sourcemaps'),
    plumber         = require('gulp-plumber'),
    postcss         = require('gulp-postcss'),
    reporter        = require('postcss-reporter'),
    notify          = require('gulp-notify');

gulp.task('sass', function() {
    var processors = [
        autoprefixer({browsers: ['last 2 version', '> 5%', 'ie 9', 'ios 7', 'android 4']}),
        // stylelint(),
        reporter(),
    ];

    gulp.src(config.paths.sass.src)
    .pipe(plumber({ errorHandler: function(err) {
        notify.onError({
            title: "Gulp error in " + err.plugin,
            message:  err.toString()
        })(err);
    }}))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    // .pipe(cssnano())
    // Initialize sourcemaps
    .pipe(sourcemaps.init())
    .pipe(gulp.dest(config.paths.docs.css))
    .pipe(sass({outputStyle: 'uncompressed'}))
    // Write sourcemaps to /library/css/maps
    .pipe(sourcemaps.write('./maps'))
    // CSS destination
    .pipe(gulp.dest(config.paths.sass.dest));
    
});
