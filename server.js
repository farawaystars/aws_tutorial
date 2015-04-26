var express = require('express');
var app = express();
var test_file = require("./api/testFile.js");

app.get('/', function(req, res) {
   res.sendfile('./index.html');
});
app.get('/testing', test_file.testing);

app.use(express.static('public'));

app.listen(80);
console.log('Listening on port 80');