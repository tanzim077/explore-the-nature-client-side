/*
 * File           : api.slice.js
 * Project        : explore-the-nature-client-side
 * Created Date   : Mo 22 Jan 2024 12:25:52
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Mon Jan 22 2024
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9999/api/v1/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users/get-all-users",
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;