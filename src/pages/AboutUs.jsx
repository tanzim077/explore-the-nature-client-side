/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/AboutUs/AboutUs.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Saturday, January 20th 2024, 1:33:37 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import AboutHero from "../component/primary/AboutUs/AboutHero";
import AboutVision from "../component/primary/AboutUs/AboutVision";
import AboutWhat from "../component/primary/AboutUs/AboutWhat";
import Page from "../component/shared/Page/page";

export const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));
const AboutUs = () => {
  return (
    <>
      <RootStyle title="About us | Explore the Nature">
        <AboutHero />
        <AboutWhat />
        <AboutVision />
        <Divider orientation="vertical" sx={{ my: 10, mx: "auto", width: 2, height: 40 }} />
        {/* <AboutTeam /> */}
      </RootStyle>
    </>
  );
};

export default AboutUs;
