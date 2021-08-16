import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks

// https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery
const baseQuery = fetchBaseQuery({
  baseUrl: "https://admin-page-api.herokuapp.com/api",
  //   prepareHeaders: Handle header
});

export const rtkClient = createApi({
  baseQuery: baseQuery,
  tagTypes: ["CovidApp"],
  endpoints: () => ({}),
});
