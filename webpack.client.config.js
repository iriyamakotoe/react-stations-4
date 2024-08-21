const path = require('path');
const stylesHandler = 'style-loader'

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/main.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js',
  },
  module: {
    rules: [
      // .jsまたは.jsxファイルをBabelでトランスパイルする
      {
        test: /\.(js)$/,
				exclude: /node_modules/,
        use: ['babel-loader'],
      },
			{
				test: /\.(ts|tsx)$/i,
				exclude: /node_modules/,
        use: ['ts-loader'],
			},
      {
				test: /\.s[ac]ss$/i,
				use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, 'css-loader', 'postcss-loader'],
			},
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx','.js', '.jsx'],
  },
  target: ['web', 'es6'],
};