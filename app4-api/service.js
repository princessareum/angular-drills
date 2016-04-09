angular.module('app4').service('service4', function($http){
  this.getData = function(){
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/5/'
    }).then(function(response){
      return response.data;
    })
  }
})
