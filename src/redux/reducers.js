import { combineReducers } from 'redux';

import { reducer as sessions } from './sessions';
import { reducer as timer } from './timer'; 
import { reducer as theme } from './theme';
import { reducer as visibility } from './visibility';

export const reducers = combineReducers({
  sessions,
  theme,
  timer,
  visibility,
});
