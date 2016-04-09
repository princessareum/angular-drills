angular.module('app5').service('service5', function($http){
  this.getData = function(){
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    }).then(function(response){
      console.log("svc",response.data.results);
      var list = response.data.results;
      var brownHair = [];
      for(var i = 0; i < list.length; i++){
        console.log(list[i].name, list[i].hair_color);
        if((list[i].hair_color === 'brown')){
          console.log(list[i].name, list[i].hair_color);
          brownHair.push(list[i]);
        }
      }
      return brownHair;
    });
  }
this.getData();
});
