import { configureStore } from "@reduxjs/toolkit";
import Slice from "./CreateSlice";

const Store = configureStore({
  reducer: {
    user: Slice,
  },
});
export default Store;
