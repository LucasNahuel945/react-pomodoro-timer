const THEME_TOGGLE_MODE = 'THEME_TOGGLE_MODE';
const THEME_SET_DEFAULT = 'THEME_SET_DEFAULT';
const THEME_SET_DRACULA = 'THEME_SET_DRACULA';
const THEME_SET_NORD = 'THEME_SET_NORD';

const defaultTheme = {
  dark: {
    background: '#acacac22',
    body: '#303a52',
    disabled: '#ffffff55',
    foreground: '#ffffff',
    primary: '#3f51b5',
  },
  light: {
    background: '#ffffff',
    body: '#f1f1f1',
    disabled: '#00000055',
    foreground: '#000000',
    primary: '#3f51b5',
  },
};

const dracula = { 
  dark: {
    background: '#44475a',
    body: '#282a36',
    primary: '#50fa7b',
    foreground: '#f8f8f2',
    disabled: '#6272a4',
  },
  light: {
    background: '#f8f8f2',
    body: '#f1f1f1',
    primary: '#40ea6b',
    foreground: '#282a36',
    disabled: '#bd93f9',
  },
};

const nord = {
  dark: {
    background: '#4C566A',
    body: '#3B4252',
    disabled: '#D8DEE9aa',
    foreground: '#D8DEE9',
    primary: '#81A1C1',
  },
  light: {
    background: '#ECEFF4',
    body: '#D8DEE9',
    disabled: '#4C566A55',
    foreground: '#4C566A',
    primary: '#81A1C1',
  },
};

const themes = {
  defaultTheme,
  dracula,
  nord,
};

export {
  themes,
  THEME_TOGGLE_MODE,
  THEME_SET_DEFAULT,
  THEME_SET_DRACULA,
  THEME_SET_NORD,
};
