import { configureStore } from "@reduxjs/toolkit";
import {getProductsSlice} from "./reducer";

export const store = configureStore({
  reducer: {
    app: getProductsSlice.reducer,
  },
});
