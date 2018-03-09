const gulp = require('gulp');
const cache = require('gulp-cache');

gulp.task('clear-image-cache', function(done) {
	return cache.clearAll(done);
});
