import React from 'react';
import { render } from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import '../scss/main.scss';

render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.querySelector('#app')
);