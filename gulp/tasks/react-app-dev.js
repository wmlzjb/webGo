const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../../react-app/webpack-dev-server.config.js");

gulp.task("react-app-dev-server", function(callback) {
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
    // var compiler = webpack(myConfig);
    // new WebpackDevServer(compiler).listen(2995, "localhost", function(err) {
    //     if (err) throw new gutil.PluginError("webpack-dev-server", err);
    //     gutil.log("[webpack-dev-server]", "http://localhost:2995/");
    //     // keep the server alive or continue?
    //     // callback();
    // });
});