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
    var user = req.body;
    User.addUser(user, function(err, user){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(user);
    });
});

module.exports = router;