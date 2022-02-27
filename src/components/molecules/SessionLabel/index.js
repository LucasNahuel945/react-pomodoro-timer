import React from 'react';

import { proptypes } from './proptypes';
import {
  ActiveItem,
  InactiveItem,
  SessionName,
} from './styles';

export const SessionLabel = ({ name, active }) => (
  (active)
    ? <ActiveItem shadows> 
        <SessionName> {name} </SessionName>
      </ActiveItem>
    : <InactiveItem shadows >
        <SessionName> {name} </SessionName>
      </InactiveItem>
);

SessionLabel.propTypes = proptypes;

