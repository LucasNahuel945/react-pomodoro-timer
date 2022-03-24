import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';
import { getPalette } from 'store/selectors';
import { Flexbox } from 'components/atoms';

export const Box = styled(Flexbox)`
  align-items: center !important;
  justify-content: center !important;
  margin: 0 auto;
`;

export const Progress = styled(CircularProgress).attrs(
  (props) => ({
    palette: useSelector(getPalette) || props.palette,
    size: props.size || '256px',
  })
)`
  color: ${({ palette }) => palette.primary} !important;
  height ${({ size }) => size} !important;
  position: absolute !important;
  width: ${({ size }) => size} !important;
`;

export const ProgressBg = styled(CircularProgress).attrs(
  props => ({
    palette: useSelector(getPalette) || props.palette,
    size: props.size || '248px',
  })
)`
  border: 12px solid ${props => props.palette.disabled};
  border-radius: 50%;
  color: #00000000 !important;
  height: ${({ size }) => size} !important;
  position: absolute !important;
  width: ${({ size }) => size} !important;
`;