const gulp = require('gulp');
const config = require('../config.js');
const fancyLog = require('fancy-log');
const plumber = require('gulp-plumber');
const size = require('gulp-size');
const filter = require('gulp-filter');
const gulpif = require('gulp-if');
const livereload = require('gulp-livereload');
const newer = require('gulp-newer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('babel-core');

const onError = err => {
	console.log(err);
};

// const banner = [
//     "/**",
//     " * @project        <%= pkg.name %>",
//     " * @author         <%= pkg.author %>",
//     " * @build          " + moment().format("llll") + " ET",
//     " * @release        " + gitRevSync.long() + " [" + $.gitRevSync.branch() + "]",
//     " * @copyright      Copyright (c) " + moment().format("YYYY") + ", <%= pkg.copyright %>",
//     " *",
//     " */",
//     ""
// ].join("\n");

// js task - minimize any distribution Javascript into the public js folder, and add our banner to it
gulp.task('vendors', () => {
	fancyLog('-> Building js');
	return (
		gulp
			.src(config.paths.vendors.src)
			.pipe(plumber({ errorHandler: onError }))
			// .pipe(gulpif(["*.js", "!*.min.js"],
			//     newer({dest: config.paths.vendors.dest, ext: ".min.js"}),
			//     newer({dest: config.paths.vendors.dest.js})
			// ))
			.pipe(gulpif(['*.js', '!*.min.js'], uglify()))
			.pipe(gulpif(['*.js', '!*.min.js'], rename({ suffix: '.min' })))
			// .pipe($.header(banner, {pkg: pkg}))
			.pipe(size({ gzip: true, showFiles: true }))
			.pipe(gulp.dest(config.paths.vendors.dest))
			.pipe(filter('**/*.js'))
			.pipe(livereload())
	);
});
