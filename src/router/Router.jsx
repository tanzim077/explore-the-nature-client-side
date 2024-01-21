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
import NavBar from "../component/shared/NavBar/NavBar";

const Router = () => {
  // eslint-disable-next-line react/prop-types
  const WithNavBar = ({ children }) => {
    return (
      <>
        <NavBar />
        {children}
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <WithNavBar>
          <Home />
        </WithNavBar>
      ),
    },
    {
      path: "/about-us",
      element: (
        <WithNavBar>
          <AboutUs />
        </WithNavBar>
      ),
    },
    {
      path: "/event-details/:id",
      element: (
        <WithNavBar>
          <EventDetails />
        </WithNavBar>
      ),
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
