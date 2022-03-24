import { createSlice } from '@reduxjs/toolkit';
import { defaultTheme, dracula, nord } from './constants';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
      palette: defaultTheme.light,
      light: defaultTheme.light,
      dark: defaultTheme.dark,
      darkMode: false,
    },
    reducers: {
      toggleMode(state) {
        state.palette = (!state.darkMode) ? state.dark : state.light;
        state.darkMode = !state.darkMode;
      },
      setDefault: (state) => {
        state.palette = (state.darkMode)
          ? defaultTheme.dark
          : defaultTheme.light;
        state.dark = defaultTheme.dark;
        state.light = defaultTheme.light;
      },
      setDracula: (state) => {
        state.palette = (state.darkMode)
          ? dracula.dark
          : dracula.light;
        state.dark = dracula.dark;
        state.light = dracula.light;
      },
      setNord: (state) => {
        state.palette = (state.darkMode)
          ? nord.dark
          : nord.light;
        state.dark = nord.dark;
        state.light = nord.light;
      },
    },
});

export const {
  toggleMode,
  setDefault,
  setDracula,
  setNord,
} = themeSlice.actions;

export default themeSlice.reducer;