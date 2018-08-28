var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack'); // 新增

module.exports = {
    mode: 'development',
    entry: {
        'index': [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true',
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            root: path.resolve('./src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.NamedModulesPlugin(), // 新增
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(), //新增
        new webpack.NoEmitOnErrorsPlugin()
    ]
};