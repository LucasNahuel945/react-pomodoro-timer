import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RoundBox } from 'components/atoms';

export const Box = styled(RoundBox).attrs(
  (props) => ({
      palette: useSelector(state => state.theme.palette) || props.palette,
  })
)`
  background-color: ${({ palette }) => palette.background};
  height: 300px;
  width: 300px;
`;
