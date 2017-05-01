var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  $scope.getBooks = function(){
    $http.get('/api/books').success(function(response){
      $scope.books = response;
    });
  }
}]);
