import React from 'react';
import { useSelector } from 'react-redux';

import { timer } from 'redux/actions';
import { TimerButton } from 'components/molecules'; 
import { Box } from './styles';

const Play = () => (
  <TimerButton
    action={timer.runTimer}
    icon='play'
  />
);

const Pause = () => (
  <TimerButton
    action={timer.pauseTimer}
    icon='pause'
  />
);

const Reset = () => (
  <TimerButton
    action={timer.resetTimer}
    icon='reset'
  />
);

const Stop = () => (
  <TimerButton
    action={timer.stopTimer}
    icon='stop'
  />
);


const ButtonsContainer = () => {
  const { visibility } = useSelector(state => state);
  const { isRunning } = useSelector(state => state.timer);

  return (
    visibility &&
    <Box shadows>
      <Reset />
      { !isRunning ? <Play /> : <Pause /> }
      <Stop />
    </Box>
  );
};

export { ButtonsContainer };
