myApp.controller('RecipeController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {


// http post

$scope.newRecipe = {
  name: '',
  description: '',
  ingredients: ''
};

$scope.postRecipe = function(recipe) {
  console.log(recipe);
  // Add our newRecipe here
  $http.post('/recipe', recipe).then(function(recipe){
    // Angular puts the array in a variable named data
    // We've add a recipe, retrieve the whole list again
    //$scope.getRecipes();
    console.log("HERE: " , recipe);
    $location.url('/info');
    // findRecipeID(id);
  });
};

$scope.newRecipeID = {
  name: '',
  description: '',
  ingredients: ''
};

$scope.postRecipeID = function(recipe) {
  console.log(recipe);
  // Add our newRecipe here
  $http.post('/recipe', recipe).then(function(recipe){
    //the sushi information is on the recipe argument
    //You need to store that id in a factory so the detail page
    //knows what sushi info to show.
    $location.url('/detail');
      //add swich or if/else functions.
    });
  };
  }]);

  // $scope.postRecipeID = function(recipe) {
  //   swal({
  //     title: "Are you sure you want to update recipe?",
  //    //  type: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#592941",
  //     confirmButtonText: "Edit It!",
  //     closeOnConfirm: false
  //   },
  //   function(){
  //     swal("Updated!", "Your recipe has been updated.", "success");
  //     UserService.postRecipeID(recipe);
// });
// };
// }]);
