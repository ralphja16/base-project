const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		preload: './src/components/modules/index.js'
	},
	output: {
		path: path.join(__dirname, 'public/js'),
		publicPath: '../dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js'
	},
	plugins: [new UglifyJSPlugin()]
};
