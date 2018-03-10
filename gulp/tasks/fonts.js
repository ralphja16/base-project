const gulp = require('gulp');
const config = require('../config.js');

gulp.task('fonts', () => {
	return gulp
		.src(config.paths.fonts.src, { base: './src/assets/fonts' })
		.pipe(gulp.dest(config.paths.fonts.dest));
});
