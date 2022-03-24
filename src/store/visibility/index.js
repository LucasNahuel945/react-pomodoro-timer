import { createSlice } from '@reduxjs/toolkit';

export const visibilitySlice = createSlice({
  name: 'visibility',
  initialState: {
    value: true
  },
  reducers: {
    toggleVisibility(state) {
      state.value = !state.value;
    },
    visibilityOff(state) {
      state.value = false;
    },
    visibilityOn(state) {
      state.value = true;
    },
  },
});

export const {
  toggleVisibility,
  visibilityOff,
  visibilityOn,
} = visibilitySlice.actions;

export default visibilitySlice.reducer;