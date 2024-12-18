import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'dlcounter',
  initialState: {
    value: {
      pausecommercial: 0,
      pausecharacter: 0,
      playcommercial: 0,
      playcharacter: 0,
      dlcommercial: 0,
      dlcharacter: 0,
      vresume: 0,
      dlresume: 0,
    },
  },
  reducers: {
    addCommercial: (state) => {
      state.value = {
        ...state.value,
        playcommercial: state.value.playcommercial + 1,
      };
    },
    addCharacter: (state) => {
      state.value = {
        ...state.value,
        playcharacter: state.value.playcharacter + 1,
      };
    },
    pauseCommercial: (state) => {
      state.value = {
        ...state.value,
        pausecommercial: state.value.pausecommercial + 1,
      };
    },
    pauseCharacter: (state) => {
      state.value = {
        ...state.value,
        pausecharacter: state.value.pausecharacter + 1,
      };
    },
    DLCommercial: (state) => {
      state.value = {
        ...state.value,
        dlcommercial: state.value.dlcommercial + 1,
      };
    },
    DLCharacter: (state) => {
      state.value = {
        ...state.value,
        dlcharacter: state.value.dlcharacter + 1,
      };
    },
    VResume: (state) => {
      state.value = {
        ...state.value,
        vresume: state.value.vresume + 1,
      };
    },
    DLResume: (state) => {
      state.value = {
        ...state.value,
        dlresume: state.value.dlresume + 1,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCommercial,
  addCharacter,
  pauseCommercial,
  pauseCharacter,
  DLCommercial,
  DLCharacter,
  VResume,
  DLResume,
} = counterSlice.actions;

export default counterSlice.reducer;
