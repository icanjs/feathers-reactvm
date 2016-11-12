import { connect } from '@bigab/react-view-models';
import DefineMap from 'can-define/map/';
import AppHome from './app.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

export const ViewModel = DefineMap.extend({
  message: {
    type: 'string',
    value: 'Hello, Feathers!'
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
