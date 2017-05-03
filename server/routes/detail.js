var express = require('express');
var router = express.Router();
var detail = require('../models/detail');
var path = require('path');

router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/templates/detail.html'));
});

router.post('/detail', function(req, res, next) {
    recipes.create(req.body, function(err, post) {
         if(err) {

           next(err);
         } else {
          res.redirect('/');
         }
    });
});
module.exports = router;
