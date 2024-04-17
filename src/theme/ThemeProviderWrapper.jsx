/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/theme/ThemeProviderWrapper.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Saturday, January 20th 2024, 12:13:50 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */

import { ThemeProvider } from "@mui/material/styles";
import React from "react";

import darkTheme from "./dark.mui.theme";
import lightTheme from "./light.mui.theme";

const ThemeProviderWrapper = ({ children }) => {
  //   const { isLightTheme } = useSelector((state) => state.theme);
  const isLightTheme = true;
  return <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
