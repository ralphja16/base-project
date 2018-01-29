const gulp = require('gulp');
const config = require('../config.js');

const del = require('del');

gulp.task('clean', function(cb) {
	return del(config.globs.cleaning, cb);
});
