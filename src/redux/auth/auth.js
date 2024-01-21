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
    // * Login
    enroll: builder.mutation({
      query: (id) => ({
        url: "users/enroll",
        method: "PUT",
        body: id,
      }),
    }),
  }),
});

export const { useLogInMutation, useSignUpMutation, useEnrollMutation } =
  authApi;
