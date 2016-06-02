/**
 * Created by shem on 2016/6/1.
 */
var requireDir = require('require-dir');
requireDir('./tasks');

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function () {
    gulp.run('one-app-dev');
});