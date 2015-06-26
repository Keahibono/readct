var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
	res.render('index');
});

app.post('/redacted', function (req, res) {
	res.render('redacted', {redactedOutput: req.body.userInput})
});

var server = app.listen(3000);