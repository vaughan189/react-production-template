import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/Store';
import ThemeApp from './theme';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
    <ThemeApp />
  </Provider>,
  document.getElementById('root')
);
