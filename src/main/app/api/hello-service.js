'use strict';

function HelloService() {
  this.sayHello = sayHello;

  function sayHello(req, res, next) {
    res.json(200, 'Hallo ' + req.context.name + '!');
    return next();
  }
}

module.exports = new HelloService();
