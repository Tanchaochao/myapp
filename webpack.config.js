module.exports = {
	//配置需要打包的文件
	entry: {
		"demo01": "./public/es6/demo01.js"
	},

	//配置打包之后的文件信息
	output: {
		path: __dirname + "/public/dist",
		filename: "[name].js",
		chunkFilename: "[name].js"
	},
	//配置source-map
	devtool: "source-map",

	//配置loader
	module: {
		loaders: [
			//配置哪些文件需要通过babel来进行转换
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			//如果以.css结尾的文件使用style和css loader来进行处理
			{
				test: /\.css$/,
				loader: "style!css"
			}
		]
	}
};