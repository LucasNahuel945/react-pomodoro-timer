import {
  VISIBILITY_ON,
  VISIBILITY_OFF,
  VISIBILITY_TOGGLE,
} from './constants';

export const on = () => ({
  type: VISIBILITY_ON,
});

export const off = () => ({
  type: VISIBILITY_OFF,
});

export const toggle = () => ({
  type: VISIBILITY_TOGGLE,
});

