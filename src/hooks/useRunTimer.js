import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setShortBreak, setFocus, updateTime } from 'redux/timer/actions';

const useRunTimer = () => {
  const dispatch = useDispatch();
  const { timer } = useSelector(store => store);

  return useEffect(() => {
    const { current, final, isRunning } = timer;
    let { minutes, seconds } = current;

    const clock = setInterval(
      () => {
        if(isRunning) {
          seconds = (seconds === 59) ? 0 : ++seconds;
          minutes = (seconds === 0) ? ++minutes : minutes;
          dispatch(updateTime({ minutes, seconds }))
        }
        if (current.minutes >= final.minutes) {
          (timer.session === 'focus')
            ? dispatch(setShortBreak())
            : dispatch(setFocus());
        }
      },
      1000,
    );

    return () => {
      clearInterval(clock)
    };
  }, [ timer ]);
};

export { useRunTimer };
