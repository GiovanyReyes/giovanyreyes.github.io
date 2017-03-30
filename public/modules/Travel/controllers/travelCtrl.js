(function () {
    'use strict'
    angular.module('app.travel')
        .controller('travelController', travelController)
    travelController.$inject = ['travelService']

    function travelController(travelService) {
        var vm = this
    }
})()