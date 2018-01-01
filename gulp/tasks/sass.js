const gulp = require('gulp');
const config = require('../config.js');
const fancyLog = require('fancy-log');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cached = require('gulp-cached');
const autoprefixer = require('gulp-autoprefixer');
const size = require('gulp-size');
const notify = require('gulp-notify');

const onError = err => {
	console.log(err);
	notify.onError({
		title: 'Gulp error in ' + err.plugin,
		message: err.toString()
	})(err);
};

// scss - build the scss to the build folder, including the required paths, and writing out a sourcemap
gulp.task('scss', () => {
	fancyLog('-> Compiling scss:');
	return gulp
		.src(config.paths.sass.src)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(
			sass({
				includePaths: config.paths.sass.src2
			})
		)
		.pipe(cached('sass_compile'))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./'))
		.pipe(size({ gzip: true, showFiles: true }))
		.pipe(gulp.dest(config.paths.sass.dest));
});
