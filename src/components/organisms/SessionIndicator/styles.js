import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RoundedBox } from 'components/atoms';

export const Box = styled(RoundedBox).attrs(
  props => ({
    palette: props.palette || useSelector(state => state.theme.palette),
  })
)`
  background-color: ${props => props.palette.background};
  color: ${props => props.palette.disabled};
  padding: 8px;
`;