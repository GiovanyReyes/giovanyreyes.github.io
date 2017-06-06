/* global angular */

(function () {
    'use strict'
    angular.module('public.contact')
        .controller('contactController', contactController)
    contactController.$inject = ['contactService']

    function contactController(contactService) {
        var vm = this
        vm.email = {}

        vm.sendEmail = sendEmail

        function sendEmail() {
            contactService.postEmail(vm.email, onEmailSuccess, onError)
        }

        function onEmailSuccess(data) {
            console.log(data._id)
            console.log('Email Sent')
        }

        function onError(err) {
            console.log(err)
        }
    }


})()