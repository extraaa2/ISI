var express = require('express');
var app = express();
var fs = require('fs');

/* GET users listing. */
app.get('/tiny', function(req, res, next) {
    fs.readFile('tiny.txt', 'utf8', function(error, content) {
        res.send(content);
    });
});

module.exports = app;
