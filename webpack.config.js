// Generated using webpack-cli https://github.com/webpack/webpack-cli
import path from 'path'
import {fileURLToPath} from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import nodeExternals from 'webpack-node-externals'

import process from 'process'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = 'style-loader'

const config = {
	entry: './server/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		open: true,
		host: 'localhost',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				// 最初はbabelの配置になる。順番変更不可
				test: /\.tsx$/i,
				loader: 'babel-loader',
				options: {presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']},
			},
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				exclude: ['/node_modules/'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
		alias: {
			zlib: 'browserify-zlib',
			querystring: 'querystring-es3',
			path: 'path-browserify',
			crypto: 'crypto-browserify',
			stream: 'stream-browserify',
			http: 'stream-http',
			url: 'url',
			util: 'util',
			assert: 'assert',
			process: 'process/browser',
			fs: false,
			net: false,
			async_hooks: false,
			vm: false,
		},
	},
	target: 'node',
	externals: [nodeExternals()],
}

export default () => {
	if (isProduction) {
		config.mode = 'production'
	} else {
		config.mode = 'development'
	}
	return config
}
