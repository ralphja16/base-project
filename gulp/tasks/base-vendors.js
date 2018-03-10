const gulp = require('gulp');
const config = require('../config.js');
const fancyLog = require('fancy-log');

gulp.task('base-vendors', () => {
	fancyLog('-> Copying base vendors to public');
	return gulp
		.src(config.paths.vendors.base.src, {
			base: './src/assets/js/vendors'
		})
		.pipe(gulp.dest(config.paths.vendors.base.dest));
});
