module.exports = {
	browserSync: {
		url: 'http://localhost',
		path: './'
	},
	paths: {
		scss: {
			src2: [
				'./source/modules/**/scss/*.scss',
				'./source/objects/**/scss/*.scss',
				'./source/main.scss',
				'./source/**/*.scss'
			],
			src: './source/main.scss',
			dest: './public/library/css'
		},
		scripts: {
			src: ['./source/modules/**/js/*.js'],
			build: './build/js/',
			dest: './public/library/js'
		},
		vendors: {
			src: ['./public/library/js/vendors/jquery-3.1.1.min.js'],
			dest: './public/library/js'
		},
		images: ['./public/library/img/'],
		tests: [
			'./test/components/*.test.js',
			'./test/modules/*.test.js',
			'./test/objects/*.test.js'
		],
		templates: ['./source/templates/'],
		docs: {
			css: './docs/assets/css',
			js: './docs/assets/js'
		},
		favicons: {
			src: './public/library/img/favicons/logo.png',
			dest: './public/library/img/favicons/',
			path: './public/library/img/favicons/'
		}
	},
	globs: {
		siteIcon: './public/img/site/favicon.*'
	}
};
