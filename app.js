var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send("#LIVESTRONK");
});

app.listen(8080)
console.log("Listening on port 8080~");
