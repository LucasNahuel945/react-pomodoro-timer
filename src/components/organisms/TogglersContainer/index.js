import React from 'react';

import { ThemeChooser } from 'components/molecules';
import {
  Box,
  ToggleMode,
  ToggleVisibility,
} from './styles';

const TogglersContainer = () => { 
  return (
    <Box shadows>
      <ToggleMode />
      <ToggleVisibility />
      <ThemeChooser />
    </Box>
  );
};

export { TogglersContainer };
