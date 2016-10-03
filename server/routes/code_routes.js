var express = require('express');
var router = express.Router();
var qr = require('qr-image');
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



//delete an code
router.delete('/code/:_id', function(req, res){
    var id = req.params._id;

    Code.deleteCode(id, function(err, code){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(code);
    });
});

//Autenticar CODE
router.get('/code/auth/:_code', function(req, res){
    var code = req.params._code.toString();
    Code.getCodeByCode(code, function(err, Code){
        if(err){
            res.json({
                error:err.status,
                message: err.message
            });
        }

        if(Code){
            res.json(Code);
        }else {
            res.json({status:true});
        }

    })

});

//GERADOR DE QRCODE
router.get('/qrcode/:_code', function(req, res){
    var c = req.params._code.toString();
    var code = qr.image(c, {type: 'svg'});
    res.type('svg');
    code.pipe(res);
});


module.exports = router;