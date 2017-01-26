var gulp            = require('gulp'),
    config          = require('../config.js'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    plumber         = require('gulp-plumber'),
    minifyCss       = require('gulp-minify-css');

gulp.task('sass_deploy', function() {
	gulp.src(config.paths.sass.src)
		// Initialize sourcemaps
		.pipe(sourcemaps.init())
		// Prevent pipe breaking caused by errors from gulp plugins
		.pipe(plumber())
		// Compiles sass to css
        .pipe(sass())
        // Minify CSS
        .pipe(minifyCss({compatibility: 'ie9'}))
        // CSS destination
        .pipe(gulp.dest(config.paths.sass.src));
});
