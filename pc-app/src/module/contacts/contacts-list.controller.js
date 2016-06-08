/**
 * Created by shem on 2016/6/8.
 */
(function () {
    'use strict';
    angular.module('wg.app').controller('contactsListController', contactsListClr);
    //contactsListClr.$inject = [];

    function contactsListClr() {
        var vm = this;
        vm.name = 'shem';
    }
}());