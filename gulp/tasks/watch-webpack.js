const gulp = require('gulp');
const config = require('../config.js');

gulp.watch([config.paths.scripts.src + '**/*.js'], ['webpack']);
