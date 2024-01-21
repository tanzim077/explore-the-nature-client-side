/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/shared/EventCard/EventCard.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Friday, January 19th 2024, 10:40:43 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */

import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function EventCard({ event }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
      <CardActionArea>
        <CardMedia
          sx={{ minHeight: "400px" }}
          component={"img"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9B7ufjFJOLyOSzG0izAqTCGiNNgNPn1sqQ&usqp=CAU"
          alt="test"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom component={"div"}>
            {"lorem ipsum"}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button onClick={() => navigate(`/event-details/${event}`)} size="small">
            Learn More
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
