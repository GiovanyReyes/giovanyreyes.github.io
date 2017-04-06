/* global angular */

(function (){
    'use strict'
    angular.module('public.contact')
    .controller('contactController', contactController)
    contactController.$inject=['contactService']
    function contactController(contactService){
        var vm = this

        vm.postEmail = _postEmail

        function _postEmail(){
            contactService.postEmail(data, onEmailSuccess, onError)
        }

        function onEmailSuccess(data){
            console.log('Email Sent')
        }

        function onError(err){
            console.log(err)
        }
    }


})()