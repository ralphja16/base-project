module.exports = {

    browserSync: {
        url: 'http://localhost',
        path: './',
    },
    paths: {
    	sass: {
            src2: [
        		'./source/modules/**/scss/*.scss',
        		'./source/objects/**/scss/*.scss',
        		'./source/main.scss',
        		'./source/**/*.scss'
        	],
            src: './source/main.scss',
            dest: './public/library/css',
        }
    	scripts: {
            src: [
        		'./source/components/**/js/*.js',
        		'./source/modules/**/js/*.js',
        		'./source/objects/**/js/*.js'
        	],
            dest:   './public/library/js',
        }
    	vendors: {
            src: [
                    './public/library/js/vendors/jquery-3.1.1.min.js',
                ],
            dest:   './public/library/js',
    		
        },
    	images: {
    		src: './public/library/img/*',
            dest: './public/library/img/',
        },
    	tests: [
    		'./test/components/*.test.js',
    		'./test/modules/*.test.js',
    		'./test/objects/*.test.js'
    	],
    	templates: [
    		'./source/templates/'
    	],
        svgIcons: {
            src: './public/library/icons/*',
            temp: './source/templates/sprite-templates.scss',
            svg: './public/library/img/sprite.svg',
            dest: './source/base/_svg-sprite.scss',
        },
        docs: {
            css: './docs/assets/css',
            js: './docs/assets/js',
        }
    }
};
