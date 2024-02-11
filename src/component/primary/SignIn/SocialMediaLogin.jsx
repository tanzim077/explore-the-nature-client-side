/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/SignIn/SocialMediaLogin.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Tuesday, January 23rd 2024, 8:23:02 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { alpha, useTheme } from "@mui/material/styles";
import React from "react";
import Iconify from "../../shared/iconify/iconify";

const SocialMediaLogin = () => {
  const theme = useTheme();

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
        >
          <Iconify icon="eva:google-fill" color="#DF3E30" />
        </Button>

        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
        >
          <Iconify icon="eva:facebook-fill" color="#1877F2" />
        </Button>

        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
        >
          <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
        </Button>
      </Stack>
    </>
  );
};

export default SocialMediaLogin;
