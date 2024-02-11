/*
 * File           : event.api.slice.js
 * Project        : explore-the-nature-client-side
 * Created Date   : Mo 22 Jan 2024 01:53:01
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

import { apiSlice } from "./user.api.slice";

const eventsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllEvents: build.query({
      query: () => "/event/get-all-events",
    }),

    getEvent: build.query({
      query: ({ id }) => `/event/get-event/${id}`,
    }),

    updateEvent: build.mutation({
      query: ({ id, data }) => ({
        url: `/event/update-event/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteEvent: build.mutation({
      query: ({ id }) => ({
        url: `/event/delete-event/${id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllEventsQuery, useGetEventQuery } = eventsApi;
