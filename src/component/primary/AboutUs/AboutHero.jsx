/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/AboutUs/AboutHero.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Sunday, February 4th 2024, 9:53:13 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import { motion } from "framer-motion";

import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextAnimate, varFadeInRight, varWrapEnter } from "../../shared/animate";

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: "url(static/overlay.svg), url(static/about/hero.jpg)",
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    height: 560,
    padding: 0,
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    position: "absolute",
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: "relative", height: "100%" }}>
        <ContentStyle>
          <TextAnimate text="Who" sx={{ color: "primary.main" }} variants={varFadeInRight} />
          <br />
          <Box sx={{ display: "inline-flex", color: "#ddd" }}>
            <TextAnimate text="we" sx={{ mr: 2 }} />
            <TextAnimate text="are?" />
          </Box>

          <motion.div variants={varFadeInRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 5,
                color: "#ddd",
                fontWeight: "fontWeightMedium",
              }}
            >
              Let's work together and
              <br /> make awesome site easily
            </Typography>
          </motion.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
