import { RouteObject } from "react-router-dom";
import { Suspense } from "react";
import { Departments, Employees, HomePage } from "./routeElements.ts";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={"Loading Home Page"}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "departments",
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Departments />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "employees",
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Employees />
          </Suspense>
        ),
      },
      { path: "new", element: <>New emp</> },
      { path: "update/:id", element: <>update</> },
    ],
  },
];
