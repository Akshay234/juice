var http = require('http');
var controller = require('./lib/controller');
var server = http.createServer(controller);
server.listen(8080);
console.log("server listening at port : 8080");