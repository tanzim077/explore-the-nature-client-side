/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/SignUp/SignUp.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Sunday, January 21st 2024, 3:36:26 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material/styles";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";

import { useRouter } from "../router/hooks";
// import Iconify from "../../iconify/iconify";

// TODO remove, this demo shouldn't need to reset the theme.
import { Helmet } from "react-helmet-async";
import SignupFormView from "../component/primary/SignUp/SignupFormView";
import Iconify from "../component/shared/iconify";

export default function SignUp() {
  const defaultTheme = createTheme();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    router.push("/dashboard");
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="name" label="Full Name" />

        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link
          onClick={() => navigate("/forget-password")}
          variant="subtitle2"
          underline="hover"
          sx={{ cursor: "pointer" }}
        >
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" color="inherit" onClick={handleClick}>
        Signup
      </LoadingButton>
    </>
  );

  return (
    <>
      <Helmet>
        <title> Sign up | Explore the Nature </title>
      </Helmet>
      <Box sx={{ py: "5%" }}>
        <SignupFormView />
      </Box>
    </>
  );
}
