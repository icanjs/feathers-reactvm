import { connect } from '@bigab/react-view-models';
import DefineMap from 'can-define/map/';
import AppHome from './app.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import './routes';
import route from 'can-route';

export const ViewModel = DefineMap.extend({
  '*': {
    serialize: true
  },

  page: {
    get: () => route.data.page,
    set: (val) => {
      route.data.page = val;
    }
  },

  changePage (newPage) {
    return function () {
      this.page = newPage;
    }.bind(this);
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
