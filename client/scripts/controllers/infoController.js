myApp.controller('InfoController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  $scope.logout = UserService.logout;

  $scope.sushiList = {};

  $scope.getRecipes = function() {
    $http.get('/recipe').then(function(response){
      console.log('InfoController', response);
      $scope.sushiList.recipes = response.data;

    });
  };
  $scope.getRecipes();


  // $scope.removeRecipes = function() {
  //   $http.get('/recipe').then(function(response){
  //     console.log('InfoController', response);
  //     $scope.sushiList.recipes = response.data;
  //
  //   });
  // };
  // $scope.removeRecipes();
}]);
