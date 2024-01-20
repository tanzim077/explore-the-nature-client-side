/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/router/Router.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Friday, January 19th 2024, 11:01:36 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "../component/primary/AboutUs/AboutUs";
import ErrorPage from "../component/primary/ErrorPage/ErrorPage";
import EventDetails from "../component/primary/EventDetails/EventDetails";
import Home from "../component/primary/Home/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/event-details/:id",
      element: <EventDetails />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
