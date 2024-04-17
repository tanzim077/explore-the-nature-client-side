/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/Home/Home.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Friday, January 19th 2024, 10:58:15 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EventCard from "../component/shared/EventCard/EventCard";
import Footer from "../component/shared/Footer/Footer";
import { useGetAllEventsQuery, useTestEventMutation } from "../redux/api/event.api.slice";
import { getAllNotifications } from "../redux/slices/notificationSlice";
import { RootStyle } from "./AboutUs";

const Home = () => {
  const { data: events, isLoading, isError } = useGetAllEventsQuery();
  const [testEvent] = useTestEventMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNotifications());
  }, []);
  const handleSubmit = () => {
    testEvent({});
  };
  return (
    <RootStyle title="Home | Explore the Nature">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outlined" color="primary" onClick={handleSubmit}>
          Test notification
        </Button>
      </Box>
      <br />
      <Box>
        <Typography variant="h3" textAlign="center">
          All Upcoming Events
        </Typography>

        <br />
        <Box sx={{ px: 12 }}>
          <Grid container spacing={3}>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              events?.map((event, index) => <EventCard key={event._id} event={event} index={index} />)
            )}
          </Grid>
        </Box>
      </Box>
      <br />
      <Box>
        <Typography variant="h3" textAlign="center">
          About Us
        </Typography>
        <br />
        <Box sx={{ px: 6 }}>{/* <AboutUs /> */}</Box>
      </Box>
      <br />
      <Box>
        <br />
        <Box sx={{ px: 0 }}>
          <Footer />
        </Box>
      </Box>
    </RootStyle>
  );
};

export default Home;
