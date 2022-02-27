import { useDispatch, useSelector } from 'react-redux';

import { timer } from 'redux/actions';

export const useTimer = () => {
    const dispatch = useDispatch;
    const state = useSelector(store => store.timer);
    
    return ({
        state,
        pauseTimer: () => { dispatch(timer.pauseTimer()) },
        resetTimer: () => { dispatch(timer.resetTimer()) },
        setFinalTime: (minutes, seconds) => { dispatch(timer.setFinalTime({minutes, seconds})) },
        setInitialTime: (minutes, seconds) => { dispatch(timer.setInitialTime({minutes, seconds})) },
        stopTimer: () => { dispatch(timer.stopTimer()) },
        updateTime: (minutes, seconds) => { dispatch(timer.updateTime({minutes, seconds})) },
        runTimer: () => { dispatch(timer.runTimer()) },
        setFocus: () => { dispatch(timer.setFocus()) },
        setShortBreak: () => { dispatch(timer.setShortBreak()) },
        setLongBreak: () => { dispatch(timer.setLongBreak()) },
    });
};