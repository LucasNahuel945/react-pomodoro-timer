import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { store } from 'store';
import { Router } from 'router';

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

