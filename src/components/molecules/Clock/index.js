import React from 'react';
import { useSelector } from 'react-redux';

import { useFormatTime } from 'hooks';
import {
  Box,
  Minutes,
  Seconds,
} from './styles';

const Clock = () => {
  const { minutes, seconds } = useSelector(state => state.timer.current);

  return (
    <Box>
      <Minutes> {useFormatTime(minutes)} </Minutes>
      <Seconds> {useFormatTime(seconds)} </Seconds>
    </Box>
  );
};

export { Clock };
