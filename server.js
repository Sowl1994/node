function init(route){
	var server = require('http').createServer();
	var url = require('url');
	function control(p,r){
		var pathName = url.parse(p.url).pathname;
		route(pathName);
		r.writeHead(200,{'content-type': 'text/plain'});
		r.write('Hello world!\n');
		r.write('Peticion recibida en el servidor: ' + pathName);
		r.end();
	}
	server.on('request', control);
	server.listen(8080);
}
exports.init = init;
