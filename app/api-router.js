'use strict';

function apiRouter(server, services) {
	server.get('/api/hello/:name', services.helloService.sayHello);
	return module;
}

module.exports = apiRouter;

