var mongoose = require('mongoose');

//Event Schema
var eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sigla: {
        type: String,
        required: true,
        index:{unique: true}
    },
    codes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Code'}]
});

var Event = module.exports = mongoose.model('Event', eventSchema);

//Get Events
module.exports.getEvents = function(callback, limit){
    var populateQuery = 'codes';
    Event.find(callback).limit(limit).populate(populateQuery);
};

//Get Events by Id
module.exports.getEventById = function(id, callback){
    var populateQuery = 'codes';
    Event.findById(id, callback).populate(populateQuery);
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

//update event
module.exports.updateEvent = function(id, event, options, callback){
    var query = {_id: id};
    var update = {
        name: event.name,
        description: event.description
    };
    Event.findOneAndUpdate(query, update, options, callback);
};

//Delete Event
module.exports.deleteEvent = function(id, callback){
    var query = {_id: id};
    Event.remove(query, callback);
};

//PushCode To event
module.exports.pushCode = function(id, code, options, callback ){
    var query = {_id: id};
    var update = {$push : {codes: code}};
    Event.findOneAndUpdate(query, update, options, callback);
};

//delete code of an event
module.exports.pullCode = function(id, code, options, callback){
    var query = {_id: id};
    var update = {$pull: {codes: code}};
    Event.findOneAndUpdate(query, update, options, callback);
};

