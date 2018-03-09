// package vars
const pkg = require('./package.json');
const config = require('./gulp/config.js');
const gulp = require('gulp');
const requireDir = require('require-dir');
const moment = require('moment');
const gitRevSync = require('git-rev-sync');
const gulpSequence = require('gulp-sequence');
// // Pulling in all tasks from the tasks folder
requireDir('./gulp/tasks', { recurse: true });

const banner = [
	'/**',
	' * @project        <%= pkg.name %>',
	' * @author         <%= pkg.author %>',
	' * @build          ' + moment().format('llll') + ' ET',
	' * @release        ' +
		gitRevSync.long() +
		' [' +
		gitRevSync.branch() +
		']',
	' * @copyright      Copyright (c) ' +
		moment().format('YYYY') +
		', <%= pkg.copyright %>',
	' *',
	' */',
	''
].join('\n');

// Default task
gulp.task('default', ['browser-sync'], () => {
	gulp.watch([config.paths.scss.src + '**/*.scss'], ['css']);
	gulp.watch([config.paths.scss.dest + '**/*.css'], ['css']);
	gulp.watch([config.paths.scripts.src + '**/*.js'], ['webpack']);
	gulp.watch([config.paths.html.src], ['parse-html']);
	gulp.watch([config.paths.images.src], ['imagemin']);
	gulp.watch([config.paths.vendors.src], ['vendors']);
});

gulp.task(
	'dev',
	gulpSequence(
		['clean', 'clear-image-cache'],
		'html-render',
		'vendors',
		'fonts',
		'default'
	)
);

// Production build
gulp.task(
	'build',
	gulpSequence(
		['clean', 'clear-image-cache'],
		'fonts',
		'css',
		'webpack',
		'imagemin',
		'vendors'
	)
);
