import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  pauseTimer,
  runTimer,
  resetTimer,
  stopTimer,
} from 'store/timer';
import { getVisibility, getTimer} from 'store/selectors';
import { TimerButton } from 'components/molecules'; 
import { Box } from './styles';

const Play = () => {
  const dispatch = useDispatch()
  return (
    <TimerButton
      onClick={() => { dispatch(runTimer()) }}
      icon='play'
      title='Play'
    />
  );
}

const Pause = () => {
  const dispatch = useDispatch()
  return (
    <TimerButton
      onClick={() => { dispatch(pauseTimer()) }}
      icon='pause'
      title='Pause'
    />
  );
}

const Reset = () => {
  const dispatch = useDispatch()
  return (
    <TimerButton
      onClick={() => { dispatch(resetTimer()) }}
      icon='reset'
      title='Reset'
    />
  );
}

const Stop = () => {
  const dispatch = useDispatch()
  return (
    <TimerButton
      onClick={() => { dispatch(stopTimer()) }}
      icon='stop'
      title='Stop'
    />
  );
}

export const ButtonsContainer = () => {
  const visibility = useSelector(getVisibility);
  const { isRunning } = useSelector(getTimer);

  return (
    visibility.value &&
    <Box shadows>
      <Reset />
      { !isRunning ? <Play /> : <Pause /> }
      <Stop />
    </Box>
  );
};