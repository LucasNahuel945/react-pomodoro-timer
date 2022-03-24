import React from 'react';
import { useSelector } from 'react-redux';
import { getProgress } from 'store/selectors';

import {
  Box,
  ProgressBg,
  Progress,
} from './styles';

export const ProgressBar = () => {
  const progress = useSelector(getProgress);

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
