/**
 * Created by 05754475322 on 20/09/16.
 */

angular.module('joynWeb')
    .constant('apiUrl', 'https://joynapp.herokuapp.com/api')

    .service('eventService', function ($http, apiUrl) {
        this.addEvent = function (event) {
          return $http.post(apiUrl +'/event', event);
        };
        
        this.seeEvents = function () {
            return $http.get(apiUrl + '/events');
        };

        var eventId;

        this.deleteEvent = function (id) {
            return $http.delete(apiUrl + '/event/' + id);
        },

        this.codesEvent = function (id) {
            console.log("QRCODE");
            $http.codesEvent(apiUrl + '/qrcodes/' + id)
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
        },
            
        this.saveId = function (idEvent) {
            eventId = idEvent;
        };

        this.getId = function(){
            return eventId;
        };
        
        this.getEventById = function (idEvent) {
            return $http.get(apiUrl + '/events/' +idEvent);
        }

    });
