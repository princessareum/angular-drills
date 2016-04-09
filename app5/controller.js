angular.module('app5').controller('controller5', function($scope, service5){
  $scope.getPersonData = function(){
    service5.getData().then(function(response){
      $scope.people = response;
    });
  }
  $scope.getPersonData();
})
