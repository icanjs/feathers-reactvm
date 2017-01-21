'use strict';

const auth = require('feathers-authentication');
const local = require('feathers-authentication-local');
const oauth2 = require('feathers-authentication-oauth2');
const GithubStrategy = require('passport-github').Strategy;
const GithubTokenStrategy = require('passport-github-token');
const authManagement = require('feathers-authentication-management');

module.exports = function () {
  const app = this;

  let config = app.get('auth');

  config.github.Strategy = GithubStrategy;
  config.github.tokenStrategy = GithubTokenStrategy;

  app.set('auth', config);
  app.configure(auth(config))
    .configure(local())
    .configure(oauth2(config.github))
    .configure(authManagement());

  app.service('authentication').hooks({
    before: {
      create: [
        auth.hooks.authenticate(['jwt', 'local'])
      ]
    }
  });
};
