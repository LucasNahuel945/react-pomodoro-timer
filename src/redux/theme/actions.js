import {
  themes,
  THEME_TOGGLE_MODE,
  THEME_SET_DEFAULT,
  THEME_SET_DRACULA,
  THEME_SET_NORD,
} from './constants';

export const toggleMode = () => ({
  type: THEME_TOGGLE_MODE,
});

export const setDefault = () => ({
  type: THEME_SET_DEFAULT,
  variants: themes.defaultTheme,
});

export const setDracula = () => ({
  type: THEME_SET_DRACULA,
  variants: themes.dracula,
});

export const setNord = () => ({
  type: THEME_SET_NORD,
  variants: themes.nord,
});
