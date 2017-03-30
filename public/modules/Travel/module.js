/*global angular*/

(function () {
    'use strict'
    angular.module('app.travel', ['ui.router'])
        .config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('app.travel', {
                url: '/travel',
                data: {
                    title: 'travel'
                },
                views: {
                    'content@app': {
                        controller: 'travelController as travelCtrl',
                        views: '/public/modules/home/views/travel.html'
                    }
                }
            })
    }

})()