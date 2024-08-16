// Generated using webpack-cli https://github.com/webpack/webpack-cli
import process from 'process'
import path from 'path'
import nodeExternals from 'webpack-node-externals'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = 'style-loader'

const config = {
	entry: './server/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js',
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		open: true,
		host: 'localhost',
	},
	plugins: [
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			// {
			// 	// 最初はbabelの配置になる。順番変更不可
			// 	test: /\.(js|jsx)$/i,
			// 	loader: 'babel-loader',
			// 	options: {presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']},
			// },
			{
				test: /\.jsx?$/, // 拡張子がjsxで
				exclude: /node_modules/, // node_modulesフォルダ配下でなければ
				loader: 'babel', // babel-loaderを使って変換する
				query: {
					plugins: ['transform-react-jsx'], // babelのtransform-react-jsxプラグインを使ってjsxを変換
				},
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
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp)$/i,
				type: 'asset',
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
	target: ['node', 'es6'],
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
