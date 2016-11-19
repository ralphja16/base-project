var gulp            = require('gulp'),
    config          = require('../config.js'),
    sourcemaps      = require('gulp-sourcemaps'),
    babel           = require('gulp-babel'),
    plumber         = require('gulp-plumber'),
    concat          = require('gulp-concat'),
    eslint          = require('gulp-eslint');

gulp.task('js_deploy', function(){
	gulp.src(config.paths.js)
		// Initialize Sourcemaps
		.pipe(sourcemaps.init())
		// Babel compiling
		.pipe(babel({
            presets: ['es2015']
        }))
		// Check for errors
		.pipe(plumber())
        // // Check on syntax errors
        // .pipe(jshint())
        // .pipe(jshint.reporter(stylish))
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        //    .pipe(eslint.failAfterError())
		// Concatenate all JS files into one
		.pipe(concat('main.min.js'))
		// Minify JS
		.pipe(uglify())
		//Stop plumber errors
		.pipe(plumber.stop())
		// will write the source maps to ./Library/scripts/maps
		.pipe(sourcemaps.write('./maps'))
		// Where to store the finalized JS
		.pipe(gulp.dest('./public/library/js'));
});
