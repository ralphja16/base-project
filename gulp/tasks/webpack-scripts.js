const webpackConfig = require('../../webpack.config');
const webpack = require('webpack');
const gutil = require('gulp-util');
const gulp = require('gulp');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('../config.js');

gulp.task('webpack', function(callback) {
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = [new webpack.optimize.UglifyJsPlugin()];

	// run webpack
	webpack(myConfig, function(err, stats) {
		if (err) throw new gutil.PluginError('webpack', err);
		gutil.log(
			'[webpack]',
			stats.toString({
				colors: true,
				progress: true
			})
		);
		callback();
	});
});
