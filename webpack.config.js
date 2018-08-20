const path = require('path')
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: __dirname + '/dist'
	},
	modules: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				option: {
					'presets': ['latest']
				},
                exclude: path.resolve(__dirname,"./node_modules"),
                include: path.resolve(__dirname, "./src"),
			}
		]
	}
}