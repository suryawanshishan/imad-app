var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('aku', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aku.html'));
});

app.get('/one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'one.html'));
});

app.get('/profile1', function (req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile1.html'));
});

app.get('/two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'two.html'));
});

app.get('/three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
