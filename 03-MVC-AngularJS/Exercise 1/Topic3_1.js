let myApp;

myApp = angular.module('myApp', []);
myApp.controller('MovieCtrl', ['$scope', function ($scope) {
    $scope.movies = [
                        {
                        "name": "Empire of the Sun",
                        "year": "1987",
                        "duration": "2h 34m"
                        },
                        {
                        "name": `X-Men`,
                        "year": "2006",
                        "duration": "1h 44m"
                        },
                        {
                        "name": "The Notebook",
                        "year": "2004",
                        "duration": "2h 4m"
                        },
                        {
                        "name": "21 blackjack",
                        "year": "2008",
                        "duration": "2h 3m"
                        }
                    ];
    saveTextLS($scope.movies);
}]);

function saveTextLS (movie) {

    for (var i = 0; i < movie.length; i++) {
        localStorage.setItem(`${movie[i].name}`, `${movie[i].name}`)
    }
}