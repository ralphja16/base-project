module.exports = {

    paths: {
    	sass: [
    		'./source/modules/**/scss/*.scss',
    		'./source/objects/**/scss/*.scss',
    		'./source/main.scss',
    		'./source/**/*.scss'
    	],
    	scripts: [
    		'./source/components/**/js/*.js',
    		'./source/modules/**/js/*.js',
    		'./source/objects/**/js/*.js'
    	],
    	vendors: [
    		// './public/library/js/vendor/bootstrap.min.js',
    	],
    	images: [
    		'./public/library/img/*',
    	],
    	tests: [
    		'./test/components/*.test.js',
    		'./test/modules/*.test.js',
    		'./test/objects/*.test.js'
    	],
    	templates: [
    		'./source/templates/'
    	]
    }
};
