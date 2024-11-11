import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer.js";
import { rootMiddleware } from "./rootMiddleware.js";
import { useDispatch as useReduxDispatch } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([...rootMiddleware]),
});
export const useDispatch = () => useReduxDispatch();
