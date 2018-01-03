const gulp = require('gulp');
const config = require('../config.js');
const browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}

		// proxy: "http://localhost/"
	});

	gulp
		.watch(config.paths.scss.src2, ['css'])
		.on('change', browserSync.reload);
	gulp
		.watch(config.paths.scripts.src, ['webpack'])
		.on('change', browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);
});
