import { api } from "../api/apiSlice";

const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // * Get All Course
    getAllCourse: builder.query({
      query: (arg) => ({
        url: `/course`,
        method: "GET",
        params: arg,
      }),
    }),
    // * Get Single Course
    getSingleCourse: builder.query({
      query: (id) => ({
        url: `/course/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCourseQuery, useGetSingleCourseQuery } = courseApi;
