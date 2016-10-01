'use strict';

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
		server.use(restify.CORS());
		var mongoService = factory.getMongoService('mongodb://ds041939.mlab.com:41939/conjure');
		var profileDao = factory.getProfileDao(mongoService.getConnection());
		var services = {helloService: factory.getHelloService(), profileResource: factory.getProfileResource(profileDao)};
		factory.configureApiRoutes(server, services);
		var port = 9084;
		server.listen(port, function () {
			var serverStartedMessage = 'Server started @ port: ' + port;
			console.log(serverStartedMessage);
		});
		require('shutdown-handler').on('exit', function (e) {
			mongoService.closeConnection();
			console.log("This application shall not be closed!");
		});
	}
}

module.exports = app;
