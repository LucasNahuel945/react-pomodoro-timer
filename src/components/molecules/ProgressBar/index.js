import React from 'react';
import { useSelector } from 'react-redux';

import {
  Box,
  ProgressBg,
  Progress,
} from './styles';

const ProgressBar = () => {
  const { progress } = useSelector(state => state.timer);

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

export { ProgressBar };
