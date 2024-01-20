/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/Home/Home.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Friday, January 19th 2024, 10:58:15 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import EventCard from "../../shared/EventCard/EventCard";
import Footer from "../../shared/Footer/Footer";
import NavBar from "../../shared/NavBar/NavBar";
import AboutUs from "../AboutUs/AboutUs";
const Home = () => {
  return (
    <>
      <br />
      <Box>
        <Typography variant="cst_h3" textAlign="center">
          All Upcoming Events
        </Typography>

        <br />
        <Grid container gap={0} spacing={0}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Grid xs={3} key={item} sx={{ display: "flex", justifyContent: "center", pb: 4 }}>
              <EventCard event={item}/>
            </Grid>
          ))}
        </Grid>
      </Box>
      <br />
      <Box>
        <Typography variant="cst_h3" textAlign="center">
          About Us
        </Typography>
        <br />
        <Box sx={{ px: 6 }}>
          <AboutUs />
        </Box>
      </Box>
      <br />
      <Box>
        <br />
        <Box sx={{ px: 0 }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Home;
