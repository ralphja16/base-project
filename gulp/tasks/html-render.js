const gulp = require('gulp');
const config = require('./../config');
const plumber = require('gulp-plumber');
const htmlrender = require('gulp-htmlrender');
const onError = require('../errorHandler');
const fancyLog = require('fancy-log');

gulp.task('html-render', () => {
	fancyLog('-> Building the HTML pages');
	return gulp
		.src(config.paths.html.src, { read: false })
		.pipe(plumber({ errorHandler: onError }))
		.pipe(htmlrender.render())
		.pipe(gulp.dest(config.paths.html.dest));
});
