const gulp = require('gulp');
const config = require('../config.js');
const onError = require('../errorHandler');
const pkg = require('../../package.json');
const fancyLog = require('fancy-log');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cached = require('gulp-cached');
const autoprefixer = require('gulp-autoprefixer');
const size = require('gulp-size');
const print = require('gulp-print');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const newer = require('gulp-newer');
const moment = require('moment');
const gitRevSync = require('git-rev-sync');
const header = require('gulp-header');

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

// css task - combine & minimize any distribution CSS into the public css folder, and add our banner to it
gulp.task('css', ['scss'], () => {
	fancyLog('-> Building css');
	return (
		gulp
			.src(config.paths.scss.dest + '/main.css')
			.pipe(plumber({ errorHandler: onError }))
			.pipe(newer({ dest: config.paths.scss.dest + 'main.min.css' }))
			.pipe(print())
			.pipe(sourcemaps.init({ loadMaps: true }))
			// .pipe(concat(pkg.vars.siteCssName))
			.pipe(
				cssnano({
					discardComments: {
						removeAll: true
					},
					discardDuplicates: true,
					discardEmpty: true,
					minifyFontValues: true,
					minifySelectors: true
				})
			)
			.pipe(header(banner, { pkg: pkg }))
			.pipe(sourcemaps.write('./'))
			.pipe(size({ gzip: true, showFiles: true }))
			.pipe(gulp.dest(config.paths.scss.dest))
	);
});
