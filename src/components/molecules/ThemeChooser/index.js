import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import { Box, Button } from './styles';
import { Icon } from 'components/atoms';
import { theme } from 'redux/actions';

export const ThemeChooser = () => {
  const dispatch = useDispatch();
  const { visibility } = useSelector(store => store);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  
  const handleDefault = (event) => {
    handleClose(event);
    return dispatch(theme.setDefault());
  };

  const handleDracula = (event) => {
    handleClose(event);
    return dispatch(theme.setDracula());
  };

  const handleNord = (event) => {
    handleClose(event);
    return dispatch(theme.setNord());
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return visibility && ( 
    <Box shadows>
      <Button
        ref={anchorRef}
        aria-controls={open && 'menu-list-grow'}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Icon set='palette'/>
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
      {
        ({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                <MenuItem onClick={handleDefault}>Default</MenuItem>
                <MenuItem onClick={handleDracula}>Dracula</MenuItem>
                <MenuItem onClick={handleNord}>Nord</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )
      }
      </Popper>
    </Box>
  );
}
