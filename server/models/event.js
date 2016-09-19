var mongoose = require('mongoose');

//Event Schema
var eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
});

var Event = module.exports = mongoose.model('Event', eventSchema);

//Get Events
module.exports.getEvents = function(callback, limit){
    Event.find(callback).limit(limit);
};

//Get Events by Id
module.exports.getEventById = function(id, callback){
    Event.findById(id, callback);
};

//Get Event by Name
module.exports.getEventByName = function(name, callback){
    var query = {name: name};
    Event.find(query, callback);
};

//Add Event
module.exports.addEvent = function(event, callback){
    Event.create(event, callback);
};

//Delete Event
module.exports.deleteGame = function(id, callback){
    var query = {_id: id};
    Event.remove(query, callback);
};

