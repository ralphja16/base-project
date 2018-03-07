const gulp = require('gulp');
const config = require('../config.js');
const fancyLog = require('fancy-log');
const size = require('gulp-size');
const favicons = require('gulp-favicons');

//favicons-generate task
gulp.task('favicons-generate', () => {
	fancyLog('-> Generating favicons');
	return gulp
		.src(config.paths.favicons.src)
		.pipe(
			favicons({
				appName: config.name,
				appDescription: config.description,
				developerName: config.author,
				developerURL: 'https://ralphjanssen.com',
				background: '#FFFFFF',
				path: config.paths.favicons.path,
				url: config.site_url,
				display: 'standalone',
				orientation: 'portrait',
				version: config.version,
				logging: false,
				online: false,
				// html: config.paths.build.html + "favicons.html",
				html: config.paths.favicons.dest,
				replace: true,
				icons: {
					android: false, // Create Android homescreen icon. `boolean`
					appleIcon: true, // Create Apple touch icons. `boolean`
					appleStartup: false, // Create Apple startup images. `boolean`
					coast: true, // Create Opera Coast icon. `boolean`
					favicons: true, // Create regular favicons. `boolean`
					firefox: true, // Create Firefox OS icons. `boolean`
					opengraph: false, // Create Facebook OpenGraph image. `boolean`
					twitter: false, // Create Twitter Summary Card image. `boolean`
					windows: true, // Create Windows 8 tile icons. `boolean`
					yandex: true // Create Yandex browser icon. `boolean`
				}
			})
		)
		.pipe(gulp.dest(config.paths.favicons.dest));
});

//copy favicons task
gulp.task('favicons', ['favicons-generate'], () => {
	fancyLog('-> Copying favicon.ico');
	return gulp
		.src(config.paths.favicons.dest + 'favicon.*')
		.pipe(size({ gzip: true, showFiles: true }))
		.pipe(gulp.dest(config.paths.favicons.dest));
});
