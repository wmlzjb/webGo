/**
 * Created by shem on 2016/6/2.
 */

(function () {
    'use strict';
    angular.module('wg.app').controller('loginController', loginClr);
    loginClr.$inject = ['$state'];

    function loginClr($state) {
        var vm = this;
        vm.title = 'Login';
        vm.name = 'shem.wang';
        vm.loginFun=function () {
            $state.go('root.contacts.list');
        }
    }
}());