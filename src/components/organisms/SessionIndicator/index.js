import React from 'react';
import { useSelector } from 'react-redux';

import { Box } from './styles';
import { SessionLabel } from 'components/molecules';

const SessionIndicator = () => {
  const { type } = useSelector(state => state.sessions);
  const { visibility } = useSelector(state => state);

  return (
    visibility &&
    <Box shadows>
      <SessionLabel name='Focus' active={true || type==='focus'} />
      <SessionLabel name='Break' active={type==='shortBreak'} />
      <SessionLabel name='Long Break' active={type==='longBreak'} />
    </Box>
  );
};

export { SessionIndicator };
