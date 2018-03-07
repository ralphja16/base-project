const gulp = require('gulp');
const config = require('../config.js');
const onError = require('../errorHandler');
const pkg = require('../../package.json');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
// const jshint = require('gulp-jshint');
// const stylish = require('jshint-stylish');
const uglify = require('gulp-uglify');
const header = require('gulp-header');
const gitRevSync = require('git-rev-sync');
const moment = require('moment');
const size = require('gulp-size');

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

gulp.task('jquery-scripts', function() {
	gulp
		.src(config.paths.scripts.src)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(sourcemaps.init({ loadMaps: true }))
		// .pipe(jshint())
		// .pipe(jshint.reporter(stylish))
		.pipe(concat('preload.bundle.js'))
		.pipe(uglify())
		.pipe(plumber.stop())
		.pipe(header(banner, { pkg: pkg }))
		.pipe(sourcemaps.write('./maps'))
		.pipe(size({ gzip: true, showFiles: true }))
		.pipe(gulp.dest(config.paths.scripts.dest));
});
