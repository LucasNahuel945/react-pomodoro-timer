import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getIsDarkMode, getVisibility } from 'store/selectors';
import { Icon, RoundedBox } from 'components/atoms';
import { Toggler } from 'components/molecules';
import { toggleVisibility } from 'store/visibility';
import { toggleMode } from 'store/theme';

export const Box = styled(RoundedBox)`
  align-items: center;
  box-shadow: none;
  justify-content: space-beetween;
  position: absolute;
  top: 8px;
`;

export const ToggleMode = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(getIsDarkMode);
  const visibility = useSelector(getVisibility);

  return (
    visibility.value &&
    <Toggler
      onClick={() => { dispatch(toggleMode()) }}
      fg={(darkMode) ? '#ffff00ee' : '#220055ee'}
    >
      <Icon set={(darkMode) ? 'sun' : 'moon'}/>
    </Toggler>
  );
};

export const ToggleVisibility = () => {
  const dispatch = useDispatch();
  const visibility = useSelector(getVisibility);

  return (
    <Toggler onClick={() => { dispatch(toggleVisibility()) }}>
      <Icon set={(visibility.value) ? 'visibility-on' : 'visibility-off'} />
    </Toggler>
  );
};
