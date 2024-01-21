import { api } from "../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // * Sing Up
    signUp: builder.mutation({
      query: (data) => ({
        url: "users/signup",
        method: "POST",
        body: data,
      }),
    }),

    // * Login
    logIn: builder.mutation({
      query: (data) => ({
        url: "users/login",
        method: "POST",
        body: data,
      }),
    }),
    // * Enroll
    enroll: builder.mutation({
      query: (id) => ({
        url: "users/enroll",
        method: "PUT",
        body: id,
      }),
      invalidatesTags: ["course"],
    }),
    // * Enroll
    myCourse: builder.query({
      query: () => ({
        url: "users/my-course",
        method: "GET",
      }),
      providesTags: ["course"],
    }),
  }),
});

export const {
  useLogInMutation,
  useSignUpMutation,
  useEnrollMutation,
  useMyCourseQuery,
} = authApi;
