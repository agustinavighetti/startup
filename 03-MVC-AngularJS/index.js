var myApp = angular.module('myApp', ['ngRoute'])

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'index.html'
    })
    .when('/empire', {
        templateUrl: 'empire.html'
    })
    .when('/x-men', {
        templateUrl: 'x-men.html'
    })
    .when('/the-notebook', {
        templateUrl: 'the-notebook.html'
    })
    .when('/21-blackjack', {
        templateUrl: '21-blackjack.html'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);

