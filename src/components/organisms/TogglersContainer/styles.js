import React from 'react';
import styled from 'styled-components';

//import * as actions from 'redux/actions';

import { useTheme, useVisibility } from 'hooks';
import { Icon, RoundedBox } from 'components/atoms';
import { Toggler } from 'components/molecules';

export const Box = styled(RoundedBox)`
  align-items: center;
  box-shadow: none;
  justify-content: space-beetween;
  position: absolute;
  top: 8px;
`;

export const ToggleMode = () => {
  const theme = useTheme();
  const visibility = useVisibility();

  return (
    visibility.state &&
    <Toggler
      onClick={() => { theme.toggleMode() }}
      fg={(theme.state.darkMode) ? '#ffff00ee' : '#220055ee'}
    >
      <Icon set={(theme.state.darkMode) ? 'sun' : 'moon'}/>
    </Toggler>
  );
};

export const ToggleVisibility = () => {
  const visibility = useVisibility();

  return (
    <Toggler onClick={() => { visibility.toggle() }}>
      <Icon set={(visibility.state) ? 'visibility-on' : 'visibility-off'} />
    </Toggler>
  );
};
