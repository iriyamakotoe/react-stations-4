const path = require('path')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'server/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js',
	},
	module: {
		rules: [
			// .jsまたは.jsxファイルをBabelでトランスパイルする
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	target: ['node', 'es6'],
}
