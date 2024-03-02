import { configureStore } from "@reduxjs/toolkit";
import numberChoice from "./Slice";

export const store = configureStore({
  reducer: {
    number: numberChoice,
  },
});
