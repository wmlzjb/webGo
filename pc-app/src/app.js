/**
 * Created by shem on 2016/6/1.
 */

require('angular');
require('angular-ui-router');
require('bootstrap/dist/css/bootstrap.css');

require('./module/wg.app');

(function () {
    'use strict';
    var myApp = angular.module('myApp', ['ui.router', 'wg.app']);

    myApp.config(require('./app.router'));

    myApp.run(['$rootScope', function ($rootScope) {
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            $rootScope.pageTitle = toState.data.title;
        });
    }]);
}());