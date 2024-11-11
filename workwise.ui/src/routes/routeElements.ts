import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/Home"));
//Departments
export const Departments = lazy(() => import("../pages/Departments"));
export const CreateDepartment = lazy(
  () => import("../pages/Departments/create"),
);
