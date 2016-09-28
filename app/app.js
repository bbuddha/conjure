'use strict';

var factory = require('./service-factory');

app(factory).start();

function app(factory) {
	return {
		start: start
	};
	function start() {
		var restify = factory.getRestify();
		var server = restify.createServer();
		server.use(restify.acceptParser(server.acceptable));
		server.use(restify.queryParser());
		server.use(restify.bodyParser());
		/* eslint-disable new-cap */
		server.use(restify.CORS());
		var services = {helloService: factory.getHelloService()};
		factory.configureApiRoutes(server, services);
		var internalPort = 9084;
		server.listen(internalPort, function () {
			var serverStartedMessage = 'Server started @ ' + internalPort + ' inside the container for external port: ' + internalPort;
			//log.info(serverStartedMessage);
			console.log(serverStartedMessage);
		});
	}
}
