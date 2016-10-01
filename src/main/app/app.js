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
    // server.use(restify.CORS());
    var MONGO_DB_URL = 'mongodb://dev:password@ds041939.mlab.com:41939/conjure';
    var mongoService = factory.getMongoService(MONGO_DB_URL);
    var profileDao = factory.getProfileDao(mongoService.getConnection());
    var services = {helloService: factory.getHelloService(),
      profileResource: factory.getProfileResource(profileDao)};
    factory.configureApiRoutes(server, services);
    var port = 9084;
    server.listen(port, function() {
      var serverStartedMessage = 'Server started @ port: ' + port;
      console.log(serverStartedMessage);
    });
    require('shutdown-handler').on('exit', function(e) {
      mongoService.closeConnection();
      console.log("Conjure shutdown successful!");
    });
  }
}

module.exports = app;
