var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/info', {
     templateUrl: '/views/templates/info.html',
     controller: 'InfoController',
     resolve: {
       getuser : ['UserService', function(UserService){
         return UserService.getuser();
       }]
     }
   })
    .when('/recipe', {
      templateUrl: '/views/templates/recipe.html',
      controller: 'RecipeController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/detail', {
      templateUrl: '/views/templates/detail.html',
      controller: 'DetailController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

    .when('/detail/:id', {
      templateUrl: '/views/templates/detail.html',
      controller: 'DetailController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })


    // .when('/favorite', {
    //   templateUrl: '/views/templates/detail.html',
    //   controller: 'FavoriteController',
    //   resolve: {
    //     getuser : ['UserService', function(UserService){
    //       return UserService.getuser();
    //     }]
    //   }
    // })


    // Accept a route with an activation code as a parameter
    .when('/activate/:code', {
      templateUrl: '/views/templates/activate.html',
      controller: 'ActivateController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
