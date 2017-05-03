var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var RecipeSchema = mongoose.Schema({
  name: String,
  description: String,
  ingredients: String
  //favorites/comments/share
});

var Recipes = mongoose.model("Recipes", RecipeSchema);

// Displays a list of all recipes
// Called by the info page
router.get("/", function(req,res){
  Recipes.find({}, function(err, allRecipes){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allRecipes);
  });
});

// Request a single recipe with url parameter
// Called from detail page.
router.get("/:id", function(req,res){
  console.log("request: " + req.params.id);
  var id = req.params.id;
  Recipes.find({_id: id}, function(err, allRecipes){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allRecipes);
  });
});

router.delete("/delete/:id", function(req,res){
  console.log("request: " + req.params.id);
  var id = req.params.id;
  Recipes.remove({_id: id}, function(err, allRecipes){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allRecipes);
  });
});

// router.put("/favorite/:id", function(req,res){
//   console.log("request: " + req.params.id);
//   var id = req.params.id;
//   Recipes.remove({_id: id}, function(err, allRecipes){
//     if(err){
//       console.log(err);
//       res.sendStatus(500);
//     }
//     res.send(allRecipes);
//   });
// });

router.put("/edit", function(req,res){
  console.log("request: ", req.body);
  var recipeID = req.body._id;
  console.log("id", recipeID);
//   //Mongo find and save: http://mongoosejs.com/docs/documents.html
  Recipes.findById(recipeID, function(err, recipe){
    if (err) {
      res.sendStatus(500);
    }
    else{
      // console.log('UPDATE');
      recipe.name = req.body.name || recipe.name;
      recipe.description = req.body.description || recipe.description;
      recipe.ingredients = req.body.ingredients || recipe.ingredients;
      recipe.save(function(err, recipe){
        if (err) {
          res.sendStatus(500);
        }
        res.send(recipe);
      });
    }
  });
// });
});



// Adds a new recipe
// Called by the recipe page
router.post('/', function(req, res, next) {
    console.log(req.body);
    var recipe = new Recipes();
    recipe.name = req.body.name;
    recipe.description = req.body.description;
    recipe.ingredients = req.body.ingredients;
    recipe.save(function(err, savedRecipes){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }

      res.send(savedRecipes);
    });
});

module.exports = router;
