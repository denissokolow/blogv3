import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routs from './Routs';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
      <Routs />
  </React.StrictMode>
  </Provider>, 
  document.getElementById('root')
)

