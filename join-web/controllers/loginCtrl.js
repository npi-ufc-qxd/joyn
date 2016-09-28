/**
 * Created by 05754475322 on 27/09/16.
 */
angular.module('joynWeb')
    .controller('LoginCtrl', function ($scope, $location, login) {
        $scope.autenticar = function (usuario, senha) {
            var res = login.autenticar(usuario, senha);
            if (res){
                $location.path('/seeEvents');
            } else{
                alert('Vacilão');
            }
        }
    });