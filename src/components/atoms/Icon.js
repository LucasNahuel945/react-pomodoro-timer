import React from 'react';
import PropTypes from 'prop-types';

import Down from '@material-ui/icons/ExpandMore';
import Up from '@material-ui/icons/ExpandLess';
import Menu from '@material-ui/icons/Menu';
import Moon from '@material-ui/icons/NightsStayTwoTone';
import Palette from '@material-ui/icons/PaletteTwoTone';
import Pause from '@material-ui/icons/PauseTwoTone';
import Play from '@material-ui/icons/PlayArrowTwoTone';
import Reset from '@material-ui/icons/RefreshTwoTone';
import Stop from '@material-ui/icons/StopTwoTone';
import Sun from '@material-ui/icons/Brightness7TwoTone';
import VisibilityOff from '@material-ui/icons/VisibilityOffTwoTone';
import VisibilityOn from '@material-ui/icons/VisibilityTwoTone';

import draculaSrc from 'assets/icons/dracula.png';
import nordSrc from 'assets/icons/nord.png';

const Icon = ({ set }) => {
  return (
    ((set === 'down') && <Down />) ||
    ((set === 'menu') && <Menu />) ||
    ((set === 'moon') && <Moon />) ||
    ((set === 'palette') && <Palette />) ||
    ((set === 'pause') && <Pause />) ||
    ((set === 'play') && <Play />) ||
    ((set === 'reset') && <Reset />) ||
    ((set === 'stop') && <Stop />) ||
    ((set === 'sun') && <Sun />) ||
    ((set === 'up') && <Up />) ||
    ((set === 'visibility-on') && <VisibilityOn />) ||
    ((set === 'visibility-off') && <VisibilityOff />) ||
    ((set === 'dracula') && <img src={draculaSrc} alt='dracula'/>)||
    ((set === 'nord') && <img src={nordSrc} alt='nord'/>)||
    <></>
  );
};

Icon.propTypes = { set: PropTypes.string };

export { Icon };
