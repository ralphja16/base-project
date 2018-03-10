const gulp = require('gulp');
const cache = require('gulp-cache');
const fancyLog = require('fancy-log');

gulp.task('clear-image-cache', function(done) {
	fancyLog('-> Clear image cache');
	return cache.clearAll(done);
});
