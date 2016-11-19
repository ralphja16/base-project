var gulp            = require('gulp'),
    config          = require('../config.js'),
    iconfont		= require('gulp-iconfont'),
	iconfontCss		= require('gulp-iconfont-css');

var fontName 		= 'xxx-icons';
var runTimestamp 	= Math.round(Date.now()/1000);

gulp.task('iconfont', function(){
	gulp.src(['./public/library/icons/*.svg'])
	.pipe(iconfontCss({
  		fontName: fontName,
		path: paths.templates + '_icons.scss',
		targetPath: '../../../../source/base/fonts/_icons.scss',
		fontPath: '../fonts/icons/'
	}))
    .pipe(iconfont({
    	fontName: fontName, // Name of the font
		appendUnicode: true, // recommended option
		formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'], // default, 'woff2' and 'svg' are available
		timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
    .pipe(gulp.dest('./public/library/fonts/icons/'));
});
