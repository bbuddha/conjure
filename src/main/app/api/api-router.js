'use strict';

function apiRouter(server, components) {
  server.get('/api/hello/:name', components.helloService.sayHello);
  server.get('/api/profiles', components.profileResource.getProfiles);
  return module;
}

module.exports = apiRouter;
