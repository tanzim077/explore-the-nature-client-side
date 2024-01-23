/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/EventDetails/EventDetails.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Saturday, January 20th 2024, 9:20:22 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
const EventDetails = ({ event }) => {
  return (
    <>
      <Box sx={{ px: 6, py: 2 }}>
        <Typography variant="h4">Event Details</Typography>
        <br />
        <Box sx={{ display: "flex", justifyContent: "space-between", pr: 20 }}>
          <Typography variant="h5">Event Name: {event}</Typography>
          <Typography variant="h5">Event Date: </Typography>
        </Box>
        <br />
        <Box sx={{ display: "flex", justifyContent: "", gap: 12 }}>
          <img
            src="https://images.unsplash.com/photo-1596265371388-43edbaadab94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVtbXl8ZW58MHx8MHx8fDA%3D"
            alt="test"
            style={{ width: "680px", height: "450px", borderRadius: "10px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h5">Event Description: </Typography>
              <Typography variant="h5">Event Time:</Typography>
              <Typography variant="h5">Event Location: </Typography>
              <Typography variant="h5">Event Organizer: </Typography>
              <Typography variant="h5">Event Contact: </Typography>
              <Typography variant="h5">Event Contact Email: </Typography>
              <Typography variant="h5">Event Contact Phone: </Typography>
              <Typography variant="h5">Event Contact Website: </Typography>
            </Box>
            <br />
            <Box>
              <Button>Join in this Event</Button>
            </Box>
          </Box>
        </Box>
        <br />

        <Box sx={{ pr: 120 }}>
          <Typography variant="h5">Event Details: </Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dicta molestiae perspiciatis atque
            repellat tenetur excepturi. A tempora quaerat commodi ex quisquam, tempore, nostrum cum reiciendis hic dolor
            enim blanditiis rerum laboriosam amet itaque totam porro sit in provident minus! Veritatis aut, pariatur nam
            sequi iusto vel deserunt. Nostrum, optio
          </Typography>
        </Box>

        <br />
      </Box>
    </>
  );
};

export default EventDetails;
