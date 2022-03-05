import React from 'react';
import { Clock, ProgressBar } from 'components/molecules';
import { Box } from './styles';

export const Timer = () => {
  return (
    <Box shadows>
      <ProgressBar />
      <Clock />
    </Box>
  );
};
