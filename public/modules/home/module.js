/* global angular */
(function () {
    'use strict'
    angular.module('public.home', ['ui.router'])
        .config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('app.home', {
                url: '/home',
                data: {
                    title: 'home'
                },
                views: {
                    'content@app': {
                        controller: 'homeController as homeCtrl',
                        templateUrl: '/public/modules/home/views/home.html'
                    }
                }
            })
            .state('app.contact',{
                url:'/contact',
                data:{
                    title:'contact'
                },
                views:{
                    'content@app':{
                        controller: 'homeController as homeCtrl',
                        templateUrl:'/public/modules/home/views/contact.html'
                    }
                }
            })
    }

})()