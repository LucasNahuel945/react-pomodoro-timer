import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RoundedBox } from 'components/atoms';

export const Box = styled(RoundedBox).attrs(
  props => ({
    palette: props.palette || useSelector(store => store.theme.palette),
  })
)`
 background: ${props => props.palette.background};
 height: 64px;
 justify-content: space-evenly;
 padding: 8px;
`;
