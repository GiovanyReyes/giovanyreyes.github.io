/* global angular */
(function(){
'use strict'
    angular.module('public.home')
    .controller('homeController', homeController)
    homeController.$inject=['homeService']
    function homeController(homeService){
        var vm = this

        
    }
})()