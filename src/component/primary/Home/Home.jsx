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
import { useGetAllEventsQuery } from "../../../redux/api/event.api.slice";
import EventCard from "../../shared/EventCard/EventCard";
import Footer from "../../shared/Footer/Footer";
import CardSkeleton from "../../shared/Skeleton/CardSkeleton";
import AboutUs from "../AboutUs/AboutUs";
const Home = () => {
  const { data: events, isLoading, isError } = useGetAllEventsQuery();

  return (
    <>
      <br />
      <Box>
        <Typography variant="cst_h3" textAlign="center">
          All Upcoming Events
        </Typography>

        <br />
        <Grid container gap={0} spacing={0}>
          {events?.map((event) => (
            <Grid xs={3} key={event._id} sx={{ display: "flex", justifyContent: "center", pb: 4 }}>
              {isLoading ? <CardSkeleton /> : <EventCard event={event} />}
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
