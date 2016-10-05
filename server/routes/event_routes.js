var express = require('express');
var router = express.Router();

Event = require('../models/event');

//get all events
router.get('/events', function(req, res){
    Event.getEvents(function(err, events){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(events);
    });
});

// get event by id
router.get('/events/:_id', function(req, res){
    Event.getEventById(req.params._id , function(err, event){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(event);
    });
});

//get an event by its name
router.get('/events/:_name', function(req, res){
   Event.getEventByName(req.params._name, function(err, events){
       if(err){
           res.json({
               error: err.status,
               message: err.message
           });
       }
       res.json(events);
   });
});

//add an event
router.post('/event', function(req, res){
    event = req.body;
    Event.addEvent(event, function(err, event_return){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(event_return);
    });
});

//update an event
router.put('/event/:_id', function(req, res){
    var id = req.params._id;
    var event = req.body;
    Event.updateEvent(id, event, {}, function(err, event_return){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(event_return);
    });
});

//delete an event
router.delete('/event/:_id', function(req, res){
    var id = req.params._id;
    Event.deleteEvent(id, function(err, event){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        res.json(event);
    });
});

//push code to an event
router.get('/event/:_id/code/:_codeId', function(req, res){
    var event_id = req.params._id;
    var code_id = req.params._codeId;
    Event.pushCode(event_id, code_id, {}, function(err, e){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        if(e) res.json(e);
    });
});

//delete code of an event
router.delete('/event/:_id/code/:_codeId', function(req, res){

    var event_id = req.params._id;
    var code_id = req.params._codeId;
    Event.pullCode(event_id, code_id, {}, function(err, e){
        if(err){
            res.json({
                error: err.status,
                message: err.message
            });
        }
        if(e) res.json(e);
    });
});

//
module.exports = router;