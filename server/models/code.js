var mongoose = require('mongoose');

var codeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: {unique: true}
    },
    desc : {
        type: String
    },
    score: {
        type: Number,
        required : true
    }
});

var Code = module.exports = mongoose.model('Code', codeSchema);

//Get Codes
module.exports.getCodes = function(callback, limit){
    Code.find(callback).limit(limit);
};

//Get Codes by Id
module.exports.getCodeById = function(id, callback){
    Code.findById(id, callback);
};

//Add Code
module.exports.addCode = function(code, callback){
    Code.create(code, callback);
};

//Delete Code
module.exports.deleteCode = function(id, callback){
    var query = {_id: id};
    Code.remove(query, callback);
};

//Get Code by code
module.exports.getCodeByCode = function(code, callback){
    var query = {code : code};
    Code.find(query, callback);
};
