var gulp            = require('gulp'),
    config          = require('../config.js');

var $ = {
	gutil: require('gulp-util'),
	svgSprite: require('gulp-svg-sprite'),
	svg2png: require('gulp-svg2png'),
	size: require('gulp-size'),
}


gulp.task('svgSprite', function () {
	return gulp.src(config.paths.svgIcons.src)
		.pipe($.svgSprite({
			shape: {
				spacing: {
					padding: 5
				}
			},
			mode: {
				css: {
					dest: "../../../",
					layout: "diagonal",
					sprite: config.paths.svgIcons.svg,
					bust: false,
					render: {
						scss: {
							dest: config.paths.svgIcons.dest,
							template: config.paths.svgIcons.temp
						}
					}
				}
			},
			variables: {
				mapname: "icons"
			}
		}))
		.pipe(gulp.dest(config.paths.svgIcons.svg));
});

gulp.task('pngSprite', ['svgSprite'], function() {
	return gulp.src( config.paths.svgIcons.svg)
		.pipe($.svg2png())
		.pipe($.size({
			showFiles: true
		}))
		.pipe(gulp.dest(config.paths.images.dest));
});

gulp.task('sprite', ['pngSprite']);