import { useDispatch, useSelector } from 'react-redux';

import { timer } from 'redux/actions';

export const useTimer = () => {
    const dispatch = useDispatch;
    const state = useSelector(store => store.timer);

    return ({
        state,
        pause: () => { dispatch(timer.pauseTimer()) },
        reset: () => { dispatch(timer.resetTimer()) },
        setFinalTime: (minutes, seconds) => { dispatch(timer.setFinalTime({minutes, seconds})) },
        setInitialTime: (minutes, seconds) => { dispatch(timer.setInitialTime({minutes, seconds})) },
        stop: () => { dispatch(timer.stopTimer()) },
        updateTime: (minutes, seconds) => { dispatch(timer.updateTime({minutes, seconds})) },
        run: () => { dispatch(timer.runTimer()) },
        setFocus: () => { dispatch(timer.setFocus()) },
        setShortBreak: () => { dispatch(timer.setShortBreak()) },
        setLongBreak: () => { dispatch(timer.setLongBreak()) },
    });
};