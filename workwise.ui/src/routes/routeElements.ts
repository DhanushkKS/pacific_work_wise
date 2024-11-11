import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/Home"));
//Departments
export const Departments = lazy(() => import("../pages/Departments"));

//Employees
export const Employees = lazy(() => import("../pages/Employee"));
