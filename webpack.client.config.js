const path = require('path')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src/index.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'client.js',
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
	target: ['web', 'es6'],
}
