import {
  TIMER_RUN,
  TIMER_RESET,
  TIMER_PAUSE,
  TIMER_STOP,
  TIMER_SET_INITIAL_TIME,
  TIMER_SET_FINAL_TIME,
  TIMER_UPDATE_TIME,
} from './constants';

const initialState = {
  initial: { minutes: 0, seconds: 0 },
  current: { minutes: 0, seconds: 0 },
  final: { minutes: 25, seconds: 0 },
  isRunning: false,
  progress: 0,
};

export const reducer = (
  state = initialState,
  action,
) => {
  switch(action.type) {
    case TIMER_RUN: return ({
      ...state,
      isRunning: true,
    });

    case TIMER_PAUSE: return ({
      ...state,
      isRunning: false,
    });

    case TIMER_RESET: return ({
      ...state,
      current: state.initial,
      progress: 0,
    });

    case TIMER_STOP: return ({
      ...state,
      current: state.initial,
      isRunning: false,
      progress: 0,
    });

    case TIMER_SET_INITIAL_TIME: return ({
      ...state,
      initial: action.initialTime,
    });

    case TIMER_SET_FINAL_TIME: return ({
      ...state,
      final: action.finalTime,
      progress: getProgress(state.current, action.finalTime),
    });

    case TIMER_UPDATE_TIME: return ({
      ...state,
      current: action.newTime,
      progress: getProgress(action.newTime, state.final),
    });
    
    default: return state;
  }
};

const getProgress = (current, final) => {
  const totalCurrentSeconds = current.seconds + current.minutes * 60;
  const totalFinalSeconds = final.seconds + final.minutes * 60;
  const progress = (totalCurrentSeconds < totalFinalSeconds)
    ? 100 * (totalCurrentSeconds / totalFinalSeconds)
    : 100;

  return progress;
}
