import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { store } from 'redux/store';
import { Routes } from 'routes';

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

