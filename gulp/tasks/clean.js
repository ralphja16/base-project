const gulp = require('gulp');
const config = require('../config.js');
const clean = require('gulp-clean');
const fancyLog = require('fancy-log');

gulp.task('clean', function() {
	fancyLog('-> Cleaning public folder');
	return gulp.src('./public', { read: false }).pipe(clean({ force: true }));
});
