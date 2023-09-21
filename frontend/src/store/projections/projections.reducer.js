import { createSlice } from "@reduxjs/toolkit";

export const PROJECTIONS_INITIAL_STATE = {
  projections: [],
};

export const projectionsSlice = createSlice({
  name: "projections",
  initialState: PROJECTIONS_INITIAL_STATE,
  reducers: {
    setProjections(state, action) {
      state.projections = action.payload;
    },
  },
});

export const { setProjections } = projectionsSlice.actions;

export const projectionsReducer = projectionsSlice.reducer;
