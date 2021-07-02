import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { stopTimer, updateTime } from 'redux/timer/actions';

const useRunTimer = () => {
  const dispatch = useDispatch();
  const { current, final, isRunning } = useSelector(store => store.timer);
  
  return useEffect(() => {
    let { minutes, seconds } = current;

    const clock = setInterval(
      () => {
        if(isRunning) {
          seconds = (seconds === 59) ? 0 : ++seconds;
          minutes = (seconds === 0) ? ++minutes : minutes;
          dispatch(updateTime({ minutes, seconds }))
        }
        if (current.minutes >= final.minutes) {
          document.title = 'Finish';
          clearInterval(clock);
          dispatch(stopTimer())
        }
      },
      1000,
    );

    return () => {
      clearInterval(clock)
    };
  }, [ current, final, isRunning ]);
};

export { useRunTimer };
