import React from 'react';

import { Container } from 'components/atoms';
import {
  SessionIndicator,
  Timer,
  ButtonsContainer,
  TogglersContainer,
} from 'components/organisms';

const Home = () => {
  return (
    <Container>
      <SessionIndicator />
      <Timer/>
      <ButtonsContainer />
      <TogglersContainer />
    </Container>
  );
};

export { Home };
