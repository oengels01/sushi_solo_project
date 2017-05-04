myApp.controller('RecipeController', ['$scope', '$http', '$location', 'UserService', 'Upload', function($scope, $http, $location, UserService, Upload) {

$scope.newRecipe = {
  name: '',
  description: '',
  ingredients: ''
};

$scope.postRecipe = function(recipe) {
  console.log(recipe);
  $http.post('/recipe', recipe).then(function(recipe){
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
  $http.post('/recipe', recipe).then(function(recipe){
    $location.url('/detail');

    });
  };

    $scope.submit = function(){
        Upload.upload({
          url: '/uploads',
          method: 'post',
          data: $scope.upload

        }).then(function (response) {
          console.log(response.data);
          $scope.uploads.push(response.data);
          $scope.upload = {};
        });
      };

      $http.get('/uploads').then(function(response){
        console.log(response.data);
        $scope.uploads = response.data;
      });
  }]);
