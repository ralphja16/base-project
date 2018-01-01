// package vars
const pkg = require('./package.json');
const config = require('./gulp/config.js');
const gulp = require('gulp');
const requireDir = require('require-dir');

// load all plugins in 'devDependencies' into the variable $
const $ = require('gulp-load-plugins')({
	pattern: ['*'],
	scope: ['devDependencies']
});

// // Pulling in all tasks from the tasks folder
requireDir('./gulp/tasks', { recurse: true });

//GULP WATCH TASK
// gulp.task('watch', ['browser-sync'], function() {
// 	gulp.watch(config.paths.sass.src2, ['sass']);
// 	gulp.watch(config.paths.tests, ['mocha']);
// 	gulp.watch(config.paths.scripts.src, ['scripts']);
// 	gulp
// 		.watch(config.paths.svgIcons.src, ['sprite'])
// 		.on('change', function(evt) {
// 			changeEvent(evt);
// 		});
// });

// //GULP SETUP TASK
// gulp.task('setup', ['sass', 'scripts', 'vendors', 'images']);

// //GULP BUILD TASK
// gulp.task('build', ['watch', 'browser-sync']);

// //DEFAULT GULP TASK
// gulp.task('default', ['watch', 'browser-sync']);

// //DEPLOY GULP TASK
// gulp.task('deploy', ['sass_deploy', 'scripts_deploy', 'vendors', 'images']);
