/**
 * Created by 05754475322 on 20/09/16.
 */

angular.module('joynWeb', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: './views/home.html'
                    }
                }
            })
            .state('app.addEvent', {
                url: 'addEvent',
                views: {
                    'content@': {
                        templateUrl: './views/addEvent.html',
                        controller: 'EventCtrl'
                    }
                }
            })

            .state('app.seeEvents', {
                url: 'seeEvents',
                views: {
                    'content@': {
                        templateUrl: './views/seeEvents.html',
                        controller: 'EventCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    });