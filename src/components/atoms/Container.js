import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getPalette } from 'store/selectors';

import { Flexbox } from './Flexbox';

export const Container = styled(Flexbox).attrs(
  props => ({ palette: useSelector(getPalette) || props.palette })
)`
  align-items: center;
  background-color: ${({ palette }) => palette.body};
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  min-height: 500px;
  width: 100%;
`;
