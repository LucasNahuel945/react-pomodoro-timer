import React from 'react';

import { proptypes } from './proptypes';
import { Box, Button } from './styles';

export const Toggler = ({ children, fg, ...props }) => {
  return (
    <Box shadows>
      <Button
        {...props}
        fg={fg}
      >
        {children}
      </Button>
    </Box>
  );
};

Toggler.propTypes = proptypes;