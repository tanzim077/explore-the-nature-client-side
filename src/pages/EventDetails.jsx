/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/EventDetails/EventDetails.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Saturday, January 20th 2024, 9:20:22 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import Editor from "../component/Lexical/Editor";
import { useGetEventQuery } from "../redux/api/event.api.slice";
import { fDateTime } from "../utils/format-time";

const EventDetails = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  let { id } = useParams();
  const { data: event, isLoading, isError } = useGetEventQuery({ id });

  return (
    !isLoading && (
      <>
        <Box sx={{ px: 16, py: 2 }}>
          <Typography variant="h4">Details of {event.title}</Typography>
          <br />
          <Box sx={{ display: "flex", justifyContent: "space-between", pr: 20 }}>
            <Typography variant="h5">Event Name: {event.title}</Typography>
            <Typography variant="h5">Event Date: {fDateTime(event.startDateAndTime)}</Typography>
          </Box>
          <br />

          <Box sx={{ display: "flex", justifyContent: "", gap: 12 }}>
            <img
              src={event.coverImages[0]}
              alt="test"
              style={{ width: "680px", height: "550px", borderRadius: "10px" }}
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
                <Typography variant="h5">Event Description:{event.description} </Typography>
                <Typography variant="h5">
                  Event Time: {fDateTime(event.startDateAndTime)} to {fDateTime(event.endDateAndTime)}
                </Typography>
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
            <Typography variant="h5">
              Event Details:
              <EditIcon sx={{ cursor: "pointer" }} onClick={handleEdit} />
            </Typography>

            {isEdit ? <Editor /> : <Typography variant="h6">{event.description}</Typography>}
          </Box>

          <br />
        </Box>
      </>
    )
  );
};

export default EventDetails;
