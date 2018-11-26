var express = require('express');
var router = express.Router();

var https = require('https');
var http = require('http');
var fs = require('fs');

var privateKey = fs.readFileSync('ca.key');
var certificate = fs.readFileSync('ca.crt');
var options = {
  key: privateKey,
  cert: certificate,
  passphrase: 'ella'
}

var app = express();

// Create an HTTP service.
http.createServer(app).listen(8080);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(4433);

/* GET home page. */
app.get('/index', function(req, res) {
  res.setHeader('Content-Type', {'Content-Type': 'application/JSON'});
  res.json({message: 'Hello World'});
});

module.exports = app;