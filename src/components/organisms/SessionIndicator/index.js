import React from 'react';

import { Box } from './styles';
import { SessionLabel } from 'components/molecules';
import { useVisibility, useTimer } from 'hooks';

export const SessionIndicator = () => {
  const { session } = useTimer().state;
  const visibility = useVisibility().state;

  return (
    visibility &&
    <Box shadows>
      <SessionLabel name='Focus' active={session === 'focus'} />
      <SessionLabel name='Break' active={session === 'short break'} />
    </Box>
  );
};
