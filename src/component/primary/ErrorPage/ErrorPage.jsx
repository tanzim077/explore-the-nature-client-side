/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/ErrorPage/ErrorPage.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Saturday, January 20th 2024, 8:38:12 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import Link from "@mui/material/Link";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
              alignItems: "center",
        height: "80vh",
      }}
    >
      <Typography variant="cst_h1" textAlign="center">
        404
      </Typography>
      <Typography variant="cst_h5" textAlign="center">
        Page Not Found
      </Typography>
      <Link href="/" variant="cst_h6" textAlign="center">
        Go Back Home
      </Link>
    </Box>
  );
};

export default ErrorPage;
