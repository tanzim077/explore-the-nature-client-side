/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/SignUp/SignUp.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Sunday, January 21st 2024, 3:36:26 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';

import { useForm } from 'react-hook-form';
import { useCreateUserMutation } from '../../../redux/api/user.api.slice';
import { bgGradient } from '../../../theme/css';
import FormInput from '../../shared/formInput';

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignupFormView() {
  const defaultTheme = createTheme();
  const [createUser] = useCreateUserMutation();
  const navigate = useNavigate();

  const FORM_SCHEMA = {
    name: { required: 'Full Name is required' },
    email: { required: 'Email is required' },
    password: {
      required: 'Password is required',
      minLength: {
        value: 6,
        message: 'Very short password',
      },
    },
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const theme = useTheme();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data);
  };

  const renderForm = (
    <>
      <form autoComplete='on' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FormInput
            margin='dense'
            name='name'
            control={control}
            rules={FORM_SCHEMA.name}
            errors={errors}
            label='Full Name'
            fullWidth
          />
          <FormInput
            type='email'
            margin='dense'
            name='email'
            control={control}
            rules={FORM_SCHEMA.email}
            errors={errors}
            label='Email'
            fullWidth
          />
          <FormInput
            type='password'
            margin='dense'
            name='password'
            control={control}
            rules={FORM_SCHEMA.password}
            errors={errors}
            label='Password'
            fullWidth
          />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='flex-end' sx={{ my: 3 }}>
          <Link
            onClick={() => navigate('/forget-password')}
            variant='subtitle2'
            underline='hover'
            sx={{ cursor: 'pointer' }}
          >
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size='large'
          type='submit'
          variant='contained'
          color='inherit'
          // onClick={(e) => handleClick(e)}
        >
          Signup
        </LoadingButton>
      </form>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_42.jpg',
        }),
        height: 1,
      }}
    >
      {/* <Logo
        sx={{
          position: "fixed",
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      /> */}

      <Stack alignItems='center' justifyContent='center' sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant='cst_h4'>Create an Account</Typography>
          <Typography variant='body2' sx={{ mt: 2, mb: 5 }}>
            Already have an account?
            <Link onClick={() => navigate('/sign-in')} variant='subtitle2' sx={{ ml: 0.5, cursor: 'pointer' }}>
              Login
            </Link>
          </Typography>
          {/* <SocialMediaLogin/>
          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider> */}
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
