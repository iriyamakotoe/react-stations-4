const path = require('path')
const stylesHandler = 'style-loader'

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'server/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js',
	},
	module: {
		rules: [
			{
				// 最初はbabelの配置になる。順番変更不可
				test: /\.(js|tsx)$/i,
				loader: 'babel-loader',
				options: {presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']},
				exclude: ['/node_modules/'],
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
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
	target: ['node', 'es6'],
}
