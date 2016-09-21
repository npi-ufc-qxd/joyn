/**
 * Created by 05754475322 on 20/09/16.
 */

angular.module('joynWeb')
    .constant('apiUrl', 'http://localhost:8080/api')

    .service('eventService', function ($http, apiUrl) {
        this.addEvent = function (event) {
          $http.post(apiUrl +'/event', event)
              .then(
                  function (res) {
                      console.log("Evento cadastrado");
                  }, function (err) {
                      console.log("Ops! Algo deu errado.");
                  }
              );
        };
        
        this.seeEvents = function () {
            return $http.get(apiUrl + '/events');
        };

        this.deleteEvent = function (id) {
            $http.delete(apiUrl + '/event/' + id)
                .then(
                    function (res) {
                        console.log("ok");
                    }, function (err) {
                        console.log("Ops! Algo deu errado.");
                    }
                );
        };
    });
