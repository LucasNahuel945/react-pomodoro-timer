import React from 'react';
import { useDispatch } from 'react-redux';

import { proptypes } from './proptypes';
import { Box, Button } from './styles';

const Toggler = ({ action, children, fg }) => {
  const dispatch = useDispatch();
  const handleAction = (event) => {
    event.preventDefault();
    dispatch(action());
  };

  return (
    <Box shadows>
      <Button
        onClick={handleAction}
        fg={fg}
      >
        {children}
      </Button>
    </Box>
  );
};

Toggler.propTypes = proptypes;

export { Toggler };
