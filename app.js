var server = require('./src/main/app/server');
var factory = require('./src/main/app/api/component-factory');
server(factory).start();
