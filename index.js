var server = require('./server');
var router = require('./router');
server.init(router.route);