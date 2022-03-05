import styled from 'styled-components';

import { useTheme } from 'hooks';
import {
  Text,
  Flexbox,
} from 'components/atoms';

export const Box = styled(Flexbox)`
  box-shadow: none;
  justify-content: center;
  font-family: 'Spartan', sans-serif;
  position: absolute;
`;

export const Minutes = styled(Text).attrs(
  props => ({
    palette: useTheme().state.palette || props.palette,
  })
)`
  color: ${props => props.palette.foreground};
  font-size: 5rem;
`;

export const Seconds = styled(Minutes).attrs(
  props => ({
    palette: useTheme().state.palette || props.palette,
  })
)`
  color: ${props => props.palette.foreground};
  align-self: flex-end;
  font-size: 2.5rem;
  margin: 0 0 4px 4px;
  opacity: 50%;
`;
