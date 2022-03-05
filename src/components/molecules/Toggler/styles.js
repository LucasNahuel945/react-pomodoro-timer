import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

import { useTheme } from 'hooks';
import { RoundBox } from 'components/atoms';

export const Box = styled(RoundBox).attrs(
  (props) => ({
    palette:  useTheme().state.palette || props.palette,
  })
)`
  align-items: center;
  background-color: ${({ palette })=> palette.background};
  margin: 8px !important;
`;

export const Button = styled(IconButton).attrs(
  (props) => ({
    palette:  useTheme().state.palette || props.palette,
  })
)`
  padding: 8px !important;
  transition: 0.2s ease-in-out 0s !important;
  & span{
    color: ${({ fg, palette }) => fg || palette.disabled};
  }
  & span:hover{
    color: ${({ fg, palette }) => fg || palette.primary};
  }
`;
