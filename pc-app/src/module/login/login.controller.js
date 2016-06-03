/**
 * Created by shem on 2016/6/2.
 */

(function () {
    'use strict';
    angular.module('wg.app').controller('loginController', loginClr);
    loginClr.$inject = ['$http'];

    function loginClr($http) {
        var vm = this;
        vm.title = 'Login';
        vm.name = 'shem';
    }
}());