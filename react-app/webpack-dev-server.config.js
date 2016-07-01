const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    devtool: 'eval',
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/src/app/index.jsx'),
    ],
    output: {
        path: buildPath,
        filename: 'app.js',
    },
    // Server Configuration options
    devServer: {
        contentBase: path.resolve(__dirname, 'src/www'), // Relative directory for base of server
        devtool: 'eval',
        hot: true, // Live-reload
        inline: true,
        port: 2995, // Port Number
        host: 'localhost',
    },
    plugins: [
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),
        // Moves files
        new TransferWebpackPlugin([
            { from: 'www' },
        ], path.resolve(__dirname, 'src')),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin("app.css")
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!autoprefixer?{browsers:["last 2 version", "safari 5", "ie 9", "opera 12.1", "ios 6", "android 4"]}!' + 'sass?sourceMap')
            },
            {
                // React-hot loader and
                test: /\.jsx?$/, // All .js files
                loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath],
            },
        ]
    }
};

module.exports = config;
