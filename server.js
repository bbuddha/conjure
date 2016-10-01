var app = require('./src/main/app/app');
var factory = require('./src/main/app/api/component-factory');
app(factory).start();
