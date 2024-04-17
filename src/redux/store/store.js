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

import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/user.api.slice';
import authReducer from '../slices/auth.slice';
import notificationReducer from '../slices/notificationSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    notification: notificationReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// import { createStore, applyMiddleware, combineReducers, compose } from "redux";
// import thunk from "redux-thunk";

// // import notificationReducer from "../slices/notificationSlice";

// import postsReducer from "../reducers/postsReducer";
// import usersReducer from "../reducers/usersReducer";

// const rootReducer = combineReducers({
//   posts: postsReducer,
//   users: usersReducer,
// });

// const middlewareEnhancer = applyMiddleware(thunk);

// const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composedEnhancers = composeWithDevTools(middlewareEnhancer);

// const store = createStore(rootReducer, composedEnhancers);
