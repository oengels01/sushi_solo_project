myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');


  var userObject = {};
  var recipeID = {};
  // var deleteRecipeID = {};
  return {
    userObject : userObject,
    recipeID : recipeID,
    // myFavorite : myFavorite,


    getuser : function(){
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              // user has a curret session on the server
              userObject.userName = response.data.username;
              console.log('User Data: ', userObject.userName);
          } else {
              // user has no session, bounce them back to the login page
              $location.path("/home");
          }
      });
    },
    findRecipeID : function(id){
      $http.get('/recipe/'+ id).then(function(response) {
        recipeID.recipe = response.data;
        console.log('RecipeID Data: ', recipeID.recipe);
          // $location.path("/detail");

      });
    },

    removeRecipeID : function(id){
      console.log('Delete', id);
      $http.delete('/recipe/delete/'+ id).then(function(response) {
        //deleteRecipeID.recipe = response.data;
        console.log('RecipeID Data: ', response.data);
           $location.path("/info");
      });
    },

    // editRecipe : function(recipe){
    //   console.log('Edit', recipe);
    //   // navigate to add (or edit page)
    //   $http.put('/recipe', recipe).then(function(response){
    //   console.log('recipe', response);
    //   $location.path("/detail");
    //   });
    // },
    saveRecipe : function(recipe) {
      $http.put('/recipe/edit', recipe).then(function(response) {
        console.log('RecipeID Data: ', recipe);
          //  $location.path("/detail");
      });
    },

    // addToFavorites : function(id){
    //   $http.put('/recipe/add', recipe).then(function(response) {
    //     console.log('RecipeID Data: ', recipe);
    //       //  $location.path("/favorite");
    // });
    //getFavorites : function()
    //http.get('/favorite')

    logout : function() {
        $http.get('/user/logout').then(function(response) {
          console.log('logged out');
          $location.path("/home");
        });
    }
  };
}]);





    // removeRecipeID : function(id){
    //   $http.delete('/recipe/'+ id).then(function(response) {
    //     recipeID.recipe = response.data;
    //     console.log('RecipeID Data: ', recipeID.recipe);
    //   });
    // },


    // findRecipeID : function(id){
    //   $http.get('/recipe/detail/' + id).then(function(response) {
    //     // console.log("This is response from findRecipeId" + response);
    //       if(response.data.recipe) {
    //
    //           recipeID.recipe = response.data.recipe;
    //           // console.log('RecipeID Data: ', recipeID.recipe);
    //       } else {
    //           // console.log("you are in else statement.");
    //           $location.path("/detail");
    //       }
    //   });
    // },
