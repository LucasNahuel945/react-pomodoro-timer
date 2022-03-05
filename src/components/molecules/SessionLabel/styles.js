import styled from 'styled-components';
import { useTheme } from 'hooks';
import { RoundedBox, Text } from 'components/atoms';

export const ActiveItem = styled(RoundedBox).attrs(
  props => ({
    palette: useTheme().state.palette || props.palette,
  })
)`
  background-color: ${props => props.palette.primary};
  color: white;
  font-weight: 600;
  padding: 8px 16px;
`;

export const InactiveItem = styled(RoundedBox)`
  box-shadow: none;
  padding: 8px;
`;

export const SessionName = styled(Text)`
  text-transform: uppercase;
`;
