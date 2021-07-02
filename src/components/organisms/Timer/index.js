import React from 'react';

import { useRunTimer } from 'hooks';
import { Clock, ProgressBar } from 'components/molecules';
import { Box } from './styles';

const Timer = () => {
  useRunTimer();
  return (
    <Box shadows>
      <ProgressBar />
      <Clock />
    </Box>
  );
};

export { Timer };
