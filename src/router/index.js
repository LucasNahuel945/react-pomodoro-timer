import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { routes, paths } from './routes';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route {...routes.home}/>
    </Routes>
  </BrowserRouter>
);

export { Router, paths };