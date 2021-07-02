import styled from 'styled-components';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';

import { Flexbox } from 'components/atoms';

export const Box = styled(Flexbox).attrs(
  (props) => ({
    palette: props.palette || useSelector(state => state.theme.palette),
  })
)`
  align-items: center;
  background-color: ${({ palette })=> palette.background};
  border-radius: 50px;
  margin: 8px;
`;

export const Button = styled(IconButton).attrs(
  (props) => ({
    palette: useSelector(state => state.theme.palette) || props.palette,
  })
)`
  padding: 8px !important;
  transition: 0.2s ease-in-out 0s !important;
  & span{
    color: ${({ palette }) => palette.disabled};
  }
  & span:hover{
    color: ${({ palette }) => palette.primary};
  }

`;
