/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/shared/Skeleton/CardSketeton.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Monday, January 22nd 2024, 2:10:07 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import { Button, CardActionArea, CardActions, Skeleton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const CardSkeleton = () => {
  return (
    <Card sx={{ minWidth: "390px", display: "flex", m: 2 }}>
      <CardActionArea>
        <Skeleton>
          <CardMedia sx={{ minHeight: "400px" }} component={"img"} src={""} alt={""} />
        </Skeleton>
        <CardContent>
          <Skeleton width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </CardContent>
        <CardActions>
          <Skeleton width="40%">
            <Button size="small">Share</Button>
          </Skeleton>
          <Skeleton width="40%">
            <Button size="small">Learn More</Button>
          </Skeleton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default CardSkeleton;
