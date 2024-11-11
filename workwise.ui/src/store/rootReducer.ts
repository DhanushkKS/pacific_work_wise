import { combineReducers } from "@reduxjs/toolkit";
import { departmentsApi } from "../redux/department/api.ts";
import { employeesApi } from "../redux/employee/api.ts";

export const rootReducer = combineReducers({
  [departmentsApi.reducerPath]: departmentsApi.reducer,
  [employeesApi.reducerPath]: employeesApi.reducer,
  //
});
