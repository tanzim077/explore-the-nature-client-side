/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/AboutUs/AboutVision.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Monday, February 5th 2024, 12:02:32 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */

import { Box, Container, Grid, Typography } from "@mui/material";
import { MotionInView, varFadeIn, varFadeInUp } from "../../shared/animate";

// ----------------------------------------------------------------------

export default function AboutVision() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Box
        sx={{
          mb: 10,
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <img src="/static/about/vision.jpg" alt="about-vision" />

        <Box
          sx={{
            bottom: { xs: 24, md: 80 },
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            position: "absolute",
            justifyContent: "center",
          }}
        >
          {["logo_amazon", "logo_hbo", "logo_ibm", "logo_lya", "logo_spotify", "logo_netflix"].map((logo) => (
            <MotionInView key={logo} variants={varFadeIn}>
              <Box
                component="img"
                src={`/static/about/${logo}.svg`}
                sx={{
                  m: { xs: 1.5, md: 3 },
                  height: { xs: 24, md: 32 },
                }}
              />
            </MotionInView>
          ))}
        </Box>
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
