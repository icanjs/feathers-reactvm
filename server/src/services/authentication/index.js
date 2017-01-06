'use strict';

const auth = require('feathers-authentication');
const local = require('feathers-authentication-local');
const oauth2 = require('feathers-authentication-oauth2');
const GithubStrategy = require('passport-github').Strategy;
const GithubTokenStrategy = require('passport-github-token');

module.exports = function () {
  const app = this;

  let config = app.get('auth');

  config.github.Strategy = GithubStrategy;
  config.github.tokenStrategy = GithubTokenStrategy;

  app.set('auth', config);
  app.configure(auth(config));
  app.configure(local());
  app.configure(oauth2(config.github));

  app.service('authentication').hooks({
    before: {
      create: [
        auth.hooks.authenticate(['jwt', 'local'])
      ]
    }
  });
};
