var app;

app = angular.module('TodoApp', []);

app.controller('TodoAppController', [
  $scope, function($scope) {
    $scope.tasksToDo = [];
    $scope.error = false;
    return $scope.addTask = function(task) {
      if (!task) {
        return $scope.error = true;
      } else {
        $scope.tasksToDo.push(task);
        $scope.newTask = '';
        return $scope.error = false;
      }
    };
  }
]);
