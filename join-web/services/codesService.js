
angular.module('joynWeb')
    .constant('apiUrl', 'http://localhost:8080/api')

    .service('codeService', function ($http, apiUrl, $log) {
        this.addCode = function (code) {
            return $http.post(apiUrl + '/codes', code);
        },

        this.gerarCode = function (code) {
            return $http.get(apiUrl + '/qrcode/' + code.name);
        },

        this.deleteCode = function (id) {
            $http.delete(apiUrl + '/code/' + id)
                .then(
                    function (res) {
                        console.log("Deu certo: "+res);
                        return true;
                    }, function (err) {
                        console.log("Ops! Algo deu errado: ");
                        $log.error(err)
                        return false;
                    }
                );
        },

        this.seeCodes = function () {
            return $http.get(apiUrl + '/codes');
        }
    });

