var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	//res.send("#LIVESTRONK");
	res.render('index.jade')
});

app.listen(8080);
console.log("Listening on port 8080");
