export const SESSIONS_SET_FOCUS = 'SET_FOCUS';
export const SESSIONS_SET_LONG_BREAK = 'SET_LONG_BREAK';
export const SESSIONS_SET_SHORT_BREAK = 'SET_SHORT_BREAK';

export const SESSIONS_UPDATE_FOCUS = 'UPDATE_FOCUS';
export const SESSIONS_UPDATE_LONG_BREAK = 'UPDATE_LONG_BREAK';
export const SESSIONS_UPDATE_SHORT_BREAK = 'UPDATE_SHORT_BREAK';

export const focus = {
  type: 'focus',
  lapse: {
    minutes: 25,
    seconds: 0,
  },
};

export const shortBreak = {
  type: 'shortBreak',
  lapse: {
    minutes: 5,
    seconds: 0,
  },
};

export const longBreak = {
  type: 'longBreak',
  lapse: {
    minutes: 20,
    seconds: 0,
  },
};
