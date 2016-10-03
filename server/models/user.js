var mongoose = require('mongoose');

//User Schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        index: {unique: true}
    },
    photo: {
        type: String,
        required: true
    },
    score: {
        type: Number
    },
    captured_codes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Code'}]
});

var User = module.exports = mongoose.model('User', userSchema);

//Get Users
module.exports.getUsers = function(callback, limit){
    var populateQuery = 'captured_codes';
    User.find(callback).limit(limit).populate(populateQuery);
};

//Get Users by ID
module.exports.getUserById = function(id, callback){
    var query = {id : id};
    User.find(query, callback);
};

//Add User
module.exports.addUser = function(user, callback){
    User.create(user, callback);
};

//Update Score
module.exports.updateScore = function(id, score, options, callback){
    var query = {id: id};
    var update = {$inc : {score: score}};
    User.findOneAndUpdate(query, update, options, callback);
};

//Update Codes
module.exports.updateCodes = function(id, code, options, callback ){
    var query = {id: id};
    var update = {$push : {captured_codes: code}};
    User.findOneAndUpdate(query, update, options, callback);
};