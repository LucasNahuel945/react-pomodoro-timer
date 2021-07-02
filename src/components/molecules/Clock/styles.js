import styled from 'styled-components';
import { useSelector } from 'react-redux';

import {
  Text,
  Flexbox,
} from 'components/atoms';

const Box = styled(Flexbox)`
  box-shadow: none;
  justify-content: center;
  font-family: 'Spartan', sans-serif;
  position: absolute;
`;

const Minutes = styled(Text).attrs(
  props => ({
    palette: useSelector(state => state.theme.palette) || props.palette,
  })
)`
  color: ${props => props.palette.foreground};
  font-size: 5rem;
`;

const Seconds = styled(Minutes).attrs(
  props => ({
    palette: useSelector(state => state.theme.palette) || props.palette,
  })
)`
  color: ${props => props.palette.foreground};
  align-self: flex-end;
  font-size: 2.5rem;
  margin: 0 0 4px 4px;
  opacity: 50%;
`;

export {
  Box,
  Minutes,
  Seconds,
};

