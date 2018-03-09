const gulp = require('gulp');
const config = require('./../config');
const plumber = require('gulp-plumber');
const htmlrender = require('gulp-htmlrender');
const onError = require('../errorHandler');

gulp.task('html-render', () => {
	return gulp
		.src(config.paths.html.src, { read: false })
		.pipe(plumber({ errorHandler: onError }))
		.pipe(htmlrender.render())
		.pipe(gulp.dest(config.paths.html.dest));
});
