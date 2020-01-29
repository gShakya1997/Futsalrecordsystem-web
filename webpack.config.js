var webpack = require("webpack");
var path = require("path");

module.exports = {
    devtool: "inline-source-map",
    entry: {
        "index": "./src/index.js"
    }, output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js"
    }, module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test:/\.css$/,
                // exclude:/node_modules/,
                use:["style-loader","css-loader"]
            }
        ]
    }, devServer: {
        contentBase: path.join(__dirname, "/public"),
        port: 3007,
        publicPath: "http://localhost:3007/dist",
        historyApiFallback: true
    }
}