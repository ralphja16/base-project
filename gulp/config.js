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
		svgIcons: {
			src: './public/library/icons/*',
			temp: './source/templates/sprite-templates.scss',
			svg: './public/library/img/sprite.svg',
			dest: './source/base/_svg-sprite.scss'
		},
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
		distJs: [
			'./build/js/**/js/*.js'
			// './node_modules/lazysizes/lazysizes.min.js',
			// './node_modules/lazysizes/plugins/bgset/ls.bgset.min.js',
			// './node_modules/picturefill/dist/picturefill.min.js',
			// './node_modules/vue/dist/vue.min.js',
			// './node_modules/vue2-autocomplete/dist/vue2-autocomplete.js',
			// './node_modules/vue-resource/dist/vue-resource.min.js'
		],
		babelJs: ['./source/modules/**/js/*.js'],
		siteIcon: './public/img/site/favicon.*'
	}
};
