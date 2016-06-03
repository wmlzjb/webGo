/**
 * Created by shem on 2016/6/1.
 */
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    devtool: 'source-map',
    watch: true,
    entry: __dirname + '/src/app.js',
    output: {
        path: path.resolve(__dirname, "src/bundle"),
        filename: 'app.js'
    },
    module: {
        //各种加载器，即让各种文件格式可用require引用
        loaders: [
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!' + 'sass?sourceMap')},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.woff|\.woff2|\.svg|.eot|\.ttf/, loader: 'url?prefix=font/&limit=10000'},
            {test: /\.html$/, loader: 'file?name=html-[hash:6].html'},
            {test: /\.(png|jpg|ttf)$/, loader: 'url?limit=8192'}
            // { test: /\.less$/, loader: "style-loader!css-loader!less-loader"}
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
};