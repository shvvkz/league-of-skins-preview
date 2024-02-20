var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

var server = app.listen(8080, function() {
    console.log('Server is running at http://localhost:8080 ..');
    });