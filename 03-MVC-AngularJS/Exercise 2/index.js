
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    console.log('hola config');
    $routeProvider
    .when('/', {
        templateUrl: 'main.html',
        controller: "MovieController"
    })
    .when('/empire', {
        templateUrl: 'empire.html',
        controller: "MovieController"
    })
    .when('/x-men', {
        templateUrl: 'x-men.html',
        controller: "MovieController"
    })
    .when('/the-notebook', {
        templateUrl: 'the-notebook.html',
        controller: "MovieController"
    })
    .when('/21-blackjack', {
        templateUrl: '21-blackjack.html',
        controller: "MovieController"
    })
    .otherwise({
        redirectTo: '/'
    });
}]);

myApp.controller('MovieController', ['$location', '$scope', function ($location, $scope) {
    console.log('hola controller');

    $scope.saved = localStorage.getItem('movies');
    $scope.movies = (localStorage.getItem('movies')!==null) ? JSON.parse($scope.saved) : [
                                                                                            {
                                                                                            "name": "Empire of the Sun",
                                                                                            "year": "1987",
                                                                                            "duration": "2h 34m",
                                                                                            "id": "00"
                                                                                            },
                                                                                            {
                                                                                            "name": `X-Men`,
                                                                                            "year": "2006",
                                                                                            "duration": "1h 44m",
                                                                                            "id": "01"
                                                                                            },
                                                                                            {
                                                                                            "name": "The Notebook",
                                                                                            "year": "2004",
                                                                                            "duration": "2h 4m",
                                                                                            "id": "02"
                                                                                            },
                                                                                            {
                                                                                            "name": "21 blackjack",
                                                                                            "year": "2008",
                                                                                            "duration": "2h 3m",
                                                                                            "id": "03"
                                                                                            }
                                                                                        ];
    localStorage.setItem('movies', JSON.stringify($scope.movies));



    var url = $location.url();
    var id = url.substr(-2);

        var num, url, id, ls, obj, pName, pYear, pDuration, pNameNode,pYearNode,pDurationNode;
    var ls = localStorage.getItem('movies');
    var obj = JSON.parse(ls);

        for (let i = 0; i < obj.length; i++) {
            
            if (obj[i].id == id) {
                num = i;
            }
        }

        if (document.getElementById('old')) {
            pName = document.createElement('p');
            pYear = document.createElement('p');
            pDuration = document.createElement('p');
            pNameNode = document.createTextNode(`Name: ${obj[num].name}`);
            pYearNode = document.createTextNode(`Year: ${obj[num].year}`);
            pDurationNode = document.createTextNode(`Duration: ${obj[num].duration}`);
            pName.appendChild(pNameNode);
            pYear.appendChild(pYearNode);
            pDuration.appendChild(pDurationNode);
            document.getElementById('old').appendChild(pName);
            document.getElementById('old').appendChild(pYear);
            document.getElementById('old').appendChild(pDuration);        
            }

 }]);