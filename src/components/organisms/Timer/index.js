import React from 'react';
import { Clock, ProgressBar } from 'components/molecules';
import { Box } from './styles';

const Timer = () => {
  return (
    <Box shadows>
      <ProgressBar />
      <Clock />
    </Box>
  );
};

export { Timer };
