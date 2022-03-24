import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getPalette } from 'store/selectors';
import { RoundBox } from 'components/atoms';

export const Box = styled(RoundBox).attrs(
  (props) => ({ palette: useSelector(getPalette) || props.palette })
)`
  background-color: ${({ palette }) => palette.background};
  height: 300px;
  width: 300px;
`;
