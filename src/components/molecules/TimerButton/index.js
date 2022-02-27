import React from 'react';
import { useDispatch } from 'react-redux';

import { Icon } from 'components/atoms'
import { proptypes } from './proptypes';
import { Button } from './styles';

const TimerButton = ({ action, icon, ...props }) => {
  const dispatch = useDispatch();
  const handleAction = (event) => {
    event.preventDefault();
    dispatch(action());
  };

  return (
    <Button onClick={handleAction} {...props}>
      <Icon set={icon} />
    </Button>
  );
};

TimerButton.propTypes = proptypes;

export { TimerButton };
