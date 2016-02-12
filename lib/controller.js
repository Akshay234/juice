var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

var serveIndex = function(req,res){
	var fileName = path.join(__dirname,'../public/html/barChart.html');
	res.sendFile(fileName);
};

// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('./public'));


app.get('/',serveIndex);



module.exports = app;