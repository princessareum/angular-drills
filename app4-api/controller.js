angular.module('app4').controller('controller4', function($scope, service4){
  $scope.starWars = function(){
    service4.getData().then(function(response){
      $scope.person = response;
    })
  }
  $scope.starWars();
})
