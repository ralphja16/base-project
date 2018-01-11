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
});
