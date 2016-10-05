/**
 * Created by 05754475322 on 20/09/16.
 */

angular.module('joynWeb')
    .controller('EventCtrl', function ($scope, $location, eventService, $log,$routeParams,codeService) {
        $scope.Event = {
            name: "",
            description: "",
            sigla: ""
        };
        var eventId = $routeParams.id;


            $scope.seeEvents = function () {
                eventService.seeEvents().then(
                    function (res) {
                        $scope.events = res.data;
                    },
                    function (error) {
                        console.log("erro")
                    }
                );
            },
            $scope.addEvent = function (event) {
                eventService.addEvent(event).then(
                    function (res) {
                        $log.info(res);
                        $location.path("/seeEvents");
                    },
                    function (error) {
                        $log.error(error);
                    });

            },
            $scope.deleteEvent = function (id) {
                var statusDeleted = eventService.deleteEvent(id);
                if (statusDeleted) {
                    seeEvents();
                }

            },
            $scope.saveId = function (id) {
                eventService.saveId(id);
                console.log(eventService.getId());
            },

            $scope.seeCodeByEvent = function () {
                codeService.seeCodeByEvent(eventId).then(
                    function (res) {
                        $log.info(res);
                        // $scope.event =
                        $scope.codes = res.data.codes;
                    },
                    function (error) {
                        console.log("erro")
                    }
                );

            }
    });