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
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const token = Cookies.get('token');
console.log(token);
// console.log('🚀 ~ tk:', tk);

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1/` }),
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users/get-all-users',
    }),
    getUserByToken: builder.query({
      query: () => 'users/get-user-by-token',
      headers: {
        // Set the token in the Authorization header
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // Add other headers if needed
      },
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: 'users/create-user',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: 'users/log-in',
        method: 'POST',
        body,
        credentials: 'include',
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByTokenQuery, useCreateUserMutation, useLoginMutation } = apiSlice;
