import { departmentsApi } from "../redux/department/api.ts";
import { employeesApi } from "../redux/employee/api.ts";

export const rootMiddleware = [
  departmentsApi.middleware,
  employeesApi.middleware,
];
