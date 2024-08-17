const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, 'server/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js',
	},
	module: {
		rules: [
			// .jsまたは.jsxファイルをBabelでトランスパイルする
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	// resolve: {
	// 	extensions: ['.ts', '.tsx', '.js', '.jsx'],
	// },
	target: ['node', 'es6'],
}
