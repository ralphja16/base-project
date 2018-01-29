module.exports = {
	browserSync: {
		url: 'http://localhost',
		path: './public'
	},
	paths: {
		scss: {
			src2: [
				'./src/components/**/**/scss/*.scss',
				'./src/index.scss',
				'./src/**/*.scss'
			],
			src: './src/index.scss',
			dest: './public/css'
		},
		scripts: {
			src: ['./src/components/**/**/js/*.js'],
			dest: './public/js'
		},
		vendors: {
			src: ['./src/assets/js/jquery-3.1.1.min.js'],
			dest: './public/js'
		},
		images: {
			src: ['./src/assets/img/'],
			dest: './public/img/'
		},
		tests: ['./src/components/**/**/js/*.test.js'],
		html: {
			src: ['./src/views/*.html'],
			dest: './public/views'
		},
		templates: ['./src/templates/'],
		favicons: {
			src: './src/assets/favicons/logo.png',
			dest: './public/img/favicons/',
			path: './public/img/favicons/'
		}
	},
	globs: {
		siteIcon: './public/img/site/favicon.*',
		cleaning: [
			'./public/img/',
			'./public/css/',
			'./public/views/',
			'./public/js/preload.bundle.js'
		]
	}
};
