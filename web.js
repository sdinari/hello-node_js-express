var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello', 'Sdinari123');
});

app.listen(process.env.PORT || 3000);
