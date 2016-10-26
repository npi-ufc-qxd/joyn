
angular.module('joynWeb')
    .constant('apiUrl', 'https://joynapp.herokuapp.com/api')

    .service('codeService', function ($http, apiUrl) {
        this.addCode = function (code) {
            return $http.post(apiUrl + '/codes', code);
        };

        this.gerarCode = function (code) {
            return $http.get(apiUrl + '/qrcode/' + code.name);
        };

        this.deleteCode = function (idEvent, idCode) {
            return $http.delete(apiUrl + '/event/'+ idEvent +'/code/'+ idCode);

        };

        this.pushCode = function(code, eventId){
            return $http.get(apiUrl+'/event/'+eventId+'/code/'+code);
        };

        this.seeCodeByEvent = function (idEvent) {
            return $http.get(apiUrl + '/events/' +idEvent);
        };

        this.getUsers = function () {
            return $http.get(apiUrl + '/users');
        }
    });

