import IconButton from '@material-ui/core/IconButton';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Button = styled(IconButton).attrs(
  props => ({
    palette: props.palette || useSelector(store => store.theme.palette),
  })
)`
  color: ${props => props.palette.disabled } !important;
  &:hover{
    color: white !important;
    background-color: ${props => props.palette.primary } !important;
  }
`;

export { Button };
