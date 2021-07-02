import {
  themes,
  THEME_TOGGLE_MODE,
  THEME_SET_DEFAULT,
  THEME_SET_DRACULA,
  THEME_SET_NORD,
} from './constants';

const initialState = {
  palette: themes.defaultTheme.light,
  variants: themes.defaultTheme,
  darkMode: false,
};

export const reducer = (
  state = initialState,
  action,
) => {
  const { variants, darkMode } = state;

  switch(action.type) {
    case THEME_TOGGLE_MODE: return {
      ...state,
      palette: (!darkMode) ? variants.dark : variants.light,
      darkMode: !darkMode,
    };
    
    case THEME_SET_DEFAULT: return {
      ...state,
      palette: (darkMode) ? action.variants.dark : action.variants.light,
      variants: action.variants,
    };
    
    case THEME_SET_DRACULA: return {
      ...state,
      palette: (darkMode) ? action.variants.dark : action.variants.light,
      variants: action.variants,
    };
    
    case THEME_SET_NORD: return {
      ...state,
      palette: (darkMode) ? action.variants.dark : action.variants.light,
      variants: action.variants,
    };
    
    default: return state;
  }
};
