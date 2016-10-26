angular.module('joynWeb')
    .constant('apiUrl', 'https://joynapp.herokuapp.com/api')

    .service('login', function ($http, apiUrl) {

        this.autenticar = function (user) {
           return $http.post(apiUrl + '/authorize/login', user)
        }
    });