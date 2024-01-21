import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFromLocalStorage } from "../../utils/local-storage";
let accessToken;
if (typeof window !== "undefined") {
  accessToken = getFromLocalStorage("accessToken");
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://alemeno-server-seven.vercel.app/api",
    prepareHeaders: (headers) => {
      if (accessToken !== null) {
        headers.set("authorization", accessToken);
        return headers;
      }
    },
  }),
  tagTypes: ["user", "course"],
  endpoints: () => ({}),
});
