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
import Page from "../../shared/Page/page";
import AboutHero from "./AboutHero";
import AboutVision from "./AboutVision";
import AboutWhat from "./AboutWhat";

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
      {/* <Box
        sx={{
          my: 5,
          textAlign: "center",
          px: 10,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Explor the Nature</Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod, suscipit, aperiam totam autem culpa cum
          eveniet dolorum quasi est perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus facere omnis
          facilis rerum? Ab eum beatae nobis reiciendis, qui temporibus aliquid, nesciunt velit sed quam recusandae
          necessitatibus, tempora maxime. Repellendus incidunt, maxime labore dolorum eos aperiam unde? At veritatis
          nesciunt eos quas cupiditate blanditiis est quam maiores, amet, soluta exercitationem voluptatum, veniam
          assumenda? Ratione perferendis officiis deserunt nostrum aspernatur sed asperiores! Earum sunt placeat ducimus
          sint, deleniti amet esse saepe voluptatem commodi laudantium quibusdam repellat nobis libero at consectetur
          adipisci ipsa.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt libero reprehenderit cum sint fugit
          cumque temporibus modi facere eveniet amet obcaecati ducimus harum velit maxime vel qui voluptatibus quam odio
          corrupti saepe, voluptas dolorum quidem tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
          ullam impedit velit quo, corporis ducimus numquam dignissimos inventore maiores. Nam deleniti itaque nostrum
          neque dolorum dolores, aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo ut nisi
          distinctio sunt nihil est blanditiis perferendis eveniet nesciunt! Nostrum, voluptatum eveniet repellat vel
          officia deleniti tempore voluptatibus perferendis esse eaque temporibus porro? Aspernatur beatae deleniti illo
          autem!
        </p>
      </Box>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact With Us</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio beatae ducimus magni nobis culpa praesentium
          velit expedita quae, corrupti, pariatur inventore laboriosam consectetur modi impedit error, repudiandae
          obcaecati doloribus.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "white" }} align="center">
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@exp.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box> */}
    </>
  );
};

export default AboutUs;
