const gulp = require('gulp');
const config = require('../config.js');
const fancyLog = require('fancy-log');

gulp.task('fonts', () => {
	fancyLog('-> Copying fonts to public folder');
	return gulp
		.src(config.paths.fonts.src, { base: './src/assets/fonts' })
		.pipe(gulp.dest(config.paths.fonts.dest));
});
