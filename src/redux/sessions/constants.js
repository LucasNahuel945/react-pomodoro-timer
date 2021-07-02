const SESSIONS_SET_FOCUS = 'SET_FOCUS';
const SESSIONS_SET_LONG_BREAK = 'SET_LONG_BREAK';
const SESSIONS_SET_SHORT_BREAK = 'SET_SHORT_BREAK';

const SESSIONS_UPDATE_FOCUS = 'UPDATE_FOCUS';
const SESSIONS_UPDATE_LONG_BREAK = 'UPDATE_LONG_BREAK';
const SESSIONS_UPDATE_SHORT_BREAK = 'UPDATE_SHORT_BREAK';

const focus = {
  type: 'focus',
  lapse: {
    minutes: 25,
    seconds: 0,
  },
};

const shortBreak = {
  type: 'shortBreak',
  lapse: {
    minutes: 5,
    seconds: 0,
  },
};

const longBreak = {
  type: 'longBreak',
  lapse: {
    minutes: 20,
    seconds: 0,
  },
};

export {
  SESSIONS_SET_FOCUS,
  SESSIONS_SET_LONG_BREAK,
  SESSIONS_SET_SHORT_BREAK,
  SESSIONS_UPDATE_FOCUS,
  SESSIONS_UPDATE_LONG_BREAK,
  SESSIONS_UPDATE_SHORT_BREAK,
  focus,
  longBreak,
  shortBreak,
};
