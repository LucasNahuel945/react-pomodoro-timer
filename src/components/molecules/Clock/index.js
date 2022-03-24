import React from 'react';
import { useFormatTime, useTimer } from 'hooks';
import {
  Box,
  Minutes,
  Seconds,
} from './styles';

export const Clock = () => {
  const { minutes, seconds } = useTimer().state.current;

  return (
    <Box>
      <Minutes> {useFormatTime(minutes)} </Minutes>
      <Seconds> {useFormatTime(seconds)} </Seconds>
    </Box>
  );
};
