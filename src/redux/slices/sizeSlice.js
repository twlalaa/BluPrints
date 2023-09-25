import { createSlice } from "@reduxjs/toolkit";

const sizeSlice = createSlice({
  name: "size",
  initialState: [],
  reducers: {
    addSize: (state, action) => {
      const size = action.payload;
      if (state.includes(size)) {
        const index = state.findIndex((siz) => siz === size);
        state.splice(index, 1);
      } else {
        state.push(size);
      }
    },
  },
});

export const sizeActions = sizeSlice.actions;

export default sizeSlice.reducer;
