var http = require('http');
var server = http.createServer();
function control(p,r){
	r.writeHead(200,{'content-type': 'text/plain'});
	r.write('Hello world');
	r.end();
}
server.on('request', control);
server.listen(8080);