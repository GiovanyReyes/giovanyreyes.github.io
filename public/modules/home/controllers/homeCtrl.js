/* global angular */
(function () {
    'use strict'
    angular.module('public.home')
        .controller('homeController', homeController)
    homeController.$inject = ['homeService', '$scope', '$location', '$anchorScroll']

    function homeController(homeService, $scope, $location, $anchorScroll) {
        var vm = this
        vm.goToAnchor = goToAnchor

        function goToAnchor() {
            $location.hash('bottom')
            $anchorScroll()
        }

    }


})()