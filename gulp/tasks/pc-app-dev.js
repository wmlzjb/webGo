/**
 * Created by shem on 2016/6/1.
 */
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("../../pc-app/webpack.config.js");

gulp.task("pc-app-dev", function (callback) {
    var myConfig = Object.create(webpackConfig);
    webpack(
        myConfig
        , function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            //callback();
        });
});

gulp.task("pc-app-dev-server", function(callback) {
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = 'eval';
    myConfig.debug = true;
    var compiler = webpack(myConfig);
    new WebpackDevServer(compiler, {
        contentBase:'./pc-app/src/',
        inline:true
    }).listen(2995, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:2995/");
        // keep the server alive or continue?
        // callback();
    });
});