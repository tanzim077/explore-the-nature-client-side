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
import ErrorPage from "../component/primary/ErrorPage/ErrorPage";
import EventDetails from "../pages/EventDetails";
import AboutUs from "../pages/AboutUs";

import NavBar from "../component/shared/NavBar/NavBar";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

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
      path: "/sign-in",
      element: (
        <WithNavBar>
          <SignIn />
        </WithNavBar>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <WithNavBar>
          <SignUp />
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
