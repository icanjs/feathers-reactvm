'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const localAuth = require('feathers-authentication-local').hooks;

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    localAuth.hashPassword()
  ],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [hooks.remove('password')],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
