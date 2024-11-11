import { RouteObject } from "react-router-dom";
import { Suspense } from "react";
import { CreateDepartment, Departments, HomePage } from "./routeElements.ts";

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
      {
        path: "new",
        element: (
          <Suspense>
            <CreateDepartment />
          </Suspense>
        ),
      },
      { path: "update/:id", element: <>update</> },
    ],
  },
  {
    path: "employees",
    children: [
      { index: true, element: <>All emp</> },
      { path: "new", element: <>New emp</> },
      { path: "update/:id", element: <>update</> },
    ],
  },
];
