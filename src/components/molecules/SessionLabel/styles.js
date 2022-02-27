import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RoundedBox, Text } from 'components/atoms';

const ActiveItem = styled(RoundedBox).attrs(
  props => ({
    palette: props.palette || useSelector(store => store.theme.palette),
  })
)`
  background-color: ${props => props.palette.primary};
  color: white;
  font-weight: 600;
  padding: 8px 16px;
`;

const InactiveItem = styled(RoundedBox)`
  box-shadow: none;
  padding: 8px;
`;

const SessionName = styled(Text)`
  text-transform: uppercase;
`;

export {
  ActiveItem,
  InactiveItem,
  SessionName,
};
