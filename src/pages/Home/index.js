import React from 'react';

import { useRunTimer } from 'hooks';
import { Container } from 'components/atoms';
import {
  SessionIndicator,
  Timer,
  ButtonsContainer,
  TogglersContainer,
} from 'components/organisms';

export const Home = () => {
  useRunTimer();

  return (
    <Container>
      <SessionIndicator />
      <Timer/>
      <ButtonsContainer />
      <TogglersContainer />
    </Container>
  );
};

