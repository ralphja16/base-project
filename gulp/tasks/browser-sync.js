const gulp = require('gulp');
const config = require('../config.js');
const browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: config.browserSync.path
		}

		// proxy: config.browserSync.url
	});

	gulp
		.watch(config.paths.scss.src2, ['css'])
		.on('change', browserSync.reload);
	gulp
		.watch(config.paths.scripts.src, ['webpack'])
		.on('change', browserSync.reload);
	gulp
		.watch([config.paths.html.src], ['html-render'])
		.on('change', browserSync.reload);
	gulp.watch(config.paths.html.src).on('change', browserSync.reload);
	gulp
		.watch([config.paths.images.src], ['imagemin'])
		.on('change', browserSync.reload);
	gulp
		.watch([config.paths.vendors.src], ['vendors'])
		.on('change', browserSync.reload);
});
