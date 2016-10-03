/**
 * Created by 05754475322 on 03/10/16.
 */

angular.module('joynWeb')
    .controller('CodeCtrl', function ($scope, $location, codeService, $log){
        $scope.Code = {
            name: "",
            desc: "",
            score: 0
        },

            $scope.addCode = function (code) {
                codeService.addCode(code).then(
                    function (res){
                        $log.info(res);
                        console.log("deu certo")
                    },
                    function(error){
                        $log.error(error);
                        console.log("vacilao")
                    });
            },

            $scope.deleteCode = function (id) {
                var statusDeleted = codeService.deleteCode(id);
                if(statusDeleted){
                    log.info("Delete deu certo")
                    seeCodes();
                }

            },

            $scope.gerarCode = function (code) {
                codeService.gerarCode(code).then(
                    function (res){
                        $log.info(res);
                        console.log("deu certo")
                    },
                    function(error){
                        $log.error(error);
                        console.log("vacilao")
                    });
            },



            $scope.seeCodes = function () {
                codeService.seeCodes().then(
                    function (res) {
                        console.log("olaa")
                        $log.info(res)
                        $scope.codes = res.data;
                    },
                    function (error) {
                        console.log("erro")
                    }
                );
            }
});
