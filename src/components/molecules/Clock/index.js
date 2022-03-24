import React from 'react';
import { useSelector } from 'react-redux';
import { formatTime } from 'utilities';
import { getCurrentTime } from 'store/selectors';

import {
  Box,
  Minutes,
  Seconds,
} from './styles';

export const Clock = () => {
  const { minutes, seconds } = useSelector(getCurrentTime);

  return (
    <Box>
      <Minutes> {formatTime(minutes)} </Minutes>
      <Seconds> {formatTime(seconds)} </Seconds>
    </Box>
  );
};
