const webpack = require('webpack');
const ProvidePlugin = require('webpack').ProvidePlugin;
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssReporter = require('postcss-reporter');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
	filename: './css/main.css'
});

const scssProcessors = [postcssReporter({ clearReportedMessages: true })];

const config = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		app: './index.js'
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: './js/[name].bundle.js'
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			{
				test: /\.js$/,
				include: /src/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.scss$/,
				include: [path.resolve(__dirname, 'src')],
				use: extractPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: scssProcessors
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './img/',
							publicPath: './../../img/',
							useRelativePaths: true
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75
							}
						}
					}
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './fonts/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin(),
		new CleanWebpackPlugin(['public']),
		new FaviconsWebpackPlugin('./assets/favicons/logo.png'),
		new HtmlWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './views/index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'windows.jQuery': 'jquery'
		}),
		extractPlugin
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		compress: true,
		port: 12000,
		quiet: true,
		stats: 'errors-only',
		open: true
	},
	devtool: 'inline-source-map'
};
module.exports = config;
