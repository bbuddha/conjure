'use strict';

function ServiceFactory() {
	this.configureApiRoutes = configureApiRoutes;
	this.getRestify = getRestify;
	this.getHelloService = getHelloService;

	function configureApiRoutes(server, controllers) {
		return require('./api-router')(server, controllers);
	}

	function getRestify() {
		return require('restify');
	}

	function getHelloService() {
		return require('./hello-service');
	}
}

module.exports = new ServiceFactory();
