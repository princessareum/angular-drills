angular.module('app3').controller('controller3', function($scope, service3){
  $scope.people = service3.getData();
})
