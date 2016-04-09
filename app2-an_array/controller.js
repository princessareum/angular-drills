angular.module('app2').controller('controller2', function($scope, service2){
  $scope.people = service2.getData();
})
