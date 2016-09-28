var app = angular.module("joynWeb", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/home.html",
            controller: "LoginCtrl"
        })
        .when("/seeEvents", {
            templateUrl : "views/seeEvents.html",
            controller: "EventCtrl"
        })
        .when("/addEvent", {
            templateUrl : "views/addEvent.html",
            controller: "EventCtrl"
        })

        .when("/codesEvent",{
            templateUrl: "views/codesEvent.html",
            controller: "EventCtrl"
        })

        .otherwise({
            redirectTo: "/"
        })
});
