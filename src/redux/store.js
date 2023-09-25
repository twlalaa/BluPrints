import { configureStore } from "@reduxjs/toolkit";

//Slices
import categorySlice from "./slices/categorySlice";
import colorSlice from "./slices/colorSlice";
import sizeSlice from "./slices/sizeSlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    color: colorSlice,
    size: sizeSlice,
  },
});

export default store;
