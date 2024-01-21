/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/EventDetails/EventDetails.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Saturday, January 20th 2024, 9:20:22 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Button} from "@mui/material";
const EventDetails = ({ event }) => {
  return (
    <>
      <Box sx={{ px: 6, py: 2 }}>
        <Typography variant="cst_h4">Event Details</Typography>
        <br />
        <Box sx={{ display: "flex", justifyContent: "space-between", pr: 20 }}>
          <Typography variant="cst_h5">Event Name: {event}</Typography>
          <Typography variant="cst_h5">Event Date: </Typography>
        </Box>
        <br />
        <Box sx={{ display: "flex", justifyContent: "", gap: 12 }}>
          <img
            src="https://images.unsplash.com/photo-1596265371388-43edbaadab94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVtbXl8ZW58MHx8MHx8fDA%3D"
            alt=""
            style={{ width: "380px", height: "460px" }}
          />
          <Box>
            <Box>
              <Typography variant="cst_h5">Event Description: </Typography>
              <Typography variant="cst_h5">Event Time:</Typography>
              <Typography variant="cst_h5">Event Location: </Typography>
              <Typography variant="cst_h5">Event Organizer: </Typography>
              <Typography variant="cst_h5">Event Contact: </Typography>
              <Typography variant="cst_h5">Event Contact Email: </Typography>
              <Typography variant="cst_h5">Event Contact Phone: </Typography>
              <Typography variant="cst_h5">Event Contact Website: </Typography>
            </Box>
            <Box>
              <Button>Join in this Event</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EventDetails;
