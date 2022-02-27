import React from 'react';

import { useFormatTime, useTimer } from 'hooks';
import {
  Box,
  Minutes,
  Seconds,
} from './styles';

const Clock = () => {
  const { state } = useTimer();
  //const { minutes, seconds } = useSelector(state => state.current);

  return (
    <Box>
      <Minutes> {useFormatTime(state.current.minutes)} </Minutes>
      <Seconds> {useFormatTime(state.current.seconds)} </Seconds>
    </Box>
  );
};

export { Clock };
