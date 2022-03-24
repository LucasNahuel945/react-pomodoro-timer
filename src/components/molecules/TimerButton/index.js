import React from 'react';
import { Icon } from 'components/atoms'
import { proptypes } from './proptypes';
import { Button } from './styles';

export const TimerButton = ({ icon, ...props }) => {
  return (
    <Button {...props}>
      <Icon set={icon} />
    </Button>
  );
};

TimerButton.propTypes = proptypes;
