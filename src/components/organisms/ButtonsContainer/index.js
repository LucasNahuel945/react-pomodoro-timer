import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { timer } from 'redux/actions';
import { TimerButton } from 'components/molecules'; 
import { Box } from './styles';

const Play = () => {
  const dispatch = useDispatch()
  return (
    <TimerButton
      onClick={() => { dispatch(timer.runTimer()) }}
      icon='play'
      title='Play'
    />
  );
}

const Pause = () => {
  const dispatch = useDispatch()
  return (
    <TimerButton
      onClick={() => { dispatch(timer.pauseTimer()) }}
      icon='pause'
      title='Pause'
    />
  );
}

const Reset = () => {
  const dispatch = useDispatch()
  return (
    <TimerButton
      onClick={() => { dispatch(timer.resetTimer()) }}
      icon='reset'
      title='Reset'
    />
  );
}

const Stop = () => {
  const dispatch = useDispatch()
  return (
    <TimerButton
      onClick={() => { dispatch(timer.stopTimer()) }}
      icon='stop'
      title='Stop'
    />
  );
}

export const ButtonsContainer = () => {
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