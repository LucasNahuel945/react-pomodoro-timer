import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from 'react-redux';
import { getPalette } from 'store/selectors';

export const Button = styled(IconButton).attrs(
  props => ({ palette: useSelector(getPalette) || props.palette })
)`
  color: ${props => props.palette.disabled } !important;
  &:hover{
    color: white !important;
    background-color: ${props => props.palette.primary } !important;
  }
`;