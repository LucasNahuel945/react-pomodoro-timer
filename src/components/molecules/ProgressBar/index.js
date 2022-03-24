import React from 'react';
import { useTimer } from 'hooks';
import {
  Box,
  ProgressBg,
  Progress,
} from './styles';

export const ProgressBar = () => {
  const { progress } = useTimer().state;

  return (
    <Box>
      <ProgressBg
        variant="determinate"
        value={100}
      />
      
      <Progress
        variant="determinate"
        value={progress}
      />
    </Box>
  )
};
