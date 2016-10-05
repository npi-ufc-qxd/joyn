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

        .when("/codesEvent/:id",{
            templateUrl: "views/codesEvent.html",
            controller: "CodeCtrl"
        })

        .when("/qrcodes/:id", {
            templateUrl: "views/showQrcodes.html",
            controller: "EventCtrl"
        })

        // .when("/qrcodes/:event_id",{
        //     templateUrl: "views/showQrcodes.html",
        //     controller: "EventCtrl"
        // })

        .otherwise({
            redirectTo: "/"
        })
});
