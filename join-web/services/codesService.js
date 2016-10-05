
angular.module('joynWeb')
    .constant('apiUrl', 'http://localhost:8080/api')

    .service('codeService', function ($http, apiUrl, $log) {
        this.addCode = function (code) {
            return $http.post(apiUrl + '/codes', code);
        },

        this.gerarCode = function (code) {
            return $http.get(apiUrl + '/qrcode/' + code.name);
        },

        this.deleteCode = function (idEvent, idCode) {
            return $http.delete(apiUrl + '/event/'+ idEvent +'/code/'+ idCode);

        },

        this.pushCode = function(code, eventId){
            return $http.get(apiUrl+'/event/'+eventId+'/code/'+code);
        },

        this.seeCodeByEvent = function (idEvent) {
            return $http.get(apiUrl + '/events/' +idEvent);
        }
    });

