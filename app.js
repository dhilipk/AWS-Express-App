var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello! Welcome to Dhilip Express World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hey There, Welcome to Dhilip Express World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
