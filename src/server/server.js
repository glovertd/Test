'use strict';

var express = require('express');
var bodyParser = require('body-parser');
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



app.listen(3000, function () {
    console.log('Express server listening on port 3000');
    console.log(__dirname);
});
