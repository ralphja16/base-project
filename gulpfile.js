var gulp            = require('gulp'),
    config          = require('./gulp/config.js'),
    requireDir      = require('require-dir');

// Pulling in all tasks from the tasks folder
requireDir('./gulp/tasks', { recurse: true });


//GULP WATCH TASK
gulp.task('watch', ['browser-sync'], function(){
	gulp.watch(config.paths.sass, ['sass']);
	gulp.watch(config.paths.tests, ['mocha']);
	gulp.watch(config.paths.scripts, ['scripts']);
});

//GULP SETUP TASK
gulp.task('setup', ['sass', 'scripts', 'vendors', 'images']);

//GULP BUILD TASK
gulp.task('build', ['watch', 'browser-sync']);

//DEFAULT GULP TASK
gulp.task('default', ['watch', 'browser-sync']);

//DEPLOY GULP TASK
gulp.task('deploy', ['sass_deploy', 'scripts_deploy', 'vendors', 'images']);
