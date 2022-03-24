import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getPalette } from 'store/selectors';
import { RoundedBox } from 'components/atoms';

export const Box = styled(RoundedBox).attrs(
  props => ({ palette: useSelector(getPalette) || props.palette })
)`
  background-color: ${props => props.palette.background};
  color: ${props => props.palette.disabled};
  padding: 8px;
`;