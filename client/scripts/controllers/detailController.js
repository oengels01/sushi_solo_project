myApp.controller('DetailController', ['$scope', '$http', '$location', '$routeParams', 'UserService',
function($scope, $http, $location, $routeParams, UserService) {
  console.log('DetailController');
  $scope.recipeID = UserService.recipeID;
  UserService.findRecipeID($routeParams.id);

  // Connect the function to our factory
  // $scope.removeRecipeID = UserService.removeRecipeID;

  $scope.saveRecipe = UserService.saveRecipe;
  //$scope.addToFavorites  = UserService.addToFavorites;

  //delete event
   $scope.removeRecipeID = function(id) {
     swal({
       title: "Are you sure you want to delete recipe?",
      //  type: "warning",
       showCancelButton: true,
       confirmButtonColor: "#592941",
       confirmButtonText: "Delete It!",
       closeOnConfirm: false
     },
     function(){
       swal("Deleted!", "Your recipe has been deleted.", "success");
       UserService.removeRecipeID(id);
      // console.log('removeRecipeID ', id);
     });
   };
}]);
