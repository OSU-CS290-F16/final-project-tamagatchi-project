var path = require('path');
var http = require('http');
var fs = require('fs');

var staticDir = path.join(__dirname, 'public');
var indexFilename = 'index.html';
var notFoundFilename = '404.html';
var port = process.env.PORT || 3000;


function send404Response(response){
    response.writeHead(404, {"Content-Type": "text/html"} );
    fs.createReadStream("./public/404.html").pipe(response);
    console.log ("file not found: Error 404" );
}

function onRequest(request, response){

    fs.readFile('./public/' + request.url, function(err, data) {
        if (request.url == '/') {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            fs.createReadStream("./public/index.html").pipe(response);
        }
        else if (!err) {
            var index = request.url.lastIndexOf('.');
            var indexType = index == -1 ? 'text/plain' : {'.html' : 'text/html', '.css' : 'text/css', '.js' : 'text/javascript', '.gif' : 'image/gif', '.png' : 'image/png'
            }[ request.url.substr(index) ];
            response.setHeader('Content-type' , indexType);
            response.end(data);
            console.log( request.url, indexType );
        } else {
            send404Response(response);
        }
    });
}

var server = http.createServer(function (request, response) {
    onRequest(request, response);

});
server.listen(3000);

console.log("Server is now running...........");
