import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import { localStorageMiddleware, loadState } from "./localStorageMiddleware";

const preloadedState = {
  form: {
    submissions: loadState() || [],
  },
};

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
