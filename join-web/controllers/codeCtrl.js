/**
 * Created by 05754475322 on 03/10/16.
 */

angular.module('joynWeb')
    .controller('CodeCtrl', function ($scope, $location, codeService, $log, eventService, $routeParams, $route) {
        $scope.Code = {
            name: "",
            desc: "",
            score: 0
        };
        $scope.showUsers = false;
        var eventId = $routeParams.id;

        $scope.addCode = function (code) {
            codeService.addCode(code).then(
                function (res) {
                    $log.info(res);
                    console.log(res.data);
                    codeService.pushCode(res.data._id, eventId).then(
                        function (res) {
                            $log.info(res);
                            $scope.codes = res.data.codes;
                            $route.reload();
                        },
                        function (error) {
                            $log.error(error);
                            console.log("vacilao")
                        }
                    )
                    console.log("deu certo")
                },
                function (error) {
                    $log.error(error);
                    console.log("vacilao")
                });
        };

            $scope.deleteCode = function (id) {
                codeService.deleteCode(eventId, id).then(
                    function (res) {
                        $log.info(res)
                        $scope.codes = res.data.codes;
                        $route.reload();
                    },
                    function (error) {
                        console.log("erro")
                    }
                );

            };

            $scope.gerarCode = function (code) {
                codeService.gerarCode(code).then(
                    function (res) {
                        $log.info(res);
                        console.log("deu certo")
                    },
                    function (error) {
                        $log.error(error);
                        console.log("vacilao")
                    });
            };

            $scope.seeCodeByEvent = function () {
                codeService.seeCodeByEvent(eventId).then(
                    function (res) {
                        $log.info(res)
                        $scope.codes = res.data.codes;
                    },
                    function (error) {
                        console.log("erro")
                    }
                );

            };

            $scope.seeUsers = function () {
                codeService.getUsers().then(
                    function (res) {
                        $scope.users = res.data;
                        $scope.Event = eventService.getEventById(eventId).then(
                            function(res){
                                $scope.Event = res.data;
                                if(!res.data){
                                    for(var u in $scope.users){
                                        for(var c in $scope.Event.codes){
                                            if(u.captured_codes[0]._id === c._id){
                                                $scope.showUsers = true;
                                            }
                                        }
                                    }
                                }
                            },
                            function (error) {
                                console.log("vacilao")
                            }
                        );

                        console.log("Ranking okay!")
                    },
                    function (error) {
                        console.log("papangu")
                    }
                );
            }


    });
