/**
 * Created by shem on 2016/6/1.
 */
var path = require("path");
module.exports = {
    devtool: 'source-map',
    entry: __dirname + '/src/app.js',
    output: {
        path: path.resolve(__dirname, "src/bundle"),
        filename: 'app.js'
    },
    module: {
        //各种加载器，即让各种文件格式可用require引用
        loaders: [
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.woff|\.woff2|\.svg|.eot|\.ttf/, loader: 'url?prefix=font/&limit=10000'},
            {test: /\.html$/, loader: 'file?name=html-[hash:6].html'},
            {test: /\.(png|jpg|ttf)$/, loader: 'url?limit=8192'}
            // { test: /\.less$/, loader: "style-loader!css-loader!less-loader"}
        ]
    }
};