import { RouteObject } from "react-router-dom";
import { Suspense } from "react";
import { HomePage } from "./routeElements.ts";

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
      { index: true, element: <>All Depts</> },
      { path: "new", element: <>New dep</> },
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
