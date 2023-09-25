import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      const category = action.payload;
      if (state.includes(category)) {
        const index = state.findIndex((cat) => cat === category);
        state.splice(index, 1);
      } else {
        state.push(category);
      }
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
