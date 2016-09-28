'use strict';

function apiRouter(server, services) {
	console.log(services.helloService.sayHello)
	server.get('/api/hello/:name', services.helloService.sayHello);
	return module;
}

module.exports = apiRouter;

