/**
 * Created by 05754475322 on 20/09/16.
 */

angular.module('joynWeb')
    .controller('EventCtrl', function ($scope, eventService) {
        $scope.Event = {
            name: "",
            description: ""
        },
        $scope.addEvent = function (event) {
            eventService.addEvent(event);
            $scope.seeEvents();
        },

        $scope.seeEvents = function () {
            eventService.seeEvents().then(
                function (res) {
                    $scope.events = res.data;
                    console.log(res.data);
                }
            );
        },

        $scope.deleteEvent = function (id) {
            eventService.deleteEvent(id);
            $scope.seeEvents();
        }
    });