var express = require('express');
var router = express.Router();

Code = require('../models/code');

//get all codes
router.get('/codes', function(req, res){
    Code.getCodes(function(err, codes){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(codes);
    });
});

//get code by id
router.get('/codes/:_id', function(req, res){
    Code.getCodeById(req.params._id, function(err, code){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(code);
    });
});

//add code
router.post('/codes', function(req, res){
    console.log(req);
    var code = req.body;
    Code.addCode(code, function(err, code_return){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(code_return);
    });
});

module.exports = router;