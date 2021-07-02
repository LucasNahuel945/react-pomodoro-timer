import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import * as actions from 'redux/actions';
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
  const { darkMode } = useSelector(state => state.theme);
  const { visibility } = useSelector(store => store);

  return (
    visibility &&
    <Toggler
      action={actions.theme.toggleMode}
      fg={(darkMode) ? '#ffff00ee' : '#220055ee'}
    >
      <Icon set={(darkMode) ? 'sun' : 'moon'}/>
    </Toggler>
  );
};

export const ToggleVisibility = () => {
  const { visibility } = useSelector(state => state);

  return (
    <Toggler action={actions.visibility.toggle}>
      <Icon set={(visibility) ? 'visibility-on' : 'visibility-off'} />
    </Toggler>
  );
};
