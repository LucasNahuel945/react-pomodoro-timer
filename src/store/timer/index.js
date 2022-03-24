import { createSlice } from '@reduxjs/toolkit';

const getProgress = (current, final) => {
  const totalCurrentSeconds = current.seconds + current.minutes * 60;
  const totalFinalSeconds = final.seconds + final.minutes * 60;
  const progress = (totalCurrentSeconds < totalFinalSeconds)
    ? 100 * (totalCurrentSeconds / totalFinalSeconds)
    : 100;

  return progress;
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    initial: { minutes: 0, seconds: 0 },
    current: { minutes: 0, seconds: 0 },
    final: { minutes: 25, seconds: 0 },
    totalFocused: { minutes: 0, seconds: 0 },
    isRunning: false,
    progress: 0,
    session: 'focus',
  },
  reducers: {
    pauseTimer(state) {
      state.isRunning = false;
    },
    runTimer(state) {
      state.isRunning = true
    },
    resetTimer(state) {
      state.current = state.initial;
      state.progress = 0;
    },
    stopTimer(state) {
      state.totalFocused.minutes += state.current.minutes;
      if((state.totalFocused.seconds + state.current.seconds) > 59) {
        state.totalFocused.minutes += 1;
        state.totalFocused.seconds += state.current.seconds - 60;
      } else {
        state.totalFocused.seconds += state.current.seconds;
      }
      state.current = state.initial;
      state.isRunning = false;
      state.progress = 0;
    },
    setFocus(state) {
      state.isRunning = true;
      state.session = 'focus';
      state.current = {minutes: 0, seconds: 0};
      state.final = { minutes: 25, seconds: 0 };
    },
    setFinalTime(state, { payload }) {
      state.current = {
        minutes: payload.minutes,
        seconds: payload.seconds,
      };
      state.progress = getProgress( state.current, state.final );
    },
    setInitialTime(state, { payload }) {
      state.initial = {
        minutes: payload.minutes,
        seconds: payload.seconds,
      };
    },
    setShortBreak(state) {
      state.isRunning = true;
      state.session = 'short break';
      state.totalFocused.minutes += state.current.minutes;
      if((state.totalFocused.seconds + state.current.seconds) > 59) {
        state.totalFocused.minutes += 1;
        state.totalFocused.seconds += state.current.seconds - 60;
      } else {
        state.totalFocused.seconds += state.current.seconds;
      }
      state.current = {minutes: 0, seconds: 0};
      state.final = { minutes: 5, seconds: 0 };
    },
    setLongBreak(state) {
      state.isRunning = true;
      state.session = 'long break';
      state.totalFocused.minutes += state.current.minutes;
      if((state.totalFocused.seconds + state.current.seconds) > 59) {
        state.totalFocused.minutes += 1;
        state.totalFocused.seconds += state.current.seconds - 60;
      } else {
        state.totalFocused.seconds += state.current.seconds;
      }
      state.current = {minutes: 0, seconds: 0};
      state.final = { minutes: 20, seconds: 0 };
    },
    updateTime(state, { payload }) {
      state.current = {
        minutes: payload.minutes,
        seconds: payload.seconds,
      };
      state.progress = getProgress( state.current, state.final );
    },
  },
});

export const {
  pauseTimer,
  runTimer,
  resetTimer,
  stopTimer,
  setFocus,
  setFinalTime,
  setInitialTime,
  setShortBreak,
  setLongBreak,
  updateTime,
} = timerSlice.actions;

export default timerSlice.reducer;