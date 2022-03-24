import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTimer } from 'store/selectors'; 
import { setShortBreak, setFocus, updateTime } from 'store/timer';

import { formatTime } from 'utilities';
import alertSrc from 'assets/alert.mp3';

export const useRunTimer = () => {
  const dispatch = useDispatch();
  const timer = useSelector(getTimer);

  return useEffect(() => {
    const { current, final, isRunning } = timer;
    let { minutes, seconds } = current;

    const clock = setInterval(
      () => {
        if(isRunning) {
          seconds = (seconds === 59) ? 0 : ++seconds;
          minutes = (seconds === 0) ? ++minutes : minutes;
          dispatch(updateTime({ minutes, seconds }))
          document.title = `
            ${formatTime(minutes)}:${formatTime(seconds)} | 
            ${timer.session.charAt(0).toUpperCase() + timer.session.slice(1)}`;
        }
        if (current.minutes >= final.minutes) {
          new Audio(alertSrc).play();
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