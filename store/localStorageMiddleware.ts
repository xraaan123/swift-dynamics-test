import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { clearSubmissions } from "./formSlice";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    if (clearSubmissions.match(action)) {
      localStorage.removeItem("formState");
    } else {
      const state = store.getState() as RootState;
      localStorage.setItem("formState", JSON.stringify(state.form.submissions));
    }
    return result;
  };

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("formState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
