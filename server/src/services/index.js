'use strict';
const message = require('./message');
const authentication = require('./authentication');
const userService = require('./users');

module.exports = function () {
  const app = this;


  app.configure(userService);
  app.configure(authentication);
  app.configure(message);
};
