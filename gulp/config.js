module.exports = {
	name: 'base',
	description: 'base FE framework',
	author: 'Ralph Janssen',
	site_url: 'http://ralphjanssen.com',
	version: 1.0,
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
			src: ['./src/assets/img/*.{png,gif,jpg,jpeg,svg}'],
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
		},
		fonts: {
			src: './src/assets/fonts/**/*',
			dest: './public/fonts'
		}
	},
	globs: {
		siteIcon: './public/img/site/favicon.*',
		init: ''
	}
};
