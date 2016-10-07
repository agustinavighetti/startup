var myApp = angular.module('myApp', []);
myApp.controller('MovieController', ['$scope', 
function ($scope) {
    $scope.saved = localStorage.getItem('movies');
    $scope.movies = (localStorage.getItem('movies')!==null) ? JSON.parse($scope.saved) : [];
    localStorage.setItem('movies', JSON.stringify($scope.movies));

    $scope.addMovie = function () {

        $scope.movies.push({
            text: $scope.name,
            year: $scope.year,
            duration: $scope.duration,
            watched: false
        });
        $scope.name = '';
        $scope.year = '';
        $scope.duration = '';
        localStorage.setItem('movies', JSON.stringify($scope.movies));
    };

    $scope.showDetails = function () {
        $scope.show = false;
    }

    $scope.editYear = function () {
        $scope.showYear = false;

    }

    $scope.editDuration = function () {
        $scope.showDuration = false;
    }

    $scope.saveYear = function (movie, movie_text, newYear) {
        let num;
        let oldLS;
        let obj;

        oldLS = localStorage.getItem('movies');
        obj = JSON.parse(oldLS);

        for (let i = 0; i < obj.length; i++) {
            
            if (obj[i].text == `${movie_text}`) {
                num = i;
            }
        }

        obj[num].year = newYear;

        localStorage.setItem('movies', JSON.stringify(obj));
        $scope.newYear = '';
        return movie.year = newYear;
    }

    $scope.saveDuration = function (movie, movie_text, newDuration) {
        let num;
        let oldLS;
        let obj;

        oldLS = localStorage.getItem('movies');
        obj = JSON.parse(oldLS);

        for (let i = 0; i < obj.length; i++) {
            
            if (obj[i].text == `${movie_text}`) {
                num = i;
            }
        }

        obj[num].duration = newDuration;

        localStorage.setItem('movies', JSON.stringify(obj));
        return movie.duration = newDuration;
    }

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.movies, function(movie){
            count+= movie.watched ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function () {
        let oldmovies;
        oldmovies = $scope.movies;
        $scope.movies = [];
        angular.forEach(oldmovies, function(movie){
            if (!movie.watched)
                $scope.movies.push(movie);
        });
        localStorage.setItem('movies', JSON.stringify($scope.movies));
    };
}]);