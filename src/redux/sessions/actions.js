import {
  SESSIONS_SET_FOCUS,
  SESSIONS_SET_SHORT_BREAK,
  SESSIONS_SET_LONG_BREAK,
} from './constants';

export const setFocus = () => ({
  type: SESSIONS_SET_FOCUS,
});

export const setShortBreak = () => ({
  type: SESSIONS_SET_SHORT_BREAK,
});

export const setLongBreak = () => ({
  type: SESSIONS_SET_LONG_BREAK,
});
