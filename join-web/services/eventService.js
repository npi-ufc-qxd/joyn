/**
 * Created by 05754475322 on 20/09/16.
 */

angular.module('joynWeb')
    .constant('apiUrl', 'http://localhost:8080/api')

    .service('eventService', function ($http, apiUrl, $log) {
        this.addEvent = function (event) {
          return $http.post(apiUrl +'/event', event);
        };
        
        this.seeEvents = function () {
            return $http.get(apiUrl + '/events');
        };

        this.deleteEvent = function (id) {
            $http.delete(apiUrl + '/event/' + id)
                .then(
                    function (res) {
                        console.log("Deu certo");
                        return true;
                    }, function (err) {
                        console.log("Ops! Algo deu errado.");
                    }
                );
        },

        this.updateEvent = function (id) {
            $http.put(apiUrl + '/event/' + id)
                .then(
                    function (res) {
                        console.log("Deu certo");
                        return true;
                    }, function (err) {
                        console.log("Ops! Algo deu errado.");
                    }
                );
        }
    });
