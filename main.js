var http = require('http');
var fs = require('fs');
var app = http.createServer(function (request, response) {
    var url = request.url;
    if (url == '/') {
        url = '/index.html';
        console.log('ok');
    }
    if (url == '/favicon.ico') {

        return response.writeHead(404);
    }   
    
    response.setHeader("Content-Type", 'text/html');
    response.writeHead(200);
   
    response.end(fs.readFileSync(__dirname + url)); 
});
app.listen(8080);