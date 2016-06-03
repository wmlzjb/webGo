/**
 * Created by shem on 2016/6/3.
 */

'use strict';
module.exports = ['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './module/login/login.html',
            controller: 'loginController',
            controllerAs: 'vm'
        });
    // .state('state1.list', {
    //     url: "/list",
    //     templateUrl: "partials/state1.list.html",
    //     controller: function($scope) {
    //         $scope.items = ["A", "List", "Of", "Items"];
    //     }
    // })
    // .state('state2', {
    //     url: "/state2",
    //     templateUrl: "partials/state2.html"
    // })
    // .state('state2.list', {
    //     url: "/list",
    //     templateUrl: "partials/state2.list.html",
    //     controller: function($scope) {
    //         $scope.things = ["A", "Set", "Of", "Things"];
    //     }
    // });
}];