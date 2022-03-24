export const getCurrentTime = (state) => state.timer.current;
export const getTotalFocused = (state) => state.timer.totalFocused;
export const getTimer = (state) => state.timer;
export const getProgress = (state) => state.timer.progress;
export const getSession = (state) => state.timer.session; 

export const getPalette = (state) => state.theme.palette;
export const getIsDarkMode = (state) => state.theme.darkMode;

export const getVisibility = (state) => state.visibility;