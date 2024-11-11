import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../apiService.ts";
import { DEPARTMENTS } from "../../helpers/url.ts";
import { HTTP_METHODS } from "../../constants.ts";

export const TAGS = {
  DEPARTMENT: "DEPARTMENT" as const,
};
export const departmentsApi = createApi({
  reducerPath: "departmentsApi",

  baseQuery,
  tagTypes: [TAGS.DEPARTMENT],
  endpoints: (builder) => ({
    //getAll
    getAllDepartments: builder.query({
      query: () => ({ url: `${DEPARTMENTS}`, providesTags: [TAGS.DEPARTMENT] }),
    }),
    getDepartmentById: builder.query({
      query: ({ id }) => ({
        url: `${DEPARTMENTS}/${id}`,
      }),
      providesTags: [TAGS.DEPARTMENT],
    }),

    createDepartment: builder.mutation({
      query: (department: { code: string; name: string }) => ({
        url: `${DEPARTMENTS}`,
        method: HTTP_METHODS.POST,
        body: department,
      }),
      invalidatesTags: [TAGS.DEPARTMENT],
    }),

    updateDepartment: builder.mutation({
      query: ({
        id,
        department,
      }: {
        id: string;
        department: { code: string; name: string };
      }) => ({
        url: `${DEPARTMENTS}/${id}`,
        method: HTTP_METHODS.PUT,
        body: department,
      }),
      invalidatesTags: [TAGS.DEPARTMENT],
    }),
    deleteDepartment: builder.mutation({
      query: (id: string) => ({
        url: `${DEPARTMENTS}/${id}`,
        method: HTTP_METHODS.DELETE,
      }),
      invalidatesTags: [TAGS.DEPARTMENT],
    }),
  }),
});
export const {
  useGetAllDepartmentsQuery,
  useCreateDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentsApi;
