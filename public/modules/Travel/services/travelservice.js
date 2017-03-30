(function () {
    angular.module('app.travel')
        .servicefactory('travelService', travelServiceFactory)
    travelServiceFactory.$inject = ['$http']
    function travelService($http){
        return{
            getTravels
        }

        function getTravels(){
           return $http.get('/api/travel')
           .then(xhrSuccess)
           .catch(onError)   
        }
    }
})()