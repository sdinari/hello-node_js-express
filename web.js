var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello said');
});

app.listen(process.env.PORT || 3000);
