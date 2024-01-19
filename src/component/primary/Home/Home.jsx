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
import NavBar from "../../shared/NavBar/NavBar";
const Home = () => {
  return (
    <>
      <Box sx={{ mx: 0, height: "10vh" }}>
        <NavBar />
      </Box>
      <Box sx={{ height: "90vh" }}>
        <Typography variant="cst_h3" textAlign="center">
          All Upcoming Events
        </Typography>

        <br />
        <Grid sx={{ display: "flex" }} spacing={0} container gap={0}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Grid xs={3} key={item} sx={{ display: "flex", justifyContent: "center" }}>
              <EventCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
