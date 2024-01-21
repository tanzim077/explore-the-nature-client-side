/*
 * File           : store.js
 * Project        : explore-the-nature-client-side
 * Created Date   : Mo 22 Jan 2024 12:29:07
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

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/user.api.slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
