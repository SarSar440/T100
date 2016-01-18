var app = angular.module('TodoApp', []);

app.controller('TodoAppController', [ '$scope', function($scope) {
    $scope.tasks = [ { 'title': 'build an app', 'done': false }];
    $scope.error = false;

    $scope.addTodo = function(){
      $scope.tasks.push({'title' : $scope.newTodo, 'done':false});
      $scope.newTodo = '';
    };

    $scope.clearTodo = function(){
      $scope.tasks = $scope.tasks.filter(function(i){
        return !i.done;
      });
    };
  }
]);
