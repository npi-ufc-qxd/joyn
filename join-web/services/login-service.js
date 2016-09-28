angular.module('joynWeb')
    .service('login', function () {
        var thisusuario = "JK";
        var thissenha = "ufc";

        this.autenticar = function (usuario, senha ) {

            if(thisusuario === usuario){
                if(thissenha === senha){
                    return true;
                } else return false;
            } else return false;
        }
    });