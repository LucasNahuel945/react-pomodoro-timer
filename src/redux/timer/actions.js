import {
  TIMER_RUN,
  TIMER_RESET,
  TIMER_PAUSE,
  TIMER_STOP,
  TIMER_SET_FINAL_TIME,
  TIMER_SET_FOCUS,
  TIMER_SET_INITIAL_TIME,
  TIMER_SET_SHORT_BREAK,
  TIMER_SET_LONG_BREAK,
  TIMER_UPDATE_TIME,
} from './constants';

export const setFinalTime = ({ minutes, seconds }) => ({
  type: TIMER_SET_FINAL_TIME,
  finalTime: {
    minutes,
    seconds,
  },
});

export const setInitialTime = ({ minutes, seconds }) => ({
  type: TIMER_SET_INITIAL_TIME,
  initialTime: {
    minutes,
    seconds,
  },
});

export const updateTime = ({ minutes, seconds }) => ({
  type: TIMER_UPDATE_TIME,
  newTime: {
    minutes,
    seconds,
  },
});

export const setFocus = () => ({
  type: TIMER_SET_FOCUS,
});

export const setShortBreak = () => ({
  type: TIMER_SET_SHORT_BREAK,
});

export const setLongBreak = () => ({
  type: TIMER_SET_LONG_BREAK,
});

export const resetTimer = () => ({
  type: TIMER_RESET,
});

export const pauseTimer = () => ({
  type: TIMER_PAUSE,
});

export const stopTimer = () => ({
  type: TIMER_STOP,
});

export const runTimer = () => ({
  type: TIMER_RUN,
});
