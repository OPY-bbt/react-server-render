var fs = require('fs');
var path = require('path');
var http = require('http');
var page = require('../dist/page').page;

http.createServer(function (request, response) {
    switch (request.url) {
        case '/': {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(page());
            break;
        }
        case '/dist/app.js': {
            response.writeHead(200, {'Content-Type': 'text/javascript'});
            response.end(fs.readFileSync(path.resolve(__dirname, '../dist/app.js')).toString());
            break;
        }
    }
}).listen(8888);
