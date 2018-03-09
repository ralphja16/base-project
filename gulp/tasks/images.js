const gulp = require('gulp');
const config = require('../config.js');
const imagemin = require('gulp-imagemin');

// imagemin task
gulp.task('imagemin', () => {
	return gulp
		.src(config.paths.images.src)
		.pipe(
			imagemin({
				progressive: true,
				interlaced: true,
				optimizationLevel: 7,
				svgoPlugins: [{ removeViewBox: false }],
				verbose: true,
				use: []
			})
		)
		.pipe(gulp.dest(config.paths.images.dest));
});
