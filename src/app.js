import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/';
import AppHome from './app.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import './routes';
import route from 'can-route';
// import 'can-route-pushstate';
import './styles.less';
import Session from '~/models/session';

var pages = {
  home: 'public',
  about: 'public',
  login: 'public',
  signup: 'public',
  dashboard: 'private'
};

export const ViewModel = DefineMap.extend({
  '*': {
    serialize: true
  },

  page: {
    set (val) {
      route.data.page = val;
    },
    get (lastSetVal) {
      let page = route.data.page || lastSetVal;

      if (!page) {
        return;
      }

      if (!this.session) {
        if (pages[page] === 'private') {
          page = 'login';
        }
      }
      if (!pages[page]) {
        page = 'four-oh-four';
      }
      route.data.page = page;
      return page;
    }
  },

  changePage (newPage) {
    return function () {
      this.page = newPage;
    }.bind(this);
  },

  session: {
    get () {
      return Session.current;
    }
  }
});

const AppContainer = connect(ViewModel, AppHome);

// Reset the DOM for live-reloading.
document.querySelector('[root=true]').innerHTML = '';

// Render the DOM
ReactDOM.render(
  <AppContainer />,
  document.querySelector('[root=true]')
);

route.ready();
