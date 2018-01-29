// package vars
const pkg = require('./package.json');
const config = require('./gulp/config.js');
const gulp = require('gulp');
const requireDir = require('require-dir');
const moment = require('moment');
const gitRevSync = require('git-rev-sync');
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
});

// Production build
gulp.task('build', ['css', 'webpack', 'imagemin']);
