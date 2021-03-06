const gulp = require('gulp');
const config = require('./../config');
const injectPartials = require('gulp-inject-partials');
const plumber = require('gulp-plumber');
const onError = require('../errorHandler');

gulp.task('parse-html', function() {
	return gulp
		.src(config.paths.html.src)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(injectPartials())
		.pipe(gulp.dest(config.paths.html.dest));
});
