import { configureStore } from "@reduxjs/toolkit";
import { reducer as basket } from "./reducers";
const store = configureStore({
  reducer: {
    basket,
  },
});

export default store;
