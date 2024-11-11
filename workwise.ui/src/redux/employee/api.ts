import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../apiService.ts";
import { HTTP_METHODS } from "../../constants.ts";
import { EMPLOYEES } from "../../helpers/url.ts";

export const TAGS = {
  EMPLOYEE: "EMPLOYEE" as const,
};

export const employeesApi = createApi({
  reducerPath: "employeesApi",
  baseQuery,
  tagTypes: [TAGS.EMPLOYEE],
  endpoints: (builder) => ({
    // getAllEmployees
    getAllEmployees: builder.query({
      query: () => ({ url: `${EMPLOYEES}` }),
      providesTags: [TAGS.EMPLOYEE],
    }),

    // getEmployeeById
    getEmployeeById: builder.query({
      query: (id: string) => ({
        url: `${EMPLOYEES}/${id}`,
      }),
      providesTags: [TAGS.EMPLOYEE],
    }),

    // createEmployee
    createEmployee: builder.mutation({
      query: (employee: {
        firstName: string;
        lastName: string;
        email: string;
        dateOfBirth: string;
        salary: number;
        departmentId: string;
      }) => ({
        url: `${EMPLOYEES}`,
        method: HTTP_METHODS.POST,
        body: employee,
      }),
      invalidatesTags: [TAGS.EMPLOYEE],
    }),

    // updateEmployee
    updateEmployee: builder.mutation({
      query: ({
        id,
        employee,
      }: {
        id: string;
        employee: {
          firstName: string;
          lastName: string;
          email: string;
          dateOfBirth: string;
          salary: number;
          departmentId: string;
        };
      }) => ({
        url: `${EMPLOYEES}/${id}`,
        method: HTTP_METHODS.PUT,
        body: employee,
      }),
      invalidatesTags: [TAGS.EMPLOYEE],
    }),

    // deleteEmployee
    deleteEmployee: builder.mutation({
      query: (id: string) => ({
        url: `${EMPLOYEES}/${id}`,
        method: HTTP_METHODS.DELETE,
      }),
      invalidatesTags: [TAGS.EMPLOYEE],
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useGetEmployeeByIdQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeesApi;
