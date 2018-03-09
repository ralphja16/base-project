const gulp = require('gulp');
const config = require('../config.js');
const clean = require('gulp-clean');

gulp.task('clean', function() {
	return gulp.src('./public', { read: false }).pipe(clean({ force: true }));
});
