'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('../client/'));
app.use(express.static('../'));
// app.get('/login', function(req, res, next){
//     console.log(req.method);
//     next();
// });
app.use('/*', express.static('../client/index.html'));

mongoose.connect('mongodb://localhost/sample');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error..'));
db.once('open', function callback(){
    console.log('sample db opened');
});
var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
    mongoMessage = messageDoc.message;
});

app.get('*', function(req, res){
    
});

app.listen(3000, function () {
    console.log('Express server listening on port 3000');
    console.log(__dirname);
});
