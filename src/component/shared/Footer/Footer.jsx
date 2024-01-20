/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/shared/Footer/Footer.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Saturday, January 20th 2024, 8:05:51 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import { Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            backgroundColor: "#000000",
            color: "#ffffff",
          }}
        >
          <p>
            © 2021 All rights reserved. Developed by {""}
            <a href="#" target="_blank" rel="noreferrer" style={{ color: "#ffffff" }}>
              Tanzim Ahmed
            </a>
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
