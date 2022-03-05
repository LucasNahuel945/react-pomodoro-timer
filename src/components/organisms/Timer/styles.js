import styled from 'styled-components';
import { useTheme } from 'hooks';

import { RoundBox } from 'components/atoms';

export const Box = styled(RoundBox).attrs(
  (props) => ({
      palette: useTheme().state.palette || props.palette,
  })
)`
  background-color: ${({ palette }) => palette.background};
  height: 300px;
  width: 300px;
`;
