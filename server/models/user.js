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
    create_date : {
        type: Date,
        default: Date.now()
    }
});

var User = module.exports = mongoose.model('User', userSchema);

//Get Users
module.exports.getUsers = function(callback, limit){
    User.find(callback).limit(limit);
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

