/**
 * Created by shem on 2016/6/3.
 */

'use strict';
module.exports = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                'wg-content': {
                    templateUrl: './module/login/login.html',
                    controller: 'loginController',
                    controllerAs: 'vm'
                }
            },
            data: {title: 'Login'}
        })
        .state('root', {
            url: '',
            abstract: true,
            views: {
                'wg-header': {
                    templateUrl: './module/layout/header.html',
                    controller: 'headerController'
                },
                'wg-content': {
                    template: '<ui-view></ui-view>'
                },
                'wg-footer': {
                    templateUrl: './module/layout/footer.html',
                    controller: 'footerController'
                }
            }
        })
        .state('root.contacts', {
            url: '/contacts',
            abstract: true,
            templateUrl: './module/contacts/contacts.html',
            data: {title: 'Contact'},
            controller: 'contactsController',
            controllerAs: 'vm'
        })
        .state('root.contacts.list', {
            url: '/list',
            templateUrl: './module/contacts/contacts-list.html',
            data: {title: 'Contact-List'},
            controller: 'contactsListController',
            controllerAs: 'vm'
        })
        .state('root.contacts.add', {
            url: '/add',
            templateUrl: './module/contacts/contacts-add.html',
            data: {title: 'Contact-Add'},
            controller: 'contactsAddController',
            controllerAs: 'vm'
        });
}];