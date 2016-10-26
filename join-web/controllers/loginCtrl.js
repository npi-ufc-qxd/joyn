/**
 * Created by 05754475322 on 27/09/16.
 */
angular.module('joynWeb')
    .controller('LoginCtrl', function ($scope, $location, login) {
        $scope.autenticar = function (user) {
            login.autenticar(user).then(
                function (res) {
                    if(res.data){
                        console.log(res.data)
                        console.log("logado com sucesso")
                        $location.path('/seeEvents');
                    } else {
                        console.log("senha incorreta")
                        $location.path('/');
                    }
                },
                function (error) {
                    console.log("Algo deu errado");
                }
            );
        }
    });