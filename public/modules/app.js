/* global angular */

(function (){
    'use strict'
    angular.module('public',[
        'ui.router',
        'ui.bootstrap',
        'public.layout',
        'public.home',
        'public.contact'
    ])

    .config(RouteConfig)
    .run(function($rootScope){
        $rootScope.$on('$stateChangeError', console.log.bind(console))
    })

// whats this all doing 
    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider){
        $urlRouterProvider.otherwise('/home')
        $locationProvider.html5Mode(true)
    }
})()