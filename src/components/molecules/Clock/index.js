import React from 'react';
import { useSelector } from 'react-redux';
import { useFormatTime } from 'hooks/useFormatTime';
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
      <Minutes> {useFormatTime(minutes)} </Minutes>
      <Seconds> {useFormatTime(seconds)} </Seconds>
    </Box>
  );
};
