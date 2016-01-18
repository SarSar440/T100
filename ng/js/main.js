var app = angular.module('TodoApp', []);

app.controller('TodoAppController', [ '$scope', function($scope) {
    $scope.tasks = [ { 'title': 'build an app', 'done': false }];
    $scope.error = false;

    $scope.addTask = function(){};
    $scope.clearTask = function(){};
  }
]);
