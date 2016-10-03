var express = require('express');
var router = express.Router();

User = require('../models/user');

//get all users
router.get('/users', function(req, res){
    User.getUsers(function(err, users){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(users);
    });
});

//get user by id
router.get('/users/:_id', function(req, res){
    User.getUserById(req.params._id, function(err, user){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(user);
    });
});

//add user
router.post('/users', function(req, res){
    console.log(req);
    var user = req.body;
    User.addUser(user, function(err, user_retorno){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(user_retorno);
    });
});

//update score
router.get('/users/:_id/score/:_score/', function(req, res){
    var id = req.params._id;
    var score = req.params._score;
    User.updateScore(id, score, {}, function(err, u){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        if(u) res.json(u);
    });

});

//add code to captured codes
router.get('/users/:_id/code/:_codeId', function(req, res){
    var user_id = req.params._id;
    var code_id = req.params._codeId;
    User.updateCodes(user_id, code_id, {}, function(err, u){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        if(u) res.json(u);
    });
});

module.exports = router;