import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibility, getSession } from 'store/selectors';

import { SessionLabel } from 'components/molecules';
import { Box } from './styles';

export const SessionIndicator = () => {
  const session = useSelector(getSession);
  const visibility = useSelector(getVisibility)

  return (
    visibility.value &&
    <Box shadows>
      <SessionLabel name='Focus' active={session === 'focus'} />
      <SessionLabel name='Break' active={session === 'short break'} />
    </Box>
  );
};
