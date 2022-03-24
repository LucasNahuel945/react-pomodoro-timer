import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

// reducers
import theme from './theme';
import timer from './timer';
import visibility from './visibility';

export const reducer = combineReducers({
  theme,
  timer,
  visibility,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;