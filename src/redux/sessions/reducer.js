import {
  SESSIONS_SET_FOCUS,
  SESSIONS_SET_LONG_BREAK,
  SESSIONS_SET_SHORT_BREAK,
  focus,
  longBreak,
  shortBreak,
} from './constants';

const initialState = {
  focus,
  longBreak,
  shortBreak,
  current: focus,
  counter: {
    focus: 0,
    longBreak: 0,
    shortBreak: 0,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SESSIONS_SET_FOCUS: return ({
      ...state,
      current: state.focus,
      counter: {
        ...state.counter,
        focus: ++state.counter.focus,
      },
    });

    case SESSIONS_SET_SHORT_BREAK: return ({
      ...state,
      current: state.shortBreak,
      counter: {
        ...state.counter,
        shortBreak: ++state.counter.shortBreak,
      },
    });

    case SESSIONS_SET_LONG_BREAK: return ({
      ...state,
      current: state.focus,
      counter: {
        ...state.counter,
        longBreak: ++state.counter.longBreak,
      },
    });
    
    default: return state;
  }
};

export { reducer };
