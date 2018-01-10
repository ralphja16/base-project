module.exports = {
	browserSync: {
		url: "http://localhost",
		path: "./"
	},
	paths: {
		scss: {
			src2: [
				"./src/modules/**/scss/*.scss",
				"./src/objects/**/scss/*.scss",
				"./src/main.scss",
				"./src/**/*.scss"
			],
			src: "./src/main.scss",
			dest: "./public/css"
		},
		scripts: {
			src: ["./src/modules/**/js/*.js"],
			dest: "./public/js"
		},
		vendors: {
			src: ["./src/assets/js/jquery-3.1.1.min.js"],
			dest: "./public/js"
		},
		images: ["./public/img/"],
		tests: ["./test/modules/*.test.js", "./test/objects/*.test.js"],
		templates: ["./src/templates/"],
		favicons: {
			src: "./src/assets/favicons/logo.png",
			dest: "./public/img/favicons/",
			path: "./public/img/favicons/"
		}
	},
	globs: {
		siteIcon: "./public/img/site/favicon.*"
	}
};
