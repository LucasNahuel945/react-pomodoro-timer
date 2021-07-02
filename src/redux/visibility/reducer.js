import {
  VISIBILITY_ON,
  VISIBILITY_OFF,
  VISIBILITY_TOGGLE,
} from './constants';

const initialState = true;

export const reducer = (
  state = initialState,
  action,
) => {
  switch(action.type) {
    case VISIBILITY_TOGGLE: return !state;
    case VISIBILITY_ON: return true;
    case VISIBILITY_OFF: return false;
    default: return state;
  }
};