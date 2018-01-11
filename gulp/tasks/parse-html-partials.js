const gulp = require('gulp');
const config = require('./../config');
const injectPartials = require('gulp-inject-partials');

gulp.task('parse-html', function() {
	return gulp
		.src(config.paths.html.src)
		.pipe(injectPartials())
		.pipe(gulp.dest(config.paths.html.dest));
});
