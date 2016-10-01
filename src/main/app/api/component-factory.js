'use strict';

function ServiceFactory() {
	this.configureApiRoutes = configureApiRoutes;
	this.getRestify = getRestify;
	this.getHelloService = getHelloService;
	this.getMongoService = getMongoService;
	this.getProfileDao = getProfileDao;
	this.getProfileResource = getProfileResource;

	function configureApiRoutes(server, controllers) {
		return require('./api-router')(server, controllers);
	}

	function getRestify() {
		return require('restify');
	}

	function getHelloService() {
		return require('./hello-service');
	}

	function getProfileDao(connection){
		return require('./profile-dao')(connection);
	}

	function getProfileResource(profileDao){
		return require('./profile-resource')(profileDao);
	}

	function getMongoService(mongoDbUri){
		return require('./mongo-service')(mongoDbUri);
	}
}

module.exports = new ServiceFactory();
