var express = require('express');
var multer = express('multer');
var morgan = require('morgan');
var qr = require('qr-image');

var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var https = require('https');
var fs = require('fs');

app.use(bodyParser.json());
app.use(morgan('dev'));

//Connect to Mongoose
mongoose.connect('mongodb://localhost/qrcode');

var db = mongoose.connection;

//CORS
var router = express.Router(); // CRIA O ROTEADOR
router.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', "X-Requested-With,Content-Type");
    next();
});

//DIZER QUE TA FUNCIONANDO
router.get('/', function(req, res){
    res.send('e ae galera');
});

var user = require('./routes/user_routes');
var code = require('./routes/code_routes');
var event = require('./routes/event_routes');

//USANDO O ROTEADOR
app.use('/api', router);
app.use('/api', user);
app.use('/api', code);
app.use('/api', event);


//HTTP SERVER E DEPOIS USA A PORTA 8080
var httpServer = http.createServer(app);
httpServer.listen(8080);
console.log("Working!");