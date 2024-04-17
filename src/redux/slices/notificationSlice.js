/*
 * File           : syncServerSlice.js
 * Project        : wmpv2
 * Created Date   : Th 30 Mar 2023 11:05:44
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Thu Mar 30 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL + "/api/v1";

const initialState = {
  isLoading: false,
  notifications: [],
  latestUnreadNotifications: [],
  allUnreadNotifications: [],
  error: null,
};

export const getAllNotifications = createAsyncThunk("event/get-all-notifications", async () => {
  try {
    return await axios.get(`${url}/event/get-all-notifications/`);
  } catch (error) {
    console.log(error);
  }
});

// Clear all teams data from state

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    setNewNotification: (state, action) => {
      state.notifications = [action.payload, ...state.notifications];
      state.latestUnreadNotifications = [action.payload, ...state.latestUnreadNotifications];
      state.allUnreadNotifications = [action.payload, ...state.allUnreadNotifications];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllNotifications.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllNotifications.fulfilled, (state, action) => {
      state.isLoading = false;
      state.notifications = action.payload.data;
    });
    builder.addCase(getAllNotifications.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setNewNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
