import React from 'react';
import { Home } from "pages";

export const paths = {
  home: '/',
};

export const routes = {
  home: {
    path: paths.home,
    exact: true,
    element: <Home />,
  }
};