import styled from 'styled-components';

import { useTheme } from 'hooks';
import { RoundedBox } from 'components/atoms';

export const Box = styled(RoundedBox).attrs(
  props => ({
    palette:  useTheme().state.palette || props.palette,
  })
)`
 background: ${props => props.palette.background};
 height: 64px;
 justify-content: space-evenly;
 padding: 8px;
`;
